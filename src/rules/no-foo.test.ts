import { describe , it, expect } from "vitest"
import { createRuleTester } from "eslint-vitest-rule-tester"

import rule from "./no-foo"

describe("no-foo", () => {
  const { valid, invalid } = createRuleTester({
    name: 'no-foo',
    rule,
    configs: {
      // flat config options
      languageOptions: {
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
        },
      },
    }
  })

  it("should not report valid identifiers", async () => {
    const code = `const bar = 1;`
    const { result } = await valid({ code })

    expect(result.messages).toHaveLength(0)
  })

  it("should report 'foo' identifier", async () => {
    const code = `const foo = 1;`
    const errors = ['noFoo']
    const { result } = await invalid({ code, errors })

    expect(result.output).toMatchSnapshot()
  })
})
