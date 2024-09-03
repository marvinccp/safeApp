import { 
  Column, 
  DataType, 
  Model, 
  Table, 
  ForeignKey, 
  BelongsTo } from 'sequelize-typescript';
import { User } from '../../user/entities/user.entity';

export enum RiskLevel {
  LOW = 'LOW',
  MODERATE = 'MODERATE',
  HIGH = 'HIGH',
}

@Table
export class RiskProfile extends Model<RiskProfile> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  weight: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  height: number;

  @Column({
    type: DataType.ENUM(...Object.values(RiskLevel)),
    allowNull: false,
  })
  riskLevel: RiskLevel;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;

  @BelongsTo(() => User)
  user: User;
}
