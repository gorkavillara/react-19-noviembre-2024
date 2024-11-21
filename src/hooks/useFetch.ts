import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url: string) => {
  const [data, setData] = useState<unknown | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data)
      })
      .catch(() => setError("error"))
      .finally(() => setLoading(false))
  }, [url])

  return {
    data,
    loading,
    error,
  }
}
