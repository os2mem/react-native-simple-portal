import { useEffect } from 'react'
import { DeviceEventEmitter } from 'react-native'

import type { PortalProps } from './types';

const Portal = ({ children, hostId }: PortalProps) => {

    useEffect(() => {
        if (hostId) {
            DeviceEventEmitter.emit(hostId, children)
        }

        return () => DeviceEventEmitter.emit(`${hostId}:unmount`, children)
    }, [children])

    return null
}

export default Portal