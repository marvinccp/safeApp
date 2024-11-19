import { IsNotEmpty, IsNumber, IsUUID, IsEnum, IsBoolean } from 'class-validator';
import { RiskLevel } from '../entities/risk-profile.entity';

export class CreateRiskProfileDto {
  @IsNotEmpty()
  @IsNumber()
  readonly age: number;

  @IsNotEmpty()
  @IsNumber()
  readonly weight: number;

  @IsNotEmpty()
  @IsNumber()
  readonly height: number;

  @IsNotEmpty()
  @IsEnum(RiskLevel)
  readonly riskLevel: RiskLevel;

  @IsBoolean()
  readonly cardiovascularDisease: boolean


  @IsNotEmpty()
  @IsUUID('all', { message: 'User ID must be a valid UUID' })
  readonly userId: string;
}
