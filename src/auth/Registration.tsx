import React, { useState } from 'react'
import * as yup from 'yup'
import {
  LoginFormActions,
  LoginFormSubActions,
  LoginFormWrapper,
  LoginHeader,
  LoginScreen,
  LoginTitle,
} from './Login.styles'
import { colors } from '../styles/variables'
import { Formik } from 'formik'
import { Form, Input, SubmitButton } from 'formik-antd'
import { NAV } from '../nav'
import { Link } from 'react-router-dom'
import { MailOutlined as IconMail, LockOutlined as IconLock,SmileOutlined  } from '@ant-design/icons'
import { message, Result, Button } from 'antd'
import { useMutation } from '@apollo/client'
import { loader } from 'graphql.macro'
import { RegistrationM, RegistrationMVariables } from '../graphql/generated'

export const REGISTRATION = loader('./Registration.graphql')

export const validateSchema = yup.object()
  .shape({
    email: yup.string().email().required(),
    name: yup.string().trim().required(),
    password: yup.string().trim().required(),
  })
  .required()

export type RegistrationFormData = yup.InferType<typeof validateSchema>

interface Props {
  onSubmit: (data: RegistrationFormData) => Promise<void>
}

const RegistrationForm: React.FC<Props> = ({onSubmit}) => {

  const initialValue = {
    email: '',
    name: '',
    password: '',
  }

  return (
    <Formik<RegistrationFormData>
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validateSchema}>
      <Form>
        <Form.Item name="email">
          <Input
            addonBefore={<IconMail style={{fontSize: '.875rem', color: colors.gray}}/>}
            name="email"
            size="large"
            placeholder="Введите вашу почту"
          />
        </Form.Item>
        <Form.Item name="name">
          <Input
            addonBefore={<SmileOutlined style={{fontSize: '.875rem', color: colors.gray}}/>}
            name="name"
            size="large"
            placeholder="Введите ваш никнейм"
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
          <SubmitButton block size="large">Зарегистрироваться</SubmitButton>
        </LoginFormActions>
        <LoginFormSubActions>
          <div>Есть аккаунт?</div>
          <div>
            <Link to={NAV.Login}>Войти</Link>
          </div>
        </LoginFormSubActions>
      </Form>
    </Formik>
  )
}


const Registration: React.FC = () => {
  const [isRegistrationDone, setRegistrationDone] = useState(false)
  const [registrationM] = useMutation<RegistrationM, RegistrationMVariables>(REGISTRATION)

  const handleRegistration = async (input: RegistrationFormData) => {
    try {
      await registrationM({variables: {input}})
      setRegistrationDone(true)
    } catch(e) {
      message.error('Ошибка при отправке запроса, попробуйте позже')
    }
  }

  return (
    <LoginScreen>
      {!isRegistrationDone && (
        <LoginFormWrapper>
          <LoginHeader>
            <LoginTitle>Регистрация</LoginTitle>
          </LoginHeader>
          < RegistrationForm onSubmit={handleRegistration}/>
        </LoginFormWrapper>
      )}
      {isRegistrationDone && (
        <Result
          status="success"
          title="Регистрация завершена!"
          subTitle="Мы отправили на указанную почту всю необходимую информацию"
          extra={<Link to={NAV.App}><Button>На главную</Button></Link>}
        />
      )}
    </LoginScreen>
  )
}

export default Registration
