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
import {Reservacion} from '../models';
import {ReservacionRepository} from '../repositories';

export class ReservacionController {
  constructor(
    @repository(ReservacionRepository)
    public reservacionRepository : ReservacionRepository,
  ) {}

  @post('/reservacions')
  @response(200, {
    description: 'Reservacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Reservacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reservacion, {
            title: 'NewReservacion',
            exclude: ['id'],
          }),
        },
      },
    })
    reservacion: Omit<Reservacion, 'id'>,
  ): Promise<Reservacion> {
    return this.reservacionRepository.create(reservacion);
  }

  @get('/reservacions/count')
  @response(200, {
    description: 'Reservacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Reservacion) where?: Where<Reservacion>,
  ): Promise<Count> {
    return this.reservacionRepository.count(where);
  }

  @get('/reservacions')
  @response(200, {
    description: 'Array of Reservacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Reservacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Reservacion) filter?: Filter<Reservacion>,
  ): Promise<Reservacion[]> {
    return this.reservacionRepository.find(filter);
  }

  @patch('/reservacions')
  @response(200, {
    description: 'Reservacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reservacion, {partial: true}),
        },
      },
    })
    reservacion: Reservacion,
    @param.where(Reservacion) where?: Where<Reservacion>,
  ): Promise<Count> {
    return this.reservacionRepository.updateAll(reservacion, where);
  }

  @get('/reservacions/{id}')
  @response(200, {
    description: 'Reservacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Reservacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Reservacion, {exclude: 'where'}) filter?: FilterExcludingWhere<Reservacion>
  ): Promise<Reservacion> {
    return this.reservacionRepository.findById(id, filter);
  }

  @patch('/reservacions/{id}')
  @response(204, {
    description: 'Reservacion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reservacion, {partial: true}),
        },
      },
    })
    reservacion: Reservacion,
  ): Promise<void> {
    await this.reservacionRepository.updateById(id, reservacion);
  }

  @put('/reservacions/{id}')
  @response(204, {
    description: 'Reservacion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() reservacion: Reservacion,
  ): Promise<void> {
    await this.reservacionRepository.replaceById(id, reservacion);
  }

  @del('/reservacions/{id}')
  @response(204, {
    description: 'Reservacion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reservacionRepository.deleteById(id);
  }
}
