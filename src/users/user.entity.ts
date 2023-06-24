import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  disease: string;

  @Column()
  lng:number

  @Column()
  lat:number

  @Column()
  outPutData:string
  
  @Column({type:'text'})
  imgData:string

}