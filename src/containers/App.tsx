import React, { useEffect, useMemo, useCallback, FC } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, Dispatch } from '../store'
import ProjectList from '../components/Project/List'
import ProjectEdit from '../components/Project/Edit'
import ProjectCreate from '../components/Project/Create'

// REACT_HOOKS_BEST_PRACTICE: Function component is defined by const + arrow function
// Function Component will be re-executed every time it is rendered.
// Constants are recommended to be placed outside the function to avoid performance problems.
// The function is recommended to use the useCallback declaration
const App: FC = () => {
  const dispatch = useDispatch<Dispatch>()
  const projects = useSelector((state: RootState) => state.project.listData)
  const fetchList = useCallback(() => dispatch.project.listAsync(), [dispatch])
  // const fetchDetail = useCallback((id) => dispatch.project.detailAsync(), [dispatch])
  const create = useCallback(({ data }) => dispatch({ type: 'project/createAsync', payload: { data } }), [dispatch])
  // const update = useCallback(() => dispatch.project.updateAsync(), [dispatch])

  useEffect(() => {
    fetchList()
  }, [fetchList])

  return useMemo(
    () => (
      <div className="App">
        <ProjectCreate
          onCreate={create}
          fetchList={fetchList}
        />
        <ProjectEdit />
        <ProjectList projects={projects} />
      </div>
    ),
    [projects]
  )
}

export default App
