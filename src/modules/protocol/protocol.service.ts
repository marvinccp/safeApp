import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProtocolDto } from './dto/create-protocol.dto';
import { UpdateProtocolDto } from './dto/update-protocol.dto';

import { Protocol } from './entities/protocol.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Exercise } from '../exercise/entities/exercise.entity';

@Injectable()
export class ProtocolService {
  constructor(
    @InjectModel(Protocol)
    private protocolModel: typeof Protocol,
  ) {}

  async findAll(): Promise<Protocol[]> {
    const protocols = await this.protocolModel.findAll();

    return protocols;
  }

  async create(bodyDataCreate: CreateProtocolDto): Promise<Protocol> {
    const newProtocol = await this.protocolModel.create(bodyDataCreate);
    return newProtocol;
  }

  async findOne(id: string): Promise<Protocol> {
    const protocol = this.protocolModel.findByPk(id, {
      include: Exercise
    });
    if(!protocol) throw new NotFoundException('Not found')
    return protocol;
  }

  async update(
    id: string,
    bodyDataUpdate: UpdateProtocolDto,
  ): Promise<Protocol> {
    const [affectedRow, [updateProtocol]] = await this.protocolModel.update(
      bodyDataUpdate,
      {
        where: { id },
        returning: true,
      },
    );
    if (affectedRow === 0) {
      throw new NotFoundException('Not found');
    }
    return updateProtocol;
  }

  async remove(id: string) {
    const protocolToRemove = await this.protocolModel.findByPk(id);
    if (!protocolToRemove) {
      throw new NotFoundException('Not found');
    }

    const affectedRows = await this.protocolModel.destroy({
      where: { id },
    });

    if (affectedRows === 0) {
      throw new NotFoundException('Not found');
    }

    return { succes: true, message: `Protocol with id: ${id}, was removed` };
  }
}
