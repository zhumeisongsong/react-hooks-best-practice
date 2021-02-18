import React, { useEffect, useMemo, useCallback, FC } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, Dispatch } from '../store'
import ProjectList from '../components/Project/List'
import ProjectEdit from '../components/Project/Edit'
import ProjectCreate from '../components/Project/Create'

// REACT_HOOKS_BEST_PRACTICE: Function component is defined by const + arrow function
const App: FC = () => {
  const projects = useSelector((state: RootState) => state.project.listData)
  const dispatch = useDispatch<Dispatch>()
  const fetchData = useCallback(() => dispatch.project.listAsync(), [dispatch])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return useMemo(() => <div className="App">
    <ProjectCreate />
    <ProjectEdit />
    <ProjectList projects={projects} />
  </div>, [projects])
}

export default App
