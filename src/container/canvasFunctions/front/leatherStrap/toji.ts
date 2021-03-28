export const toji = (
  ctx: CanvasRenderingContext2D,
  color: string, 
  locationX: number, 
  locationY: number, 
  numerator?: number,
  // scaleSize?: number,
): void => {
  ctx.lineWidth =  2.5 // 太さを揃えるために意図的に太め
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  if(numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.beginPath()
  ctx.moveTo(588 + locationX, 482 + locationY) // 左上
  ctx.quadraticCurveTo(605 + locationX, 503 + locationY, 605 + locationX, 503  + locationY)　// 左下
  ctx.quadraticCurveTo(611 + locationX, 502 + locationY, 613 + locationX, 493  + locationY) // 右下
  ctx.quadraticCurveTo(597 + locationX, 473 + locationY, 597 + locationX, 473  + locationY) // 右上
  ctx.quadraticCurveTo(590 + locationX, 476 + locationY, 588 + locationX, 482  + locationY) // 左下
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  if(numerator !== undefined) {
    ctx.restore()
  }
}