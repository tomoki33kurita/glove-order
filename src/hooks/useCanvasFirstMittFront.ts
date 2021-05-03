import { State } from 'src/types'
import { edges } from 'src/container/canvasFirstMitt/front/edge'
import { webTop, webBottom } from 'src/container/canvasFirstMitt/front/web'
import { catchSurface } from 'src/container/canvasFirstMitt/front/catchSurface'
import { thumbHook } from 'src/container/canvasFirstMitt/front/hook'
import { thumbBackOut, backAroundWeb } from 'src/container/canvasFirstMitt/front/thumbBack'
import { stitch } from 'src/container/canvasFirstMitt/front/stitch'
import { leatherStrap } from 'src/container/canvasFirstMitt/front/leatherStrap'

export const useCanvasFirstMittFront = (ctx: CanvasRenderingContext2D, state: State): void => {
  // 裏革
  // listLining(ctx, state.listLiningsMaterial.color)
  // 捕球面
  // catchSurface(ctx, state.catchFace.color)
  // ウェブ先端側
  // webTop(ctx, state.web.color)
  // ウェブ捕球面側
  // webBottom(ctx, state.web.color)
  // 背面＿ウェブ周り
  // backAroundWeb(ctx, state.thumbWeb.color)
  // 親指背面＿外側
  // thumbBackOut(ctx, state.thumbOut.color)
  // 親指掛け紐
  // thumbHook(ctx, state.thumbHook.color)
  // ヘリ革
  // edges(ctx, state.edge.color)
  // ステッチ
  // stitch(ctx, state.stitch.color)
  // 革紐
  leatherStrap(ctx, state.strap.color)
  // 小指掛け紐
  // littleHook(ctx, state.littleHook.color)
}
