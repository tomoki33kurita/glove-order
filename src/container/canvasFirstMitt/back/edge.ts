export const edges = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(300, 611) // 左上
  ctx.quadraticCurveTo(295, 616, 300, 620) // 左下
  ctx.quadraticCurveTo(336, 640, 409, 633) //
  ctx.quadraticCurveTo(336, 640, 449, 630) //
  ctx.quadraticCurveTo(469, 622, 490, 627) // 右下
  ctx.quadraticCurveTo(500, 622, 497, 617) // 右上
  ctx.quadraticCurveTo(469, 607, 414, 620) //
  ctx.quadraticCurveTo(330, 632, 300, 611) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 手の甲＿窓部分
  ctx.beginPath()
  ctx.moveTo(269, 487) // ベルト＿左上の左上
  ctx.quadraticCurveTo(265, 496, 272, 503) // ベルト＿左上の左下
  ctx.quadraticCurveTo(463, 499, 463, 499) // ベルト＿右上カーブ突入
  ctx.quadraticCurveTo(511, 483, 514, 443) // ベルト＿右カーブ中央
  ctx.quadraticCurveTo(510, 402, 474, 390) //
  ctx.quadraticCurveTo(433, 373, 365, 376) //
  ctx.quadraticCurveTo(318, 383, 277, 407) //
  ctx.quadraticCurveTo(243, 440, 253, 495) //
  ctx.quadraticCurveTo(284, 610, 284, 610) //
  ctx.quadraticCurveTo(283, 608, 280, 609) //
  ctx.quadraticCurveTo(285, 624, 301, 611) // 左下＿折り返し
  ctx.quadraticCurveTo(290, 552, 270, 502) //
  ctx.quadraticCurveTo(265, 462, 277, 435) //
  ctx.quadraticCurveTo(305, 400, 361, 392) //
  ctx.quadraticCurveTo(311, 402, 361, 392) //
  ctx.quadraticCurveTo(384, 383, 447, 398) //
  ctx.quadraticCurveTo(475, 405, 492, 425) //
  ctx.quadraticCurveTo(506, 432, 482, 467) //
  ctx.quadraticCurveTo(452, 489, 414, 486) //
  ctx.quadraticCurveTo(335, 482, 269, 487) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 指先＿右
  ctx.beginPath()
  ctx.moveTo(460, 69) // 左
  ctx.quadraticCurveTo(447, 72, 443, 83) //
  ctx.quadraticCurveTo(437, 105, 434, 139) //
  ctx.quadraticCurveTo(433, 188, 453, 223) //
  ctx.quadraticCurveTo(468, 252, 479, 263) //
  ctx.quadraticCurveTo(506, 281, 520, 304) //
  ctx.quadraticCurveTo(543, 321, 551, 333) //
  ctx.quadraticCurveTo(592, 366, 614, 364) //
  ctx.quadraticCurveTo(650, 345, 663, 306) //
  ctx.quadraticCurveTo(676, 283, 678, 254) // 右上＿外
  ctx.quadraticCurveTo(680, 240, 669, 241) // 右上＿内
  ctx.quadraticCurveTo(671, 264, 654, 281) //
  ctx.quadraticCurveTo(653, 301, 635, 317) //
  ctx.quadraticCurveTo(636, 329, 625, 336) //
  ctx.quadraticCurveTo(609, 356, 591, 339) //
  ctx.quadraticCurveTo(561, 325, 536, 300) //
  ctx.quadraticCurveTo(513, 271, 491, 255) //
  ctx.quadraticCurveTo(461, 217, 453, 175) //
  ctx.quadraticCurveTo(454, 123, 475, 105) //
  ctx.quadraticCurveTo(487, 80, 460, 69) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  ctx.moveTo(460, 76) // 左
  ctx.quadraticCurveTo(460, 87, 460, 87) //
  ctx.quadraticCurveTo(445, 124, 450, 167) //
  ctx.stroke()

  // ブーメラン右のヘリ革
  ctx.beginPath()
  ctx.moveTo(524, 40) // 左上
  ctx.quadraticCurveTo(524, 51, 503, 60) // 左下
  ctx.quadraticCurveTo(511, 62, 515, 69) // 右下
  ctx.quadraticCurveTo(521, 67, 530, 59) //
  ctx.quadraticCurveTo(529, 61, 536, 48) // 右上
  ctx.quadraticCurveTo(535, 38, 524, 40) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  //
  ctx.beginPath()
  ctx.moveTo(476, 81) // 左下
  ctx.quadraticCurveTo(484, 79, 492, 84) //右下
  ctx.quadraticCurveTo(491, 79, 500, 82) //右上
  ctx.quadraticCurveTo(499, 69, 487, 70) //
  ctx.quadraticCurveTo(477, 70, 476, 81) //右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  //
  ctx.beginPath()
  ctx.moveTo(473, 95) // 左上
  ctx.quadraticCurveTo(475, 107, 483, 110) //
  ctx.quadraticCurveTo(498, 109, 499, 94) //右上
  ctx.quadraticCurveTo(495, 103, 488, 98) //
  ctx.quadraticCurveTo(481, 93, 473, 95) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
