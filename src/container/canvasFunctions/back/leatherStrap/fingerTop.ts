export const fingerTop = (
  ctx: CanvasRenderingContext2D,
  color: string,   
  locationX: number,
  locationY: number,
  numerator?: number,
) => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  if(numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(484 + locationX, 30 + locationY) // 左上
  ctx.quadraticCurveTo(475 + locationX, 39 + locationY, 475 + locationX, 39 + locationY)　// 左下 
  ctx.quadraticCurveTo(510 + locationX, 28 + locationY, 537 + locationX, 40 + locationY)　// 右下 
  ctx.quadraticCurveTo(542 + locationX, 35 + locationY, 539 + locationX, 30 + locationY)　// 右上 
  ctx.quadraticCurveTo(509 + locationX, 15 + locationY, 484 + locationX, 30 + locationY)　// 左上 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
    // 側面ライン
  ctx.beginPath()
  ctx.moveTo(480 + locationX, 34 + locationY) // 左上
  ctx.quadraticCurveTo(506 + locationX, 23 + locationY, 536 + locationX, 35 + locationY)　// 左下 
  ctx.stroke()
  ctx.closePath()
  if(numerator !== undefined) {
    ctx.restore()
  }
}
export const littleTop = (
  ctx: CanvasRenderingContext2D,
  color: string,   
) => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(210, 167) // 左上
  ctx.quadraticCurveTo(200, 180, 205, 185)　// 左下 
  ctx.quadraticCurveTo(220, 170, 220, 170)　// 右下 
  ctx.quadraticCurveTo(225, 165, 225, 155)　// 右上 
  ctx.quadraticCurveTo(217, 160, 210, 167)　// 左上 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 側面ライン
  ctx.beginPath()
  ctx.moveTo(203, 180) // 左上
  ctx.quadraticCurveTo(210, 170, 223, 164)　// 左下 
  ctx.stroke()
  ctx.closePath()
}