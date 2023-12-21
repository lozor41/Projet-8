import { useState, useEffect } from 'react'

const URL_LODGING = process.env.PUBLIC_URL + '/logements.json'

export const useGet = () => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(URL_LODGING)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [])

    return { isLoading, data, error }
}

export const useGetById = (id) => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(URL_LODGING)
            .then((res) => res.json())
            .then((data) => {
                const result = data.filter((item) => id === item.id)
                setData(result)
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [id])

    return { isLoading, data, error }
}
