import React, { useEffect, useCallback, useState, ReactElement } from 'react'
import { DeviceEventEmitter } from 'react-native'

import type { HostProps } from './types';

import { checkIsElementIsValid } from '../../utils';

const Host = ({ hostId }: HostProps) => {
    const [PortalComponent, setPortalComponent] = useState<ReactElement<any, any> | null>(null)

    const handleMountListener = useCallback((event) => {
        if (checkIsElementIsValid(event)) {
            setPortalComponent(event)
        }
    }, [])

    const handleUnmountListener = useCallback(() => {
        setPortalComponent(null)
    }, [])

    useEffect(() => {
        const mountSuscription = DeviceEventEmitter.addListener(hostId, handleMountListener)
        const umountSuscription = DeviceEventEmitter.addListener(`${hostId}:unmount`, handleUnmountListener)

        return () => {
            mountSuscription.remove()
            umountSuscription.remove()
        }
    }, [])

    return <>{PortalComponent}</>
}

export default Host