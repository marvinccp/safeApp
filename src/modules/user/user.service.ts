import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { RiskProfile } from '../risk-profile/entities/risk-profile.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    const users = this.userModel.findAll({
      include: {
        model: RiskProfile,
      },
    });
    return users;
  }

  async create(bodyDataCreate: CreateUserDto): Promise<User> {
    const newUser = await this.userModel.create(bodyDataCreate)
    return newUser;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findByPk(id, {
      include: {
        model: RiskProfile,
      },
    });
    if (!user) throw new NotFoundException('Not found');
    return user;
  }

  async update(id: string, bodyDataUpdate: UpdateUserDto) {
    const [affectedRows, [updateUser]] = await this.userModel.update(
      bodyDataUpdate,
      {
        where: { id },
        returning: true,
      },
    );

    if (affectedRows === 0) {
      throw new NotFoundException('Not found');
    }

    return updateUser;
  }

  async remove(id: string) {
    const user = await this.userModel.findByPk(id);
    if (!user) throw new NotFoundException('Notfound');

    const affectedRows = await this.userModel.destroy({
      where: { id },
    });
    if (affectedRows === 0) throw new NotFoundException('Notfound');

    return { succes: true, message: `User with id: ${id}, was removed` };
  }
}
