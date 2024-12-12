import React from 'react'
import WatchPageStyles from '/modules/streaming/watch/WatchPage.module.scss'


/**
 * Overlay ontop of video
 * @param {*} props 
 * @returns 
 */
const Module = props => {
    const [ useOverlayMatrix, setUseOverlayMatrix ] = React.useState({})
    const [ iteration, setIteration ] = React.useState(0)
    const doSetMuted = React.useCallback(e => {
        if (props?.handleSetMuted) {
            props.handleSetMuted(false)
        }
    })

    props._LocalEventEmitter.unsubscribe(`overlay-${props?.playerName}`)
    props._LocalEventEmitter.subscribe(`overlay-${props?.playerName}`, e => {
        if (e?.dispatch === 'update') {
            setIteration(iteration + 1)
            setUseOverlayMatrix(e.data)
        }
    })

    return (
        <div className={`${WatchPageStyles.overlayContainer} ${props.className} Overlay_Container`}>
            {
                props?.muted
                    ? <div style={{ position: 'absolute', left: '2.5%', top: '2.5%', zIndex: '30' }}>
                        <button className='overlay_button' style={{ fontWeight: 700, padding: '.25rem 2rem' }} onClick={doSetMuted}>Tap to unmute</button>
                    </div>
                    : null
            }
            <div className='MatrixOverlay_Container'>
                {
                    Object.entries(useOverlayMatrix).map((m, i) => {
                        const item = m?.[1][(props?.overlayMatrixState?.offset ?? 0) % m[1].length]
                        console.log(item)
                        if (item) {
                            return (
                                <div className={`MatrixOverlay_Section MatrixOverlay_Section_${m[0]}`} key={i}>
                                    <div className={`MatrixOverlay_Item MatrixOverlay_Item_${item?.domain}`}>
                                        {/* Handle the section timeline data as needed */}
                                        {
                                            item?.sectionType === 'text'
                                                ? <div className='MatrixOverlay_textContainer'>
                                                    {
                                                        item?.lead ?? item?.name
                                                            ? <div className='MatrixOverlay_lead'>{item.lead ?? item?.name}</div>
                                                            : null
                                                    }
                                                    {
                                                        item?.description
                                                            ? <div className='MatrixOverlay_description'>{item.description}</div>
                                                            : null
                                                    }
                                                    {
                                                        item?.password
                                                            ? <div className='MatrixOverlay_password'>{item.password}</div>
                                                            : null
                                                    }
                                                </div>
                                            : item?.sectionType === 'img'
                                                ? <div className='MatrixOverlay_clipContainer'>
                                                    {
                                                        item?.lead ?? item?.name
                                                            ? <div className='MatrixOverlay_lead'>{item.lead ?? item?.name}</div>
                                                            : null
                                                    }
                                                    {
                                                        item?.media
                                                            ? <div className='MatrixOverlay_img'>
                                                                <img src={`${item.media}`} />
                                                            </div>
                                                            : null
                                                    }
                                                </div>
                                            : null
                                        }
                                        <div></div>
                                    </div>
                                </div>
                            )
                        }
                        return ''
                    })
                }
            </div>
            <div className='shadowOverlay'></div>
        </div>
    )
}

export default Module