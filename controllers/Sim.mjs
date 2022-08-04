import { SimModel } from '../models/index.mjs'

const SimController = {
  listAll,
  renewList,
  health,
  renewSimById,
  addSim,
  editSimById,
  deleteSimById
}

async function listAll(request, response, next) {
  try {
    const { body } = request
    const data = await SimModel.listAll(body)
    const responseBody = { data }
    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

async function renewList(request, response, next) {
  try {
    const data = await SimModel.renewList()
    const responseBody = { data }
    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

async function health(request, response, next) {
  try {
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

async function addSim(request, response, next) {
  try {
    const { body } = request
    const data = await SimModel.addSim(body)
    const responseBody = { data }
    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

async function editSimById(request, response, next) {
  try {
    const { body, params: { id } } = request
    const data = await SimModel.editSimById(id, body)
    const responseBody = { data }    

    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

async function renewSimById(request, response, next) {
  try {
    const { body, params: { id } } = request
    const data = await SimModel.renewSimById(id, body)
    const responseBody = { data }    

    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

async function deleteSimById(request, response, next) {
  try {
    const { params: { id } } = request
    const data = await SimModel.deleteSimById(id)
    const responseBody = { data }

    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

export default SimController
