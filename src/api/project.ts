import http from '../helpers/http'

export type Project = {
  id: string
  name: string
  description: string
  thumbnail?: {
    url: string
  }
}

const stringify = (data: any): string => {
  if (typeof data === 'string') {
    return data
  }

  return ""
}

const queryify = (object: any): string => {
  let string: string = ''

  string = Object.keys(object)
    .map((key) => {
      return `${key}:"${stringify(object[key])}"`
    }).join(",")

  return `{${string}}`
}

export const listProjects = () => {
  return http.post('graphql', {
    query: `{
      projects(
        sort:"updated_at:desc"
      ){
        id
        name
        thumbnail{
          url
        }
      }
    }`
  })
}

export const getProject = ({ id }: { id: string }) => {
  return http.post('graphql', {
    query: `{
      project(
        id:"${id}"
      ) {
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
        published_at
        updated_at
        created_at
      }
    }`
  })
}

export const createProject = ({ data }: { data: Project }) => {
  return http.post('graphql', {
    query: `mutation{
      createProject(
        input:{
          data:${queryify(data)}
        }
      ){
        project {
          id
        }
      }
    }`
  })
}

export const updateProject = ({ id, data }: any) => {
  return http.post('graphql', {
    query: `mutation{
      updateProject(
        input:{
          where:{
            id:"${id}"
          }
          data:${queryify(data)}
        }
      ){
        project {
          id
        }
      }
    }`
  })
}

export const deleteProject = ({ id }: { id: string }) => {
  return http.post('graphql', {
    query: `mutation{
      deleteProject(
        input:{where:{
          id:"${id}"
        }
      }
      ){
        project {
          id
        }
      }
    }`
  })
}