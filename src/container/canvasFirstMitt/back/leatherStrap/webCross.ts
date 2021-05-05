export const webCross = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 左下＿右上
  ctx.beginPath()
  ctx.moveTo(496 + locationX, 191 + locationY) // 左下
  ctx.quadraticCurveTo(521 + locationX, 208 + locationY, 521 + locationX, 208 + locationY) // 右下
  ctx.quadraticCurveTo(539 + locationX, 210 + locationY, 549 + locationX, 221 + locationY) // 右下
  ctx.quadraticCurveTo(558 + locationX, 223 + locationY, 558 + locationX, 214 + locationY) // 右上
  ctx.quadraticCurveTo(546 + locationX, 199 + locationY, 523 + locationX, 194 + locationY) //
  ctx.quadraticCurveTo(504 + locationX, 184 + locationY, 501 + locationX, 186 + locationY) // 左上
  ctx.quadraticCurveTo(496 + locationX, 191 + locationY, 496 + locationX, 191 + locationY) // 左下
  ctx.fill()
  ctx.moveTo(496 + locationX, 192 + locationY) // 左
  ctx.quadraticCurveTo(528 + locationX, 205 + locationY, 550 + locationX, 220 + locationY) // 左下
  ctx.stroke()
  ctx.closePath()

  // 左上＿右下
  ctx.beginPath()
  ctx.moveTo(512 + locationX, 174 + locationY) // 左上
  ctx.quadraticCurveTo(523 + locationX, 206 + locationY, 524 + locationX, 225 + locationY) // 左下
  ctx.quadraticCurveTo(528 + locationX, 230 + locationY, 536 + locationX, 225 + locationY) // 右下
  ctx.quadraticCurveTo(535 + locationX, 197 + locationY, 521 + locationX, 171 + locationY) // 右上
  ctx.quadraticCurveTo(514 + locationX, 166 + locationY, 512 + locationX, 174 + locationY) // 左上
  ctx.fill()
  ctx.moveTo(514 + locationX, 172 + locationY) // 左上
  ctx.quadraticCurveTo(528 + locationX, 198 + locationY, 526 + locationX, 227 + locationY) // 左下
  ctx.stroke()
}
