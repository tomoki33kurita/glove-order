import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { FireStoreStateData } from 'src/pages/analysis'
import UserInfo from 'src/layout/header/UserInfo'
import { useDashboardStyles } from 'src/styles/Dashboard'

type Props = {
  userEmail?: string
  datas?: FireStoreStateData[]
  handleSignOut: () => void
}

export const AnalysisHeader: React.VFC<Props> = ({ userEmail, handleSignOut }) => {
  const classes = useDashboardStyles()
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Dashboard
        </Typography>
        {userEmail && <UserInfo {...{ userEmail, handleSignOut }} />}
      </Toolbar>
    </AppBar>
  )
}

export default AnalysisHeader
