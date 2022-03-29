import slugify from 'slugify'
import { INotice } from '../../models/notice.model'
import {
  createNotice,
  deleteNotices,
  findNotice,
  updateNotice,
} from '../notice.service'

describe('Notices', () => {
  afterAll(async () => {
    await deleteNotices()
  })

  afterEach(async () => {
    await deleteNotices()
  })

  // create Notice payload
  const NoticePayload: INotice = {
    title: 'Test Notice',
    description: 'Test Description',
    // slug: slugify('Test Notice'),
    status: true,
    expiredAt: new Date(),
  }

  // create Notice
  describe('create Notice', () => {
    it('should create a new Notice', async () => {
      const Notice = await createNotice(NoticePayload)

      expect(Notice.title).toBe(NoticePayload.title)
      expect(Notice.slug).toBe(slugify(NoticePayload.title))
      expect(Notice.status).toBe(NoticePayload.status)
    })
  })

  // find Notice
  describe('find Notice', () => {
    it('should return the Notice', async () => {
      const Notice = await createNotice(NoticePayload)

      const foundNotice = await findNotice({
        _id: Notice._id,
      })

      expect(foundNotice?.title).toBe(NoticePayload.title)
      expect(Notice.slug).toBe(slugify(NoticePayload.title))
      expect(foundNotice?.status).toBe(NoticePayload.status)
    })
  })

  // update Notice
  describe('update Notice', () => {
    it('should update the Notice', async () => {
      const Notice = await createNotice(NoticePayload)
      Notice.title = 'Updated Notice'

      await updateNotice(
        {
          _id: Notice._id,
        },
        Notice
      )

      const updatedNotice = await findNotice({
        _id: Notice._id,
      })

      expect(updatedNotice?.title).toBe(Notice.title)
    })
  })

  // delete Notice
  describe('delete Notice', () => {
    it('should delete the Notice', async () => {
      const Notice = await createNotice(NoticePayload)

      const foundNotice = await findNotice({
        _id: Notice._id,
      })

      expect(foundNotice?.title).toBe(NoticePayload.title)
      expect(Notice.slug).toBe(slugify(NoticePayload.title))
      expect(foundNotice?.status).toBe(NoticePayload.status)

      await deleteNotices()

      const deletedNotice = await findNotice({
        _id: Notice._id,
      })

      expect(deletedNotice).toBe(null)
    })
  })
})
