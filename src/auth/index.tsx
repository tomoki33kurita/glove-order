import React from 'react'
import { auth } from 'src/firebase'
import { useRouter } from 'next/router'

const Auth: React.FC<{}> = ({ children }) => {
  const router = useRouter()
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/signIn')
      }
    })
  }, [])
  return <>{children}</>
}

export default Auth
