import { Body, Controller, Param, Post, Put } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {

    constructor(
        private userService: UserService,
    ) {}
    
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Put(':id')
    updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id:number ) {
        return this.userService.updateUser(+id, updateUserDto);
    }
    
}
