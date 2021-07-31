export const fingerCover = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.fillStyle = color
  ctx.strokeStyle = '#3b3b3b'
  ctx.beginPath()

  ctx.moveTo(378, 358) // 左下
  ctx.quadraticCurveTo(385, 278, 398, 240) // 左上
  ctx.quadraticCurveTo(405, 210, 435, 205) // 中央上
  ctx.quadraticCurveTo(458, 213, 455, 241) // 右上
  ctx.quadraticCurveTo(436, 361, 436, 361) // 右下
  ctx.quadraticCurveTo(406, 350, 378, 358) // 左下

  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
