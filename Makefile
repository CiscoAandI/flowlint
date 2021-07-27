# Default arguments
tag=latest
test=tests

.PHONY: build $(tag)
build:
	docker build -t docker.pkg.github.com/ciscoaandi/flowlint/flowlint:$(tag) .

.PHONY: lint $(tag) $(workflow)
lint:
	${MAKE} build

	docker run -it -v ${PWD}/$(workflow):/workflows docker.pkg.github.com/ciscoaandi/flowlint/flowlint:$(tag) /workflows

.PHONY: test $(tag) $(test)
test:
	docker run -it -v ${PWD}/tests:/tests -v ${PWD}/flowlint:/flowlint -e NODE_OPTIONS="--experimental-vm-modules" --entrypoint node docker.pkg.github.com/ciscoaandi/flowlint/flowlint:$(tag) node_modules/jest/bin/jest.js $(test)