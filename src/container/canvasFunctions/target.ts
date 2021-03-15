export const targetArrange = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 2
  ctx.fillStyle = color
  ctx.beginPath()
  // 親指芯＿ターゲット
  ctx.moveTo(232, 130)
  ctx.quadraticCurveTo(270, 465, 428, 540)
  ctx.quadraticCurveTo(473, 572, 482, 568)
  ctx.lineTo(462, 510)
  ctx.quadraticCurveTo(310, 400, 273, 180)
  ctx.quadraticCurveTo(250, 140, 232, 130)

  // 小指先端芯＿ターゲット
  ctx.moveTo(527, 45)
  ctx.quadraticCurveTo(650, 42, 727, 165)
  ctx.quadraticCurveTo(728, 170, 718, 180)
  ctx.quadraticCurveTo(590, 60, 535, 65)
  ctx.quadraticCurveTo(510, 60, 527, 45)

  // 小指マチ部分
  ctx.moveTo(727, 165)
  ctx.quadraticCurveTo(718, 180, 720, 193)
  ctx.quadraticCurveTo(780, 390, 655, 510)
  ctx.quadraticCurveTo(645, 520, 650, 557)
  ctx.quadraticCurveTo(854, 400, 727, 165)

  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
