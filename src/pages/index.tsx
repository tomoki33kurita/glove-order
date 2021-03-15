import React from 'react'
import Link from 'next/link'
import { Box, Grid, Button } from '@material-ui/core'

export const stateContext = React.createContext('')

const Index: React.FC = () => {
  const [stateType, setType] = React.useState('')
  const [stateOrder, setOrder] = React.useState('')
  const [statePosition, setPosition] = React.useState('')
  const handleReset = () => {
    setType('')
    setOrder('')
    setPosition('')
  }
  return (
    <Box p={2}>
      <Box p={2} border={'solid 1px #eee'} borderRadius={'5px'} mb={1}>
        {/* 硬式 / 軟式 */}
        <Box component={'h3'} mb={0}>
          硬式/軟式を選択
        </Box>
        <Grid container>
          {selectTypes.map((type) => (
            <Grid item key={type.name} xs={12} sm={6}>
              <Button variant={type.link === stateType ? 'contained' : 'outlined'} style={{ width: '100%' }} onClick={() => setType(type.link)}>
                <Box width={'100%'} height={'77px'} lineHeight={'77px'} fontSize={'18px'}>
                  {type.name}
                </Box>
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* ゴールドオーダー / シルバーオーダー */}
        <Box component={'h3'} mb={0}>
          オーダー種類を選択してね
        </Box>
        <Grid container>
          {selectOrders.map((order) => (
            <Grid item key={order.name} xs={12} sm={6}>
              <Button variant={order.link === stateOrder ? 'contained' : 'outlined'} style={{ width: '100%' }} onClick={() => setOrder(order.link)}>
                <Box width={'100%'} height={'77px'} lineHeight={'77px'} fontSize={'18px'}>
                  {order.name}
                </Box>
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* グローブ / ファーストミット / キャッチャーミット */}
        <Box component={'h3'} mb={0}>
          ポジションを選択
        </Box>
        <Grid container>
          {selectPositions.map((position) => (
            <Grid item key={position.name} xs={12} sm={4}>
              <Button variant={position.link === statePosition ? 'contained' : 'outlined'} style={{ width: '100%' }} onClick={() => setPosition(position.link)}>
                <Box width={'100%'} height={'77px'} lineHeight={'77px'} fontSize={'18px'}>
                  {position.name}
                </Box>
              </Button>
            </Grid>
          ))}
        </Grid>
        <Box p={2} textAlign={'center'}>
          <Link href={'/'}>
            <Button variant="outlined" onClick={handleReset} disabled={!stateOrder.length && !stateType.length && !statePosition.length}>
              リセット
            </Button>
          </Link>
          <Link href={stateType && stateOrder && statePosition && `${stateType}/${stateOrder}/${statePosition}`}>
            <Button variant="outlined" disabled={!stateType.length || !stateOrder.length || !statePosition.length}>
              次へ進む
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Index

const selectTypes = [
  { name: '硬式', link: 'hard' },
  { name: '軟式', link: 'soft' },
]
const selectOrders = [
  { name: 'ゴールドオーダー', link: 'gold' },
  { name: 'シルバーオーダー', link: 'silver' },
]
const selectPositions = [
  { name: 'キャッチャーミット', link: 'catcher-mitt' },
  { name: 'ファーストミット', link: 'first-mitt' },
  { name: 'グローブ', link: 'glove' },
]
