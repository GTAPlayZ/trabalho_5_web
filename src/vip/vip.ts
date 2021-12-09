import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, MinLength, IsDefined, MaxLength } from 'class-validator';

@Entity()
export class Vip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(2, { always: true })
  @MaxLength(50, { always: true })
  name: string;

  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(3, { always: true })
  @MaxLength(250, { always: true })
  descricao: string;
}
