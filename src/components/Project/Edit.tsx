import React, { useMemo, FC } from 'react'
import { Project } from '../../api/project'
import ProjectForm from './Form'

const ProjectEdit: FC<ProjectEditPropsType> = ({ data, onEdit }) => {
  const onFinish = (values: any) => {
    if (data && data.id) {
      onEdit({ id: data.id, data: values })
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return useMemo(() =>
    <ProjectForm data={data} onFinish={onFinish} onFinishFailed={onFinishFailed} />, [])
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