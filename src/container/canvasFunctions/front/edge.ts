export const edges = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ヘリ革
  ctx.beginPath()
  ctx.moveTo(278, 487) // 
  ctx.quadraticCurveTo(262, 486, 263, 468) //
  ctx.quadraticCurveTo(266, 458, 282, 454) //
  ctx.quadraticCurveTo(294, 451, 299, 467) // // 左上円部分＿内側
  ctx.quadraticCurveTo(318, 524, 358, 548) // // 左上円部分
  ctx.quadraticCurveTo(417, 570, 507, 568) // //
  ctx.quadraticCurveTo(544, 568, 575, 550) // //
  ctx.quadraticCurveTo(611, 523, 635, 441) // //
  ctx.quadraticCurveTo(638, 423, 652, 430) // 小指側＿頂点
  ctx.quadraticCurveTo(670, 445, 655, 462) //
  ctx.quadraticCurveTo(647, 519, 614, 555) //
  ctx.quadraticCurveTo(560, 600, 495, 581) //
  ctx.quadraticCurveTo(395, 585, 339, 558) //
  ctx.quadraticCurveTo(340, 583, 328, 587) //
  ctx.quadraticCurveTo(317, 588, 318, 580) //
  ctx.quadraticCurveTo(325, 575, 322, 562) //
  ctx.quadraticCurveTo(290, 535, 277, 488) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 左側＿つなぎ目の線  
  ctx.beginPath()
  ctx.moveTo(274, 470) // 
  ctx.quadraticCurveTo(283, 474, 286, 467) //
  ctx.quadraticCurveTo(302, 525, 340, 560) //
  ctx.stroke()
  ctx.closePath()

  // 右側＿つなぎ目の線  
  ctx.beginPath()
  ctx.moveTo(643, 446) // 
  ctx.quadraticCurveTo(645, 450, 649, 448) //
  ctx.quadraticCurveTo(617, 588, 497, 582) //
  ctx.stroke()
  ctx.closePath()

  // 左下 
  ctx.beginPath()
  ctx.moveTo(320, 587) // 左下
  ctx.quadraticCurveTo(364, 591, 395, 576) // 右下
  ctx.quadraticCurveTo(373, 572, 373, 572) // 右上
  ctx.quadraticCurveTo(350, 577, 339, 571) // 左上
  ctx.quadraticCurveTo(338, 585, 320, 587) // 左下
  ctx.stroke()
  ctx.fill()
  ctx.closePath()


}