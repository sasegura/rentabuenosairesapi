import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'coordenadas'}}
})
export class Coordenadas extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'idcoordenada', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idcoordenada: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'latitud', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  latitud?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'longitud', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  longitud?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Coordenadas>) {
    super(data);
  }
}

export interface CoordenadasRelations {
  // describe navigational properties here
}

export type CoordenadasWithRelations = Coordenadas & CoordenadasRelations;
