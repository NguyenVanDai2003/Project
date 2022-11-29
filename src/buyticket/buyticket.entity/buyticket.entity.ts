import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class BuyticketEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @Column()
    price: number;

    @Column()
    id_numbergeneration: number;

    @Column()
    date: Date;

}
