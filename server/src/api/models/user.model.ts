import mongoose from 'mongoose'

export interface IUser {
  //   _id: mongoose.Types.ObjectId
  name: string
  email: string
  password: string
  designation: mongoose.Types.ObjectId
  status: boolean
  username: string
}

export interface UserDocument extends mongoose.Document, IUser {
  //   _id: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    designation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Designation',
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<UserDocument>('User', userSchema)
