export const ringRight = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(279, 90) // 左上
  ctx.quadraticCurveTo(234, 222, 295, 398) // 左下
  ctx.quadraticCurveTo(317, 380, 317, 380) // 右下
  ctx.quadraticCurveTo(295, 223, 321, 125) // 
  ctx.quadraticCurveTo(327, 104, 314, 85) // 
  ctx.quadraticCurveTo(298, 78, 279, 90) // 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

export const ringLeft = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(277, 92)  // 右上
  ctx.quadraticCurveTo(237, 154, 236, 214)
  ctx.quadraticCurveTo(236, 322, 273, 424) //左下
  ctx.quadraticCurveTo(294, 400, 294, 400) //右下
  ctx.quadraticCurveTo(236, 222, 277, 92) //右上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
