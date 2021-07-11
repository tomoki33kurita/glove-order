import React from 'react'
import {
  Grid,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  TextField
} from '@material-ui/core'
import { State } from 'src/types'
import pdfMake from 'pdfmake/build/pdfmake'
import { Controller, useForm } from 'react-hook-form'
import { useDebounce } from 'use-debounce'
import { Action, Personal } from 'src/types'
import { SET_PERSONAL } from 'src/constants/ActionTypes'
import { japaneseFont } from 'src/constants/vfs_fonts'
import { genPdfDocDefine } from 'src/container/genPdf/genPdfDocDefine'
import { useRouter } from 'next/router'
import ControlledTextField from 'src/components/molecules/ControlledTextField'
import { db } from 'src/firebase'
import firebase from 'firebase/app'

pdfMake.vfs = japaneseFont
// import pdfFonts from 'pdfmake/build/vfs_fonts'
// pdfMake.vfs = pdfFonts.pdfMake.vfs

const genSetFirstMittData = (state: State) => ({
  all: state.all,
  backStyle: state.backStyle,
  boomerang: state.boomerang,
  catchFace: state.catchFace,
  coreMaterialHardness: state.coreMaterialHardness,
  coreMaterialThickness: state.coreMaterialThickness,
  createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  dominantArm: state.dominantArm,
  edge: state.edge,
  hamidashi: state.hamidashi,
  indexCover: state.indexCover,
  leatherHardness: state.leatherHardness,
  linings: state.linings,
  listBelt: state.listBelt,
  listLiningsMaterial: state.listLiningsMaterial,
  littleHook: state.littleHook,
  mittDepth: state.mittDepth,
  mittSize: state.mittSize,
  ordererPersonal: {
    age: 25,
    belongs: '大学野球'
  },
  padModel: state.padModel,
  stitch: state.stitch,
  thumb: state.thumb,
  thumbHook: state.thumbHook,
  underWeb: state.underWeb,
  web: state.web
})

const handleGenPdf = async (state: State, personalData: Personal, asPath: string) => {
  pdfMake.fonts = { GenYoMin: { normal: 'ipaexg.ttf' } }
  const docDefine = genPdfDocDefine(state, personalData, asPath)
  pdfMake
    // eslint-disable-next-line
    // @ts-ignore
    .createPdf(docDefine)
    .download(`オーダー内容/${personalData?.userName || '名無しの権兵衛'}様.pdf`) // margin設定によって構文チェックエラーになっている。
  const firestoreFMittData = genSetFirstMittData(state)
  try {
    await db.collection('glove-orders').add(firestoreFMittData)
  } catch (err) {
    console.log(`Error ${err} `)
  }
}

type Props = {
  state: State
  open: boolean
  handleClose: () => void
  dispatch: React.Dispatch<Action>
}

const PdfDialog: React.FC<Props> = ({ state, open, handleClose, dispatch }) => {
  const baseCells = [
    // { head: '基本モデル：', label: state.baseModel.label },
    { head: '利き腕：', label: state.dominantArm.label },
    { head: 'ミットの大きさ：', label: state.mittSize.label },
    { head: 'ポケットの大きさ：', label: state.mittDepth.label },
    { head: 'バックスタイル：', label: state.backStyle.label },
    { head: 'パッドモデル：', label: state.padModel.label },
    { head: '革の硬さ：', label: state.leatherHardness.label },
    { head: '芯の硬さ', label: state.coreMaterialHardness.label },
    { head: '芯の厚さ：', label: state.coreMaterialThickness.label },
    { head: '指カバー：', label: state.fingerGuardType.label }
    // { head: '座ブトンスポンジ：', label: state.zabutonSponge.label },
    // { head: 'EX機能：', label: state.exFunction.label },
    // { head: 'ピンキーパターン：', label: state.pinkiePattern.label },
    // { head: 'TB刻印：', label: state.tbEngraved.label },
  ]

  const colorCells = [
    { head: '捕球面カラー：', label: state.catchFace.label, color: state.catchFace.color },
    { head: '革紐カラー：', label: state.strap.label, color: state.strap.color },
    { head: 'ウェブカラー：', label: state.web.label, color: state.web.color },
    { head: 'ヘリ革カラー：', label: state.edge.label, color: state.edge.color },
    { head: 'ステッチカラー：', label: state.stitch.label, color: state.stitch.color },
    {
      head: '手首裏の素材：',
      label: state.listLiningsMaterial.label,
      color: state.listLiningsMaterial.color
    },
    { head: 'ハミダシ：', label: state.hamidashi.label, color: state.hamidashi.color },
    { head: '親指掛け紐カラー：', label: state.thumbHook.label, color: state.thumbHook.color },
    { head: '小指掛け紐カラー：', label: state.littleHook.label, color: state.littleHook.color },
    {
      head: '人差し指カバーカラー：',
      label: state.indexCover.label,
      color: state.indexCover.color
    },
    { head: '手口ベルトカラー：', label: state.listBelt.label, color: state.listBelt.color },
    { head: '裏革カラー：', label: state.linings.label, color: state.linings.color }
    // { head: '親指マチカラー：', label: state.thumbMachi.label, color: state.thumbMachi.color },
    // { head: '小指マチカラー：', label: state.littleMachi.label, color: state.littleMachi.color },
    // { head: '台カラー：', label: state.bagFoundation.label, color: state.bagFoundation.color },
    // { head: '薬指小指袋カラー：', label: state.ringAndLittle.label, color: state.ringAndLittle.color },
    // { head: '中指袋カラー：', label: state.middle.label, color: state.middle.color },
    // { head: '人差し指親指袋カラー：', label: state.indexAndThumb.label, color: state.indexAndThumb.color },
    // { head: 'シェラームーブカラー：', label: state.shellarmove.label, color: state.shellarmove.color },
    // { head: 'ターゲット加工：', label: state.target.label, color: state.target.color },
    // { head: 'ラベル：', label: state.hatakeyamaLabel.label, color: state.hatakeyamaLabel.color },
  ]
  const { register, control, handleSubmit } = useForm()
  const [personalData, setPersonalData] = React.useState<Personal>()
  const handleChange = (data: any) => {
    const payload = {
      userName: data.userName,
      userNameKana: data.userNameKana,
      zipcode: data.zipcode,
      address: data.address,
      phoneNumber: data.phoneNumber,
      mailAddress: data.mailAddress,
      remarks: data.remarks
    }
    setPersonalData(payload)
  }

  const personal = useDebounce(personalData, 500)
  React.useEffect(() => {
    dispatch({ type: SET_PERSONAL, personal: personal[0] })
  }, [personal[0]])

  const router = useRouter()

  return (
    <Dialog open={open} style={{ width: '90%', margin: 'auto' }}>
      <DialogContent>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Box pt={2}>
              <Box fontWeight="bold" fontSize="16px">
                基本項目
              </Box>
              {baseCells.map((cell, i) => (
                <Box ml={1} key={cell.head}>
                  {`(${i + 1}) ${cell.head}`}
                  <Box component="span" fontWeight="bold">
                    {cell.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box pt={2}>
              <Box fontWeight="bold" fontSize="16px">
                カラー・デザイン項目
              </Box>
              {colorCells.map((cell, i) => (
                <Box ml={1} key={cell.head}>
                  {`(${i + 15}) ${cell.head}`}
                  <Box
                    component="span"
                    fontWeight="bold"
                    color={cell.color !== '#fff' && cell.color !== '#eee' ? cell.color : 'black'}
                  >
                    {cell.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box pt={2}>
              {state.embroideries.map((embroidery, index) => {
                const embroideryCells = [
                  {
                    head: '書式：',
                    label: embroidery.embroideryTypeFace.label,
                    color: embroidery.embroideryTypeFace.color
                  },
                  {
                    head: '位置：',
                    label: embroidery.embroideryPosition.label,
                    color: embroidery.embroideryPosition.color
                  },
                  {
                    head: '刺繍カラー：',
                    label: embroidery.embroideryColor.label,
                    color: embroidery.embroideryColor.color
                  },
                  {
                    head: '影カラー：',
                    label: embroidery.embroideryShadowColor.label,
                    color: embroidery.embroideryShadowColor.color
                  },
                  { head: '刺繍内容：', label: embroidery.embroideryContent }
                ]

                return (
                  <React.Fragment key={`${index}`}>
                    {embroidery.embroideryContent.length > 0 ? (
                      <Box mb={2}>
                        <Box fontWeight="bold" fontSize="16px">
                          刺繍項目{index + 1}
                        </Box>
                        {embroideryCells.map((cell, i) => (
                          <Box ml={1} key={cell.head}>
                            {`(${i + 36 + index * 5}) ${cell.head}`}
                            <Box component="span" fontWeight="bold">
                              {cell.label}
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    ) : (
                      <>
                        <Box fontWeight="bold" fontSize="16px">
                          刺繍項目
                        </Box>
                        刺繍なし
                      </>
                    )}
                  </React.Fragment>
                )
              })}
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Box mr={1} display={'flex'} alignItems={'center'}>
              <Box fontWeight="bold" fontSize="16px" mb={1}>
                お客様情報入力
              </Box>
            </Box>
            <Box my={0.5}>※PDF出力の際にご記入ください</Box>
            <form onChange={handleSubmit(handleChange)}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Box p={1}>
                    <ControlledTextField name={'userName'} label={'お客様名'} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box p={1}>
                    <ControlledTextField name={'userNameKana'} label={'お客様名(カナ)'} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box p={1}>
                    <ControlledTextField name={'zipcode'} label={'郵便番号'} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Box p={1}>
                    <ControlledTextField name={'address'} label={'ご住所'} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box p={1}>
                    <ControlledTextField name={'phoneNumber'} label={'お電話番号'} />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box p={1}>
                    <ControlledTextField name={'mailAddress'} label={'メールアドレス'} />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box p={1}>
                    <ControlledTextField name={'remarks'} label={'備考'} />
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          閉じる
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleGenPdf(state, personalData, router.asPath)}
        >
          PDF出力
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PdfDialog
