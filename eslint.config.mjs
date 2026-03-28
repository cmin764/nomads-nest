import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Intentional SSR-safety patterns (localStorage sync, mount detection, scroll init)
      // are flagged by this rule but are the correct Next.js approach for hydration safety.
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
