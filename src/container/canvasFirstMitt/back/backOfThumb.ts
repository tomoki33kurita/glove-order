export const backOfThumb = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ヘリ革
  ctx.beginPath()
  ctx.moveTo(483, 397) // 左上
  ctx.quadraticCurveTo(510, 409, 494, 613) //
  ctx.quadraticCurveTo(539, 587, 571, 504) //
  ctx.quadraticCurveTo(592, 467, 600, 436) //
  ctx.quadraticCurveTo(612, 414, 612, 414) // 右上
  ctx.lineTo(497, 381) //
  ctx.quadraticCurveTo(490, 391, 483, 397) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
