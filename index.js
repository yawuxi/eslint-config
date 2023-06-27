export default {
  ignorePatterns: ["node_modules", "dist"],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  rules: {
    "array-callback-return": "warn",
    "constructor-super": "error",
    "for-direction": "error",
    "getter-return": "error",
    "no-setter-return": "error",
    "no-async-promise-executor": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-condition": [
      "error",
      {
        checkLoops: false,
      },
    ],
    "constant-binary-expression": "error",
    "no-control-regex": "error",
    "no-regex-spaces": "error",
    "no-debugger": "error",
    "no-alert": "error",
    "no-console": [
      "warn",
      {
        allow: ["error"],
      },
    ],
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-lonely-if": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": ["error", "both"],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    "no-self-assign": "error",
    "no-sparse-arrays": "error",
    "no-this-before-super": "error",
    "no-global-assign": "error",
    "no-redeclare": "error",
    "no-shadow": [
      "error",
      {
        builtinGlobals: true,
        hoist: "all",
      },
    ],
    "no-extend-native": "error",
    "no-shadow-restricted-names": "error",
    "no-unexpected-multiline": "error",
    semi: "error",
    "semi-style": "error",
    "no-extra-semi": "error",
    "space-unary-ops": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": [
      "error",
      {
        disallowArithmeticOperators: true,
      },
    ],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        caughtErrors: "none",
      },
    ],
    "no-useless-backreference": "error",
    "use-isnan": [
      "error",
      {
        enforceForIndexOf: true,
      },
    ],
    "valid-typeof": [
      "error",
      {
        requireStringLiterals: false,
      },
    ],
    "no-case-declarations": "error",
    "no-var": "error",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "no-extra-boolean-cast": [
      "error",
      {
        enforceForLogicalOperands: true,
      },
    ],
    "no-nonoctal-decimal-escape": "error",
    "no-octal-escape": "error",
    "no-octal": "error",
    "no-unused-labels": "error",
    "no-extra-label": "error",
    "no-label-var": "error",
    "no-useless-catch": "warn",
    "no-useless-rename": "error",
    "no-useless-escape": "error",
    "no-with": "error",
    "require-yield": "error",
    "require-await": "error",
    "no-await-in-loop": "error",
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unreachable-loop": "error",
    "no-unused-private-class-members": "error",
    "no-use-before-define": [
      "error",
      {
        functions: false,
      },
    ],
    "no-dupe-args": "error",
    "no-ex-assign": "error",
    "accessor-pairs": "error",
    "arrow-body-style": ["error", "as-needed"],
    camelcase: [
      "error",
      {
        allow: ["^UNSAFE_"],
      },
    ],
    complexity: [
      "error",
      {
        max: 2,
      },
    ],
    curly: "error",
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    eqeqeq: "error",
    "guard-for-in": "error",
    "id-length": [
      "error",
      {
        min: 2,
      },
    ],
    "logical-assignment-operators": "error",
    "max-depth": ["error", 3],
    "max-lines": [
      "error",
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "max-lines-per-function": [
      "error",
      {
        max: 35,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "max-nested-callbacks": [
      "error",
      {
        max: 5,
      },
    ],
    "max-statements": [
      "error",
      {
        max: 10,
      },
    ],
    "multiline-comment-style": ["warn", "bare-block"],
    "no-new-wrappers": "warn",
    "no-bitwise": "warn",
    "no-else-return": [
      "error",
      {
        allowElseIf: false,
      },
    ],
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-implicit-coercion": "error",
    "no-inline-comments": "error",
    "no-invalid-this": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "error",
    "no-mixed-operators": "error",
    "no-multi-assign": [
      "error",
      {
        ignoreNonDeclaration: true,
      },
    ],
    "no-multi-str": "error",
    "no-new": "error",
    "no-param-reassign": [
      "error",
      {
        props: true,
      },
    ],
    "no-return-assign": ["error", "always"],
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-unneeded-ternary": [
      "error",
      {
        defaultAssignment: false,
      },
    ],
    "no-unused-expressions": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "object-shorthand": ["error", "always"],
    "operator-assignment": ["error", "always"],
    "prefer-arrow-callback": "warn",
    "prefer-const": "error",
    "prefer-destructuring": "warn",
    "prefer-object-spread": "warn",
    "prefer-regex-literals": "warn",
    "prefer-spread": "warn",
    "prefer-template": "error",
    "spaced-comment": ["error", "never"],
    "array-bracket-newline": [
      "error",
      {
        multiline: true,
        minItems: 3,
      },
    ],
    "array-element-newline": [
      "error",
      {
        multiline: true,
        minItems: 3,
      },
    ],
    "array-bracket-spacing": "error",
    "arrow-spacing": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "always",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "dot-location": ["error", "property"],
    "eol-last": ["error", "always"],
    "func-call-spacing": "error",
    "function-call-argument-newline": ["error", "always"],
    "function-paren-newline": [
      "error",
      {
        minItems: 3,
      },
    ],
    "implicit-arrow-linebreak": "error",
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 2,
        MemberExpression: 1,
        FunctionExpression: {
          body: 1,
          parameters: 2,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: true,
        ignoreComments: false,
      },
    ],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "max-statements-per-line": "error",
    "newline-per-chained-call": [
      "error",
      {
        ignoreChainWithDepth: 1,
      },
    ],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "object-curly-newline": [
      "error",
      {
        ObjectPattern: {
          multiline: true,
          minProperties: 3,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": "error",
    "operator-linebreak": ["error", "none"],
    quotes: ["error", "double"],
    "space-before-blocks": "error",
    "space-in-parens": "error",
    "switch-colon-spacing": "error",
    "template-curly-spacing": "error",
    "template-tag-spacing": "error",
  },
};
