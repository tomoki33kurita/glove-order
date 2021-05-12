import React from 'react'
import SelectCard from 'src/components/molecules/SelectCard'
import { State, Action } from 'src/types'
import TabPanel from 'src/components/molecules/TabPanel'
import {
  // baseModelObjs,
  dominantArmObjs,
  mittSizeObjs,
  mittDepthObjs,
  backStyleObjs,
  padModleObjs,
  hardnessObjs,
  thicknessObjs,
  fingerGuardTypeObjs
} from 'src/constants/radioObjs/baseSet'
import {
  // SET_BASE_MODEL,
  SET_DOMINANT_ARM,
  SET_SIZE,
  SET_DEPTH,
  SET_BACK_STYLE,
  SET_PAD_MODEL,
  SET_LEATHER_HARDNESS,
  SET_CORE_MATERIAL_HARDNESS,
  SET_CORE_MATERIAL_THICKNESS,
  SET_FINGER_GUARD_TYPE
} from 'src/constants/ActionTypes'

type Props = {
  state: State
  value: number
  dispatch: React.Dispatch<Action>
}

const BaseSet: React.FC<Props> = ({ state, value, dispatch }) => {
  const {
    // baseModel,
    dominantArm,
    mittSize,
    mittDepth,
    backStyle,
    padModel,
    leatherHardness,
    coreMaterialHardness,
    coreMaterialThickness,
    fingerGuardType
  } = state

  const handle = {
    // baseModel: (selected: string) =>
    //   dispatch({
    //     type: SET_BASE_MODEL,
    //     baseModel: baseModelObjs.filter((prev) => prev.value === selected)[0]
    //   }),
    dominantArm: (selected: string) =>
      dispatch({
        type: SET_DOMINANT_ARM,
        dominantArm: dominantArmObjs.filter((prev) => prev.value === selected)[0]
      }),
    mittSize: (selected: string) =>
      dispatch({
        type: SET_SIZE,
        mittSize: mittSizeObjs.filter((prev) => prev.value === selected)[0]
      }),
    mittDepth: (selected: string) =>
      dispatch({
        type: SET_DEPTH,
        mittDepth: mittDepthObjs.filter((prev) => prev.value === selected)[0]
      }),
    backStyle: (selected: string) =>
      dispatch({
        type: SET_BACK_STYLE,
        backStyle: backStyleObjs.filter((prev) => prev.value === selected)[0]
      }),
    padModel: (selected: string) =>
      dispatch({
        type: SET_PAD_MODEL,
        padModel: padModleObjs.filter((prev) => prev.value === selected)[0]
      }),
    leatherHardness: (selected: string) =>
      dispatch({
        type: SET_LEATHER_HARDNESS,
        leatherHardness: hardnessObjs.filter((prev) => prev.value === selected)[0]
      }),
    coreMaterialHardness: (selected: string) =>
      dispatch({
        type: SET_CORE_MATERIAL_HARDNESS,
        coreMaterialHardness: hardnessObjs.filter((prev) => prev.value === selected)[0]
      }),
    coreMaterialThickness: (selected: string) =>
      dispatch({
        type: SET_CORE_MATERIAL_THICKNESS,
        coreMaterialThickness: thicknessObjs.filter((prev) => prev.value === selected)[0]
      }),
    fingerGuardType: (selected: string) =>
      dispatch({
        type: SET_FINGER_GUARD_TYPE,
        fingerGuardType: fingerGuardTypeObjs.filter((prev) => prev.value === selected)[0]
      })
  }

  return (
    <TabPanel value={value} index={0}>
      {/* <SelectCard summary={'基本モデル'} selectedLabel={baseModel.label} defaultValue={baseModel.value} objects={baseModelObjs} handleChange={handle.baseModel} /> */}
      <SelectCard
        summary={'利き腕'}
        selectedLabel={dominantArm.label}
        defaultValue={dominantArm.value}
        objects={dominantArmObjs}
        handleChange={handle.dominantArm}
      />
      <SelectCard
        summary={'ミットの大きさ'}
        selectedLabel={mittSize.label}
        defaultValue={mittSize.value}
        objects={mittSizeObjs}
        handleChange={handle.mittSize}
      />
      <SelectCard
        summary={'ポケットの深さ'}
        selectedLabel={mittDepth.label}
        defaultValue={mittDepth.value}
        objects={mittDepthObjs}
        handleChange={handle.mittDepth}
      />
      <SelectCard
        summary={'バックスタイル'}
        selectedLabel={backStyle.label}
        defaultValue={backStyle.value}
        objects={backStyleObjs}
        handleChange={handle.backStyle}
      />
      <SelectCard
        summary={'パッドモデル'}
        selectedLabel={padModel.label}
        defaultValue={padModel.value}
        objects={padModleObjs}
        handleChange={handle.padModel}
      />
      <SelectCard
        summary={'革の硬さ'}
        selectedLabel={leatherHardness.label}
        defaultValue={leatherHardness.value}
        objects={hardnessObjs}
        handleChange={handle.leatherHardness}
      />
      <SelectCard
        summary={'芯の硬さ'}
        selectedLabel={coreMaterialHardness.label}
        defaultValue={coreMaterialHardness.value}
        objects={hardnessObjs}
        handleChange={handle.coreMaterialHardness}
      />
      <SelectCard
        summary={'芯の厚さ'}
        selectedLabel={coreMaterialThickness.label}
        defaultValue={coreMaterialThickness.value}
        objects={thicknessObjs}
        handleChange={handle.coreMaterialThickness}
      />

      <SelectCard
        summary={'指カバー'}
        selectedLabel={fingerGuardType.label}
        defaultValue={fingerGuardType.value}
        objects={fingerGuardTypeObjs}
        handleChange={handle.fingerGuardType}
      />
    </TabPanel>
  )
}
export default BaseSet
