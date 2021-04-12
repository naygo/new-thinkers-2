import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateUser } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {}

    createUser(createUser: CreateUser) {
        return this.userModel.create(createUser);
    }
}
