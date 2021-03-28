export const onEdgeTojiThumb = (
  ctx: CanvasRenderingContext2D,
  color: string, 
  locationX: number, 
  locationY: number, 
  numerator?: number,
  // scaleSize?: number,
): void => {
  ctx.lineWidth = 2.5  // 太さを揃えるために意図的に太め
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  if(numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.beginPath()
  ctx.moveTo(330 + locationX, 515 + locationY) // 左上
  ctx.quadraticCurveTo(335 + locationX, 531 + locationY, 313 + locationX, 552  + locationY)　// 左下
  ctx.quadraticCurveTo(315 + locationX, 560 + locationY, 318 + locationX, 560  + locationY) // 右下
  ctx.quadraticCurveTo(343 + locationX, 548 + locationY, 338 + locationX, 520  + locationY) // 右上
  ctx.quadraticCurveTo(329 + locationX, 517 + locationY, 330 + locationX, 515  + locationY) // 左下
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  if(numerator !== undefined) {
    ctx.restore()
  }
}

export const onEdgeTojiCenter = (
  ctx: CanvasRenderingContext2D,
  color: string, 
  locationX: number, 
  locationY: number, 
  numerator?: number,
  // scaleSize?: number,
): void => {
  ctx.lineWidth = 2.5  // 太さを揃えるために意図的に太め
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  if(numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.beginPath()
  ctx.moveTo(355 + locationX, 539 + locationY) // 左上
  ctx.quadraticCurveTo(358 + locationX, 555 + locationY, 365 + locationX, 570  + locationY)　// 左下
  ctx.quadraticCurveTo(371 + locationX, 575 + locationY, 384 + locationX, 574  + locationY) // 右下
  ctx.quadraticCurveTo(374 + locationX, 565 + locationY, 370 + locationX, 543  + locationY) // 右上
  ctx.quadraticCurveTo(360 + locationX, 534 + locationY, 355 + locationX, 539  + locationY) // 左下
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  if(numerator !== undefined) {
    ctx.restore()
  }
}

export const onEdgeTojiLittle = (
  ctx: CanvasRenderingContext2D,
  color: string, 
  locationX: number, 
  locationY: number, 
  numerator?: number,
  // scaleSize?: number,
): void => {
  ctx.lineWidth = 2.5  // 太さを揃えるために意図的に太め
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  if(numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.beginPath()
  ctx.moveTo(600 + locationX, 516 + locationY) // 左上
  ctx.quadraticCurveTo(600 + locationX, 525 + locationY, 594 + locationX, 528  + locationY)　// 左下
  ctx.quadraticCurveTo(620 + locationX, 535 + locationY, 633 + locationX, 534  + locationY) // 右下
  ctx.quadraticCurveTo(643 + locationX, 530 + locationY, 640 + locationX, 521  + locationY) // 右上
  ctx.quadraticCurveTo(632 + locationX, 524 + locationY, 600 + locationX, 516  + locationY) // 左下
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  if(numerator !== undefined) {
    ctx.restore()
  }
}

export const onEdgeTojiLittle2 = (
  ctx: CanvasRenderingContext2D,
  color: string, 
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.beginPath()
  ctx.moveTo(634, 446) // 左上
  ctx.quadraticCurveTo(630, 457, 630, 457 )　// 左下
  ctx.quadraticCurveTo(642, 479, 661, 466 ) // 右下
  ctx.quadraticCurveTo(665, 460, 665, 455 ) // 右上
  ctx.quadraticCurveTo(646, 465, 634, 446 ) // 左下
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}