---
title: มาตรฐานงานและ QA/QC (Standards & QA/QC)
description: ตั้งมาตรฐานโมเดล ตรวจคุณภาพงาน และป้องกันความผิดพลาดก่อนออกแบบก่อสร้าง
sidebar:
  order: 8
---

> [!IMPORTANT]
> แนะนำให้อ่านบทนี้ก่อนบท Documentation, Worksharing และ Coordination เพราะมาตรฐานชื่อ view, sheet, schedule และ checklist QA จะถูกใช้ต่อเนื่องตลอดทั้งเล่ม

## ทำไมบทนี้สำคัญ?

ผู้ใช้ Revit จำนวนมากสามารถขึ้นโมเดลได้ แต่ยังจัดโมเดลให้อยู่ในมาตรฐานที่พร้อมส่งงานไม่ได้ เพราะไม่มีมาตรฐานการตั้งชื่อ มุมมอง ตาราง หรือขั้นตอนตรวจคุณภาพก่อนออก Sheet จริง

บทนี้จะทำให้โมเดลของคุณ:

- อ่านต่อโดยทีมอื่นได้
- ถอดปริมาณซ้ำแล้วได้ผลใกล้เคียงเดิม
- ลด Warning/Clash/ชิ้นส่วนหายก่อนส่งแบบ

---

## 1. ตั้งมาตรฐานชื่อ (Naming Convention)

### A. Levels

ใช้รูปแบบเดียวทั้งโปรเจกต์:

| ประเภท | ตัวอย่าง | หมายเหตุ |
| ------ | -------- | -------- |
| ชั้นใช้งาน | `F1`, `F2`, `F3` | หลีกเลี่ยง `Level 1`, `2F`, `Floor-01` ปนกัน |
| ดาดฟ้า | `Roof` | ใช้คำเดียวให้ตรงกันทุก view |
| ชั้นใต้ดิน | `B1`, `B2` | ถ้ามี basement |

### B. Grids

| แนว | ตัวอย่าง |
| --- | -------- |
| แนวอักษร | `A, B, C, D...` |
| แนวตัวเลข | `1, 2, 3, 4...` |

> [!IMPORTANT]
> ห้ามใช้ชื่อ Grid แบบ `A1`, `B1`, `01`, `Axis-A` ปนกันในไฟล์เดียวถ้าจะทำงานร่วมกับ ETABS หรือทีมหลายสาขา

### C. Types ของชิ้นส่วน

ตั้งชื่อให้เห็น "บทบาท + ขนาด" ในครั้งเดียว:

| หมวด | ตัวอย่าง |
| ---- | -------- |
| เสา | `C1 (800x800)` |
| คาน | `B1 (300x600)` |
| พื้น | `S20 (t=200)` |
| ผนัง | `SW30 (300mm)` |

---

## 2. มาตรฐาน View และ Sheet

### A. View Template ขั้นต่ำที่ควรมี

| ชื่อ Template | ใช้กับอะไร |
| ------------- | ---------- |
| `Structural Plan - Standard` | แปลนโครงสร้างทั่วไป |
| `Structural Plan - Rebar` | แปลนที่ต้องเห็นเหล็ก |
| `Section - Concrete` | รูปตัดคอนกรีต |
| `Section - Rebar` | รูปตัดงานเหล็ก |
| `Sheet - Presentation` | มุมมองสำหรับออกแบบส่งแบบ |

### B. Browser Organization

แยกมุมมองให้คนในทีมหาเจอง่าย:

- `Structural Plans`
- `Sections`
- `3D Coordination`
- `Schedules`
- `Sheets`

### C. ระบบเลข Sheet

| กลุ่ม | ตัวอย่าง | เนื้อหา |
| ----- | -------- | ------- |
| `S-1xx` | `S-101` | Structural Plans |
| `S-2xx` | `S-201` | Sections / Elevations |
| `S-3xx` | `S-301` | Reinforcement Details |
| `S-4xx` | `S-401` | Schedules / BOQ / BBS |

---

## 3. QA Checklist ก่อนออกแบบ

### A. ตรวจโมเดล

เช็ก 7 ข้อนี้ทุกครั้ง:

1. Level และ Grid ตั้งชื่อครบและไม่ซ้ำ
2. เสา/คาน/พื้น/ผนังอยู่ Category ถูกต้อง
3. View Range ของแปลนสำคัญไม่ตัดชิ้นส่วนผิด
4. Rebar cover ของแต่ละ host ถูกต้อง
5. Linked model วางตำแหน่งถูก reference
6. ไม่มี element หลุดระดับหรือมี offset แปลกโดยไม่ตั้งใจ
7. 3D view มองแล้วไม่เห็นชิ้นส่วนซ้อนกันผิดธรรมชาติ

### B. ตรวจ Schedule

1. Type names อ่านแล้วเข้าใจจริง
2. Count / Volume / Total Bar Length รวมได้
3. Partition ของเหล็กเสริมถูกตั้งครบ
4. ตาราง BOQ ไม่ดึง category เกินความจำเป็น

### C. ตรวจ Sheet

1. Scale ถูกต้อง
2. North/section direction ไม่กลับด้าน
3. Tag ไม่ทับกัน
4. Dimension ครบตามการใช้งาน
5. Revision/Sheet Number ไม่ซ้ำ

---

## 4. Warning ที่ "ยอมได้" และ Warning ที่ "ต้องแก้"

### Warning ที่ควรแก้ทันที

- `Highlighted floors overlap`
- `A wall and a room separation line overlap`
- `Rebar is placed completely outside of its host`
- `Elements have duplicate "Mark" values`
- `There are identical instances in the same place`

### Warning ที่อาจยอมรับได้ชั่วคราว

- Join geometry บางกรณีระหว่างองค์ประกอบที่ตั้งใจให้ซ้อน
- Room-related warning ในไฟล์โครงสร้างที่ไม่ได้ทำ room data

> [!WARNING]
> อย่าใช้หลัก "มี warning ได้ไม่เป็นไร" ถ้ายังไม่ได้จำแนกว่ามันกระทบแบบ, ปริมาณ, หรือการประสานงานหรือไม่

---

## 5. Audit รอบสุดท้ายก่อนส่งงาน

ใช้ลำดับนี้ทุกครั้ง:

1. เปิด **3D QA View**
2. เปิดทุก workset ที่เกี่ยวข้อง
3. Reload links
4. ตรวจ Clash ที่ obvious ด้วยสายตา
5. ตรวจ Schedule หลัก
6. ตรวจ Sheet list
7. Export PDF/DWG ทดสอบ 1 ชุด
8. เปิดไฟล์ที่ export แล้วเช็กซ้ำอีกครั้ง

### 3D QA View ควรแสดงอะไร?

- Columns
- Structural Framing
- Floors
- Walls
- Foundations
- Revit Links

และควรซ่อน:

- Annotation
- Sheets
- รายการ view ที่ไม่เกี่ยวกับ coordination

---

## 6. มาตรฐานไฟล์ที่ควรใช้ในทีม

| รายการ | คำแนะนำ |
| ------ | -------- |
| File Name | `Project_Discipline_Area_Version.rvt` |
| Sync รอบทำงาน | ทุก 1-2 ชั่วโมง |
| Archive | เก็บ milestone รายสัปดาห์/ราย issue |
| Export Folder | แยก `PDF`, `DWG`, `NWC`, `Reports` |
| Revision Log | เก็บ comment ทุกครั้งที่ sync/export สำคัญ |

---

## สรุป

ถ้าบทก่อนหน้าสอนให้คุณ "สร้างโมเดล" บทนี้สอนให้คุณ "ควบคุมคุณภาพโมเดล" ซึ่งเป็นสิ่งที่ทำให้ไฟล์ Revit ใช้งานได้จริงในทีมและในหน้างานครับ

> [!TIP]
> **10 ข้อที่ควรเช็กก่อน export**
> 1. Level และ Grid ตั้งชื่อสม่ำเสมอ
> 2. ไม่มี element ลอยหรืออยู่ผิดชั้น
> 3. View Template สำคัญถูก apply แล้ว
> 4. Rebar cover ถูกกับ host หลัก
> 5. Schedule หลักรวมยอดได้
> 6. Tag ไม่ทับกัน
> 7. Sheet number ไม่ซ้ำ
> 8. Links reload ล่าสุดแล้ว
> 9. Export test เปิดอ่านได้จริง
> 10. เก็บ archive milestone ก่อนส่ง
