---
title: สร้าง Family เอง (Family Editor)
description: สร้างหน้าตัดโครงสร้างแบบ Custom ที่ไม่มีใน Library มาตรฐาน
sidebar:
  order: 12
---

## Family คืออะไร?

ใน Revit ทุกชิ้นส่วน (เสา, คาน, ประตู) คือ **Family** ซึ่งแบ่งเป็น 3 ประเภท:

| ประเภท              | ตัวอย่าง                  | แก้ไขได้?                 |
| ------------------- | ------------------------- | ------------------------- |
| **System Family**   | Wall, Floor, Slab         | ❌ แก้ได้เฉพาะ Properties |
| **Loadable Family** | Column, Beam, Door        | ✅ แก้ได้ใน Family Editor |
| **In-Place Family** | ชิ้นงานพิเศษเฉพาะโปรเจกต์ | ✅ สร้างได้ตรงใน Project  |

**เมื่อไหรควรสร้าง Family เอง?**

- หน้าตัดพิเศษที่ไม่มีใน Library: L-shape, T-shape, I-section
- ต้องการ Parameter ควบคุม เช่น ความกว้าง-สูงแบบ Parametric

---

## ✍️ Tutorial: สร้าง Structural Column — L-Shape (300×300×100)

### ขั้นที่ 1: เปิด Family Editor

1. ไปที่ **File > New > Family**
2. เลือก Template: **`Metric Structural Column.rft`** → กด **Open**
3. Family Editor จะเปิดขึ้นในหน้าต่างใหม่

> [!NOTE]
> Template `Metric Structural Column.rft` อยู่ที่ `C:\ProgramData\Autodesk\RVT 2026\Family Templates\English\`

### ขั้นที่ 2: เข้าใจ Reference Planes

จะเห็น **เส้น Reference Planes** (เส้นสีเขียว) 2 เส้นตัดกัน:

- เส้นแนวตั้ง = ศูนย์กลางแกน Y
- เส้นแนวนอน = ศูนย์กลางแกน X

> [!IMPORTANT]
> **ห้ามลบ Reference Planes เดิม!** เส้นเหล่านี้คือจุดอ้างอิงสำหรับ Insertion Point ของ Family ครับ

### ขั้นที่ 3: สร้าง Reference Planes สำหรับ L-Shape

1. คำสั่ง **Create > Reference Plane** (หรือ `RP`)
2. วาด Reference Plane ตามนี้:
   - แนวตั้ง: ห่างจากศูนย์กลาง **150 mm** ทางขวา (Width/2)
   - แนวตั้ง: ห่างจากศูนย์กลาง **-150 mm** ทางซ้าย
   - แนวนอน: ห่างศูนย์กลาง **150 mm** ขึ้นบน
   - แนวนอน: ห่างศูนย์กลาง **-150 mm** ลงล่าง
   - แนวตั้ง: ห่างจากซ้าย **100 mm** (Two Web ของ L)
   - แนวนอน: ห่างจากล่าง **100 mm** (Flange ของ L)

### ขั้นที่ 4: สร้าง Parameters

1. **Create > Family Types** → คลิก **New Parameter**
2. สร้าง Parameter เหล่านี้:

| ชื่อ Parameter        | ประเภท | ค่าเริ่มต้น |
| --------------------- | ------ | ----------- |
| `b` (ความกว้าง)       | Length | 300 mm      |
| `d` (ความลึก)         | Length | 300 mm      |
| `tf` (ความหนา Flange) | Length | 100 mm      |
| `tw` (ความหนา Web)    | Length | 100 mm      |

3. กด **OK**

### ขั้นที่ 5: วาดหน้าตัด L-Shape

1. ไปที่ View **Floor Plan: Lower Ref. Level**
2. คำสั่ง **Create > Forms > Extrusion**
3. วาดเส้นขอบตาม Reference Planes ที่สร้างไว้ รูปร่าง L

```
┌──────┐
│      │← ความกว้าง b = 300
│      ├──────────────┐
│      │              │← ความหนา tf = 100
└──────┴──────────────┘
↑ tw=100
```

4. กด ✅ **Finish Edit Mode**
5. ตั้งค่า **Extrusion End** = `10000` (ความสูง Default)

### ขั้นที่ 6: Flex Test

1. **Create > Family Types** → เปลี่ยนค่า `b` เป็น `400` → กด Apply
2. ดูว่า Extrusion ขยายตามไหม ถ้าขยาย = Parametric ทำงานแล้ว! ✅

### ขั้นที่ 7: บันทึกและ Load เข้าโปรเจกต์

1. **File > Save As** → ตั้งชื่อ `M_Structural Column-L Shape.rfa`
2. คลิก **Load into Project** (ปุ่มสีเขียวบน Ribbon)
3. กลับไปที่ Project → เลือก Family ใหม่จาก Column Type List

---

> [!TIP]
> **แหล่ง Family ฟรี:** [Autodesk Seek](https://seek.autodesk.com) และ [BIMObject](https://bimobject.com) มี Library ให้ Download ฟรีหลายพัน Family ลองหาดูก่อนสร้างเองครับ
