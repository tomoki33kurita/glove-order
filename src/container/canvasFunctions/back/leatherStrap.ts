export const leatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0

  ctx.strokeStyle = 'blue'// ' #383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // ウェブ＿捕球面間のクロス左＿左上
  ctx.moveTo(552, 199) // 左上
  ctx.quadraticCurveTo(564, 207, 557, 226) 
  ctx.quadraticCurveTo(552, 254, 535, 283) // 左下
  ctx.quadraticCurveTo(529, 296, 546, 297) // 右下
  ctx.quadraticCurveTo(562, 268, 568, 217) 
  ctx.quadraticCurveTo(572, 200, 550, 187) 
  ctx.quadraticCurveTo(552, 199, 552, 199) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

    // ウェブ＿捕球面間のクロス左＿右上
    ctx.beginPath()
    ctx.moveTo(505, 253) // 左下
    ctx.quadraticCurveTo(501, 264 ,513, 265) // 右下 
    ctx.quadraticCurveTo(543, 249, 580, 232)  
    ctx.quadraticCurveTo(585, 235, 588, 229) // 右上 
    ctx.quadraticCurveTo(588, 220, 580, 215)  
    ctx.quadraticCurveTo(565, 217, 549, 230)  
    ctx.quadraticCurveTo(529, 243, 505, 253)  
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
    

  ctx.stroke()
  // ctx.fill()
  ctx.closePath()
}
