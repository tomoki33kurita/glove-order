import React from 'react'
import SelectCard from 'src/components/molecules/SelectCard'
import { State, Action } from 'src/types'
import TabPanel from 'src/components/molecules/TabPanel'
import {
  colorObjs,
  liningsObjs,
  strapColorObjs,
  labelObjs,
  hamidashiObjs,
  stitchColorObjs,
  listLiningsMaterialObjs,
  catchFacePartsObjs,
  infieldBackPartsObjs,
  firstMittBackPartsObjs,
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
  SET_LITTLE_OUT_COLOR,
  SET_LIST_BELT_COLOR,
  SET_THUMB_COLOR,
  SET_UNDER_WEB_COLOR,
  SET_BOOMERANG_COLOR
} from 'src/constants/ActionTypes'
import { useRouter } from 'next/router'

interface SortType {
  catchFace: string
  web: string
}

type Props = {
  state: State
  value: number
  figurePanelNum: number
  dispatch: React.Dispatch<Action>
}

const ColoringSet: React.FC<Props> = ({ state, value, figurePanelNum, dispatch }) => {
  const router = useRouter()
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
    littleOut,
    thumb,
    underWeb,
    boomerang
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
        listLiningsMaterial: listLiningsMaterialObjs.filter((prev) => prev.value === selected)[0]
      }),
    hamidashi: (selected: string) =>
      dispatch({
        type: SET_HAMIDASHI,
        hamidashi: hamidashiObjs.filter((prev) => prev.value === selected)[0]
      }),
    // 内野手用グラブの場合ここから
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
      }),
    // 一塁手用ミットここから
    // こいつはfmitt以外でも使う可能性あり
    listBelt: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        listBelt: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    thumb: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        thumb: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    underWeb: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        underWeb: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    boomerang: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        boomerang: colorObjs.filter((prev) => prev.value === selected)[0]
      })
  }
  const sortReducerType = {
    catchFace: SET_LEATHER_COLOR,
    web: SET_WEB_COLOR,
    edge: SET_EDGE_COLOR,
    thumbHook: SET_THUMB_HOOK,
    littleHook: SET_LITTLE_HOOK,
    strap: SET_STRAP_COLOR,
    indexCover: SET_INDEX_COVER_COLOR,
    stitch: SET_STITCH_COLOR,
    lining: SET_LININGS,
    listLiningsMaterial: SET_LIST_LINING_MATERIAL,
    hamidashi: SET_HAMIDASHI,

    // 内野手用グラブここから
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

    // 一塁手用ミットここから
    listBelt: SET_LIST_BELT_COLOR,
    thumb: SET_THUMB_COLOR,
    underWeb: SET_UNDER_WEB_COLOR,
    boomerang: SET_BOOMERANG_COLOR
  }
  const sortHandle = {
    all: handle.all,
    catchFace: handle.leather,
    web: handle.web,
    edge: handle.edge,
    thumbHook: handle.thumbHook,
    littleHook: handle.littleHook,
    indexCover: handle.indexCover,
    stitch: handle.stitch,
    linings: handle.linings,
    strap: handle.strap,
    listLiningsMaterial: handle.listLiningsMaterial,
    hamidashi: handle.hamidashi,

    // 内野手用グラブここから
    thumbOut: handle.thumbOut,
    thumbWeb: handle.thumbWeb,
    indexWeb: handle.indexWeb,
    indexMiddle: handle.indexMiddle,
    middleIndex: handle.middleIndex,
    middleRing: handle.middleRing,
    ringMiddle: handle.ringMiddle,
    ringLittle: handle.ringLittle,
    littleRing: handle.littleRing,
    littleOut: handle.littleOut,

    // 一塁手用ここから
    listBelt: handle.listBelt,
    thumb: handle.thumb,
    underWeb: handle.underWeb,
    boomerang: handle.boomerang
  }

  const sortObj =
    router.asPath === '/hard/infield'
      ? {
          // 内野手用ここから
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
          listLiningsMaterial,
          hamidashi,
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
        }
      : router.asPath === '/hard/first-mitt' && {
          // 一塁手用ここから
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
          listLiningsMaterial,
          hamidashi,
          // listBelt: listBelt.color,
          thumb,
          underWeb,
          boomerang
        }

  const backFaceParts =
    router.asPath === '/hard/infield' ? infieldBackPartsObjs : firstMittBackPartsObjs
  return (
    <TabPanel value={value} index={1}>
      <SelectCard
        summary={'パーツ'}
        selectedLabel={parts.label}
        defaultValue={parts.value}
        objects={figurePanelNum === 0 ? catchFacePartsObjs : backFaceParts}
        handleChange={handle.selectParts}
        // selectedColor={leatherColor.color}
      />
      {parts.value === 'stitch' ? (
        <SelectCard
          summary={'ステッチカラー'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={stitchColorObjs}
          handleChange={sortHandle[partKey]}
          // handleChange={handle[sortHandle[partKey]]}
        />
      ) : parts.value === 'linings' ? (
        <SelectCard
          summary={'裏革カラー'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={liningsObjs}
          handleChange={sortHandle[partKey]}
        />
      ) : parts.value === 'strap' ? (
        <SelectCard
          summary={'革紐'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={strapColorObjs}
          handleChange={sortHandle[partKey]}
        />
      ) : parts.value === 'hatakeyama_label' ? (
        <SelectCard
          summary={'ラベル'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={labelObjs}
          handleChange={sortHandle[partKey]}
        />
      ) : parts.value === 'listLiningsMaterial' ? (
        <SelectCard
          summary={'手首裏の素材'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={listLiningsMaterialObjs}
          handleChange={sortHandle[partKey]}
        />
      ) : parts.value === 'hamidashi' ? (
        <SelectCard
          summary={'ハミダシ'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={hamidashiObjs}
          handleChange={sortHandle[partKey]}
        />
      ) : (
        <SelectCard
          summary={`${parts.label}カラー`}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={colorObjs}
          handleChange={sortHandle[partKey]}
        />
      )}

      {/* キャビティライン加工の項目作る */}
    </TabPanel>
  )
}
export default ColoringSet
