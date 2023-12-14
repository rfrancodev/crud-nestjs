
import { IsEmail, IsNotEmpty } from 'class-validator'
export class CreateUserDto {
    @IsNotEmpty({ message: 'O campo nome é obrigatório' })
    name: string;
    @IsNotEmpty({ message: 'O campo email é obrigatório' })
    @IsEmail({}, { message: 'Informe um email em formato válido' })
    email: string
}
//Data Transfer Object
//Objeto de transferencia de dados. Serve para validar os campos que viera  do body.