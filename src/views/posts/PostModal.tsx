import React from 'react'
import * as yup from 'yup'
import { Modal, Button } from 'antd'
import { Formik } from 'formik'
import { Form, Input, SubmitButton } from 'formik-antd'
import { PostsQ_posts_data } from '../../graphql/generated'

type Post = PostsQ_posts_data

export type PostFormData = yup.InferType<typeof validateSchema>

interface Props {
  visible: boolean
  post: Post|null
  close: () => void
  onSave: (data: PostFormData) => Promise<void>
}

export const validateSchema = yup.object()
  .shape({
    title: yup.string().trim().required(),
    description: yup.string().trim().required(),
  })
  .required()

const PostModal: React.FC<Props> = ({ visible, close, onSave, post }) => (
  <Modal
    title={post ? 'Редактирование поста' : 'Создание поста'}
    visible={visible}
    onCancel={close}
    footer={null}
  >
    <Formik<PostFormData>
      initialValues={post ? { title: post.title, description: post.description } : { title: '', description: '' }}
      onSubmit={onSave}
      validationSchema={validateSchema}>
      <Form>
        <Form.Item name="title">
          <Input
            name="title"
            size="large"
            placeholder="Введите Заголовок"
          />
        </Form.Item>
        <Form.Item name="description">
          <Input.TextArea
            name="description"
            placeholder="Введите Описание"
          />
        </Form.Item>
        <footer>
          <SubmitButton>Сохранить</SubmitButton>
          <Button onClick={() => close()}>Отмена</Button>
        </footer>
      </Form>
    </Formik>
  </Modal>
)

export default PostModal
