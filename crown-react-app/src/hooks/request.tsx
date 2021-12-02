import { useState } from 'react'
import api from '../api/buildClient'

export default function useRequest({ method, url, body, onSuccess }: any ) {
  const [error, setError]: any = useState(null)


  const doRequest = async (props = {}) => {
    try {
      setError(null)
      const response = await api.request({ method, url, ...body, ...props})
      if (onSuccess) {
        onSuccess(response.data)
      }
      return response.data
    } catch (err) {
      setError(true)
    }
  }

  return { doRequest, error }
}