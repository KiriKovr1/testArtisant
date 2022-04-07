import { useState, useMemo } from "react";
import axios from 'axios'

export type useRequestType = {
    loading: boolean,
    data: any,
    error: undefined | any
}

const useRequest = (url: string) => {
    const [status, setStatus] = useState<useRequestType>({
        loading: false,
        data: undefined,
        error: undefined
    })

    async function getRequest(url: string) {
        setStatus({ loading: true } as useRequestType)
        let ServerResponse: any

        try {
            ServerResponse = await axios.get(url)
            setStatus({
                loading: false,
                data: ServerResponse.data
            } as useRequestType)
        } catch (error) {
            setStatus({
                loading: false,
                error
            } as useRequestType)
        }
    }

    useMemo(() => {
        if (url) {
            getRequest(url)
        }
    }, [])

    return { ...status }
}

export default useRequest