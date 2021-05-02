export const lining = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 5.0
  ctx.strokeStyle = '#fff' 
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(285, 479) // 左下
  ctx.quadraticCurveTo(457, 457, 457, 457) // 右下
  ctx.quadraticCurveTo(500, 439, 485, 414) // 折り返し付近
  ctx.quadraticCurveTo(451, 365, 423, 375) // 折り返し付近
  ctx.quadraticCurveTo(354, 365, 316, 400) // 
  ctx.quadraticCurveTo(250, 445, 285, 479) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
