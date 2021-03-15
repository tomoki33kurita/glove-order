const hatakeyamaLabel = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  // ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(385, 485) //
  ctx.lineTo(358, 470) //
  ctx.quadraticCurveTo(347, 467, 349, 482) //
  ctx.lineTo(356, 508) //
  ctx.quadraticCurveTo(358, 516, 365, 515) //
  ctx.lineTo(395, 515) //
  ctx.quadraticCurveTo(400, 516, 403, 510) //
  ctx.lineTo(409, 499) //
  ctx.lineTo(427, 499) //
  ctx.lineTo(414, 526) //
  ctx.lineTo(437, 526) //
  ctx.quadraticCurveTo(446, 525, 449, 515) //
  ctx.lineTo(460, 495) //
  ctx.lineTo(488, 507) //
  ctx.quadraticCurveTo(502, 508, 501, 496) //
  ctx.lineTo(494, 471) //
  ctx.quadraticCurveTo(492, 460, 483, 461) //
  ctx.lineTo(452, 461) //
  ctx.quadraticCurveTo(441, 463, 440, 472) //
  ctx.lineTo(436, 481) //
  ctx.lineTo(418, 481) //
  ctx.lineTo(431, 452) //
  ctx.lineTo(409, 452) //
  ctx.quadraticCurveTo(399, 453, 395, 463) //
  ctx.lineTo(385, 485) //
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

const lableInBlack = (ctx: CanvasRenderingContext2D): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#383838'
  // 左側
  ctx.beginPath()
  ctx.moveTo(370, 490) //左上
  ctx.lineTo(374, 505) //左下
  ctx.lineTo(375, 505) //右下
  ctx.lineTo(381, 493) //右上
  ctx.lineTo(369, 490) //左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // 右側
  ctx.beginPath()
  ctx.moveTo(472, 473) // 上
  ctx.lineTo(466, 485) // 左下
  ctx.lineTo(477, 486) // 右下
  ctx.lineTo(472, 473) // 上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

const lableBaseBlack = (ctx: CanvasRenderingContext2D): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#383838'
  ctx.beginPath()
  ctx.moveTo(344, 483) // 左上
  ctx.lineTo(353, 516) // 左下
  ctx.quadraticCurveTo(355, 522, 365, 524) // 左下カーブ
  ctx.lineTo(396, 525) // 左下
  ctx.quadraticCurveTo(406, 523, 410, 513)
  ctx.lineTo(414, 506)
  ctx.lineTo(417, 506)
  ctx.lineTo(407, 524)
  ctx.quadraticCurveTo(406, 531, 413, 533)
  ctx.lineTo(438, 534)
  ctx.quadraticCurveTo(450, 533, 452, 525)
  ctx.lineTo(463, 501)
  ctx.lineTo(487, 513)
  ctx.quadraticCurveTo(508, 516, 508, 495) // 右下カーブ
  ctx.lineTo(497, 462)
  ctx.quadraticCurveTo(493, 454, 484, 454) // 右上カーブ
  ctx.lineTo(451, 454)
  ctx.quadraticCurveTo(437, 455, 432, 475)
  ctx.lineTo(429, 475)
  ctx.lineTo(439, 456)
  ctx.quadraticCurveTo(440, 447, 431, 445)
  ctx.lineTo(410, 445)
  ctx.quadraticCurveTo(400, 445, 395, 452)
  ctx.lineTo(385, 475)
  ctx.lineTo(363, 463)
  ctx.quadraticCurveTo(340, 460, 344, 483)

  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

// ラベル上の輪郭ライン
const lineOnLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#red'
  ctx.beginPath()
  ctx.moveTo(344, 483) // 左上
  ctx.lineTo(353, 516) // 左下
  // ctx.quadraticCurveTo(355, 522, 365, 524) // 左下カーブ
  ctx.stroke()
  // ctx.closePath()
}

export const selectedLabel = (ctx: CanvasRenderingContext2D, labelColor: string, baseColor?: string, lineColor?: string) => {
  lableBaseBlack(ctx) // ラベルのベースブラック部分
  hatakeyamaLabel(ctx, labelColor) // ラベルの黄色部分
  lableInBlack(ctx) // ラベルの内側の黒い部分
  // lineOnLine(ctx)
}
