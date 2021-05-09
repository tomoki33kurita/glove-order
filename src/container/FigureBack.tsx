import React from 'react'
import { DevTools, State } from 'src/types'
import DevTool from 'src/container/devTools'
import { useRouter } from 'next/router'
// 背面の描画
import { useCanvasInfieldBack } from 'src/hooks/useCanvasInfieldBack'
import { useCanvasFirstMittBack } from 'src/hooks/useCanvasFirstMittBack'

type Props = {
  state: State
  devTools?: DevTools
  devToolStyle?: {
    backgroundImage: string
    backgroundRepeat: string
    backgroundPosition: string
    backgroundSize: string
    maxWidth: string
  }
  handleCoordinate?: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void
}

const FigureBack: React.FC<Props> = ({ state, devTools, devToolStyle, handleCoordinate }) => {
  const router = useRouter()
  console.log(router)
  React.useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#383838'
    ctx.lineWidth = 2
    router.asPath === '/hard/infield' && useCanvasInfieldBack(ctx, state)
    router.asPath === '/hard/first-mitt' && useCanvasFirstMittBack(ctx, state)
    router.asPath === '/hard/catcher-mitt' && useCanvasFirstMittBack(ctx, state)
  }, [state])
  return (
    <>
      {devTools && handleCoordinate ? (
        <>
          <canvas
            width={900}
            height={652}
            id="canvas"
            style={devToolStyle}
            onClick={(e) => handleCoordinate(e)}
          ></canvas>
          <DevTool devTools={devTools} />
        </>
      ) : (
        <canvas width={900} height={652} id="canvas" style={{ maxWidth: '100%' }}></canvas>
      )}
    </>
  )
}

export default FigureBack
