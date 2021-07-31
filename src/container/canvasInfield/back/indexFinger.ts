export const indexRight = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.3
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(515, 20) // 左上
  ctx.quadraticCurveTo(427, 170, 403, 356) // 左下
  ctx.quadraticCurveTo(423, 356, 435, 362) // 右下
  ctx.quadraticCurveTo(448, 296, 479, 240) //
  ctx.quadraticCurveTo(502, 221, 502, 221) // 折り返し＿左上
  ctx.quadraticCurveTo(528, 134, 559, 68)
  ctx.quadraticCurveTo(563, 48, 553, 32)
  ctx.quadraticCurveTo(537, 21, 515, 20)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

export const indexLeft = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(513, 20) // 右上
  ctx.quadraticCurveTo(486, 22, 470, 41)
  ctx.quadraticCurveTo(380, 177, 377, 360) // 左下
  ctx.quadraticCurveTo(400, 357, 402, 356) // 右下
  ctx.quadraticCurveTo(424, 170, 513, 20) // 右下
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
