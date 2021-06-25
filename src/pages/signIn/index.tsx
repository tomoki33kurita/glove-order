import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Copyright from '../../layout/copyright'
import Container from '@material-ui/core/Container'
import { FormProvider, useForm, Controller } from 'react-hook-form'
import { auth } from '../../firebase'
import { useRouter } from 'next/router'
import firebase from 'firebase/app'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

type AuthDataTypes = {
  email: string
  password: string
}

const SignIn = () => {
  const classes = useStyles()
  const { register, handleSubmit, control } = useForm()
  const router = useRouter()

  // ログイン画面と新規登録画面を切り替える true：ログイン画面表示 / false：新規登録画面表示
  const [isSignUped, setIsSignUped] = React.useState(true)

  const handleSignIn = async (data: any) => {
    const { email, password } = data
    try {
      await auth
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => auth.signInWithEmailAndPassword(email, password))
      router.push('/analysis')
    } catch (err) {
      alert(err.message)
    }
  }

  const handleSignUp = async (data: AuthDataTypes) => {
    const { email, password } = data
    console.log('emailの中身', data)
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      router.push('/analysis')
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignUped ? '管理者用ログイン画面' : '管理者アカウント新規登録画面'}
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={isSignUped ? handleSubmit(handleSignIn) : handleSubmit(handleSignUp)}
        >
          <Controller
            name={'email'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  id={field.name}
                  variant="outlined"
                  label="メールアドレス"
                  {...register('email')}
                  margin="normal"
                  required
                />
              )
            }}
          />
          <Controller
            name={'password'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  id={field.name}
                  variant="outlined"
                  type="password"
                  label="パスワード"
                  {...register('password')}
                  margin="normal"
                  required
                  autoComplete={'current-password'}
                />
              )
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUped ? 'ログイン' : '新規登録'}
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default SignIn
