---
title: ทำแบบและถอดปริมาณ (Documentation)
description: การสร้าง Sheet, Tagging และ Schedule (BOQ) แบบละเอียด
sidebar:
  order: 7
---

## 1. การติดป้ายชื่อ (Tagging)

ไม่จำเป็นต้องพิมพ์ Text เอง! ให้ Revit อ่านชื่อจากโมเดล:

### วิธีที่ 1: Tag ทีเดียวทั้งแปลน (Tag All)

1.  ไปที่แปลน **Level 1**
2.  คำสั่ง **Annotate > Tag All Not Tagged** (ไม่มีคีย์ลัด)
3.  หน้าต่าง Tag All จะเปิดขึ้น เลือก Category ที่ต้องการ:
    - ✅ **Structural Column Tags** (ป้ายเสา)
    - ✅ **Structural Framing Tags** (ป้ายคาน)
    - ✅ **Floor Tags** (ป้ายพื้น)
4.  ติ๊ก **Leader** ถ้าต้องการเส้นชี้
5.  กด **OK** -> ชื่อ C1, B1, S20 จะปรากฏขึ้นมาเอง!

### วิธีที่ 2: Tag ทีละชิ้น

1.  คำสั่ง **Annotate > Tag by Category** (หรือกด `TG`)
2.  คลิกที่ชิ้นส่วนที่ต้องการ -> ป้ายจะปรากฏ
3.  ลาก Tag ไปวางตำแหน่งที่สวยงาม

> [!TIP]
> **Tag แสดงอะไร?** Tag จะอ่านค่า **Type Name** ของชิ้นส่วน ดังนั้นถ้าคุณตั้งชื่อ Type เป็น `C1 (800x800)` ป้ายก็จะแสดง `C1 (800x800)` โดยอัตโนมัติ ไม่ต้องพิมพ์ซ้ำ!

---

## 2. การสร้าง Schedule (ถอด BOQ)

### A. Schedule ปริมาณคอนกรีตเสา

1.  ไปที่ **View > Schedules > Schedule/Quantities...**
2.  เลือก Category: **Structural Columns** -> กด OK
3.  เลือก Fields (คอลัมน์ที่จะโชว์) ตามลำดับนี้:

| ลำดับ | Field Name      | ความหมาย            |
| ----- | --------------- | ------------------- |
| 1     | Family and Type | ชื่อเสา (C1, C2...) |
| 2     | Base Level      | ชั้นที่เสาอยู่      |
| 3     | Count           | จำนวน               |
| 4     | Volume          | ปริมาตรคอนกรีต (m³) |

4.  กดปุ่ม **Add ->** เพื่อย้าย Field ไปฝั่งขวา
5.  ไปที่ Tab **Sorting/Grouping:**
    - **Sort by:** `Family and Type`
    - ติ๊ก ✅ **Grand Totals**
    - เลิกติ๊ก ❌ **Itemize every instance** (สำคัญ! เพื่อให้ยุบรวมจำนวน)
6.  ไปที่ Tab **Formatting:**
    - เลือก Field `Volume` -> ติ๊ก ✅ **Calculate totals**
7.  กด **OK**

**ผลลัพธ์:** ได้ตารางบอกว่าเสาแต่ละ Type ใช้คอนกรีตรวมกี่ลูกบาศก์เมตร!

### B. Schedule ปริมาณเหล็กเสริม (Bar Cut List)

1.  **View > Schedules > Schedule/Quantities...**
2.  เลือก Category: **Structural Rebar** -> กด OK
3.  เลือก Fields:

| ลำดับ | Field Name       | ความหมาย                  |
| ----- | ---------------- | ------------------------- |
| 1     | Partition        | หมวด (เสา/คาน)            |
| 2     | Bar Diameter     | ขนาดเหล็ก (DB10, DB25...) |
| 3     | Shape            | รูปร่าง                   |
| 4     | Quantity         | จำนวนเส้น                 |
| 5     | Total Bar Length | ความยาวรวม (m)            |
| 6     | Total Weight     | น้ำหนักรวม (kg)           |

4.  **Sorting:** Sort by `Bar Diameter`
5.  ติ๊ก **Grand Totals** + **Calculate totals** สำหรับ Total Weight
6.  กด OK

**ผลลัพธ์:** ได้รายการเหล็กครบถ้วน พร้อมน้ำหนักรวมสำหรับถอดราคา BOQ!

---

## 3. การจัดหน้ากระดาษ (Sheets)

### สร้าง Sheet ใหม่

1.  คลิกขวาที่ **Sheets (All)** ใน Project Browser -> **New Sheet...**
2.  เลือก **Title Block:**
    - `A1 Metric` (กระดาษ A1) สำหรับแปลนพื้น
    - `A3 Metric` (กระดาษ A3) สำหรับรูปตัดย่อย
3.  กรอกข้อมูล Title Block:
    - **Sheet Number:** เช่น `S-101`
    - **Sheet Name:** เช่น `STRUCTURAL PLAN - LEVEL 1`

### ระบบการตั้งชื่อ Sheet (แนะนำ)

| Sheet Number | Sheet Name           | เนื้อหา                   |
| ------------ | -------------------- | ------------------------- |
| `S-001`      | GENERAL NOTES        | หมายเหตุทั่วไป, สัญลักษณ์ |
| `S-101`      | STRUCTURAL PLAN - 1F | แปลนโครงสร้างชั้น 1       |
| `S-102`      | STRUCTURAL PLAN - 2F | แปลนโครงสร้างชั้น 2       |
| `S-201`      | COLUMN SCHEDULE      | ตารางเสา + รูปตัด         |
| `S-301`      | BEAM SCHEDULE        | ตารางคาน + รูปตัด         |
| `S-401`      | CONCRETE BOQ         | Schedule ปริมาณคอนกรีต    |

### วาง View ลงใน Sheet

1.  **ลาก (Drag & Drop):** จาก Project Browser ลาก View ที่ต้องการมาวางลงในกระดาษ:
    - แปลนพื้น (Level 1 Plan)
    - รูปตัด (Section)
    - ตาราง (Schedule)
2.  จัดตำแหน่งให้สวยงาม (Revit จะ Snap ให้อัตโนมัติ)

### เพิ่ม Dimension (มิติบอกขนาด)

1.  คำสั่ง **Annotate > Aligned Dimension** (หรือกด `DI`)
2.  คลิกที่ **เส้น Grid แรก** (เช่น Grid A)
3.  คลิกที่ **เส้น Grid ถัดไป** (เช่น Grid B)
4.  ลากเมาส์ออกมาด้านนอก -> คลิกวาง Dimension
5.  ผลลัพธ์: ตัวเลข `6000` (หรือ `6.00`) ปรากฏอัตโนมัติ!

> [!NOTE]
> ถ้าต้องการ Dimension ต่อเนื่องหลายช่อง (A→B→C→D...) ให้คลิก Grid ไปเรื่อยๆ แล้วค่อยลากออกมาวาง Dimension ทีเดียว จะได้ Dimension String ต่อเนื่องสวยงาม

### สั่งพิมพ์ (Print/Export)

- **Print:** `Ctrl+P` -> เลือกเครื่องพิมพ์ -> เลือก Sheet ที่ต้องการ
- **Export PDF:** `File > Export > PDF` -> เลือก Sheet -> กด Export

> [!TIP]
> **Revision Cloud:** ถ้าแก้แบบแล้วต้องส่งใหม่ ให้ใช้ **Annotate > Revision Cloud** วาดรอบพื้นที่ที่แก้ไข พร้อมใส่เลข Revision ที่ Title Block จะได้ติดตาม Version ของแบบได้ครับ
