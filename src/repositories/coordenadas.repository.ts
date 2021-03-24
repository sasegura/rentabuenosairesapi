import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources/postgres.datasource';
import {Coordenadas, CoordenadasRelations} from '../models';

export class CoordenadasRepository extends DefaultCrudRepository<
  Coordenadas,
  typeof Coordenadas.prototype.idcoordenada,
  CoordenadasRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(Coordenadas, dataSource);
  }
}
