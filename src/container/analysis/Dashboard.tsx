import React from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Link,
  Paper,
  Button
} from '@material-ui/core'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { BarCharts } from './BarChart'
import Select from 'react-select'
import { useRouter } from 'next/router'
import { leagueOpts, positionOpts } from 'src/constants/analysisSelectOpts'
import { State } from 'src/types'
import { FireStoreStateData } from 'src/pages/analysis'
// import { Drawingboard } from './Drawingboard'
// import { Orders } from './Orders'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  title: {
    flexGrow: 1
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    marginTop: '48px'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  }
}))

type Props = {
  userEmail?: string
  datas?: FireStoreStateData[]
  handleSignOut: () => void
}

export const Dashboard: React.VFC<Props> = ({ userEmail, datas, handleSignOut }) => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const router = useRouter()

  // TODO いずれリファクタする
  const leatherColorsData = datas
    .map((data) => ({ color: data.all.label }))
    .reduce((a, c) => {
      const num = datas.filter((data) => data.all.label === c.color).length
      return a.concat({ color: c.color, num })
    }, [])
  const strapColorsData = datas
    .map((data) => ({ color: data.strap.label }))
    .reduce((a, c) => {
      const num = datas.filter((data) => data.strap.label === c.color).length
      return a.concat({ color: c.color, num })
    }, [])
  const stitchColorsData = datas
    .map((data) => ({ color: data.stitch.label }))
    .reduce((a, c) => {
      const num = datas.filter((data) => data.stitch.label === c.color).length
      return a.concat({ color: c.color, num })
    }, [])
  const webColorsData = datas
    .map((data) => ({ color: data.web.label }))
    .reduce((a, c) => {
      const num = datas.filter((data) => data.web.label === c.color).length
      return a.concat({ color: c.color, num })
    }, [])
  const edgeColorsData = datas
    .map((data) => ({ color: data.edge.label }))
    .reduce((a, c) => {
      const num = datas.filter((data) => data.edge.label === c.color).length
      return a.concat({ color: c.color, num })
    }, [])
  const catchFaceColorsData = datas
    .map((data) => ({ color: data.catchFace.label }))
    .reduce((a, c) => {
      const num = datas.filter((data) => data.catchFace.label === c.color).length
      return a.concat({ color: c.color, num })
    }, [])

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
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
                <Link
                  onClick={() => handleSignOut()}
                  style={{ cursor: 'pointer' }}
                  color={'secondary'}
                >
                  ログアウト
                </Link>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box mb={1} p={1}>
                <Box my={0} component={'h3'}>
                  リーグ
                </Box>
                <Select options={leagueOpts} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mb={1} p={1}>
                <Box my={0} component={'h3'}>
                  ポジション
                </Box>
                <Select options={positionOpts} />
              </Box>
            </Grid>
            {/* <Grid item xs={12} md={4}>
              <Box mb={1} p={1}>
                <Box my={0} component={'h3'}>
                  　カラー数
                </Box>
                <Select options={[]} />
              </Box>
            </Grid> */}
            <Box mx={'auto'} width={'20%'} display={'flex'} justifyContent={'space-around'}>
              <Button variant="contained" color="primary">
                検索
              </Button>
              <Button variant="outlined">リセット</Button>
            </Box>
          </Grid>
          <Box mt={3}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={6}>
                <Paper className={fixedHeightPaper}>
                  {<BarCharts title={'単色/本体カラー'} data={leatherColorsData} />}
                </Paper>
              </Grid>
              {/* Chart */}
              <Grid item xs={12} md={6}>
                <Paper className={fixedHeightPaper}>
                  {<BarCharts title={'革紐'} data={strapColorsData} />}
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <Box mt={3}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={6}>
                <Paper className={fixedHeightPaper}>
                  {<BarCharts title={'ステッチカラー'} data={stitchColorsData} />}
                </Paper>
              </Grid>
              {/* Chart */}
              <Grid item xs={12} md={6}>
                <Paper className={fixedHeightPaper}>
                  {<BarCharts title={'ウェブ'} data={webColorsData} />}
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <Box mt={3}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={6}>
                <Paper className={fixedHeightPaper}>
                  {<BarCharts title={'ヘリ革'} data={stitchColorsData} />}
                </Paper>
              </Grid>
              {/* Chart */}
              <Grid item xs={12} md={6}>
                <Paper className={fixedHeightPaper}>
                  {<BarCharts title={'捕球面'} data={webColorsData} />}
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </div>
  )
}
