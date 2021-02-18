import http from '../helpers/http'

export type Project = {
  id: string
  name: string
  thumbnail?: {
    url: string
  }
}

export const listProjects = () => {
  return http.post('graphql', {
    query: `{
      projects {
        id
        name
        thumbnail{
          url
        }
      }
    }`
  })
}

export const getProject = (id: string) => {
  return http.post('graphql', {
    query: `{
      project {
        id
        name
        description
        dateStart
        dateEnd
        isOSS
        thumbnail{
          url
        }
        issue
        solution
        result
        publishedAt
      }
    }`
  })
}

export const createProject = () => {

}

export const editProject = () => {

}

export const deleteProject = () => {

}