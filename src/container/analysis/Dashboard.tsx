import React from 'react'
import { Box, Container, Grid, Paper, Button } from '@material-ui/core'
import clsx from 'clsx'
import { BarCharts } from './BarChart'
import Select from 'react-select'
import { leagueOpts, positionOpts } from 'src/constants/analysisSelectOpts'
import { FireStoreStateData } from 'src/pages/analysis'
import AnalysisHeader from 'src/layout/header'
import { useDashboardStyles } from 'src/styles/Dashboard'
// import { Drawingboard } from './Drawingboard'
// import { Orders } from './Orders'

// 棒グラフのデータ生成
const genColorDataByPart = (data: FireStoreStateData[], part: string) =>
  data // @ts-ignore
    .map((value) => ({ color: value[part].label }))
    .reduce((a, c) => {
      // @ts-ignore
      const num = data.filter((value) => value[part].label === c.color).length
      return a.concat({ color: c.color, num })
    }, [])

type Props = {
  userEmail?: string
  datas?: FireStoreStateData[]
  handleSignOut: () => void
}

export const Dashboard: React.VFC<Props> = ({ userEmail, datas, handleSignOut }) => {
  const classes = useDashboardStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  const leatherColorsData = genColorDataByPart(datas, 'all')
  const strapColorsData = genColorDataByPart(datas, 'strap')
  // const stitchColorsData = genColorDataByPart(datas, 'stitch')
  // const webColorsData = genColorDataByPart(datas, 'web')
  // const edgeColorsData = genColorDataByPart(datas, 'edge')
  // const catchFaceColorsData = genColorDataByPart(datas, 'catchFace')

  return (
    <div className={classes.root}>
      <AnalysisHeader {...{ userEmail, handleSignOut }} />

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
                  <BarCharts title={'単色/本体カラー'} data={leatherColorsData} />
                </Paper>
              </Grid>
              {/* Chart */}
              <Grid item xs={12} md={6}>
                <Paper className={fixedHeightPaper}>
                  <BarCharts title={'革紐'} data={strapColorsData} />
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </div>
  )
}
