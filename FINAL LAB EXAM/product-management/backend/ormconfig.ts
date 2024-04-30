import { Product } from 'src/products/entities/product.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'product_management',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '627232',
  entities: [Product],
  synchronize: true,
};

export default config;
