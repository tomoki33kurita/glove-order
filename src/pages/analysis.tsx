import React from 'react'
import { Box } from '@material-ui/core'
import Auth from 'src/auth'

const Analysis: React.VFC<{}> = ({}) => {
  return (
    <Auth>
      <Box mt={2} ml={2}>
        <Box>ここは分析をするためのページであるのだ</Box>
      </Box>
    </Auth>
  )
}

export default Analysis
