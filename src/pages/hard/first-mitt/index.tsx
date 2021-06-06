import React from 'react'
import { Box, Grid } from '@material-ui/core'
import FigureFields from 'src/container/FigureFields'
import DesignationBase from 'src/container/DesignationBase'
import { reducer, initialStateFirstMitt } from 'src/hooks/stateReducer'

export const stateContext = React.createContext('')

const Index: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialStateFirstMitt)
  const [figurePanelNum, setFigurePanelNum] = React.useState(1)
  const handleFigurePanelNum = (event: any, newValue: number) => setFigurePanelNum(newValue)

  return (
    <Box>
      <Box p={2}>
        <Box component="span" fontWeight="bold">
          硬式 / ファーストミット
        </Box>
        を選択中
      </Box>
      <Grid container>
        <Grid item xs={12} md={7}>
          <FigureFields {...{ state, figurePanelNum, handleFigurePanelNum }} />
        </Grid>
        <Grid item xs={12} md={5}>
          <DesignationBase {...{ state, dispatch, figurePanelNum }} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Index
