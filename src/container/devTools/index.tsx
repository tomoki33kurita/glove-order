import React from 'react'
import { Box, Button, TextField } from '@material-ui/core'
import { DevTools } from 'src/types'

type Props = {
  devTools: DevTools
}

const DevTool: React.FC<Props> = ({ devTools }) => {
  const { cordinateX, cordinateY, isCopy, setCopy } = devTools
  const [inputX, setInputX] = React.useState(0)
  const [inputY, setInputY] = React.useState(0)

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value)
    setCopy(true)
  }

  const handlePonter = () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#ff4500'
    ctx.fillStyle = '#ff4500'
    ctx.fillRect(inputX, inputY, 5, 5)
  }

  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" justifyContent="center" alignItems="center">
        <TextField placeholder="X座標の値" variant="outlined" onChange={(e) => setInputX(parseInt(e.target.value))} />
        <TextField placeholder="Y座標の値" variant="outlined" onChange={(e) => setInputY(parseInt(e.target.value))} />
        <Button variant="outlined" onClick={handlePonter}>
          検索
        </Button>
      </Box>
      <Box ml={2} display="flex" justifyContent="center" alignItems="center">
        <Box mx={2} p={1} border={'solid 1px green'}>{`${cordinateX}, ${cordinateY}`}</Box>
        <Button variant="outlined" onClick={() => handleCopy(`${cordinateX}, ${cordinateY}`)}>
          コピー
        </Button>
        {isCopy ? <Box ml={2}>コピーしたよ！</Box> : <Box width={90} />}
      </Box>
    </Box>
  )
}

export default DevTool
