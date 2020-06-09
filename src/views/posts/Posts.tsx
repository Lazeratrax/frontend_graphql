import React, { useState } from 'react'
import { loader } from 'graphql.macro'
import { useQuery, useMutation } from '@apollo/client'
import PostsDom from './Posts.dom'
import ErrorPage from '../500'
import { message } from 'antd'
import {
  AddPostM,
  AddPostMVariables,
  DeletePostM,
  DeletePostMVariables,
  EditPostM,
  EditPostMVariables,
  AddPostInput,
  EditPostInput,
  PostsQ,
  PostsQVariables,
  PostsInput,
  PostsQ_posts,
} from '../../graphql/generated'
import { useCurrentUser } from '../../auth/AuthRoute'

export const GET_POSTS = loader('./Posts.graphql')
export const DELETE_POST = loader('./DeletePost.graphql')
export const ADD_POST = loader('./AddPost.graphql')
export const EDIT_POST = loader('./EditPost.graphql')

const DEFAULT_POSTS: PostsQ_posts = {
  __typename: 'Posts',
  data: [],
  page: 1, 
  perPage: 10,
  total: 1, 
}

const Posts: React.FC = () => {
  const user = useCurrentUser()
  const [postsInput, setPostsInput] = useState<PostsInput>({ query: '', page: 1 })
  const {loading, error, data, refetch} = useQuery<PostsQ, PostsQVariables>(GET_POSTS, {
    variables: { input: postsInput }
  })
  const update = () => refetch({ input: postsInput })
  const [deletePostM] = useMutation<DeletePostM, DeletePostMVariables>(DELETE_POST, { update })
  const [addPostM] = useMutation<AddPostM, AddPostMVariables>(ADD_POST, { update })
  const [editPostM] = useMutation<EditPostM, EditPostMVariables>(EDIT_POST, { update })

  const handleInputChange = (input: PostsInput) => {
    setPostsInput(input)
    refetch({ input })
  }

  const handleDelete = (input: { id: string }) => {
    const hide = message.loading('Обновляем')
    deletePostM({variables: { ...input }}).then(hide)
  }
  
  const handleSave = async (input: AddPostInput|EditPostInput) => {
    const hide = message.loading('Обновляем')
    if ('id' in input) {
      await editPostM({variables: {input}})
    } else {
      await addPostM({variables: {input: {...input, authorId: user.id }}})
    }      
    return hide()
  }

  if (error) {
    return <ErrorPage error={error}/>
  }
  return <PostsDom 
    posts={data?.posts || DEFAULT_POSTS}
    input={postsInput}
    onDelete={handleDelete}
    onSave={handleSave}
    onInputChange={handleInputChange}
    loading={loading && !data}
  />
}

export default Posts
