import Express from 'express'
import { SimController } from '../controllers/index.mjs'
import { RequestHandlers } from '../middlewares/index.mjs'

const {
  routeMatched
} = RequestHandlers

const {
  listAll,
  renewList,
  health,
  renewSimById,
  addSim,
  editSimById,
  deleteSimById
} = SimController

const SimRouter = new Express.Router()

SimRouter.get('/list-all', routeMatched, listAll)
SimRouter.get('/to-renew', routeMatched, renewList)
SimRouter.get('/', routeMatched, health)

SimRouter.post('/renew/:id', routeMatched, renewSimById)
SimRouter.post('/add', routeMatched, addSim)


SimRouter.patch('/:id', routeMatched, editSimById)

SimRouter.delete('/:id', routeMatched, deleteSimById)



export default SimRouter
