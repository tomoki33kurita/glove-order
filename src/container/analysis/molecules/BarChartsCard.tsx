import React from 'react'
import { Paper } from '@material-ui/core'
import { useDashboardStyles } from 'src/styles/Dashboard'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import Title from '../Title'
import clsx from 'clsx'

type Props = {
  title: string
  data: {
    name: string
    value: string
  }[]
}

export const BarChartsCard: React.VFC<Props> = ({ title, data }) => {
  const classes = useDashboardStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const margin = { top: 16, right: 16, bottom: 0, left: 24 }

  return (
    <Paper className={fixedHeightPaper}>
      <Title>{title}</Title>
      <ResponsiveContainer>
        <BarChart data={data} margin={margin} width={400}>
          <XAxis dataKey="color" />
          <YAxis />
          <Bar dataKey={'num'} fill={'#9baba9'} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  )
}
