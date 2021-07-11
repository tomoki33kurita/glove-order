import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { BarChartsCard } from 'src/container/analysis/molecules/BarChartsCard'
import { FireStoreStateData } from 'src/pages/analysis'

// 棒グラフのデータ生成
const genColorDataByPart = (data: FireStoreStateData[], part: string) =>
  data // @ts-ignore
    .map((value) => ({ color: value[part]?.label }))
    ?.reduce((a, c) => {
      // @ts-ignore
      const num = data.filter((value) => value[part]?.label === c.color).length
      if (!a.some((e) => e.color === c.color)) {
        a.push({ color: c.color, num })
      }
      return a
    }, [])

type Props = {
  data?: FireStoreStateData[]
}

const BarChartArea: React.VFC<Props> = ({ data }) => {
  const leatherColorsData = genColorDataByPart(data, 'all')
  const strapColorsData = genColorDataByPart(data, 'strap')
  const stitchColorsData = genColorDataByPart(data, 'stitch')
  const webColorsData = genColorDataByPart(data, 'web')
  const edgeColorsData = genColorDataByPart(data, 'edge')
  const catchFaceColorsData = genColorDataByPart(data, 'catchFace')

  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={6}>
        <BarChartsCard title={'単色/本体カラー'} data={leatherColorsData} />
      </Grid>
      {/* Chart */}
      <Grid item xs={12} md={6}>
        <BarChartsCard title={'革紐'} data={strapColorsData} />
      </Grid>
      {/* Chart */}
      <Grid item xs={12} md={6}>
        <BarChartsCard title={'ステッチ'} data={stitchColorsData} />
      </Grid>
      {/* Chart */}
      <Grid item xs={12} md={6}>
        <BarChartsCard title={'ウェブ'} data={webColorsData} />
      </Grid>
      {/* Chart */}
      <Grid item xs={12} md={6}>
        <BarChartsCard title={'ヘリ革'} data={edgeColorsData} />
      </Grid>
      {/* Chart */}
      <Grid item xs={12} md={6}>
        <BarChartsCard title={'捕球面'} data={catchFaceColorsData} />
      </Grid>
    </Grid>
  )
}

export default BarChartArea
