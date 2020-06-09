import React from 'react'
import { loader } from 'graphql.macro'
import { useQuery } from '@apollo/client'
import PostDom from './Post.dom'
import ErrorPage from '../500'
import { PostQ } from '../../graphql/generated'
import { Result } from 'antd'

export const GET_POST = loader('./Post.graphql')

const Post: React.FC = () => {
  const {loading, error, data} = useQuery<PostQ>(GET_POST, {
    fetchPolicy: 'cache-and-network'
  })
  if (error) {
    return <ErrorPage error={error}/>
  }
  if (!data) {
    return <Result status="404"/>
  }
  return <PostDom post={data.post} loading={loading && !data}/>
}

export default Post
