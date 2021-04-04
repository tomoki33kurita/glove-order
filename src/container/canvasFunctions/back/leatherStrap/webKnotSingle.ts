export const webKnotUpward = (
  ctx: CanvasRenderingContext2D,
  color: string, 
): void => {
  ctx.lineWidth = 2.0
  ctx.strokeStyle = '#383838'
   ctx.fillStyle = color
  ctx.beginPath()
  // 一番下の結び目
  ctx.moveTo(623, 372) // 左上
  ctx.quadraticCurveTo(616, 377,　621, 386)　// 左下
  ctx.quadraticCurveTo(632, 386, 630, 384) 
  ctx.quadraticCurveTo(634, 378, 634, 378) // 右上
  ctx.quadraticCurveTo(628, 368, 623, 372) 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 一番下の結び目＿側面
  ctx.moveTo(626, 373) // 左上
  ctx.quadraticCurveTo(625, 380,　629, 386)　// 左下
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  // 二段目の結び目
  ctx.moveTo(629, 361) // 左上
  ctx.quadraticCurveTo(616, 377,619, 378)　　// 左下
  ctx.quadraticCurveTo(624, 362,633, 379)  
  ctx.quadraticCurveTo(638, 371,638, 371)  // 右上
  ctx.quadraticCurveTo(637, 360,629, 361)  
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  // 先端紐
  ctx.moveTo(634, 363) // 左上
  ctx.quadraticCurveTo(638, 363,638, 371)　　// 左下
  ctx.quadraticCurveTo(652, 355,684, 336)  // 右下
  ctx.quadraticCurveTo(685, 334,685, 328)  // 右上
  ctx.quadraticCurveTo(634, 363,634, 363)  
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

}

export const webKnotDownward = (
  ctx: CanvasRenderingContext2D,
  color: string, 
): void => {
  ctx.lineWidth = 2.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 結び目1段目
  ctx.beginPath()
  ctx.moveTo(729, 267) // 左上
  ctx.quadraticCurveTo(729, 275, 729, 275)　// 左下
  ctx.quadraticCurveTo(735, 271, 742, 274) 
  ctx.quadraticCurveTo(740, 265, 729, 267) 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 結び目2段目
  ctx.beginPath()
  ctx.moveTo(728, 275) // 左上
  ctx.quadraticCurveTo(730, 288, 730, 288)　// 左下
  ctx.quadraticCurveTo(736, 284, 744, 284) 
  ctx.quadraticCurveTo(746, 274, 746, 274) 
  ctx.quadraticCurveTo(736, 270, 728, 275) 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 紐部分
  ctx.beginPath()
  ctx.moveTo(732, 290) // 左上
  ctx.quadraticCurveTo(742, 344, 742, 394)　// 左下
  ctx.quadraticCurveTo(750, 388, 750, 388) 
  ctx.quadraticCurveTo(754, 360, 743, 286) // 右上 
  ctx.quadraticCurveTo(735, 285, 732, 290) 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

}


