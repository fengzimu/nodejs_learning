import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Scopeitem } from './Scopeitem'

@Entity()
export class Solutionpackage {
  @PrimaryGeneratedColumn()
  public id: number
  @Column()
  public name: string
  @OneToMany(type => Scopeitem, scopeitem => scopeitem.solutionPackage)
  public sis: Scopeitem[]
}
