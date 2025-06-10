import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Example } from './entities/example.entity';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(Example)
    private readonly exampleRepository: Repository<Example>,
  ) {}

  async create(data: Partial<Example>): Promise<Example> {
    const example = this.exampleRepository.create(data);
    return this.exampleRepository.save(example);
  }

  async findAll(): Promise<Example[]> {
    return this.exampleRepository.find();
  }

  async findOne(id: number): Promise<Example | null> {
    return this.exampleRepository.findOneBy({ id });
  }

  async update(id: number, data: Partial<Example>): Promise<Example | null> {
    await this.exampleRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.exampleRepository.delete(id);
  }
} 