install:
	npm ci

lint:
	npx eslint .

test:
	npx vitest run

test-coverage:
	npx vitest run --coverage

check:
	make lint
	make test