export const listBelt = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ヘリ革
  ctx.beginPath()
  ctx.moveTo(265, 500) // 左上
  ctx.quadraticCurveTo(300, 615, 300, 615) // 左下
  ctx.quadraticCurveTo(348, 643, 495, 617) // 右下
  ctx.quadraticCurveTo(540, 595, 542, 525) //
  ctx.quadraticCurveTo(542, 478, 513, 448) // 右上
  ctx.lineTo(455, 491) //
  ctx.lineTo(265, 500) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
