export const underWeb = (
  ctx: CanvasRenderingContext2D,
  color: string, 
  locationX: number, 
  locationY: number, 
): void => {
  ctx.lineWidth =  2.5 // 太さを揃えるために意図的に太め
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(344 + locationX, 306 + locationY) // 左下
  ctx.quadraticCurveTo(349 + locationX, 315 + locationY, 357 + locationX, 311 + locationY)　// 右下
  ctx.quadraticCurveTo(369 + locationX, 297 + locationY, 376 + locationX, 280 + locationY) // 右上
  ctx.quadraticCurveTo(372 + locationX, 268 + locationY, 363 + locationX, 275 + locationY) // 左上
  ctx.quadraticCurveTo(356 + locationX, 289 + locationY, 344 + locationX, 306 + locationY) // 左下
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // // 側面ライン
  // ctx.beginPath()
  // ctx.moveTo(692 + locationX, 252 + locationY) // 右上
  // ctx.quadraticCurveTo(675 + locationX, 271 + locationY,　678 + locationX, 295 + locationY)　// 右下
  // ctx.stroke()
}
