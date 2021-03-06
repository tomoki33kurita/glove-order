import { State } from 'src/types'
import { edges } from 'src/container/canvasFirstMitt/back/edge'
import { webTop, webBottom } from 'src/container/canvasFirstMitt/back/web'
import { catchSurface } from 'src/container/canvasFirstMitt/back/catchSurface'
import { backAroundWeb } from 'src/container/canvasFirstMitt/back/backAroundWeb'
import { stitch } from 'src/container/canvasFirstMitt/back/stitch'
import { leatherStrap } from 'src/container/canvasFirstMitt/back/leatherStrap'
import { webCross } from 'src/container/canvasFirstMitt/front/leatherStrap/webCross'
import { listBelt } from 'src/container/canvasFirstMitt/back/listBelt'
import { backOfThumb } from 'src/container/canvasFirstMitt/back/backOfThumb'
import { backOfIndexToLittle } from 'src/container/canvasFirstMitt/back/backOfIndexToLittle'
import { boomerang } from 'src/container/canvasFirstMitt/back/boomerang'
import { littleHook } from 'src/container/canvasFirstMitt/back/littleHook'
import { liningLeather } from 'src/container/canvasFirstMitt/back/liningLeather'
import { thumbHook } from 'src/container/canvasFirstMitt/back/thumbHook'
import { webKnotUpward } from 'src/container/canvasInfield/back/leatherStrap/webKnotSingle'

export const useCanvasFirstMittBack = (ctx: CanvasRenderingContext2D, state: State): void => {
  // 裏革
  liningLeather(ctx, state.linings.color)
  // 捕球面
  catchSurface(ctx, state.catchFace.color)
  // // 革紐＿ウェブ間クロス＿下段
  webCross(ctx, state.strap.color, -40, -75)
  webCross(ctx, state.strap.color, 20, -120)
  // ウェブ先端側
  webTop(ctx, state.web.color)
  // ウェブ捕球面側
  webBottom(ctx, state.web.color)
  // ブーメラン部分
  boomerang(ctx, state.boomerang.color) // 専用のstateを設けて適用
  // 背面＿人差し指-小指
  backOfIndexToLittle(ctx, state.boomerang.color) // 専用のstateを設けて適用
  // 小指掛け紐
  littleHook(ctx, state.littleHook.color)
  // 親指掛け紐
  thumbHook(ctx, state.thumbHook.color)
  // 背面＿親指_1
  backOfThumb(ctx, state.thumb.color)
  // 背面＿ウェブ周り_2
  backAroundWeb(ctx, state.underWeb.color)
  // 手首ベルト_3
  listBelt(ctx, state.listBelt.color)
  // 親指＿単結びの革紐
  webKnotUpward(ctx, state.strap.color, -55, 80, -15)

  // ヘリ革_4
  edges(ctx, state.edge.color)
  // ステッチ
  stitch(ctx, state.stitch.color)
  // 革紐
  leatherStrap(ctx, state.strap.color)
}
