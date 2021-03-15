import React from 'react'
import { DevTools, State } from 'src/types'
import DevTool from 'src/container/devTools'
// 捕球面の描画
import { useCanvasCMittFront } from 'src/hooks/useCanvasCMittFront'

type Props = {
  state: State
  devTools?: DevTools
  devToolStyle?: { backgroundImage: string; backgroundRepeat: 'no-repeat'; backgroundPosition: string; backgroundSize: string }
  handleCoordinate?: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void
}

const FigureFront: React.FC<Props> = ({ state, devTools, devToolStyle, handleCoordinate }) => {
  React.useEffect(() => {
    // const canvas = document.getElementById('canvas') as HTMLCanvasElement
    // const ctx = canvas.getContext('2d')
    // ctx.strokeStyle = '#383838'
    // ctx.lineWidth = 2
    // useCanvasCMittFront(ctx, state)
  }, [state])

  return (
    <>
      {devTools && handleCoordinate ? (
        <>
          <canvas width={900} height={652} id="canvas" style={devToolStyle} onClick={(e) => handleCoordinate(e)}></canvas>
          <DevTool devTools={devTools} />
        </>
      ) : (
        <canvas width={900} height={652} id="canvas" style={{ maxWidth: '100%' }}></canvas>
      )}
    </>
  )
}

export default FigureFront
