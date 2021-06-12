import React from 'react'
import { Box } from '@material-ui/core'
import { auth } from 'src/firebase'

const Analysis: React.VFC<{}> = ({}) => {
  return (
    <Box mt={2} ml={2}>
      <Box>ここは分析をするためのページであるのだ</Box>
    </Box>
  )
}

export default Analysis
