import mongoose from 'mongoose'
const { Schema } = mongoose

const SimSchema = new Schema({
  simCardNo: {type: Number, required: true, index: true},
  mobileNumber: { type: String },
  status: { type: String },
  expiryDate: { type: Date },
  stateOfRegistration: { type: String },
  kyc: { type: String },
  telecomProvider: { type: String },
  fullName: { type: String },
})

export default SimSchema
