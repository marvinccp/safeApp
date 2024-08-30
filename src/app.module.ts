import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjerciciosModule } from './ejercicios/ejercicios.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, CategoriesModule, EjerciciosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
