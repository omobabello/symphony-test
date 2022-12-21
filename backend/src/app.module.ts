import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordModule } from './records/records.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.qnyobhj.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forRoot('mongodb://localhost:27017/Record'),
    RecordModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
