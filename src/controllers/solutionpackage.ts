import {Request, Response }from 'express'
import SolutionPackageService from '../services/solutionpackage'

/* API Controllers */
export const getPackages = async (req:Request, res:Response) =>  {
try {
const packages = await SolutionPackageService.getPackages()
res.json(packages)
}catch (err) {
res.status(500)
res.send(err)
}
}
export const getPackage = async (req:Request, res:Response) =>  {
try {
const id = req.params.id
    const sPackage = await SolutionPackageService.getPackage(id)
res.json(sPackage)
}catch (err) {
res.status(500)
res.send(err)
}
}

export const addPackage = async (req:Request, res:Response) =>  {
try {
const text = req.body.text
    const sPackage = await SolutionPackageService.addPackage(text)
res.json(sPackage)
}catch (err) {
res.status(500)
res.send(err)
}
}
export const updatePackage = async (req:Request, res:Response) =>  {
try {
const text = req.body.text
    const sPackage = await SolutionPackageService.updatePackage(text)
res.json(sPackage)
}catch (err) {
res.status(500)
res.send(err)
}
}

export const removePackage = async (req:Request, res:Response) =>  {
try {
const id = req.params.id
    await SolutionPackageService.removePackage(id)
res.send('ok')
}catch (err) {
res.status(500)
res.send(err)
}
}
