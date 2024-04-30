import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  id: number;

  @IsNotEmpty({ message: 'You must provide course tilte' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'You must provide course description' })
  @IsString()
  description: string;

  @IsNotEmpty({ message: 'You must set an image' })
  @IsString()
  image: string;

  @IsNotEmpty({ message: 'You must fill price' })
  @IsString()
  price: string;
}
