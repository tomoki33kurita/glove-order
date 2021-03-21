import { webToCatchFaceConnect } from 'src/container/canvasFunctions/back/leatherStrap/webToCatchFaceConnect'
import { webTop, webTop2 } from 'src/container/canvasFunctions/front/leatherStrap/webTop'
import { webKnots } from 'src/container/canvasFunctions/back/leatherStrap/webKnots'
import { webKnotUpward, webKnotDownward } from 'src/container/canvasFunctions/back/leatherStrap/webKnotSingle'
import { listCross } from 'src/container/canvasFunctions/back/leatherStrap/listCross'
import { connectWebToIndex,connectWebToIndexTop, connectWebToThumb, connectWebToThumbTop } from 'src/container/canvasFunctions/back/leatherStrap/connectWebAndFinger'
import { fingerTop, littleTop } from 'src/container/canvasFunctions/back/leatherStrap/fingerTop'
import { indexToMiddle, middleToRing } from 'src/container/canvasFunctions/back/leatherStrap/fingerToFinger'


export const leatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  // webToCatchFaceConnect(ctx, color)
  webTop(ctx,color,-33,10,-3, 1.1) // 右＿親指から1番目
  webTop(ctx,color,0,0) // 左＿親指から2番目
  webTop(ctx,color,55,-105, 20) // 左＿親指から3番目
  webTop(ctx,color,60,-125, 20) // 右＿親指から4番目
  webTop(ctx,color,68,-180, 27) // 右＿親指から5番目
  webTop(ctx,color,67,-233, 33) // 右＿親指から6番目
  webTop(ctx,color,55,-318, 45) // 右＿親指から7番目
  webTop2(ctx,color,0, 0) // 右＿親指から8番目
  webTop2(ctx,color,16,-10) // 右＿親指から9番目
  webTop2(ctx,color,35,-22) // 右＿親指から10番目

  // webKnots(ctx,color,36,-54,) // ウェブ先端寄りのウェブ結び目
  // webKnots(ctx,color,0,0,) // 捕球面寄りのウェブ結び目
  // webKnots(ctx,color,70,-910,75, 0.8) // 親指の結び目

  // webKnotUpward(ctx, color) // 親指とウェブの間の上向きの1つ結びの紐
  // webKnotDownward(ctx, color) // 親指先端の下向きの1つ結びの紐
  // connectWebToIndexTop(ctx, color)
  // connectWebToIndex(ctx, color, 2, 0) // Hウェブ左下＿下段
  // connectWebToIndex(ctx, color, 18, -38) // Hウェブ左下＿上段
  // connectWebToIndex(ctx, color, 45, -92) // Hウェブ左下＿上段


  // connectWebToThumbTop(ctx, color)
  // connectWebToThumb(ctx, color, 0, 0) // Hウェブ右下＿下段
  // connectWebToThumb(ctx, color, 30, -29) // Hウェブ右下＿上段
  // connectWebToThumb(ctx, color, 62, -63) // Hウェブ右上＿

  // fingerTop(ctx, color,0,0) // 人差し指先端
  // fingerTop(ctx, color, -160, 115, -15) // 中指先端
  // fingerTop(ctx, color, -343, 218, -35) // 薬指先端
  // littleTop(ctx, color) // 小指先端

  // indexToMiddle(ctx, color) // 人差し指と中指の連結
  // middleToRing(ctx, color, 10, 0) // 中指と薬指の連結
  // middleToRing(ctx, color, -10, 100, 0.8) // 薬指と小指の連結

  // listCross(ctx, color) // 手口左のクロス部分
  // webKnots(ctx,color,-170,400, 10, 0.8) // 手首ベルト左の結び目
}
