import { webToCatchFaceConnect } from 'src/container/canvasInfield/back/leatherStrap/webToCatchFaceConnect'
import { webTops } from 'src/container/canvasInfield/back/leatherStrap/webTop'
import { webKnots } from 'src/container/canvasInfield/back/leatherStrap/webKnots'
import {
  webKnotUpward,
  webKnotDownward
} from 'src/container/canvasInfield/back/leatherStrap/webKnotSingle'
import { listCross } from 'src/container/canvasInfield/back/leatherStrap/listCross'
import {
  connectWebToIndex,
  connectWebToIndexTop,
  connectWebToThumb,
  connectWebToThumbTop
} from 'src/container/canvasInfield/back/leatherStrap/connectWebAndFinger'
import { fingerTop, littleTop } from 'src/container/canvasInfield/back/leatherStrap/fingerTop'
import {
  indexToMiddle,
  middleToRing
} from 'src/container/canvasInfield/back/leatherStrap/fingerToFinger'

export const leatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  webToCatchFaceConnect(ctx, color)
  webTops(ctx, color, 10, 24) // 右＿親指から1番目
  webTops(ctx, color, 0, 0) // 右＿親指から2番目
  webTops(ctx, color, -9, -23) // 右＿親指から3番目
  webTops(ctx, color, -18, -46) // 右＿親指から4番目
  webTops(ctx, color, -32, -69) // 右＿親指から5番目
  webTops(ctx, color, -45, -85) // 右＿親指から6番目
  webTops(ctx, color, -65, -105) // 右＿親指から7番目
  webTops(ctx, color, -82, -120) // 右＿親指から8番目
  webTops(ctx, color, -98, -132) // 右＿親指から8番目
  webTops(ctx, color, -102, -135) // 右＿親指から8番目

  webKnots(ctx, color, 36, -54) // ウェブ先端寄りのウェブ結び目
  webKnots(ctx, color, 0, 0) // 捕球面寄りのウェブ結び目
  webKnots(ctx, color, 70, -910, 75, 0.8) // 親指の結び目

  webKnotUpward(ctx, color, 0, 0) // 親指とウェブの間の上向きの1つ結びの紐
  webKnotDownward(ctx, color, 0, 0) // 親指先端の下向きの1つ結びの紐
  connectWebToIndexTop(ctx, color)
  connectWebToIndex(ctx, color, 2, 0) // Hウェブ左下＿下段
  connectWebToIndex(ctx, color, 18, -38) // Hウェブ左下＿上段
  connectWebToIndex(ctx, color, 45, -92) // Hウェブ左下＿上段
  connectWebToThumbTop(ctx, color)
  connectWebToThumb(ctx, color, 0, 0) // Hウェブ右下＿下段
  connectWebToThumb(ctx, color, 30, -29) // Hウェブ右下＿上段
  connectWebToThumb(ctx, color, 62, -63) // Hウェブ右上＿

  fingerTop(ctx, color, 0, 0) // 人差し指先端
  fingerTop(ctx, color, -160, 115, -15) // 中指先端
  fingerTop(ctx, color, -343, 218, -35) // 薬指先端
  littleTop(ctx, color) // 小指先端

  indexToMiddle(ctx, color) // 人差し指と中指の連結
  middleToRing(ctx, color, 10, 0) // 中指と薬指の連結
  middleToRing(ctx, color, -10, 100, 0.8) // 薬指と小指の連結

  listCross(ctx, color) // 手口左のクロス部分
  webKnots(ctx, color, -170, 400, 10, 0.8) // 手首ベルト左の結び目
}
