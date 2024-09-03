import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Feedback } from './entities/feedback.entity';

@Module({
  controllers: [FeedbackController],
  providers: [FeedbackService],
  imports:[SequelizeModule.forFeature([Feedback])]
})
export class FeedbackModule {}
