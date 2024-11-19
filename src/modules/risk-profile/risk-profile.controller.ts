import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { RiskProfileService } from './risk-profile.service';
import { CreateRiskProfileDto } from './dto/create-risk-profile.dto';
import { UpdateRiskProfileDto } from './dto/update-risk-profile.dto';
import { RiskProfile } from './entities/risk-profile.entity';

@Controller('safe/risk-profile')
export class RiskProfileController {
  constructor(private readonly riskProfileService: RiskProfileService) {}

  @Get()
  async findAll(): Promise<RiskProfile[]> {
    const riskProfile = await this.riskProfileService.findAll();
    if (!riskProfile) throw new NotFoundException('Not found');
    return riskProfile;
  }

  @Post()
  async create(@Body() updateData: CreateRiskProfileDto):Promise<RiskProfile> {
    const newProfile = await this.riskProfileService.create(updateData);
    return newProfile
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.riskProfileService.findOne(id);
  }

  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() bodyDataUpdate: UpdateRiskProfileDto,
  ) {
    return this.riskProfileService.update(id, bodyDataUpdate);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.riskProfileService.remove(id);
  }
}
