---
title: ผนังรับแรง (Shear Wall in Revit)
description: การวาดผนังรับแรงและใส่เหล็กเสริมแบบละเอียด
sidebar:
  order: 6
---

## ข้อมูลจาก ETABS (ผลการออกแบบ)

| ชิ้นส่วน   | ชื่อ | ขนาด       | เหล็กแนวตั้ง | เหล็กแนวนอน  |
| ---------- | ---- | ---------- | ------------ | ------------ |
| ผนังรับแรง | SW30 | หนา 300 mm | DB16 @500 EF | DB12 @150 EF |

> [!NOTE]
> **EF = Each Face** หมายถึงใส่ทั้ง 2 หน้าของผนัง ค่าเหล็กมาจากผลออกแบบ ETABS บทที่ 10

---

## ✍️ Tutorial: วาด Shear Wall ใน Revit

### ขั้นที่ 1: สร้าง Wall Type

1.  ไปที่แปลน **Level 1**
2.  คำสั่ง **Structure > Wall > Structural Wall** (หรือกดคีย์ `WA`)
3.  ใน **Properties** คลิกชื่อ Type ปัจจุบัน
4.  เลือก Family: `Basic Wall`
5.  กด **Edit Type** -> กด **Duplicate...**
6.  ตั้งชื่อ: `SW30 (300mm)` -> กด OK
7.  กดปุ่ม **Edit Structure**:
    - แก้ **Thickness** ของ Layer "Structure [1]": `300` (mm)
    - แก้ **Material:** เลือก `Concrete - Cast-in-Place`
8.  กด OK สองครั้ง

### ขั้นที่ 2: วาดผนังตามตำแหน่ง

1.  ใน **Options Bar** (แถบใต้ Ribbon):
    - **Height:** เลือก `Unconnected` พิมพ์ `3000` (mm) หรือ `3.0` (m)
    - หรือเลือก **Top Constraint:** `Level 2`
    - **Location Line:** เลือก `Wall Centerline`
2.  คลิกจุดเริ่มต้น -> คลิกจุดปลาย (ตามตำแหน่งแกนลิฟต์จาก ETABS)
3.  วาดครบทุกด้าน -> กด **Esc** เพื่อจบคำสั่ง

> [!WARNING]
> **Structural vs Architectural Wall:** ต้องเลือก **Structure > Wall > Structural Wall** ไม่ใช่ Architecture > Wall! ผนัง Architectural จะไม่มี Analytical Model และส่งไป ETABS ไม่ได้ครับ

### ขั้นที่ 3: Copy ไปชั้นบน

1.  เลือกผนังทั้งหมดที่วาด (ลากเมาส์ครอบ -> Filter เลือกเฉพาะ Walls)
2.  `Ctrl+C` (Copy to Clipboard)
3.  **Modify > Paste > Aligned to Selected Levels**
4.  เลือก **Level 3** ถึง **Level 30** (Shift+Click)
5.  กด OK -> ผนังครบทุกชั้น!

---

## ✍️ Tutorial: ใส่เหล็กเสริมผนัง

### เตรียมรูปตัด

1.  ไปที่แปลน Level 1 -> วาด **Section** (`SE`) ตัดผ่านผนังรับแรง
2.  เปิดรูปตัด -> ตั้ง **Detail Level = Fine**

### ขั้นที่ 1: เหล็กแนวตั้ง (Vertical — DB16 @500 EF)

1.  คลิกเลือก **ผนัง** ในรูปตัด
2.  กด **Rebar** (ในแถบ Modify | Walls)
3.  ตั้งค่า:
    - **Rebar Shape:** `M_T1 - Straight`
    - **Bar Diameter:** `16` (DB16)
    - **Placement Orientation:** `Perpendicular to Cover` (เหล็กยาวตามแนวตั้ง)
4.  คลิกวางที่ **ด้านหน้า** ของผนัง (ชิดระยะหุ้ม)
5.  **จัดเรียง:**
    - Layout Rule = **`Maximum Spacing`**
    - **Spacing:** ใส่ `500` (mm)
6.  ทำซ้ำอีกครั้งที่ **ด้านหลัง** ของผนัง (อีกหน้าหนึ่ง)
7.  ผลลัพธ์: เหล็ก DB16 @500 mm ทั้ง 2 หน้า (**Each Face**) ✅

### ขั้นที่ 2: เหล็กแนวนอน (Horizontal — DB12 @150 EF)

1.  คลิกเลือก **ผนัง** อีกครั้ง -> กด **Rebar**
2.  ตั้งค่า:
    - **Rebar Shape:** `M_T1 - Straight`
    - **Bar Diameter:** `12` (DB12)
    - **Placement Orientation:** `Parallel to Work Plane` (เหล็กขวางตามแนวนอน)
3.  คลิกวางที่ด้านหน้าผนัง
4.  **จัดเรียง:**
    - Layout Rule = **`Maximum Spacing`**
    - **Spacing:** ใส่ `150` (mm)
5.  ทำซ้ำที่ด้านหลังผนัง
6.  ผลลัพธ์: เหล็ก DB12 @150 mm ทั้ง 2 หน้า ✅

> [!TIP]
> ใช้ **Propagate Rebar** เพื่อ Copy เหล็กไปผนังชิ้นอื่นที่มี Type เดียวกันได้ทันที (คลิกขวาที่ Rebar Set -> Propagate)
