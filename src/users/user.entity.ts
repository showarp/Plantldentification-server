import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  name: string;

  @Column({type:'float'})
  lng:number

  @Column({type:'float'})
  lat:number

  @Column({type:'text'})
  outPutData:string
  
  @Column()
  imgName:string

  @Column()
  speed:number
}