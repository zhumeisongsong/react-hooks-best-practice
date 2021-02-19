import React, { useMemo, FC } from 'react'
import { Form, Input, Button } from 'antd'
import { Project } from '../../api/project'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const ProjectForm: FC<ProjectFormPropsType> = ({ data, onFinish, onFinishFailed }) => {
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
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      label="Issue"
      name="issue"
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      label="Solution"
      name="solution"
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      label="Result"
      name="result"
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        Submit
    </Button>
    </Form.Item>
  </Form>, [data, onFinish, onFinishFailed])
}

type ProjectFormPropsType = {
  data?: Project | null
  onFinish: (values: any) => void
  onFinishFailed: (errorInfo: any) => void
}

export default ProjectForm