import React from 'react'
import { Box, Container, Grid } from '@material-ui/core'
import { BarChartsCard } from './molecules/BarChartsCard'
import { FireStoreStateData } from 'src/pages/analysis'
import AnalysisHeader from 'src/layout/header'
import { useDashboardStyles } from 'src/styles/Dashboard'
import SearchesArea from './organisms/SearchesArea'
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
          <SearchesArea />
          <Box mt={3}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={6}>
                <BarChartsCard title={'単色/本体カラー'} data={leatherColorsData} />
              </Grid>
              {/* Chart */}
              <Grid item xs={12} md={6}>
                <BarChartsCard title={'革紐'} data={strapColorsData} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </div>
  )
}
