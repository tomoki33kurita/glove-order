import { webKnots } from 'src/container/canvasInfield/back/leatherStrap/webKnots'
import { listCross } from 'src/container/canvasFirstMitt/back/leatherStrap/listCross'
import { listKnot } from 'src/container/canvasFirstMitt/back/leatherStrap/listKnot'

export const leatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  // ウェブ上の結び目
  webKnots(ctx, color, -20, -25)
  webKnots(ctx, color, -80, 35)

  // ブーメラン左下の結び目
  webKnots(ctx, color, -220, -650, 90, 0.6)

  // 手首ベルト
  listCross(ctx, color)
  listKnot(ctx, color)
}
