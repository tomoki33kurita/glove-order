export const indexTopOver = (
  ctx: CanvasRenderingContext2D,
  color: string, 
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(347, 53) // 左上
  ctx.quadraticCurveTo(348, 55, 351, 61)　// 左下
  ctx.quadraticCurveTo(358, 54, 355, 58)　// 右下
  ctx.quadraticCurveTo(355, 51, 369, 43) // 右上
  ctx.quadraticCurveTo(354, 45, 347, 53) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

export const indexTop = (
  ctx: CanvasRenderingContext2D,
  color: string, 
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(352, 68) // 左上
  ctx.quadraticCurveTo(354, 72, 354, 79)　// 左下
  ctx.quadraticCurveTo(368, 84, 382, 75) // 右下
  ctx.quadraticCurveTo(384, 69, 379, 65) // 右上
  ctx.quadraticCurveTo(365, 67, 352, 68) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // // 側面ライン
  ctx.moveTo(352, 69) // 右上
  ctx.quadraticCurveTo(367, 74,380, 68)　// 右下
  ctx.stroke()
}


// 折り返し部分
export const indexWrapBack = (
  ctx: CanvasRenderingContext2D,
  color: string, 
  locationX: number, 
  locationY: number, 
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(380 + locationX, 168 + locationY) // 左上
  ctx.quadraticCurveTo(379 + locationX, 188 + locationY, 384 + locationX, 206 + locationY)　// 左下
  ctx.quadraticCurveTo(393 + locationX, 205 + locationY, 396 + locationX, 197 + locationY) // 右下
  ctx.quadraticCurveTo(395 + locationX, 170 + locationY, 395 + locationX, 170 + locationY) // 右上
  ctx.quadraticCurveTo(390 + locationX, 158 + locationY, 380 + locationX, 168 + locationY) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // // 側面ライン
  ctx.moveTo(395 + locationX, 170 + locationY) // 左上
  ctx.quadraticCurveTo(392 + locationX, 184 + locationY, 396 + locationX, 197 + locationY)　// 右下
  ctx.stroke()
}
