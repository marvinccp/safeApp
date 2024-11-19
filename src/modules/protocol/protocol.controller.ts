import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProtocolService } from './protocol.service';
import { CreateProtocolDto } from './dto/create-protocol.dto';
import { UpdateProtocolDto } from './dto/update-protocol.dto';
import { Protocol } from './entities/protocol.entity';

@Controller('safe/protocol')
export class ProtocolController {
  constructor(private readonly protocolService: ProtocolService) {}

  @Get()
  async findAll(): Promise<Protocol[]> {
    const protocols = this.protocolService.findAll();
    return protocols;
  }

  @Post()
  async create(@Body() bodyDataCreate: CreateProtocolDto) {
    const newProtocol = await this.protocolService.create(bodyDataCreate);
    return newProtocol;
  }

  @Get(':id')
  async findOne(@Param('id') id: string){
    const protocol = await this.protocolService.findOne(id);
    if(!protocol){
      return {succes:false, message:'No se encuentra o no existe' }
    }
    return protocol;
  }

  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() bodyDataUpdate: UpdateProtocolDto,
  ) {
    return this.protocolService.update(id, bodyDataUpdate);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.protocolService.remove(id);
  }
}
