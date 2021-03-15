export const embroideryTypeFaceObjs = [
  { label: '楷書体', value: 'regular' },
  { label: '行書体', value: 'semi_cursive' },
  { label: 'アルファベット活字体', value: 'alphabet_regular' },
  { label: 'アルファベット筆記体', value: 'alphabet_cursive' },
  { label: 'ハタケヤマオリジナル書体', value: 'original' },
  { label: 'オールドイングリッシュ書体', value: 'old_english' },
  { label: '刻印', value: 'engraved' },
]

export const embroideryPositionObjs = [
  { label: '親指部分', value: 'thumb_finger' },
  { label: '小指部分', value: 'child_finger' },
  { label: '甲部分(シェラームーブ)', value: 'shellarmove' },
  { label: '裏革部分(窓見部分)', value: 'leather_lining_mdd' },
  { label: '裏革部分(手口部分)', value: 'leather_lining_enter' },
  { label: 'グラブ袋', value: 'glove_bag' },
]

export const embroideryColorObjs = [
  { label: 'ブラック', value: 'black', color: '#000' },
  { label: 'Vブラック', value: 'v_black', color: '#525151' },
  { label: 'ネイビー', value: 'navy', color: '#202f55' },
  { label: 'パープル', value: 'purple', color: '#8123b0' },
  { label: 'ロイヤルブルー', value: 'royal_blue', color: '#0000DD' },
  { label: 'ブルー', value: 'blue', color: '#0075c2' },
  { label: 'サックス', value: 'sax', color: '#627da1' },
  { label: 'エコロジーブラウン', value: 'cow_ecology_brown', color: '#733b03' },
  { label: 'ブラウン', value: 'brown', color: '#CC6600' },
  { label: 'エンジ', value: 'engi', color: '#B3424A' },
  { label: 'ケリー', value: 'kerry', color: '#00d7bd' },
  { label: 'アイレストグリーン', value: 'illest_green', color: '#008a79' },
  { label: 'ピンク', value: 'pink', color: '#ef93b6' },
  { label: 'レッド', value: 'red', color: '#EE0000' },
  { label: 'Vオレンジ', value: 'v_orange', color: '#ff4500' },
  { label: 'オレンジ', value: 'orange', color: '#ff8c00' },
  { label: '金茶', value: 'gold_brown', color: '#CE7A19' },
  { label: 'イエロー', value: 'yellow', color: '#ffff00' },
  { label: 'マークゴールド', value: 'mark_gold', color: '#e6d490' },
  { label: 'ゴールド', value: 'gold', color: '#d9bd00' },
  { label: '金糸', value: 'kin_ito', color: '#ECE038' },
  { label: '銀糸', value: 'gin_ito', color: '#BBBCBF' },
  { label: 'シルバー', value: 'silver', color: '#C0C0C0' },
  { label: 'ホワイト', value: 'white', color: '#ffffff' },
]

export const embroideryShadowEdgeColorObjs = [{ label: '不要', value: 'none' }, ...embroideryColorObjs]
