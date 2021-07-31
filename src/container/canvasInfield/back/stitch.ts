export const stitch = (
  ctx: CanvasRenderingContext2D,
  color: string,
  isDrawFingerCover: boolean
): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.setLineDash([5, 5])

  // 手口
  ctx.moveTo(340, 587) // 手口＿左
  ctx.quadraticCurveTo(430, 598, 529, 585) // 折り返し左下_外

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

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
