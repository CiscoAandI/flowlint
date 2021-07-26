# Default arguments
tag=latest
test=tests

.PHONY: build $(tag)
build:
	docker build -t ghcr.io/ciscoaandi/flowlint:$(tag) .

.PHONY: lint $(tag) $(workflow)
lint:
	${MAKE} build

	docker run -it -v ${PWD}/$(workflow):/workflows ghcr.io/ciscoaandi/flowlint:$(tag) /workflows

.PHONY: test $(tag) $(test)
test:
	docker run -it -v ${PWD}/tests:/tests -v ${PWD}/lib:/flowlint -e NODE_OPTIONS="--experimental-vm-modules" --entrypoint node ghcr.io/ciscoaandi/flowlint:$(tag) node_modules/jest/bin/jest.js $(test)