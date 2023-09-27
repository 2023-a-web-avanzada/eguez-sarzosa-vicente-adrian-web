import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LibroEntity} from "./libro/libro.entity";
import {LibroModule} from "./libro/libro.module";
import {AutorEntity} from "./autor/autor.entity";
import {AutorModule} from "./autor/autor.module";

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: './bdd/bdd.sqlite',
        entities: [
            LibroEntity,
            AutorEntity,
        ],
        synchronize: true,
        dropSchema: false,
      }),
      LibroModule,
      AutorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
