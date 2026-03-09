---
title: Dynamo (Parametric Automation)
description: ใช้ Dynamo สร้าง Script อัตโนมัติสำหรับงาน Revit ซ้ำๆ เช่น สร้าง Level 30 ชั้น
sidebar:
  order: 13
---

## Dynamo คืออะไร?

> [!WARNING]
> **บทนี้เป็น workflow เชิงแนวคิดพร้อมตัวอย่าง script**
> Dynamo มีความต่างตามเวอร์ชัน Revit, เวอร์ชัน Dynamo และ package ที่ติดตั้ง
> เพราะฉะนั้นให้ยึด "ลำดับความคิดของ graph" เป็นหลัก ไม่ควรคาดหวังว่าชื่อ node, path เมนู หรือ parameter จะตรงทุกเครื่องแบบ 100%
>
> **อาการที่พบบ่อยเมื่อ graph ไม่ทำงานตามคาด (Expected failure modes)**
> - package หรือ node ไม่ตรงเวอร์ชัน
> - ชื่อ parameter ในโปรเจกต์ไม่ตรงตัวอย่าง
> - ชื่อ view/level ซ้ำ
> - graph รันได้แต่ได้ element ไม่ครบเพราะ input list ไม่ตรง

> [!IMPORTANT]
> **สถานะของบทนี้: Advanced / Optional**
> Dynamo เป็นเครื่องมือเพิ่มความเร็วและลดงานซ้ำ ไม่ใช่เงื่อนไขจำเป็นสำหรับการเรียน workflow หลักของหนังสือ ถ้ายังไม่คุ้นกับ Revit model พื้นฐาน ให้ย้อนมาอ่านบทนี้ภายหลังได้

> [!NOTE]
> **Tested environment / สิ่งที่ต้องยืนยันก่อนเริ่ม**
>
> | รายการ | สิ่งที่ควรเช็ก |
> | --- | --- |
> | Revit | ใช้เวอร์ชันเดียวกับไฟล์งานที่กำลังแก้ |
> | Dynamo | เวอร์ชันที่มากับ Revit เครื่องนั้น |
> | Packages | มี package ที่ graph ต้องใช้จริง เช่น `Rhythm`, `Data-Shapes` |
> | Parameters | ชื่อ parameter ในโปรเจกต์ตรงกับที่ graph อ่าน/เขียน |
> | Names | ชื่อ level/view เป้าหมายยังไม่ชนของเดิม |

> [!NOTE]
> **สถานะของข้อมูลในบทนี้**
> - หลักการต่อ graph และลำดับการคิดเป็น `workflow guidance`
> - ชื่อ node, package และเมนูบางส่วนเป็น `version-sensitive example`
> - ก่อนใช้กับไฟล์จริง ควรทดสอบในไฟล์สำเนาหรือไฟล์ทดลองเสมอ

> [!IMPORTANT]
> **ขอบเขตที่หนังสือยืนยันได้จริงในบทนี้**
> - ยืนยันได้ว่าบทนี้ใช้แนวคิดของ Dynamo ที่มากับ `Revit 2026` เป็นฐาน
> - ยืนยันได้ว่าผู้อ่านควรตรวจ package, parameter names และชื่อปลายทางก่อนรัน graph ทุกครั้ง
> - **ไม่ยืนยัน** ว่าชื่อ node, package หรือ graph ตัวอย่างจะรันได้เหมือนกันทุกเครื่องโดยไม่ปรับ environment

**Dynamo** คือโปรแกรม Visual Programming ที่รวมอยู่ใน Revit ช่วยให้ทำงานซ้ำๆ ได้อัตโนมัติโดยไม่ต้องเขียน Code

**เมื่อไหรควรใช้ Dynamo?**

| งาน                        | วิธีปกติ      | ด้วย Dynamo |
| -------------------------- | ------------- | ----------- |
| สร้าง Level 30 ชั้น        | 30 นาที       | 30 วินาที   |
| Rename Views ทุก View      | คลิกทีละ View | คลิกเดียว   |
| วาง Column ทุกจุดตัด Grid  | Array ซับซ้อน | Script      |
| ดึงข้อมูลจาก Excel → Revit | ไม่ได้        | ได้!        |

---

## เปิด Dynamo

1. ใน Revit ไปที่ **Manage > Visual Programming > Dynamo**
2. Dynamo จะเปิดในหน้าต่างใหม่
3. เลือก **New** เพื่อเริ่ม Script ใหม่ หรือ **Open** เพื่อเปิดไฟล์ `.dyn` ที่มีอยู่

## Dynamo Player (วิธีที่ดีกว่าสำหรับการใช้งานซ้ำ)

ถ้าเป้าหมายของคุณคือ **รัน script ที่เตรียมไว้แล้ว** ไม่ใช่การแก้ graph เองทุกครั้ง ให้ใช้ **Dynamo Player** เป็นทางหลักก่อน:

1. ไปที่ **Manage > Dynamo Player**
2. เลือกโฟลเดอร์ที่เก็บไฟล์ `.dyn`
3. เลือก script ที่ต้องการรัน
4. กด **Play**

> [!TIP]
> สำหรับงานทีมและ script ที่ผ่านการทดสอบแล้ว `Dynamo Player` มักเหมาะกว่าการเปิด Dynamo Editor ทุกครั้ง เพราะลดโอกาสแก้ graph ผิดและทำให้ผู้ใช้ที่ไม่เชี่ยว Dynamo ใช้งานซ้ำได้ง่ายกว่า

> [!NOTE]
> ส่วนตัวอย่างในบทถัดไปยังคงใช้ **Dynamo Editor** เพราะเป้าหมายของบทนี้คือสอนลำดับความคิดของ graph ไม่ใช่แค่กดรันอย่างเดียว

---

## ✍️ Script 1: สร้าง Level 30 ชั้นอัตโนมัติ

> [!WARNING]
> **ใช้กับไฟล์ใหม่หรือไฟล์ที่ยังไม่มี Level ชุด F1-F30 เท่านั้น** ถ้าทำในโปรเจกต์ที่สร้าง Level ตามบทที่ 03 ไปแล้ว Script นี้จะชนชื่อเดิมและสร้างซ้ำไม่ได้

### ภาพรวม Node

```
Number Sequence → Level.ByElevationAndName
```

### ขั้นตอน

1. เปิด Dynamo → New
2. ค้นหา Node ต่อไปนี้ (พิมพ์ในช่อง Search):

**Node 1: `Code Block`** (สร้างข้อมูลตัวเลข)

```
0..87000..3000; // ความสูงสะสม: 0, 3000, 6000 ... 87000
```

**Node 2: `Code Block`** (สร้างชื่อชั้น)

```
"F" + (1..30);
```

**Node 3: `Level.ByElevationAndName`**

- เชื่อม Elevation = output จาก Node 1
- เชื่อม Name = output จาก Node 2

3. กด **Run** → Revit จะสร้าง Level F1-F30 พร้อมกันทันที! ✅

> [!TIP]
> บันทึก Script ไว้เป็น `.dyn` → ครั้งหน้าเปิดโปรเจกต์ใหม่ Run ได้เลย

---

## ✍️ Script 2: Rename Structural Plan Views

ปัญหา: Views ชื่อ `L1 - Structural` ต้องเปลี่ยนเป็น `F1` ทีละชั้นช้ามาก

> [!WARNING]
> **ให้ทดลองในไฟล์สำเนาหรือ Save As ก่อนรัน script นี้**
> การ rename views เป็นการแก้ไขแบบหลายรายการพร้อมกัน ถ้าชื่อซ้ำ, filter ผิด, หรือ list ไม่ตรง คุณอาจได้ชื่อปนกันทั้งชุด view และย้อนกลับยากกว่าการแก้ทีละตัว

### Node Flow

```
Views.All → Filter (Structural Plan) → View.SetName → "F" + Number
```

### ขั้นตอน

1. **Node: `All Elements of Category`** → เลือก Category = `Views`
2. **Node: `Element.GetParameterValueByName`** → Parameter = `"View Type"`
3. **Node: `List.FilterByBoolMask`** → กรองเฉพาะ `"Structural Plan"`
4. **Node: `Element.SetParameterByName`** → Parameter = `"View Name"` → ใส่ชื่อ `"F1", "F2"...`

> [!NOTE]
> ในบางโปรเจกต์ ชื่อ parameter หรือชนิดของ view อาจไม่ตรงตามตัวอย่างนี้พอดี ให้ทดลอง inspect ข้อมูลจาก view 1 ตัวก่อน แล้วค่อยขยายไปทั้งรายการ
>
> **ระวังชื่อซ้ำ:** ถ้าในโปรเจกต์มี view ชื่อ `F1`, `F2` อยู่แล้ว การ rename จะ fail ทันที ควรเช็กชื่อเดิมก่อน หรือทดลองตั้งชื่อชั่วคราวเช่น `TMP-F1`, `TMP-F2` ก่อนค่อยปรับรอบสุดท้าย

---

## ✍️ Script 3: นำเข้าข้อมูลจาก Excel

Dynamo สามารถอ่านข้อมูลจาก Excel และใช้สร้าง Revit elements ได้:

> [!IMPORTANT]
> **Checklist ก่อนเริ่ม Excel import**
> ให้ตรวจ 4 เรื่องนี้ก่อนรัน graph:
> - ปิดไฟล์ Excel ต้นทางก่อน เพื่อกันปัญหา read/write lock
> - หน่วยใน Excel ต้องตรงกับที่ graph คาดไว้
> - `Level`, `Family Type` หรือชื่ออ้างอิงที่ใช้ใน graph ต้องมีอยู่ในโปรเจกต์แล้ว
> - ทดลองกับข้อมูล 1 แถวก่อน แล้วค่อยขยายเป็นทั้งชุด

1. **Node: `File Path`** → เลือกไฟล์ `.xlsx`
2. ใช้ node อ่าน Excel ที่มีอยู่ใน environment ของคุณ เช่น built-in node หรือ node จาก package ที่ติดตั้งเพิ่ม
3. แปลงข้อมูลใน Excel ให้เป็น **Point + Level + Family Type** ก่อน
4. ใช้ node สำหรับวางเสาใน Revit ตาม package ที่เลือกใช้งานจริง

> [!NOTE]
> **ต้องติดตั้ง Package เพิ่ม:** ไปที่ **Packages > Search for Package** แล้วติดตั้ง:
>
> - `Rhythm` (Node เพิ่มเติมสำหรับ Revit)
> - `Data-Shapes` (UI สำหรับรับ Input จากผู้ใช้)

> [!IMPORTANT]
> ชื่อ node ด้าน Excel และการสร้าง element อาจต่างกันตามเวอร์ชัน Dynamo และ package ที่ติดตั้ง จึงควรยึด workflow เป็นหลัก ไม่ควรยึดชื่อตัว node แบบตายตัวถ้ายังไม่ได้เช็ก environment ก่อน

---

## แหล่งเรียนรู้ Dynamo

| แหล่ง                   | URL                                                          | เนื้อหา            |
| ----------------------- | ------------------------------------------------------------ | ------------------ |
| Dynamo Primer           | [primer.dynamobim.org](https://primer.dynamobim.org)         | คู่มือทางการ ฟรี   |
| Dynamo Dictionary       | [dictionary.dynamobim.org](https://dictionary.dynamobim.org) | อธิบาย Node ทุกตัว |
| YouTube: Autodesk Revit | youtube.com                                                  | Video Tutorial ฟรี |

> [!TIP]
> **Dynamo Player:** เมื่อเขียน Script เสร็จแล้ว ให้ใช้ **Manage > Dynamo Player** เปิด Script ได้โดยไม่ต้องเข้า Dynamo Editor — สะดวกมากสำหรับทีมที่ไม่เชี่ยว Dynamo ครับ
