import React from 'react'
import { Box } from '@material-ui/core'
import { auth } from 'src/firebase'
import { useRouter } from 'next/router'

const Auth: React.FC<{}> = ({ children }) => {
  // ページへのアクセス者が、ログイン済みかどうかチェック
  const router = useRouter()
  React.useEffect(() => {
    !auth.currentUser && router.push('/signIn')
  }, [])

  return (
    <>
      <Box>{children}</Box>
    </>
  )
}

export default Auth
