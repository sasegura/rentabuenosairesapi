import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, postgresql: {schema: 'public', table: 'fecha'}}})
export class Fecha extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'idfecha', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idfecha: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'dia', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  dia: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'mes', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  mes: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'anno', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  anno: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Fecha>) {
    super(data);
  }
}

export interface FechaRelations {
  // describe navigational properties here
}

export type FechaWithRelations = Fecha & FechaRelations;
