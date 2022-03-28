import { IDesignation } from '../../models/designation.model'
import {
  createDesignation,
  deleteDesignations,
  findDesignation,
  updateDesignation,
} from '../designation.service'

describe('Designations', () => {
  afterAll(async () => {
    await deleteDesignations()
  })

  afterEach(async () => {
    await deleteDesignations()
  })

  // create designation payload
  const designationPayload: IDesignation = {
    name: 'Test Designation',
    description: 'Test Description',
    status: true,
  }

  // create designation
  describe('create designation', () => {
    it('should create a new designation', async () => {
      const designation = await createDesignation(designationPayload)

      expect(designation.name).toBe(designationPayload.name)
      expect(designation.status).toBe(designationPayload.status)
    })
  })

  // find designation
  describe('find designation', () => {
    it('should return the designation', async () => {
      const designation = await createDesignation(designationPayload)

      const foundDesignation = await findDesignation({
        _id: designation._id,
      })

      expect(foundDesignation?.name).toBe(designationPayload.name)
      expect(foundDesignation?.status).toBe(designationPayload.status)
    })
  })

  // update designation
  describe('update designation', () => {
    it('should update the designation', async () => {
      const designation = await createDesignation(designationPayload)
      designation.name = 'Updated Designation'

      await updateDesignation(
        {
          _id: designation._id,
        },
        designation
      )

      const updatedDesignation = await findDesignation({
        _id: designation._id,
      })

      expect(updatedDesignation?.name).toBe(designation.name)
    })
  })

  // delete designation
  describe('delete designation', () => {
    it('should delete the designation', async () => {
      const designation = await createDesignation(designationPayload)

      const foundDesignation = await findDesignation({
        _id: designation._id,
      })

      expect(foundDesignation?.name).toBe(designationPayload.name)
      expect(foundDesignation?.status).toBe(designationPayload.status)

      await deleteDesignations()

      const deletedDesignation = await findDesignation({
        _id: designation._id,
      })

      expect(deletedDesignation).toBe(null)
    })
  })
})
