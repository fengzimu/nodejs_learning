import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable }from 'typeorm'
import {Scopeitem }from './Scopeitem'

@Entity()
export class Solutionpackage {
@PrimaryGeneratedColumn()
public id:number
  @Column()
public name:string
@ManyToMany(type => Scopeitem, scopeitem => scopeitem.solutionPackages)
@JoinTable()
public scopeItems:Scopeitem[]
}
