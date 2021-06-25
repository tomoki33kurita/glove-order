import React from 'react'
import { Box, CircularProgress, Link } from '@material-ui/core'
import Auth from 'src/auth'
import { auth, db } from 'src/firebase'
import { useRouter } from 'next/router'

const Analysis: React.VFC<{}> = ({}) => {
  const [user, setUser] = React.useState<any>(false)
  const [demoDatas, setDemoDatas] = React.useState<any[]>([])
  const router = useRouter()

  // firestoreに保存済みな、オーダーシミュレーションデータを取得
  const fetchDatas = async () => {
    const res = await db.collection('glove-orders').orderBy('createdAt', 'desc').get()
    setDemoDatas(res.docs.map((data) => data.data()))
  }
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user))
    fetchDatas()
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

  console.log('中身', demoDatas)

  return (
    <Auth>
      {user ? (
        <Box mt={2} ml={2}>
          <Box>ここは分析をするためのページであるのだ</Box>
          <Box>ユーザー：{user?.email}</Box>
          <Link onClick={() => handleSignOut()} style={{ cursor: 'pointer' }}>
            ログアウト
          </Link>
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
