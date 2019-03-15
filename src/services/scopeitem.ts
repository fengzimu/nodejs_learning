import { getManager } from 'typeorm'
import { Scopeitem } from '../models/Scopeitem'
const getSivs = async () => {
  const sivRepo = getManager().getRepository(Scopeitem)
  return sivRepo.find()
}
const getSiv = async (id: number) => {
  const sivRepo = getManager().getRepository(Scopeitem)
  return sivRepo.findOne(id)
}

const addSiv = async (name: string) => {
  const sivRepo = getManager().getRepository(Scopeitem)
  const siv: Scopeitem = new Scopeitem()
  siv.name = name
  return sivRepo.save(siv)
}

const removeSiv = async (id: number) => {
  const sivRepo = getManager().getRepository(Scopeitem)
  const siv = await sivRepo.findOne(id)
  return sivRepo.remove(siv)
}

const updateSiv = async (id: number, text: string) => {
  const sivRepo = getManager().getRepository(Scopeitem)
  const siv = await sivRepo.findOne(id)
  return sivRepo.update(siv, { name: text })
}

export default {
  getSivs,
  getSiv,
  addSiv,
  removeSiv,
  updateSiv
}
