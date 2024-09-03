import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../../user/entities/user.entity'; 
import { Protocol } from '../../protocol/entities/protocol.entity'; 



@Table({ tableName: 'feedbacks', timestamps: true })
export class Feedback extends Model<Feedback> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;


  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;

  @ForeignKey(() => Protocol)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  protocolId: string;


  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Protocol)
  protocol: Protocol;

}
