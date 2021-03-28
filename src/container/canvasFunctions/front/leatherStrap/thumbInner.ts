export const thumbInner = (
  ctx: CanvasRenderingContext2D,
  color: string, 
  locationX: number, 
  locationY: number, 
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 親指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(240 + locationX, 312 + locationY) // 左上
  ctx.quadraticCurveTo(248 + locationX, 318 + locationY, 258 + locationX, 349 + locationY)　// 左下
  ctx.quadraticCurveTo(261 + locationX, 346 + locationY, 260 + locationX, 337 + locationY)　// 右下
  ctx.quadraticCurveTo(257 + locationX, 310 + locationY, 239 + locationX, 304 + locationY) 
  ctx.quadraticCurveTo(236 + locationX, 308 + locationY, 240 + locationX, 312 + locationY) 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 側面ライン
  ctx.moveTo(240 + locationX, 312 + locationY) // 左上
  ctx.quadraticCurveTo(254 + locationX, 315 + locationY, 258 + locationX, 349 + locationY)　// 右下
  ctx.stroke()
}
