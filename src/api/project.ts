import http from '../helpers/http'

export type Project = {
  id: string
  name: string
  thumbnail: {
    url: string
  }
}

export const listProjects = () => {
  return http.post('graphql', {
    query: `{
      projects {
        name
        thumbnail{
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