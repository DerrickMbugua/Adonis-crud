import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
  public async index ({ctx}: HttpContextContract) {
    return User.all();
  }

  // public async create ({}: HttpContextContract) {
  //   return "Create user"
  // }

  public async store ({request, response}: HttpContextContract) {
    const body = request.body();
    const user = await User.create(body);
    response.status(201);
    return user;
  }

  public async show ({ params }: HttpContextContract) {
    const item = await User.findOrFail(params.id);
    return item;
  }

  // public async edit ({}: HttpContextContract) {
  //   return "Edit user"
  // }

  public async update ({ params, request}: HttpContextContract) {
    const body = request.body();
    const user = await User.findOrFail(params.id);
    user.name = body.name;
    user.department = body.department;
    return user.save();

  }

  public async destroy ({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id);
    return user.delete();
  }
}
