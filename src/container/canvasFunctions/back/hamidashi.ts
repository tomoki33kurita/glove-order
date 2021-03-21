export const hamidashi = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838' 
  ctx.fillStyle = '#fff' // color
  ctx.beginPath()
  ctx.moveTo(218, 150) // 小指先端左
  ctx.quadraticCurveTo(160, 394, 322, 590) // 小指末端左
  ctx.quadraticCurveTo(324, 590, 324, 590) // 小指末端右
  ctx.quadraticCurveTo(164, 394, 221, 150) // 小指先端右
  ctx.quadraticCurveTo(218, 150, 218, 150) // 小指先端左
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(241, 313) // 小指薬指の間先端
  ctx.quadraticCurveTo(250, 375, 273, 427) // 小指薬指の間末端左
  ctx.quadraticCurveTo(277, 427, 277, 427) // 小指薬指の間末端右
  ctx.quadraticCurveTo(253, 375, 243, 313) // 小指薬指の間先端右
  ctx.quadraticCurveTo(241, 313, 241, 313) // 小指薬指の間先端左
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(277, 90) // 薬指先端＿左
  ctx.quadraticCurveTo(236, 256, 294, 400) // 薬指末端＿左
  ctx.quadraticCurveTo(297, 400, 298, 400) // 薬指末端＿右
  ctx.quadraticCurveTo(240, 256, 279, 90) // 薬指先端＿右
  ctx.quadraticCurveTo(279, 92, 277, 90) // 薬指末端＿左
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // 薬指中指の間
  ctx.beginPath()
  ctx.moveTo(307, 262) // 先端＿左
  ctx.quadraticCurveTo(304, 322, 317, 382) // 末端＿左
  ctx.quadraticCurveTo(322, 382, 322, 382) // 末端＿右
  ctx.quadraticCurveTo(308, 322, 309, 262) // 先端＿右
  ctx.quadraticCurveTo(307, 262, 307, 262) // 先端＿左
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // 中指中央
  ctx.beginPath()
  ctx.moveTo(375, 37) // 中指先端＿左
  ctx.quadraticCurveTo(311, 190, 338, 368) // 中指末端＿左
  ctx.quadraticCurveTo(343, 368, 343, 368) // 中指末端＿右
  ctx.quadraticCurveTo(315, 190, 377, 37) // 中指先端＿右
  ctx.quadraticCurveTo(375, 37, 375, 37) // 中指先端＿右
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // 中指＿人差し指の間
  ctx.beginPath()
  ctx.moveTo(391, 225) // 先端＿左
  ctx.quadraticCurveTo(373, 290, 375, 360) // 末端＿左
  ctx.quadraticCurveTo(378, 360, 378, 360) // 末端＿右
  ctx.quadraticCurveTo(377, 290, 393, 225) // 先端＿右
  ctx.quadraticCurveTo(391, 225, 391, 225) // 先端＿左
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // 人差し指＿中央
  ctx.beginPath()
  ctx.moveTo(515, 20) // 先端＿左
  ctx.quadraticCurveTo(426, 157, 402, 356) // 末端＿左
  ctx.quadraticCurveTo(406, 356, 407, 356) // 末端＿右
  ctx.quadraticCurveTo(432, 157, 518, 20) // 先端＿右
  ctx.quadraticCurveTo(516, 20, 515, 20) // 先端＿左
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // ctx.beginPath()
  // ctx.moveTo(505, 217) // 折り返し左＿上
  // ctx.quadraticCurveTo(478, 237, 478, 239) 
  // ctx.quadraticCurveTo(472, 252, 472, 252) // 折り返し左＿下
  // ctx.stroke()
  // ctx.closePath()

  // ctx.beginPath()
  // ctx.moveTo(600, 355) // 折り返し右＿上
  // ctx.quadraticCurveTo(596, 398, 595, 402) // 折り返し右＿下
  // ctx.stroke()
  // ctx.closePath()

  // // 親指
  // ctx.lineWidth = 3.0
  // ctx.beginPath()
  // ctx.moveTo(675, 372) // 折り返し右＿上
  // ctx.quadraticCurveTo(648, 394, 643, 425) // 折り返し右＿下
  // ctx.stroke()
  // ctx.closePath()
  // ctx.beginPath()
  // ctx.moveTo(630, 455) // 折り返し右＿上
  // ctx.quadraticCurveTo(615, 494, 592, 522) // 折り返し右＿下
  // ctx.stroke()
  // ctx.closePath()


}
