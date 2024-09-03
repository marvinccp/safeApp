import { Injectable } from '@nestjs/common';
import { CreateRiskProfileDto } from './dto/create-risk-profile.dto';
import { UpdateRiskProfileDto } from './dto/update-risk-profile.dto';

@Injectable()
export class RiskProfileService {
  create(createRiskProfileDto: CreateRiskProfileDto) {
    return 'This action adds a new riskProfile';
  }

  findAll() {
    return `This action returns all riskProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} riskProfile`;
  }

  update(id: number, updateRiskProfileDto: UpdateRiskProfileDto) {
    return `This action updates a #${id} riskProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} riskProfile`;
  }
}
