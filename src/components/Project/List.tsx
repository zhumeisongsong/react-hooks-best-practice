import React, { useMemo, FC } from 'react'
import { Project } from '../../api/project'

const ProjectList: FC<{ projects: Project[] }> = ({ projects }) => {
  // REACT_HOOKS_BEST_PRACTICE: Using useMemo for more fine-grained optimized rendering. 
  // Different from memo, React.memo == PureComponent
  
  const render = useMemo(() =>
  <div>
    {
      projects.map(({ id, name }) =>
        <div key={id}>{name}</div>)
    }
  </div>, [projects])
  
  return render
  // Use useMemo to wrap the rendering code.
  // So that even if the function Child is re-executed due to changes in props, 
  // as long as the projects used by the rendering function has not changed, it will not be re-rendered
}

export default ProjectList