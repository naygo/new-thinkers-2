import { Body, Controller, Post } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUser } from './dto/create-user.dto';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}
    @Post()
    createUser(@Body() createUser: CreateUser) {
        return this.userService.createUser(createUser);
    }
}
