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
import {Imagen} from '../models';
import {ImagenRepository} from '../repositories';

export class ImagenController {
  constructor(
    @repository(ImagenRepository)
    public imagenRepository: ImagenRepository,
  ) { }

  @post('/imagen')
  @response(200, {
    description: 'Imagen model instance',
    content: {'application/json': {schema: getModelSchemaRef(Imagen)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Imagen, {
            title: 'NewImagen',
            exclude: ['id'],
          }),
        },
      },
    })
    imagen: Omit<Imagen, 'id'>,
  ): Promise<Imagen> {
    return this.imagenRepository.create(imagen);
  }

  @get('/imagen/count')
  @response(200, {
    description: 'Imagen model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Imagen) where?: Where<Imagen>,
  ): Promise<Count> {
    return this.imagenRepository.count(where);
  }

  @get('/imagen')
  @response(200, {
    description: 'Array of Imagen model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Imagen, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Imagen) filter?: Filter<Imagen>,
  ): Promise<Imagen[]> {
    return this.imagenRepository.find(filter);
  }

  @patch('/imagen')
  @response(200, {
    description: 'Imagen PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Imagen, {partial: true}),
        },
      },
    })
    imagen: Imagen,
    @param.where(Imagen) where?: Where<Imagen>,
  ): Promise<Count> {
    return this.imagenRepository.updateAll(imagen, where);
  }

  @get('/imagen/{id}')
  @response(200, {
    description: 'Imagen model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Imagen, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Imagen, {exclude: 'where'}) filter?: FilterExcludingWhere<Imagen>
  ): Promise<Imagen> {
    return this.imagenRepository.findById(id, filter);
  }

  @patch('/imagen/{id}')
  @response(204, {
    description: 'Imagen PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Imagen, {partial: true}),
        },
      },
    })
    imagen: Imagen,
  ): Promise<void> {
    await this.imagenRepository.updateById(id, imagen);
  }

  @put('/imagen/{id}')
  @response(204, {
    description: 'Imagen PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() imagen: Imagen,
  ): Promise<void> {
    await this.imagenRepository.replaceById(id, imagen);
  }

  @del('/imagen/{id}')
  @response(204, {
    description: 'Imagen DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.imagenRepository.deleteById(id);
  }
}
