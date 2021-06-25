import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Box, TextField, Button, Avatar, CircularProgress } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Copyright from '../../layout/copyright'
import Container from '@material-ui/core/Container'
import { useForm, Controller } from 'react-hook-form'
import { auth } from '../../firebase'
import { useRouter } from 'next/router'
import firebase from 'firebase/app'

// styles
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
  const { handleSubmit, control } = useForm()
  const router = useRouter()

  // ログイン画面と新規登録画面を切り替える true：ログイン画面表示 / false：新規登録画面表示
  const [isSignUped, setIsSignUped] = React.useState(true)
  const [isLogining, setIsLogining] = React.useState(false)
  const handleSignIn = async (data: any) => {
    setIsLogining(true)
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
          onSubmit={isSignUped ? handleSubmit(handleSignIn) : handleSubmit(handleSignUp)}
        >
          <Controller
            name={'email'}
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  id={field.name}
                  variant="outlined"
                  label="メールアドレス"
                  margin="normal"
                  required
                  autoFocus
                />
              )
            }}
          />
          <Controller
            name={'password'}
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  id={field.name}
                  variant="outlined"
                  type="password"
                  label="パスワード"
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
          {isLogining && (
            <Box style={{ textAlign: 'right' }}>
              ログイン中...
              <CircularProgress size={14} />
            </Box>
          )}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default SignIn
