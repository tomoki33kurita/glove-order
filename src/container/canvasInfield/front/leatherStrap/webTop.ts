
export const webTop = (
  ctx: CanvasRenderingContext2D,
  color: string, 
  locationX: number, 
  locationY: number, 
  numerator?: number,
  scaleSize?: number,
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if(numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if(scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  // 右から２番目
  ctx.moveTo(202 + locationX, 199 + locationY) // 左上
  ctx.quadraticCurveTo(205 + locationX, 202 + locationY,　207 + locationX, 202 + locationY)　// 左下
  ctx.quadraticCurveTo(210 + locationX, 195 + locationY,　229 + locationX, 214 + locationY) 
  ctx.quadraticCurveTo(232 + locationX, 187 + locationY,　207 + locationX, 185 + locationY) 
  ctx.quadraticCurveTo(202 + locationX, 190 + locationY, 202 + locationX, 199 + locationY) 
  ctx.stroke()
  ctx.fill()
  // 側面ライン
  ctx.closePath()
  ctx.moveTo(203 + locationX, 195 + locationY) // 左上
  ctx.quadraticCurveTo(213 + locationX, 190 + locationY,　222 + locationX, 208 + locationY)　// 右下
  ctx.stroke()

  if(numerator !== undefined) {
    ctx.restore()
  }

}



export const webTop2 = (
  ctx: CanvasRenderingContext2D,
  color: string, 
  locationX: number, 
  locationY: number, 
  numerator?: number,
  scaleSize?: number,
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if(numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if(scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  // 右から２番目
  ctx.moveTo(285 + locationX, 80 + locationY) // 左上
  ctx.quadraticCurveTo(288  + locationX, 94 + locationY, 289 + locationX, 112 + locationY)　// 左下
  ctx.quadraticCurveTo(299  + locationX, 107 + locationY, 299 + locationX, 107 + locationY) 
  ctx.quadraticCurveTo(306  + locationX, 92 + locationY,　298 + locationX, 74 + locationY) 
  ctx.quadraticCurveTo(290  + locationX, 75 + locationY, 285 + locationX, 80 + locationY) 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 側面ライン
  ctx.moveTo(285 + locationX, 80 + locationY) // 左上
  ctx.quadraticCurveTo(295 + locationX, 92 + locationY,289 + locationX, 110 + locationY)　// 右下
  ctx.stroke()

  if(numerator !== undefined) {
    ctx.restore()
  }


}