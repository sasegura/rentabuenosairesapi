import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody,
  response
} from '@loopback/rest';
import {Piso} from '../models';
import {PisoRepository} from '../repositories';

export class PisoController {
  constructor(
    @repository(PisoRepository)
    public pisoRepository: PisoRepository,
  ) { }

  @post('/pisos')
  @response(200, {
    description: 'Piso model instance',
    content: {'application/json': {schema: getModelSchemaRef(Piso)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Piso, {
            title: 'NewPiso',
            exclude: ['idpiso'],
          }),
        },
      },
    })
    piso: Piso,
  ): Promise<Piso> {
    return this.pisoRepository.create(piso);
  }

  @get('/pisos/count')
  @response(200, {
    description: 'Piso model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Piso) where?: Where<Piso>,
  ): Promise<Count> {
    return this.pisoRepository.count(where);
  }

  @get('/pisos')
  @response(200, {
    description: 'Array of Piso model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Piso, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Piso) filter?: Filter<Piso>,
  ): Promise<Piso[]> {
    return this.pisoRepository.find(filter);
  }

  @patch('/pisos')
  @response(200, {
    description: 'Piso PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Piso, {partial: true}),
        },
      },
    })
    piso: Piso,
    @param.where(Piso) where?: Where<Piso>,
  ): Promise<Count> {
    return this.pisoRepository.updateAll(piso, where);
  }

  @get('/pisos/{id}')
  @response(200, {
    description: 'Piso model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Piso, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Piso, {exclude: 'where'}) filter?: FilterExcludingWhere<Piso>
  ): Promise<Piso> {
    return this.pisoRepository.findById(id, filter);
  }

  @patch('/pisos/{id}')
  @response(204, {
    description: 'Piso PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Piso, {partial: true}),
        },
      },
    })
    piso: Piso,
  ): Promise<void> {
    await this.pisoRepository.updateById(id, piso);
  }

  @put('/pisos/{id}')
  @response(204, {
    description: 'Piso PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() piso: Piso,
  ): Promise<void> {
    await this.pisoRepository.replaceById(id, piso);
  }

  @del('/pisos/{id}')
  @response(204, {
    description: 'Piso DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pisoRepository.deleteById(id);
  }
}
