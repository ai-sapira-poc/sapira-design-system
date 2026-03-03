import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  treeshake: true,
  splitting: false,
  onSuccess: async () => {
    const { readFileSync, writeFileSync } = await import("fs");
    const file = "dist/index.js";
    const content = readFileSync(file, "utf-8");
    writeFileSync(file, `"use client";\n${content}`);
  },
});
