import {IsNotEmpty, IsUUID, IsString} from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  @IsUUID()
  readonly protocolId: number;

  @IsNotEmpty()
  @IsUUID()
  readonly userId: number;

  @IsNotEmpty()
  @IsString()
  readonly content: string;
}
