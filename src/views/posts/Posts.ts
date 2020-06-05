import React from 'react'
import { loader } from 'graphql.macro'
import { useQuery, useMutation } from '@apollo/client'
import PostsDom from './Posts.dom'
import ErrorPage from '../500'
import { message } from 'antd'

export const GET_POSTS = loader('./Posts.graphql')
export const DELETE_POST = loader('./DeletePost.graphql')
export const ADD_POST = loader('./AddPost.graphql')
export const EDIT_POST = loader('./EditPost.graphql')

const Posts: React.FC = () => {
    const {loading, error, data, refetch} = useQuery<any>(GET_POSTS, {
        fetchPolicy: 'cache-and-network'
    })
    const [deletePostM] = useMutation<any, any>(DELETE_POST, { update: () => refetch() })
    const [addPostM] = useMutation<any, any>(ADD_POST, { update: () => refetch() })
    const [editPostM] = useMutation<any, any>(EDIT_POST, { update: () => refetch() })

    const handleDelete = (input: { id: number }) => {
        const hide = message.loading('Обновляем')
        deletePostM({variables: {input}}).then(hide)
    }

    const handleSave = (input: any) => {
        const hide = message.loading('Обновляем')
        const promise = input.postId ?
            editPostM({variables: {input}}):
            addPostM({variables: {input}})
        return promise.then(hide)
    }

    if (error) {
        return <ErrorPage error={error}/>
    }
    return <PostsDom
        posts={data?.posts || []}
    onDelete={handleDelete}
    onSave={handleSave}
    loading={loading && !data}
    />
}

export default Posts