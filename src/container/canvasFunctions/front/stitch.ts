export const stitch = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.setLineDash([5, 5])

  // Hウェブ横
  ctx.moveTo(337, 87) // 右上
  ctx.quadraticCurveTo(250, 140, 231, 218) // 左下
  ctx.moveTo(339, 91) // 右上
  ctx.quadraticCurveTo(245, 153, 227, 248) // 左下
  ctx.moveTo(339, 94) // 右上
  ctx.quadraticCurveTo(245, 158, 230, 255) // 左下
  // Hウェブ横2
  ctx.moveTo(357, 173) // 右上
  ctx.quadraticCurveTo(281, 229, 255, 296) // 左下
  ctx.moveTo(359, 184) // 右上
  ctx.quadraticCurveTo(283, 231, 261, 303) // 左下

  ctx.moveTo(357, 173) // 右上
  ctx.quadraticCurveTo(359, 184, 359, 184) // 右下

  // 土手親指〜小指
  ctx.moveTo(262, 472) // 親指外
  ctx.quadraticCurveTo(261, 459, 273, 456) 
  ctx.quadraticCurveTo(288, 445, 296, 460) 
  ctx.quadraticCurveTo(304, 470, 309, 494) 
  ctx.quadraticCurveTo(325, 530, 358, 548) 
  ctx.quadraticCurveTo(405, 567, 466, 565) 
  ctx.quadraticCurveTo(517, 570, 572, 550) 
  ctx.quadraticCurveTo(595, 532, 608, 507) 
  ctx.quadraticCurveTo(632, 444, 632, 444)  //小指内
  ctx.moveTo(649, 427) // 小指外
  ctx.quadraticCurveTo(673, 438, 657, 459) 
  ctx.quadraticCurveTo(647, 498, 637, 520) 
  
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}