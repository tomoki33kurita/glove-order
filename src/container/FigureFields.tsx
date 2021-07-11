import React from 'react'
import { Box, AppBar, Tabs, Tab, Button } from '@material-ui/core'
import TabPanel from 'src/components/molecules/TabPanel'
import { State } from 'src/types'
import FigureFront from 'src/container/FigureFront'
import FigureBack from 'src/container/FigureBack'
import { genImgFromCanvas } from 'src/container/genPdf/genPdfDocDefine'
import { useRouter } from 'next/router'

// const devToolStyleFront = {
//   backgroundImage: `url(${'/fmitt-front.jpeg'})`,
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   backgroundSize: '70%',
//   maxWidth: '100%'
// }

// const devToolStyleBack = {
//   backgroundImage: `url(${'/fmitt-back.jpeg'})`,
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   backgroundSize: '70%',
//   maxWidth: '100%'
// }

export const a11yProps = (index: number): any => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

type Props = {
  state: State
  figurePanelNum: number
  handleFigurePanelNum: (event: any, newValue: number) => void
}

const FigureFields: React.FC<Props> = ({ state, figurePanelNum, handleFigurePanelNum }) => {
  // this is devTools
  const [cordinateX, setCordinateX] = React.useState(0)
  const [cordinateY, setCordinateY] = React.useState(0)
  const [isCopy, setCopy] = React.useState(false)
  const [isGenImg, setGenImg] = React.useState(false)
  const router = useRouter()

  const handleCoordinate = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    // eslint-disable-next-line
    // @ts-ignore
    const rect = e.target.getBoundingClientRect()
    const x = parseInt(`${e.clientX - rect.left}`)
    const y = parseInt(`${e.clientY - rect.top}`)
    setCordinateX(x)
    setCordinateY(y)
    setCopy(false)
  }

  return (
    <Box position="sticky" top={0} mb={1}>
      <TabPanel value={figurePanelNum} index={0}>
        <FigureFront
          state={state}
          // 開発で座標を取得したいときは以下を有効にする
          // devTools={{ cordinateX, cordinateY, isCopy, setCopy }}
          // devToolStyle={devToolStyleFront}
          // handleCoordinate={handleCoordinate}
        />
      </TabPanel>
      <TabPanel value={figurePanelNum} index={1}>
        <FigureBack
          state={state}
          // 開発で座標を取得したいときは以下を有効にする
          // devTools={{ cordinateX, cordinateY, isCopy, setCopy }}
          // devToolStyle={devToolStyleBack}
          // handleCoordinate={handleCoordinate}
        />
      </TabPanel>
      <AppBar position="static">
        <Tabs
          value={figurePanelNum}
          onChange={handleFigurePanelNum}
          aria-label="simple tabs example"
        >
          <Tab label="捕球面" {...a11yProps(1)} />
          <Tab label="背面" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      {/* 画像ダウンロードボタンは、canvas部分に設置したい */}
      {/* {figurePanelNum ? (
        <Button variant="contained" color="primary" onClick={() => setGenImg(true)}>
          <a
            href={isGenImg ? genImgFromCanvas(state, 'back', router?.asPath) : ''}
            download="オーダー背面.png"
            style={{ textDecoration: 'none' }}
          >
            背面画像ダウンロード
          </a>
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={() => setGenImg(true)}>
          <a
            href={isGenImg ? genImgFromCanvas(state, 'front', router?.asPath) : ''}
            download="オーダー捕球面.png"
            style={{ textDecoration: 'none' }}
          >
            捕球面画像ダウンロード
          </a>
        </Button>
      )} */}
    </Box>
  )
}
export default FigureFields
