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
import { SET_SELECTED_PARTS, sortReducerType } from 'src/constants/ActionTypes'
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
    selectParts: (selected: string) =>
      dispatch({
        type: SET_SELECTED_PARTS,
        parts: partsObjs.filter((prev) => prev.value === selected)[0]
      }),
    all: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    catchFace: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    web: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    edge: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    thumbHook: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    littleHook: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    indexCover: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    stitch: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: stitchColorObjs.filter((prev) => prev.value === selected)[0]
      }),
    linings: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: liningsObjs.filter((prev) => prev.value === selected)[0]
      }),
    strap: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: strapColorObjs.filter((prev) => prev.value === selected)[0]
      }),
    listLiningsMaterial: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: listLiningsMaterialObjs.filter((prev) => prev.value === selected)[0]
      }),
    hamidashi: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: hamidashiObjs.filter((prev) => prev.value === selected)[0]
      }),
    // 内野手用グラブの場合ここから
    thumbOut: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    thumbWeb: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    indexWeb: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    indexMiddle: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    middleIndex: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    middleRing: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    ringMiddle: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    ringLittle: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    littleRing: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    littleOut: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    // 一塁手用ミットここから
    // こいつはfmitt以外でも使う可能性あり
    listBelt: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    thumb: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    underWeb: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      }),
    boomerang: (selected: string) =>
      dispatch({
        type: sortReducerType[partKey],
        [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
      })
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
      />
      {parts.value === 'stitch' ? (
        <SelectCard
          summary={'ステッチカラー'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={stitchColorObjs}
          handleChange={handle[partKey]}
        />
      ) : parts.value === 'linings' ? (
        <SelectCard
          summary={'裏革カラー'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={liningsObjs}
          handleChange={handle[partKey]}
        />
      ) : parts.value === 'strap' ? (
        <SelectCard
          summary={'革紐'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={strapColorObjs}
          handleChange={handle[partKey]}
        />
      ) : parts.value === 'hatakeyama_label' ? (
        <SelectCard
          summary={'ラベル'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={labelObjs}
          handleChange={handle[partKey]}
        />
      ) : parts.value === 'listLiningsMaterial' ? (
        <SelectCard
          summary={'手首裏の素材'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={listLiningsMaterialObjs}
          handleChange={handle[partKey]}
        />
      ) : parts.value === 'hamidashi' ? (
        <SelectCard
          summary={'ハミダシ'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={hamidashiObjs}
          handleChange={handle[partKey]}
        />
      ) : (
        <SelectCard
          summary={`${parts.label}カラー`}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={colorObjs}
          handleChange={handle[partKey]}
        />
      )}

      {/* キャビティライン加工の項目作る */}
    </TabPanel>
  )
}
export default ColoringSet
