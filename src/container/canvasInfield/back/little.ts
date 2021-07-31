export const littleRight = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.3
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(212, 156) // 左上
  ctx.quadraticCurveTo(170, 413, 321, 590) // 下＿ベルトヘリ革の左
  ctx.quadraticCurveTo(277, 516, 263, 458)
  ctx.quadraticCurveTo(261, 440, 272, 427)
  ctx.quadraticCurveTo(222, 292, 241, 165)
  ctx.quadraticCurveTo(240, 152, 226, 147) // 頂点
  ctx.quadraticCurveTo(214, 147, 212, 156) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

export const littleLeft = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.3
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(211, 161) // 上
  ctx.quadraticCurveTo(185, 287, 213, 401) //
  ctx.quadraticCurveTo(234, 498, 320, 589) // 下
  ctx.quadraticCurveTo(170, 415, 211, 161) // 上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
