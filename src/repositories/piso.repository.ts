import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources/postgres.datasource';
import {Piso, PisoRelations} from '../models';

export class PisoRepository extends DefaultCrudRepository<
  Piso,
  typeof Piso.prototype.idpiso,
  PisoRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(Piso, dataSource);
  }
}
