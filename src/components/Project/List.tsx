import React, { useMemo, FC } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import { Project } from '../../api/project'

const ProjectList: FC<ProjectListPropsType> = ({ data, fetchItem, onDelete }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: Project) => (
        <Space size="middle">
          <Button onClick={() => fetchItem({ id: record.id })}>Edit</Button>
          <Button onClick={() => onDelete({ id: record.id })}>Delete</Button>
        </Space>
      ),
    },
  ]
  // REACT_HOOKS_BEST_PRACTICE: Using useMemo for more fine-grained optimized rendering. 
  // Different from memo, React.memo == PureComponent
  const render = useMemo(() =>
    <div>
      <Table columns={columns} dataSource={data} />
    </div>, [data])

  return render
  // Use useMemo to wrap the rendering code.
  // So that even if the function Child is re-executed due to changes in props, 
  // as long as the projects used by the rendering function has not changed, it will not be re-rendered
}

export type ProjectListPropsType = {
  data: Project[]
  fetchItem: ({ id }: { id: string }) => {
    type: string
    payload: {
      id: string
    }
  }
  onDelete: ({ id }: { id: string }) => {
    type: string
    payload: {
      id: string
    }
  }
}

export default ProjectList