export const stitch = (
  ctx: CanvasRenderingContext2D,
  color: string,
  isDrawFingerCover: boolean,
  webType: string
): void => {
  ctx.lineWidth = 1.2
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.setLineDash([5, 5])

  // 手口
  ctx.moveTo(340, 587) // 手口＿左
  ctx.quadraticCurveTo(430, 598, 529, 585) // 折り返し左下_外

  // 手口ベルト縦＿外側
  ctx.moveTo(500, 441) // 上
  ctx.quadraticCurveTo(553, 513, 525, 584) // 折り返し左下_外
  // 手口ベルト縦＿内側
  ctx.moveTo(496, 448) // 上
  ctx.quadraticCurveTo(547, 511, 520, 587) // 折り返し左下_外

  // 手窓
  ctx.moveTo(292, 491) // 手口＿左
  ctx.quadraticCurveTo(450, 476, 450, 476) // 折り返し前
  ctx.quadraticCurveTo(492, 465, 501, 435) // 折り返し
  ctx.quadraticCurveTo(500, 380, 446, 362) // 折り返し
  ctx.quadraticCurveTo(400, 346, 342, 366) // 中指中央ハミダシ
  ctx.quadraticCurveTo(296, 388, 271, 427) // 薬指＿小指の間ハミダシ

  // 折り返し部分ここから
  ctx.moveTo(480, 251) // 折り返し左上_外
  ctx.quadraticCurveTo(450, 305, 441, 363) // 折り返し左下_外
  ctx.moveTo(477, 270) // 折り返し左上_内
  ctx.quadraticCurveTo(457, 305, 448, 365) // 折り返し左下_内

  ctx.moveTo(480, 251) // 折り返し左上_外
  ctx.quadraticCurveTo(500, 370, 590, 400) // 折り返し右上_外
  ctx.moveTo(477, 270) // 折り返し左上_内
  ctx.quadraticCurveTo(500, 370, 576, 402) // 折り返し右上_内

  ctx.moveTo(590, 400) // 折り返し右上_外
  ctx.quadraticCurveTo(560, 427, 500, 426) // 折り返し右下_外
  ctx.moveTo(576, 402) // 折り返し右上_内
  ctx.quadraticCurveTo(540, 420, 500, 420) // 折り返し右下_内
  // 折り返し部分ここまで

  // 指カバーの描画
  if (isDrawFingerCover) {
    // 外側
    ctx.moveTo(383, 354) // 左下
    ctx.quadraticCurveTo(385, 290, 404, 235) // 左上
    ctx.quadraticCurveTo(412, 212, 435, 211) // 中央上
    ctx.quadraticCurveTo(445, 212, 451, 229) // 右上
    ctx.quadraticCurveTo(432, 356, 432, 356) // 右下
    // 内側
    ctx.moveTo(387, 352) // 左下
    ctx.quadraticCurveTo(387, 290, 408, 235) // 左上
    ctx.quadraticCurveTo(414, 214, 435, 215) // 中央上
    ctx.quadraticCurveTo(443, 214, 447, 231) // 右上
    ctx.quadraticCurveTo(430, 354, 428, 354) // 右下
  }

  if (webType === 'h_web') {
    // 横向き＿下＿外側
    ctx.moveTo(586, 196) // 中央左上
    ctx.quadraticCurveTo(562, 167, 534, 146) // 左上
    ctx.quadraticCurveTo(528, 161, 526, 161) // 左上の下
    ctx.quadraticCurveTo(608, 217, 641, 318) // 右下の左
    ctx.quadraticCurveTo(652, 309, 652, 309) // 右下の右
    ctx.quadraticCurveTo(645, 278, 632, 265) // 中央右下
    // 横向き＿下＿内側
    ctx.moveTo(584, 200) // 中央左上
    ctx.quadraticCurveTo(562, 170, 534, 150) // 左上
    ctx.quadraticCurveTo(530, 161, 530, 161) // 左上の下
    ctx.quadraticCurveTo(608, 217, 643, 312) // 右下の左
    ctx.quadraticCurveTo(650, 307, 648, 307) // 右下の右
    ctx.quadraticCurveTo(642, 281, 624, 264) // 中央右下

    // 横向き＿上＿外側
    ctx.moveTo(624, 125) // 中央左上
    ctx.quadraticCurveTo(599, 93, 566, 72) // 左上_下
    ctx.quadraticCurveTo(566, 58, 569, 58) // 左上の上
    ctx.quadraticCurveTo(677, 125, 707, 250) // 右下の右
    ctx.quadraticCurveTo(694, 262, 694, 262) // 右下の左
    ctx.quadraticCurveTo(683, 214, 665, 193) // 中央右下
    // 横向き＿上＿内側
    ctx.moveTo(625, 120) // 中央左上
    ctx.quadraticCurveTo(599, 89, 568, 70) // 左上_下
    ctx.quadraticCurveTo(566, 58, 569, 60) // 左上の上
    ctx.quadraticCurveTo(675, 135, 702, 248) // 右下の右
    ctx.quadraticCurveTo(694, 262, 697, 260) // 右下の左
    ctx.quadraticCurveTo(685, 214, 672, 191) // 中央右下

    // 縦向き＿左＿外側
    ctx.moveTo(629, 123) // 上
    ctx.quadraticCurveTo(620, 177, 587, 204) // 下
    // 縦向き＿左＿内側
    ctx.moveTo(633, 127) // 上
    ctx.quadraticCurveTo(624, 177, 592, 207) // 下
    // 縦向き＿右＿内側
    ctx.moveTo(665, 180) // 上
    ctx.quadraticCurveTo(652, 230, 621, 259) // 下
    // 縦向き＿右＿外側
    ctx.moveTo(668, 183) // 上
    ctx.quadraticCurveTo(657, 230, 625, 261) // 下
  }

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
