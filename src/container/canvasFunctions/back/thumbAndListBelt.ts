export const thumbAndListBelt = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 2.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(291, 490) // ベルト左上
  ctx.quadraticCurveTo(319, 538, 340, 588) // ベルト左下
  ctx.quadraticCurveTo(428, 599, 528, 586) // ベルト右下
  ctx.quadraticCurveTo(600, 529, 633, 453) 
  ctx.quadraticCurveTo(684, 376, 731, 319) 
  ctx.quadraticCurveTo(747, 283, 722, 252) // 親指頂点 
  ctx.quadraticCurveTo(678, 259, 653, 285) 
  ctx.quadraticCurveTo(614, 316, 601, 355) // 折り返し右上
  ctx.quadraticCurveTo(596, 401, 596, 401) 
  ctx.quadraticCurveTo(552, 435, 500, 434) // 折り返し右下 
  ctx.quadraticCurveTo(485, 472, 442, 477) // 折り返し右下 
  ctx.quadraticCurveTo(291, 490, 291, 490) // ベルト左上 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
