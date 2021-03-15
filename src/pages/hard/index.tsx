import React from 'react'
import { Box, Grid } from '@material-ui/core'
import FigureFields from 'src/container/FigureFields'
import DesignationBase from 'src/container/DesignationBase'
import { reducer, initialState } from 'src/hooks/stateReducer'

export const stateContext = React.createContext('')

const Index: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const [figurePanelNum, setFigurePanelNum] = React.useState(1)
  const handleFigurePanelNum = (event: any, newValue: number) => setFigurePanelNum(newValue)

  return (
    <Box p={2}>
      <Box p={2}>
        <Box component="span" fontWeight="bold">
          硬式 / ゴールドオーダー
        </Box>
        を選択中
      </Box>
      <Grid container>
        <Grid item xs={12} md={7}>
          <FigureFields state={state} figurePanelNum={figurePanelNum} handleFigurePanelNum={handleFigurePanelNum} />
        </Grid>
        <Grid item xs={12} md={5}>
          <DesignationBase state={state} dispatch={dispatch} figurePanelNum={figurePanelNum} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Index
