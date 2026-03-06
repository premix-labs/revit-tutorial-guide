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

- **เปลี่ยนมุมมอง (Views):** ดับเบิลคลิกที่ชื่อ View ใน Project Browser
  - _ในหนังสือเล่มนี้ workflow หลักจะอ้างอิง **Structural Plans** เป็นหลัก เช่น `F1`, `F2`, `Roof`_
- **ดูตาราง (Schedules):** คลิกที่ Schedules/Quantities
- **จัดการ Sheet:** คลิกที่ Sheets (All)
- **หา Family:** คลิกที่ Families

> [!TIP]
> **ถ้า Project Browser หรือ Properties หายไป:**
>
> - วิธีที่ชัวร์ที่สุดและครอบคลุมทุกเวอร์ชัน: **คลิกขวาที่พื้นที่ว่างหน้าจอ -> เลือก Browsers > Project Browser** (หรือคลิก Properties)
> - หรือไปที่ Ribbon: **View > User Interface > ติ๊กเครื่องหมายถูกที่ Project Browser / Properties** ก็ได้ครับ

### 2. Properties (สำคัญมาก ⭐)

อยู่ทาง **ซ้ายมือ** (ใต้ Project Browser) ใช้สำหรับ "ดูและแก้ไขข้อมูล" ของสิ่งที่เลือกอยู่:

- คลิกที่เสา -> Properties จะแสดง: ขนาด, วัสดุ, Base Level, Top Level
- คลิกที่ว่างๆ (View) -> Properties จะแสดง: Scale, Detail Level, Discipline

> [!TIP]
> **ถ้า Properties หายไป:** กดคีย์ลัด **`PP`** ถ้าเครื่องยังใช้ keyboard shortcuts แบบมาตรฐาน หรือไปที่ **View > User Interface > Properties**

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
>
> **เรื่องคีย์ลัด:** คีย์ลัดในหนังสือ เช่น `CL`, `BM`, `RB`, `DI` เป็นตัวอย่างตามการตั้งค่ามาตรฐานที่พบบ่อย แต่บางเครื่องอาจถูกแก้ไว้แล้ว ถ้ากดไม่ขึ้นให้ยึดชื่อเมนูบน Ribbon เป็นหลักก่อน

### 4. View Control Bar (แถบล่าง)

แถบเล็กๆ ด้านล่างพื้นที่ทำงาน ใช้คุมการแสดงผล:

| ปุ่ม             | ค่าที่แนะนำ                            | เหตุผล                                 |
| ---------------- | -------------------------------------- | -------------------------------------- |
| **Scale**        | `1:100` (แปลน), `1:50` (รูปตัด)        | ขนาดตัวอักษรและ Dimension จะตามสเกลนี้ |
| **Detail Level** | `Fine`                                 | เพื่อให้เห็นเหล็กเสริมและรายละเอียด    |
| **Visual Style** | `Hidden Line` (ทำงาน), `Shaded` (เช็ค) | Hidden Line เร็วกว่า Shaded            |

---

### 5. View Range (ช่วงการมองเห็นในแปลน ⭐)
View Range เป็นความรู้สำคัญมาก แต่ในมุมผู้ใช้จะเข้าใจง่ายกว่าตอนลองปรับจริงในแปลนโปรเจกต์ ดังนั้นรายละเอียดการตั้งค่า, ค่าที่แนะนำ และวิธีแก้งานมองไม่เห็น จะย้ายไปอธิบายในบท **Starting Project** ที่จุดเราเริ่มสร้างแปลนจริง

> [!TIP]
> ถ้าคุณเริ่มขึ้นโมเดลแล้วมองชิ้นส่วนไม่เห็นในแปลน ให้ย้อนกลับไปดูหัวข้อ **View Range และ View Template** ในบท 03

---

## คีย์ลัดที่ต้องจำ (Keyboard Shortcuts)

| คีย์ลัด   | คำสั่ง              | ใช้ในบทที่ |
| --------- | ------------------- | ---------- |
| `CL`      | Structural Column   | 04         |
| `BM`      | Beam                | 04         |
| `RB`      | Rebar               | 05, 06     |
| `GR`      | Grid                | 03         |
| `LL`      | Level               | 03         |
| `SE`      | Section             | 05, 06, 07 |
| `DI`      | Dimension           | 07         |
| `TG`      | Tag by Category     | 07         |
| `CO`      | Copy                | 03, 04     |
| `MV`      | Move                | ทั่วไป     |
| `AR`      | Array               | 03         |
| `TR`      | Trim/Extend         | 04         |
| `UN`      | Project Units       | 03         |
| `PP`      | Properties          | ทั่วไป     |
| `Ctrl+Z`  | Undo                | ทั่วไป     |
| `Ctrl+C`  | Copy to Clipboard   | 04         |
| `Ctrl+P`  | Print               | 08         |
| `HH`      | Hide Element        | 05, 06, 07 |
| `HR`      | Reset Hidden        | 05, 06, 07 |
| `VV`/`VG` | Visibility/Graphics | 04, 08     |
| `ZA`      | Zoom All to Fit     | ทั่วไป     |

ทำความคุ้นเคยกับส่วนต่างๆ เหล่านี้ไว้นะครับ เดี๋ยวเราจะได้ใช้กันตลอดครับ
