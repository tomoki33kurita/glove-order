export const edgeLeather = (ctx: CanvasRenderingContext2D, color: string, moutonColor: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 手口部分のヘリ革
  ctx.beginPath()
  ctx.moveTo(350, 565)
  ctx.quadraticCurveTo(350, 563, 370, 600)
  ctx.quadraticCurveTo(455, 645, 547, 625)
  ctx.quadraticCurveTo(610, 600, 630, 577) // 外側一番右
  ctx.quadraticCurveTo(600, 590, 620, 580) // 内側一番右
  ctx.quadraticCurveTo(550, 615, 540, 617) // 土手下内側
  ctx.quadraticCurveTo(450, 630, 382, 595)
  ctx.quadraticCurveTo(375, 585, 370, 574)
  ctx.quadraticCurveTo(350, 565, 350, 565)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  //手入れ口＿ムートン部分
  ctx.beginPath()
  ctx.moveTo(370, 574)
  ctx.quadraticCurveTo(375, 585, 382, 595)
  ctx.quadraticCurveTo(450, 630, 540, 617)
  ctx.quadraticCurveTo(620, 585, 620, 580) // 内側一番右
  ctx.quadraticCurveTo(495, 640, 370, 574) // 内側一番右
  ctx.fillStyle = moutonColor
  ctx.fill()
  ctx.stroke()
  ctx.fillStyle = color
  ctx.closePath()

  // ヘリ革＿親指外
  ctx.beginPath()
  // ctx.moveTo(168, 155)
  // ctx.quadraticCurveTo(182, 535, 476, 608)
  // // ヘリ革＿土手外
  // ctx.quadraticCurveTo(553, 620, 655, 565)
  ctx.moveTo(195, 128)
  ctx.quadraticCurveTo(170, 140, 170, 160)
  ctx.quadraticCurveTo(180, 530, 460, 605)
  // ヘリ革＿土手外
  ctx.quadraticCurveTo(550, 618, 655, 565)

  // ヘリ革＿小指外
  ctx.quadraticCurveTo(873, 410, 727, 142)

  // ヘリ革＿小指先端外
  ctx.quadraticCurveTo(640, 30, 525, 35)
  ctx.quadraticCurveTo(485, 52, 530, 140)
  ctx.lineTo(515, 195)
  ctx.lineTo(520, 200)
  ctx.lineTo(540, 140)

  // // ヘリ革＿小指先端内
  ctx.quadraticCurveTo(495, 50, 530, 42)
  // ctx.quadraticCurveTo(650, 50, 737, 172)
  ctx.quadraticCurveTo(650, 50, 724, 154)

  // // ヘリ革＿小指内
  ctx.quadraticCurveTo(850, 420, 645, 560)

  // // ヘリ革＿土手内
  ctx.quadraticCurveTo(580, 590, 500, 602)

  // // ヘリ革＿親指内
  ctx.quadraticCurveTo(320, 560, 262, 455)
  ctx.quadraticCurveTo(170, 300, 180, 150)
  ctx.quadraticCurveTo(200, 120, 200, 122)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // 外ヘリ革＿親指
  ctx.beginPath()
  ctx.moveTo(195, 128)
  ctx.quadraticCurveTo(165, 140, 165, 168)
  ctx.quadraticCurveTo(165, 548, 476, 607)
  ctx.quadraticCurveTo(170, 535, 171, 155)
  ctx.quadraticCurveTo(190, 120, 195, 130)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  //親指寄り捕球面のヘリ革
  ctx.beginPath()
  ctx.moveTo(283, 200)
  ctx.lineTo(315, 238)
  ctx.quadraticCurveTo(325, 248, 320, 255)
  ctx.lineTo(288, 217)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
