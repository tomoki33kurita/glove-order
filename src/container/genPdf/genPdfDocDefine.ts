// 捕球面の描画
import { useCanvasInfieldFront } from 'src/hooks/useCanvasInfieldFront'
// 背面の描画
import { useCanvasInfieldBack } from 'src/hooks/useCanvasInfieldBack'
import { Personal, State } from 'src/types'
import { useCanvasFirstMittFront } from 'src/hooks/useCanvasFirstMittFront'
import { useCanvasFirstMittBack } from 'src/hooks/useCanvasFirstMittBack'

export const genImgFromCanvas = (state: State, face: 'front' | 'back', asPath: string) => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, 900, 652)
  ctx.strokeStyle = '#383838'
  ctx.lineWidth = 2
  if (face === 'front') {
    if (asPath === '/hard/infield') useCanvasInfieldFront(ctx, state)
    if (asPath === '/hard/first-mitt') useCanvasFirstMittFront(ctx, state)
  }
  if (face === 'back') {
    if (asPath === '/hard/infield') useCanvasInfieldBack(ctx, state)
    if (asPath === '/hard/first-mitt') useCanvasFirstMittBack(ctx, state)
  }
  return canvas.toDataURL()
}

const genCellContent = (head: string, content: string, alignment?: string) => {
  return [
    { text: `${head}： `, fontSize: 10 },
    { text: content, alignment: alignment ? alignment : 'right', fontSize: 12 }
  ]
}

export const genPdfDocDefine = (state: State, personalData: Personal, asPath: string) => {
  return {
    content: [
      {
        text: 'オーダー仕様書',
        style: { fontSize: 18 }
      },
      {
        text: 'お客様情報',
        style: { fontSize: 14 },
        margin: [0, 16, 0, 8]
      },
      {
        table: {
          body: [
            [
              genCellContent('お客様名', personalData?.userName || '山田太郎'),
              genCellContent('お名前(カナ)', personalData?.userNameKana || 'ヤマダタロウ'),
              genCellContent('住所', personalData?.address || '東京都新宿区1-1-1テスト')
            ],
            [
              genCellContent('お電話番号', personalData?.phoneNumber || '123-4567-8910'),
              genCellContent('メールアドレス', personalData?.mailAddress || 'test@gmail.com'),
              ['']
            ]
          ]
        }
      },

      {
        text: '基本設定',
        style: { fontSize: 14 },
        margin: [0, 16, 0, 8]
      },
      {
        table: {
          widths: ['33%', '33%', '33%'],
          body: [
            [
              // genCellContent('基本モデル', state.baseModel.label),
              genCellContent('利き腕', state.dominantArm.label),
              genCellContent('ミットの大きさ', state.mittSize.label),
              genCellContent('ミットの大きさ', state.mittSize.label)
            ],
            [
              genCellContent('ポケットの深さ', state.mittDepth.label),
              genCellContent('バックスタイル', state.backStyle.label),
              genCellContent('パッドモデル', state.padModel.label)
            ],
            [
              genCellContent('革の硬さ', state.leatherHardness.label),
              genCellContent('芯の硬さ', state.coreMaterialHardness.label),
              genCellContent('芯の厚さ', state.coreMaterialThickness.label)
            ],
            [
              genCellContent('指カバー', state.fingerGuardType.label),
              genCellContent('', ''),
              genCellContent('', '')
              // genCellContent('座ブトンスポンジ', state.zabutonSponge.label),
              // genCellContent('EX機能', state.exFunction.label),
            ],
            // [genCellContent('ピンキーパターン', state.pinkiePattern.label), '', ''],
            [genCellContent('', ''), '', '']
          ]
        }
      },
      {
        text: 'カラー設定',
        style: { fontSize: 14 },
        margin: [0, 16, 0, 8]
      },
      {
        table: {
          widths: ['33%', '33%', '33%'],
          body: [
            [
              genCellContent(`捕球面カラー`, state.catchFace.label),
              genCellContent(`革紐カラー`, state.strap.label),
              genCellContent(`ウェブカラー`, state.web.label)
            ],
            [
              genCellContent(`ヘリ革カラー`, state.edge.label),
              genCellContent(`ステッチカラー`, state.stitch.label),
              genCellContent(`手首裏の素材`, state.listLiningsMaterial.label)
            ],
            [
              genCellContent(`ハミダシ`, state.hamidashi.label),
              genCellContent('', ''),
              genCellContent('', '')
              // genCellContent(`親指マチカラー`, state.thumbHook),
              // genCellContent(`小指マチカラー`, state.littleMachi.label),
            ],
            [
              genCellContent(`親指掛け紐カラー`, state.thumbHook.label),
              genCellContent(`小指掛け紐カラー`, state.littleHook.label),
              genCellContent(`人差し指カバーカラー`, state.indexCover.label)
            ],
            [
              genCellContent('', ''),
              genCellContent('', ''),
              genCellContent('', '')
              // genCellContent(`シェラームーブカラー`, state.shellarmove.label),
              // genCellContent(`台カラー`, state.bagFoundation.label),
              // genCellContent(`薬指小指袋カラー`, state.ringAndLittle.label),
            ],
            [
              // genCellContent(`中指袋カラー`, state.middle.label),
              // genCellContent(`人差し指親指袋カラー`, state.indexAndThumb.label),
              genCellContent('', ''),
              genCellContent('', ''),
              genCellContent(`手口ベルトカラー`, state.listBelt.label)
            ],
            // [genCellContent(`裏革カラー`, state.linings.label), genCellContent(`ターゲット加工`, state.target.label), genCellContent(`ラベル`, state.hatakeyamaLabel.label)],
            [
              genCellContent(`裏革カラー`, state.linings.label),
              genCellContent('', ''),
              genCellContent('', '')
            ]
          ]
        }
      },
      {
        text: '刺繍設定１',
        style: { fontSize: 14 },
        margin: [0, 16, 0, 8]
      },
      {
        table: {
          widths: '50%',
          body: [
            [
              genCellContent(`書式`, state.embroideries[0].embroideryTypeFace.label),
              genCellContent(`位置`, state.embroideries[0].embroideryPosition.label)
            ],
            [
              genCellContent(`刺繍カラー`, state.embroideries[0].embroideryColor.label),
              genCellContent(`影カラー`, state.embroideries[0].embroideryShadowColor.label)
            ],
            [genCellContent(`刺繍内容`, `${state.embroideries[0].embroideryContent} `), '']
          ]
        }
      },
      {
        text: '備考欄',
        style: { fontSize: 14 },
        margin: [0, 16, 0, 8]
      },
      {
        table: {
          // headerRows: 2,
          body: [[genCellContent(`その他ご要望`, state?.personal?.remarks, 'left')]]
          // body: [[genCellContent(`その他ご要望`, state?.personal?.remarks, 'left')]],
        }
      },

      {
        text: '捕球面イメージ',
        style: { fontSize: 14 },
        margin: [0, 16, 0, 8]
      },
      {
        image: `${genImgFromCanvas(state, 'front', asPath)}`,
        width: 450,
        height: 326
      },
      {
        text: '背面イメージ',
        style: { fontSize: 14 },
        margin: [0, 16, 0, 8]
      },
      {
        image: `${genImgFromCanvas(state, 'back', asPath)}`,
        width: 450,
        height: 326
      }
    ],

    defaultStyle: { font: 'GenYoMin' }
  }
}
