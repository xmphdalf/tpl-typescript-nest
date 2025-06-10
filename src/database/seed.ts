import { DataSource } from 'typeorm';
import { Example } from '../modules/example/entities/example.entity';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'postgres',
  database: 'tpl-typescript-nest',
  entities: [Example],
  synchronize: true,
});

async function seed() {
  try {
    await dataSource.initialize();
    console.log('Seeding database...');

    const exampleRepository = dataSource.getRepository(Example);

    // Clear existing data
    await exampleRepository.clear();

    // Create sample data
    const examples = [
      {
        name: 'Example 1',
        description: 'This is example 1',
        isActive: true,
      },
      {
        name: 'Example 2',
        description: 'This is example 2',
        isActive: true,
      },
    ];

    await exampleRepository.save(examples);
    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await dataSource.destroy();
  }
}

seed(); 