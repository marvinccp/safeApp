import { Module } from '@nestjs/common';
import { RiskProfileService } from './risk-profile.service';
import { RiskProfileController } from './risk-profile.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RiskProfile } from './entities/risk-profile.entity';

@Module({
  controllers: [RiskProfileController],
  providers: [RiskProfileService],
  imports:[SequelizeModule.forFeature([RiskProfile])]
})
export class RiskProfileModule {}
