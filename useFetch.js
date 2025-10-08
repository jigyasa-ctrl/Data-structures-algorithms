import { useEffect, useState } from 'react';
export default function useFetch(url, options={}, dependencies=[]){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const fetchData = useCallback(async ()=> {
        if(!url) return
        setLoading(true)
        setError(null)
        try{
            const res = await fetch(url, options)
            if(!res.ok){
                throw new Error(`Something went wrong! error: ${res.status}`)
            } 
            const json = await res.json()
            setData(json)
        } catch(err) {
            setError(error.message || "Something went wrong")
        } finally{
            setLoading(false)
        }
        
    }, [url, JSON.stringify(options)])
    useEffect(() => {
        fetchData()
    }, [fetchData, dependencies])

    return {data, loading, error, refetch: fetchData}

}