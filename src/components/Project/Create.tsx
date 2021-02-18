import React, { useMemo, FC, useCallback } from 'react'
import { Project } from '../../api/project'
import ProjectForm from './Form'

const ProjectCreate: FC<ProjectCreatePropsType> = ({ onCreate }) => {
  const onFinish = useCallback((values: any) => {
    onCreate({ data: values })
  }, [onCreate])

  const onFinishFailed = useCallback((errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }, [])

  return useMemo(() =>
    <ProjectForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
    , [onFinish, onFinishFailed])
}

type ProjectCreatePropsType = {
  onCreate: ({ data }: { data: Project }) => {
    type: string
    payload: {
      data: Project;
    }
  }
  fetchList: () => Promise<void>
}

export default ProjectCreate