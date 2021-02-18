import React, { useMemo, FC } from 'react'
import { Form, Input, Button } from 'antd'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}


const ProjectForm: FC<PropsType> = ({ data, onFinish, onFinishFailed }) => {
  return useMemo(() => <Form
    {...layout}
    name="projectForm"
    initialValues={{ ...data }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input your name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Description"
      name="description"
      rules={[{ required: true, message: 'Please input your description!' }]}
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        Submit
    </Button>
    </Form.Item>
  </Form>, [])
}

const defaultData = {
  name: null,
  description: null
}

ProjectForm.defaultProps = { data: defaultData }

type ProjctFormType = typeof defaultData
type PropsType = {
  data?: ProjctFormType
  onFinish: any
  onFinishFailed: any
}

export default ProjectForm