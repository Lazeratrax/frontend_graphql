import React, { useState } from 'react'
import {List, Button, Popconfirm, Input} from 'antd'
import {$PropertyType} from 'utility-types'
import { View } from '../../components/View'
import PostModal, { PostFormData } from './PostModal'
import { EditOutlined as IconEdit, DeleteOutlined as IconDelete } from '@ant-design/icons'
import { PostsQ_posts_data, PostsInput, AddPostInput, EditPostInput, PostsQ } from '../../graphql/generated'

type Post = PostsQ_posts_data

interface Props {
  posts: $PropertyType<PostsQ, 'posts'>
  input: PostsInput
  onDelete: (input: { id: string }) => void
  onSave: (input: AddPostInput|EditPostInput) => Promise<void>
  onInputChange: (input: PostsInput) => void
  loading: boolean
}

const PostsDom: React.FC<Props> = ({posts, input, loading, onDelete, onSave, onInputChange}) => {
  const [visible, setVisible] = useState(false)
  const [post, setPost] = useState<Post|null>(null)

  const handleEdit = (post: Post|null) => {
    setPost(post)
    setVisible(true)
  }

  const handleCloseModal = () => {
    setPost(null)
    setVisible(false)
  }

  const handleSavePost = async (input: PostFormData) => {
    try {
      if (post) {
        await onSave({ id: post.id, ...input });
      } else {
        await onSave(input as AddPostInput);
      }
    } finally {
      handleCloseModal();
    }
  }

  return (
    <View
      title="Посты"
      subTitle="Актуальные материалы"
      extra={<Button type="primary" onClick={() => handleEdit(null)}>Добавить пост</Button>}
    >
      <header>
        <Input.Search
          placeholder="Поиск по словам (с регистром)..."
          enterButton="Поиск"
          size="large"
          onSearch={query => onInputChange({ ...input, query })}
        />
      </header>
      <List
        itemLayout="horizontal"
        dataSource={posts.data}
        loading={loading}
        pagination={{
          current: posts.page,
          total: posts.total,
          pageSize: posts.perPage,
          onChange: page => onInputChange({ ...input, page })
        }}
        renderItem={(post: Post) => (
          <List.Item>
            <List.Item.Meta
              title={post.title}
              description={post.description}
            />
            <Button size='small' icon={<IconEdit/>} onClick={() => handleEdit(post)}>Редактировать</Button>
            <Popconfirm
              title='Вы действительно хотите удалить этот пост?'
              onConfirm={() => onDelete({ id: post.id })}
              okText="Удалить"
              cancelText="Отмена"
            >
              <Button size='small' icon={<IconDelete/>}/>
            </Popconfirm>
          </List.Item>
        )}
      />
      {visible && <PostModal
        visible={visible}
        post={post}
        close={handleCloseModal}
        onSave={handleSavePost}
      />}
    </View>
  )
}

export default PostsDom
