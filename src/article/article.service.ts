import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './dto/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}
  async create(createArticleDto: CreateArticleDto) {
    return await this.articleRepository.save(createArticleDto);
  }

  async findAll() {
    return await this.articleRepository.find();
  }

  async findOne(ref: string) {
    const article = await this.articleRepository.findOneBy({ ref });
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    return article;
  }

  async update(ref: string, updateArticleDto: UpdateArticleDto) {
    const article = await this.articleRepository.findOneBy({ ref });
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    return await this.articleRepository.update(ref, updateArticleDto);
  }

  async remove(ref: string) {
    const article = await this.articleRepository.findOneBy({ ref });
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    return await this.articleRepository.remove(article);
  }
}
