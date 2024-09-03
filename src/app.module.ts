import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { RiskProfileModule } from './modules/risk-profile/risk-profile.module';
import { CategoryModule } from './modules/category/category.module';
import { ProtocolModule } from './modules/protocol/protocol.module';
import { ProtocolExerciseModule } from './modules/protocol-exercise/protocol-exercise.module';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { ExerciseModule } from './modules/exercise/exercise.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { safeDatabaseConfig } from './config/database.config';

@Module({
  imports: [
    UserModule,
    RiskProfileModule,
    ExerciseModule,
    CategoryModule,
    ProtocolModule,
    ProtocolExerciseModule,
    FeedbackModule,
    SequelizeModule.forRoot(safeDatabaseConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
