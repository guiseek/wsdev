import { Controller, Get } from '@nestjs/common';
import { UserRepository } from '@wsdev/account/data-source';

@Controller('users')
export class AccountResourceUserController {
  constructor(private readonly repository: UserRepository) {}

  @Get('')
  findAll() {
    return this.repository.find();
  }
}
