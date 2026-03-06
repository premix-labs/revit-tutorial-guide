// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://premix-labs.github.io",
  base: "/revit-tutorial-guide",
  integrations: [
    starlight({
      title: "Revit Tutorial Guide",
      defaultLocale: "root",
      locales: {
        root: {
          label: "Thai",
          lang: "th",
        },
      },
      disable404Route: true,
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/withastro/starlight" },
      ],
    }),
  ],
});
