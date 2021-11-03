[![published](https://static.production.devnetcloud.com/codeexchange/assets/images/devnet-published.svg)](https://developer.cisco.com/codeexchange/github/repo/CiscoAandI/flowlint)

# Flowlint

Flowlint is a [Cisco SecureX Orchestrator](https://security.cisco.com/) workflow linter for secureX workflows, atomic actions, and subworkflows. It contains several best practices for linting workflows based on a set of common-sense and learned rules.

# Example
![Lint Example](docs/images/example_lint_output.png)

# Installation & Usage

    docker run -it -v <PATH TO WORKFLOW.JSON FILE TO LINT>:/workflow.json docker.pkg.github.com/ciscoaandi/flowlint/flowlint:1.0.0 /workflow.json

For example:

    docker run -it -v my_workflow.json:/workflow.json docker.pkg.github.com/ciscoaandi/flowlint/flowlint:1.0.0 /workflow.json

# Documentation

See our [Documentation Server](https://ciscoaandi.github.io/flowlint) for more information.
