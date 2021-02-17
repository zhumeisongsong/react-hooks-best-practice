import { createModel } from '@rematch/core'
import { listProjects } from '../api/project'
import { RootModel } from '.'

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
  },

  effects: (dispatch) => ({
    async listAsync() {
      const data = await listProjects()

      dispatch.project.setListData(data.data.data.projects || [])
    }
    // get:
    // create:
    // update:
  })
})