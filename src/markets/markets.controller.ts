import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Patch,
    Body,
    Req,
    Res,
    Param,
    UseGuards,
    Query,
} from '@nestjs/common';
import {MarketsService } from './markets.service';
import { Market } from './interfaces/market.interface';
import { AuthGuard } from '../middleware/auth.middleware'


@Controller('markets')
export class MarketsController {

    constructor(private marketService: MarketsService) { }


    @Post()
    @UseGuards(new AuthGuard())
    createMarket(
        @Body() Market: Market,

    ): Promise<Market> {
        return this.marketService.createMarket(Market);
    }


    @Get()
    findMarket(@Query('marketId') botId): Promise<Market[]> {
        return this.marketService.getMarket(botId);
    }


    @Delete(':id')
    @UseGuards(new AuthGuard())
    delete(@Param('id') id): Promise<Market> {
        return this.marketService.delete(id);
    }
}
