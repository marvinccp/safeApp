import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import {Category} from '../../category/entities/category.entity'; // Ajusta la ruta según tu estructura
import { Protocol } from 'src/modules/protocol/entities/protocol.entity';
import { ProtocolExercise } from 'src/modules/protocol-exercise/entities/protocol-exercise.entity';

@Table({
  tableName: 'exercises',
  timestamps: true, 
})
export class Exercise extends Model<Exercise> {
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
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image_url?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  video_url?: string;
  

  @ForeignKey(() => Category)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  categoryId: string;


  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => ProtocolExercise)
  protocolExercises: ProtocolExercise[];
}
