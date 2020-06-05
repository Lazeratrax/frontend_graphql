import React, { useState } from 'react'
import {List, Result, Button, Popconfirm} from 'antd'
import {$PropertyType} from 'utility-types'
import { View } from '../../components/View'
import { Post } from '../../interfaces/post'
import PostModal, { PostFormData } from './PostModal'

interface Props {
    posts: $PropertyType<any, 'posts'>
    onDelete: (input: { id: number }) => void
    onSave: (input: any) => Promise<void>
    loading: boolean
}

const PostsDom: React.FC<Props> = ({posts, onDelete, onSave, loading}) => {
    const [visible, setVisible] = useState(false)
    const [post, setPost] = useState<Post|null>(null)

    if (!loading && posts.length === 0) {
        return (
            <Result
                status="info"
                title="Нет постов"
                subTitle="Пока еще не добавлено ни одного поста"
            />
        )
    }

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
            await onSave({ ...input, ...(post ? { postId: post.id } : null) })
        } finally {
            handleCloseModal()
        }
    }

    return (
        <View
            title="Посты"
            subTitle="Актуальные материалы"
            extra={<Button type="primary" onClick={() => handleEdit(null)}>Добавить пост</Button>}
        >
            <List
                itemLayout="horizontal"
                dataSource={posts}
                renderItem={(post: Post) => (
                    <List.Item>
                        <List.Item.Meta
                            title={post.title}
                            description={post.description}
                        />
                        <Button size='small' icon='edit' onClick={() => handleEdit(post)}>Редактировать</Button>
                        <Popconfirm
                            title='Вы действительно хотите удалить этот пост?'
                            onConfirm={() => onDelete({ id: post.id })}
                            okText="Удалить"
                            cancelText="Отмена"
                        >
                            <Button size='small' icon='delete'/>
                        </Popconfirm>
                    </List.Item>
                )}
            />
            <PostModal
                visible={visible}
                post={post}
                close={handleCloseModal}
                onSave={handleSavePost}
            />
        </View>
    )
}

export default PostsDom