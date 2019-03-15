import { Request, Response } from 'express'
import ScopeitemService from '../services/scopeitem'

/* API Controllers */
export const getSivs = async (req: Request, res: Response) => {
  try {
    const sivs = await ScopeitemService.getSivs()
    res.json(sivs)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}
export const getSiv = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const siv = await ScopeitemService.getSiv(id)
    res.json(siv)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}

export const addSiv = async (req: Request, res: Response) => {
  try {
    const text = req.body.text
    const siv = await ScopeitemService.addSiv(text)
    res.json(siv)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}
export const updateSiv = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const text = req.body.text
    const siv = await ScopeitemService.updateSiv(id, text)
    res.json(siv)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}

export const removeSiv = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await ScopeitemService.removeSiv(id)
    res.send('ok')
  } catch (err) {
    res.status(500)
    res.send(err)
  }
}
