import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { UserRepository } from '@wsdev/account/data-source';

@Controller('users')
export class AccountResourceUserController {
  constructor(private readonly repository: UserRepository) {
    console.log(repository);
  }

  @Get('')
  findAll() {
    return this.repository.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.repository.findOne(id);
    } catch {
      throw new BadRequestException('Not Found');
    }
  }
}
