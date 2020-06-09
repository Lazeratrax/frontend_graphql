import React from 'react'
import { PageWrapper, ProfileHead, ProfileBody, ProfileDate, ProfileDataMeta } from './Profile.styles'
import { Card, Col, Button } from 'antd'
import { loader } from 'graphql.macro'
import { useQuery } from '@apollo/client'
import { ProfileQ } from '../../graphql/generated'

export const GET_PROFILE = loader('./Profile.graphql')

const Profile: React.FC = () => {
  const {data} = useQuery<ProfileQ>(GET_PROFILE, {
    fetchPolicy: 'cache-and-network'
  })
  return (
    <PageWrapper>
        <ProfileHead>Добро пожаловать, {data?.me.name}! </ProfileHead>
        <ProfileBody>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://chto-eto-takoe.ru/uryaimg/32574385521dd1847f7d1e5b940491ef.jpg" />}
            />
            <ProfileDate>
                <ProfileDataMeta>
                    <p>Ваша почта: {data?.me.email}</p>
                    <p>Ваше имя: {data?.me.name}</p>
                </ProfileDataMeta>
                <Col>
                    <Button type="primary">Сменить пароль</Button>
                </Col>
            </ProfileDate>
        </ProfileBody>
    </PageWrapper>
  )
  
  }
export default Profile