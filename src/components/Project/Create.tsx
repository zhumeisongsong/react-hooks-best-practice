import React, { useMemo, FC } from 'react'
import { Project } from '../../api/project'
import ProjectForm from './Form'

const ProjectCreate: FC<ProjectCreatePropsType> = ({ onCreate }) => {
  const onFinish = (values: any) => {
    onCreate({ data: values })
  }

  const onFinishFailed = (errorInfo: any) => {
  }

  return useMemo(() =>
    <ProjectForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
    , [])
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