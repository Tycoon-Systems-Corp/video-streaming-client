import React from 'react'
import { IndexHello } from '/modules/presentation/hello/IndexHello'
import { AdminPanel, BeginStream, UsernameContainer, UserFeed, UserIcon, UserShop } from '/modules/profile'

const Module = props => {
    return (
        <div>
            <AdminPanel { ...props } />
            {
                props?.profileData?.user
                    ? <div>
                        <div className={`${props?.className ?? ''} flex wrap gap-p10 PagePadding pTop ProfilePage_ProfileContainer`}>
                            <UserIcon { ...props } />
                            <div className={`flex wrap gap-p5`} style={{ height: 'fit-content' }}>
                                <UsernameContainer { ...props } />
                                <BeginStream { ...props } />
                            </div>
                        </div>
                        <UserFeed { ...props } />
                        <div className='ProfilePage_Feed'>
                            <IndexHello { ...props } groupLabel={'Most Recent'} items={props?.videoData?.videos ?? []} tight={true} />
                        </div>
                        <UserShop { ...props } />
                    </div>
                    : null
            }
        </div>
    )
}

export default Module
