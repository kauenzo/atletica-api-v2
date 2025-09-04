# Subir containers
up:
	docker-compose up -d --build

# Derrubar containers
down:
	docker-compose down

# Logs da API
logs-api:
	docker-compose logs -f api

# Logs do DB
logs-db:
	docker-compose logs -f db

# Entrar no container do DB
db-shell:
	docker exec -it atletica_db psql -U postgres -d atletica

