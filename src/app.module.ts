import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/dto/user.entity';
import { ClientModule } from './client/client.module';
import { ProduitModule } from './produit/produit.module';
import { ArticleModule } from './article/article.module';
import { Client } from './client/dto/client.entity';
import { Article } from './article/dto/article.entity';
import { Produit } from './produit/dto/produit.entity';
import { EtatModule } from './etat/etat.module';
import { CategoryModule } from './category/category.module';
import { Category } from './category/dto/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [User, Client, Article, Produit, Category],
      synchronize: true,
    }),
    UserModule,
    ClientModule,
    ProduitModule,
    ArticleModule,
    EtatModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
