import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()

export class NumbergenEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @Column()
    date: Date;

}
