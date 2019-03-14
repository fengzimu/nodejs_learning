import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Solutionpackage } from './Solutionpackage'
@Entity()
export class Scopeitem {
  @PrimaryGeneratedColumn()
  public id: number
  @Column()
  public name: string
  @ManyToOne(type => Solutionpackage, solutionPackage => solutionPackage.sis)
  public solutionPackage: Solutionpackage
}
