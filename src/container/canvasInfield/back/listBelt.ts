export const listBelt = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.3
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(291, 490) // ベルト左上
  ctx.quadraticCurveTo(319, 538, 340, 588) // ベルト左下
  ctx.quadraticCurveTo(428, 599, 528, 586) // ベルト右下
  ctx.quadraticCurveTo(560, 508, 499, 434) // ベルト右上
  ctx.quadraticCurveTo(486, 476, 291, 490) // ベルト左上

  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
