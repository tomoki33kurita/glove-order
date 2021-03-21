import { State } from 'src/types'
// 捕球面の描画
import { edges } from 'src/container/canvasFunctions/front/edge'
import { catchSurface } from 'src/container/canvasFunctions/front/catchSurface'
import { web } from 'src/container/canvasFunctions/front/web'


export const useCanvasInfieldFront = (ctx: CanvasRenderingContext2D, state: State): void => {
  // // 裏革
  // lining(ctx, state.linings.color)
  // ウェブ本体
  web(ctx, state.web.color)
  // 捕球面 
  catchSurface(ctx, state.catchFace.color)
  // // 親指掛け紐
  // thumbHook(ctx, state.thumbHook.color)
  // // ハミダシ
  // hamidashi(ctx, state.edge.color)
  // ヘリ革
  edges(ctx, state.edge.color)
  // // ステッチ
  // stitch(ctx, state.stitch.color)
  // // 革紐
  // leatherStrap(ctx, state.strap.color)
  // // 小指掛け紐
  // littleHook(ctx, state.littleHook.color)
}
