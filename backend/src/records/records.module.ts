import { Module } from "@nestjs/common";
import { RecordService } from "./records.service";
import { RecordController } from "./records.controller";
import { MongooseModule } from "@nestjs/mongoose";
import {Records, RecordSchema } from "../schema/records.Schema"

@Module({
    imports: [
        MongooseModule.forFeature([
            {name:Records.name, schema:RecordSchema},
        ])
    ],
    controllers: [RecordController],
    providers: [RecordService]
})

export class RecordModule {}
