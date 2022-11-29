import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardEntity } from './card.entity/card.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CardService {
    constructor(
        @InjectRepository(CardEntity)
        private readonly Cardrepo: Repository<CardEntity>,
    ) {}

    async findAll(): Promise<CardEntity[]> {
        return await this.Cardrepo.find();
    }

    async findOne(id_user: number, id_ticket: number): Promise<CardEntity>{
        return await this.Cardrepo.findOneBy({id_user, id_ticket});
    } 

    async create (card: CardEntity): Promise<CardEntity> {
        return await this.Cardrepo.save(card);
    }

    async update(card: CardEntity): Promise<UpdateResult> {
        return await this.Cardrepo.update(card.id_user, card);
    }

    async delete(id):Promise<DeleteResult> {
        return await this.Cardrepo.delete(id);
    }
}
