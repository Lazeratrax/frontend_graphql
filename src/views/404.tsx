import React from 'react'
import {Result} from 'antd'
import { Link } from 'react-router-dom'
import { NAV } from '../nav'

const NotFound = () => (
    <Result
        status="404"
        title="404"
        subTitle="Извините, но по этой ссылке ничего не найдено"
        extra={
            <Link key="login" className="ant-btn ant-btn-primary" to={NAV.Posts}>
                Перейти к постам
            </Link>
        }
    />
)
export default NotFound