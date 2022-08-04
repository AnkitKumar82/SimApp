import { ResponseHandlers } from '../middlewares/index.mjs'
import SimRouter from './Sim.mjs'

const {
  responseSend
} = ResponseHandlers

const Routes = [
  { path: '/sim', router: SimRouter }
]

Routes.init = (app) => {
  if (!app || !app.use) {
    console.error('[Error] Route Initialization Failed: app / app.use is undefined')
    return process.exit(1)
  }

  // Custom Routes
  Routes.forEach(route => app.use(route.path, route.router))

  // Final Route Pipeline
  app.use('*', responseSend)
}

export default Routes
