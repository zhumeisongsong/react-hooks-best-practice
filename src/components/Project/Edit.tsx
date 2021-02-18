import React, { useMemo, FC, useCallback } from 'react'
import { Typography } from 'antd'
import { Project } from '../../api/project'
import ProjectForm from './Form'

const { Title } = Typography

const ProjectEdit: FC<ProjectEditPropsType> = ({ data, onEdit }) => {
  const onFinish = useCallback((values: any) => {
    if (data && data.id) {
      onEdit({ id: data.id, data: values })
    }
  }, [data, onEdit])

  const onFinishFailed = useCallback((errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }, [])

  return useMemo(() =>
    <>
      <Title level={3}>Edit</Title>
      <ProjectForm data={data} onFinish={onFinish} onFinishFailed={onFinishFailed} />

    </>, [data, onFinish, onFinishFailed])
}

export type ProjectEditPropsType = {
  data: Project | null
  onEdit: ({ id, data }: { id: string, data: any }) => {
    type: string
    payload: {
      id: string;
    }
  }
}

export default ProjectEdit