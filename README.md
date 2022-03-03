# Suggestion CLI

* [Overview](#overview)
* [Compiling the CLI](#compiling-the-cli)
* [Commands](#commands)
    * [Movie](#movie)
    * [Show](#show)
    * [Song](#song)

## Overview

Suggestion CLI is a tool for finding something enertaining to watch or listen to.

> This project has not been published to the npm registry. It was created
primarily for the author as a reference implimentaion of a CLI built using
[commander](https://www.npmjs.com/package/commander) that uses 
[axios](https://www.npmjs.com/package/axios) to call APIs.

## Compiling the CLI

To compile the CLI run the following command from root directory of the project:

```bash
npm run compile
```

This will output to the `dist` directory.

## Commands

To run a command fist compile the application, then from the root directory of
the project:
```bash
node dist/suggest.js <command> <...options>
```

### Movie

The `suggest movie` command has one required option, and two optional options.

#### Required Option: 
Short form `-s`, long form `--service`, accepted values are
'netflix','hulu', 'amazon', 'hbo'. This option indicates which streaming
service to get a random movie from.

#### Option:
Short form `-g`, long form `--genre`, accepted values are 'drama', 'action',
'adventure', 'animation', 'bio', 'biopic', 'biography', 'comedy', 'crime',
'doc', 'documetary', 'fantasy', 'history', 'horror', 'mystery', 'scifi',
'sport', 'thriller', 'lgbt', 'lgbtq', 'lgbtq+', 'anime', 'cult', 'indie',
'independent'. This option indicates which genre the random movie should be.

#### Option:
Short form `-d`, long form `--debug`. If present The full response from the
Reelgood API is printed to the console.

#### Example:
```bash
node dist/suggest.js movie -s netflix -g action
```

### Show

The `suggest show` command has one required option, and two optional options.

#### Required Option: 
Short form `-s`, long form `--service`, accepted values are
'netflix','hulu', 'amazon', 'hbo'. This option indicates which streaming
service to get a random movie from.

#### Option:
Short form `-g`, long form `--genre`, accepted values are 'drama', 'action',
'adventure', 'animation', 'bio', 'biopic', 'biography', 'comedy', 'crime',
'doc', 'documetary', 'fantasy', 'history', 'horror', 'mystery', 'scifi',
'sport', 'thriller', 'lgbt', 'lgbtq', 'lgbtq+', 'anime', 'cult', 'indie',
'independent'. This option indicates which genre the random movie should be.

#### Option:
Short form `-d`, long form `--debug`. If present The full response from the
Reelgood API is printed to the console.

#### Example:
```bash
node dist/suggest.js show -s netflix -g indie
```

### Song

The `suggest song` command has one optional option.

#### Option:
Short form `-d`, long form `--debug`. If present The full response from the
Reelgood API is printed to the console.

#### Example:
```bash
node dist/suggest.js song
```
