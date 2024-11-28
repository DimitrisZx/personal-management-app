import { Body, Controller, Get, Post } from '@nestjs/common';
import { Goal } from 'src/types/goals';
import { GoalsService } from './goals.service';

@Controller('goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Post()
  async createGoal(@Body() goal: Goal) {
    await this.goalsService.createGoal(goal);
    return { message: 'Goal created' };
  }

  @Get()
  async getGoals(): Promise<Goal[]> {
    return this.goalsService.getGoals();
  }
}
