export const stitch = (ctx: CanvasRenderingContext2D, color: string, targetColor: string | undefined): void => {
  ctx.lineWidth = 2
  ctx.strokeStyle = color

  // ウェブ部分
  ctx.beginPath()
  ctx.setLineDash([5, 5])
  // 一段目
  ctx.moveTo(275, 116)
  ctx.lineTo(483, 59)
  ctx.moveTo(277, 120)
  ctx.lineTo(481, 64)
  // 二段目
  ctx.moveTo(284, 138)
  ctx.lineTo(485, 83)
  ctx.moveTo(286, 142)
  ctx.lineTo(486, 88)

  // 三段目
  ctx.moveTo(292, 164)
  ctx.lineTo(492, 108)
  ctx.moveTo(294, 168)
  ctx.lineTo(494, 112)

  // 捕球面の半円
  ctx.moveTo(300, 235)
  ctx.quadraticCurveTo(335, 325, 450, 300)
  ctx.quadraticCurveTo(540, 270, 530, 185)

  // ウェブ下捕球面_横
  ctx.moveTo(321, 220)
  ctx.lineTo(500, 169)
  ctx.moveTo(325, 224)
  ctx.lineTo(499, 174)

  // 親指寄り捕球面のヘリ革
  ctx.moveTo(290, 225)
  ctx.lineTo(323, 263)
  ctx.quadraticCurveTo(333, 242, 330, 247)

  // ウェブ下捕球面_左縦
  ctx.moveTo(319, 220)
  ctx.lineTo(328, 250)
  ctx.moveTo(325, 224)
  ctx.lineTo(335, 253)
  ctx.quadraticCurveTo(330, 270, 322, 260)

  // ウェブ下捕球面_右縦
  ctx.moveTo(500, 169)
  ctx.lineTo(509, 200)
  ctx.lineTo(521, 212)
  ctx.moveTo(496, 174)
  ctx.lineTo(504, 204)
  ctx.lineTo(521, 214)

  // 小指芯先端寄り捕球面のヘリ革
  ctx.moveTo(545, 140)
  ctx.lineTo(521, 212)

  // 小指芯先端寄りのヘリ革
  ctx.moveTo(530, 45)
  ctx.quadraticCurveTo(500, 55, 545, 140)

  // 小指芯先端から小指マチの開始地点まで
  ctx.moveTo(530, 45)
  ctx.quadraticCurveTo(643, 52, 723, 158)

  // 小指マチ部分
  ctx.quadraticCurveTo(851, 405, 650, 555)
  // ヘリ革＿土手内
  ctx.quadraticCurveTo(545, 598, 504, 598)

  // 親指芯ヘリ革内側部分
  ctx.moveTo(195, 133)
  ctx.quadraticCurveTo(178, 140, 183, 160)

  ctx.quadraticCurveTo(180, 320, 263, 455)
  ctx.quadraticCurveTo(350, 577, 504, 599)

  if (targetColor) {
    // 親指ターゲット＿ステッチ
    ctx.moveTo(237, 138)
    ctx.quadraticCurveTo(270, 450, 432, 540)
    ctx.quadraticCurveTo(470, 561, 477, 565)
    ctx.lineTo(457, 512)
    ctx.quadraticCurveTo(300, 400, 268, 180)
    ctx.quadraticCurveTo(240, 140, 237, 138)

    // 小指ターゲット＿ステッチ
    ctx.moveTo(533, 55)
    ctx.quadraticCurveTo(525, 52, 530, 52)
    ctx.quadraticCurveTo(628, 65, 718, 175)

    ctx.moveTo(530, 60)
    ctx.quadraticCurveTo(540, 60, 540, 60)
    ctx.quadraticCurveTo(628, 85, 718, 175)
  }

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
