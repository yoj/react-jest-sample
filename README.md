# creat-react-app, jest, enzyme setting

1. Create app

```
$ npx create-react-app my-project --template typescript
```

2. Install dependencies

```
npm i -D @types/react ts-jest jest-fetch-mock enzyme enzyme-adapter-react-16 enzyme-to-json @types/enzyme @types/enzyme-adapter-react-16 --save-exact
```

3. Include config files

Add the following to package.json
```
"jest": {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/index.tsx",
      "!src/serviceWorker.ts"
    ],
    "coveragePathIgnorePatterns": [
      "./src/*/*.types.{ts,tsx}",
      "./src/index.tsx",
      "./src/serviceWorker.ts"
    ],
    "coverageReporters": [
      "json",
      "lcov",
      "text-summary",
      "clover"
    ],
    "coverageThreshold": {
      "global": {
        "statements": 95,
        "branches": 95,
        "lines": 95,
        "functions": 95
      }
    },
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ],
    "transform": {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest"
    },
    "transformIgnorePatterns": [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$"
    ],
    "moduleNameMapper": {
      "^react-native$": "react-native-web",
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
      "src/(.*)$": "<rootDir>/src/$1"
    }
  }
```

4. update setupTest.ts

```
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new ReactSixteenAdapter() });
```

5. create test

tests/App.test.tsx

```
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
test('renders the component', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
```

6. run test

```
npm run test
```