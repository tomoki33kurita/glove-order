import React from 'react'
import { Box, AppBar, Toolbar, Typography, Container, Grid, Link, Paper } from '@material-ui/core'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { BarCharts } from './BarChart'
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
  handleSignOut: () => void
}

export const Dashboard: React.VFC<Props> = ({ userEmail, handleSignOut }) => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

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
              <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={6}>
              <Paper className={fixedHeightPaper}>{<BarCharts title={'単色/本体カラー'} />}</Paper>
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={6}>
              <Paper className={fixedHeightPaper}>{<BarCharts title={'革紐'} />}</Paper>
            </Grid>
            {/* Recent Orders */}
            {/* <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid> */}
          </Grid>
        </Container>
      </main>
    </div>
  )
}
