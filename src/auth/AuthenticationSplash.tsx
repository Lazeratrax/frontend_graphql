import { Result } from 'antd'
import { HourglassTwoTone as IconHourglass } from '@ant-design/icons'
import React from 'react'

export const AuthenticationSplash: React.FC = () => (
  <Result
    icon={<IconHourglass/>}
    title="Вход в систему..."
    subTitle="Идет авторизация. Пожалуйста, не закрывайте и не обновляйте страницу"
  />
)
