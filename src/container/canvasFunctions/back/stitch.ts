export const stitch = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.setLineDash([5, 5])

  ctx.moveTo(511, 56) // ウェブ先端左上
  ctx.quadraticCurveTo(560, 70, 631, 128) // ウェブ先端中央
  ctx.quadraticCurveTo(695, 170, 750, 225) // ウェブ先端右下

  ctx.moveTo(517, 87) // ウェブ本体上
  ctx.quadraticCurveTo(609, 144, 691, 215) //
  ctx.moveTo(514, 91) //
  ctx.quadraticCurveTo(602, 147, 685, 218) //

  ctx.moveTo(495, 105) // ウェブ本体下
  ctx.quadraticCurveTo(667, 231, 667, 231) //
  ctx.moveTo(492, 110) //
  ctx.quadraticCurveTo(662, 236, 662, 236) //

  ctx.moveTo(441, 197) //捕球面折り返し部分＿外線の左下
  ctx.quadraticCurveTo(451, 177, 451, 177) // // 外線の左上
  ctx.quadraticCurveTo(593, 285, 593, 285) // // 外線の右上
  ctx.quadraticCurveTo(577, 305, 583, 313) // // 外線の右下
  ctx.moveTo(445, 205) //捕球面折り返し部分＿内線の左下
  ctx.quadraticCurveTo(455, 188, 455, 188) // // 内線の左上
  ctx.quadraticCurveTo(581, 287, 581, 287) // // 内線の右上
  ctx.quadraticCurveTo(572, 305, 572, 305) // // 内線の右下
  ctx.quadraticCurveTo(578, 313, 578, 313) // // 内線の右下右

  ctx.moveTo(362, 414) // シェラームーブ右下
  ctx.quadraticCurveTo(315, 420, 301, 472) //
  ctx.quadraticCurveTo(283, 510, 292, 565) // シェラームーブ左下
  ctx.quadraticCurveTo(271, 546, 273, 546) // シェラームーブ左上
  ctx.quadraticCurveTo(256, 513, 256, 513) // シェラームーブ左上の左上

  ctx.moveTo(350, 155) // 人差し指＿先端＿左下
  ctx.quadraticCurveTo(360, 116, 387, 107) //人差し指＿先端＿中央上
  ctx.quadraticCurveTo(405, 103, 398, 140) //人差し指＿先端＿右下
  ctx.quadraticCurveTo(392, 226, 428, 295) //人差し指＿ウェブ真下延長戦
  ctx.quadraticCurveTo(473, 362, 560, 370) //人差し指＿ウェブ右下延長戦
  ctx.quadraticCurveTo(600, 365, 635, 348) //親指左上
  ctx.quadraticCurveTo(654, 342, 720, 304) //親指左上
  ctx.quadraticCurveTo(736, 292, 748, 310) //親指中央先端
  ctx.quadraticCurveTo(752, 330, 740, 345) //親指中央先端
  ctx.quadraticCurveTo(701, 400, 648, 473) //親指掛け紐やや上部

  ctx.moveTo(350, 155) // 人差し指＿先端＿左下_指カバーの下部分
  ctx.quadraticCurveTo(345, 238, 354, 333)

  ctx.moveTo(297, 207) // 中指袋_先端＿左下
  ctx.quadraticCurveTo(300, 165, 328, 148) // 中指袋＿先端＿中央上
  ctx.quadraticCurveTo(350, 145, 343, 168) //
  ctx.quadraticCurveTo(339, 196, 343, 209) // 中指袋＿先端＿右下
  ctx.moveTo(346, 329) // 中指袋_手前＿右上
  ctx.quadraticCurveTo(310, 330, 295, 350) // 中指袋_手前＿左下

  ctx.moveTo(257, 215) // 小指薬指袋_先端＿中央上
  ctx.quadraticCurveTo(293, 188, 292, 217)
  ctx.moveTo(304, 385) // 小指薬指袋_手前＿右上
  ctx.quadraticCurveTo(215, 395, 228, 454) // 小指薬指袋_手前＿左下

  ctx.moveTo(331, 604) // 手口左下
  ctx.quadraticCurveTo(370, 610, 431, 608) // 手口中央下
  ctx.quadraticCurveTo(500, 605, 528, 584) // 手口右下
  ctx.moveTo(303, 574) //手口左上_シェラームーブ左端
  ctx.quadraticCurveTo(317, 586, 330, 606) //

  ctx.moveTo(424, 129) // ウェブ下のヘリ革の内側＿左上
  ctx.quadraticCurveTo(410, 150, 422, 188) //
  ctx.quadraticCurveTo(434, 233, 458, 261) //
  ctx.quadraticCurveTo(485, 295, 529, 316) //
  ctx.quadraticCurveTo(552, 326, 580, 329) // ウェブ下のヘリ革の内側＿右下

  ctx.moveTo(765, 272) //親指ヘリ革の内側＿親指先端
  ctx.quadraticCurveTo(771, 289, 766, 304) //親指先端右下
  ctx.quadraticCurveTo(754, 347, 725, 387) //親指先端右下
  ctx.quadraticCurveTo(700, 426, 663, 467) //親指掛け紐手前
  ctx.moveTo(590, 540) //親指掛け紐直後
  ctx.quadraticCurveTo(543, 567, 543, 565) //手口ベルト右横

  ctx.moveTo(477, 62) //ウェブ先端左＿人差し指袋右上
  ctx.quadraticCurveTo(475, 53, 468, 55) //
  ctx.quadraticCurveTo(390, 74, 325, 125) // 中指袋先端真上
  ctx.quadraticCurveTo(279, 165, 258, 205) // 小指薬指袋先端真左上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

// export const indexFingerCoverstitch = (ctx: CanvasRenderingContext2D, color: string): void => {
//   ctx.lineWidth = 1.5
//   ctx.strokeStyle = color
//   ctx.beginPath()
//   ctx.setLineDash([5, 5])
//   ctx.moveTo(377, 200) // 人差し指カバー右上
//   ctx.quadraticCurveTo(445, 370, 447, 372) // 人差し指カバー右下
//   ctx.stroke()
//   ctx.setLineDash([])
//   ctx.closePath()
// }
