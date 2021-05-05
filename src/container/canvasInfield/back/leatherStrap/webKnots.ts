export const webKnots = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 2.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // ウェブ先端側の結び目
  // 左側の先端紐
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.moveTo(554 + locationX, 123 + locationY) // 左上
  ctx.quadraticCurveTo(548 + locationX, 131 + locationY, 548 + locationX, 131 + locationY) // 左下
  ctx.quadraticCurveTo(565 + locationX, 165 + locationY, 609 + locationX, 202 + locationY) // 右下
  ctx.quadraticCurveTo(610 + locationX, 200 + locationY, 618 + locationX, 196 + locationY) // 右上
  ctx.quadraticCurveTo(577 + locationX, 164 + locationY, 554 + locationX, 123 + locationY) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 結び目本体＿左
  ctx.beginPath()
  ctx.moveTo(625 + locationX, 194 + locationY) // 左上
  ctx.quadraticCurveTo(612 + locationX, 196 + locationY, 604 + locationX, 209 + locationY)
  ctx.quadraticCurveTo(605 + locationX, 217 + locationY, 614 + locationX, 221 + locationY)
  ctx.quadraticCurveTo(622 + locationX, 208 + locationY, 634 + locationX, 204 + locationY)
  ctx.quadraticCurveTo(637 + locationX, 195 + locationY, 625 + locationX, 194 + locationY)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 結び目本体＿右上
  ctx.beginPath()
  ctx.moveTo(627 + locationX, 207 + locationY) // 左上
  ctx.quadraticCurveTo(621 + locationX, 208 + locationY, 619 + locationX, 216 + locationY)
  ctx.quadraticCurveTo(632 + locationX, 224 + locationY, 647 + locationX, 215 + locationY)
  ctx.quadraticCurveTo(648 + locationX, 206 + locationY, 644 + locationX, 204 + locationY)
  ctx.quadraticCurveTo(636 + locationX, 212 + locationY, 628 + locationX, 207 + locationY)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 側面
  ctx.beginPath()
  ctx.moveTo(626 + locationX, 207 + locationY) // 左下
  ctx.quadraticCurveTo(636 + locationX, 213 + locationY, 644 + locationX, 204 + locationY)
  ctx.quadraticCurveTo(641 + locationX, 200 + locationY, 627 + locationX, 207 + locationY)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 結び目本体＿右下
  ctx.beginPath()
  ctx.moveTo(618 + locationX, 216 + locationY) // 左上
  ctx.quadraticCurveTo(620 + locationX, 226 + locationY, 620 + locationX, 226 + locationY)
  ctx.quadraticCurveTo(628 + locationX, 229 + locationY, 628 + locationX, 229 + locationY)
  ctx.quadraticCurveTo(628 + locationX, 221 + locationY, 629 + locationX, 219 + locationY)
  ctx.quadraticCurveTo(624 + locationX, 221 + locationY, 618 + locationX, 216 + locationY)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 側面
  ctx.beginPath()
  ctx.moveTo(618 + locationX, 216 + locationY) // 左上
  ctx.quadraticCurveTo(614 + locationX, 220 + locationY, 614 + locationX, 220 + locationY)
  ctx.quadraticCurveTo(620 + locationX, 226 + locationY, 620 + locationX, 226 + locationY)
  ctx.quadraticCurveTo(620 + locationX, 226 + locationY, 618 + locationX, 216 + locationY)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 結び目右下_側面
  ctx.beginPath()
  ctx.moveTo(629 + locationX, 220 + locationY) // 左上
  ctx.quadraticCurveTo(628 + locationX, 224 + locationY, 628 + locationX, 228 + locationY)
  ctx.quadraticCurveTo(633 + locationX, 233 + locationY, 633 + locationX, 233 + locationY)
  ctx.quadraticCurveTo(636 + locationX, 223 + locationY, 634 + locationX, 219 + locationY)
  ctx.quadraticCurveTo(629 + locationX, 220 + locationY, 629 + locationX, 220 + locationY)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 結び目右下
  ctx.beginPath()
  ctx.moveTo(632 + locationX, 233 + locationY) // 左下
  ctx.quadraticCurveTo(645 + locationX, 229 + locationY, 633 + locationX, 219 + locationY)
  ctx.quadraticCurveTo(636 + locationX, 226 + locationY, 632 + locationX, 233 + locationY)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 紐＿右
  ctx.beginPath()
  ctx.moveTo(634 + locationX, 220 + locationY) // 左下
  ctx.quadraticCurveTo(683 + locationX, 309 + locationY, 683 + locationX, 309 + locationY)
  ctx.quadraticCurveTo(690 + locationX, 310 + locationY, 690 + locationX, 304 + locationY)
  ctx.quadraticCurveTo(642 + locationX, 222 + locationY, 645 + locationX, 218 + locationY)
  ctx.quadraticCurveTo(634 + locationX, 220 + locationY, 634 + locationX, 220 + locationY)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}
