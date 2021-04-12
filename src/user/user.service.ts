import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { iRegexp } from 'sequelize/types/lib/operators';

import { CreateUserDto } from './dto/create-user.dto';
import { FindUsersDto } from './dto/find-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {}


    findUsers(findUsersDto: FindUsersDto): Promise<User[]> {
        const where: any ={};

        if(findUsersDto.name) 
            where.name = findUsersDto.name;

        if (findUsersDto.email) 
            where.email = findUsersDto.email;

        return this.userModel.findAll({ where });
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = await this.userModel.findOne({ 
            where: { email: createUserDto.email } 
        });

        if(user)
            throw new ConflictException('Email já cadastrado');

        return this.userModel.create(createUserDto);
    }

    updateUser(id: number, updateUserDto: UpdateUserDto) {
        return this.userModel.update(updateUserDto, { where: { id } });
    }

    deleteUser(id: number) {
      return this.userModel.destroy({ where: { id } });
    }
}
