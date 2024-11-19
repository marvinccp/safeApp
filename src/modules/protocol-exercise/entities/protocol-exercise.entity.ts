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

  // Campo ID (sin cambios)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  // Relación con `Protocol` (sin cambios)
  @ForeignKey(() => Protocol)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  protocolId: string;

  // Relación con `Exercise` (sin cambios)
  @ForeignKey(() => Exercise)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  exerciseId: string;

  // Relación con Protocol (sin cambios)
  @BelongsTo(() => Protocol)
  protocol: Protocol;

  // Relación con Exercise (sin cambios)
  @BelongsTo(() => Exercise)
  exercise: Exercise;
}
