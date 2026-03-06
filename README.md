# Revit Tutorial Guide

หนังสือส่วนตัวสำหรับฝึกใช้งาน Revit Structure โดยจัดทำเป็นเว็บเอกสารด้วย Astro + Starlight

เป้าหมายของโปรเจกต์นี้คือ:

- ใช้เป็นคู่มือฝึกทำ Revit แบบ step-by-step
- ตรวจและปรับปรุงเนื้อหาให้ถูกต้องทั้งเชิงโปรแกรมและ workflow
- ค่อยๆ ขยายจากพื้นฐานไปถึงระดับใช้งานจริง

## โครงสร้างโปรเจกต์

```text
.
|-- public/
|   `-- images/                 รูปประกอบที่อ้างจาก Markdown
|-- src/
|   |-- assets/                 asset ที่ใช้ในหน้าเว็บ
|   `-- content/
|       |-- docs/
|       |   |-- 404.md          หน้า 404 ของเว็บ
|       |   |-- index.mdx       หน้าแรกของเว็บ
|       |   `-- guide/          บทหลักของหนังสือ
|       `-- content.config.ts   content collection config
|-- docs/
|   |-- book-workflow.md        workflow ตรวจ/แก้หนังสือ
|   `-- content-standards.md    มาตรฐานการเขียนเนื้อหา
|-- AGENTS.md                   คู่มือให้ Codex ทำงานกับ repo นี้
|-- astro.config.mjs            config ของ Astro/Starlight
`-- package.json
```

## คำสั่งหลัก

รันจาก root ของโปรเจกต์:

| Command | ใช้ทำอะไร |
| --- | --- |
| `npm install` | ติดตั้ง dependency |
| `npm run dev` | เปิดเว็บ local สำหรับอ่าน/ตรวจ |
| `npm run build` | build เว็บไปที่ `dist/` |
| `npm run preview` | preview output หลัง build |

## หลักการแก้หนังสือ

- ไฟล์บทเรียนหลักอยู่ใน `src/content/docs/guide/`
- 1 ไฟล์ = 1 บท
- เวลาปรับเนื้อหา ต้องระวัง 3 เรื่องพร้อมกัน:
  - ความถูกต้องของคำสั่งใน Revit
  - ความสอดคล้องระหว่างบท
  - ความลื่นในการทำตามแบบผู้อ่านจริง

## Workflow ที่แนะนำ

1. อ่านบทที่เกี่ยวข้องก่อน
2. ตรวจว่าคำสั่ง เมนู ชื่อ level/grid/type และผลลัพธ์ในบทสอดคล้องกัน
3. ถ้าแก้หลายบท ให้เช็กความต่อเนื่องของ workflow ทั้งเล่ม
4. รัน `npm run build` ทุกครั้งหลังแก้
5. ถ้าปรับโครงสร้างหนังสือหรือ sidebar ให้ตรวจ `astro.config.mjs` ด้วย

## ไฟล์ที่ควรอ่านก่อนแก้

- [AGENTS.md](./AGENTS.md)
- [docs/book-workflow.md](./docs/book-workflow.md)
- [docs/content-standards.md](./docs/content-standards.md)

## หมายเหตุ

โปรเจกต์นี้เน้นเป็นหนังสือฝึกใช้งานส่วนตัว ไม่ใช่เอกสารอ้างอิงทางการของ Autodesk
ดังนั้นค่าตัวอย่างในบางบทอาจเป็นค่าจาก workshop หรือโครงการสมมติ และควรถูกระบุให้ชัดว่าเป็น `ตัวอย่าง`, `สมมติฐานโครงการ`, หรือ `อ้างอิงจากโปรแกรม`
