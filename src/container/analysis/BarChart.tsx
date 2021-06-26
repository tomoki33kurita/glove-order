import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import {
  BarChart,
  Bar,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from 'recharts'
import Title from './Title'

// Generate Sales Data

const data = [
  {
    name: 'オレンジ',
    uv: 400,
    pv: 240,
    amt: 240
  },
  {
    name: 'イエロー',
    uv: 300,
    pv: 139,
    amt: 221
  },
  {
    name: 'ブラック',
    uv: 200,
    pv: 980,
    amt: 229
  },
  {
    name: 'チョコ',
    uv: 278,
    pv: 390,
    amt: 200
  },
  {
    name: 'Rオレンジ',
    uv: 189,
    pv: 480,
    amt: 218
  },
  {
    name: 'タン',
    uv: 239,
    pv: 380,
    amt: 250
  },
  {
    name: 'クリーム',
    uv: 349,
    pv: 430,
    amt: 210
  }
]

type Props = {
  title: string
}

export const BarCharts: React.VFC<Props> = ({ title }) => {
  const theme = useTheme()
  const margin = { top: 16, right: 16, bottom: 0, left: 24 }

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <ResponsiveContainer>
        <BarChart data={data} margin={margin} width={400}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey={'uv'} fill={'#9baba9'} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
