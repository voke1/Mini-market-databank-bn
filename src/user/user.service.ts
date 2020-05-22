import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TokenService } from '../utils/jwt.service';
import { ResponseService } from '../utils/response-handler.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private clientModel: Model<User>,
        private responseService: ResponseService,
    ) { }
    async findOneByEmail(email): Promise<User> {
        return await this.clientModel.findOne({ email });
    }
    async signUp(user, res) {
        try {
            const foundUser = await this.findOneByEmail(user.email);
            if (foundUser) {
                return this.responseService.clientError(
                    res,
                    'User already exist',
                );
            }
            const token = await TokenService.getToken({
                fullName: user.fullName,
                email: user.email,
            }, '30d');
            user.password = await bcrypt.hash(user.password, 6);
            user.token = token;
            const apiUserCreated = await new this.clientModel(user)
            if (apiUserCreated) {

                return this.responseService.requestSuccessful(res, user);
            }

        } catch (error) {
            return this.responseService.serverError(res, error.message);
        }

    }
}
