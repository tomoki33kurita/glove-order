export const backOfThumb = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ヘリ革
  ctx.beginPath()
  ctx.moveTo(483, 397) // 左上
  ctx.quadraticCurveTo(500, 409, 535, 568) //
  ctx.quadraticCurveTo(598, 474, 597, 436) //
  ctx.quadraticCurveTo(605, 426, 605, 426) // 右上
  ctx.lineTo(497, 381) //
  ctx.quadraticCurveTo(490, 391, 483, 397) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
