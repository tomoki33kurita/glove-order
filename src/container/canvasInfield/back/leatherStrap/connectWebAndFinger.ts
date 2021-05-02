export const connectWebToIndexTop = (
  ctx: CanvasRenderingContext2D,
  color: string,   
) => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(539, 31) // 左上
  ctx.quadraticCurveTo(539, 39, 539, 39)　// 左下 
  ctx.quadraticCurveTo(556, 36, 565, 55)　// 右下 
  ctx.quadraticCurveTo(570, 44, 570, 44)　// 右上 
  ctx.quadraticCurveTo(556, 22, 539, 31)　// 左上 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 側面ライン
  ctx.moveTo(539, 39) // 左上
  ctx.quadraticCurveTo(552, 29, 567, 49)　// 左下 
  ctx.stroke()
  ctx.closePath()
  
}

export const connectWebToIndex = (
  ctx: CanvasRenderingContext2D,
  color: string, 
  locationX: number,
  locationY: number 
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 左上右下方向の革紐
  ctx.beginPath()
  ctx.moveTo(508 + locationX, 158 + locationY) // 左上
  ctx.quadraticCurveTo(502 + locationX, 168 + locationY, 502 + locationX, 168 + locationY)　// 左下 
  ctx.quadraticCurveTo(510 + locationX, 173 + locationY, 510 + locationX, 173 + locationY)　// 左下 
  ctx.quadraticCurveTo(515 + locationX, 170 + locationY, 516 + locationX, 161 + locationY)　// 右上 
  ctx.quadraticCurveTo(514 + locationX, 156 + locationY, 508 + locationX, 158 + locationY)　// 左上 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 側面ライン
  ctx.moveTo(502 + locationX, 168 + locationY) // 左上
  ctx.quadraticCurveTo(506 + locationX, 168 + locationY, 512 + locationX, 171 + locationY)　// 左下 
  ctx.stroke()
  ctx.closePath()
}

export const connectWebToThumbTop = (
  ctx: CanvasRenderingContext2D,
  color: string,   
) => {
  ctx.lineWidth = 2.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(709, 254) // 左上
  ctx.quadraticCurveTo(718, 262, 714, 271)　// 左下 
  ctx.quadraticCurveTo(717, 273, 721, 269)　// 右下 
  ctx.quadraticCurveTo(722, 256, 716, 250)　// 右上 
  ctx.quadraticCurveTo(712, 248, 709, 254)　// 左上 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}


export const connectWebToThumb = (
  ctx: CanvasRenderingContext2D,
  color: string, 
  locationX: number,
  locationY: number 
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 左上右下方向の革紐
  ctx.beginPath()
  ctx.moveTo(628 + locationX, 343 + locationY) // 左上
  ctx.quadraticCurveTo(629 + locationX, 350 + locationY, 629 + locationX, 350 + locationY)　// 左下 
  ctx.quadraticCurveTo(635 + locationX, 353 + locationY, 640 + locationX, 348 + locationY)　// 右下 
  ctx.quadraticCurveTo(639 + locationX, 337 + locationY, 639 + locationX, 337 + locationY)　// 右上 
  ctx.quadraticCurveTo(635 + locationX, 343 + locationY, 628 + locationX, 343 + locationY)　// 左上 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 側面ライン
  ctx.moveTo(632 + locationX, 343 + locationY) // 上
  ctx.quadraticCurveTo(634 + locationX, 352 + locationY, 634 + locationX, 352 + locationY)　// 左下 
  ctx.stroke()
  ctx.closePath()
}