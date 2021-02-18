import React, { useMemo, FC } from 'react'
import ProjectForm from './Form'

const ProjectCreate: FC<PropsType> = ({ onCreate, fetchList }) => {
  const onFinish = (values: any) => {
    onCreate({ data: values })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return useMemo(() => <div>
    <ProjectForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
  </div>, [])
}

type PropsType = {
  onCreate: any
  fetchList: any
}

export default ProjectCreate