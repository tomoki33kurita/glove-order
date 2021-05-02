// ウェブ下
export const underWebTopLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(305, 200)
  ctx.lineTo(500, 145)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下左側面＿V右
export const underWebLeftLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(305, 200)
  ctx.lineTo(318, 240)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下左側面＿V左
export const underWebLeftLeftLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(318, 240)
  ctx.lineTo(280, 200)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下右側面＿V左
export const underWebRightLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(500, 145)
  ctx.lineTo(515, 195)
  ctx.closePath()
  ctx.stroke()
}

// ウェブ下右側面＿V右
export const underWebRightRightLine = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.moveTo(530, 140)
  ctx.lineTo(515, 195)
  ctx.closePath()
  ctx.stroke()
}

export const catchSurface = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(283, 200) // ウェブ下左側面＿V左
  ctx.quadraticCurveTo(320, 400, 470, 510) // ヒンジ横(土手左上)
  ctx.lineTo(505, 601) // ヒンジ横(土手左下)
  ctx.quadraticCurveTo(575, 600, 650, 558) // ヒンジ横(土手右)
  ctx.quadraticCurveTo(645, 520, 655, 510) // 小指マチ内側(土手横)
  ctx.quadraticCurveTo(790, 390, 733, 163) // 小指キリハミのカーブ

  ctx.lineTo(733, 163) // 小指キリハミのカーブの右上
  ctx.quadraticCurveTo(653, 50, 517, 37)
  // ctx.quadraticCurveTo(510, 50, 517, 32)
  ctx.quadraticCurveTo(488, 65, 530, 140)
  ctx.lineTo(515, 195)
  ctx.lineTo(500, 145)
  ctx.lineTo(305, 200)
  ctx.lineTo(318, 240)
  ctx.lineTo(283, 200)

  // ctx.quadraticCurveTo(730, 170, 740, 151)

  ctx.fill()
  ctx.stroke()
}
