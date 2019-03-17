import {getManager }from 'typeorm'
import {Solutionpackage }from '../models/Solutionpackage'
import {Scopeitem }from '../models/Scopeitem'
const getPackages = async () =>  {
const packageRepo = getManager().getRepository(Solutionpackage)
return packageRepo.find()
}
const getPackage = async (id:number) =>  {
const packageRepo = getManager().getRepository(Solutionpackage)
return packageRepo.findOne(id)
}

const addPackage = async (name:string) =>  {
const packageRepo = getManager().getRepository(Solutionpackage)
const sPackage:Solutionpackage = new Solutionpackage()
sPackage.name = name
  return packageRepo.save(sPackage)
}

const removePackage = async (id:number) =>  {
const packageRepo = getManager().getRepository(Solutionpackage)
const sPackage = await packageRepo.findOne(id)
return packageRepo.remove(sPackage)
}

const updatePackage = async (id:number, text:string) =>  {
const packageRepo = getManager().getRepository(Solutionpackage)
const sPackage = await packageRepo.findOne(id)
return packageRepo.update(sPackage,  {name:text })
}

const assignSiv = async (id:number, siId:string) =>  {
const packageRepo = getManager().getRepository(Solutionpackage)
const sPackage = await packageRepo.findOne(id,  {relations:['scopeItems']})
const siRepo = getManager().getRepository(Scopeitem)
const siv = await siRepo.findOne(siId)

sPackage.scopeItems.push(siv)
return packageRepo.save(sPackage)
}

const getAssignedSivs = async (id:number) =>  {
const packageRepo = getManager().getRepository(Solutionpackage)
const sPackage = await packageRepo.findOne(id,  {relations:['scopeItems']})
return sPackage.scopeItems
}



export default {
getPackages, 
getPackage, 
addPackage, 
removePackage, 
updatePackage, 
assignSiv, 
getAssignedSivs
}
