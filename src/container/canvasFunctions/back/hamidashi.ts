export const hamidashi = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 5.0
  ctx.strokeStyle = '#fff' 
  ctx.beginPath()
  ctx.moveTo(218, 150) // 小指先端
  ctx.quadraticCurveTo(162, 394, 324, 590) // 小指末端
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(243, 313) // 小指薬指の間先端
  ctx.quadraticCurveTo(250, 375, 273, 427) // 小指薬指の間末端
  ctx.stroke()
  ctx.closePath()

  // ctx.lineWidth = 4.0
  ctx.beginPath()
  ctx.moveTo(277, 92) // 薬指先端 
  ctx.quadraticCurveTo(240, 256, 294, 400) // 薬指末端
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(307, 262) // 薬指中指の間先端
  ctx.quadraticCurveTo(306, 322, 317, 382) // 薬指中指の間末端
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(377, 37) // 中指先端 
  ctx.quadraticCurveTo(312, 190, 340, 368) // 中指末端
  ctx.stroke()
  ctx.closePath()
  // ctx.lineWidth = 3.0

  ctx.beginPath()
  ctx.moveTo(391, 225) // 中指人差し指の間先端
  ctx.quadraticCurveTo(375, 290, 375, 360) // 薬指中指の間末端
  ctx.stroke()
  ctx.closePath()

  // ctx.lineWidth = 4.0
  ctx.beginPath()
  ctx.moveTo(516, 20) // 人差し指先端 
  ctx.quadraticCurveTo(429, 157, 403, 356) // 人差し指末端
  ctx.stroke()
  ctx.closePath()

  // ctx.lineWidth = 4.0
  ctx.beginPath()
  ctx.moveTo(505, 217) // 折り返し左＿上
  ctx.quadraticCurveTo(478, 237, 478, 239) 
  ctx.quadraticCurveTo(472, 252, 472, 252) // 折り返し左＿下
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(600, 355) // 折り返し右＿上
  ctx.quadraticCurveTo(596, 398, 595, 402) // 折り返し右＿下
  ctx.stroke()
  ctx.closePath()

  // 親指
  ctx.lineWidth = 3.0
  ctx.beginPath()
  ctx.moveTo(675, 372) // 折り返し右＿上
  ctx.quadraticCurveTo(648, 394, 643, 425) // 折り返し右＿下
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.moveTo(630, 455) // 折り返し右＿上
  ctx.quadraticCurveTo(615, 494, 592, 522) // 折り返し右＿下
  ctx.stroke()
  ctx.closePath()


}
