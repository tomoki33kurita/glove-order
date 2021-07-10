import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'
import Auth from 'src/auth'
import { Dashboard } from 'src/container/analysis/Dashboard'
import { auth, db } from 'src/firebase'
import { useRouter } from 'next/router'
import { State } from 'src/types'

export type FireStoreStateData = State & {
  createdAt: {
    nanoseconds: number
    seconds: number
  }
}

const Analysis: React.VFC<{}> = ({}) => {
  const [user, setUser] = React.useState<any>(false)
  const [data, setData] = React.useState<FireStoreStateData[]>([])
  const router = useRouter()

  // firestoreに保存されているデータを取得
  const fetchData = async () => {
    const res = await db.collection('glove-orders').orderBy('createdAt', 'desc').get()
    setData(res.docs.map((data) => data.data()) as FireStoreStateData[])
  }
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user))
    fetchData()
  }, [])

  // ログアウト用メソッド
  const handleSignOut = async () => {
    await auth
      .signOut()
      .then(() => {
        router.push('/signIn')
      })
      .catch((err) => {
        console.log('ログアウトに失敗しました', err)
      })
  }

  return (
    <Auth>
      {user ? (
        <Box mt={2} ml={2}>
          <Dashboard userEmail={user?.email} datas={data} handleSignOut={handleSignOut} />
        </Box>
      ) : (
        <Box style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <CircularProgress />
        </Box>
      )}
    </Auth>
  )
}

export default Analysis
