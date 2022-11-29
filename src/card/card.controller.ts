import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CardEntity } from './card.entity/card.entity';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
    constructor(private readonly CardService: CardService) {}

    @Get()
    findAll(): Promise<CardEntity[]> {
      return this.CardService.findAll()
    }

    @Get(':id_user/:id_ticket')
    get(@Param() params) {
        return this.CardService.findOne(params.id_user, params.id_ticket);
    }

    @Post()
    create(@Body() card: CardEntity) {
        return this.CardService.create(card);
    }


    @Put()
    update(@Body() card:CardEntity) {
        return this.CardService.update(card);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.CardService.delete(params.id);
    }
}
