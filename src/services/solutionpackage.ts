import {getManager }from 'typeorm'
import {Solutionpackage }from '../models/Solutionpackage'
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

const updatePackage = async (id:number) =>  {
const packageRepo = getManager().getRepository(Solutionpackage)
const sPackage = await packageRepo.findOne(id)
return packageRepo.update(sPackage,  {name:''})
}

export default {
getPackages, 
getPackage, 
addPackage, 
removePackage, 
updatePackage
}
