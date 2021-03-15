import React from 'react'
import { Box, AppBar, Tabs, Tab, Button } from '@material-ui/core'
import { State, Action } from 'src/types'
import { a11yProps } from 'src/container/FigureFields'
import BaseSet from 'src/container/designations/BaseSet'
import ColoringSet from 'src/container/designations/ColoringSet'
import EmbroiderySet from 'src/container/designations/EmbroiderySet'
import PdfDialog from 'src/container/genPdf/PdfDialog'
import { RESET_INIT_STATE } from 'src/constants/ActionTypes'
import { useRouter } from 'next/router'

type Props = {
  state: State
  figurePanelNum: number
  dispatch: React.Dispatch<Action>
}

const DesignationBase: React.FC<Props> = ({ state, figurePanelNum, dispatch }) => {
  const router = useRouter()
  const [value, setValue] = React.useState(1)
  const [open, setOpen] = React.useState<boolean>(false)
  const handlePdfDialog = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleChange = (event: any, newValue: number) => setValue(newValue)
  const handleReset = () => {
    if (window.confirm(`本当にリセットしますか？\n基本設定・カラー設定・刺繍設定の全てがリセットされます`)) dispatch({ type: RESET_INIT_STATE })
  }
  const hendleLinkToTop = () => {
    if (window.confirm('本当にトップページに移動してよろしいですか？')) {
      dispatch({ type: RESET_INIT_STATE })
      router.push('/')
    }
  }

  return (
    <Box m={1} border={'solid 1px green'}>
      <PdfDialog state={state} open={open} handleClose={handleClose} dispatch={dispatch} />
      <AppBar position="sticky" style={{ top: 0 }}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="基本設定" {...a11yProps(0)} />
          <Tab label="カラー設定" {...a11yProps(1)} />
          <Tab label="刺繍設定" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <BaseSet state={state} value={value} dispatch={dispatch} />
      <ColoringSet state={state} value={value} figurePanelNum={figurePanelNum} dispatch={dispatch} />
      <EmbroiderySet state={state} value={value} dispatch={dispatch} />
      <Box display="flex" justifyContent="space-around" my={2}>
        <Button variant="outlined" onClick={hendleLinkToTop}>
          トップに戻る
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          リセット
        </Button>
        <Button variant="contained" color="primary" onClick={handlePdfDialog}>
          オーダー内容確認
        </Button>
      </Box>
    </Box>
  )
}
export default DesignationBase
