export const littleHook = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  ctx.beginPath()
  // 根元
  ctx.moveTo(255, 460) // 右上
  ctx.lineTo(250, 465) // 左上
  ctx.lineTo(262, 485) // 左下
  ctx.lineTo(268, 480) // 右下
  ctx.lineTo(255, 460) // 右上＿開始地点
  ctx.closePath()

  // 結びの玉部分
  ctx.moveTo(242, 474) // 右上
  ctx.lineTo(228, 480) // 左上
  ctx.lineTo(235, 501) // 玉部分の左側面中央
  ctx.lineTo(249, 517) // 左下
  ctx.lineTo(256, 511) // 右下
  ctx.lineTo(256, 498) // 右下
  ctx.lineTo(242, 474) // 右上＿開始地点
  ctx.closePath()

  // 結びの玉上部の小さい結び玉部分
  ctx.moveTo(228, 481) // 右上
  ctx.moveTo(225, 483) // 右上の左
  ctx.lineTo(230, 506) // 左下
  ctx.lineTo(235, 501) // 右下
  ctx.lineTo(228, 481) // 右上
  ctx.closePath()

  // 結びの玉上部の紐先端部分
  ctx.moveTo(234, 502) // 右上
  ctx.lineTo(230, 507) // 左上
  ctx.lineTo(243, 536) // 左側面中央
  ctx.lineTo(244, 550) // 左下の上部
  ctx.lineTo(252, 561) // 中央真下
  ctx.lineTo(258, 550) // 右下
  ctx.lineTo(254, 530) // 右下の真上
  ctx.lineTo(234, 502) // 右上＿開始地点

  ctx.closePath()

  ctx.stroke()
  ctx.fill()
}
