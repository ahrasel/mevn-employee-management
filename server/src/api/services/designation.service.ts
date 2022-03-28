/* eslint-disable import/named */
/* eslint-disable require-await */

import { CreateQuery, FilterQuery, QueryFindBaseOptions } from 'mongoose'
import Designation, {
  IDesignation,
  DesignationDocument,
} from '../models/designation.model'

// create designation
export async function createDesignation(input: IDesignation) {
  return Designation.create<IDesignation>(input)
}

// find designation by id
export async function findDesignation(
  query: FilterQuery<DesignationDocument>,
  options: QueryFindBaseOptions = { lean: true }
) {
  return Designation.findOne(query, null, options)
}

// update designation by id
export async function updateDesignation(
  query: FilterQuery<DesignationDocument>,
  update: CreateQuery<IDesignation>,
  options: QueryFindBaseOptions = { lean: true }
) {
  return Designation.findOneAndUpdate(query, update, options)
}

// delete designation
export async function deleteDesignations() {
  return Designation.deleteMany({})
}
