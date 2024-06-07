import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://server-access-12:JcvMopY5U421gbl9@cluster0.cjjdysf.mongodb.net/tinealer_prod?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
