/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { AppConfigLayout, PageContainer } from '@tycoonsystems/tycoon-modules/internal'
import { pageDefaults } from '/app.config'
import { getServerSidePropsDefault } from '@tycoonsystems/tycoon-modules/utility.js'
import { getServerSidePropsFunc } from '/appServer/serverProps'
import { Menu } from '@tycoonsystems/tycoon-modules/menu/'

const pageName = 'reset'

export const page = props => {
    return (
        <React.Fragment>
            <PageContainer { ...props } pageName={pageName}>
                <Menu></Menu>
                <AppConfigLayout></AppConfigLayout>
            </PageContainer>
        </React.Fragment>
    )
}

export const getServerSideProps = async (context) => {
    let currentProps = await getServerSidePropsDefault(context, pageDefaults[pageName])
    return await getServerSidePropsFunc(currentProps, context)
}

export default page