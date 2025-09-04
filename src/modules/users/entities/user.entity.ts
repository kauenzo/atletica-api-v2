import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  DIRETOR = 'diretor',
  ATLETA = 'atleta',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 100 })
  name: string

  @Column()
  phone: string

  @Column({ unique: true })
  cpf: string

  @Column({ type: 'date' })
  birthDate: Date

  @Column({ unique: true })
  email: string

  @Column({ select: false })
  password: string

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
