export const thumbHook = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  ctx.beginPath()

  // 結びの玉部分
  ctx.moveTo(593, 518) // 真左
  ctx.lineTo(600, 527) // 左下
  ctx.lineTo(619, 534) // 右下
  ctx.lineTo(636, 527) // 右斜め上方向
  ctx.lineTo(616, 511) //
  ctx.lineTo(600, 510) //
  ctx.lineTo(593, 518) //
  ctx.closePath()

  // 結びの玉の右上部にある小さい結び玉部分
  ctx.moveTo(620, 514) // 真左
  ctx.lineTo(635, 525) // 左下
  ctx.lineTo(639, 522) // 右下
  ctx.lineTo(640, 506) // 右上
  ctx.lineTo(620, 514) // 真左＿開始地点
  ctx.closePath()

  // 上部の紐の先端
  ctx.moveTo(628, 510) // 左下
  ctx.lineTo(639, 506) // 右下
  ctx.quadraticCurveTo(640, 490, 667, 468) // 最上部
  ctx.quadraticCurveTo(630, 475, 629, 509) // 左下_開始地点
  ctx.closePath()

  // 下部の紐の先端
  ctx.moveTo(603, 529) // 左上
  ctx.quadraticCurveTo(582, 543, 585, 570) // 真下
  ctx.quadraticCurveTo(590, 545, 617, 534) // 右上
  ctx.lineTo(603, 529) // 左上_開始地点
  ctx.closePath()

  // 根元上
  ctx.moveTo(600, 495) // 左下
  ctx.lineTo(609, 502) // 右下
  ctx.lineTo(625, 490) // 右上
  ctx.lineTo(627, 479) // 右上
  ctx.closePath()

  // 根元下
  ctx.moveTo(565, 530) // 左下
  ctx.lineTo(572, 533) // 右下
  ctx.lineTo(584, 519) // 右上
  ctx.lineTo(580, 512) // 右上
  ctx.closePath()

  ctx.stroke()
  ctx.fill()
}
