import { Injectable } from '@nestjs/common';
import { Market } from './interfaces/market.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MarketsService {

    constructor(
        @InjectModel('Market') private marketModel: Model<Market>,
    ) { }

    async createMarket(market) {
        const newMarket = new this.marketModel(market);

        try {
            const Market = await newMarket.save();
            if (Market) {
                return {
                    success: true,
                    message: 'Market has been successfully saved',
                    Market
                };
            }
            return {
                success: false,
                message: 'Market not saved. Please try again',
            };
        } catch (e) {
            return (e.message);
        }
    }
    async getMarket(marketId): Promise<Market[]> {
        if (marketId) {
            return await this.marketModel.find({ id: marketId });

        }
        return await this.marketModel.find();
    }


    async delete(id: string): Promise<Market> {
        return await this.marketModel.findByIdAndRemove(id);
    }

}
