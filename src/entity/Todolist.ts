import {Entity, PrimaryGeneratedColumn, Column, Timestamp} from "typeorm";

@Entity()
export class Todolist {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    completed: boolean;

    @Column({name: "created_at"})
    createdAt: string;

    @Column({name: "completed_at"})
    completedAt: string;

    @Column()
    notes: string;

    @Column()
    category: string;

}
