export const web = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // // ウェブ上線
  ctx.moveTo(285, 103)
  ctx.lineTo(495, 45)
  ctx.quadraticCurveTo(483, 62, 487, 70)
  // // ウェブ右線
  ctx.lineTo(502, 135)
  // // ウェブ下線
  ctx.lineTo(297, 193)
  // // ウェブ左線
  ctx.lineTo(275, 122)
  ctx.quadraticCurveTo(260, 106, 253, 111)
  ctx.closePath()

  ctx.fill()
  ctx.stroke()
}

export const webTop = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // ウェブ先端上線左
  ctx.moveTo(235, 80)
  // ウェブ先端上線右
  ctx.lineTo(497, 10)
  // ウェブ先端右線下
  ctx.lineTo(505, 42)
  // 下線右側左
  ctx.lineTo(245, 113)
  // 左線上
  ctx.lineTo(235, 80)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
}
