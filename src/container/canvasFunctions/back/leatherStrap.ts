export const leatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0

  ctx.strokeStyle = ' #383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // ウェブ先端左上から右下
  ctx.moveTo(551, 43) // 左上
  ctx.quadraticCurveTo(539, 52, 539, 52) // 左下
  ctx.quadraticCurveTo(550, 61, 550, 61) // 右下
  ctx.quadraticCurveTo(561, 49, 561, 49) // 右上
  ctx.quadraticCurveTo(551, 43, 551, 43) // 左上

  // ウェブ先端左上から右下
  ctx.moveTo(559, 53) // 左上
  ctx.quadraticCurveTo(550, 61, 552, 60) // 左下
  ctx.quadraticCurveTo(558, 58, 565, 64) // 右下
  ctx.quadraticCurveTo(570, 55, 559, 53) // 左上

  // 2番目
  ctx.moveTo(569, 62) // 左上
  ctx.quadraticCurveTo(562, 64, 562, 70) // 左下
  ctx.quadraticCurveTo(563, 74, 573, 73) // 右下
  ctx.quadraticCurveTo(573, 65, 580, 63) // 右上
  ctx.quadraticCurveTo(569, 62, 569, 62) // 左上
  // 右の影
  ctx.moveTo(580, 63) // 左上
  ctx.quadraticCurveTo(570, 66, 573, 73) // 左下
  ctx.quadraticCurveTo(581, 69, 585, 75) // 右下
  ctx.quadraticCurveTo(588, 64, 580, 63) // 左上

  // 3番目
  ctx.moveTo(591, 73) // 左上
  ctx.quadraticCurveTo(581, 74, 581, 83) // 左下
  ctx.quadraticCurveTo(585, 90, 592, 87) // 右下
  ctx.quadraticCurveTo(595, 76, 605, 78) // 右上
  ctx.quadraticCurveTo(596, 73, 591, 73) // 左上
  // 右の影
  ctx.moveTo(605, 78) // 上
  ctx.quadraticCurveTo(595, 76, 592, 87) // 左下
  ctx.quadraticCurveTo(600, 80, 608, 89) // 右下
  ctx.quadraticCurveTo(607, 80, 605, 78) // 左上

  // 4番目
  ctx.moveTo(612, 87) // 左上
  ctx.quadraticCurveTo(605, 88, 601, 95) // 左下
  ctx.quadraticCurveTo(605, 105, 612, 100) // 右下
  ctx.quadraticCurveTo(615, 91, 623, 92) // 右上
  ctx.quadraticCurveTo(617, 87, 612, 87) // 左上
  // 右の影
  ctx.moveTo(623, 92) // 上
  ctx.quadraticCurveTo(615, 91, 612, 100) // 左下
  ctx.quadraticCurveTo(621, 95, 627, 102) // 右下
  ctx.quadraticCurveTo(628, 93, 623, 92) // 左上

  // 5番目
  ctx.moveTo(632, 100) // 左上
  ctx.quadraticCurveTo(625, 100, 619, 108) // 左下
  ctx.quadraticCurveTo(622, 114, 630, 115) // 右下
  ctx.quadraticCurveTo(635, 107, 642, 105) // 右上
  ctx.quadraticCurveTo(632, 100, 632, 100) // 左上
  // 右の影
  ctx.moveTo(642, 105) // 上
  ctx.quadraticCurveTo(635, 108, 630, 115) // 左下
  ctx.quadraticCurveTo(638, 108, 647, 117) // 右下
  ctx.quadraticCurveTo(648, 108, 642, 105) // 左上

  // 6番目
  ctx.moveTo(654, 116) // 左上
  ctx.quadraticCurveTo(645, 116, 640, 124) // 左下
  ctx.quadraticCurveTo(643, 131, 652, 130) // 右下
  ctx.quadraticCurveTo(664, 120, 665, 123) // 右上
  ctx.quadraticCurveTo(654, 116, 654, 116) // 左上
  // 右の影
  ctx.moveTo(663, 121) // 上
  ctx.quadraticCurveTo(645, 116, 652, 130) // 左下
  ctx.quadraticCurveTo(656, 123, 668, 132) // 右下
  ctx.quadraticCurveTo(670, 127, 663, 121) // 左上

  // 7番目
  ctx.moveTo(675, 132) // 左上
  ctx.quadraticCurveTo(665, 130, 661, 139) // 左下
  ctx.quadraticCurveTo(662, 146, 672, 145) // 右下
  ctx.quadraticCurveTo(678, 136, 685, 139) // 右上
  ctx.quadraticCurveTo(675, 132, 675, 132) // 左上
  // 右の影
  ctx.moveTo(685, 139) // 上
  ctx.quadraticCurveTo(665, 130, 672, 145) // 左下
  ctx.quadraticCurveTo(679, 139, 688, 147) // 右下
  ctx.quadraticCurveTo(689, 140, 685, 139) // 左上

  // 8番目
  ctx.moveTo(694, 144) // 左上
  ctx.quadraticCurveTo(687, 145, 680, 152) // 左下
  ctx.quadraticCurveTo(681, 158, 690, 160) // 右下
  ctx.quadraticCurveTo(697, 153, 705, 152) // 右上
  ctx.quadraticCurveTo(694, 144, 694, 144) // 左上
  // 右の影
  ctx.moveTo(705, 152) // 上
  ctx.quadraticCurveTo(695, 150, 690, 160) // 左下
  ctx.quadraticCurveTo(696, 153, 707, 163) // 右下
  ctx.quadraticCurveTo(710, 155, 705, 152) // 左上

  // 9番目
  ctx.moveTo(714, 162) // 左上
  ctx.quadraticCurveTo(706, 161, 699, 168) // 左下
  ctx.quadraticCurveTo(700, 173, 708, 175) // 右下
  ctx.quadraticCurveTo(713, 169, 722, 167) // 右上
  ctx.quadraticCurveTo(714, 162, 714, 162) // 左上
  // 右の影
  ctx.moveTo(722, 167) // 上
  ctx.quadraticCurveTo(706, 161, 708, 175) // 左下
  ctx.quadraticCurveTo(715, 171, 725, 178) // 右下
  ctx.quadraticCurveTo(730, 172, 722, 167) // 左上

  // 10番目
  ctx.moveTo(732, 177) // 左上
  ctx.quadraticCurveTo(722, 178, 717, 184) // 左下
  ctx.quadraticCurveTo(719, 191, 727, 190) // 右下
  ctx.quadraticCurveTo(729, 184, 739, 183) // 右上
  ctx.quadraticCurveTo(732, 177, 732, 177) // 左上
  // 右の影
  ctx.moveTo(739, 183) // 上
  ctx.quadraticCurveTo(729, 184, 727, 190) // 左下
  ctx.quadraticCurveTo(736, 185, 741, 194) // 右下
  ctx.quadraticCurveTo(745, 186, 739, 183) // 左上

  // 11番目
  ctx.moveTo(752, 195) // 左上
  ctx.quadraticCurveTo(742, 193, 736, 200) // 左下
  ctx.quadraticCurveTo(735, 205, 740, 208) // 右下
  ctx.quadraticCurveTo(750, 203, 758, 204) // 右上
  ctx.quadraticCurveTo(752, 195, 752, 195) // 左上
  // 右の影
  ctx.moveTo(758, 204) // 上
  ctx.quadraticCurveTo(740, 208, 740, 208) // 左下
  ctx.quadraticCurveTo(752, 205, 757, 209) // 右下
  ctx.quadraticCurveTo(761, 204, 754, 204) // 左上

  // 捕球面とウェブの繋ぎ部分＿一番左
  ctx.moveTo(492, 140) // 左上
  ctx.quadraticCurveTo(478, 158, 485, 185) // 左下
  ctx.quadraticCurveTo(490, 185, 498, 174) // 右下
  ctx.quadraticCurveTo(494, 155, 509, 138) // 右上
  ctx.quadraticCurveTo(492, 140, 492, 140) // 左上
  // 右上の影
  ctx.moveTo(509, 138) //
  ctx.quadraticCurveTo(507, 143, 507, 143) //
  ctx.quadraticCurveTo(511, 142, 516, 145) //
  ctx.quadraticCurveTo(515, 141, 509, 138) //
  // 右斜め上の革紐
  ctx.moveTo(507, 143) // 左上
  ctx.quadraticCurveTo(500, 151, 499, 159) // 左下
  ctx.quadraticCurveTo(505, 155, 512, 159) // 右下
  ctx.quadraticCurveTo(523, 155, 524, 148) // 右上
  ctx.quadraticCurveTo(512, 143, 507, 145) // 左上
  // 左下部分
  ctx.moveTo(485, 154) // 左上
  ctx.quadraticCurveTo(481, 155, 480, 160) // 左中
  ctx.quadraticCurveTo(478, 168, 483, 172) // 下
  ctx.quadraticCurveTo(480, 164, 485, 154) // 左上

  // 捕球面とウェブの繋ぎ部分＿中央
  ctx.moveTo(558, 176) // 右上
  ctx.quadraticCurveTo(535, 170, 522, 191) // 左上
  ctx.quadraticCurveTo(520, 213, 523, 202) // 左下
  ctx.quadraticCurveTo(540, 185, 557, 189) // 右下
  ctx.quadraticCurveTo(570, 185, 558, 176) // 右上
  // 左上＿左上
  ctx.moveTo(536, 173) //
  ctx.quadraticCurveTo(533, 178, 533, 178) //
  ctx.quadraticCurveTo(543, 171, 555, 174) //
  ctx.quadraticCurveTo(551, 170, 551, 170) //
  ctx.quadraticCurveTo(542, 173, 536, 173) //
  // 右下
  ctx.moveTo(545, 191) // 右上
  ctx.quadraticCurveTo(529, 192, 523, 206) // 左上
  ctx.quadraticCurveTo(519, 214, 519, 214) // 左下
  ctx.quadraticCurveTo(527, 223, 537, 212) // 右下
  ctx.quadraticCurveTo(535, 205, 545, 191) // 左上

  // 捕球面とウェブの繋ぎ部分＿右
  ctx.moveTo(579, 205) // 左上
  ctx.quadraticCurveTo(572, 224, 575, 250) // 左下
  ctx.quadraticCurveTo(589, 237, 589, 237) // 右下
  ctx.quadraticCurveTo(588, 220, 595, 201) // 右上
  ctx.quadraticCurveTo(579, 205, 579, 205) // 左上
  // 右上
  ctx.moveTo(594, 207) //左上
  ctx.quadraticCurveTo(590, 222, 590, 222) //左下
  ctx.quadraticCurveTo(597, 219, 602, 219) //右下
  ctx.quadraticCurveTo(605, 214, 604, 207) //右上
  ctx.quadraticCurveTo(598, 206, 594, 207) //左上
  // 左下
  ctx.moveTo(575, 220) // 右上
  ctx.quadraticCurveTo(565, 243, 566, 237) // 左下
  ctx.quadraticCurveTo(563, 246, 574, 248) // 右下
  ctx.quadraticCurveTo(571, 235, 575, 220) // 左上

  // 人差し指側ヘリ革＿捕球面繋ぐ革紐
  ctx.moveTo(435, 140) // 左左
  ctx.quadraticCurveTo(428, 142, 430, 152) // 下左
  ctx.quadraticCurveTo(448, 159, 448, 159) // 右下
  ctx.quadraticCurveTo(452, 150, 454, 148) // 右上
  ctx.quadraticCurveTo(445, 140, 435, 140) // 左上
  // 親指側ヘリ革＿捕球面(ウェブ下)繋ぐ革紐
  ctx.moveTo(617, 272) // 左上
  ctx.quadraticCurveTo(609, 283, 609, 283) // 左下
  ctx.quadraticCurveTo(620, 290, 627, 310) // 右下
  ctx.quadraticCurveTo(635, 310, 640, 304) // 右上
  ctx.quadraticCurveTo(631, 284, 617, 272) // 左上

  // 人差し指ヘリ革からウェブ本体＿左上に繋ぐ革紐
  ctx.moveTo(489, 70) // ヘリ革下
  ctx.quadraticCurveTo(504, 71, 520, 82) // ウェブ側左
  ctx.quadraticCurveTo(523, 79, 523, 76) // ウェブ側右
  ctx.quadraticCurveTo(513, 59, 490, 64) // ヘリ革側上
  ctx.quadraticCurveTo(489, 70, 489, 70) // ヘリ革下

  // 人差し指ヘリ革からウェブ本体＿左中央に繋ぐ革紐
  ctx.moveTo(478, 86) // ヘリ革下
  ctx.quadraticCurveTo(495, 95, 491, 95) // ウェブ側左
  ctx.quadraticCurveTo(504, 87, 500, 87) // ウェブ側右
  ctx.quadraticCurveTo(485, 81, 485, 81) // ヘリ革側上
  ctx.quadraticCurveTo(477, 82, 478, 86) // ヘリ革下

  // 人差し指ヘリ革からウェブ本体＿左下に繋ぐ革紐
  ctx.moveTo(455, 112) // ヘリ革下
  ctx.quadraticCurveTo(468, 113, 465, 117) // ウェブ側左
  ctx.quadraticCurveTo(475, 108, 475, 108) // ウェブ側右
  ctx.quadraticCurveTo(465, 102, 463, 105) // ヘリ革側上
  ctx.quadraticCurveTo(460, 105, 455, 112) // ヘリ革下

  // 親指ヘリ革からウェブ本体＿右下に繋ぐ革紐
  ctx.moveTo(646, 256) // ウェブ下
  ctx.quadraticCurveTo(671, 262, 675, 284) // ヘリ革側下
  ctx.quadraticCurveTo(682, 283, 687, 272) // ヘリ革側上
  ctx.quadraticCurveTo(684, 257, 656, 247) // ウェブ上
  ctx.quadraticCurveTo(652, 248, 646, 256) // ウェブ下

  // 親指ヘリ革からウェブ本体＿右中央に繋ぐ革紐
  ctx.moveTo(671, 236) // ウェブ下
  ctx.quadraticCurveTo(687, 246, 700, 263) // ヘリ革側下
  ctx.quadraticCurveTo(709, 261, 709, 261) // ヘリ革側上
  ctx.quadraticCurveTo(701, 240, 680, 226) // ウェブ上
  ctx.quadraticCurveTo(671, 236, 671, 236) // ウェブ下

  // 親指ヘリ革からウェブ本体＿右上に繋ぐ革紐
  ctx.moveTo(695, 221) // ウェブ左
  ctx.quadraticCurveTo(715, 228, 722, 257) // ヘリ革側左
  ctx.quadraticCurveTo(730, 255, 734, 254) // ヘリ革側右
  ctx.quadraticCurveTo(730, 228, 709, 215) // ウェブ右
  ctx.quadraticCurveTo(699, 215, 695, 221) // ウェブ左

  // ウェブ左先端から人差し指芯先端を結ぶ革紐
  ctx.moveTo(442, 57) // 人差し指芯
  ctx.quadraticCurveTo(449, 58, 449, 58) // 人差し指芯側左
  ctx.quadraticCurveTo(449, 46, 463, 40) // ウェブ左先端側＿左
  ctx.quadraticCurveTo(487, 34, 518, 45) // ウェブ左先端側＿左
  ctx.quadraticCurveTo(525, 40, 525, 40) // ウェブ左先端側＿右
  ctx.quadraticCurveTo(520, 27, 460, 34) // ウェブ左
  ctx.quadraticCurveTo(441, 40, 442, 57) // ウェブ左
  //右下の影
  ctx.moveTo(450, 57) // 左下
  ctx.quadraticCurveTo(459, 52, 459, 52) // 右下
  ctx.quadraticCurveTo(457, 44, 472, 39) // 右上
  ctx.quadraticCurveTo(447, 44, 449, 57) // 左下

  // ウェブ左先端から人差し指芯先端を結ぶ革紐
  ctx.moveTo(478, 47) // 人差し指芯左
  ctx.quadraticCurveTo(492, 48, 492, 48) // 人差し指芯右
  ctx.quadraticCurveTo(506, 45, 510, 50) // ウェブ左先端側＿左
  ctx.quadraticCurveTo(517, 46, 517, 46) // ウェブ左先端側＿左
  ctx.quadraticCurveTo(492, 36, 478, 47) // ウェブ左先端側＿右

  // ウェブ右先端から親指芯先端を結ぶ革紐
  ctx.moveTo(754, 232) // ウェブ側左
  ctx.quadraticCurveTo(773, 245, 775, 255) // 曲線前革紐の中間
  ctx.quadraticCurveTo(775, 263, 754, 285) // 親指接続部分＿左
  ctx.quadraticCurveTo(756, 296, 769, 290) // ウェブ左先端側＿右下
  ctx.quadraticCurveTo(785, 264, 785, 264) // ウェブ左先端側＿右
  ctx.quadraticCurveTo(789, 255, 782, 245) // 曲線後革紐の中間
  ctx.quadraticCurveTo(777, 235, 765, 224) // ウェブ側右
  ctx.quadraticCurveTo(754, 232, 754, 232) // ウェブ側右

  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

export const knotOnWebLeatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0

  ctx.strokeStyle = ' #383838'
  ctx.fillStyle = color
  ctx.beginPath()

  // ウェブ本体中央の結び目＿左
  ctx.moveTo(596, 127) // 左上
  ctx.quadraticCurveTo(586, 141, 598, 156) // 右下下
  ctx.quadraticCurveTo(607, 141, 605, 141) // 右下上
  ctx.quadraticCurveTo(606, 130, 606, 130) // 左上の右
  ctx.quadraticCurveTo(596, 127, 596, 127) // 左上
  // 右上
  ctx.moveTo(594, 207) //左上
  ctx.quadraticCurveTo(590, 222, 590, 222) //左下
  ctx.quadraticCurveTo(597, 219, 602, 219) //右下
  ctx.quadraticCurveTo(605, 214, 604, 207) //右上
  ctx.quadraticCurveTo(598, 206, 594, 207) //左上
  // 左下
  ctx.moveTo(575, 220) // 右上
  ctx.quadraticCurveTo(565, 243, 566, 237) // 左下
  ctx.quadraticCurveTo(563, 246, 574, 248) // 右下
  ctx.quadraticCurveTo(571, 235, 575, 220) // 左上

  // ウェブ本体中央の結び目＿右
  ctx.moveTo(606, 136) // 左上
  ctx.quadraticCurveTo(607, 154, 590, 164) // 左下
  ctx.quadraticCurveTo(596, 170, 601, 171) // 右下
  ctx.quadraticCurveTo(617, 151, 615, 151) // 右上
  ctx.quadraticCurveTo(615, 143, 606, 136) // 左上

  // 結び目左下
  ctx.moveTo(592, 143) // 左上
  ctx.quadraticCurveTo(585, 154, 590, 163) // 左下
  ctx.quadraticCurveTo(598, 156, 598, 158) // 右上
  ctx.quadraticCurveTo(589, 144, 592, 143) // 左上

  // 右上
  ctx.moveTo(594, 207) //左上
  ctx.quadraticCurveTo(590, 222, 590, 222) //左下
  ctx.quadraticCurveTo(597, 219, 602, 219) //右下
  ctx.quadraticCurveTo(605, 214, 604, 207) //右上
  ctx.quadraticCurveTo(598, 206, 594, 207) //左上
  // 左下
  ctx.moveTo(575, 220) // 右上
  ctx.quadraticCurveTo(565, 243, 566, 237) // 左下
  ctx.quadraticCurveTo(563, 246, 574, 248) // 右下
  ctx.quadraticCurveTo(571, 235, 575, 220) // 左上

  // 革部分との付け根
  ctx.moveTo(575, 140) // 左上
  ctx.quadraticCurveTo(583, 135, 590, 137) // 右上
  ctx.quadraticCurveTo(590, 142, 590, 142) // 右下
  ctx.quadraticCurveTo(580, 145, 580, 145) // 左下
  ctx.quadraticCurveTo(575, 140, 575, 140) // 左下

  // ウェブ本体の紐先端左
  ctx.moveTo(493, 59) // 左左
  ctx.quadraticCurveTo(554, 123, 590, 137) // 右下
  ctx.quadraticCurveTo(593, 130, 593, 130) // 右上
  ctx.quadraticCurveTo(554, 107, 499, 58) // 左右
  ctx.quadraticCurveTo(493, 59, 493, 59) // 左左

  // ウェブ本体の紐先端右
  ctx.moveTo(608, 165) // 左左
  ctx.quadraticCurveTo(682, 249, 682, 249) // 下左
  ctx.quadraticCurveTo(692, 243, 692, 243) // 下右
  ctx.quadraticCurveTo(614, 155, 614, 155) // 左右
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

export const arroundEdgheLeatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0

  ctx.strokeStyle = ' #383838'
  ctx.fillStyle = color
  ctx.beginPath()

  // ウェブ先端右下のヘリ革周りの革紐
  ctx.moveTo(759, 245) // 左上
  ctx.quadraticCurveTo(763, 264, 744, 276) // 左下
  ctx.quadraticCurveTo(751, 280, 758, 276) // 右下
  ctx.quadraticCurveTo(774, 264, 768, 251) // 右上
  ctx.quadraticCurveTo(759, 245, 759, 245) // 左上

  // ウェブ先端右下のヘリ革周りの革紐
  ctx.moveTo(748, 236) // 左上
  ctx.quadraticCurveTo(759, 260, 723, 279) // 左下
  ctx.quadraticCurveTo(733, 282, 742, 275) // 右下
  ctx.quadraticCurveTo(758, 263, 759, 250) // 右上
  ctx.quadraticCurveTo(758, 243, 748, 236) // 左上
  // 影
  ctx.moveTo(748, 236) // 左上
  ctx.quadraticCurveTo(755, 259, 722, 271) // 左下
  ctx.quadraticCurveTo(718, 278, 723, 279) // 右上
  ctx.quadraticCurveTo(758, 260, 748, 236) // 左上

  // ウェブ先端右下のヘリ革周りの革紐
  ctx.moveTo(702, 241) // 左上
  ctx.quadraticCurveTo(724, 258, 704, 291) // 左下
  ctx.quadraticCurveTo(710, 289, 710, 289) // 右下
  ctx.quadraticCurveTo(734, 265, 710, 238) // 右上
  ctx.quadraticCurveTo(702, 241, 702, 241) // 左上
  // 影
  ctx.moveTo(703, 246) // 左上
  ctx.quadraticCurveTo(717, 260, 704, 291) // 左下
  ctx.quadraticCurveTo(723, 258, 702, 242) // 右上
  ctx.quadraticCurveTo(703, 246, 703, 246) // 左上

  // ウェブ先端右下のヘリ革周りの革紐
  ctx.moveTo(678, 256) // 左上
  ctx.quadraticCurveTo(705, 267, 700, 293) // 左下
  ctx.quadraticCurveTo(704, 292, 704, 292) // 右下
  ctx.quadraticCurveTo(706, 275, 709, 275) // 右中間上
  ctx.quadraticCurveTo(701, 258, 684, 253) // 右上
  ctx.quadraticCurveTo(678, 256, 678, 256) // 左上
  // 影
  ctx.moveTo(685, 265) // 左上
  ctx.quadraticCurveTo(699, 271, 695, 287) // 左下
  ctx.quadraticCurveTo(700, 293, 700, 293) // 右下
  ctx.quadraticCurveTo(703, 267, 679, 258) // 右上
  ctx.quadraticCurveTo(685, 265, 685, 265) // 左上

  // ウェブ先端右下のヘリ革周りの革紐
  ctx.moveTo(647, 284) // 左上
  ctx.quadraticCurveTo(671, 299, 650, 325) // 左下
  ctx.quadraticCurveTo(659, 316, 665, 318) // 右下
  ctx.quadraticCurveTo(673, 297, 655, 278) // 右上
  ctx.quadraticCurveTo(651, 276, 647, 284) // 左上
  // 影
  ctx.moveTo(650, 286) // 左上
  ctx.quadraticCurveTo(663, 305, 652, 316) // 左下
  ctx.quadraticCurveTo(645, 319, 650, 325) // 右下
  ctx.quadraticCurveTo(667, 302, 656, 290) // 右上
  ctx.quadraticCurveTo(650, 286, 650, 286) // 左上

  // ウェブ先端右下のヘリ革周りの革紐
  ctx.moveTo(613, 300) // 左上
  ctx.quadraticCurveTo(620, 318, 612, 338) // 左下
  ctx.quadraticCurveTo(618, 344, 624, 337) // 右下
  ctx.quadraticCurveTo(631, 317, 620, 297) // 右上
  ctx.quadraticCurveTo(615, 295, 613, 300) // 左上

  // 捕球面右下の右の革紐
  ctx.moveTo(601, 297) // 左上
  ctx.quadraticCurveTo(591, 322, 568, 341) // 左下
  ctx.quadraticCurveTo(566, 346, 582, 344) // 右下
  ctx.quadraticCurveTo(601, 325, 612, 299) // 右上
  ctx.quadraticCurveTo(605, 293, 601, 297) // 左上

  // 捕球面右下の右から2番目の革紐
  ctx.moveTo(540, 301) // 左上
  ctx.quadraticCurveTo(528, 306, 520, 332) // 左下
  ctx.quadraticCurveTo(521, 339, 530, 335) // 右下
  ctx.quadraticCurveTo(535, 309, 551, 302) // 右上
  ctx.quadraticCurveTo(546, 301, 540, 301) // 左上
  // 影
  ctx.moveTo(552, 302) // 左上
  ctx.quadraticCurveTo(531, 313, 530, 335) // 下
  ctx.quadraticCurveTo(541, 304, 555, 311) // 右上
  ctx.quadraticCurveTo(556, 303, 551, 302) // 左上

  // 捕球面真下の右1番目の革紐
  ctx.moveTo(511, 284) // 左上
  ctx.quadraticCurveTo(494, 295, 485, 312) // 左下
  ctx.quadraticCurveTo(486, 320, 493, 316) // 右下
  ctx.quadraticCurveTo(507, 290, 520, 288) // 右上
  ctx.quadraticCurveTo(511, 284, 511, 284) // 左上
  // 影
  ctx.moveTo(520, 288) // 左上
  ctx.quadraticCurveTo(509, 290, 493, 316) // 下
  ctx.quadraticCurveTo(510, 288, 523, 294) // 右上
  ctx.quadraticCurveTo(526, 290, 520, 288) // 左上

  // 捕球面真下の左1番目の革紐
  ctx.moveTo(464, 244) // 左上
  ctx.quadraticCurveTo(455, 261, 451, 274) // 左下の中間
  ctx.quadraticCurveTo(450, 282, 452, 288) // 左下
  ctx.quadraticCurveTo(456, 294, 460, 287) // 右下
  ctx.quadraticCurveTo(455, 270, 472, 255) // 右上
  ctx.quadraticCurveTo(473, 247, 464, 244) // 左上
  // 影
  ctx.moveTo(472, 255) // 左上
  ctx.quadraticCurveTo(458, 270, 460, 287) // 下
  ctx.quadraticCurveTo(462, 272, 472, 259) // 右上
  ctx.quadraticCurveTo(473, 256, 472, 255) // 左上

  // 捕球面真下の左2番目の革紐
  ctx.moveTo(448, 216) // 左上
  ctx.quadraticCurveTo(432, 229, 428, 241) // 左下の中間
  ctx.quadraticCurveTo(424, 251, 430, 258) // 左下
  ctx.quadraticCurveTo(435, 259, 436, 254) // 右下
  ctx.quadraticCurveTo(430, 237, 452, 228) // 右上
  ctx.quadraticCurveTo(458, 219, 448, 216) // 左上
  // 影
  ctx.moveTo(450, 229) // 左上
  ctx.quadraticCurveTo(433, 237, 436, 254) // 下
  ctx.quadraticCurveTo(438, 239, 451, 230) // 右上
  ctx.quadraticCurveTo(452, 228, 450, 229) // 左上

  // 捕球面真下から左3番目の革紐
  ctx.moveTo(441, 171) // 左上
  ctx.quadraticCurveTo(421, 188, 412, 205) // 左下
  ctx.quadraticCurveTo(410, 218, 414, 218) // 右下
  ctx.quadraticCurveTo(424, 192, 438, 187) // 右上
  ctx.quadraticCurveTo(438, 180, 441, 171) // 左上
  // 影
  ctx.moveTo(439, 187) // 上
  ctx.quadraticCurveTo(423, 196, 414, 218) // 下
  ctx.quadraticCurveTo(417, 220, 420, 217) // 右下
  ctx.quadraticCurveTo(428, 193, 439, 187) // 左上

  // 捕球面真下から左4番目の革紐
  ctx.moveTo(435, 156) // 右上
  ctx.quadraticCurveTo(416, 159, 405, 170) // 左上
  ctx.quadraticCurveTo(404, 174, 407, 181) // 左下
  ctx.quadraticCurveTo(425, 164, 443, 164) // 右下
  ctx.quadraticCurveTo(446, 158, 444, 158) // 右下と右上の中間
  ctx.quadraticCurveTo(444, 158, 435, 156) // 右上
  // 影
  ctx.moveTo(407, 181) // 左上
  ctx.quadraticCurveTo(409, 182, 409, 182) // 左下
  ctx.quadraticCurveTo(421, 170, 442, 168) // 右下
  ctx.quadraticCurveTo(443, 164, 443, 164) // 右上
  ctx.quadraticCurveTo(421, 167, 407, 181) // 左上

  // 捕球面真下から左4番目の革紐
  ctx.moveTo(420, 121) // 左上
  ctx.quadraticCurveTo(415, 124, 413, 132) // 左下
  ctx.quadraticCurveTo(433, 115, 455, 132) // 右下
  ctx.quadraticCurveTo(455, 126, 458, 123) // 右上
  ctx.quadraticCurveTo(428, 110, 420, 121) // 左上
  // 影
  ctx.moveTo(413, 133) // 左上
  ctx.quadraticCurveTo(415, 135, 415, 135) // 左下
  ctx.quadraticCurveTo(437, 120, 454, 133) // 右下
  ctx.quadraticCurveTo(454, 133, 455, 132) // 右上
  ctx.quadraticCurveTo(433, 117, 413, 133) // 左上

  // 捕球面真下から左5番目の革紐
  ctx.moveTo(449, 86) // 左上
  ctx.quadraticCurveTo(470, 83, 481, 104) // 左下
  ctx.quadraticCurveTo(488, 100, 488, 100) // 右下
  ctx.quadraticCurveTo(481, 80, 460, 77) // 右上
  ctx.quadraticCurveTo(450, 80, 449, 86) // 左上
  // 影
  ctx.moveTo(457, 89) // 左上
  ctx.quadraticCurveTo(475, 94, 478, 106) //左下
  ctx.quadraticCurveTo(481, 104, 481, 104) // 右下
  ctx.quadraticCurveTo(467, 83, 451, 87) // 右上
  ctx.quadraticCurveTo(457, 89, 457, 89) // 左上

  // 捕球面真下から左6番目の革紐
  ctx.moveTo(451, 80) // 左下
  ctx.quadraticCurveTo(480, 65, 499, 84) // 右下
  ctx.quadraticCurveTo(505, 84, 503, 81) // 右右
  ctx.quadraticCurveTo(483, 57, 454, 74) // 左上
  ctx.quadraticCurveTo(453, 77, 451, 80) // 左下
  // 影
  ctx.moveTo(460, 77) // 左下
  ctx.quadraticCurveTo(483, 77, 495, 85) //右下
  ctx.quadraticCurveTo(480, 80, 499, 85) // 右右
  ctx.quadraticCurveTo(480, 68, 460, 77) // 左下

  // 捕球面真下から左7番目の革紐(人差し指袋の右上)
  ctx.moveTo(467, 68) // 左の左
  ctx.quadraticCurveTo(475, 65, 475, 65) // 左の右
  ctx.quadraticCurveTo(475, 65, 477, 55) // 左の右上
  ctx.quadraticCurveTo(487, 48, 490, 59) // 右の左
  ctx.quadraticCurveTo(493, 63, 497, 58) // 右の右
  ctx.quadraticCurveTo(495, 46, 484, 46) // 右の左上
  ctx.quadraticCurveTo(464, 47, 467, 68) // 左の左

  //小指芯先端のヘリ革まわりの革紐
  ctx.moveTo(386, 73) // 左上
  ctx.quadraticCurveTo(393, 78, 393, 85) // 左下
  ctx.quadraticCurveTo(400, 83, 401, 77) // 右下
  ctx.quadraticCurveTo(400, 73, 395, 71) // 右上
  ctx.quadraticCurveTo(390, 70, 386, 73) // 左上
  //影
  ctx.moveTo(386, 73) // 上
  ctx.quadraticCurveTo(391, 78, 393, 85) // 下
  ctx.quadraticCurveTo(386, 82, 386, 73) // 上

  //小指芯先端のヘリ革まわりの革紐
  ctx.moveTo(358, 89) // 左上
  ctx.quadraticCurveTo(364, 98, 364, 98) // 左下
  ctx.quadraticCurveTo(370, 97, 372, 89) // 右下
  ctx.quadraticCurveTo(367, 85, 367, 83) // 右上
  ctx.quadraticCurveTo(362, 83, 358, 89) // 左上

  //小指芯先端のヘリ革まわりの革紐
  ctx.moveTo(325, 111) // 左上
  ctx.quadraticCurveTo(332, 121, 332, 121) // 左下
  ctx.quadraticCurveTo(341, 119, 341, 119) // 右下
  ctx.quadraticCurveTo(344, 116, 343, 113) // 右中間
  ctx.quadraticCurveTo(332, 105, 332, 105) // 右上
  ctx.quadraticCurveTo(327, 105, 325, 111) // 左上

  //小指芯先端のヘリ革まわりの革紐
  ctx.moveTo(305, 137) // 左上
  ctx.quadraticCurveTo(310, 136, 308, 140) // 左下
  ctx.quadraticCurveTo(318, 137, 318, 130) // 右下
  ctx.quadraticCurveTo(311, 133, 305, 137) // 左上

  //小指芯先端のヘリ革まわりの革紐
  ctx.moveTo(276, 154) // 左上
  ctx.quadraticCurveTo(274, 158, 268, 163) // 左下
  ctx.quadraticCurveTo(275, 158, 281, 164) // 右下
  ctx.quadraticCurveTo(288, 158, 289, 154) // 右上
  ctx.quadraticCurveTo(286, 149, 276, 154) // 左上
  // 影
  ctx.moveTo(268, 164) // 左上
  ctx.quadraticCurveTo(270, 167, 270, 167) // 左下
  ctx.quadraticCurveTo(271, 162, 279, 166) // 右下
  ctx.quadraticCurveTo(281, 165, 281, 165) // 右上
  ctx.quadraticCurveTo(275, 158, 268, 164) // 左上

  //小指芯先端のヘリ革まわりの革紐
  ctx.moveTo(256, 185) // 左上
  ctx.quadraticCurveTo(248, 192, 248, 197) // 左下
  ctx.quadraticCurveTo(255, 190, 260, 196) // 右下
  ctx.quadraticCurveTo(265, 191, 265, 186) // 右上
  ctx.quadraticCurveTo(260, 183, 256, 185) // 左上
  // 影
  ctx.moveTo(248, 198) // 左上
  ctx.quadraticCurveTo(249, 201, 249, 201) // 左下
  ctx.quadraticCurveTo(255, 193, 257, 199) // 右下
  ctx.quadraticCurveTo(259, 197, 259, 197) // 右上
  ctx.quadraticCurveTo(255, 190, 248, 198) // 左上

  //小指芯先端のヘリ革まわりの革紐
  ctx.moveTo(233, 223) // 左上
  ctx.quadraticCurveTo(227, 228, 227, 235) // 左下
  ctx.quadraticCurveTo(238, 230, 241, 231) // 右下
  ctx.quadraticCurveTo(241, 228, 244, 223) // 右上
  ctx.quadraticCurveTo(242, 221, 233, 223) // 左上
  // 影
  ctx.moveTo(227, 233) // 左上
  ctx.quadraticCurveTo(227, 234, 227, 239) // 左下
  ctx.quadraticCurveTo(231, 234, 240, 234) // 右下
  ctx.quadraticCurveTo(242, 231, 242, 231) // 右上
  ctx.quadraticCurveTo(234, 232, 227, 233) // 左上

  //小指芯先端のヘリ革まわりの革紐
  ctx.moveTo(220, 260) // 左上
  ctx.quadraticCurveTo(212, 267, 215, 272) // 左下
  ctx.quadraticCurveTo(222, 265, 228, 268) // 右下
  ctx.quadraticCurveTo(231, 259, 233, 257) // 右上
  ctx.quadraticCurveTo(224, 257, 220, 260) // 左上
  // 影
  ctx.moveTo(215, 272) // 左上
  ctx.quadraticCurveTo(213, 275, 215, 277) // 左下
  ctx.quadraticCurveTo(221, 267, 227, 271) // 右下
  ctx.quadraticCurveTo(227, 269, 227, 269) // 右上
  ctx.quadraticCurveTo(221, 266, 215, 272) // 左上

  //小指芯左のヘリ革まわりの革紐
  ctx.moveTo(200, 343) // 左上
  ctx.quadraticCurveTo(199, 347, 199, 355) // 左下
  ctx.quadraticCurveTo(204, 345, 207, 347) // 右下
  ctx.quadraticCurveTo(207, 338, 207, 338) // 右上
  ctx.quadraticCurveTo(203, 338, 200, 343) // 左上
  // 影
  ctx.moveTo(199, 356) // 左上
  ctx.quadraticCurveTo(201, 353, 203, 353) // 左下
  ctx.quadraticCurveTo(207, 351, 207, 351) // 右下
  ctx.quadraticCurveTo(207, 347, 207, 347) // 右上
  ctx.quadraticCurveTo(205, 347, 199, 356) // 左上

  //小指芯左のヘリ革まわりの革紐
  ctx.moveTo(199, 388) // 左上
  ctx.quadraticCurveTo(197, 392, 199, 397) // 左下
  ctx.quadraticCurveTo(202, 393, 209, 387) // 右下
  ctx.quadraticCurveTo(209, 379, 209, 379) // 右上
  ctx.quadraticCurveTo(202, 383, 199, 388) // 左上
  // 影
  ctx.moveTo(199, 398) // 左上
  ctx.quadraticCurveTo(201, 403, 203, 403) // 左下
  ctx.quadraticCurveTo(200, 398, 208, 393) // 右下
  ctx.quadraticCurveTo(208, 389, 209, 388) // 右上
  ctx.quadraticCurveTo(202, 393, 199, 398) // 左上

  //小指芯左のヘリ革まわりの革紐
  ctx.moveTo(249, 518) // 左上
  ctx.quadraticCurveTo(250, 523, 250, 523) // 左下
  ctx.quadraticCurveTo(253, 520, 258, 521) // 右下
  ctx.quadraticCurveTo(259, 516, 255, 512) // 右上
  ctx.quadraticCurveTo(249, 518, 249, 518) // 左上

  //小指芯左のヘリ革まわりの革紐
  ctx.moveTo(260, 542) // 左上
  ctx.quadraticCurveTo(267, 548, 267, 548) // 左下
  ctx.quadraticCurveTo(269, 546, 273, 545) // 右下
  ctx.quadraticCurveTo(270, 532, 265, 534) // 右上
  ctx.quadraticCurveTo(259, 537, 260, 542) // 左上

  //小指芯左のヘリ革まわりの革紐
  ctx.moveTo(291, 577) // 左上
  ctx.quadraticCurveTo(295, 581, 298, 582) // 左下
  ctx.quadraticCurveTo(306, 581, 309, 575) // 右下
  ctx.quadraticCurveTo(302, 563, 297, 570) // 右上
  ctx.quadraticCurveTo(299, 569, 291, 577) // 左上

  //手口右のヘリ革まわりの革紐
  ctx.moveTo(562, 552) // 左上
  ctx.quadraticCurveTo(567, 559, 561, 566) // 左下
  ctx.quadraticCurveTo(564, 566, 569, 563) // 右下
  ctx.quadraticCurveTo(574, 555, 571, 548) // 右上
  ctx.quadraticCurveTo(564, 548, 562, 552) // 左上
  // 影
  ctx.moveTo(562, 552) // 上
  ctx.quadraticCurveTo(563, 563, 554, 564) // 左下
  ctx.quadraticCurveTo(554, 569, 561, 566) // 右下
  ctx.quadraticCurveTo(565, 560, 562, 552) // 上

  //手口右のヘリ革まわりの革紐
  ctx.moveTo(635, 495) // 左上
  ctx.quadraticCurveTo(640, 499, 640, 507) // 左下
  ctx.quadraticCurveTo(647, 501, 647, 501) // 右下
  ctx.quadraticCurveTo(647, 494, 641, 490) // 右上
  ctx.quadraticCurveTo(635, 495, 635, 495) // 左上

  //手口右のヘリ革まわりの革紐
  ctx.moveTo(648, 473) // 左上
  ctx.quadraticCurveTo(655, 474, 661, 488) // 左下
  ctx.quadraticCurveTo(665, 487, 668, 480) // 右下
  ctx.quadraticCurveTo(664, 470, 657, 466) // 右上
  ctx.quadraticCurveTo(651, 467, 648, 473) // 左上

  //手口右のヘリ革まわりの革紐
  ctx.moveTo(678, 447) // 左上
  ctx.quadraticCurveTo(683, 456, 684, 459) // 左下
  ctx.quadraticCurveTo(690, 455, 690, 450) // 右下
  ctx.quadraticCurveTo(687, 446, 685, 439) // 右上
  ctx.quadraticCurveTo(678, 441, 678, 447) // 左上

  //手口右のヘリ革まわりの革紐
  ctx.moveTo(701, 411) // 左上
  ctx.quadraticCurveTo(708, 414, 712, 424) // 左下
  ctx.quadraticCurveTo(718, 420, 718, 416) // 右下
  ctx.quadraticCurveTo(716, 408, 710, 404) // 右上
  ctx.quadraticCurveTo(702, 405, 701, 411) // 左上

  //手口右のヘリ革まわりの革紐
  ctx.moveTo(722, 384) // 左上
  ctx.quadraticCurveTo(728, 388, 730, 392) // 左下
  ctx.quadraticCurveTo(734, 393, 736, 385) // 右下
  ctx.quadraticCurveTo(732, 379, 727, 377) // 右上
  ctx.quadraticCurveTo(721, 381, 723, 385) // 左上

  //手口右のヘリ革まわりの革紐
  ctx.moveTo(749, 338) // 左上
  ctx.quadraticCurveTo(745, 348, 745, 348) // 左下
  ctx.quadraticCurveTo(751, 346, 756, 351) // 右下
  ctx.quadraticCurveTo(763, 345, 760, 341) // 右上
  ctx.quadraticCurveTo(755, 337, 749, 338) // 左上

  //手口右のヘリ革まわりの革紐
  ctx.moveTo(766, 305) // 左上
  ctx.quadraticCurveTo(763, 312, 763, 312) // 左下
  ctx.quadraticCurveTo(774, 316, 772, 316) // 右下
  ctx.quadraticCurveTo(774, 314, 774, 309) // 右上
  ctx.quadraticCurveTo(772, 305, 766, 305) // 左上

  //手口右のヘリ革まわりの革紐
  ctx.moveTo(781, 274) // 上
  ctx.quadraticCurveTo(771, 289, 771, 289) // 左下
  ctx.quadraticCurveTo(777, 289, 783, 284) // 右下
  ctx.quadraticCurveTo(784, 277, 781, 274) // 上

  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

// 小指芯の先端、各指袋上の横向き革紐 / 親指側一箇所
export const topOfFingerBagLeatherStrap = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0

  ctx.strokeStyle = ' #383838'
  ctx.fillStyle = color
  ctx.beginPath()

  // 親指側一箇所
  ctx.moveTo(668, 449) // 左左
  ctx.quadraticCurveTo(677, 447, 677, 447) // 左右
  ctx.quadraticCurveTo(690, 439, 693, 420) // 右上右
  ctx.quadraticCurveTo(689, 423, 686, 426) // 右上左
  ctx.quadraticCurveTo(683, 440, 668, 449) // 左左
  // 影
  ctx.moveTo(668, 449) // 左下
  ctx.quadraticCurveTo(681, 440, 686, 426) // 右上
  ctx.quadraticCurveTo(676, 434, 668, 449) // 右上右

  // 人差し指の真上
  ctx.moveTo(373, 103) // 左上
  ctx.quadraticCurveTo(380, 102, 378, 102) // 左下
  ctx.quadraticCurveTo(382, 94, 392, 94) // 右下
  ctx.quadraticCurveTo(393, 92, 398, 89) // 右上
  ctx.quadraticCurveTo(381, 87, 373, 103) // 左上
  // 影
  ctx.moveTo(378, 102) // 左上
  ctx.quadraticCurveTo(382, 102, 382, 102) // 左下
  ctx.quadraticCurveTo(385, 98, 390, 98) // 右下
  ctx.quadraticCurveTo(392, 94, 392, 94) // 右上
  ctx.quadraticCurveTo(379, 98, 378, 102) // 左上

  // 人差し指袋の先端
  ctx.moveTo(377, 130) // 左上
  ctx.quadraticCurveTo(380, 139, 380, 139) // 左下
  ctx.quadraticCurveTo(381, 121, 391, 116) // 右下
  ctx.quadraticCurveTo(393, 109, 393, 109) // 右上
  ctx.quadraticCurveTo(377, 115, 377, 130) // 左上
  // 影
  ctx.moveTo(378, 102) // 左上
  ctx.quadraticCurveTo(382, 102, 382, 102) // 左下
  ctx.quadraticCurveTo(385, 98, 390, 98) // 右下
  ctx.quadraticCurveTo(392, 94, 392, 94) // 右上
  ctx.quadraticCurveTo(379, 98, 378, 102) // 左上

  // 中指の真上
  ctx.moveTo(319, 139) // 左上
  ctx.quadraticCurveTo(322, 138, 322, 138) // 左下
  ctx.quadraticCurveTo(327, 125, 339, 124) // 右下
  ctx.quadraticCurveTo(342, 121, 340, 121) // 右上
  ctx.quadraticCurveTo(322, 121, 319, 140) // 左上
  // 影
  ctx.moveTo(323, 138) // 左上
  ctx.quadraticCurveTo(337, 127, 339, 127) // 右下
  ctx.quadraticCurveTo(340, 125, 340, 125) // 右上
  ctx.quadraticCurveTo(327, 126, 323, 138) // 左上

  // 薬指の右上
  ctx.moveTo(281, 171) // 左上
  ctx.quadraticCurveTo(277, 176, 280, 181) // 左下
  ctx.quadraticCurveTo(281, 168, 296, 162) // 右下
  ctx.quadraticCurveTo(299, 155, 299, 155) // 右上
  ctx.quadraticCurveTo(283, 160, 281, 171) // 左上
  // 影
  ctx.moveTo(280, 181) // 左上
  ctx.quadraticCurveTo(286, 173, 293, 168) // 右下
  ctx.quadraticCurveTo(296, 162, 296, 162) // 右上
  ctx.quadraticCurveTo(282, 171, 280, 181) // 左上

  // 小指の右上
  ctx.moveTo(255, 209) // 右上
  ctx.quadraticCurveTo(242, 221, 242, 235) // 左下
  ctx.quadraticCurveTo(252, 224, 255, 209) // 右上

  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

// 結んでいる系の革紐
export const knotOnLeatherStraps = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0

  ctx.strokeStyle = ' #383838'
  ctx.fillStyle = color
  ctx.beginPath()

  // 小指掛け紐上の大きい結び
  //結び目_横1
  ctx.moveTo(204, 424) // 左上
  ctx.quadraticCurveTo(203, 429, 204, 431) // 左下
  ctx.quadraticCurveTo(210, 424, 220, 425) // 右下
  ctx.quadraticCurveTo(220, 418, 220, 418) // 右上
  ctx.quadraticCurveTo(208, 419, 204, 424) // 左上
  // 結び目_横1＿影
  ctx.moveTo(204, 431) // 左上
  ctx.quadraticCurveTo(202, 436, 204, 439) // 左下
  ctx.quadraticCurveTo(210, 428, 219, 431) // 右下
  ctx.quadraticCurveTo(220, 425, 220, 425) // 右上
  ctx.quadraticCurveTo(210, 426, 204, 431) // 左上
  // 結び目_縦1
  ctx.moveTo(205, 439) // 左上
  ctx.quadraticCurveTo(204, 451, 204, 451) // 左下
  ctx.quadraticCurveTo(211, 452, 211, 452) // 右下
  ctx.quadraticCurveTo(215, 442, 216, 431) // 右上
  ctx.quadraticCurveTo(210, 430, 205, 439) // 左上
  // 上紐先端
  ctx.moveTo(206, 307) // 左上
  ctx.quadraticCurveTo(210, 361, 208, 421) // 左下
  ctx.quadraticCurveTo(210, 418, 217, 417) // 右下
  ctx.quadraticCurveTo(216, 358, 218, 298) // 右上
  ctx.quadraticCurveTo(210, 298, 206, 307) // 左上

  // 下紐先端
  ctx.moveTo(214, 448) // 左上
  ctx.quadraticCurveTo(228, 522, 285, 594) // 左下
  ctx.quadraticCurveTo(286, 586, 286, 586) // 右下
  ctx.quadraticCurveTo(234, 509, 217, 432) // 右上
  ctx.quadraticCurveTo(215, 444, 214, 448) // 左上

  // 小指芯先端＿横_左1
  ctx.moveTo(273, 145) // 左上
  ctx.quadraticCurveTo(279, 151, 279, 151) // 左下
  ctx.quadraticCurveTo(331, 121, 331, 121) // 右下
  ctx.quadraticCurveTo(328, 115, 326, 115) // 右上
  ctx.quadraticCurveTo(302, 124, 273, 145) // 左上
  // 小指芯先端＿横_左2
  ctx.moveTo(335, 106) // 左上
  ctx.quadraticCurveTo(343, 111, 342, 112) // 左下
  ctx.quadraticCurveTo(364, 98, 364, 98) // 右下
  ctx.quadraticCurveTo(360, 93, 360, 91) // 右上
  ctx.quadraticCurveTo(345, 97, 335, 106) // 左上
  // 小指芯先端＿横_左3
  ctx.moveTo(368, 85) // 左上
  ctx.quadraticCurveTo(372, 88, 372, 90) // 左下
  ctx.quadraticCurveTo(390, 85, 392, 83) // 右下
  ctx.quadraticCurveTo(386, 82, 388, 76) // 右上
  ctx.quadraticCurveTo(377, 82, 368, 85) // 左上
  // 小指芯先端＿横_左4
  ctx.moveTo(401, 62) // 左上
  ctx.quadraticCurveTo(398, 71, 398, 71) // 左下
  ctx.quadraticCurveTo(403, 77, 403, 77) // 右下
  ctx.quadraticCurveTo(407, 70, 414, 68) // 右上
  ctx.quadraticCurveTo(407, 67, 401, 62) // 左上
  // 小指芯先端＿横_左4
  ctx.moveTo(406, 47) // 左上
  ctx.quadraticCurveTo(404, 49, 404, 49) // 左下
  ctx.quadraticCurveTo(409, 56, 416, 57) // 右下
  ctx.quadraticCurveTo(417, 53, 417, 53) // 右上
  ctx.quadraticCurveTo(411, 48, 406, 47) // 左上

  // 小指芯先端＿人差し指_右上先端
  ctx.moveTo(389, 40) // 左上
  ctx.quadraticCurveTo(388, 48, 391, 53) // 左下
  ctx.quadraticCurveTo(403, 63, 414, 67) // 右下
  ctx.quadraticCurveTo(413, 63, 418, 59) // 右上
  ctx.quadraticCurveTo(408, 57, 389, 40) // 左上
  // 小指芯先端＿人差し指_結び目
  ctx.moveTo(415, 69) // 左上
  ctx.quadraticCurveTo(422, 79, 424, 80) // 左下
  ctx.quadraticCurveTo(417, 68, 431, 60) // 右下
  ctx.quadraticCurveTo(423, 50, 421, 58) // 右上
  ctx.quadraticCurveTo(413, 64, 415, 69) // 左上
  // 影
  ctx.moveTo(425, 80) // 左＿下
  ctx.quadraticCurveTo(428, 77, 428, 77) // 左＿右上
  ctx.quadraticCurveTo(423, 70, 432, 64) // 右上＿下
  ctx.quadraticCurveTo(432, 61, 432, 61) // 右上＿上
  ctx.quadraticCurveTo(418, 69, 425, 80) // 左＿下
  // 小指芯先端＿人差し指_結び目
  ctx.moveTo(427, 70) // 左上
  ctx.quadraticCurveTo(428, 74, 428, 77) // 左下
  ctx.quadraticCurveTo(445, 67, 438, 71) // 右下
  ctx.quadraticCurveTo(445, 67, 438, 60) // 右上
  ctx.quadraticCurveTo(432, 59, 432, 59) // 右上_左
  ctx.quadraticCurveTo(437, 61, 427, 70) // 右上_左＿開始地点

  // 小指芯先端＿人差し指_真右＿革紐先端
  ctx.moveTo(360, 132) // 左上
  ctx.quadraticCurveTo(364, 140, 364, 140) // 左下
  ctx.quadraticCurveTo(428, 114, 428, 114) // 右下
  ctx.quadraticCurveTo(428, 107, 424, 105) // 右上
  ctx.quadraticCurveTo(360, 132, 360, 132) // 左上＿開始地点
  // 小指芯先端＿人差し指_真右＿革紐結び目
  ctx.moveTo(422, 104) // 左上
  ctx.quadraticCurveTo(430, 101, 428, 114) // 左下
  ctx.quadraticCurveTo(438, 114, 440, 105) // 右下
  ctx.quadraticCurveTo(438, 99, 435, 98) // 右上
  ctx.quadraticCurveTo(426, 96, 422, 104) // 左上＿開始地点

  // 親指周りの結び系_革紐先端
  ctx.moveTo(667, 320) // 左上
  ctx.quadraticCurveTo(649, 373, 649, 373) // 左下
  ctx.quadraticCurveTo(661, 376, 661, 376) // 右下
  ctx.quadraticCurveTo(680, 321, 680, 321) // 右上
  ctx.quadraticCurveTo(675, 317, 667, 320) // 左上＿開始地点
  // 親指周りの結び系_結び目
  ctx.moveTo(668, 307) // 左上
  ctx.quadraticCurveTo(664, 320, 664, 320) // 左下
  ctx.quadraticCurveTo(676, 314, 682, 321) // 右下
  ctx.quadraticCurveTo(689, 310, 689, 310) // 右上
  ctx.quadraticCurveTo(680, 303, 668, 307) // 左上＿開始地点
  // 親指周りの結び系_右上結び目
  ctx.moveTo(686, 299) // 左上
  ctx.quadraticCurveTo(686, 303, 679, 306) // 左下
  ctx.quadraticCurveTo(688, 303, 689, 310) // 右下
  ctx.quadraticCurveTo(692, 304, 689, 302) // 右上
  ctx.quadraticCurveTo(686, 299, 686, 299) // 左上＿開始地点
  // 影
  ctx.moveTo(682, 297) // 左上
  ctx.quadraticCurveTo(670, 305, 670, 305) // 左下
  ctx.quadraticCurveTo(680, 305, 680, 305) // 右下
  ctx.quadraticCurveTo(689, 298, 682, 297) // 左上＿開始地点

  // 親指周りの結び系_革紐先端
  ctx.moveTo(566, 396) // 左上
  ctx.quadraticCurveTo(569, 406, 569, 406) // 左下
  ctx.quadraticCurveTo(695, 360, 695, 360) // 右下
  ctx.quadraticCurveTo(689, 349, 689, 349) // 右上
  ctx.quadraticCurveTo(566, 396, 566, 396) // 左上＿開始地点
  // 側面
  ctx.moveTo(564, 392) // 左上
  ctx.quadraticCurveTo(565, 395, 565, 396) // 左下
  ctx.quadraticCurveTo(629, 369, 688, 349) // 右下
  ctx.quadraticCurveTo(683, 347, 683, 347) // 右上
  ctx.quadraticCurveTo(564, 392, 564, 392) // 左上＿開始地点

  // 親指周りの結び系_結び目_左の縦
  ctx.moveTo(684, 347) // 左上
  ctx.quadraticCurveTo(693, 346, 696, 362) // 左下
  ctx.quadraticCurveTo(704, 366, 710, 360) // 右下
  ctx.quadraticCurveTo(707, 343, 694, 335) // 右上
  ctx.quadraticCurveTo(682, 335, 684, 347) // 左上＿開始地点

  // 親指周りの結び系_結び目_左の縦の左上＿小さい結び出
  ctx.moveTo(671, 350) // 左
  ctx.quadraticCurveTo(682, 346, 682, 346) // 右下
  ctx.quadraticCurveTo(677, 339, 671, 350) // 左上＿開始地点

  // 親指周りの結び系_結び目_右
  ctx.moveTo(704, 344) // 左上
  ctx.quadraticCurveTo(711, 351, 710, 356) // 左下
  ctx.quadraticCurveTo(715, 355, 720, 359) // 右下
  ctx.quadraticCurveTo(721, 352, 726, 350) // 右上
  ctx.quadraticCurveTo(720, 341, 704, 344) // 左上＿開始地点
  // 親指周りの結び系_結び目_右の左下の小さい結び出
  ctx.moveTo(710, 358) // 左上
  ctx.quadraticCurveTo(715, 359, 710, 362) // 左下
  ctx.quadraticCurveTo(715, 361, 716, 358) // 右下
  ctx.quadraticCurveTo(712, 356, 710, 358) // 左上＿開始地点
  // 親指周りの結び系_右先端
  ctx.moveTo(716, 344) // 左左
  ctx.quadraticCurveTo(721, 343, 723, 345) // 左の右下
  ctx.quadraticCurveTo(742, 329, 767, 316) // 右下
  ctx.quadraticCurveTo(767, 305, 767, 305) // 右上
  ctx.quadraticCurveTo(736, 320, 716, 344) // 左上＿開始地点
  // 親指周りの結び系_付け根
  ctx.moveTo(706, 335) // 左上
  ctx.quadraticCurveTo(709, 338, 708, 343) // 左下
  ctx.quadraticCurveTo(716, 343, 716, 343) // 中央下
  ctx.quadraticCurveTo(719, 340, 719, 340) // 右下
  ctx.quadraticCurveTo(721, 333, 718, 326) // 右上
  ctx.quadraticCurveTo(706, 325, 706, 335) // 左上＿開始地点

  // 親指芯の結び系_結び目
  ctx.moveTo(750, 337) // 左上
  ctx.quadraticCurveTo(759, 336, 761, 341) // 左下
  ctx.quadraticCurveTo(767, 339, 770, 332) // 右下
  ctx.quadraticCurveTo(772, 330, 768, 325) // 右上
  ctx.quadraticCurveTo(762, 333, 750, 337) // 左上＿開始地点
  // 親指芯の結び系_革紐先端
  ctx.moveTo(763, 341) // 左上
  ctx.quadraticCurveTo(770, 355, 770, 378) // 左下
  ctx.quadraticCurveTo(773, 383, 773, 383) // 右下
  ctx.quadraticCurveTo(779, 361, 769, 337) // 右上
  ctx.quadraticCurveTo(768, 339, 763, 341) // 左上＿開始地点

  // 親指芯の結び系_革紐先端
  ctx.moveTo(734, 381) // 左上
  ctx.quadraticCurveTo(721, 430, 721, 430) // 左下
  ctx.quadraticCurveTo(729, 433, 729, 433) // 右下
  ctx.quadraticCurveTo(744, 380, 744, 380) // 右上
  ctx.quadraticCurveTo(740, 383, 734, 381) // 左上＿開始地点
  // 親指芯の結び系_結び目
  ctx.moveTo(730, 370) // 左上
  ctx.quadraticCurveTo(727, 376, 727, 376) // 左下
  ctx.quadraticCurveTo(734, 385, 751, 376) // 右下
  ctx.quadraticCurveTo(751, 369, 751, 369) // 右上
  ctx.quadraticCurveTo(737, 375, 730, 370) // 左上＿開始地点
  // 親指芯の結び系_結び目_側面
  ctx.moveTo(737, 365) // 左上
  ctx.quadraticCurveTo(730, 370, 730, 370) // 左下
  ctx.quadraticCurveTo(738, 374, 751, 368) // 右下
  ctx.quadraticCurveTo(756, 365, 751, 361) // 右上
  ctx.quadraticCurveTo(746, 369, 737, 365) // 左上＿開始地点
  // 親指芯の結び系_上部
  ctx.moveTo(745, 351) // 左上
  ctx.quadraticCurveTo(743, 357, 736, 364) // 左下
  ctx.quadraticCurveTo(747, 365, 750, 360) // 右下
  ctx.quadraticCurveTo(751, 354, 751, 354) // 右上
  ctx.quadraticCurveTo(746, 350, 746, 350) // 左上＿開始地点

  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
