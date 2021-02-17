import React, { useEffect,useCallback, FC } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, Dispatch } from '../store'
import ProjectList from '../components/Project/List'

// REACT_HOOKS_BEST_PRACTICE: Function component is defined by const + arrow function
const App: FC = () => {
  const projects = useSelector((state: RootState) => state.project.listData)
  const dispatch = useDispatch<Dispatch>()

  useEffect(() => {
    dispatch.project.listAsync()
  }, [])

  return (
    <ProjectList projects={projects} />
  )
}

export default App
