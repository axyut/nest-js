// validation

import { IsInt, IsString } from 'class-validator';

export class bookDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}
