import React from 'react'
import { Box, Accordion, AccordionSummary, AccordionDetails, Button, Fab } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ColorBox from 'src/components/atoms/ColorBox'

type Props = {
  summary: string
  defaultValue: string
  objects: {
    label: string
    value: string
    color?: string
  }[]
  index?: number
  selectedLabel?: string
  selectedColor?: string
  disabled?: boolean
  setTarget?: boolean
  handleChange?: (selected: string, i: number) => void
}

const SelectCard: React.FC<Props> = ({ summary, selectedLabel, selectedColor, objects, disabled, setTarget, index, handleChange }) => (
  <Accordion style={{ marginBottom: '16px' }} defaultExpanded>
    <AccordionSummary
      expandIcon={
        <Fab size="small" tabIndex={-1} style={{ boxShadow: 'unset' }}>
          <ExpandMoreIcon />
        </Fab>
      }
    >
      <Box display="flex">
        <Box fontSize={14} fontWeight="bold">
          {summary}：
        </Box>
        <Box component="span" display="inherit" color={'#383838'} fontSize={15} alignItems="center" ml={2}>
          {selectedColor ? (
            <>
              <ColorBox bgcolor={selectedColor} />
              {selectedLabel}
            </>
          ) : (
            selectedLabel
          )}
        </Box>
      </Box>
    </AccordionSummary>
    <AccordionDetails>
      <Box px={1} mb={1} textAlign="left">
        {objects.map((obj) => (
          <Button
            key={obj.value}
            value={obj.value}
            onClick={() => {
              handleChange(obj.value, index)
            }}
            variant={obj.label === selectedLabel ? 'contained' : 'outlined'}
            disabled={disabled}
            style={{ marginRight: '8px', marginBottom: '4px' }}
          >
            {obj.color ? (
              <>
                <ColorBox bgcolor={obj.color} />
                {obj.label}
              </>
            ) : (
              obj.label
            )}
          </Button>
        ))}
        {summary === '小指マチカラー' && (
          <Box color={setTarget ? 'red' : '#383838'}>{setTarget ? 'ターゲット加工が選択されています' : 'ターゲット加工が選択されている場合、無効になります'}</Box>
        )}
      </Box>
    </AccordionDetails>
  </Accordion>
)
export default SelectCard
