// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
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
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
      ],
      sidebar: [
        {
          label: "Guide",
          items: [
            { label: "บทนำ (Introduction)", link: "/guide/01-introduction/" },
            {
              label: "หน้าต่างโปรแกรม (Interface)",
              link: "/guide/02-interface/",
            },
            {
              label: "เริ่มสร้างโปรเจกต์ (Starting Project)",
              link: "/guide/03-starting-project/",
            },
            {
              label: "โมเดลคอนกรีต (Modeling Concrete)",
              link: "/guide/04-modeling-concrete/",
            },
            {
              label: "เหล็กเสริม (Reinforcement)",
              link: "/guide/05-modeling-reinforcement/",
            },
            {
              label: "ผนังรับแรง (Shear Wall)",
              link: "/guide/06-shear-wall/",
            },
            {
              label: "ทำแบบก่อสร้าง (Documentation)",
              link: "/guide/07-documentation/",
            },
            {
              label: "การส่งต่อข้อมูล (Interoperability)",
              link: "/guide/08-interoperability/",
            },
            {
              label: "แก้ปัญหา (Troubleshooting)",
              link: "/guide/09-troubleshooting/",
            },
          ],
        },
      ],
    }),
  ],
});
