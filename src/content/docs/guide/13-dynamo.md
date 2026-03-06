---
title: Dynamo (Parametric Automation)
description: ใช้ Dynamo สร้าง Script อัตโนมัติสำหรับงาน Revit ซ้ำๆ เช่น สร้าง Level 30 ชั้น
sidebar:
  order: 13
---

## Dynamo คืออะไร?

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

---

## ✍️ Script 1: สร้าง Level 30 ชั้นอัตโนมัติ

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

**Node 2: `String from Array`** (สร้างชื่อชั้น)

```
List.Count → Range → String ต่อด้วย "F"
```

หรือใช้ Code Block:

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

### Node Flow

```
Views.All → Filter (Structural Plan) → View.SetName → "F" + Number
```

### ขั้นตอน

1. **Node: `All Elements of Category`** → เลือก Category = `Views`
2. **Node: `Element.GetParameterValueByName`** → Parameter = `"View Type"`
3. **Node: `List.FilterByBoolMask`** → กรองเฉพาะ `"Structural Plan"`
4. **Node: `Element.SetParameterValueByName`** → Parameter = `"View Name"` → ใส่ชื่อ `"F1", "F2"...`

---

## ✍️ Script 3: นำเข้าข้อมูลจาก Excel

Dynamo อ่านข้อมูลจาก Excel และสร้าง Revit Elements ได้:

1. **Node: `File Path`** → เลือกไฟล์ `.xlsx`
2. **Node: `Excel.ReadFromFile`** → อ่านชีต `Columns`
3. **Node: `Structural Column ByPointAndLevel`** → วาง Column ตามพิกัดใน Excel

> [!NOTE]
> **ต้องติดตั้ง Package เพิ่ม:** ไปที่ **Packages > Search for Package** แล้วติดตั้ง:
>
> - `Rhythm` (Node เพิ่มเติมสำหรับ Revit)
> - `Data-Shapes` (UI สำหรับรับ Input จากผู้ใช้)

---

## แหล่งเรียนรู้ Dynamo

| แหล่ง                   | URL                                                          | เนื้อหา            |
| ----------------------- | ------------------------------------------------------------ | ------------------ |
| Dynamo Primer           | [primer.dynamobim.org](https://primer.dynamobim.org)         | คู่มือทางการ ฟรี   |
| Dynamo Dictionary       | [dictionary.dynamobim.org](https://dictionary.dynamobim.org) | อธิบาย Node ทุกตัว |
| YouTube: Autodesk Revit | youtube.com                                                  | Video Tutorial ฟรี |

> [!TIP]
> **Dynamo Player:** เมื่อเขียน Script เสร็จแล้ว ให้ใช้ **Manage > Dynamo Player** เปิด Script ได้โดยไม่ต้องเข้า Dynamo Editor — สะดวกมากสำหรับทีมที่ไม่เชี่ยว Dynamo ครับ
