import { State } from 'src/types'

// 背面の描画
import { edges } from 'src/container/canvasInfield/back/edge'
import { catchSurFace } from 'src/container/canvasInfield/back/catchSurface'
import { web } from 'src/container/canvasInfield/back/web'
import { thumbAndListBelt } from 'src/container/canvasInfield/back/thumbAndListBelt'
import { indexRight, indexLeft } from 'src/container/canvasInfield/back/indexFinger'
import { middleRight, middleLeft } from 'src/container/canvasInfield/back/middle'
import { ringRight, ringLeft } from 'src/container/canvasInfield/back/ring'
import { littleRight, littleLeft } from 'src/container/canvasInfield/back/little'
import { hamidashi } from 'src/container/canvasInfield/back/hamidashi'
import { thumbHook } from 'src/container/canvasInfield/back/thumbHook'
import { littleHook } from 'src/container/canvasInfield/back/littleHook'
import { selectedLabel } from 'src/container/canvasInfield/back/hatakeyamaLabel'
import { stitch } from 'src/container/canvasInfield/back/stitch'
import { leatherStrap } from 'src/container/canvasInfield/back/leatherStrap'
import { linings } from 'src/container/canvasInfield/back/lining'
import { fingerCover } from 'src/container/canvasInfield/back/fingerCover'

export const useCanvasInfieldBack = (ctx: CanvasRenderingContext2D, state: State): void => {
  // 裏革
  linings(ctx, state.linings.color)
  // 捕球面 / ウェブ下折り返し
  catchSurFace(ctx, state.catchFace.color)
  // 親指指袋_手口ベルト
  thumbAndListBelt(ctx, state.thumbWeb.color)
  // 人差し指＿右
  indexRight(ctx, state.indexWeb.color)
  // 人差し指＿左
  indexLeft(ctx, state.indexMiddle.color)
  // 中指＿右
  middleRight(ctx, state.middleIndex.color)
  // 中指＿左
  middleLeft(ctx, state.middleRing.color)
  // 薬指＿右
  ringRight(ctx, state.ringMiddle.color)
  // 薬指＿左
  ringLeft(ctx, state.ringLittle.color)
  // 小指＿右
  littleRight(ctx, state.littleRing.color)
  // 小指＿左
  littleLeft(ctx, state.littleOut.color)
  // 親指掛け紐
  thumbHook(ctx, state.thumbHook.color)
  // ハミダシ
  hamidashi(ctx, state.hamidashi.color)
  // 指カバー
  state.fingerGuardType.value == 'standard' && fingerCover(ctx, state.indexCover.color)
  // ヘリ革
  edges(ctx, state.edge.color)
  // ウェブ本体
  web(ctx, state.web.color)
  // ステッチ
  stitch(ctx, state.stitch.color, state.fingerGuardType.value == 'standard')
  // 革紐
  leatherStrap(ctx, state.strap.color)
  // 小指掛け紐
  // littleHook(ctx, state.littleHook.color)
}
