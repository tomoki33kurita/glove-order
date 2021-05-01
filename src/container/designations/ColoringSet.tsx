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
  listLiningMaterialObjs,
  catchFacePartsObjs,
  backFacePartsObjs,
  partsObjs
} from 'src/constants/radioObjs/coloring'
import {
  SET_SELECTED_PARTS,
  SET_ALL_LEATHER_COLOR,
  SET_LEATHER_COLOR,
  SET_EDGE_COLOR,
  SET_LININGS,
  SET_STRAP_COLOR,
  SET_STITCH_COLOR,
  SET_HAMIDASHI,
  SET_WEB_COLOR,
  SET_LIST_LINING_MATERIAL,
  SET_THUMB_HOOK,
  SET_LITTLE_HOOK,
  SET_INDEX_COVER_COLOR,
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
    edge,
    thumbHook,
    littleHook,
    indexCover,
    listBelt,
    stitch,
    linings,
    strap,
    hamidashi,
    listLiningsMaterial,
    thumbOut,
    thumbWeb,
    indexWeb,
    indexMiddle,
    middleIndex,
    middleRing,
    ringMiddle,
    ringLittle,
    littleRing,
    littleOut
  } = state
  const partKey = parts.value as keyof SortType
  const handle = {
    all: (selected: string) =>
      dispatch({
        type: SET_ALL_LEATHER_COLOR,
        all: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    selectParts: (selected: string) =>
      dispatch({
        type: SET_SELECTED_PARTS,
        parts: partsObjs.filter((prev) => prev.value === selected)[0]
      }),
    leather: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        catchFace: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    web: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        web: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    edge: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        edge: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    thumbHook: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        thumbHook: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    littleHook: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        littleHook: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    indexCover: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        indexCover: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    stitch: (selected: string) =>
      dispatch({
        type: SET_STITCH_COLOR,
        stitch: stitchColorObjs.filter((prev) => prev.value === selected)[0]
      }),
    linings: (selected: string) =>
      dispatch({
        type: SET_LININGS,
        linings: liningsObjs.filter((prev) => prev.value === selected)[0]
      }),
    strap: (selected: string) =>
      dispatch({
        type: SET_STRAP_COLOR,
        strap: strapColorObjs.filter((prev) => prev.value === selected)[0]
      }),
    listLiningsMaterial: (selected: string) =>
      dispatch({
        type: SET_LIST_LINING_MATERIAL,
        listLiningsMaterial: listLiningMaterialObjs.filter((prev) => prev.value === selected)[0]
      }),
    hamidashi: (selected: string) =>
      dispatch({
        type: SET_HAMIDASHI,
        hamidashi: hamidashiObjs.filter((prev) => prev.value === selected)[0]
      }),

    thumbOut: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        thumbOut: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    thumbWeb: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        thumbWeb: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    indexWeb: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        indexWeb: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    indexMiddle: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        indexMiddle: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    middleIndex: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        middleIndex: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    middleRing: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        middleRing: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    ringMiddle: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        ringMiddle: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    ringLittle: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        ringLittle: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    littleRing: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        littleRing: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    littleOut: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        littleOut: colorObjs.filter((prev) => prev.value === selected)[0]
      })
  }
  const sortReducerType = {
    catch_face: SET_LEATHER_COLOR,
    web: SET_WEB_COLOR,
    edge: SET_EDGE_COLOR,
    thumb_hook: SET_THUMB_HOOK,
    little_hook: SET_LITTLE_HOOK,
    strap: SET_STRAP_COLOR,
    index_cover: SET_INDEX_COVER_COLOR,
    stitch: SET_STITCH_COLOR,
    lining: SET_LININGS,
    list_lining_material: SET_LIST_LINING_MATERIAL,
    hamidashi: SET_HAMIDASHI,

    thumb_out: SET_THUMB_OUT_COLOR,
    thumb_web: SET_THUMB_WEB_COLOR,
    index_web: SET_INDEX_WEB_COLOR,
    index_middle: SET_INDEX_MIDDLE_COLOR,
    middle_index: SET_MIDDLE_INDEX_COLOR,
    middle_ring: SET_MIDDLE_RING_COLOR,
    ring_middle: SET_RING_MIDDLE_COLOR,
    ring_little: SET_RING_LITTLE_COLOR,
    little_ring: SET_LITTLE_RING_COLOR,
    little_out: SET_LITTLE_OUT_COLOR
  }
  const sortHandle = {
    all: handle.all,
    catch_face: handle.leather,
    web: handle.web,
    edge: handle.edge,
    thumb_hook: handle.thumbHook,
    little_hook: handle.littleHook,
    index_cover: handle.indexCover,
    stitch: handle.stitch,
    linings: handle.linings,
    strap: handle.strap,
    list_lining_material: handle.listLiningsMaterial,
    hamidashi: handle.hamidashi,

    thumb_out: handle.thumbOut,
    thumb_web: handle.thumbWeb,
    index_web: handle.indexWeb,
    index_middle: handle.indexMiddle,
    middle_index: handle.middleIndex,
    middle_ring: handle.middleRing,
    ring_middle: handle.ringMiddle,
    ring_little: handle.ringLittle,
    little_ring: handle.littleRing,
    little_out: handle.littleOut
  }
  const sortLabel = {
    catch_face: catchFace.label,
    all: all.label,
    web: web.label,
    edge: edge.label,
    thumb_hook: thumbHook.label,
    little_hook: littleHook.label,
    index_cover: indexCover.label,
    stitch: stitch.label,
    linings: linings.label,
    strap: strap.label,
    list_lining_material: listLiningsMaterial.label,
    hamidashi: hamidashi.label,

    thumb_out: thumbOut.label,
    thumb_web: thumbWeb.label,
    index_web: indexWeb.label,
    index_middle: indexMiddle.label,
    middle_index: middleIndex.label,
    middle_ring: middleRing.label,
    ring_middle: ringMiddle.label,
    ring_little: ringLittle.label,
    little_ring: littleRing.label,
    little_out: littleOut.label
  }
  const sortColor = {
    catch_face: catchFace.color,
    all: all.color,
    web: web.color,
    edge: edge.color,
    thumb_hook: thumbHook.color,
    little_hook: littleHook.color,
    index_cover: indexCover.color,
    list_belt: listBelt.color,
    stitch: stitch.color,
    linings: linings.color,
    strap: strap.color,
    list_lining_material: listLiningsMaterial.color,

    thumb_out: thumbOut.color,
    thumb_web: thumbWeb.color,
    index_web: indexWeb.color,
    index_middle: indexMiddle.color,
    middle_index: middleIndex.color,
    middle_ring: middleRing.color,
    ring_middle: ringMiddle.color,
    ring_little: ringLittle.color,
    little_ring: littleRing.color,
    little_out: littleOut.color
  }
  const sortValue = {
    all: all.value,
    catch_face: catchFace.value,
    web: web.value,
    edge: edge.value,
    thumb_hook: thumbHook.value,
    little_hook: littleHook.value,
    index_cover: indexCover.value,
    list_belt: listBelt.value,
    stitch: stitch.value,
    linings: linings.value,
    strap: strap.value,
    list_lining_material: listLiningsMaterial.value,
    hamidashi: hamidashi.value,

    thumb_out: thumbOut.value,
    thumb_web: thumbWeb.value,
    index_web: indexWeb.value,
    index_middle: indexMiddle.value,
    middle_index: middleIndex.value,
    middle_ring: middleRing.value,
    ring_middle: ringMiddle.value,
    ring_little: ringLittle.value,
    little_ring: littleRing.value,
    little_out: littleOut.value
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
        />
      )}

      {/* キャビティライン加工の項目作る */}
    </TabPanel>
  )
}
export default ColoringSet
