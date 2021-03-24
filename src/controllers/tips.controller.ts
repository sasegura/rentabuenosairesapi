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
import {Tips} from '../models';
import {TipsRepository} from '../repositories';

export class TipsController {
  constructor(
    @repository(TipsRepository)
    public tipsRepository : TipsRepository,
  ) {}

  @post('/tips')
  @response(200, {
    description: 'Tips model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tips)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tips, {
            title: 'NewTips',
            exclude: ['idtips'],
          }),
        },
      },
    })
    tips: Omit<Tips, 'idtips'>,
  ): Promise<Tips> {
    return this.tipsRepository.create(tips);
  }

  @get('/tips/count')
  @response(200, {
    description: 'Tips model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tips) where?: Where<Tips>,
  ): Promise<Count> {
    return this.tipsRepository.count(where);
  }

  @get('/tips')
  @response(200, {
    description: 'Array of Tips model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tips, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tips) filter?: Filter<Tips>,
  ): Promise<Tips[]> {
    return this.tipsRepository.find(filter);
  }

  @patch('/tips')
  @response(200, {
    description: 'Tips PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tips, {partial: true}),
        },
      },
    })
    tips: Tips,
    @param.where(Tips) where?: Where<Tips>,
  ): Promise<Count> {
    return this.tipsRepository.updateAll(tips, where);
  }

  @get('/tips/{id}')
  @response(200, {
    description: 'Tips model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tips, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tips, {exclude: 'where'}) filter?: FilterExcludingWhere<Tips>
  ): Promise<Tips> {
    return this.tipsRepository.findById(id, filter);
  }

  @patch('/tips/{id}')
  @response(204, {
    description: 'Tips PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tips, {partial: true}),
        },
      },
    })
    tips: Tips,
  ): Promise<void> {
    await this.tipsRepository.updateById(id, tips);
  }

  @put('/tips/{id}')
  @response(204, {
    description: 'Tips PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tips: Tips,
  ): Promise<void> {
    await this.tipsRepository.replaceById(id, tips);
  }

  @del('/tips/{id}')
  @response(204, {
    description: 'Tips DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tipsRepository.deleteById(id);
  }
}
