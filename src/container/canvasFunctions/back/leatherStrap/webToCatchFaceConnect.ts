// ウェブ＿捕球面間のクロス
export const webToCatchFaceConnect = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
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
    
  // ウェブ＿捕球面間のクロス右＿右上
  ctx.beginPath()
  ctx.moveTo(563, 320) // 左下
  ctx.quadraticCurveTo(560, 335 ,575, 330) // 右下 
  ctx.quadraticCurveTo(615, 305 ,615, 305)  
  ctx.quadraticCurveTo(634, 308, 634, 308) // 右上 
  ctx.quadraticCurveTo(633, 293, 623, 289)  
  ctx.quadraticCurveTo(620, 290, 594, 302)  
  ctx.quadraticCurveTo(584, 305, 563, 320)  
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // ウェブ＿捕球面間のクロス右＿左上
  ctx.beginPath()
  ctx.moveTo(607, 270) // 左上
  ctx.quadraticCurveTo(619, 278, 612, 297) 
  ctx.quadraticCurveTo(607, 325, 590, 354) // 左下
  ctx.quadraticCurveTo(584, 367, 601, 368) // 右下
  ctx.quadraticCurveTo(617, 339, 623, 288) 
  ctx.quadraticCurveTo(627, 271, 605, 258) 
  ctx.quadraticCurveTo(607, 270, 607, 270) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

}
