
export const thumbUpper = (
  ctx: CanvasRenderingContext2D,
  color: string, 
  locationX: number, 
  locationY: number, 
  numerator?: number,
  // scaleSize?: number,
): void => {
  ctx.lineWidth = 2.5 // 太さを揃えるために意図的に太め
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // ctx.beginPath()
  if(numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.beginPath()
  ctx.moveTo(366 + locationX, 443 + locationY) // 左上
  ctx.quadraticCurveTo(359 + locationX, 440 + locationY, 364 + locationX, 450  + locationY)　// 左下
  ctx.quadraticCurveTo(388 + locationX, 465 + locationY, 388 + locationX, 465  + locationY) // 右下
  ctx.quadraticCurveTo(402 + locationX, 465 + locationY, 391 + locationX, 455  + locationY) // 右上
  ctx.quadraticCurveTo(381 + locationX, 445 + locationY, 366 + locationX, 443  + locationY) // 左下
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  if(numerator !== undefined) {
    ctx.restore()
  }

}

export const thumbUpper2 = (
  ctx: CanvasRenderingContext2D,
  color: string, 
): void => {
  ctx.lineWidth =  2.5 // 太さを揃えるために意図的に太め
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.beginPath()
  ctx.moveTo(529, 499) // 左上
  ctx.quadraticCurveTo(541, 504, 549, 519)　// 左下
  ctx.quadraticCurveTo(555, 512, 560, 514) // 右下
  ctx.quadraticCurveTo(550, 498, 539, 493) // 右上
  ctx.quadraticCurveTo(532, 493, 529, 499) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}


