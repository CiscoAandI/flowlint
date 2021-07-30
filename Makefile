# Default arguments
tag=latest
test=tests
ruleset=/flowlint/rulesets/securex_ruleset

.PHONY: build $(tag)
build:
	docker build -t docker.pkg.github.com/ciscoaandi/flowlint/flowlint:$(tag) .

.PHONY: lint $(tag) $(ruleset) $(workflow)
lint:
	${MAKE} build

	docker run -it -v ${PWD}/$(workflow):/workflows docker.pkg.github.com/ciscoaandi/flowlint/flowlint:$(tag) -r $(ruleset) /workflows

.PHONY: test $(tag) $(test)
test:
	docker run -it -v ${PWD}/tests:/tests -v ${PWD}/flowlint:/flowlint -e NODE_OPTIONS="--experimental-vm-modules" --entrypoint node docker.pkg.github.com/ciscoaandi/flowlint/flowlint:$(tag) node_modules/jest/bin/jest.js $(test)