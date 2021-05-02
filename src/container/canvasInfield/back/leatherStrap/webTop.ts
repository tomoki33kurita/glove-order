export const webTops = (
  ctx: CanvasRenderingContext2D,
  color: string, 
  locationX: number, 
  locationY: number, 
  numerator?: number,
  scaleSize?: number,
): void => {
  ctx.lineWidth = 2.5
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
  ctx.moveTo(706 + locationX, 187 + locationY) // 左上
  ctx.quadraticCurveTo(690 + locationX, 200 + locationY,　690 + locationX, 200 + locationY)　// 左下
  ctx.quadraticCurveTo(690 + locationX, 208 + locationY,　697 + locationX, 211 + locationY) 
  ctx.quadraticCurveTo(712 + locationX, 197 + locationY,　712 + locationX, 197 + locationY) 
  ctx.quadraticCurveTo(711 + locationX, 191 + locationY,　706 + locationX, 187 + locationY) 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  if(numerator !== undefined) {
    ctx.restore()
  }

  

  // 手前側の結び目
  // 上記の1つ目をコピーする  
}
