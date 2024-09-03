import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
  ) {}

  async create(bodyCreateData: CreateCategoryDto): Promise<Category> {
    return this.categoryModel.create(bodyCreateData);
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.findAll();
  }

  async findOne(id: string): Promise<Category> {
    return this.categoryModel.findByPk(id);
  }

  async update(
    id: string,
    bodyCreateData: UpdateCategoryDto,
  ): Promise<Category> {
    const [affectedRows] = await this.categoryModel.update(bodyCreateData, {
      where: { id },
    });

    if (affectedRows === 0) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    const updatedCategory = await this.categoryModel.findByPk(id);
    if (!updatedCategory) {
      throw new NotFoundException(
        `Category with ID ${id} not found after update`,
      );
    }

    return updatedCategory;
  }

  async remove(id: string): Promise<Category> {
    const categoryToRemove = await this.categoryModel.findByPk(id);
    if (!categoryToRemove) {
      throw new NotFoundException('Not found');
    }

    const affectedRows = await this.categoryModel.destroy({
      where: { id },
    });

    if (affectedRows === 0) {
      throw new NotFoundException('Not found');
    }
    return categoryToRemove;
  }
}
