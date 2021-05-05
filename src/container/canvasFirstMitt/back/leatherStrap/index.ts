import { webKnots } from 'src/container/canvasInfield/back/leatherStrap/webKnots'
import { listCross } from 'src/container/canvasFirstMitt/back/leatherStrap/listCross'
import { webCross } from 'src/container/canvasFirstMitt/back/leatherStrap/webCross'
import { listKnot } from 'src/container/canvasFirstMitt/back/leatherStrap/listKnot'
import { underBoomerang } from 'src/container/canvasFirstMitt/back/leatherStrap/underBoomerang'

export const leatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  // ウェブとウェブを結ぶバツ紐
  webCross(ctx, color, 0, 0) // 左下
  webCross(ctx, color, 62, 70) // 右下
  webCross(ctx, color, 50, -70) // 左上
  webCross(ctx, color, 100, 10) // 右上
  // ウェブ上の結び目
  webKnots(ctx, color, -20, -25)
  webKnots(ctx, color, -80, 35)

  // ブーメラン左下の結び目
  webKnots(ctx, color, -220, -650, 90, 0.6)

  // 手首ベルト
  listCross(ctx, color)
  listKnot(ctx, color)

  // ブーメラン下の「く」の字
  underBoomerang(ctx, color)
}
