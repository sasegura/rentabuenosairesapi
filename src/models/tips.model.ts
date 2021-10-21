import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'tips'}},
})
export class Tips extends Entity {
  @property({
    type: 'number',
    required: false,
    scale: 0,
    id: 1,
    postgresql: {
      columnName: 'idtips',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  idtips: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'nombre',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {
      columnName: 'idcoordenada',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  idcoordenada: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'descripcion',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  descripcion?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'idpiso',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  idpiso: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tips>) {
    super(data);
  }
}

export interface TipsRelations {
  // describe navigational properties here
}

export type TipsWithRelations = Tips & TipsRelations;
