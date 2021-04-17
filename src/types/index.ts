type stateObj = {
  value: string
  label: string
  color?: string
}

export type Embroidery = {
  id: number
  embroideryTypeFace: stateObj
  embroideryPosition: stateObj
  embroideryColor: stateObj
  embroideryShadowColor: stateObj
  embroideryEdgeColor: stateObj
  embroideryContent: string
}

export type State = {
  parts: stateObj
  all: stateObj
  baseModel: stateObj
  dominantArm: stateObj
  mittSize: stateObj
  mittDepth: stateObj
  backStyle: stateObj
  padModel: stateObj
  catchFace: stateObj
  edge: stateObj
  leatherHardness: stateObj
  coreMaterialHardness: stateObj
  coreMaterialThickness: stateObj
  linings: stateObj
  fingerGuardType: stateObj
  hamidashi: stateObj
  strap: stateObj
  listLiningsMaterial: stateObj
  stitch: stateObj
  web: stateObj
  thumbHook: stateObj
  littleHook: stateObj
  listBelt: stateObj
  indexCover: stateObj
  thumbOut: stateObj
  thumbWeb: stateObj
  indexWeb: stateObj
  indexMiddle: stateObj
  middleIndex: stateObj
  middleRing: stateObj
  ringMiddle: stateObj
  ringLittle: stateObj
  littleRing: stateObj
  littleOut: stateObj
  embroideries: Embroidery[]
  personal: Personal
}

export type FigureBack = {
  strapColor: string
  leatherColor: string
  webColor: string
  thumbMachiColor: string
  littleMachiColor: string
  edgeColor: string
  stitchColor: string
  targetColor: string | undefined
  cutSurfaceColor: string | undefined
  moutonColor: string
  thumbHookColor: string
  littleHookColor: string
  listBeltColor: string
  indexCoverColor: string
  indexCoverType: string
  bagFoundationColor: string
  ringAndLittleColor: string
  middleColor: string
  indexAndThumbColor: string
  shellarmoveColor: string
  liningsColor: string
  isZabuton: string
}

export type DevTools = {
  cordinateX: number
  cordinateY: number
  isCopy: boolean
  setCopy: (value: React.SetStateAction<boolean>) => void
}

export type Action = Partial<State> & { type: string }

export type Personal = {
  userName: string
  userNameKana: string
  zipcode: string
  address: string
  phoneNumber: string
  mailAddress: string
  remarks: string
}
