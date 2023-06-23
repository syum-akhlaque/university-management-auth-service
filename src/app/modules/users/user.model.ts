import { Model, Schema, model } from 'mongoose'
import { Iuser } from './users.interface'

type userModel = Model<Iuser, object>

const userSchema = new Schema<Iuser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const user = model<userModel>('User', userSchema)
