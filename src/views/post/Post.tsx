import React from 'react'
import { loader } from 'graphql.macro'
import { useQuery } from '@apollo/client'
import PostDom from './Post.dom'
import ErrorPage from '../500'

export const GET_POST = loader('./Post.graphql')

const Post: React.FC = () => {
    const {loading, error, data} = useQuery<any>(GET_POST, {
        fetchPolicy: 'cache-and-network'
    })
    if (error) {
        return <ErrorPage error={error}/>
    }
    return <PostDom post={data?.post} loading={loading && !data}/>
}

export default Post