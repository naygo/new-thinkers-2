import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {}

    async readUsers() {
        return this.userModel.findAll();
    }

    async readUser(id: number) {
        return this.userModel.findOne({ where: { id } });
    }

    async createUser(createUserDto: CreateUserDto) {
        const user = await this.userModel.findOne({ 
            where: { email: createUserDto.email } 
        });

        if(user)
            throw new ConflictException('Email já cadastrado');

        return this.userModel.create(createUserDto);
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto) {
        return this.userModel.update(updateUserDto, { where: { id } });
    }

    async deleteUser(id: number) {
        const user = await this.userModel.findOne({ where: { id } });
        await user.destroy();

        return user;
    }
}
