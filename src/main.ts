import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import 'reflect-metadata'
import * as dotenv from 'dotenv'
import { appConfig } from '@config/index'

// Load environment variables
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Configurar prefixo global para as rotas da API
  app.setGlobalPrefix(appConfig.apiPrefix)

  // Configurar CORS
  app.enableCors({
    origin: appConfig.corsOrigin,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })

  await app.listen(appConfig.port)
  console.log(
    `Application is running on: http://localhost:${appConfig.port}/${appConfig.apiPrefix}`,
  )
}

void bootstrap()
