export const liningLeather = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(260, 494) // 左下
  ctx.lineTo(465, 492) // 右下
  ctx.quadraticCurveTo(535, 435, 481, 400) // 右上
  ctx.quadraticCurveTo(371, 359, 277, 415) // 左上
  ctx.quadraticCurveTo(253, 454, 260, 494) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
