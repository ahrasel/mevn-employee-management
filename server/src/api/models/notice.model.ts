import mongoose from 'mongoose'
import slugify from 'slugify'

export interface INotice {
  title: string
  slug?: string
  description: string
  status: boolean
  expiredAt: Date
}

export interface NoticeDocument extends mongoose.Document, INotice {
  createdAt: Date
  updatedAt: Date
}

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    expiredAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// make slug form title
noticeSchema.pre(
  'save',
  function (
    this: NoticeDocument,
    next: (error?: mongoose.CallbackError | undefined) => void
  ) {
    this.slug = slugify(this.title)
    return next()
  }
)

export default mongoose.model<NoticeDocument>('Notice', noticeSchema)
