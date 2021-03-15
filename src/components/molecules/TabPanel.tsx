import React from 'react'
import { Box } from '@material-ui/core'

type Props = {
  value: number
  index: number
}

const TabPanel: React.FC<Props> = ({ value, index, children }) => {
  return (
    <>
      {index === value && (
        <Box p={1} border={'solid 1px #eee'} bgcolor={'#eee'} textAlign="center">
          {children}
        </Box>
      )}
    </>
  )
}
export default TabPanel
