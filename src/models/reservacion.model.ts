import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'reservacion'}}
})
export class Reservacion extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'idusuario', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idusuario: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 2,
    postgresql: {columnName: 'idpiso', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idpiso: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 3,
    postgresql: {columnName: 'idfecha', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idfecha: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Reservacion>) {
    super(data);
  }
}

export interface ReservacionRelations {
  // describe navigational properties here
}

export type ReservacionWithRelations = Reservacion & ReservacionRelations;
