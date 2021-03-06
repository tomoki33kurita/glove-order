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
  stitch: string
  linings: string
  strap: string
  listLiningsMaterial: string
  hamidashi: string
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
    [partKey]: (selected: string) =>
      partKey === 'stitch'
        ? dispatch({
            type: sortReducerType[partKey],
            [partKey]: stitchColorObjs.filter((prev) => prev.value === selected)[0]
          })
        : partKey === 'linings'
        ? dispatch({
            type: sortReducerType[partKey],
            [partKey]: liningsObjs.filter((prev) => prev.value === selected)[0]
          })
        : partKey === 'strap'
        ? dispatch({
            type: sortReducerType[partKey],
            [partKey]: strapColorObjs.filter((prev) => prev.value === selected)[0]
          })
        : partKey === 'listLiningsMaterial'
        ? dispatch({
            type: sortReducerType[partKey],
            [partKey]: listLiningsMaterialObjs.filter((prev) => prev.value === selected)[0]
          })
        : partKey === 'hamidashi'
        ? dispatch({
            type: sortReducerType[partKey],
            [partKey]: hamidashiObjs.filter((prev) => prev.value === selected)[0]
          })
        : dispatch({
            type: sortReducerType[partKey],
            [partKey]: colorObjs.filter((prev) => prev.value === selected)[0]
          })
  }

  const baseSortObj = {
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
    hamidashi
  }

  const sortObj =
    router.asPath === '/hard/infield'
      ? {
          ...baseSortObj,
          // ????????????????????????
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
          // ????????????????????????
          ...baseSortObj,
          thumb,
          underWeb,
          boomerang
        }

  const backFaceParts =
    router.asPath === '/hard/infield' ? infieldBackPartsObjs : firstMittBackPartsObjs
  return (
    <TabPanel value={value} index={1}>
      <SelectCard
        summary={'?????????'}
        selectedLabel={parts.label}
        defaultValue={parts.value}
        objects={figurePanelNum === 0 ? catchFacePartsObjs : backFaceParts}
        handleChange={handle.selectParts}
      />
      {parts.value === 'stitch' ? (
        <SelectCard
          summary={'?????????????????????'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={stitchColorObjs}
          handleChange={handle[partKey]}
        />
      ) : parts.value === 'linings' ? (
        <SelectCard
          summary={'???????????????'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={liningsObjs}
          handleChange={handle[partKey]}
        />
      ) : parts.value === 'strap' ? (
        <SelectCard
          summary={'??????'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={strapColorObjs}
          handleChange={handle[partKey]}
        />
      ) : parts.value === 'hatakeyama_label' ? (
        <SelectCard
          summary={'?????????'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={labelObjs}
          handleChange={handle[partKey]}
        />
      ) : parts.value === 'listLiningsMaterial' ? (
        <SelectCard
          summary={'??????????????????'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={listLiningsMaterialObjs}
          handleChange={handle[partKey]}
        />
      ) : parts.value === 'hamidashi' ? (
        <SelectCard
          summary={'????????????'}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={hamidashiObjs}
          handleChange={handle[partKey]}
        />
      ) : (
        <SelectCard
          summary={`${parts.label}?????????`}
          selectedLabel={sortObj[partKey].label}
          selectedColor={sortObj[partKey].color}
          defaultValue={sortObj[partKey].value}
          objects={colorObjs}
          handleChange={handle[partKey]}
        />
      )}

      {/* ????????????????????????????????????????????? */}
    </TabPanel>
  )
}
export default ColoringSet
