# Sudoo-React-Hooks

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-React-Hooks/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-React-Hooks/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-React-Hooks/branch/main/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-React-Hooks)
[![npm version](https://badge.fury.io/js/%40sudoo%2Freact-hooks.svg)](https://badge.fury.io/js/%40sudoo%2Freact-hooks)
[![downloads](https://img.shields.io/npm/dm/@sudoo/react-hooks.svg)](https://www.npmjs.com/package/@sudoo/react-hooks)

React Hooks

## Install

```sh
yarn add @sudoo/react-hooks
# Or
npm install @sudoo/react-hooks --save
```

## Usage

```tsx
import * as React from "react";
import { OpenStates, useOpen } from "@sudoo/react-hooks";

const Component: React.FC = () => {

    const open: OpenStates = useOpen();
}
```
