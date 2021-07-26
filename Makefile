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
	node --experimental-vm-modules node_modules/jest/bin/jest.js $(test)