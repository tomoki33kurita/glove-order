export const bank = (
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
  ctx.moveTo(484 + locationX, 522 + locationY) // 左下
  ctx.quadraticCurveTo(502 + locationX, 524 + locationY, 522 + locationX, 526 + locationY)　// 右下
  ctx.quadraticCurveTo(530 + locationX, 522 + locationY, 523 + locationX, 518 + locationY) // 右上
  ctx.quadraticCurveTo(506 + locationX, 507 + locationY, 486 + locationX, 512 + locationY) // 左上
  ctx.quadraticCurveTo(479 + locationX, 516 + locationY, 484 + locationX, 522 + locationY) // 左下
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // 側面ライン
  ctx.moveTo(484 + locationX, 522 + locationY) // 右上
  ctx.quadraticCurveTo(502 + locationX, 517 + locationY, 522 + locationX, 526 + locationY)　// 右下
  ctx.stroke()
}

export const bank2 = (
  ctx: CanvasRenderingContext2D,
  color: string, 
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(348, 477) // 左下
  ctx.quadraticCurveTo(368, 492, 368, 492)　// 右下
  ctx.quadraticCurveTo(375, 493, 373, 486) // 右上
  ctx.quadraticCurveTo(365, 474, 351, 468) // 左上
  ctx.quadraticCurveTo(342, 466, 348, 477) // 左下
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // 側面ライン
  ctx.moveTo(346, 472) // 左上
  ctx.quadraticCurveTo(359, 478, 369, 491)　// 右下
  ctx.stroke()
}
