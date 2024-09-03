import { 
    Column, 
    Model, 
    Table, 
    DataType, 
    HasMany, 
    BelongsToMany
} from 'sequelize-typescript';
import { Feedback } from '../../feedback/entities/feedback.entity'; 
import { Exercise } from '../../exercise/entities/exercise.entity'; 
import { ProtocolExercise } from '../../protocol-exercise/entities/protocol-exercise.entity';

@Table({ tableName: 'protocols', timestamps: true })
export class Protocol extends Model<Protocol> {
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
    type: DataType.TEXT,
    allowNull: true,
  })
  description?: string;

  @HasMany(() => Feedback)
  feedbacks: Feedback[];

  @BelongsToMany(() => Exercise, () => ProtocolExercise)
  exercises: Exercise[];

  @HasMany(() => ProtocolExercise)
  protocolExercises: ProtocolExercise[];
}
