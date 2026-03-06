---
title: ทำแบบและถอดปริมาณ (Documentation)
description: การสร้าง Sheet, Tagging และ Schedule (BOQ) แบบละเอียด
sidebar:
  order: 9
---

## 1. การติดป้ายชื่อ (Tagging)

ไม่จำเป็นต้องพิมพ์ Text เอง! ให้ Revit อ่านชื่อจากโมเดล:

### วิธีที่ 1: Tag ทีเดียวทั้งแปลน (Tag All)

1.  ไปที่แปลน **F1**
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
> **Tag แสดงอะไร?** ข้อความที่ Tag แสดงขึ้นกับ **Label** ที่ถูกตั้งไว้ใน Tag Family นั้นๆ บางไฟล์แสดง `Type Name`, บางไฟล์แสดง `Type Mark`, `Mark` หรือพารามิเตอร์อื่น ดังนั้นถ้าป้ายไม่ออกตามที่ต้องการ ให้ตรวจใน Tag Family ก่อน

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

4.  คลิก **Add ->** เพื่อย้าย Field ไปฝั่งขวา
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

| ลำดับ | Field Name       | ความหมาย                                                |
| ----- | ---------------- | ------------------------------------------------------- |
| 1     | Partition        | หมวด (เสา/คาน) — ต้องตั้ง Partition Name ในเหล็กก่อนใช้ |
| 2     | Bar Diameter     | ขนาดเหล็ก (DB10, DB25...)                               |
| 3     | Shape            | รูปร่าง                                                 |
| 4     | Quantity         | จำนวนเส้น                                               |
| 5     | Total Bar Length | ความยาวรวม (m)                                          |

> [!WARNING]
> **น้ำหนักเหล็กหายไปไหน?** Revit ไม่มี Field `Total Weight` ให้โดยตรง ต้องดึง `Total Bar Length` ออกมาคูณน้ำหนักต่อเมตรใน Excel เช่น DB12 = **0.888 กก./ม.**, DB20 = **2.47 กก./ม.**, DB25 = **3.85 กก./ม.** ครับ!

> [!TIP]
> **การตั้ง Partition Name:** เลือกเหล็กในเสา → Properties → **Partition** พิมพ์ชื่อ เช่น `Column` หรือ `Beam` ถึงจะแยก Schedule ได้ตามหมวดครับ

4.  **Sorting:** Sort by `Bar Diameter`
5.  ติ๊ก **Grand Totals** + **Calculate totals** สำหรับ Total Bar Length
6.  กด OK

**ผลลัพธ์:** ได้รายการความยาวเหล็กทั้งหมด พร้อมเอาไปคำนวณน้ำหนักเหล็กเพื่อทำราคา BOQ ต่อได้เลย!

---

## 3. การจัดหน้ากระดาษ (Sheets)

> [!TIP]
> ก่อนจัด Sheet แนะนำให้ย้อนเช็ก naming convention, view template และ QA checklist จากบท **Standards & QA/QC** เพื่อให้ชุดแบบทั้งเล่มออกมาในมาตรฐานเดียวกัน

### สร้าง Sheet ใหม่

> [!CAUTION]
> **ถ้าไม่เจอ Title Block ในรายการ**
> บางเครื่องของ Revit 2026 ยังไม่ได้ลง content pack หรือ title block family มาครบตั้งแต่แรก
> ให้ใช้หนึ่งในสองทางนี้ก่อน:
> - **Insert > Load Family** แล้วโหลด Title Block จากโฟลเดอร์ content ที่ติดตั้งไว้
> - หรือ **Load Autodesk Family** แล้วค้นหา Title Block ที่ต้องการ
>
> ชื่อเช่น `A1 Metric` หรือ `A3 Metric` อาจต่างกันตาม language/content pack ดังนั้นให้ยึดขนาดกระดาษและประเภท family เป็นหลัก ไม่ต้องยึดชื่อไฟล์แบบตายตัว

1.  คลิกขวาที่ **Sheets (All)** ใน Project Browser -> **New Sheet...**
2.  เลือก **Title Block:**
    - `A1 Metric` (กระดาษ A1) สำหรับแปลนพื้น
    - `A3 Metric` (กระดาษ A3) สำหรับรูปตัดย่อย
3.  กรอกข้อมูล Title Block:
    - **Sheet Number:** เช่น `S-101`
    - **Sheet Name:** เช่น `STRUCTURAL PLAN - F1`

### ระบบการตั้งชื่อ Sheet (แนะนำ)

| Sheet Number | Sheet Name           | เนื้อหา                   |
| ------------ | -------------------- | ------------------------- |
| `S-001`      | GENERAL NOTES        | หมายเหตุทั่วไป, สัญลักษณ์ |
| `S-101`      | STRUCTURAL PLAN - F1 | แปลนโครงสร้างชั้น 1       |
| `S-102`      | STRUCTURAL PLAN - F2 | แปลนโครงสร้างชั้น 2       |
| `S-201`      | COLUMN SCHEDULE      | ตารางเสา + รูปตัด         |
| `S-301`      | BEAM SCHEDULE        | ตารางคาน + รูปตัด         |
| `S-401`      | CONCRETE BOQ         | Schedule ปริมาณคอนกรีต    |

### วาง View ลงใน Sheet

1.  **ลาก (Drag & Drop):** จาก Project Browser ลาก View ที่ต้องการมาวางลงในกระดาษ:
    - แปลนพื้น (F1 Plan)
    - รูปตัด (Section)
    - ตาราง (Schedule)
2.  จัดตำแหน่งให้สวยงาม (Revit จะ Snap ให้อัตโนมัติ)

### ปรับสีกราฟิกแบบมือโปร (Visibility/Graphics)

เพื่อให้แบบแปลนอ่านง่าย สถาปนิกและวิศวกรทุกคนต้องใช้คำสั่งนี้:

1. เปิดแปลน **F1** (ต้องปิด Properties หรือไม่ได้เลือกอะไรอยู่)
2. กดคีย์ลัด **`VV`** (Visibility/Graphic Overrides)
3. หาหมวด **Structural Columns** ในตะกร้า Model Categories
4. ไปที่คอลัมน์ **Cut > Patterns** -> คลิกช่อง `Override...`
5. ช่อง Foreground Pattern เลือกขีดๆ แบบกากบาท (`Diagonal crosshatch`) หรือ `Solid fill` เปลี่ยนเป็นสีเทา -> กด OK
6. ทำแบบเดียวกันกับหมวด **Walls** (ผนัง) ให้เป็น `Solid fill` สีเทาเข้ม
7. กด **OK** ออกมาดูผลลัพธ์ -> เสาและผนังรับแรงของคุณจะถูกถมสีอย่างสวยงามแบบมืออาชีพ!
8. _(ขั้นสูง: สามารถบันทึกการตั้งค่านี้เป็น View Template เพื่อไปแปะใช้กับแปลน F2 - F30 ได้ในคลิกเดียว)_

### เพิ่ม Dimension (มิติบอกขนาด)

1.  คำสั่ง **Annotate > Aligned Dimension** (หรือกด `DI`)
2.  คลิกที่ **เส้น Grid แรก** (เช่น Grid A)
3.  คลิกที่ **เส้น Grid ถัดไป** (เช่น Grid B)
4.  ลากเมาส์ออกมาด้านนอก -> คลิกวาง Dimension
5.  ผลลัพธ์: ตัวเลข `6000` (หรือ `6.00`) ปรากฏอัตโนมัติ!

> [!NOTE]
> ถ้าต้องการ Dimension ต่อเนื่องหลายช่อง (A→B→C→D...) ให้คลิก Grid ไปเรื่อยๆ แล้วค่อยลากออกมาวาง Dimension ทีเดียว จะได้ Dimension String ต่อเนื่องสวยงาม

### สั่งพิมพ์ (Print/Export)

> [!IMPORTANT]
> **ลำดับก่อน Export**
> 1. ตรวจชื่อ `View` และ `Sheet`
> 2. ตรวจ `Scale` และ `View Template`
> 3. ตรวจ field สำคัญใน `Schedule`
> 4. เปิด sheet จริงดูว่าตารางและ tag ไม่หลุดกรอบ
> 5. ค่อย export PDF / DWG / TXT

- **Print:** `Ctrl+P` -> เลือกเครื่องพิมพ์ -> เลือก Sheet ที่ต้องการ
- **Export PDF:** `File > Export > PDF` -> เลือก Sheet -> กด Export

> [!TIP]
> **Revision Cloud:** ถ้าแก้แบบแล้วต้องส่งใหม่ ให้ใช้ **Annotate > Revision Cloud** วาดรอบพื้นที่ที่แก้ไข พร้อมใส่เลข Revision ที่ Title Block จะได้ติดตาม Version ของแบบได้ครับ

---

## 4. Export DWG (ส่งแบบให้ Contractor)

ผู้รับเหมาหลายรายต้องการไฟล์ `.dwg` ไม่ใช่ PDF ให้ Export ดังนี้:

### Export Sheet เป็น DWG

1. ไปที่ **File > Export > CAD Formats > DWG**
2. หน้าต่าง **DWG Export** จะเปิดขึ้น

**ตั้งค่าสำคัญ:**

| ตัวเลือก           | ค่าที่แนะนำ                   | เหตุผล                         |
| ------------------ | ----------------------------- | ------------------------------ |
| **Export**         | `<In session view/sheet set>` | เลือก Sheet ที่ต้องการ         |
| **DWG Version**    | `AutoCAD 2018` หรือ `2013`    | ใช้งานได้กับ AutoCAD ทุกรุ่น   |
| **Layer Settings** | `Export layer properties`     | เก็บชั้นสีและเส้นไว้ครบ        |
| **Coordinate**     | `Shared`                      | ถ้าตั้ง Shared Coordinates ไว้ |

3. คลิก Tab **Export (set)** → เลือก Sheet ที่ต้องการ Export
4. กด **Next** → เลือก Folder → กด **OK**

> [!WARNING]
> DWG ที่ Export จาก Revit **อ่านได้ในโปรแกรมอื่น แต่แก้ไข Parametric ไม่ได้** เส้นทุกเส้นจะกลายเป็น Lines/Blocks ธรรมดาครับ

---

## 5. Bar Bending Schedule (BBS) แบบย่อ

> [!IMPORTANT]
> หัวข้อนี้ตั้งใจให้เป็นภาพรวมแบบย่อเท่านั้น ถ้าต้องการ workflow ระดับ production เช่นการตั้ง `Mark`, `Partition`, การจัด `BBS` ใช้งานจริง, `lap splice`, `coupler` และการจัดชุด shop drawing ให้ไปต่อที่บท **Advanced Rebar & Documentation**

BBS คือตารางสรุปเหล็กเสริมสำหรับหน้างาน แสดงขนาด รูปร่าง และความยาวตัดจริง

### A. สร้าง BBS Schedule ใน Revit

1. **View > Schedules > Schedule/Quantities**
2. เลือก Category: **Structural Rebar** → OK
3. เลือก Fields ตามลำดับ:

| ลำดับ | Field            | ความหมาย                |
| ----- | ---------------- | ----------------------- |
| 1     | Partition        | หมวด (Column/Beam/Slab) |
| 2     | Bar Diameter     | ขนาดเหล็ก               |
| 3     | Rebar Shape      | รูปร่าง (M_00, M_T1...) |
| 4     | Quantity         | จำนวนเส้น               |
| 5     | Total Bar Length | ความยาวรวม (mm)         |
| 6     | Comments         | หมายเหตุ (Mark เหล็ก)   |

4. Tab **Sorting:** Sort by `Partition` → รอง Sort by `Bar Diameter`
5. ติ๊ก **Grand Totals** + **Calculate totals** สำหรับ Total Bar Length
6. กด **OK**

### B. คำนวณน้ำหนักเหล็กใน Excel

นำค่า Total Bar Length จาก Revit ไปคูณกับน้ำหนักต่อเมตร:

| ขนาด | น้ำหนัก (กก./ม.) | สูตร               |
| ---- | ---------------- | ------------------ |
| DB10 | 0.617            | สูตร: 0.00617 × d² |
| DB12 | 0.888            |                    |
| DB16 | 1.578            |                    |
| DB20 | 2.466            |                    |
| DB25 | 3.853            |                    |
| DB28 | 4.834            |                    |
| DB32 | 6.313            |                    |

> [!TIP]
> **สูตรน้ำหนักเหล็ก:** `W (กก./ม.) = 0.00617 × d²` (d = เส้นผ่าศูนย์กลาง mm)
> ตัวอย่าง DB20: 0.00617 × 20² = **2.47 กก./ม.**

### C. Format BBS สำหรับส่งหน้างาน

รูปแบบ BBS มาตรฐาน (ส่ง Contractor):

| Mark  | ขนาด | รูปร่าง | จำนวน | ความยาว (mm) | น้ำหนัก (กก.) |
| ----- | ---- | ------- | ----- | ------------ | ------------- |
| S1-B1 | DB16 | M_00    | 50    | 5,800        | 72.9          |
| S1-B2 | DB16 | M_00    | 50    | 5,800        | 72.9          |
| C1-S1 | DB10 | M_T1    | 120   | 3,200        | 23.9          |

> Export Schedule จาก Revit จะได้เป็นไฟล์ข้อความแบบ delimited text ซึ่งเปิดต่อใน Excel ได้ จากเมนู **File > Export > Reports > Schedule**
