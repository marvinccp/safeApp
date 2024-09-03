import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { Exercise } from '../../exercise/entities/exercise.entity';

@Table({
  tableName: 'categories',
  timestamps: true,
})
export class Category extends Model<Category> {
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

  @HasMany(() => Exercise)
  exercises: Exercise[];
}
