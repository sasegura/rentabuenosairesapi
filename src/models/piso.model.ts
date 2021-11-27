import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'piso'}},
})
export class Piso extends Entity {
  @property({
    type: 'number',
    required: false,
    scale: 0,
    id: 1,
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
      columnName: 'direccion',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  direccion?: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {
      columnName: 'iddestino',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  iddestino: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'cantpersonas',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  cantpersonas?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'metroscuadrados',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  metroscuadrados?: number;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'wifi',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  wifi?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'tvcable',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  tvcable?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'aireacondicionado',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  aireacondicionado?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'calefaccion',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  calefaccion?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'pool',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  pool?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'Barbecue',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  Barbecue?: boolean;
  
  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'canthabitaciones',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  canthabitaciones?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'cantbannos',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  cantbannos?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {
      columnName: 'precio',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
    },
  })
  precio?: number;

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
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'nombreI',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  nombreI: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'moneda',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  moneda?: string;

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
    postgresql: {
      columnName: 'descripcionI',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  descripcionI?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'latitud',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  latitud?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'longitud',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  longitud?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'diasReservados',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  diasReservados: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'diasReservadosEntrada',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  diasReservadosEntrada: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'diasReservadosSalida',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  diasReservadosSalida: string;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'tendederoRopa',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  tendederoRopa?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'patioBalcon',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  patioBalcon?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'gimnasio',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  gimnasio?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'sauna',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  sauna?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'productosLimpieza',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  productosLimpieza?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'plancha',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  plancha?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'lavasecadora',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  lavasecadora?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'lavadora',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  lavadora?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'tv',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  tv?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'piscina',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  piscina?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'cocina',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  cocina?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'jacuzzi',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  jacuzzi?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'secadorPelo',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  secadorPelo?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'platosCubiertos',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  platosCubiertos?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'zonaTrabajar',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  zonaTrabajar?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'utensiliosCocina',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  utensiliosCocina?: boolean;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'serviciosAdicionales',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  serviciosAdicionales: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'estacionamientoInstalaciones',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  estacionamientoInstalaciones: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'cocinaComedor',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  cocinaComedor: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'internetOficina',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  internetOficina: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'seguridadHogar',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  seguridadHogar: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'calefaccionRefrigeracion',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  calefaccionRefrigeracion: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'entretenimiento',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  entretenimiento: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'paraFamilias',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  paraFamilias: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'dormitorio',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  dormitorio: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'banno',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  banno: string;

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
