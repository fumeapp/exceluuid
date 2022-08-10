excel-uuids
=================

generate an excel file of random v4 uuids

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g exceluuid
$ exceluuid COMMAND
running command...
$ exceluuid (--version)
exceluuid/0.0.0 darwin-arm64 node-v16.16.0
$ exceluuid --help [COMMAND]
USAGE
  $ exceluuid COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`exceluuid generate PREFIX AMOUNT`](#exceluuid-generate-prefix-amount)
* [`exceluuid help [COMMAND]`](#exceluuid-help-command)

## `exceluuid generate PREFIX AMOUNT`

Generate an excel sheet

```
USAGE
  $ exceluuid generate [PREFIX] [AMOUNT]

ARGUMENTS
  PREFIX  prefix before UUID
  AMOUNT  Amount of lines in the file

DESCRIPTION
  Generate an excel sheet

EXAMPLES
  $ oex generate https://example.com/uuid/ output 1000
```

_See code: [dist/commands/generate/index.ts](https://github.com/fumeapp/exceluuid/blob/v0.0.0/dist/commands/generate/index.ts)_

## `exceluuid help [COMMAND]`

Display help for exceluuid.

```
USAGE
  $ exceluuid help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for exceluuid.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_
<!-- commandsstop -->
