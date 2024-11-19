import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRiskProfileDto } from './dto/create-risk-profile.dto';
import { UpdateRiskProfileDto } from './dto/update-risk-profile.dto';
import { RiskProfile } from './entities/risk-profile.entity';
import { InjectModel } from '@nestjs/sequelize';
import { calculateRiskLevel } from '../utils/riskLevel';

@Injectable()
export class RiskProfileService {
  constructor(
    @InjectModel(RiskProfile)
    private riskModel: typeof RiskProfile,
  ) {}

  async create(bodyDataCreate: CreateRiskProfileDto): Promise<RiskProfile> {
    console.log(bodyDataCreate);
    const { weight, height, cardiovascularDisease, ...rest } = bodyDataCreate;
    const riskLevel = calculateRiskLevel(weight, height, cardiovascularDisease);
    console.log(riskLevel);
    const updateData = {
      ...rest,
      weight,
      height,
      cardiovascularDisease,
      riskLevel,
    };

    const newProfile = await  this.riskModel.create(updateData);

    return newProfile;
  }

  async findAll(): Promise<RiskProfile[]> {
    const riskProfile = await this.riskModel.findAll();
    return riskProfile;
  }

  async findOne(id: string) {
    const profile = await this.riskModel.findByPk(id);
    return profile;
  }

  async update(id: string, bodyDataUpdate: UpdateRiskProfileDto) {

    const { height, weight, cardiovascularDisease, ...rest } = bodyDataUpdate;
    const riskLevel = calculateRiskLevel(weight, height, cardiovascularDisease);
    console.log(riskLevel);
    
    const updateData = {
      ...rest,
      weight,
      height,
      cardiovascularDisease,
      riskLevel,
    };
    const [affectedRows, [updateProfile]] = await this.riskModel.update(
      updateData,
      {
        where: { id },
        returning: true,
      },
    );

    if (affectedRows === 0) {
      throw new NotFoundException('Not found');
    }

    return updateProfile;
  }

  async remove(id: string) {
    const profile = await this.riskModel.findByPk(id);
    if (!profile) throw new NotFoundException('Not found');

    const affectedRows = await this.riskModel.destroy({
      where: { id },
    });
    if (affectedRows === 0) throw new NotFoundException('Not found');

    return { succes: false, message: 'removed' };
  }
}
