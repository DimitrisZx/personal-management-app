import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';
import { Goal } from 'src/types/goals';

@Injectable()
export class GoalsService {
  private basePath = path.resolve(__dirname, '../../data/goals');

  async createGoal(data: Goal): Promise<void> {
    const filePath = path.join(this.basePath, `${data.id}.json`);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  }

  async getGoals(): Promise<Goal[]> {
    const files = await fs.readdir(this.basePath);
    return Promise.all(
      files.map((file) =>
        fs.readFile(path.join(this.basePath, file), 'utf-8').then(JSON.parse),
      ),
    );
  }
}
