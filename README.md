# ts-react-boilerplate

Pretty small boilerplate for React apps. It's built on the top of create-react-app.

It has:

- First class support for Typescript
- Pre-commit hook which checks staged files against prettier & eslint
- Polyfills for older browser (like IE11)
- Few custom rules for eslint
- Post-install hook which checks, if new versions of dependency packages are available

To start:

```bash
git clone git@github.com:grzechz/ts-react-boilerplate.git
cd ts-react-boilerplate
yarn && yarn start
```
