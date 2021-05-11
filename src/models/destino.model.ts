import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'destino'}}
})
export class Destino extends Entity {
  @property({
    type: 'number',
    required: false,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'iddestino', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  iddestino: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'nombre', dataType: '"char"', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombre?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Destino>) {
    super(data);
  }
}

export interface DestinoRelations {
  // describe navigational properties here
}

export type DestinoWithRelations = Destino & DestinoRelations;
