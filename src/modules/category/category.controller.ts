import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('safe/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() bodyCreateData: CreateCategoryDto) {
    return this.categoryService.create(bodyCreateData);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() bodyCreateData: UpdateCategoryDto) {
    return this.categoryService.update(id, bodyCreateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
