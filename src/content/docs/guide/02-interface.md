---
title: หน้าต่างโปรแกรม (Interface)
description: ส่วนประกอบสำคัญของหน้าจอ Revit ที่ต้องรู้ พร้อมคีย์ลัด
sidebar:
  order: 2
---

## ส่วนประกอบหลักของ Revit

เพื่อให้คุยกันรู้เรื่องในบทถัดๆ ไป เราต้องเรียกชื่อส่วนต่างๆ ของหน้าจอให้ถูกก่อนครับ

### 1. Project Browser (สำคัญมาก ⭐)

เปรียบเสมือน "สารบัญ" ของโปรเจกต์ อยู่ทาง **ซ้ายมือ** ใช้สำหรับ:

- **เปลี่ยนมุมมอง (Views):** ดับเบิลคลิกที่ชื่อ View เช่น Floor Plans > Level 1
- **ดูตาราง (Schedules):** คลิกที่ Schedules/Quantities
- **จัดการ Sheet:** คลิกที่ Sheets (All)
- **หา Family:** คลิกที่ Families

> [!TIP]
> **ถ้า Project Browser หายไป:** กดคีย์ลัด **`Ctrl+9`** หรือไปที่ **View > User Interface > Project Browser** (ติ๊กเครื่องหมายถูก)

### 2. Properties Palette (สำคัญมาก ⭐)

อยู่ทาง **ซ้ายมือ** (ใต้ Project Browser) ใช้สำหรับ "ดูและแก้ไขข้อมูล" ของสิ่งที่เลือกอยู่:

- คลิกที่เสา -> Properties จะแสดง: ขนาด, วัสดุ, Base Level, Top Level
- คลิกที่ว่างๆ (View) -> Properties จะแสดง: Scale, Detail Level, Discipline

> [!TIP]
> **ถ้า Properties หายไป:** กดคีย์ลัด **`PP`** (พิมพ์ P สองครั้ง) หรือไปที่ **View > User Interface > Properties**

### 3. Ribbon (แถบเครื่องมือ)

แถบด้านบนสุดที่รวมคำสั่งทั้งหมด แบ่งเป็น Tab หลักๆ ที่ต้องรู้:

| Tab           | ใช้ทำอะไร           | คำสั่งสำคัญ                                           |
| ------------- | ------------------- | ----------------------------------------------------- |
| **Structure** | งานโครงสร้างทั้งหมด | Column (`CL`), Beam (`BM`), Floor, Wall, Rebar (`RB`) |
| **Insert**    | นำเข้าไฟล์          | Link CAD, Link Revit, Load Family                     |
| **Annotate**  | เขียนแบบ 2D         | Dimension (`DI`), Tag (`TG`), Text                    |
| **View**      | สร้างมุมมอง         | Section (`SE`), 3D View, Schedule                     |
| **Modify**    | แก้ไขชิ้นงาน        | Move (`MV`), Copy (`CO`), Array (`AR`), Trim (`TR`)   |

> [!IMPORTANT]
> **Tab ที่ใช้บ่อยที่สุดคือ `Structure`** เพราะเราทำงานโครงสร้าง ให้คลิกมาอยู่ที่ Tab นี้เป็นหลักครับ

### 4. View Control Bar (แถบล่าง)

แถบเล็กๆ ด้านล่างพื้นที่ทำงาน ใช้คุมการแสดงผล:

| ปุ่ม             | ค่าที่แนะนำ                            | เหตุผล                                 |
| ---------------- | -------------------------------------- | -------------------------------------- |
| **Scale**        | `1:100` (แปลน), `1:50` (รูปตัด)        | ขนาดตัวอักษรและ Dimension จะตามสเกลนี้ |
| **Detail Level** | `Fine`                                 | เพื่อให้เห็นเหล็กเสริมและรายละเอียด    |
| **Visual Style** | `Hidden Line` (ทำงาน), `Shaded` (เช็ค) | Hidden Line เร็วกว่า Shaded            |

---

## คีย์ลัดที่ต้องจำ (Keyboard Shortcuts)

| คีย์ลัด  | คำสั่ง             | ใช้ในบทที่ |
| -------- | ------------------ | ---------- |
| `CL`     | Structural Column  | 04         |
| `BM`     | Beam               | 04         |
| `RB`     | Rebar              | 05, 06     |
| `GR`     | Grid               | 03         |
| `LL`     | Level              | 03         |
| `SE`     | Section            | 05, 06, 07 |
| `DI`     | Dimension          | 07         |
| `TG`     | Tag by Category    | 07         |
| `CO`     | Copy               | 03, 04     |
| `MV`     | Move               | ทั่วไป     |
| `AR`     | Array              | 03         |
| `TR`     | Trim/Extend        | 04         |
| `UN`     | Project Units      | 03         |
| `PP`     | Properties Palette | ทั่วไป     |
| `Ctrl+Z` | Undo               | ทั่วไป     |
| `Ctrl+C` | Copy to Clipboard  | 04         |
| `Ctrl+P` | Print              | 06         |

ทำความคุ้นเคยกับส่วนต่างๆ เหล่านี้ไว้นะครับ เดี๋ยวเราจะได้ใช้กันตลอดครับ
