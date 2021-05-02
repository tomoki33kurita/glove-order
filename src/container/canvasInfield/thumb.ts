// 親指マチ部分
export const thumbMachi = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 2
  ctx.strokeStyle = '#red'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(195, 128)
  ctx.quadraticCurveTo(178, 130, 178, 160)
  ctx.quadraticCurveTo(188, 530, 470, 595)
  ctx.quadraticCurveTo(450, 560, 410, 535)
  ctx.quadraticCurveTo(255, 450, 225, 120)
  ctx.lineTo(195, 128)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

// 親指ターゲット部分
export const thumbTarget = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 2
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(225, 120)
  ctx.quadraticCurveTo(265, 460, 410, 535)
  ctx.quadraticCurveTo(430, 545, 470, 595)
  ctx.quadraticCurveTo(490, 602, 503, 600)
  ctx.lineTo(470, 510)
  ctx.quadraticCurveTo(325, 410, 275, 170)
  ctx.quadraticCurveTo(250, 130, 225, 120)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

//  親指掛け紐
export const thumbHookLeather = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 2
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(287, 520)
  ctx.quadraticCurveTo(280, 540, 285, 535)
  ctx.quadraticCurveTo(300, 535, 313, 540)
  ctx.quadraticCurveTo(305, 535, 287, 520)
  ctx.closePath()

  ctx.moveTo(285, 537)
  ctx.quadraticCurveTo(280, 540, 285, 539)
  ctx.quadraticCurveTo(290, 540, 300, 547)
  ctx.quadraticCurveTo(300, 540, 305, 540)
  ctx.closePath()

  ctx.moveTo(300, 545)
  ctx.quadraticCurveTo(350, 590, 345, 590)
  ctx.quadraticCurveTo(340, 570, 310, 540)
  ctx.closePath()

  ctx.stroke()
  ctx.fill()
}
