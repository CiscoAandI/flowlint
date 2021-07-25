.PHONY: build $(tag)
build:
	docker build -t flowlint:$(tag) .

.PHONY: lint $(tag) $(workflow)
lint:
	${MAKE} build

	docker run -it -v ${PWD}/$(workflow):/workflows/$(workflow) flowlint:$(tag) --ruleset /flowlint/rulesets/securex_ruleset.yaml /workflows/$(workflow)

.PHONY: test $(tag)
test:
	docker run -it -v ${PWD}/tests:/tests -v ${PWD}/lib:/flowlint -e NODE_OPTIONS="--experimental-vm-modules" --entrypoint node flowlint:$(tag) node_modules/jest/bin/jest.js