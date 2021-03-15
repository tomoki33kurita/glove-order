import React from 'react'
import { Box, TextField, Card, Accordion, AccordionSummary, AccordionDetails, Fab, Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import AccordionRadio from 'src/components/molecules/AccordionRadio'
import SelectCard from 'src/components/molecules/SelectCard'
import TabPanel from 'src/components/molecules/TabPanel'
import { embroideryTypeFaceObjs, embroideryPositionObjs, embroideryColorObjs, embroideryShadowEdgeColorObjs } from 'src/constants/radioObjs/embroidery'
import { SET_EMBROIDERIES, ADD_EMBROIDERY, REMOVE_EMBROIDERY } from 'src/constants/ActionTypes'
import { initialEmbroState } from 'src/hooks/stateReducer'
import { State, Action } from 'src/types'
import { embroideriesReducer, useEmbroideryContent } from 'src/hooks/useEmbroideryContent'

type Props = {
  state: State
  value: number
  dispatch: React.Dispatch<Action>
}

const EmbroiderySet: React.FC<Props> = ({ state, value, dispatch }) => {
  const { embroideries } = state

  const updateEmbroideries = (
    selected: string,
    i: number,
    type: 'embroideryTypeFace' | 'embroideryPosition' | 'embroideryColor' | 'embroideryShadowColor' | 'embroideryEdgeColor' | 'embroideryContent',
    objs?: { label: string; value: string; color?: string }[]
  ) => {
    const newEmbroideries = { ...embroideries[i], [type]: objs.filter((prev) => prev.value === selected)[0] }
    return embroideriesReducer(embroideries, newEmbroideries, i)
  }

  const handleContentAndNum = useEmbroideryContent(dispatch, embroideries)
  const handle = {
    typeFace: (selected: string, i: number) => {
      dispatch({ type: SET_EMBROIDERIES, embroideries: updateEmbroideries(selected, i, 'embroideryTypeFace', embroideryTypeFaceObjs) })
    },
    position: (selected: string, i: number) => dispatch({ type: SET_EMBROIDERIES, embroideries: updateEmbroideries(selected, i, 'embroideryPosition', embroideryPositionObjs) }),
    color: (selected: string, i: number) => dispatch({ type: SET_EMBROIDERIES, embroideries: updateEmbroideries(selected, i, 'embroideryColor', embroideryColorObjs) }),
    shadowColor: (selected: string, i: number) =>
      dispatch({ type: SET_EMBROIDERIES, embroideries: updateEmbroideries(selected, i, 'embroideryShadowColor', embroideryShadowEdgeColorObjs) }),
    edgeColor: (selected: string, i: number) =>
      dispatch({ type: SET_EMBROIDERIES, embroideries: updateEmbroideries(selected, i, 'embroideryEdgeColor', embroideryShadowEdgeColorObjs) }),
    content: (selected: string, i: number) => handleContentAndNum(selected, i),
  }
  const handleAddForm = () => dispatch({ type: ADD_EMBROIDERY, embroideries: embroideries.concat({ ...initialEmbroState, id: embroideries.length }) })
  const handleRemoveForm = () => dispatch({ type: REMOVE_EMBROIDERY, embroideries: embroideries.filter((prev) => prev.id !== embroideries.length - 1) })

  return (
    <>
      <TabPanel value={value} index={2}>
        <Box mb={2}>
          <Card>
            <Box display="flex" justifyContent="center" my={1}>
              <Button onClick={handleAddForm} disabled={embroideries.length === 6} variant="outlined" style={{ marginRight: '4px' }}>
                ＋
              </Button>
              <Button onClick={handleRemoveForm} disabled={embroideries.length === 1} variant="outlined" style={{ marginLeft: '4px' }}>
                ー
              </Button>
            </Box>
          </Card>
        </Box>
        {embroideries.map((embroidery, i) => {
          const isShadowColor = embroidery.embroideryShadowColor.value !== 'none'
          const isEdgeColor = embroidery.embroideryEdgeColor.value !== 'none'
          return (
            <Box key={`${i}`} my={1}>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={
                    <Fab size="small" tabIndex={-1} style={{ boxShadow: 'unset' }}>
                      <ExpandMoreIcon />
                    </Fab>
                  }
                >
                  {`刺繍設定 ${i + 1}`}
                </AccordionSummary>
                <AccordionDetails>
                  <Box m={0.5} ml={'auto'} width={'90%'}>
                    <SelectCard
                      summary={'書体'}
                      selectedLabel={embroidery.embroideryTypeFace?.label}
                      defaultValue={embroidery.embroideryTypeFace?.value}
                      objects={embroideryTypeFaceObjs}
                      index={i}
                      handleChange={handle.typeFace}
                    />
                  </Box>
                  <Box m={0.5} ml={'auto'} width={'90%'}>
                    <SelectCard
                      summary={'位置'}
                      selectedLabel={embroidery.embroideryPosition?.label}
                      defaultValue={embroidery.embroideryPosition?.value}
                      objects={embroideryPositionObjs}
                      index={i}
                      handleChange={handle.position}
                    />
                  </Box>
                  <Box m={0.5} ml={'auto'} width={'90%'}>
                    <SelectCard
                      summary={'刺繍カラー'}
                      selectedLabel={embroidery.embroideryColor?.label}
                      selectedColor={embroidery.embroideryColor?.color}
                      defaultValue={embroidery.embroideryColor?.value}
                      objects={embroideryColorObjs}
                      index={i}
                      handleChange={handle.color}
                    />
                  </Box>
                  <Box m={0.5} ml={'auto'} width={'90%'}>
                    <SelectCard
                      summary={'影カラー'}
                      selectedLabel={isEdgeColor ? '選択不可' : embroidery.embroideryShadowColor?.label}
                      selectedColor={embroidery.embroideryShadowColor?.color}
                      defaultValue={embroidery.embroideryShadowColor?.value}
                      objects={embroideryShadowEdgeColorObjs}
                      index={i}
                      disabled={isEdgeColor}
                      handleChange={handle.shadowColor}
                    />
                  </Box>
                  <Box m={0.5} ml={'auto'} width={'90%'}>
                    <SelectCard
                      summary={'フチカラー'}
                      selectedLabel={isShadowColor ? '選択不可' : embroidery.embroideryEdgeColor?.label}
                      selectedColor={embroidery.embroideryEdgeColor?.color}
                      defaultValue={embroidery.embroideryEdgeColor?.value}
                      objects={embroideryShadowEdgeColorObjs}
                      index={i}
                      disabled={isShadowColor}
                      handleChange={handle.edgeColor}
                    />
                  </Box>
                  <Box m={0.5} ml={'auto'} width={'90%'}>
                    <Card>
                      <Box display="flex" alignItems="center" mx={1} my={2}>
                        <Box mr={2}>刺繍内容</Box>
                        <TextField multiline onChange={(event) => handle.content(event.target.value, i)} variant="outlined" rows={2} style={{ width: '75%' }} />
                      </Box>
                    </Card>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          )
        })}
      </TabPanel>
    </>
  )
}
export default EmbroiderySet
