import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, postgresql: {schema: 'public', table: 'piso'}}})
export class Piso extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'idpiso', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  idpiso: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'direccion', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  direccion?: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'iddestino', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  iddestino: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'cantpersonas', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  cantpersonas?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'metroscuadrados', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  metroscuadrados?: number;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'wifi', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  wifi?: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'tvcable', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  tvcable?: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'aireacondicionado', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  aireacondicionado?: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'calefaccion', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  calefaccion?: boolean;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'canthabitaciones', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  canthabitaciones?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'cantbannos', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  cantbannos?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'idcoordenadas', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  idcoordenadas?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Piso>) {
    super(data);
  }
}

export interface PisoRelations {
  // describe navigational properties here
}

export type PisoWithRelations = Piso & PisoRelations;
