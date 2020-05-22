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
import {UserService } from './user.service';

@Controller('api/v1')
export class UserController {
    constructor(private readonly UserService: UserService) { }



    @Post('auth/user/signup')
    async Signup(
        @Body() apiUserDto,
        @Req() req,
        @Res() res,
    ) {

        return await this.UserService.signUp(apiUserDto, res);
    }
    @Post('auth/user/signin')
    async Signin(
        @Body() apiUserDto,
        @Req() req,
        @Res() res,
    ) {

        return await this.UserService.signUp(apiUserDto, res);
    }


}
