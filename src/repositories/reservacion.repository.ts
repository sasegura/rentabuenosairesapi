import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources/postgres.datasource';
import {Reservacion, ReservacionRelations} from '../models';

export class ReservacionRepository extends DefaultCrudRepository<
  Reservacion,
  typeof Reservacion.prototype.idusuario,
  ReservacionRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(Reservacion, dataSource);
  }
}
