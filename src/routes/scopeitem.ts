import {Router, Application }from 'express'
import * as ScopeitemController from '../controllers/scopeitem'

const ApiRouter:Router = Router()

export default (app:Application) =>  {
ApiRouter.get('/:id', ScopeitemController.getSiv)
ApiRouter.get('/', ScopeitemController.getSivs)
ApiRouter.post('/', ScopeitemController.addSiv)
ApiRouter.put('/:id', ScopeitemController.updateSiv)
ApiRouter.delete('/:id', ScopeitemController.removeSiv)
app.use('/api/scopeitems', ApiRouter)
}
