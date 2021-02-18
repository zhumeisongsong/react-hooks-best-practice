import { createModel } from '@rematch/core'
import { listProjects, getProject, createProject, updateProject, deleteProject } from '../api/project'

export const project = createModel()({
  state: {
    listData: [],
    detailData: null,
    totalCount: 0,
  },
  reducers: {
    setListData: (state, payload) => (
      {
        ...state,
        listData: payload
      }
    ),
    setDetailData: (state, payload) => (
      {
        ...state,
        detailData: payload
      }
    )
  },
  effects: (dispatch) => ({
    async listAsync() {
      const response = await listProjects()

      dispatch.project.setListData(response.data.data.projects)
    },
    async detailAsync({ id }) {
      dispatch.project.setDetailData(null)

      const response = await getProject({ id })

      dispatch.project.setDetailData(response.data.data.project)
    },
    async createAsync({ data }) {
      const response = await createProject({ data })

      if (response.data.data.createProject.project.id) {
        await this.listAsync()
      }
    },
    async updateAsync({ id, data }) {
      const response = await updateProject({ id, data })

      if (response.data.data.updateProject.project.id) {
        dispatch.project.setDetailData(null)
        await this.listAsync()
      }
    },
    async deleteAsync({ id }) {
      const response = await deleteProject({ id })

      if (response.data.data.deleteProject.project.id) {
        await this.listAsync()
      }
    }
  })
})