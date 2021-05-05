import { webKnots } from 'src/container/canvasInfield/back/leatherStrap/webKnots'

export const leatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  // ウェブ上の結び目
  webKnots(ctx, color, -20, -25)
  webKnots(ctx, color, -80, 35)
}
