export const thumbHook = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color


  ctx.beginPath()
  // 一番右
  ctx.moveTo(627, 473) // 左上
  ctx.quadraticCurveTo(633, 517, 625, 583) // 
  ctx.quadraticCurveTo(630, 577, 641, 595) // 先端
  ctx.quadraticCurveTo(637, 538, 652, 482) // 右上＿三角右下 
  ctx.quadraticCurveTo(643, 461, 633, 452) // 右上
  ctx.quadraticCurveTo(627, 473, 627, 473) // 
  ctx.stroke()
  ctx.fill()
  ctx.moveTo(627, 473) // 左上
  ctx.quadraticCurveTo(635, 485, 652, 484) // 
  ctx.stroke()
  ctx.closePath()


  ctx.beginPath()
  // 真ん中
  ctx.moveTo(603, 509) // 左上
  ctx.quadraticCurveTo(611, 507, 617, 517) // 左下内直角
  ctx.quadraticCurveTo(618, 560, 606, 603) // 
  ctx.quadraticCurveTo(609, 607, 609, 607) // 先端 
  ctx.quadraticCurveTo(629, 590, 629, 590) // 
  ctx.quadraticCurveTo(638, 557, 637, 525) // 右上_カーブ前 
  ctx.quadraticCurveTo(638, 501, 617, 491) // 右上
  ctx.quadraticCurveTo(603, 509, 603, 509) //  
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  // 一番左
  ctx.moveTo(574, 542) // 左上
  ctx.quadraticCurveTo(595, 550, 597, 576) // 左下内直角
  ctx.quadraticCurveTo(580, 600, 542, 601) // 
  ctx.quadraticCurveTo(538, 612, 538, 612) // 
  ctx.quadraticCurveTo(582, 609, 618, 582) // 
  ctx.quadraticCurveTo(624, 556, 595, 520) // 右上 
  ctx.quadraticCurveTo(577, 543, 574, 542) // 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()



}
