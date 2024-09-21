import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './dto/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryRepository.save(createCategoryDto);
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOne(category_id: number) {
    const category = await this.categoryRepository.findOneBy({ category_id });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  async update(category_id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepository.findOneBy({ category_id });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return await this.categoryRepository.update(category_id, updateCategoryDto);
  }

  async remove(category_id: number) {
    const category = await this.categoryRepository.findOneBy({ category_id });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return await this.categoryRepository.remove(category);
  }
}
