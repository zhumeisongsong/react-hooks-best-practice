import http from '../helpers/http'

export const listProjects = () => {
  return http.post('graphql', {
    query: `{
      projects {
        name
        thumbnail{
          id
          url
        }
      }
    }`
  })
}

export const getProject = () => {

}

export const createProject = () => {

}

export const editProject = () => {

}

export const deleteProject = () => {

}