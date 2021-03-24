import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources/postgres.datasource';
import {Fecha, FechaRelations} from '../models';

export class FechaRepository extends DefaultCrudRepository<
  Fecha,
  typeof Fecha.prototype.idfecha,
  FechaRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(Fecha, dataSource);
  }
}
