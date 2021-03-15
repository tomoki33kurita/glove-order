export const edges = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 手口
  ctx.beginPath()
  ctx.moveTo(340, 590) // 手口左上
  ctx.quadraticCurveTo(434, 600,530, 587) //手口右上
  ctx.quadraticCurveTo(525, 597,507, 606) //手口右下
  ctx.quadraticCurveTo(425, 611,362, 605) //手口左下
  ctx.quadraticCurveTo(343, 601,340, 590) //手口左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()


  // 指根元
  ctx.beginPath()
  ctx.moveTo(321, 588) // 手口左下左
  ctx.quadraticCurveTo(287, 531,268, 477) // 手口左上、右カーブ前
  ctx.quadraticCurveTo(258, 448,275, 423) // 
  ctx.quadraticCurveTo(298, 389,341, 369) // 中指ハミダシ
  ctx.quadraticCurveTo(411, 340,467, 375) // 折り返し中間
  ctx.quadraticCurveTo(500, 395,499, 432) // 折り返し右下
  ctx.quadraticCurveTo(490, 468,440, 476) // ラベル左六角形頂点
  ctx.quadraticCurveTo(291, 489,291, 489) // 左側面ヘリ革合流地点下
  ctx.quadraticCurveTo(285, 478,285, 478) // 左側面ヘリ革合流地点上 / ベルト内側直線左
  ctx.quadraticCurveTo(290, 470,295, 473) // ベルト内側直線右 
  ctx.quadraticCurveTo(452, 454,452, 454) // 
  ctx.quadraticCurveTo(473, 448,482, 434) // 
  ctx.quadraticCurveTo(483, 422,479, 417) // 
  ctx.quadraticCurveTo(459, 388,423, 379) // 
  ctx.quadraticCurveTo(380, 374,346, 390) // 
  ctx.quadraticCurveTo(316, 403,295, 429) // 
  ctx.quadraticCurveTo(276, 452,286, 479) // 
  ctx.quadraticCurveTo(319, 536,339, 589) // 
  ctx.quadraticCurveTo(330, 593,321, 588) // スタート地点戻り
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  
}