/* eslint-disable import/named */
/* eslint-disable require-await */

import { CreateQuery, FilterQuery, QueryFindBaseOptions } from 'mongoose'
import Notice, { INotice, NoticeDocument } from '../models/notice.model'

// create Notice
export async function createNotice(input: INotice) {
  return Notice.create<INotice>(input)
}

// find Notice by id
export async function findNotice(
  query: FilterQuery<NoticeDocument>,
  options: QueryFindBaseOptions = { lean: true }
) {
  return Notice.findOne(query, null, options)
}

// update Notice by id
export async function updateNotice(
  query: FilterQuery<NoticeDocument>,
  update: CreateQuery<INotice>,
  options: QueryFindBaseOptions = { lean: true }
) {
  return Notice.findOneAndUpdate(query, update, options)
}

// delete Notice
export async function deleteNotices() {
  return Notice.deleteMany({})
}
