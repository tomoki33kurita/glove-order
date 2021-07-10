import React from 'react'
import { Box, Grid, Button } from '@material-ui/core'
import Select from 'react-select'
import { leagueOpts, positionOpts } from 'src/constants/analysisSelectOpts'
import { FireStoreStateData } from 'src/pages/analysis'
// import { Drawingboard } from './Drawingboard'
// import { Orders } from './Orders'

type Props = {}

const SearchesArea: React.VFC<Props> = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box mb={1} p={1}>
          <Box my={0} component={'h3'}>
            リーグ
          </Box>
          <Select options={leagueOpts} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box mb={1} p={1}>
          <Box my={0} component={'h3'}>
            ポジション
          </Box>
          <Select options={positionOpts} />
        </Box>
      </Grid>
      {/* <Grid item xs={12} md={4}>
              <Box mb={1} p={1}>
                <Box my={0} component={'h3'}>
                  　カラー数
                </Box>
                <Select options={[]} />
              </Box>
            </Grid> */}
      <Box mx={'auto'} width={'20%'} display={'flex'} justifyContent={'space-around'}>
        <Button variant="contained" color="primary">
          検索
        </Button>
        <Button variant="outlined">リセット</Button>
      </Box>
    </Grid>
  )
}

export default SearchesArea
