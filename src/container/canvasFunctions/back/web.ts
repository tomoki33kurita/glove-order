export const web = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // if (variable === 'hWeb') {

  // }

    // 横上パーツ
    ctx.beginPath()
    ctx.moveTo(546, 85) // 横下パーツの左下
    ctx.quadraticCurveTo(626, 149,687, 282) //右下
    ctx.quadraticCurveTo(700, 285,704, 270) //
    ctx.quadraticCurveTo(703, 253,721, 245) //右上
    ctx.quadraticCurveTo(706, 174,661, 115)
    ctx.quadraticCurveTo(625, 70,576, 44) //左上
    ctx.quadraticCurveTo(562, 43,563, 62) //
    ctx.quadraticCurveTo(561, 79,546, 87) //左下
    ctx.quadraticCurveTo(557, 66,564, 52) // 左下の革紐の穴上部
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
  
    // 切り込みライン
    ctx.beginPath()
    ctx.moveTo(573, 67) //左上
    ctx.quadraticCurveTo(659, 125,700, 249) //右下
    ctx.stroke()
  
  // 横下パーツ
  ctx.beginPath()
  ctx.moveTo(504, 180) // 横下パーツの左下
  ctx.quadraticCurveTo(584, 244,617, 343) //右下
  ctx.quadraticCurveTo(630, 347,640, 337) //
  ctx.quadraticCurveTo(647, 318,670, 308) //右上
  ctx.quadraticCurveTo(650, 233,602, 179) //右上
  ctx.quadraticCurveTo(570, 138,539, 120) //左上
  ctx.quadraticCurveTo(523, 138,521, 157) //
  ctx.quadraticCurveTo(519, 174,504, 182) //左下
  ctx.quadraticCurveTo(510, 161,522, 147) // 左下の革紐の穴上部
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // 切り込みライン
  ctx.beginPath()
  ctx.moveTo(535, 157) //左上
  ctx.quadraticCurveTo(608, 210,645, 309) //右下
  ctx.stroke()


  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(627, 117) //左上
  ctx.quadraticCurveTo(612, 180, 583, 202) //左下
  ctx.quadraticCurveTo(610, 230, 626, 267) //左下
  ctx.quadraticCurveTo(658, 233, 672, 184) //右上
  ctx.quadraticCurveTo(650, 141, 627, 115) //右上
  ctx.fill()
  ctx.stroke()

}
