run:
	docker-compose stop && \
	docker-compose \
		-f docker-compose.yml \
	up --build -d --remove-orphans