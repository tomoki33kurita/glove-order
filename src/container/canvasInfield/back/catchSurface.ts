export const catchSurFace = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 2.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(436, 361) // 左下_ヘリ革接着点
  ctx.quadraticCurveTo(459, 367,478, 384) // 折り返し中央_ヘリ革接着点
  ctx.quadraticCurveTo(500, 403,499, 432) // 右下
  ctx.quadraticCurveTo(554, 434, 596, 403) // 右上中間
  ctx.quadraticCurveTo(597, 389, 602, 360) // 
  ctx.quadraticCurveTo(561, 289, 503, 220) // 人差し指袋の右下
  ctx.quadraticCurveTo(481, 237, 481, 237) // 
  ctx.quadraticCurveTo(445, 295, 435, 361) // 
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
