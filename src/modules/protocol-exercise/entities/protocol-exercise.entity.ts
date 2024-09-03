import { 
    Column, 
    Model, 
    Table, 
    DataType, 
    ForeignKey, 
    BelongsTo 
} from 'sequelize-typescript';
import { Protocol } from '../../protocol/entities/protocol.entity';
import { Exercise } from '../../exercise/entities/exercise.entity';

@Table({ tableName: 'protocol_exercises', timestamps: true })

export class ProtocolExercise extends Model<ProtocolExercise> {


  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;
  

  @ForeignKey(() => Protocol)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  protocolId: string;

  @ForeignKey(() => Exercise)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  exerciseId: string;

  @BelongsTo(() => Protocol)
  protocol: Protocol;

  @BelongsTo(() => Exercise)
  exercise: Exercise;
}
