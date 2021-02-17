import { Models } from '@rematch/core'
import { project } from './project'

export interface RootModel extends Models<RootModel> {
  project: typeof project
}

export const models: RootModel = {
  project
}
