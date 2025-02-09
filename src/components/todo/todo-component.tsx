import { loadingTimeout } from '@/lib/loading-timeout'
import { useEffect, useState } from 'react'
import Loading from '../ui/loading'

export default function TodoComponent() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return loadingTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <>
      <div className="h-full border">
        {loading ? (
          <Loading className="h-full" />
        ) : (
          <div className="h-full border">
            <h1>dasdasd</h1>
          </div>
        )}
      </div>
    </>
  )
}
