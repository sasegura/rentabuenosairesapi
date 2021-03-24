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
import {Destino} from '../models';
import {DestinoRepository} from '../repositories';

export class DestinoController {
  constructor(
    @repository(DestinoRepository)
    public destinoRepository : DestinoRepository,
  ) {}

  @post('/destinos')
  @response(200, {
    description: 'Destino model instance',
    content: {'application/json': {schema: getModelSchemaRef(Destino)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Destino, {
            title: 'NewDestino',
            exclude: ['id'],
          }),
        },
      },
    })
    destino: Omit<Destino, 'id'>,
  ): Promise<Destino> {
    return this.destinoRepository.create(destino);
  }

  @get('/destinos/count')
  @response(200, {
    description: 'Destino model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Destino) where?: Where<Destino>,
  ): Promise<Count> {
    return this.destinoRepository.count(where);
  }

  @get('/destinos')
  @response(200, {
    description: 'Array of Destino model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Destino, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Destino) filter?: Filter<Destino>,
  ): Promise<Destino[]> {
    return this.destinoRepository.find(filter);
  }

  @patch('/destinos')
  @response(200, {
    description: 'Destino PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Destino, {partial: true}),
        },
      },
    })
    destino: Destino,
    @param.where(Destino) where?: Where<Destino>,
  ): Promise<Count> {
    return this.destinoRepository.updateAll(destino, where);
  }

  @get('/destinos/{id}')
  @response(200, {
    description: 'Destino model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Destino, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Destino, {exclude: 'where'}) filter?: FilterExcludingWhere<Destino>
  ): Promise<Destino> {
    return this.destinoRepository.findById(id, filter);
  }

  @patch('/destinos/{id}')
  @response(204, {
    description: 'Destino PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Destino, {partial: true}),
        },
      },
    })
    destino: Destino,
  ): Promise<void> {
    await this.destinoRepository.updateById(id, destino);
  }

  @put('/destinos/{id}')
  @response(204, {
    description: 'Destino PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() destino: Destino,
  ): Promise<void> {
    await this.destinoRepository.replaceById(id, destino);
  }

  @del('/destinos/{id}')
  @response(204, {
    description: 'Destino DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.destinoRepository.deleteById(id);
  }
}
