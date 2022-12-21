import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecordDto } from 'src/dto/create-record.dto';
import { GetAllRecordsDto } from 'src/dto/get-record.dto';
import { Records, RecordDocument } from 'src/schema/records.Schema'

@Injectable()
export class RecordService {
    constructor(@InjectModel(Records.name) private readonly recordModel: Model < RecordDocument>){}

    async create(createRecordDto: CreateRecordDto): Promise < RecordDocument > {
        const record = new this.recordModel(createRecordDto);
        return record.save();
    }

    async findAll(): Promise < RecordDocument[] > {
        return this.recordModel.find().exec();
    }
}
