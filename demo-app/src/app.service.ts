import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHeavyCpuComputationResult() {
    const rounds = Number(process.env.HEAVY_COMPUTATION_ROUNDS ?? 10000000000);
    for (let i = 0; i < rounds; i++) {
      // Heavy computation
    }

    return '42\n';
  }

  getHeavyMemoryComputationResult() {
    const arr = [];
    while (true) {
      arr.push(new Array(1000000));
    }
  }
}
