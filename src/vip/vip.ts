import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, MinLength, IsDefined, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Vip {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(2, { always: true })
  @MaxLength(50, { always: true })
  name: string;

  @ApiProperty()
  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(3, { always: true })
  @MaxLength(250, { always: true })
  descricao: string;
}
