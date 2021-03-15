import { State, Action } from 'src/types'
import {
  SET_SELECTED_PARTS,
  SET_ALL_LEATHER_COLOR,
  SET_BASE_MODEL,
  SET_DOMINANT_ARM,
  SET_SIZE,
  SET_DEPTH,
  SET_BACK_STYLE,
  SET_PAD_MODEL,
  SET_LEATHER_COLOR,
  SET_EDGE_COLOR,
  SET_TARGET_COLOR,
  SET_LEATHER_HARDNESS,
  SET_CORE_MATERIAL_HARDNESS,
  SET_CORE_MATERIAL_THICKNESS,
  SET_LININGS,
  SET_HAMIDASHI,
  SET_FINGER_GUARD_TYPE,
  SET_ZABUTON_SPONGE,
  SET_EX_FUNCTION,
  SET_PINKIE_PATTERN,
  SET_STRAP_COLOR,
  SET_LABEL,
  SET_TB_ENGRAVED,
  SET_LIST_LINING_MATERIAL,
  SET_STITCH_COLOR,
  SET_EMBROIDERIES,
  ADD_EMBROIDERY,
  REMOVE_EMBROIDERY,
  SET_WEB_COLOR,
  SET_THUMB_MACHI_COLOR,
  SET_LITTLE_MACHI_COLOR,
  SET_THUMB_HOOK,
  SET_LITTLE_HOOK,
  SET_LIST_BELT_COLOR,
  SET_INDEX_COVER_COLOR,
  SET_BAG_FOUNDATION_COLOR,
  SET_RING_AND_LITTLE_COLOR,
  SET_MIDDLE_COLOR,
  SET_INDEX_AND_THUMB_COLOR,
  SET_SHELLARMOVE_COLOR,
  RESET_INIT_STATE,
  SET_PERSONAL,
} from 'src/constants/ActionTypes'

export const initialEmbroState = {
  id: 0,
  embroideryTypeFace: { label: '楷書体', value: 'regular' },
  embroideryPosition: { label: '親指部分', value: 'thumb_finger' },
  embroideryColor: { label: 'ブラック', value: 'black', color: 'black' },
  embroideryShadowColor: { label: '不要', value: 'none' },
  embroideryEdgeColor: { label: '不要', value: 'none' },
  embroideryContent: '',
}

export const initialState: State = {
  parts: { label: '全体', value: 'all' },
  all: { label: 'ホワイト', value: 'white', color: '#fff' },
  baseModel: { label: 'M8型', value: 'm8' },
  dominantArm: { label: '右投げ', value: 'rightThrow' },
  mittSize: { label: '基本モデルズバリ', value: 'default' },
  mittDepth: { label: '基本モデルズバリ', value: 'default' },
  backStyle: { label: 'シェラームーブ', value: 'shellarmove' },
  padModel: { label: 'Aバッド', value: 'A_pad' },
  catchFace: { label: 'ホワイト', value: 'white', color: '#fff' },
  edge: { label: 'ホワイト', value: 'white', color: '#fff' },
  target: { label: '不要', value: 'none' },
  strap: { label: 'ホワイト', value: 'white', color: '#fff' },
  leatherHardness: { label: '普通', value: 'normal' },
  coreMaterialHardness: { label: '普通', value: 'normal' },
  coreMaterialThickness: { label: '普通', value: 'normal' },
  linings: { label: '共牛革(ホワイト)', value: 'cow_white', color: '#fff' },
  hamidashi: { label: '切りハミ(ホワイト)', value: 'kirihami_white', color: '#fff' },
  fingerGuardType: { label: 'スタンダード', value: 'standard' },
  zabutonSponge: { label: '有り', value: 'zabuton' },
  exFunction: { label: '有り', value: 'ex_func' },
  pinkiePattern: { label: '有り', value: 'pinkie_pattern' },
  hatakeyamaLabel: { label: '直刺繍C1', value: 'straight_embroidery' },
  tbEngraved: { label: '有り', value: 'tb_engraved' },
  listLiningsMaterial: { label: 'ムートン(ホワイト)', value: 'mouton_white', color: '#fff' },
  stitch: { label: 'ホワイト', value: 'white', color: '#eee' },
  web: { label: 'ホワイト', value: 'white', color: '#fff' },
  littleMachi: { label: 'ホワイト', value: 'white', color: '#fff' },
  thumbMachi: { label: 'ホワイト', value: 'white', color: '#fff' },
  thumbHook: { label: 'ホワイト', value: 'white', color: '#fff' },
  littleHook: { label: 'ホワイト', value: 'white', color: '#fff' },
  listBelt: { label: 'ホワイト', value: 'white', color: '#fff' },
  indexCover: { label: 'ホワイト', value: 'white', color: '#fff' },
  bagFoundation: { label: 'ホワイト', value: 'white', color: '#fff' },
  ringAndLittle: { label: 'ホワイト', value: 'white', color: '#fff' },
  middle: { label: 'ホワイト', value: 'white', color: '#fff' },
  indexAndThumb: { label: 'ホワイト', value: 'white', color: '#fff' },
  shellarmove: { label: 'ホワイト', value: 'white', color: '#fff' },
  embroideries: [initialEmbroState],
  personal: { userName: '', userNameKana: '', zipcode: '', address: '', phoneNumber: '', mailAddress: '', remarks: '' },
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_SELECTED_PARTS:
      return { ...state, parts: action.parts }
    case SET_ALL_LEATHER_COLOR:
      return {
        ...state,
        all: action.all,
        catchFace: action.all,
        web: action.all,
        thumbMachi: action.all,
        littleMachi: action.all,
        thumbHook: action.all,
        littleHook: action.all,
        target: { label: '不要', value: 'none' },
        edge: action.all,
        indexCover: action.all,
        bagFoundation: action.all,
        ringAndLittle: action.all,
        middle: action.all,
        indexAndThumb: action.all,
        shellarmove: action.all,
        listBelt: action.all,
      }
    case SET_BASE_MODEL:
      return { ...state, baseModel: action.baseModel }
    case SET_DOMINANT_ARM:
      return { ...state, dominantArm: action.dominantArm }
    case SET_SIZE:
      return { ...state, mittSize: action.mittSize }
    case SET_DEPTH:
      return { ...state, mittDepth: action.mittDepth }
    case SET_BACK_STYLE:
      return { ...state, backStyle: action.backStyle }
    case SET_PAD_MODEL:
      return { ...state, padModel: action.padModel }
    case SET_LEATHER_COLOR:
      return { ...state, catchFace: action.catchFace }
    case SET_EDGE_COLOR:
      return { ...state, edge: action.edge }
    case SET_WEB_COLOR:
      return { ...state, web: action.web }
    case SET_THUMB_MACHI_COLOR:
      return { ...state, thumbMachi: action.thumbMachi }
    case SET_LITTLE_MACHI_COLOR:
      return { ...state, littleMachi: action.littleMachi }
    case SET_TARGET_COLOR:
      return { ...state, target: action.target }
    case SET_LEATHER_HARDNESS:
      return { ...state, leatherHardness: action.leatherHardness }
    case SET_CORE_MATERIAL_HARDNESS:
      return { ...state, coreMaterialHardness: action.coreMaterialHardness }
    case SET_CORE_MATERIAL_THICKNESS:
      return { ...state, coreMaterialThickness: action.coreMaterialThickness }
    case SET_LININGS:
      return { ...state, linings: action.linings }
    case SET_HAMIDASHI:
      return { ...state, hamidashi: action.hamidashi }
    case SET_FINGER_GUARD_TYPE:
      return { ...state, fingerGuardType: action.fingerGuardType }
    case SET_ZABUTON_SPONGE:
      return { ...state, zabutonSponge: action.zabutonSponge }
    case SET_EX_FUNCTION:
      return { ...state, exFunction: action.exFunction }
    case SET_PINKIE_PATTERN:
      return { ...state, pinkiePattern: action.pinkiePattern }
    case SET_STRAP_COLOR:
      return { ...state, strap: action.strap }
    case SET_LABEL:
      return { ...state, hatakeyamaLabel: action.hatakeyamaLabel }
    case SET_TB_ENGRAVED:
      return { ...state, tbEngraved: action.tbEngraved }
    case SET_LIST_LINING_MATERIAL:
      return { ...state, listLiningsMaterial: action.listLiningsMaterial }
    case SET_STITCH_COLOR:
      return { ...state, stitch: action.stitch }
    case SET_EMBROIDERIES:
      return { ...state, embroideries: action.embroideries }
    case ADD_EMBROIDERY:
      return { ...state, embroideries: action.embroideries }
    case REMOVE_EMBROIDERY:
      return { ...state, embroideries: action.embroideries }
    case SET_THUMB_HOOK:
      return { ...state, thumbHook: action.thumbHook }
    case SET_LITTLE_HOOK:
      return { ...state, littleHook: action.littleHook }
    case SET_LIST_BELT_COLOR:
      return { ...state, listBelt: action.listBelt }
    case SET_INDEX_COVER_COLOR:
      return { ...state, indexCover: action.indexCover }
    case SET_BAG_FOUNDATION_COLOR:
      return { ...state, bagFoundation: action.bagFoundation }
    case SET_RING_AND_LITTLE_COLOR:
      return { ...state, ringAndLittle: action.ringAndLittle }
    case SET_MIDDLE_COLOR:
      return { ...state, middle: action.middle }
    case SET_INDEX_AND_THUMB_COLOR:
      return { ...state, indexAndThumb: action.indexAndThumb }
    case SET_SHELLARMOVE_COLOR:
      return { ...state, shellarmove: action.shellarmove }
    case RESET_INIT_STATE:
      return { ...initialState }
    case SET_PERSONAL:
      return { ...state, personal: action.personal }
    default:
      return state
  }
}
