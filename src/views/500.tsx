import React from 'react'
import { Result } from 'antd'
import { Link } from 'react-router-dom'
import { NAV } from '../nav'
import { ApolloError } from '@apollo/client'

const ErrorPage: React.FC<{ error?: ApolloError }> = ({ error }) => {

    const backButton = (
        <Link key="login" className="ant-btn ant-btn-primary" to={NAV.Posts}>
            Назад к постам
        </Link>
    )

    const accessDenied = error?.graphQLErrors.some(e => e.name === 'AccessDenied')
    if (accessDenied) {
        return <Result
            status="error"
            title="Нет доступа"
            subTitle="У вас нет доступа к запрашиваемому ресурсу"
            extra={backButton}
        />
    }


    return <Result
        status="500"
        title="Ошибка при запросе"
        subTitle="Наш сервер ответил ошибкой на ваш запрос, попробуйте позже."
        extra={backButton}
    />
}

export default ErrorPage
