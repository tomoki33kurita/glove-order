import { State } from 'src/types'
// 捕球面の描画
import { thumbMachi, thumbTarget } from 'src/container/canvasFunctions/thumb'
import { littleMachi, littleInLineBottom } from 'src/container/canvasFunctions/little'
import { web as webFront, webTop as webTopFront } from 'src/container/canvasFunctions/web'
import { catchSurface as catchSurfaceFront } from 'src/container/canvasFunctions/catchingSurface'
import { leatherStrap as leatherStrapFront } from 'src/container/canvasFunctions/leatherStrap'
import { edgeLeather as edgesFront } from 'src/container/canvasFunctions/edge'
import { stitch as stitchFront } from 'src/container/canvasFunctions/stitch'
import { targetArrange } from 'src/container/canvasFunctions/target'
import { thumbCutSurface, littleCutSurface } from 'src/container/canvasFunctions/cutSurface'

export const useCanvasCMittFront = (ctx: CanvasRenderingContext2D, state: State): void => {
  catchSurfaceFront(ctx, state.catchFace.color)
  // ヘリ革
  edgesFront(ctx, state.edge.color, state.listLiningsMaterial.color)
  // 親指マチ部分
  thumbMachi(ctx, state.thumbMachi.color)
  thumbTarget(ctx, state.catchFace.color)
  // 小指マチ部分
  littleMachi(ctx, state.littleMachi.color)
  // ウェブ
  webTopFront(ctx, state.web.color)
  webFront(ctx, state.web.color)
  littleInLineBottom(ctx)
  // ターゲット加工
  if (state.target.value !== 'none') targetArrange(ctx, state.target.color)

  if (state.hamidashi.color) {
    // 親指芯＿キリハミ
    thumbCutSurface(ctx, state.hamidashi.color)
    // 小指芯＿キリハミ
    littleCutSurface(ctx, state.hamidashi.color)
  }
  // ステッチカラー
  stitchFront(ctx, state.stitch.color, state.target.color)
  // 革紐
  leatherStrapFront(ctx, state.strap.color, '#fff')
}
