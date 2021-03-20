export const listCross = (
  ctx: CanvasRenderingContext2D,
  color: string, 
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
   ctx.fillStyle = color
  // 左上右下方向の革紐
  ctx.beginPath()
  ctx.moveTo(283, 526) // 左上
  ctx.quadraticCurveTo(291, 561, 321, 572)　// 
  ctx.quadraticCurveTo(333, 568, 335, 568)　// 右下
  ctx.quadraticCurveTo(329, 561, 331, 561)　// 右上
  ctx.quadraticCurveTo(299, 553, 287, 524)　// 右上
  ctx.quadraticCurveTo(281, 520, 283, 526)　// 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 右上左下方向の革紐
  ctx.beginPath()
  ctx.moveTo(291, 555) // 左上
  ctx.quadraticCurveTo(295, 563, 309, 569)　// 左下
  ctx.quadraticCurveTo(293, 547, 310, 525)　// 右下
  ctx.quadraticCurveTo(317, 510, 305, 513)　// 右上
  ctx.quadraticCurveTo(287, 527, 291, 555)　// 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

