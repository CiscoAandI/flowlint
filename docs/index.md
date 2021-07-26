# Overview

Flowlint was created as part of an internal Cisco project to be used to do basic linting on [Cisco SecureX Orchestrator](https://securex.cisco.com) workflows. It can be used to check various rules against these workflows. It was created using [Spectral Lint](https://www.github.com/stoplight/spectral) and can be extended easily as such. Each workflow rule was learned over time and thus we wish to pass this learned information on to others.

# Getting Started

## Installation

Flowlint is a fully dockerized linter that can be used within the docker container in various CI pipelines or locally. It was designed in pure javascript and also can therefore be run in a browser. To install flowlint, simply download the docker container as shown:
=== "Install Only"
    ```
    docker pull ghcr.io/ciscoaandi/flowlint:${VERSION}
    ```

    Where `${VERSION}` is the version you would like to use. See [Flowlint Packages](https://github.com/CiscoAandI/flowlint/pkgs/container/flowlint) for a list of available Flowlint versions.
=== "Install & Run"
    ```
    docker run -it -v ${PATH_TO_WORKFLOW_JSON}:/workflow.json ghcr.io/ciscoaandi/flowlint:${VERSION} /workflow.json
    ```

    Where `${VERSION}` is the version you would like to use. See [Flowlint Packages](https://github.com/CiscoAandI/flowlint/pkgs/container/flowlint) for a list of available Flowlint versions.

    and `${PATH_TO_WORKFLOW_JSON}` is the filepath to the workflow.json file you would like to lint.

???+ Example
    ```
    docker pull ghcr.io/ciscoaandi/flowlint:1.0.0
    ```

## Usage

To lint a workflow, simply use the following command:

    docker run -it -v ${PATH_TO_WORKFLOW_JSON}:/workflow.json ghcr.io/ciscoaandi/flowlint:1.0.0 /workflow.json

Where `${PATH_TO_WORKFLOW_JSON}` is the filepath to the workflow.json file you would like to lint.

???+ Example
    ```
    docker run -it -v my_workflow.json:/workflow.json ghcr.io/ciscoaandi/flowlint:1.0.0 /workflow.json
    ```