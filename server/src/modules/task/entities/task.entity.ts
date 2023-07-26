import { Exclude } from 'class-transformer'
import { IsBoolean, IsString, IsUUID } from 'class-validator'
import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from '../../user/entities/user.entity'

@Entity()
export class Task {
	constructor(partial: Partial<Task>) {
		Object.assign(this, partial)
	}

	@PrimaryGeneratedColumn('uuid')
	@IsUUID('4')
	id: string

	@Column({ nullable: true, default: null })
	@IsString()
	@Exclude()
	userId: string | null

	@ManyToOne(() => User, (user) => user.tasks)
	@JoinColumn({ name: 'userId' })
	user?: User

	@Column()
	@IsString()
	text!: string

	@Column()
	@IsBoolean()
	status: boolean
}
