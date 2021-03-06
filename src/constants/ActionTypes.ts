// BASE SET
export const SET_BASE_MODEL = 'setBaseModel'
export const SET_DOMINANT_ARM = 'setDominantArm'
export const SET_SIZE = 'setSize'
export const SET_DEPTH = 'setDepth'
export const SET_BACK_STYLE = 'setBackStyle'
export const SET_PAD_MODEL = 'setPadModel'
export const SET_LEATHER_HARDNESS = 'setLeatherHardness'
export const SET_CORE_MATERIAL_HARDNESS = 'setCoreMaterialHardness'
export const SET_CORE_MATERIAL_THICKNESS = 'setCoreMaterialThickness'
export const SET_LININGS = 'setLinings'
export const SET_FINGER_GUARD_TYPE = 'setFingerGuardType'
export const SET_ZABUTON_SPONGE = 'setZabutonSponge'
export const SET_EX_FUNCTION = 'setExFunction'
export const SET_PINKIE_PATTERN = 'setPinkiePattern'
export const SET_TB_ENGRAVED = 'setTbEngraved'
export const SET_LIST_LINING_MATERIAL = 'setListLiningMaterial'

// COLOR
export const SET_SELECTED_PARTS = 'setSelectedParts'
export const SET_ALL_LEATHER_COLOR = 'setAllLeatherColor'
export const SET_LEATHER_COLOR = 'setLeatherColor'
export const SET_STRAP_COLOR = 'setStrapColor'
export const SET_EDGE_COLOR = 'setEdgeColor'
export const SET_TARGET_COLOR = 'setTargetColor'
export const SET_LININGS_COLOR = 'setLiningsColor'
export const SET_STITCH_COLOR = 'setStitchColor'
export const SET_LABEL = 'setLabel'
export const SET_WEB_COLOR = 'setWebColor'
// export const SET_THUMB_MACHI_COLOR = 'setThumbMachiColor'
// export const SET_LITTLE_MACHI_COLOR = 'setLittleMachiColor'
export const SET_THUMB_HOOK = 'setThumbHook'
export const SET_LITTLE_HOOK = 'setLittleHook'
export const SET_LIST_BELT_COLOR = 'setListBeltColor'
export const SET_INDEX_COVER_COLOR = 'setIndexCoverColor'
export const SET_BAG_FOUNDATION_COLOR = 'setBagFoundationColor'
export const SET_RING_AND_LITTLE_COLOR = 'setRingAndLittleColor'
export const SET_MIDDLE_COLOR = 'setMiddleColor'
export const SET_INDEX_AND_THUMB_COLOR = 'setIndexAndThumbColor'
export const SET_SHELLARMOVE_COLOR = 'setShellarmoveColor'
export const SET_HAMIDASHI = 'setHamidashi'

export const SET_THUMB_OUT_COLOR = 'thumbOut'
export const SET_THUMB_WEB_COLOR = 'thumbWeb'
export const SET_INDEX_WEB_COLOR = 'indexWeb'
export const SET_INDEX_MIDDLE_COLOR = 'indexMiddle'
export const SET_MIDDLE_INDEX_COLOR = 'middleIndex'
export const SET_MIDDLE_RING_COLOR = 'middleRing'
export const SET_RING_MIDDLE_COLOR = 'ringMiddle'
export const SET_RING_LITTLE_COLOR = 'ringLittle'
export const SET_LITTLE_RING_COLOR = 'littleRing'
export const SET_LITTLE_OUT_COLOR = 'littleOut'

// ????????????????????????
export const SET_THUMB_COLOR = 'thumb'
export const SET_UNDER_WEB_COLOR = 'underWeb'
export const SET_BOOMERANG_COLOR = 'boomerang'

// EMBROIDERY
export const SET_EMBROIDERY_TYPE_FACE = 'setEmbroideryTypeFace'
export const SET_EMBROIDERY_POSITION = 'setEmbroideryPosition'
export const SET_EMBROIDERY_COLOR = 'setEmbroideryColor'
export const SET_EMBROIDERY_SHADOW_COLOR = 'setEmbroideryShadowColor'
export const SET_EMBROIDERY_CONTENT = 'setEmbroideryContent'
export const SET_EMBROIDERIES = 'setEmbroideries'
export const ADD_EMBROIDERY = 'addEmbroideries'
export const REMOVE_EMBROIDERY = 'RemoveEmbroideries'

// ALL
export const RESET_INIT_STATE = 'resetInitState'
export const SET_PERSONAL = 'setPersonal'

export const sortReducerType = {
  all: SET_ALL_LEATHER_COLOR,
  catchFace: SET_LEATHER_COLOR,
  web: SET_WEB_COLOR,
  edge: SET_EDGE_COLOR,
  thumbHook: SET_THUMB_HOOK,
  littleHook: SET_LITTLE_HOOK,
  strap: SET_STRAP_COLOR,
  indexCover: SET_INDEX_COVER_COLOR,
  stitch: SET_STITCH_COLOR,
  linings: SET_LININGS,
  listLiningsMaterial: SET_LIST_LINING_MATERIAL,
  hamidashi: SET_HAMIDASHI,

  // ?????????????????????????????????
  thumbOut: SET_THUMB_OUT_COLOR,
  thumbWeb: SET_THUMB_WEB_COLOR,
  indexWeb: SET_INDEX_WEB_COLOR,
  indexMiddle: SET_INDEX_MIDDLE_COLOR,
  middleIndex: SET_MIDDLE_INDEX_COLOR,
  middleRing: SET_MIDDLE_RING_COLOR,
  ringMiddle: SET_RING_MIDDLE_COLOR,
  ringLittle: SET_RING_LITTLE_COLOR,
  littleRing: SET_LITTLE_RING_COLOR,
  littleOut: SET_LITTLE_OUT_COLOR,

  // ?????????????????????????????????
  listBelt: SET_LIST_BELT_COLOR,
  thumb: SET_THUMB_COLOR,
  underWeb: SET_UNDER_WEB_COLOR,
  boomerang: SET_BOOMERANG_COLOR
}
