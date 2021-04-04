module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "google"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "indent":[
            "error",
            4
        ],
        "no-unused-vars": 1,
        "no-use-before-define": 1,
        "no-redeclare": 1,
        "no-console":0,
    }
};
