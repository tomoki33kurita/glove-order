import React from 'react'
import { Box } from '@material-ui/core'
import { auth } from 'src/firebase'
import { useRouter } from 'next/router'

const Analysis: React.VFC<{}> = ({}) => {
  console.log('中身', auth.currentUser)
  const router = useRouter()

  // ページへのアクセス者が、ログイン済みかどうかチェック
  React.useEffect(() => {
    !auth.currentUser && router.push('/signIn')
  }, [])

  return (
    <Box mt={2} ml={2}>
      <Box>ここは分析をするためのページであるのだ</Box>
    </Box>
  )
}

export default Analysis
