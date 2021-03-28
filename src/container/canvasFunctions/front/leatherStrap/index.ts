import { webTop, webTop2 } from 'src/container/canvasFunctions/front/leatherStrap/webTop'
import { thumbInner } from 'src/container/canvasFunctions/front/leatherStrap/thumbInner'
import { littleInner } from 'src/container/canvasFunctions/front/leatherStrap/littleInner'
import { underWeb } from 'src/container/canvasFunctions/front/leatherStrap/underWeb'
import { bank, bank2 } from 'src/container/canvasFunctions/front/leatherStrap/bank'
import { indexWrapBack, indexTopOver, indexTop } from 'src/container/canvasFunctions/front/leatherStrap/connectIndexToWeb'
import { thumbWrapBack, thumbTopOver, thumbTop } from 'src/container/canvasFunctions/front/leatherStrap/connectThumbToWeb'
import { knotUpward, knotDownward } from 'src/container/canvasFunctions/front/leatherStrap/knotSingle'
import { connectIndexToMiddle, connectMiddleToRing, connectRingToLittle } from 'src/container/canvasFunctions/front/leatherStrap/fingerTop'
import { thumbUpper, thumbUpper2 } from 'src/container/canvasFunctions/front/leatherStrap/thumbUpper'
import { littleUpper } from 'src/container/canvasFunctions/front/leatherStrap/littleUpper'
import { toji } from 'src/container/canvasFunctions/front/leatherStrap/toji'
import { onEdgeTojiCenter, onEdgeTojiThumb, onEdgeTojiLittle, onEdgeTojiLittle2 } from 'src/container/canvasFunctions/front/leatherStrap/onEdgeToji'
import { hWebCrossUpperLeft, hWebCrossUpperRight, hWebCrossUpperLeft2 } from 'src/container/canvasFunctions/front/leatherStrap/hWebCross'



export const leatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  // webToCatchFaceConnect(ctx, color)
  webTop(ctx,color,-33,10,-3, 1.1) // 右＿親指から1番目
  webTop(ctx,color,0,0) // 左＿親指から2番目
  webTop(ctx,color,57,-105, 20) // 左＿親指から3番目
  webTop(ctx,color,60,-125, 20) // 右＿親指から4番目
  webTop(ctx,color,68,-180, 27) // 右＿親指から5番目
  webTop(ctx,color,70,-233, 33) // 右＿親指から6番目
  webTop(ctx,color,55,-318, 45) // 右＿親指から7番目
  webTop2(ctx,color,0, 0) // 右＿親指から8番目
  webTop2(ctx,color,16,-10) // 右＿親指から9番目
  webTop2(ctx,color,35,-22) // 右＿親指から10番目
  hWebCrossUpperLeft(ctx, color) // クロス部分の右
  hWebCrossUpperRight(ctx, color) // クロス部分の右
  hWebCrossUpperLeft2(ctx, color) // クロス部分の左

  thumbInner(ctx, color, 0,0) // 一番先端
  thumbInner(ctx, color, 22,40) // 中間
  thumbInner(ctx, color, 41,75) //一番手元
  littleInner(ctx, color, 0,0) // 一番先端
  littleInner(ctx, color, -19,45) // 一番先端
  littleInner(ctx, color, -38,90) // 一番先端
  underWeb(ctx, color, 0, 0) // ウェブ下＿右
  underWeb(ctx, color, -37, 54) // ウェブ下＿左
  bank(ctx, color, 0, 0) // 一番右
  bank(ctx, color, -80, -12) // 一番中央
  bank2(ctx, color)
  thumbWrapBack(ctx, color, -215, 20, -30) // 先端側の折り返し
  thumbWrapBack(ctx, color, 0, 0) // 根元側の折り返し
  thumbWrapBack(ctx, color, -50, 80, -10) // 根元側の折り返しの下
  thumbWrapBack(ctx, color, -105, 160, -20) // 根元側の折り返しの下の下
  thumbTopOver(ctx, color)
  thumbTop(ctx, color)
  indexTopOver(ctx, color)  // 人差し指先端＿ウェブ繋ぎこみ奥
  indexTop(ctx, color) // 人差し指先端＿ウェブ繋ぎこみ手前
  indexWrapBack(ctx, color, -10, -100) // 上
  indexWrapBack(ctx, color, 0, 0) // 下
  knotUpward(ctx, color)
  knotDownward(ctx, color)
  connectIndexToMiddle(ctx, color) // 指先端の繋ぎ
  connectMiddleToRing(ctx, color) // 指先端の繋ぎ
  connectRingToLittle(ctx, color) // 指先端の繋ぎ
  
  thumbUpper(ctx, color, 0, 0) // 親指-土手芯の上部の革紐
  thumbUpper(ctx, color, -120, 145, -20) // 親指-土手芯の上部の革紐2
  thumbUpper(ctx, color, -5, 152, -15) // 親指-土手芯の上部の革紐3
  thumbUpper2(ctx, color) // 親指-土手芯の上部の革紐3
  littleUpper(ctx, color) // 薬指と小指の溝直下の1つの革紐

  toji(ctx, color, 0, 0) // 小指側末
  toji(ctx, color, 115, -280, 22) //小指側中間
  toji(ctx, color, 122, -467, 35) //小指側先端
  toji(ctx, color, -60, 73, -5) //中央
  toji(ctx, color, -37, 40) //中央


  onEdgeTojiCenter(ctx, color, 0 ,0)  
  onEdgeTojiThumb(ctx, color, 0, 0) // 親指側＿根元側
  onEdgeTojiThumb(ctx, color, -20, -25) 
  onEdgeTojiThumb(ctx, color, 110, -180, 20) // 親指側＿先端
  onEdgeTojiThumb(ctx, color, 160, -270, 30) 
  onEdgeTojiCenter(ctx, color, -65 ,72, -10)
  onEdgeTojiCenter(ctx, color, -35 ,80, -10)
  onEdgeTojiCenter(ctx, color, 7 ,90, -10)
  onEdgeTojiCenter(ctx, color, -45 ,153, -18)
  onEdgeTojiCenter(ctx, color, -12 ,157, -18)
  onEdgeTojiCenter(ctx, color, -410 ,255, -50)
  onEdgeTojiLittle(ctx, color, 0, 0) 
  onEdgeTojiLittle(ctx, color, -83, 75, -10) 
  onEdgeTojiLittle2(ctx, color) 
  onEdgeTojiLittle(ctx, color, -65, 50, -10) 

}
