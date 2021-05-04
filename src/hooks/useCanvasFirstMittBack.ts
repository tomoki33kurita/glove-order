import { State } from 'src/types'
import { edges } from 'src/container/canvasFirstMitt/back/edge'
import { webTop, webBottom } from 'src/container/canvasFirstMitt/back/web'
import { catchSurface } from 'src/container/canvasFirstMitt/back/catchSurface'
import { thumbHook } from 'src/container/canvasFirstMitt/front/hook'
import { backAroundWeb } from 'src/container/canvasFirstMitt/back/backAroundWeb'
import { stitch } from 'src/container/canvasFirstMitt/front/stitch'
import { leatherStrap } from 'src/container/canvasFirstMitt/front/leatherStrap'
import { webCross } from 'src/container/canvasFirstMitt/front/leatherStrap/webCross'
import { listBelt } from 'src/container/canvasFirstMitt/back/listBelt'
import { backOfThumb } from 'src/container/canvasFirstMitt/back/backOfThumb'
import { littleHook } from 'src/container/canvasFirstMitt/back/littleHook'

export const useCanvasFirstMittBack = (ctx: CanvasRenderingContext2D, state: State): void => {
  // // 革紐＿ウェブ間クロス＿上段
  // webCross(ctx, state.strap.color, 0, 0)
  // webCross(ctx, state.strap.color, 60, -50)
  // 捕球面
  catchSurface(ctx, state.catchFace.color)
  // // 革紐＿ウェブ間クロス＿下段
  // webCross(ctx, state.strap.color, -40, -75)
  // webCross(ctx, state.strap.color, 20, -120)
  // ウェブ先端側
  webTop(ctx, state.web.color)
  // ウェブ捕球面側
  webBottom(ctx, state.web.color)
  // // 親指背面＿外側
  // thumbBackOut(ctx, state.thumbOut.color)
  // 小指掛け紐
  littleHook(ctx, state.littleHook.color)
  // 親指掛け紐
  // thumbHook(ctx, state.thumbHook.color)
  // 背面＿親指_1
  backOfThumb(ctx, state.thumbWeb.color)
  // 背面＿ウェブ周り_2
  backAroundWeb(ctx, state.thumbWeb.color)
  // 手首ベルト_3
  listBelt(ctx, 'white')
  // ヘリ革_4
  edges(ctx, state.edge.color)
  // // ステッチ
  // stitch(ctx, state.stitch.color)
  // // 革紐
  // leatherStrap(ctx, state.strap.color)
}
