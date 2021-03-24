import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources/postgres.datasource';
import {Destino, DestinoRelations} from '../models';

export class DestinoRepository extends DefaultCrudRepository<
  Destino,
  typeof Destino.prototype.iddestino,
  DestinoRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(Destino, dataSource);
  }
}
