import React, { useEffect, useMemo, useCallback, FC } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from 'antd';
import { RootState, Dispatch } from '../store'
import ProjectList from '../components/Project/List'
import ProjectEdit from '../components/Project/Edit'
import ProjectCreate from '../components/Project/Create'

const { Content } = Layout;

// REACT_HOOKS_BEST_PRACTICE: Function component is defined by const + arrow function
// Function Component will be re-executed every time it is rendered.
// Constants are recommended to be placed outside the function to avoid performance problems.
// The function is recommended to use the useCallback declaration
const App: FC = () => {
  const dispatch = useDispatch<Dispatch>()
  const projects = useSelector((state: RootState) => state.project.listData)
  const project = useSelector((state: RootState) => state.project.detailData)
  const fetchList = useCallback(() => dispatch.project.listAsync(), [dispatch])
  const fetchItem = useCallback(({ id }) => dispatch({ type: 'project/detailAsync', payload: { id } }), [dispatch])
  const createItem = useCallback(({ data }) => dispatch({ type: 'project/createAsync', payload: { data } }), [dispatch])
  const updateItem = useCallback(({ id, data }) => dispatch({ type: 'project/updateAsync', payload: { id, data } }), [dispatch])
  const deleteItem = useCallback(({ id }) => dispatch({ type: 'project/deleteAsync', payload: { id } }), [dispatch])

  useEffect(() => {
    fetchList()
  }, [fetchList])

  return useMemo(
    () => (
      <Content>
        <ProjectCreate
          onCreate={createItem}
          fetchList={fetchList}
        />
        {project && <ProjectEdit data={project} onEdit={updateItem} />
        }
        <ProjectList data={projects} fetchItem={fetchItem} onDelete={deleteItem} />
      </Content>
    ),
    [project, projects]
  )
}

export default App
