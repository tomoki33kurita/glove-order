// 捕球面の刻印
// hooks名に各ドメインを含めても良いかも
export const engravedOfCatchFace = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = color
  ctx.beginPath()

  ctx.font = '22px serif'
  ctx.strokeText(`" Yell-story "`, 405, 430)
  ctx.font = '14px serif'
  ctx.strokeText(`since2017`, 440, 450)

  // ctx.moveTo(337, 87) // 右上
  // ctx.quadraticCurveTo(250, 140, 231, 218) // 左下

  ctx.stroke()
  ctx.closePath()
}
