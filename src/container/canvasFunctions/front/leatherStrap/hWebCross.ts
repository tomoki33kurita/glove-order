export const hWebCrossUpperLeft = (
  ctx: CanvasRenderingContext2D,
  color: string, 
): void => {
  ctx.lineWidth = 2.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(316, 256) // 左上
  ctx.quadraticCurveTo(328, 261, 341, 272)　// 左下
  ctx.quadraticCurveTo(350, 263, 350, 263) 
  ctx.quadraticCurveTo(336, 251, 324, 245) 
  ctx.quadraticCurveTo(316, 256, 316, 256) 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

export const hWebCrossUpperRight = (
  ctx: CanvasRenderingContext2D,
  color: string, 
): void => {
  ctx.lineWidth = 2.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(311, 261) // 左上
  ctx.quadraticCurveTo(311, 282, 319, 298)　// 左下
  ctx.quadraticCurveTo(328, 287, 328, 287) 
  ctx.quadraticCurveTo(321, 271, 321, 248) 
  ctx.quadraticCurveTo(311, 261, 311, 261) 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

export const hWebCrossUpperLeft2 = (
  ctx: CanvasRenderingContext2D,
  color: string, 
): void => {
  ctx.lineWidth = 2.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(277, 319) // 左上
  ctx.quadraticCurveTo(284, 321, 292, 332)　// 左下
  ctx.quadraticCurveTo(300, 321, 300, 321) 
  ctx.quadraticCurveTo(291, 312, 282, 309) 
  ctx.quadraticCurveTo(277, 319, 277, 319) 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
