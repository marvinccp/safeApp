import { Module } from '@nestjs/common';
import { ProtocolService } from './protocol.service';
import { ProtocolController } from './protocol.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Protocol } from './entities/protocol.entity';

@Module({
  controllers: [ProtocolController],
  providers: [ProtocolService],
  imports:[SequelizeModule.forFeature([Protocol])]
})
export class ProtocolModule {}
