import { State } from 'src/types'
// 捕球面の描画
import { edges } from 'src/container/canvasFunctions/front/edge'
import { catchSurface } from 'src/container/canvasFunctions/front/catchSurface'
import { web } from 'src/container/canvasFunctions/front/web'
import { hamidashi } from 'src/container/canvasFunctions/front/hamidashi'
import { leatherStrap } from 'src/container/canvasFunctions/front/leatherStrap'
import { stitch } from 'src/container/canvasFunctions/front/stitch'
import { listLining } from 'src/container/canvasFunctions/front/listLining'
import { thumbBackOut, thumbBackWebSide } from 'src/container/canvasFunctions/front/back/thumb'
import { littleBackOut, littleBackRingSide } from 'src/container/canvasFunctions/front/back/little'
import { ringBackLittleSide } from 'src/container/canvasFunctions/front/back/ring'
import { middleBackRingSide, middleBackIndexSide } from 'src/container/canvasFunctions/front/back/middle'
import { indexBackWebSide, indexBackMiddleSide } from 'src/container/canvasFunctions/front/back/index'

export const useCanvasInfieldFront = (ctx: CanvasRenderingContext2D, state: State): void => {
  // 裏革
  listLining(ctx, state.listLiningsMaterial.color)
  // ウェブ本体
  web(ctx, state.web.color)
  // 捕球面 
  catchSurface(ctx, state.catchFace.color)
  // 親指背面＿外側
  thumbBackOut(ctx, 'red')
  // 親指背面＿ウェブ側
  thumbBackWebSide(ctx, 'red')
  // 人差し指背面＿ウェブ側
  indexBackWebSide(ctx, 'red')
  // 人差し指背面＿中指側
  indexBackMiddleSide(ctx, 'red')
  // 中指背面＿人差し指側
  middleBackIndexSide(ctx, 'red')
  // 中指背面＿薬指側
  middleBackRingSide(ctx, 'red')
  // 薬指背面＿小指側
  ringBackLittleSide(ctx, 'red')
  // 小指背面＿薬指側
  littleBackRingSide(ctx, 'red')
  // 小指背面＿外側
  littleBackOut(ctx, 'red')
  // 親指掛け紐
  // thumbHook(ctx, state.thumbHook.color)
  // ハミダシ
  hamidashi(ctx, state.edge.color)
  // ヘリ革
  edges(ctx, state.edge.color)
  // ステッチ
  stitch(ctx, state.stitch.color)
  // // 革紐
  leatherStrap(ctx, state.strap.color)
  // 小指掛け紐
  // littleHook(ctx, state.littleHook.color)
}
