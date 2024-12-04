import { defineConfig } from '@mikro-orm/mongodb';

export default defineConfig({
  entities: ['dist/src/*/entities/*.entity.js'],
  entitiesTs: ['src/*/entities/*.entity.ts'],
  // debug: ['query', 'query-params'],
});
