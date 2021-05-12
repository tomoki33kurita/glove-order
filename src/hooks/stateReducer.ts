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
  SET_LEATHER_HARDNESS,
  SET_CORE_MATERIAL_HARDNESS,
  SET_CORE_MATERIAL_THICKNESS,
  SET_LININGS,
  SET_HAMIDASHI,
  SET_FINGER_GUARD_TYPE,
  SET_STRAP_COLOR,
  SET_LIST_LINING_MATERIAL,
  SET_STITCH_COLOR,
  SET_EMBROIDERIES,
  ADD_EMBROIDERY,
  REMOVE_EMBROIDERY,
  SET_WEB_COLOR,
  SET_THUMB_HOOK,
  SET_LITTLE_HOOK,
  SET_INDEX_COVER_COLOR,
  RESET_INIT_STATE,
  SET_PERSONAL,
  SET_THUMB_OUT_COLOR,
  SET_THUMB_WEB_COLOR,
  SET_INDEX_WEB_COLOR,
  SET_INDEX_MIDDLE_COLOR,
  SET_MIDDLE_INDEX_COLOR,
  SET_MIDDLE_RING_COLOR,
  SET_RING_MIDDLE_COLOR,
  SET_RING_LITTLE_COLOR,
  SET_LITTLE_RING_COLOR,
  SET_LITTLE_OUT_COLOR
} from 'src/constants/ActionTypes'

export const initialEmbroState = {
  id: 0,
  embroideryTypeFace: { label: '楷書体', value: 'regular' },
  embroideryPosition: { label: '親指部分', value: 'thumb_finger' },
  embroideryColor: { label: 'ブラック', value: 'black', color: 'black' },
  embroideryShadowColor: { label: '不要', value: 'none' },
  embroideryEdgeColor: { label: '不要', value: 'none' },
  embroideryContent: ''
}

const baseInitialState = {
  // baseModel: { label: 'M8型', value: 'm8' },
  dominantArm: { label: '右投げ', value: 'rightThrow' },
  mittSize: { label: '基本モデルズバリ', value: 'default' },
  mittDepth: { label: '基本モデルズバリ', value: 'default' },
  backStyle: { label: 'Aバック', value: 'A_back' },
  padModel: { label: 'Aバッド', value: 'A_pad' },
  coreMaterialHardness: { label: '普通', value: 'normal' },
  coreMaterialThickness: { label: '普通', value: 'normal' },
  leatherHardness: { label: '普通', value: 'normal' },
  fingerGuardType: { label: 'スタンダード', value: 'standard' }
}

const colorInitialState = {
  parts: { label: '全体', value: 'all' },
  all: { label: 'ホワイト', value: 'white', color: '#fff' },
  catchFace: { label: 'ホワイト', value: 'white', color: '#fff' },
  edge: { label: 'ホワイト', value: 'white', color: '#fff' },
  strap: { label: 'ホワイト', value: 'white', color: '#fff' },
  linings: { label: '共牛革(ホワイト)', value: 'cow_white', color: '#fff' },
  hamidashi: { label: '切りハミ(ホワイト)', value: 'kirihami_white', color: '#fff' },
  listLiningsMaterial: { label: 'ムートン(ホワイト)', value: 'mouton_white', color: '#fff' },
  stitch: { label: 'ホワイト', value: 'white', color: '#eee' },
  web: { label: 'ホワイト', value: 'white', color: '#fff' },
  thumbHook: { label: 'ホワイト', value: 'white', color: '#fff' },
  littleHook: { label: 'ホワイト', value: 'white', color: '#fff' },
  listBelt: { label: 'ホワイト', value: 'white', color: '#fff' },
  indexCover: { label: 'ホワイト', value: 'white', color: '#fff' }
}

// 内野手用グローブ
export const initialState: State = {
  // トップページのloading
  isLoading: false,
  // 基本設定
  ...baseInitialState,
  // カラー設定
  ...colorInitialState,
  thumbOut: { label: 'ホワイト', value: 'white', color: '#fff' },
  thumbWeb: { label: 'ホワイト', value: 'white', color: '#fff' },
  indexWeb: { label: 'ホワイト', value: 'white', color: '#fff' },
  indexMiddle: { label: 'ホワイト', value: 'white', color: '#fff' },
  middleIndex: { label: 'ホワイト', value: 'white', color: '#fff' },
  middleRing: { label: 'ホワイト', value: 'white', color: '#fff' },
  ringMiddle: { label: 'ホワイト', value: 'white', color: '#fff' },
  ringLittle: { label: 'ホワイト', value: 'white', color: '#fff' },
  littleRing: { label: 'ホワイト', value: 'white', color: '#fff' },
  littleOut: { label: 'ホワイト', value: 'white', color: '#fff' },

  // ステッチ
  embroideries: [initialEmbroState],
  // 個人情報入力部分
  personal: {
    userName: '',
    userNameKana: '',
    zipcode: '',
    address: '',
    phoneNumber: '',
    mailAddress: '',
    remarks: ''
  }
}

// 一塁手用ミット
export const initialStateFirstMitt: State = {
  // トップページのloading
  isLoading: false,
  // 基本設定
  ...baseInitialState,
  // カラー設定
  ...colorInitialState,

  // ステッチ
  embroideries: [initialEmbroState],
  // 個人情報入力部分
  personal: {
    userName: '',
    userNameKana: '',
    zipcode: '',
    address: '',
    phoneNumber: '',
    mailAddress: '',
    remarks: ''
  }
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'set_loading':
      return { ...state, isLoading: true }
    case SET_SELECTED_PARTS:
      return { ...state, parts: action.parts }
    case SET_ALL_LEATHER_COLOR:
      return {
        ...state,
        all: action.all,
        catchFace: action.all,
        web: action.all,
        thumbHook: action.all,
        littleHook: action.all,
        edge: action.all,
        indexCover: action.all,
        // indexAndThumb: action.all,
        listBelt: action.all,
        thumbOut: action.all,
        thumbWeb: action.all,
        indexWeb: action.all,
        indexMiddle: action.all,
        middleIndex: action.all,
        middleRing: action.all,
        ringMiddle: action.all,
        ringLittle: action.all,
        littleRing: action.all,
        littleOut: action.all
      }
    // case SET_BASE_MODEL:
    //   return { ...state, baseModel: action.baseModel }
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

    case SET_THUMB_OUT_COLOR:
      return { ...state, thumbOut: action.thumbOut }
    case SET_THUMB_WEB_COLOR:
      return { ...state, thumbWeb: action.thumbWeb }
    case SET_INDEX_WEB_COLOR:
      return { ...state, indexWeb: action.indexWeb }
    case SET_INDEX_MIDDLE_COLOR:
      return { ...state, indexMiddle: action.indexMiddle }
    case SET_MIDDLE_INDEX_COLOR:
      return { ...state, middleIndex: action.middleIndex }
    case SET_MIDDLE_RING_COLOR:
      return { ...state, middleRing: action.middleRing }
    case SET_RING_MIDDLE_COLOR:
      return { ...state, ringMiddle: action.ringMiddle }
    case SET_RING_LITTLE_COLOR:
      return { ...state, ringLittle: action.ringLittle }
    case SET_LITTLE_RING_COLOR:
      return { ...state, littleRing: action.littleRing }
    case SET_LITTLE_OUT_COLOR:
      return { ...state, littleOut: action.littleOut }

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
    // case SET_ZABUTON_SPONGE:
    //   return { ...state, zabutonSponge: action.zabutonSponge }
    // case SET_EX_FUNCTION:
    // return { ...state, exFunction: action.exFunction }
    // case SET_PINKIE_PATTERN:
    // return { ...state, pinkiePattern: action.pinkiePattern }
    case SET_STRAP_COLOR:
      return { ...state, strap: action.strap }
    // case SET_LABEL:
    // return { ...state, hatakeyamaLabel: action.hatakeyamaLabel }
    case SET_LIST_LINING_MATERIAL:
      return { ...state, listLiningsMaterial: action.listLiningsMaterial }
    case SET_STITCH_COLOR:
      return { ...state, stitch: action.stitch }
    case SET_EMBROIDERIES:
      return { ...state, embroideries: action.embroideries }
    case ADD_EMBROIDERY: // incrementの方が合っている気がする
      return { ...state, embroideries: action.embroideries }
    case REMOVE_EMBROIDERY: // decrementの方が合っている気がする
      return { ...state, embroideries: action.embroideries }
    case SET_THUMB_HOOK:
      return { ...state, thumbHook: action.thumbHook }
    case SET_LITTLE_HOOK:
      return { ...state, littleHook: action.littleHook }
    case SET_INDEX_COVER_COLOR:
      return { ...state, indexCover: action.indexCover }
    case RESET_INIT_STATE:
      return { ...initialState }
    case SET_PERSONAL:
      return { ...state, personal: action.personal }
    default:
      return state
  }
}
