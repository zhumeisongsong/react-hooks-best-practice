import React, { useMemo, FC } from 'react'
import { Table, Space, Button } from 'antd';
import { Project } from '../../api/project'

const ProjectList: FC<ProjectListPropsType> = ({ data, fetchItem, onDelete }) => {
  const columns = useMemo(() => [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'id',
      render: (text: string, record: Project) => (
        <Space size="middle">
          <Button onClick={() => fetchItem({ id: record.id })}>Edit</Button>
          <Button onClick={() => onDelete({ id: record.id })}>Delete</Button>
        </Space>
      ),
    },
  ], [fetchItem, onDelete])
  // REACT_HOOKS_BEST_PRACTICE: Using useMemo for more fine-grained optimized rendering. 
  // Different from memo, React.memo == PureComponent
  const render = useMemo(() =>
    <div>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>, [columns, data])

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