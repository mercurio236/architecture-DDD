module.exports = {
    // outras configurações...
    "overrides": [
      {
        "files": ["**/*.ts"],
        "parser": "@typescript-eslint/parser",
        "extends": [
          "eslint:recommended",
          "plugin:@typescript-eslint/recommended"
        ],
        "plugins": ["@typescript-eslint"],
        "rules": {
          // suas regras específicas...
        }
      }
    ]
  }
  