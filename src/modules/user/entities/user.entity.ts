import { 
  Column, 
  DataType, 
  Model, 
  Table, 
  HasMany, 
  HasOne 
} from 'sequelize-typescript';
import { RiskProfile } from '../../risk-profile/entities/risk-profile.entity';
import { Feedback } from '../../feedback/entities/feedback.entity';


@Table({ tableName: 'users', timestamps: true })
export class User extends Model<User> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false, 
  })
  affiliate: boolean;


  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @HasOne(() => RiskProfile)
  riskProfile: RiskProfile;

  @HasMany(() => Feedback)
  feedbacks: Feedback[];
}
