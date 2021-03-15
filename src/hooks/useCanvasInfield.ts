import { State } from 'src/types'

// 背面の描画
import { edges } from 'src/container/canvasFunctions/back/edge'
import { catchSurFace } from 'src/container/canvasFunctions/back/catchSurface'
import { web } from 'src/container/canvasFunctions/back/web'
import { thumbAndListBelt } from 'src/container/canvasFunctions/back/thumbAndListBelt'
import { indexRight, indexLeft } from 'src/container/canvasFunctions/back/indexFinger'
import { middleRight, middleLeft } from 'src/container/canvasFunctions/back/middle'
import { ringRight, ringLeft } from 'src/container/canvasFunctions/back/ring'
import { littleRight, littleLeft } from 'src/container/canvasFunctions/back/little'
import { thumbHook } from 'src/container/canvasFunctions/back/thumbHook'
import { littleHook } from 'src/container/canvasFunctions/back/littleHook'
import { selectedLabel } from 'src/container/canvasFunctions/back/hatakeyamaLabel'
import { stitch } from 'src/container/canvasFunctions/back/stitch'
import { leatherStrap, knotOnWebLeatherStrap, arroundEdgheLeatherStrap, topOfFingerBagLeatherStrap, knotOnLeatherStraps } from 'src/container/canvasFunctions/back/leatherStrap'

export const useCanvasInfieldBack = (ctx: CanvasRenderingContext2D, state: State): void => {
  // ヘリ革
  edges(ctx, state.edge.color)
  // 捕球面 / ウェブ下折り返し
  catchSurFace(ctx, state.catchFace.color)
  // 親指指袋_手口ベルト
  thumbAndListBelt(ctx, state.indexAndThumb.color)
  // 人差し指＿右
  indexRight(ctx, state.edge.color)
  // 人差し指＿左
  indexLeft(ctx, state.edge.color)
  // 中指＿右
  middleRight(ctx, state.edge.color)
  // 中指＿左
  middleLeft(ctx, state.edge.color)
  // 薬指＿右
  ringRight(ctx, state.edge.color)
  // 薬指＿左
  ringLeft(ctx, state.edge.color)
  // 小指＿右
  littleRight(ctx, state.edge.color)
  // 小指＿左
  littleLeft(ctx, state.edge.color)

  // ウェブ本体
  web(ctx, state.web.color)
  // // ステッチ
  // stitch(ctx, state.stitch.color)
  // // 革紐
  // leatherStrap(ctx, state.strap.color)
  // knotOnWebLeatherStrap(ctx, state.strap.color)
  // arroundEdgheLeatherStrap(ctx, state.strap.color)
  // topOfFingerBagLeatherStrap(ctx, state.strap.color)
  // knotOnLeatherStraps(ctx, state.strap.color)
  // // 親指掛け紐
  // thumbHook(ctx, state.thumbHook.color)
  // // 小指掛け紐
  // littleHook(ctx, state.littleHook.color)
}
