import { State } from 'src/types'
// 捕球面の描画
import { edges } from 'src/container/canvasInfield/front/edge'
import { catchSurface } from 'src/container/canvasInfield/front/catchSurface'
import { web } from 'src/container/canvasInfield/front/web'
import { hamidashi } from 'src/container/canvasInfield/front/hamidashi'
import { leatherStrap } from 'src/container/canvasInfield/front/leatherStrap'
import { stitch } from 'src/container/canvasInfield/front/stitch'
import { listLining } from 'src/container/canvasInfield/front/listLining'
import { thumbBackOut, thumbBackWebSide } from 'src/container/canvasInfield/front/back/thumb'
import { littleBackOut, littleBackRingSide } from 'src/container/canvasInfield/front/back/little'
import { ringBackLittleSide } from 'src/container/canvasInfield/front/back/ring'
import {
  middleBackRingSide,
  middleBackIndexSide
} from 'src/container/canvasInfield/front/back/middle'
import { indexBackWebSide, indexBackMiddleSide } from 'src/container/canvasInfield/front/back/index'
import { engravedOfCatchFace } from 'src/container/canvasInfield/front/engravedOfCatchFace'

export const useCanvasInfieldFront = (ctx: CanvasRenderingContext2D, state: State): void => {
  // 裏革
  listLining(ctx, state.listLiningsMaterial.color)
  // ウェブ本体
  web(ctx, state.web.color)
  // 捕球面
  catchSurface(ctx, state.catchFace.color)
  // 親指背面＿外側
  thumbBackOut(ctx, state.thumbOut.color)
  // 親指背面＿ウェブ側
  thumbBackWebSide(ctx, state.thumbWeb.color)
  // 人差し指背面＿ウェブ側
  indexBackWebSide(ctx, state.indexWeb.color)
  // 人差し指背面＿中指側
  indexBackMiddleSide(ctx, state.indexMiddle.color)
  // 中指背面＿人差し指側
  middleBackIndexSide(ctx, state.middleIndex.color)
  // 中指背面＿薬指側
  middleBackRingSide(ctx, state.middleRing.color)
  // 薬指背面＿小指側
  ringBackLittleSide(ctx, state.ringLittle.color)
  // 小指背面＿薬指側
  littleBackRingSide(ctx, state.littleRing.color)
  // 小指背面＿外側
  littleBackOut(ctx, state.littleOut.color)
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
  // 捕球面の刻印(YSバージョン)
  engravedOfCatchFace(ctx, '#ccc')
}
