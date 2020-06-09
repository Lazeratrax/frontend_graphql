import React, { useEffect } from 'react'
import * as yup from 'yup'
import { message } from 'antd'
import { MailOutlined as IconMail, LockOutlined as IconLock } from '@ant-design/icons'
import { Formik } from 'formik'
import { Form, Input, SubmitButton } from 'formik-antd'
import {
  LoginFormWrapper,
  LoginHeader,
  LoginScreen,
  LoginTitle,
  LoginFormActions,
  LoginFormSubActions,
} from './Login.styles'
import { useHistory, useLocation } from 'react-router'
import { forgetReturnTo, recallReturnTo, rememberReturnTo } from './returnToAfterLogin'
import { useAuthContext } from './AuthContext'
import { NAV } from '../nav'
import { Link } from 'react-router-dom'
import { loader } from 'graphql.macro'
import { useMutation } from '@apollo/client'
import { LogInM, LogInMVariables } from '../graphql/generated'

export const LOGIN = loader('./Login.graphql')

export const validateSchema = yup.object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().trim().required(),
  })
  .required()

export type LoginFormData = yup.InferType<typeof validateSchema>

export interface Props {
  onSubmit: (data: LoginFormData) => Promise<void>
}

const LoginForm: React.FC<Props> = ({onSubmit}) => {

  const initialValue = {
    email: '',
    password: ''
  }

  return (
    <Formik<LoginFormData> initialValues={initialValue} onSubmit={onSubmit} validationSchema={validateSchema}>
      <Form>
        <Form.Item name="email">
          <Input
            addonBefore={<IconMail/>}
            name="email"
            size="large"
            placeholder="Введите вашу почту"
          />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password
            addonBefore={<IconLock/>}
            name="password"
            size="large"
            placeholder="Пароль"
          />
        </Form.Item>
        <LoginFormActions>
          <SubmitButton block size="large">Войти</SubmitButton>
        </LoginFormActions>
        <LoginFormSubActions>
          <div>Нет аккаунта?</div>
          <div>
            <Link to={NAV.Registration}>Регистрация</Link>
          </div>
        </LoginFormSubActions>
      </Form>
    </Formik>
  )
}

const Login: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const location = useLocation<any>()
  const history = useHistory()
  const { authenticate } = useAuthContext()
  const [loginM] = useMutation<LogInM, LogInMVariables>(LOGIN)

  useEffect(() => {
    if (location.state?.from) {
      rememberReturnTo(location.state.from)
    }
  })

  const login = async (input: LoginFormData) => {
    try {
      const result = await loginM({variables: {input}})
      if (result.data) {
        await authenticate(result.data.logIn.access_token)
      }
      const returnTo = recallReturnTo() ?? NAV.Posts
      forgetReturnTo()
      history.push(returnTo)
    } catch (e) {
      message.error('Неверные email и/или пароль')
    }
  }

  return (
    <LoginScreen>
      <LoginFormWrapper>
        <LoginHeader>
          <LoginTitle>Вход</LoginTitle>
        </LoginHeader>
        <LoginForm onSubmit={login}/>
      </LoginFormWrapper>
    </LoginScreen>
  )
}

export default Login
