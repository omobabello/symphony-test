import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { RecordService } from './records.service';
import { CreateRecordDto } from 'src/dto/create-record.dto';

@Controller('record')
export class RecordController {
    constructor(private readonly recordService: RecordService){}

    @Post()
    create(@Body() createRecordDto: CreateRecordDto){
        return this.recordService.create(createRecordDto);
    }

    @Get()
    findAll(){
        return this.recordService.findAll();
    }
}