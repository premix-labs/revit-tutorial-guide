---
title: การทำงานร่วมกัน (Workset & Worksharing)
description: การตั้งค่า Worksharing เพื่อทำงานทีมบน Revit พร้อมทริคป้องกัน Conflict
sidebar:
  order: 11
---

## Worksharing คืออะไร?

ในโปรเจกต์จริง วิศวกรโครงสร้าง สถาปนิก และ MEP ต้องทำงานในไฟล์ Revit **พร้อมกัน** โดยไม่เขียนทับงานกัน Revit แก้ปัญหานี้ด้วย **Worksharing (Workset)**:

- **Central Model:** ไฟล์หลักที่เก็บใน Server กลาง
- **Local Model:** สำเนาที่แต่ละคน Sync มาทำงานในเครื่องตัวเอง
- **Workset:** "พื้นที่รับผิดชอบ" แบ่งตามสาขา เช่น Structure, Architecture

---

## ✍️ Tutorial: ตั้งค่า Worksharing

### ขั้นที่ 1: Enable Worksharing

1. เปิดไฟล์ Revit (บนเครื่องตัวเอง)
2. ไปที่ **Collaborate > Manage Collaboration > Worksets**
3. กด **OK** เมื่อ Revit ถามว่า Enable Worksharing?
4. กล่องโต้ตอบ **Worksets** จะเปิดขึ้น — Revit สร้าง 2 Workset เริ่มต้นให้:
   - `Shared Levels and Grids`
   - `Workset1`

> [!IMPORTANT]
> **Enable Worksharing ได้ครั้งเดียว!** เมื่อเปิดแล้วปิดไม่ได้ ต้องแน่ใจว่าต้องการทำงานทีมจริงๆ ก่อนกด OK ครับ

### ขั้นที่ 2: สร้าง Workset ตามสาขา

คลิก **New** แล้วสร้าง Workset ตามนี้:

| ชื่อ Workset              | รับผิดชอบ                   |
| ------------------------- | --------------------------- |
| `Shared Levels and Grids` | Grid + Level (ทุกคนเห็น)    |
| `Structure`               | เสา, คาน, พื้น, ผนัง, เหล็ก |
| `Architecture`            | ผนัง Arch, ประตู, หน้าต่าง  |
| `MEP`                     | ท่อ, ไฟฟ้า, แอร์            |
| `Site`                    | ภูมิทัศน์, ถนน, รั้ว        |

กด **OK** หลังสร้างครบ

### ขั้นที่ 3: Save as Central Model

1. **File > Save As > Project**
2. บันทึกไปที่ **Network Drive หรือ BIM 360**
3. ตั้งชื่อไฟล์: `Condo30_Central.rvt`
4. ในหน้าต่าง Save Options ติ๊ก **Make this a Central Model** → กด **OK**

> [!WARNING]
> Central Model ต้องอยู่ใน **Server ที่ทุกคนเข้าถึงได้** เช่น Network Drive, BIM 360, หรือ Revit Server ไม่ควรเก็บในเครื่องคนเดียวครับ

### ขั้นที่ 4: สร้าง Local Model

แต่ละคนในทีมทำดังนี้:

1. เปิดไฟล์ Central (`Condo30_Central.rvt`)
2. **File > Save As > Project** → บันทึกในเครื่องตัวเองเป็น `Condo30_Local_[ชื่อ].rvt`
3. ทำงานใน Local Model ทุกครั้ง ไม่ทำงานใน Central โดยตรง!

---

## Workflow การทำงานทีมประจำวัน

```
เช้า: Open Local → Sync (รับงานล่าสุดจากทีม)
ทำงาน: แก้ไขใน Workset ที่รับผิดชอบ
บ่าย: Sync with Central (ส่งงานให้ทีม)
เย็น: Sync ก่อนปิด
```

### Sync with Central

1. ไปที่ **Collaborate > Synchronize with Central** (หรือ `Ctrl+Shift+S`)
2. กล่องโต้ตอบจะถามว่าต้องการ Comment ไหม → พิมพ์หมายเหตุ เช่น `"Added Column Rebar F1-F5"`
3. กด **OK**

> [!TIP]
> **Sync บ่อยๆ!** แนะนำ Sync ทุก 1-2 ชั่วโมง เพื่อลด Conflict ครับ

---

## ⚠️ การแก้ปัญหา Conflict

### ❌ "Element owned by another user"

**สาเหตุ:** คนอื่นกำลัง Edit ชิ้นส่วนนั้นอยู่

**วิธีแก้:**

1. รอให้เพื่อนร่วมทีม Sync งานเสร็จก่อน
2. หรือขอให้เพื่อน **Relinquish** ชิ้นส่วนนั้น:
   - **Collaborate > Relinquish All Mine**

### ❌ Central Model โหลดช้ามาก

**วิธีแก้:**

- เปิด Workset เฉพาะสาขาที่ต้องการ
- ปิด Workset ของสาขาอื่น: **Manage > Worksets** → Uncheck Workset ที่ไม่ต้องการ

---

> [!NOTE]
> **ทางเลือก Cloud:** Autodesk **BIM 360** (Autodesk Construction Cloud) รองรับ Worksharing ผ่าน Cloud โดยไม่ต้องมี Server กลางในออฟฟิส เหมาะสำหรับทีมที่ต้องทำงาน Remote ครับ
