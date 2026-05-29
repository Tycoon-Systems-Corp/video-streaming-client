/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { pageDefaults, resolveVariables } from '/app.config'
import { getServerSidePropsDefault } from '@tycoonsystems/tycoon-modules/utility.js'
import { getServerSidePropsFunc } from '/appServer/serverProps'
import { checkSignedInFromCookie } from '@tycoonsystems/tycoon-modules/utility/onboarding/SignIn'

const pageName = 'feed'

const escapeXml = (value = '') => {
    return `${value}`
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
}

const buildXmlError = ({ status = 500, code = 'feed_error', message = 'Unknown error', detail = '' } = {}) => {
    return `<?xml version="1.0" encoding="UTF-8"?><feedError><status>${Number(status) || 500}</status><code>${escapeXml(code)}</code><message>${escapeXml(message)}</message><detail>${escapeXml(detail)}</detail></feedError>`
}

export const page = () => null

export const getServerSideProps = async context => {
    const currentProps = await getServerSidePropsDefault(context, pageDefaults[pageName], {}, true)
    await getServerSidePropsFunc(currentProps, context)

    const feedId = context?.query?.id
    const variables = resolveVariables()
    const signedIn = checkSignedInFromCookie(context?.req?.headers?.cookie ?? '') ?? {}
    const apiUrl = variables?.apiUrl ?? ''
    const identifier = signedIn?.identifier ?? null
    const hash = signedIn?.hash ?? null
    const dborigin = variables?.dborigin ?? null
    const domainKey = variables?.domainKey ?? null

    if (!feedId || !apiUrl) {
        context.res.statusCode = 400
        context.res.setHeader('Content-Type', 'application/xml; charset=utf-8')
        context.res.end(buildXmlError({
            status: 400,
            code: 'missing_input',
            message: 'Missing feed id or api url',
            detail: `feed=${feedId ? 'provided' : 'missing'}, apiUrl=${apiUrl ? 'provided' : 'missing'}`
        }))
        return { props: {} }
    }

    try {
        console.log("Fetching feed with id:", feedId, " for user:", identifier ?? 'not signed in')
        const response = await fetch(`${apiUrl}/p/getxmlfeed`, {
            method: 'POST',
            headers: {
                Accept: 'application/json, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                feed: `${feedId}`,
                identifier,
                hash,
                dborigin,
                domainKey
            })
        })

        const result = await response.json().catch(() => null)
        const feedUrl = result?.url ?? ''
        const ok = response.ok && result?.status === 'success' && !!feedUrl

        if (!ok) {
            context.res.statusCode = response.status || 502
            context.res.setHeader('Content-Type', 'application/xml; charset=utf-8')
            context.res.end(buildXmlError({
                status: response.status || 502,
                code: 'feed_url_unavailable',
                message: 'Could not resolve feed URL from getxmlfeed response.',
                detail: JSON.stringify(result ?? {})
            }))
            return { props: {} }
        }

        const xmlResponse = await fetch(feedUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/rss+xml, application/xml, text/xml, */*'
            }
        })
        const xmlText = await xmlResponse.text()

        if (!xmlResponse.ok) {
            context.res.statusCode = xmlResponse.status || 502
            context.res.setHeader('Content-Type', 'application/xml; charset=utf-8')
            context.res.end(buildXmlError({
                status: xmlResponse.status || 502,
                code: 'xml_fetch_failed',
                message: 'Failed to fetch XML from feed URL.',
                detail: feedUrl
            }))
            return { props: {} }
        }

        const xmlContentType = xmlResponse.headers.get('content-type') || 'application/rss+xml; charset=utf-8'
        context.res.statusCode = 200
        context.res.setHeader('Content-Type', xmlContentType)
        context.res.end(xmlText)
        return { props: {} }
    } catch (err) {
        context.res.statusCode = 500
        context.res.setHeader('Content-Type', 'application/xml; charset=utf-8')
        context.res.end(buildXmlError({
            status: 500,
            code: 'fetch_failed',
            message: 'Failed to fetch feed URL or XML payload.',
            detail: err?.message ?? 'Unknown server error'
        }))
        return { props: {} }
    }
}

export default page
