export const webTop = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  // 右から２番目
  ctx.moveTo(194 + locationX, 177 + locationY) // 左上
  ctx.quadraticCurveTo(198 + locationX, 166 + locationY, 208 + locationX, 167 + locationY) //
  ctx.quadraticCurveTo(219 + locationX, 166 + locationY, 220 + locationX, 187 + locationY) // 右＿左
  ctx.quadraticCurveTo(228 + locationX, 181 + locationY, 228 + locationX, 178 + locationY) // 右＿右
  ctx.quadraticCurveTo(227 + locationX, 157 + locationY, 208 + locationX, 157 + locationY) //
  ctx.quadraticCurveTo(192 + locationX, 163 + locationY, 194 + locationX, 177 + locationY) //
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 側面ライン
  ctx.moveTo(195 + locationX, 167 + locationY) // 左上
  ctx.quadraticCurveTo(220 + locationX, 150 + locationY, 225 + locationX, 182 + locationY) // 右下
  ctx.stroke()

  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const webTop2 = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  // 右から２番目
  ctx.moveTo(291 + locationX, 92 + locationY) // 左上
  ctx.quadraticCurveTo(296 + locationX, 86 + locationY, 302 + locationX, 90 + locationY) //
  ctx.quadraticCurveTo(310 + locationX, 92 + locationY, 316 + locationX, 102 + locationY) // 右＿左
  ctx.quadraticCurveTo(324 + locationX, 105 + locationY, 326 + locationX, 98 + locationY) // 右＿右
  ctx.quadraticCurveTo(319 + locationX, 85 + locationY, 309 + locationX, 81 + locationY) //
  ctx.quadraticCurveTo(301 + locationX, 80 + locationY, 295 + locationX, 85 + locationY) //
  ctx.quadraticCurveTo(290 + locationX, 87 + locationY, 291 + locationX, 92 + locationY) //
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 側面ライン
  ctx.moveTo(296 + locationX, 83 + locationY) // 左上
  ctx.quadraticCurveTo(310 + locationX, 85 + locationY, 317 + locationX, 103 + locationY) // 右下
  ctx.stroke()

  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const webTop3 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(326, 69) // 左上
  ctx.quadraticCurveTo(326, 73, 326, 73) // 左下
  ctx.quadraticCurveTo(343, 90, 343, 88) // 右下
  ctx.quadraticCurveTo(336, 68, 336, 68) // 右上
  ctx.quadraticCurveTo(331, 66, 326, 69) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
