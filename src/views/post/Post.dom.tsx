import React from 'react'
import { Typography, Skeleton, Button } from 'antd'
import { $PropertyType } from 'utility-types'
import { View } from '../../components/View'
import { Link } from 'react-router-dom'
import { NAV } from '../../nav'
import { PostQ } from '../../graphql/generated'

const { Text, Title } = Typography

interface Props {
  post: $PropertyType<PostQ, 'post'>
  loading: boolean
}

const PostDom: React.FC<Props> = ({ post, loading }) => {
  if (loading) {
    return <Skeleton paragraph={{rows: 3}} active />
  }
  return (
    <View 
      title="Превью поста"
      extra={<Link to={NAV.Posts}><Button>К списку</Button></Link>}
    >
      <Title>{post.title}</Title>
      <Text>{post.description}</Text>
    </View>
  )
}

export default PostDom
