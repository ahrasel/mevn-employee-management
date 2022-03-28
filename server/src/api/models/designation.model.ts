import mongoose from 'mongoose'

export interface IDesignation {
  //   _id: mongoose.Types.ObjectId
  name: string
  description?: string
  status: boolean
}

export interface DesignationDocument extends mongoose.Document, IDesignation {
  //   _id: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const designationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

designationSchema
  .virtual('active')
  .get(function (this: DesignationDocument): string {
    return this.status ? 'Active' : 'Inactive'
  })

export default mongoose.model<DesignationDocument>(
  'Designation',
  designationSchema
)
