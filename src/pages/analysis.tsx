import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'
import Auth from 'src/auth'
import { auth } from 'src/firebase'
import { Dashboard } from 'src/container/analysis/Dashboard'

const Analysis: React.VFC<{}> = ({}) => {
  const [user, setUser] = React.useState<any>(false)
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user))
  }, [])

  return (
    <Auth>
      {user ? (
        // <Box mt={2} ml={2}>
        //   <Box>ここは分析をするためのページであるのだ</Box>
        //   <Box>ユーザー：{user?.email}</Box>
        // </Box>
        <Dashboard />
      ) : (
        <Box style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <CircularProgress />
        </Box>
      )}
    </Auth>
  )
}

export default Analysis
