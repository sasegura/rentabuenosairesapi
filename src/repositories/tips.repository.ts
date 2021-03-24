import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources/postgres.datasource';
import {Tips, TipsRelations} from '../models';

export class TipsRepository extends DefaultCrudRepository<
  Tips,
  typeof Tips.prototype.idtips,
  TipsRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(Tips, dataSource);
  }
}
