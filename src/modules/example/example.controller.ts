import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { ExampleService } from './example.service';
import { Example } from './entities/example.entity';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Post()
  create(@Body() data: Partial<Example>): Promise<Example> {
    return this.exampleService.create(data);
  }

  @Get()
  findAll(): Promise<Example[]> {
    return this.exampleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Example> {
    const example = await this.exampleService.findOne(+id);
    if (!example) {
      throw new NotFoundException('Example not found');
    }
    return example;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Example>,
  ): Promise<Example> {
    const example = await this.exampleService.update(+id, data);
    if (!example) {
      throw new NotFoundException('Example not found');
    }
    return example;
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.exampleService.remove(+id);
  }
} 