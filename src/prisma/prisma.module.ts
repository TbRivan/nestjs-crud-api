import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// use global so this service can be used anywhere, without imported in another module
@Global()
@Module({
  providers: [PrismaService],
  // exports service
  exports: [PrismaService],
})
export class PrismaModule {}
