## NOTE: This project is setup using create-react-app biolerplate

-- npm install then,
1. npm start - run project locally
2. npm run build - create a build for live/development/staging environment

## Branch

1. Master - used to keep deployed code
2. develop - used for development of code
### Environment files
1. .env: Default.
2. .env.local: Local overrides. This file is loaded for all environments except test.
3. .env.development, .env.test, .env.production: Environment-specific settings.
4. .env.development.local, .env.test.local, .env.production.local: Local overrides of environment-specific settings.

## Modules and packages being used

1. bootstrap (scss is used)
2. husky and lint-staged (formatting before commit to github)
3. node-sass (scss compiler)
4. prettier (same format for all developers)
5. react-router-dom (being used for setting routes in the react app)
6. npm install @material-ui/core (Material UI componets)
5. npm i @material-ui/icons (Material icons)

## React-Redux already setup
- You can use "commonReducers" to get all states

##### NOTE: Linting and formating everything is already being setup in the project