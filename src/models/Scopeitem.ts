import {Entity, PrimaryGeneratedColumn, Column, ManyToMany }from 'typeorm'
import {Solutionpackage }from './Solutionpackage'
@Entity()
export class Scopeitem {
@PrimaryGeneratedColumn()
public id:number
  @Column()
public name:string
  @ManyToMany(type => Solutionpackage, solutionPackage => solutionPackage.scopeItems)
public solutionPackages:Solutionpackage[]
}
