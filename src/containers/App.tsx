import React, { useEffect, useMemo, useCallback, FC} from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux'
import { RootState, Dispatch } from '../store'

const App: FC<any> = () => { // REACT_HOOKS_BEST_PRACTICE: Function component is defined by const + arrow function

  const projects = useSelector((state: RootState) => state.project.listData)
  const dispatch = useDispatch<Dispatch>()

  useEffect(() => {
    dispatch.project.listAsync()
    console.log(projects)
  }, []);

  return useMemo(() =>  // REACT_HOOKS_BEST_PRACTICE: 
    <div className="App">
      {projects.map((item: any) => <div>{item.name}</div>)}
    </div>, [projects]);

}
export default App;
