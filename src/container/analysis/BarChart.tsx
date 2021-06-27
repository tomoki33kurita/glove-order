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

type Props = {
  title: string
  data: {
    name: string
    value: string
  }[]
}

export const BarCharts: React.VFC<Props> = ({ title, data }) => {
  const theme = useTheme()
  const margin = { top: 16, right: 16, bottom: 0, left: 24 }

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <ResponsiveContainer>
        <BarChart data={data} margin={margin} width={400}>
          <XAxis dataKey="color" />
          <YAxis />
          <Bar dataKey={'num'} fill={'#9baba9'} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
