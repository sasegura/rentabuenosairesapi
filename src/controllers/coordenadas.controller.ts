import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Coordenadas} from '../models';
import {CoordenadasRepository} from '../repositories';

export class CoordenadasController {
  constructor(
    @repository(CoordenadasRepository)
    public coordenadasRepository : CoordenadasRepository,
  ) {}

  @post('/coordenadas')
  @response(200, {
    description: 'Coordenadas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Coordenadas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coordenadas, {
            title: 'NewCoordenadas',
            exclude: ['idcoordenada'],
          }),
        },
      },
    })
    coordenadas: Omit<Coordenadas, 'idcoordenada'>,
  ): Promise<Coordenadas> {
    return this.coordenadasRepository.create(coordenadas);
  }

  @get('/coordenadas/count')
  @response(200, {
    description: 'Coordenadas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Coordenadas) where?: Where<Coordenadas>,
  ): Promise<Count> {
    return this.coordenadasRepository.count(where);
  }

  @get('/coordenadas')
  @response(200, {
    description: 'Array of Coordenadas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Coordenadas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Coordenadas) filter?: Filter<Coordenadas>,
  ): Promise<Coordenadas[]> {
    return this.coordenadasRepository.find(filter);
  }

  @patch('/coordenadas')
  @response(200, {
    description: 'Coordenadas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coordenadas, {partial: true}),
        },
      },
    })
    coordenadas: Coordenadas,
    @param.where(Coordenadas) where?: Where<Coordenadas>,
  ): Promise<Count> {
    return this.coordenadasRepository.updateAll(coordenadas, where);
  }

  @get('/coordenadas/{id}')
  @response(200, {
    description: 'Coordenadas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Coordenadas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Coordenadas, {exclude: 'where'}) filter?: FilterExcludingWhere<Coordenadas>
  ): Promise<Coordenadas> {
    return this.coordenadasRepository.findById(id, filter);
  }

  @patch('/coordenadas/{id}')
  @response(204, {
    description: 'Coordenadas PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coordenadas, {partial: true}),
        },
      },
    })
    coordenadas: Coordenadas,
  ): Promise<void> {
    await this.coordenadasRepository.updateById(id, coordenadas);
  }

  @put('/coordenadas/{id}')
  @response(204, {
    description: 'Coordenadas PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() coordenadas: Coordenadas,
  ): Promise<void> {
    await this.coordenadasRepository.replaceById(id, coordenadas);
  }

  @del('/coordenadas/{id}')
  @response(204, {
    description: 'Coordenadas DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.coordenadasRepository.deleteById(id);
  }
}
