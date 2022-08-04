import { SimSchema } from '../Schema/index.mjs'
import mongoose from 'mongoose'
import moment from 'moment-timezone'
import { Errors } from '../constants/index.mjs'
const { model } = mongoose

const Sim = new model('Sim', SimSchema)

const {
  create,
  list
} = Sim

const SimModel = {
  listAll,
  renewList,
  renewSimById,
  addSim,
  editSimById,
  deleteSimById
}

async function listAll() {
  const sims = await Sim.find({})
  return sims
}

async function renewSimById (id, attrs) {
  //Pack validity of 30days added to expiry date from today
  const { telepackValidity = 30 } = attrs
  const options = {
    new: true 
  } 
  const updateProps = {
    expiryDate: moment().add(telepackValidity, 'days')
  }
  const sim = await Sim.findByIdAndUpdate(id, updateProps, options)
  if (!sim) {
    throw Errors.SIM_NOT_FOUND_BY_ID
  }
  return sim
}
async function renewList() {
  try{
    const query = {
      expiryDate : {
        $gte: moment(),
        $lte: moment().add(30, 'days')
      }
    }
    const sims = await Sim.find(query)
    return sims
  } catch (err) {
    console.log(err)
    throw err
  }
}

async function addSim(attrs = {}) {
  const sim = await Sim.create(attrs)
  return sim
}

async function editSimById(id = '', attrs = {}) {
  const options = {
    new: true 
  } 
  const sim = await Sim.findByIdAndUpdate(id, attrs, options)
  if (!sim) {
    throw Errors.SIM_NOT_FOUND_BY_ID
  }
  return sim
}

async function deleteSimById(id = '') {
  const sim = await Sim.findByIdAndDelete(id) 
  if (!sim) {
    throw Errors.SIM_NOT_FOUND_BY_ID
  }
  return sim
}

export default SimModel
