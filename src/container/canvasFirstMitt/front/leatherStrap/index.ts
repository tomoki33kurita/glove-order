import { webTop, webTop2, webTop3 } from 'src/container/canvasFirstMitt/front/leatherStrap/webTop'
import {
  thumbEdge0,
  thumbEdge1,
  thumbEdge2,
  thumbEdge3,
  thumbEdge4
} from 'src/container/canvasFirstMitt/front/leatherStrap/thumbEdge'
import { bankEdge1, bankEdge2 } from 'src/container/canvasFirstMitt/front/leatherStrap/bankEdge'

export const leatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  // ウェブ先端
  webTop3(ctx, color) // 一番右
  webTop2(ctx, color, 17, -8) //
  webTop2(ctx, color, 0, 0) //
  webTop2(ctx, color, -20, 10) //
  webTop2(ctx, color, -34, 20) //
  webTop2(ctx, color, -46, 28) //
  webTop(ctx, color, 39, -41) //
  webTop(ctx, color, 29, -33) //
  webTop(ctx, color, 22, -26) //
  webTop(ctx, color, 13, -17) //
  webTop(ctx, color, 8, -10) //
  webTop(ctx, color, 0, 0) // 一番左

  // 親指ヘリ革周り
  thumbEdge0(ctx, color)
  thumbEdge1(ctx, color)
  thumbEdge2(ctx, color, -30, -50)
  thumbEdge2(ctx, color, 0, 0)
  thumbEdge3(ctx, color, 0, 0)
  thumbEdge3(ctx, color, 18, 40)
  thumbEdge3(ctx, color, 34, 76)
  thumbEdge3(ctx, color, 50, 110)
  thumbEdge4(ctx, color, 0, 0)
  thumbEdge4(ctx, color, 10, 37)
  thumbEdge3(ctx, color, 87, 212)

  // 土手ヘリ革周り
  bankEdge1(ctx, color)
  bankEdge2(ctx, color, 0, 0)
  bankEdge2(ctx, color, 35, 5)
  bankEdge2(ctx, color, -39, 90, -10)
  bankEdge2(ctx, color, 0, 93, -10)
}
