import React from 'react'
import { Box, Container, Button } from '@material-ui/core'
import { FireStoreStateData } from 'src/pages/analysis'
import AnalysisHeader from 'src/layout/header'
import { useDashboardStyles } from 'src/styles/Dashboard'
import SearchesArea from './organisms/SearchesArea'
import FigureFields from '../FigureFields'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import BarChartArea from './organisms/BarChartArea'

type Props = {
  userEmail?: string
  data?: FireStoreStateData[]
  handleSignOut: () => void
}

export const Dashboard: React.VFC<Props> = ({ userEmail, data, handleSignOut }) => {
  const classes = useDashboardStyles()
  const [displayIndex, setDisplayIndex] = React.useState(0)
  const [figurePanelNum, setFigurePanelNum] = React.useState(1)
  const handleFigurePanelNum = (_: any, newValue: number) => setFigurePanelNum(newValue)

  const handleDisplayIndex = (prevOrNext: 'prev' | 'next') => {
    if (prevOrNext === 'prev') {
      // 「前へ」ボタン
      setDisplayIndex((prev) => prev !== 0 && prev - 1)
    }
    if (prevOrNext === 'next') {
      // 「次へ」ボタン
      setDisplayIndex((prev) => prev !== data.length - 1 && prev + 1)
    }
  }
  return (
    <Box className={classes.root}>
      <AnalysisHeader {...{ userEmail, handleSignOut }} />
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <SearchesArea />
          <Box mt={3}>
            <Box>
              {/* ポジション === 一塁手 */}
              <FigureFields
                state={data[displayIndex]}
                figurePanelNum={figurePanelNum}
                handleFigurePanelNum={handleFigurePanelNum}
              />
              {/* ポジション === 内野手 */}
              {/* <FigureFields
                state={state}
                figurePanelNum={1}
                handleFigurePanelNum={handleFigurePanelNum}
              /> */}
            </Box>
            <Box display={'flex'} justifyContent={'space-around'}>
              <Button
                startIcon={<KeyboardArrowLeftIcon />}
                color={'primary'}
                onClick={() => handleDisplayIndex('prev')}
                disabled={displayIndex === 0}
                style={{ display: 'flex', alignItems: 'inherit' }}
              >
                前へ
              </Button>
              <Button
                endIcon={<KeyboardArrowRightIcon />}
                color={'primary'}
                onClick={() => handleDisplayIndex('next')}
                disabled={displayIndex === data.length - 1}
                style={{ display: 'flex', alignItems: 'inherit' }}
              >
                次へ
              </Button>
            </Box>
            <Box p={3} mt={3}>
              <BarChartArea data={data} />
            </Box>
          </Box>
        </Container>
      </main>
    </Box>
  )
}
