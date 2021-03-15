export const strapColorObjs = [
  { label: 'エコロジーブラウン', value: 'ecology_brown', color: '#733b03' },
  { label: 'ブラウン', value: 'brown', color: '#CC6600' },
  { label: 'オレンジ', value: 'orange', color: '#ff8c00' },
  { label: 'ブラック', value: 'black', color: '#1a1a1a' },
  { label: 'Jイエロー', value: 'j_yellow', color: '#ffd700' },
  { label: 'Vオレンジ', value: 'v_orange', color: '#ff4500' },
  { label: 'Jブルー', value: 'j_blue', color: '#374761' },
  { label: 'レッド', value: 'red', color: '#EE0000' },
  { label: 'ホワイト', value: 'white', color: '#fff' },
]

export const colorObjs = [...strapColorObjs, { label: 'Vブラック', value: 'v_black', color: '#525151' }]

export const targetObjs = [{ label: '不要', value: 'none' }, ...strapColorObjs, { label: 'Vブラック', value: 'v_black', color: '#525151' }]

export const liningsObjs = [
  { label: '共牛革(エコロジーブラウン)', value: 'cow_ecology_brown', color: '#733b03' },
  { label: '共牛革(ブラウン)', value: 'cow_brown', color: '#CC6600' },
  { label: '共牛革(オレンジ)', value: 'cow_orange', color: '#ff8c00' },
  { label: '共牛革(ブラック)', value: 'cow_black', color: '#1a1a1a' },
  { label: '共牛革(Jイエロー)', value: 'cow_j_yellow', color: '#ffd700' },
  { label: '共牛革(Vオレンジ)', value: 'cow_v_orange', color: '#ff4500' },
  { label: '共牛革(Jブルー)', value: 'cow_j_blue', color: '#374761' },
  { label: '共牛革(レッド)', value: 'cow_red', color: '#EE0000' },
  { label: '共牛革(ホワイト)', value: 'cow_white', color: '#fff' },
  { label: '共牛革(Vブラック)', value: 'cow_v_black', color: '#525151' },
  { label: '和牛革(ブラック)', value: 'wagyu_black', color: '#1a1a1a' },
  { label: '鹿革', value: 'deer', color: '#1a1a1a' },
  { label: 'ウルトラスエード(ブラック)', value: 'ultra_suede', color: '#1a1a1a' },
]

export const stitchColorObjs = [
  { label: 'イエロー', value: 'j_yellow', color: '#debd00' },
  { label: 'ブラック', value: 'black', color: '#262626' },
  { label: 'ブルー', value: 'blue', color: '#002bff' },
  { label: 'レッド', value: 'red', color: '#c70000' },
  { label: 'ホワイト', value: 'white', color: '#eee' },
  { label: 'ブラウン', value: 'brown', color: '#944a00' },
  { label: 'オレンジ', value: 'orange', color: '#e37d00' },
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
  { label: 'シリコンS6', value: 'silicon_6' },
]

export const hamidashiObjs = [
  { label: '切りハミ(ホワイト)', value: 'kirihami_white', color: '#fff' },
  { label: '切りハミ(ブラック)', value: 'kirihami_black', color: '#1a1a1a' },
  { label: 'ハミダシなし', value: 'no_hamidashi' },
]

export const listLiningMaterialObjs = [
  { label: 'ムートン(ホワイト)', value: 'mouton_white', color: '#fff' },
  { label: 'ムートン(ブラック)', value: 'mouton_black', color: '#1a1a1a' },
  { label: 'ウルトラスエード(パッド)', value: 'ultra_suède', color: '#ddd' },
]

const commonPartsObjs = [
  // 共通
  { label: '全体', value: 'all' },
  { label: '捕球面', value: 'catch_face' },
  { label: '革紐', value: 'strap' },
  { label: 'ウェブ', value: 'web' },
  { label: 'ヘリ革', value: 'edge' },
  { label: 'ステッチ', value: 'stitch' },
  { label: '手首裏の素材', value: 'list_lining_material' },
  { label: 'ハミダシ', value: 'hamidashi' },
]
export const catchFacePartsObjs = [
  ...commonPartsObjs,
  { label: '親指マチ', value: 'thumb_machi' },
  { label: '小指マチ', value: 'little_machi' },
  { label: 'ターゲット加工', value: 'target' },
]

export const backFacePartsObjs = [
  ...commonPartsObjs,
  { label: '親指掛け紐', value: 'thumb_hook' },
  { label: '小指掛け紐', value: 'little_hook' },
  { label: '人差し指カバー', value: 'index_cover' },
  { label: 'シェラームーブ', value: 'shellarmove' },
  { label: '台', value: 'bag_foundation' },
  { label: '薬指小指袋', value: 'ring_and_little' },
  { label: '中指袋', value: 'middle' },
  { label: '人差し指親指袋', value: 'index_and_thumb' },
  { label: '手口ベルト', value: 'list_belt' },
  { label: '裏革', value: 'linings' },
  { label: 'ラベル', value: 'hatakeyama_label' },
]

export const partsObjs = [...commonPartsObjs, ...catchFacePartsObjs, ...backFacePartsObjs]
