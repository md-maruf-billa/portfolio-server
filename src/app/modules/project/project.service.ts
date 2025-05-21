import { TProject } from './project.interface'
import { ProjectModel } from './project.schema'

const saveProjectOnDB = async (payload: TProject) => {
  const result = await ProjectModel.create(payload)
  return result
}

const getAllProjectFromDb = async () => {
const result = await ProjectModel.find({ isDeleted: false })

  return result
}

const getSingleProjectFromDB = async (id: string) => {
  const result = await ProjectModel.findById(id)
  return result
}
const updateProjectIntoDb = async (id: string, payload: Partial<TProject>) => {
  const result = await ProjectModel.findByIdAndUpdate(id, payload, {
    new: true
  })
  return result
}
const deleteProjectFromDB = async (id: string) => {
  await ProjectModel.findByIdAndUpdate(id, { isDeleted: true })
}


export const porjectServices = {
  saveProjectOnDB,
  getAllProjectFromDb,
getSingleProjectFromDB, updateProjectIntoDb, deleteProjectFromDB

}
