# sls-component-silent-fail-example

Reproduces a basic silent fail in a serverless component

## Install

```bash
npm install
```

## Reproduce

```bash
serverless deploy
```

Expected : the process terminates with non-zero code
Actual : the process terminates with zero code
