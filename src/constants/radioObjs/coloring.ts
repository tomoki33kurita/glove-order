export const strapColorObjs = [
  { label: 'チョコレート', value: 'ecology_brown', color: '#733b03' },
  { label: 'ブラウン', value: 'brown', color: '#CC6600' },
  { label: 'オレンジ', value: 'orange', color: '#ff8c00' },
  { label: 'ブラック', value: 'black', color: '#1a1a1a' },
  { label: 'イエロー', value: 'j_yellow', color: '#ffd700' },
  { label: 'レッドオレンジ', value: 'v_orange', color: '#ff4500' },
  { label: 'ブルー', value: 'blue', color: '#1700ef' },
  { label: 'ディープブルー', value: 'd_blue', color: '#374761' },
  { label: 'レッド', value: 'red', color: '#EE0000' },
  { label: 'ホワイト', value: 'white', color: '#fff' }
]

// export const colorObjs = [...strapColorObjs, { label: 'Vブラック', value: 'v_black', color: '#525151' }]
export const colorObjs = [...strapColorObjs]

export const targetObjs = [
  { label: '不要', value: 'none' },
  ...strapColorObjs,
  { label: 'Vブラック', value: 'v_black', color: '#525151' }
]

export const liningsObjs = [
  { label: '共牛革(チョコレート)', value: 'cow_ecology_brown', color: '#733b03' },
  { label: '共牛革(ブラウン)', value: 'cow_brown', color: '#CC6600' },
  { label: '共牛革(オレンジ)', value: 'cow_orange', color: '#ff8c00' },
  { label: '共牛革(ブラック)', value: 'cow_black', color: '#1a1a1a' },
  { label: '共牛革(イエロー)', value: 'cow_j_yellow', color: '#ffd700' },
  { label: '共牛革(レッドオレンジ)', value: 'cow_v_orange', color: '#ff4500' },
  { label: '共牛革(ディープブルー)', value: 'cow_j_blue', color: '#374761' },
  { label: '共牛革(レッド)', value: 'cow_red', color: '#EE0000' },
  { label: '共牛革(ホワイト)', value: 'cow_white', color: '#fff' }
  // { label: '共牛革(Vブラック)', value: 'cow_v_black', color: '#525151' },
  // { label: '和牛革(ブラック)', value: 'wagyu_black', color: '#1a1a1a' },
  // { label: '鹿革', value: 'deer', color: '#1a1a1a' },
  // { label: 'ウルトラスエード(ブラック)', value: 'ultra_suede', color: '#1a1a1a' },
]

export const stitchColorObjs = [
  { label: 'イエロー', value: 'j_yellow', color: '#debd00' },
  { label: 'ブラック', value: 'black', color: '#262626' },
  { label: 'ブルー', value: 'blue', color: '#002bff' },
  { label: 'レッド', value: 'red', color: '#c70000' },
  { label: 'ホワイト', value: 'white', color: '#eee' },
  { label: 'ブラウン', value: 'brown', color: '#944a00' },
  { label: 'オレンジ', value: 'orange', color: '#e37d00' }
]

export const hatakeyamaLabelObjs = [
  { label: '直刺繍C1', value: 'straight_embroidery' },
  { label: '刺繍ワッペンW1', value: 'emblem_1' },
  { label: '刺繍ワッペンW2', value: 'emblem_2' },
  { label: '刺繍ワッペンW3', value: 'emblem_3' },
  { label: '刺繍ワッペンW4', value: 'emblem_4' },
  { label: 'シリコンS1', value: 'silicon_1' },
  { label: 'シリコンS2', value: 'silicon_2' },
  { label: 'シリコンS3', value: 'silicon_3' },
  { label: 'シリコンS4', value: 'silicon_4' },
  { label: 'シリコンS5', value: 'silicon_5' },
  { label: 'シリコンS6', value: 'silicon_6' }
]

export const hamidashiObjs = [
  { label: '切りハミ(ホワイト)', value: 'kirihami_white', color: '#fff' },
  { label: '切りハミ(ブラック)', value: 'kirihami_black', color: '#1a1a1a' }
]

export const listLiningMaterialObjs = [
  { label: 'ムートン(ホワイト)', value: 'mouton_white', color: '#fff' },
  { label: 'ムートン(ブラック)', value: 'mouton_black', color: '#1a1a1a' },
  { label: 'ウルトラスエード(パッド)', value: 'ultra_suède', color: '#ddd' }
]

const commonPartsObjs = [
  // 共通
  { label: '全体', value: 'all' },
  { label: '捕球面', value: 'catch_face' },
  { label: '革紐', value: 'strap' },
  { label: 'ウェブ', value: 'web' },
  { label: 'ヘリ革', value: 'edge' },
  { label: 'ステッチ', value: 'stitch' },
  { label: 'ハミダシ', value: 'hamidashi' },
  { label: '親指掛け紐', value: 'thumb_hook' },
  { label: '小指掛け紐', value: 'little_hook' }
]
const backInfieldObjs = [
  { label: '親指＿外側', value: 'thumb_out' },
  { label: '親指＿ウェブ側', value: 'thumb_web' },
  { label: '人差指＿ウェブ側', value: 'index_web' },
  { label: '人差指＿中指側', value: 'index_middle' },
  { label: '中指＿人差指側', value: 'middle_index' },
  { label: '中指＿薬指側', value: 'middle_ring' },
  { label: '薬指＿中指側', value: 'ring_middle' },
  { label: '薬指＿小指側', value: 'ring_little' },
  { label: '小指＿薬指側', value: 'little_ring' },
  { label: '小指＿外側', value: 'little_out' }
]

const backFirstMittObjs = [
  { label: 'ベルト', value: 'list_belt' },
  { label: '親指', value: 'thumb' },
  { label: 'ウェブ下', value: 'under_web' },
  { label: 'ブーメラン', value: 'boomerang' }
]

export const catchFacePartsObjs = [
  ...commonPartsObjs,
  { label: '手首裏の素材', value: 'list_lining_material' }
]

export const infieldBackPartsObjs = [
  ...commonPartsObjs,
  { label: '裏革', value: 'linings' },
  ...backInfieldObjs
]

export const firstMittBackPartsObjs = [
  ...commonPartsObjs,
  { label: '裏革', value: 'linings' },
  ...backFirstMittObjs
]

export const partsObjs = [
  ...commonPartsObjs,
  ...catchFacePartsObjs,
  ...infieldBackPartsObjs,
  ...firstMittBackPartsObjs
]
