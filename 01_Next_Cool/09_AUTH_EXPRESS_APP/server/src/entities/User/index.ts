import { Int, ObjectType, Field } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Field(() => String)
  @Column({ type: "varchar", unique: true, length: 25 })
  username: string;

  @Field(() => String)
  @Column({ type: "varchar", unique: true, length: 25 })
  email: string;

  @Column({ type: "text" })
  password: string;

  @Field(() => String)
  @CreateDateColumn({ type: "datetime", nullable: false })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ type: "datetime", nullable: false })
  updatedAt: Date;
}
