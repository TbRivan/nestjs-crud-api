import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

// Define type for AuthDto and use a validator
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
