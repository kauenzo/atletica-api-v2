# Usa Node compatível com Apple Silicon (arm64)
FROM node:20-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependência
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o resto do código
COPY . .

# Build da aplicação
RUN npm run build

# Expor porta
EXPOSE 3000

# Start
CMD ["npm", "run", "start:prod"]