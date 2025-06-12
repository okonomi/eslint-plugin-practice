import { defineConfig } from "eslint/config"
import globals from "globals"
import js from "@eslint/js"

export default defineConfig([
  {
    files: ["**/*.js"],
    extends: [
      js.configs.recommended,
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
])
