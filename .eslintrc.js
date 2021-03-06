// module.exports = {
//   root: true,
//   extends: ['react-native-wcandillon', 'prettier'],
//   parser: "@typescript-eslint/parser",
//   ignorePatterns: ['Plugin', '__mocks__'],
//   plugins: [
//     'react-hooks',
//     'simple-import-sort',
//     'eslint-plugin-import',
//     'react'
//   ],
//   rules: {
//     semi: 0,
//     "simple-import-sort/imports": 0,
//     "simple-import-sort/exports": 0,
//     "import/no-anonymous-default-export": 0,
//     'react/jsx-no-bind': [
//       'warn',
//       {
//         ignoreDOMComponents: false,
//         ignoreRefs: false,
//         allowArrowFunctions: true,
//         allowFunctions: false,
//         allowBind: false,
//       },
//     ],
//     'import/order': ['error', { 'newlines-between': 'never' }],
//     'react-hooks/exhaustive-deps': 'warn',
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     'import/extensions': 0,
//     '@typescript-eslint/no-var-requires': 0,
//     '@typescript-eslint/no-explicit-any': 0,
//     'ban-ts-ignore': 0,
//     '@typescript-eslint/no-non-null-assertion': 0,
//     '@typescript-eslint/ban-ts-comment': 0,
//     '@typescript-eslint/ban-ts-ignore': 0,
//     "@typescript-eslint/no-empty-function": 0,
//     '@typescript-eslint/no-use-before-define': 0,
//     '@typescript-eslint/explicit-member-accessibility': 0,
//     'camelcase': 'off',
//     '@typescript-eslint/camelcase': 0,
//     'eslint no-shadow': 0,
//     "comma-dangle": 0,
//     "react/jsx-uses-vars": 1,
//     "react/display-name": 1,
//     "no-unused-vars": "warn",
//     "no-console": 1,
//     "no-unexpected-multiline": "warn",
//     "no-undef": "off",
//     "max-len": [2, 120, 4, { "ignoreUrls": true }],
//     "no-irregular-whitespace": "off",
//     "react/prop-types": "off",
//     "no-console": "off",
//     "no-empty": "off",
//     "no-useless-escape": "off",
//     "no-extra-boolean-cast": "off",
//     "react/display-name": "off",
//     "no-empty-interface": 0,
//     '@typescript-eslint/prefer-interface': 0,
//     "quotes": ["error", "single", { "allowTemplateLiterals": true }],
//   },
//   settings: {
//     parserOptions: {
//       ecmaFeatures: {
//         jsx: true,
//       },
//     },
//   },
// };

module.exports = {
  root: true,
  extends: '@react-native-community',
  "extends": "rallycoding",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react"
  ],
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "comma-dangle": 0,
    "react/jsx-uses-vars": 1,
    "react/display-name": 1,
    "no-unused-vars": "warn",
    "no-console": 1,
    "no-unexpected-multiline": "warn",
    "no-undef": "off",
    "max-len": [2, 120, 4, { "ignoreUrls": true }],
    "no-irregular-whitespace": "off",
    "react/prop-types": "off",
    "no-console": "off",
    "no-empty": "off",
    "no-useless-escape": "off",
    "no-extra-boolean-cast": "off",
    "react/display-name": "off"
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "15.6.1"
    }
  }
};
