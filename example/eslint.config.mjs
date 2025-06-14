import { defineConfig } from "eslint/config"
import globals from "globals"
import js from "@eslint/js"
import react from "eslint-plugin-react"
import practice from "@okonomi/eslint-plugin-practice"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,jsx}"],
    extends: [
      js.configs.recommended,
      react.configs.flat["jsx-runtime"],
    ],
    plugins: {
      practice
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "practice/no-foo": "error",
      "practice/no-jsx-foo": "error",
    }
  }
])
