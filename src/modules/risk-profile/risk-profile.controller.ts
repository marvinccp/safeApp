import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RiskProfileService } from './risk-profile.service';
import { CreateRiskProfileDto } from './dto/create-risk-profile.dto';
import { UpdateRiskProfileDto } from './dto/update-risk-profile.dto';

@Controller('risk-profile')
export class RiskProfileController {
  constructor(private readonly riskProfileService: RiskProfileService) {}

  @Post()
  create(@Body() createRiskProfileDto: CreateRiskProfileDto) {
    return this.riskProfileService.create(createRiskProfileDto);
  }

  @Get()
  findAll() {
    return this.riskProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.riskProfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRiskProfileDto: UpdateRiskProfileDto) {
    return this.riskProfileService.update(+id, updateRiskProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.riskProfileService.remove(+id);
  }
}
