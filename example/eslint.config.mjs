import { defineConfig } from "eslint/config"
import globals from "globals"
import js from "@eslint/js"
import practice from "@okonomi/eslint-plugin-practice"

export default defineConfig([
  {
    files: ["**/*.{js,mjs}"],
    extends: [
      js.configs.recommended,
    ],
    plugins: {
      practice
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
])
