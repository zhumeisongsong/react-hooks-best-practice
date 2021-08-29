import React, { useMemo, FC, useCallback } from 'react'
import { Typography } from 'antd'
import { Project } from '../../api/project'
import ProjectForm from './Form'

const { Title } = Typography

const ProjectCreate: FC<ProjectCreateProps> = ({ onCreate }) => {
  const onFinish = useCallback((values: any) => {
    onCreate({ data: values })
  }, [onCreate])

  const onFinishFailed = useCallback((errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }, [])

  return useMemo(() =>
    <>
      <Title level={3}>Create</Title>
      <ProjectForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
    </>
    , [onFinish, onFinishFailed])
}

type ProjectCreateProps = {
  onCreate: ({ data }: { data: Project }) => {
    type: string
    payload: {
      data: Project;
    }
  }
  fetchList: () => Promise<void>
}

export default ProjectCreate