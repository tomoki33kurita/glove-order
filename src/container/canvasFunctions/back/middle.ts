export const middleRight = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(381, 37) // 中指先端
  ctx.quadraticCurveTo(313, 204, 345, 368) // 左下
  ctx.quadraticCurveTo(370, 360, 376, 360) // 右下
  ctx.quadraticCurveTo(378, 260, 406, 173) 
  ctx.quadraticCurveTo(422, 87, 421, 47) 
  ctx.quadraticCurveTo(410, 26, 381, 36) 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}


export const middleLeft = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle =  '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(370, 40) // 右上
  ctx.quadraticCurveTo(332, 78, 320, 135)
  ctx.quadraticCurveTo(288, 262, 318, 382) // 左下
  ctx.quadraticCurveTo(336, 371, 336, 371) // 右下
  ctx.quadraticCurveTo(310, 195, 370, 40) // 右下
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
