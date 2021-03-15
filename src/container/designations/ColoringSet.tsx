import React from 'react'
import SelectCard from 'src/components/molecules/SelectCard'
import { State, Action } from 'src/types'
import TabPanel from 'src/components/molecules/TabPanel'
import {
  colorObjs,
  liningsObjs,
  strapColorObjs,
  hatakeyamaLabelObjs,
  hamidashiObjs,
  stitchColorObjs,
  targetObjs,
  listLiningMaterialObjs,
  catchFacePartsObjs,
  backFacePartsObjs,
  partsObjs,
} from 'src/constants/radioObjs/coloring'
import {
  SET_SELECTED_PARTS,
  SET_ALL_LEATHER_COLOR,
  SET_LEATHER_COLOR,
  SET_EDGE_COLOR,
  SET_LININGS,
  SET_STRAP_COLOR,
  SET_LABEL,
  SET_STITCH_COLOR,
  SET_TARGET_COLOR,
  SET_HAMIDASHI,
  SET_WEB_COLOR,
  SET_THUMB_MACHI_COLOR,
  SET_LITTLE_MACHI_COLOR,
  SET_LIST_LINING_MATERIAL,
  SET_THUMB_HOOK,
  SET_LITTLE_HOOK,
  SET_LIST_BELT_COLOR,
  SET_INDEX_COVER_COLOR,
  SET_BAG_FOUNDATION_COLOR,
  SET_RING_AND_LITTLE_COLOR,
  SET_MIDDLE_COLOR,
  SET_INDEX_AND_THUMB_COLOR,
  SET_SHELLARMOVE_COLOR,
} from 'src/constants/ActionTypes'

interface SortType {
  catch_face: string
  web: string
}

type Props = {
  state: State
  value: number
  figurePanelNum: number
  dispatch: React.Dispatch<Action>
}

const ColoringSet: React.FC<Props> = ({ state, value, figurePanelNum, dispatch }) => {
  const {
    parts,
    all,
    catchFace,
    web,
    thumbMachi,
    littleMachi,
    edge,
    thumbHook,
    littleHook,
    indexCover,
    bagFoundation,
    ringAndLittle,
    middle,
    indexAndThumb,
    shellarmove,
    listBelt,
    stitch,
    linings,
    target,
    strap,
    hatakeyamaLabel,
    hamidashi,
    listLiningsMaterial,
  } = state

  const partKey = parts.value as keyof SortType
  const handle = {
    all: (selected: string) => dispatch({ type: SET_ALL_LEATHER_COLOR, all: colorObjs.filter((prev) => prev.value === selected)[0] }),
    selectParts: (selected: string) => dispatch({ type: SET_SELECTED_PARTS, parts: partsObjs.filter((prev) => prev.value === selected)[0] }),
    leather: (selected: string) => dispatch({ type: sortReducerType[partKey], catchFace: colorObjs.filter((prev) => prev.value === selected)[0] }),
    web: (selected: string) => dispatch({ type: sortReducerType[partKey], web: colorObjs.filter((prev) => prev.value === selected)[0] }),
    thumbMachi: (selected: string) => dispatch({ type: sortReducerType[partKey], thumbMachi: colorObjs.filter((prev) => prev.value === selected)[0] }),
    littleMachi: (selected: string) => dispatch({ type: sortReducerType[partKey], littleMachi: colorObjs.filter((prev) => prev.value === selected)[0] }),
    edge: (selected: string) => dispatch({ type: sortReducerType[partKey], edge: colorObjs.filter((prev) => prev.value === selected)[0] }),
    thumbHook: (selected: string) => dispatch({ type: sortReducerType[partKey], thumbHook: colorObjs.filter((prev) => prev.value === selected)[0] }),
    littleHook: (selected: string) => dispatch({ type: sortReducerType[partKey], littleHook: colorObjs.filter((prev) => prev.value === selected)[0] }),
    indexCover: (selected: string) => dispatch({ type: sortReducerType[partKey], indexCover: colorObjs.filter((prev) => prev.value === selected)[0] }),
    bagFoundation: (selected: string) => dispatch({ type: sortReducerType[partKey], bagFoundation: colorObjs.filter((prev) => prev.value === selected)[0] }),
    ringAndLittle: (selected: string) => dispatch({ type: sortReducerType[partKey], ringAndLittle: colorObjs.filter((prev) => prev.value === selected)[0] }),
    middle: (selected: string) => dispatch({ type: sortReducerType[partKey], middle: colorObjs.filter((prev) => prev.value === selected)[0] }),
    indexAndThumb: (selected: string) => dispatch({ type: sortReducerType[partKey], indexAndThumb: colorObjs.filter((prev) => prev.value === selected)[0] }),
    shellarmove: (selected: string) => dispatch({ type: sortReducerType[partKey], shellarmove: colorObjs.filter((prev) => prev.value === selected)[0] }),
    listBelt: (selected: string) => dispatch({ type: sortReducerType[partKey], listBelt: colorObjs.filter((prev) => prev.value === selected)[0] }),
    stitch: (selected: string) => dispatch({ type: SET_STITCH_COLOR, stitch: stitchColorObjs.filter((prev) => prev.value === selected)[0] }),
    linings: (selected: string) => dispatch({ type: SET_LININGS, linings: liningsObjs.filter((prev) => prev.value === selected)[0] }),
    target: (selected: string) => dispatch({ type: SET_TARGET_COLOR, target: targetObjs.filter((prev) => prev.value === selected)[0] }),
    strap: (selected: string) => dispatch({ type: SET_STRAP_COLOR, strap: strapColorObjs.filter((prev) => prev.value === selected)[0] }),
    hatakeyamaLabel: (selected: string) => dispatch({ type: SET_LABEL, hatakeyamaLabel: hatakeyamaLabelObjs.filter((prev) => prev.value === selected)[0] }),
    listLiningsMaterial: (selected: string) =>
      dispatch({
        type: SET_LIST_LINING_MATERIAL,
        listLiningsMaterial: listLiningMaterialObjs.filter((prev) => prev.value === selected)[0],
      }),
    hamidashi: (selected: string) => dispatch({ type: SET_HAMIDASHI, hamidashi: hamidashiObjs.filter((prev) => prev.value === selected)[0] }),
  }
  const sortReducerType = {
    catch_face: SET_LEATHER_COLOR,
    web: SET_WEB_COLOR,
    thumb_machi: SET_THUMB_MACHI_COLOR,
    little_machi: SET_LITTLE_MACHI_COLOR,
    target: SET_TARGET_COLOR,
    edge: SET_EDGE_COLOR,
    thumb_hook: SET_THUMB_HOOK,
    little_hook: SET_LITTLE_HOOK,
    strap: SET_STRAP_COLOR,
    index_cover: SET_INDEX_COVER_COLOR,
    bag_foundation: SET_BAG_FOUNDATION_COLOR,
    ring_and_little: SET_RING_AND_LITTLE_COLOR,
    middle: SET_MIDDLE_COLOR,
    index_and_thumb: SET_INDEX_AND_THUMB_COLOR,
    shellarmove: SET_SHELLARMOVE_COLOR,
    list_belt: SET_LIST_BELT_COLOR,
    stitch: SET_STITCH_COLOR,
    lining: SET_LININGS,
    hatakeyama_label: SET_LABEL,
    list_lining_material: SET_LIST_LINING_MATERIAL,
    hamidashi: SET_HAMIDASHI,
  }
  const sortHandle = {
    all: handle.all,
    catch_face: handle.leather,
    web: handle.web,
    thumb_machi: handle.thumbMachi,
    little_machi: handle.littleMachi,
    edge: handle.edge,
    thumb_hook: handle.thumbHook,
    little_hook: handle.littleHook,
    index_cover: handle.indexCover,
    bag_foundation: handle.bagFoundation,
    ring_and_little: handle.ringAndLittle,
    middle: handle.middle,
    index_and_thumb: handle.indexAndThumb,
    shellarmove: handle.shellarmove,
    list_belt: handle.listBelt,
    stitch: handle.stitch,
    linings: handle.linings,
    target: handle.target,
    strap: handle.strap,
    hatakeyama_label: handle.hatakeyamaLabel,
    list_lining_material: handle.listLiningsMaterial,
    hamidashi: handle.hamidashi,
  }
  const sortLabel = {
    catch_face: catchFace.label,
    all: all.label,
    web: web.label,
    thumb_machi: thumbMachi.label,
    little_machi: littleMachi.label,
    edge: edge.label,
    thumb_hook: thumbHook.label,
    little_hook: littleHook.label,
    index_cover: indexCover.label,
    bag_foundation: bagFoundation.label,
    ring_and_little: ringAndLittle.label,
    middle: middle.label,
    index_and_thumb: indexAndThumb.label,
    shellarmove: shellarmove.label,
    list_belt: listBelt.label,
    stitch: stitch.label,
    linings: linings.label,
    target: target.label,
    strap: strap.label,
    hatakeyama_label: hatakeyamaLabel.label,
    list_lining_material: listLiningsMaterial.label,
    hamidashi: hamidashi.label,
  }
  const sortColor = {
    catch_face: catchFace.color,
    all: all.color,
    web: web.color,
    thumb_machi: thumbMachi.color,
    little_machi: littleMachi.color,
    edge: edge.color,
    thumb_hook: thumbHook.color,
    little_hook: littleHook.color,
    index_cover: indexCover.color,
    bag_foundation: bagFoundation.color,
    ring_and_little: ringAndLittle.color,
    middle: middle.color,
    index_and_thumb: indexAndThumb.color,
    shellarmove: shellarmove.color,
    list_belt: listBelt.color,
    stitch: stitch.color,
    linings: linings.color,
    target: target.color,
    strap: strap.color,
    hatakeyamaLabel: hatakeyamaLabel.color,
    list_lining_material: listLiningsMaterial.color,
    hamidashi: hamidashi.color,
  }
  const sortValue = {
    all: all.value,
    catch_face: catchFace.value,
    web: web.value,
    thumb_machi: thumbMachi.value,
    little_machi: littleMachi.value,
    edge: edge.value,
    thumb_hook: thumbHook.value,
    little_hook: littleHook.value,
    index_cover: indexCover.value,
    bag_foundation: bagFoundation.value,
    ring_and_little: ringAndLittle.value,
    middle: middle.value,
    index_and_thumb: indexAndThumb.value,
    shellarmove: shellarmove.value,
    list_belt: listBelt.value,
    stitch: stitch.value,
    linings: linings.value,
    target: target.value,
    strap: strap.value,
    hatakeyama_label: hatakeyamaLabel.value,
    list_lining_material: listLiningsMaterial.value,
    hamidashi: hamidashi.value,
  }
  return (
    <TabPanel value={value} index={1}>
      <SelectCard
        summary={'パーツ'}
        selectedLabel={parts.label}
        defaultValue={parts.value}
        objects={figurePanelNum === 0 ? catchFacePartsObjs : backFacePartsObjs}
        handleChange={handle.selectParts}
        // selectedColor={leatherColor.color}
      />
      {parts.value === 'stitch' ? (
        <SelectCard
          summary={'ステッチカラー'}
          selectedLabel={sortLabel[partKey]}
          selectedColor={sortColor[partKey]}
          defaultValue={sortValue[partKey]}
          objects={stitchColorObjs}
          handleChange={sortHandle[partKey]}
        />
      ) : parts.value === 'linings' ? (
        <SelectCard
          summary={'裏革カラー'}
          selectedLabel={sortLabel[partKey]}
          selectedColor={sortColor[partKey]}
          defaultValue={sortValue[partKey]}
          objects={liningsObjs}
          handleChange={sortHandle[partKey]}
        />
      ) : parts.value === 'target' ? (
        <SelectCard
          summary={'ターゲット加工'}
          selectedLabel={sortLabel[partKey]}
          selectedColor={sortColor[partKey]}
          defaultValue={sortValue[partKey]}
          objects={targetObjs}
          handleChange={sortHandle[partKey]}
        />
      ) : parts.value === 'strap' ? (
        <SelectCard
          summary={'革紐'}
          selectedLabel={sortLabel[partKey]}
          selectedColor={sortColor[partKey]}
          defaultValue={sortValue[partKey]}
          objects={strapColorObjs}
          handleChange={sortHandle[partKey]}
        />
      ) : parts.value === 'hatakeyama_label' ? (
        <SelectCard
          summary={'ラベル'}
          selectedLabel={sortLabel[partKey]}
          selectedColor={sortColor[partKey]}
          defaultValue={sortValue[partKey]}
          objects={hatakeyamaLabelObjs}
          handleChange={sortHandle[partKey]}
        />
      ) : parts.value === 'list_lining_material' ? (
        <SelectCard
          summary={'手首裏の素材'}
          selectedLabel={sortLabel[partKey]}
          selectedColor={sortColor[partKey]}
          defaultValue={sortValue[partKey]}
          objects={listLiningMaterialObjs}
          handleChange={sortHandle[partKey]}
        />
      ) : parts.value === 'hamidashi' ? (
        <SelectCard
          summary={'ハミダシ'}
          selectedLabel={sortLabel[partKey]}
          selectedColor={sortColor[partKey]}
          defaultValue={sortValue[partKey]}
          objects={hamidashiObjs}
          handleChange={sortHandle[partKey]}
        />
      ) : (
        <SelectCard
          summary={`${parts.label}カラー`}
          selectedLabel={sortLabel[partKey]}
          selectedColor={sortColor[partKey]}
          defaultValue={sortValue[partKey]}
          objects={colorObjs}
          handleChange={sortHandle[partKey]}
          disabled={parts.value === 'little_machi' && target.value !== 'none'}
          setTarget={parts.value === 'little_machi' && target.value !== 'none'}
        />
      )}

      {/* キャビティライン加工の項目作る */}
    </TabPanel>
  )
}
export default ColoringSet
