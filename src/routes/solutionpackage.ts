import { Router, Application } from 'express'
import * as SolutionPackageController from '../controllers/solutionpackage'

const ApiRouter: Router = Router()

export default (app: Application) => {
  ApiRouter.get('/:id', SolutionPackageController.getPackage)
  ApiRouter.get('/', SolutionPackageController.getPackages)
  ApiRouter.post('/', SolutionPackageController.addPackage)
  ApiRouter.put('/:id', SolutionPackageController.updatePackage)
  ApiRouter.delete('/:id', SolutionPackageController.removePackage)
  app.use('/api/packages', ApiRouter)
}
