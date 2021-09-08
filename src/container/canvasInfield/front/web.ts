export const web = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ウェブ先端
  ctx.beginPath()
  ctx.moveTo(194, 245) // 左＿左上
  ctx.quadraticCurveTo(225, 242, 230, 262) // 左＿右下
  ctx.quadraticCurveTo(257, 173, 354, 104) // 右＿下
  ctx.quadraticCurveTo(352, 87, 352, 68) // 右＿下
  ctx.quadraticCurveTo(351, 58, 343, 52) // 右＿上
  ctx.quadraticCurveTo(223, 110, 194, 245) // 右＿下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // ウェブ
  ctx.beginPath()
  ctx.moveTo(240, 275) // 左＿上
  ctx.quadraticCurveTo(261, 296, 275, 326) // 左＿右下
  ctx.quadraticCurveTo(304, 249, 366, 209) // 右＿下
  ctx.quadraticCurveTo(361, 152, 361, 152) //
  ctx.quadraticCurveTo(359, 141, 353, 142) // 右＿上
  ctx.quadraticCurveTo(273, 192, 240, 275) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // ウェブ縦
  ctx.beginPath()
  ctx.moveTo(241, 237) // 左＿上
  ctx.quadraticCurveTo(250, 255, 250, 255) // 左＿下
  ctx.quadraticCurveTo(265, 221, 290, 195) // 右＿下
  ctx.quadraticCurveTo(283, 170, 283, 170) // 右＿上
  ctx.quadraticCurveTo(254, 199, 241, 237) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
