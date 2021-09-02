# Default arguments
tag=latest
test=tests
ruleset=/flowlint/rulesets/securex_ruleset.yaml

.PHONY: build $(tag)
build:
	docker build -t docker.pkg.github.com/ciscoaandi/flowlint/flowlint:$(tag) .

.PHONY: lint $(tag) $(ruleset) $(workflow) $(JSON)
lint:
	${MAKE} build

	docker run -it -e SPECTRAL_JSON="${JSON}" -v ${PWD}/.flowlint.json:/.flowlint.json -v ${PWD}/$(workflow):/$(workflow) docker.pkg.github.com/ciscoaandi/flowlint/flowlint:$(tag) -r $(ruleset) $(workflow)

.PHONY: test $(tag) $(test)
test:
	docker run -it -v ${PWD}/tests:/tests -v ${PWD}/flowlint:/flowlint -e NODE_OPTIONS="--experimental-vm-modules" --entrypoint node docker.pkg.github.com/ciscoaandi/flowlint/flowlint:$(tag) node_modules/jest/bin/jest.js $(test)