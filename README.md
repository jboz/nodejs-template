# Template pour une application NodeJS - Express - Jest - Supertest

Template d'application expressjs avec typescript.

La configuration permet :

- le developpement avec auto-reload du code
- debugging de l'application
- test unitaire avec jest
- test e2e avec supertest

## Debugging

```
npm start
```

Cette commande va lancer l'application avec transpilation à la volée donc inutile de builder l'application.

Puis s'attacher avec le launcher `Attach`

<img width="230" alt="debug_launch" src="https://user-images.githubusercontent.com/928007/68161337-f89f4000-ff55-11e9-85b5-15d525b31d4c.png">

## Testing avec jest et supertest

```
npm test
```

## Explications de la configuration proposée

```
npm init
npx tsc --init .
npx jest --init .
npm install express
npm install -D @types/express @types/jest @types/supertest concurrently jest nodemon supertest ts-jest ts-node typescript
```

Scripts npm :

```json
"scripts": {
  "test": "jest --watch",
  "build": "tsc",
  "start": "nodemon --inspect src/server.ts"
},
```

_fichier package.json_

La commander `npm start` va lancer l'application en mode _transpilation automatique_ et _debuggage actif_. Il sera possible de relander la commande en tapant `rs`.

C'est l'outil _nodemon_ qui fera la _transpilation_.

Le fichier _nodemon.json_ ci-dessous permet de connecter le répertoire _src_.

```json
{
  "restartable": "rs",
  "ignore": [".git", "node_modules"],
  "verbose": true,
  "execMap": {
    "ts": "node --require ts-node/register"
  },
  "watch": ["src/"],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json,ts"
}
```

_fichier nodemon.json_

La _transpilation_ se fera via l'outil `tsc` et sa configuration :

```json
{
  "compilerOptions": {
    "target": "es2019",
    "module": "commonjs",
    "declaration": true,
    "sourceMap": true,
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*", "test/**/*"],
  "exclude": ["node_module", "dist"]
}
```

_fichier tsconfig.json_

Le launcher permet à VSCode de s'attacher au process nodemon :

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach",
      "restart": true,
      "protocol": "inspector"
    }
  ]
}
```

_fichier launcher.json_

La commande `npm test` va lancer les tests en mode watch avec l'outil _jest_ et sa configuration :

```javascript
module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  roots: ['test'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'node',
  // testRegex: '(/test/.*|(\\.|/)(test|spec))\\.tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true
};
```

_fichier jest.config.js_
