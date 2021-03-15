export const thumbCutSurface = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // 親指芯キリハミ左回り
  ctx.moveTo(221, 120)
  ctx.quadraticCurveTo(257, 460, 411, 542)
  ctx.quadraticCurveTo(427, 550, 465, 595)
  ctx.quadraticCurveTo(477, 597, 473, 595)
  ctx.quadraticCurveTo(433, 545, 409, 533)
  ctx.quadraticCurveTo(265, 455, 228, 123)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const littleCutSurface = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(727, 165)
  ctx.quadraticCurveTo(710, 180, 718, 193)
  ctx.quadraticCurveTo(780, 370, 655, 510)
  ctx.quadraticCurveTo(644, 521, 646, 555)
  ctx.quadraticCurveTo(651, 560, 653, 550)
  ctx.quadraticCurveTo(649, 534, 658, 517)
  ctx.quadraticCurveTo(793, 365, 722, 185)
  ctx.quadraticCurveTo(720, 180, 730, 170)
  // ctx.quadraticCurveTo(720, 145, 718, 153)

  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
