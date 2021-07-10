import React from 'react'
import { Box, Link } from '@material-ui/core'
import { useRouter } from 'next/router'

type Props = {
  userEmail?: string
  handleSignOut: () => void
}

const UserInfo: React.VFC<Props> = ({ userEmail, handleSignOut }) => {
  const router = useRouter()
  return (
    <Box>
      {userEmail && (
        <Box mt={2} ml={2}>
          <Box>ユーザー：{userEmail}</Box>
          <Box display={'flex'} justifyContent={'space-around'}>
            <Link
              onClick={() => router.push('/')}
              color={'secondary'}
              style={{ cursor: 'pointer' }}
            >
              トップページ
            </Link>
            <Link onClick={() => handleSignOut()} style={{ cursor: 'pointer' }} color={'secondary'}>
              ログアウト
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default UserInfo
