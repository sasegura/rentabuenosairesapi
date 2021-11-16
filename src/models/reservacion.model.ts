import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'reservacion'},
  },
})
export class Reservacion extends Entity {
  @property({
    type: 'number',
    required: false,
    scale: 0,
    id: 1,
    postgresql: {
      columnName: 'id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  id: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {
      columnName: 'idusuario',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  idusuario: number;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 2,
    postgresql: {
      columnName: 'idpiso',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  idpiso: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'fechaInicio',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  fechaInicio: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'fechaFin',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  fechaFin: string;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'aceptada',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  aceptada?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'cancelada',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  cancelada?: boolean;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'cantPersonas',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  cantPersonas?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'precio',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  precio?: number;

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
