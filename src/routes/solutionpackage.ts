import {Router, Application }from 'express'
import * as SolutionPackageController from '../controllers/solutionpackage'

const ApiRouter:Router = Router()

export default (app:Application) =>  {
ApiRouter.get('/:id', SolutionPackageController.getPackage)
ApiRouter.get('/', SolutionPackageController.getPackages)
ApiRouter.post('/', SolutionPackageController.addPackage)
ApiRouter.put('/:id', SolutionPackageController.updatePackage)
ApiRouter.delete('/:id', SolutionPackageController.removePackage)
ApiRouter.post('/:id/assignsi/:sId', SolutionPackageController.assignSiv)
app.use('/api/packages', ApiRouter)
}
