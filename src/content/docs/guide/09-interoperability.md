---
title: การส่งต่อข้อมูล (Interoperability)
description: การทำงานร่วมกันระหว่าง Revit และ ETABS แบบ Step-by-Step
sidebar:
  order: 9
---

## ทำไมต้องส่งข้อมูลไป-กลับ?

| ทิศทาง            | เมื่อไหร่                              | ประโยชน์                      |
| ----------------- | -------------------------------------- | ----------------------------- |
| **Revit → ETABS** | ขึ้นโมเดลใน Revit ก่อน                 | ไม่ต้องสร้างโมเดลซ้ำ 2 รอบ    |
| **ETABS → Revit** | ออกแบบใน ETABS ก่อน (แบบ Workshop นี้) | ส่งผลหน้าตัด/เหล็กกลับมาทำแบบ |

---

## วิธีที่ 1: ใช้ CSiXRevit Plugin (แนะนำ ⭐)

### เตรียมตัว

1.  ดาวน์โหลด **CSiXRevit Plugin** จากเว็บไซต์ CSI (https://www.csiamerica.com) หรือค้นหา `CSiXRevit` ใน **Autodesk App Store** (apps.autodesk.com)
2.  ติดตั้งให้ตรงกับเวอร์ชัน Revit ที่ใช้ (เช่น CSiXRevit for Revit 2026)
3.  รีสตาร์ท Revit -> จะเห็น Tab **Add-Ins** มีเมนู CSi เพิ่มขึ้นมา

### A. Export จาก Revit ไป ETABS

1.  เปิดโมเดล Revit ที่ต้องการส่งออก
2.  ไปที่ **Add-Ins > External Tools > Export to Create New ETABS Model**
3.  เลือก Elements ที่จะส่ง:
    - ✅ Grids (เส้น Grid)
    - ✅ Levels (ระดับชั้น)
    - ✅ Structural Columns (เสา)
    - ✅ Structural Framing (คาน)
    - ✅ Structural Floors (พื้น)
    - ✅ Structural Walls (กำแพงรับแรง)
    - ❌ ไม่ต้องเลือก Architectural Elements
4.  ตั้งชื่อไฟล์: `Condo30_Revit_Export.exr`
5.  กด **Export**
6.  เปิด ETABS -> **File > Import > Revit Structure (.exr)** -> เลือกไฟล์ที่ส่งออกมา

### B. Import ผลออกแบบจาก ETABS กลับ Revit

1.  ใน ETABS ออกแบบเสร็จแล้ว
2.  ไปที่ **Add-Ins > External Tools > Update Revit Model from ETABS**
3.  เลือกไฟล์ ETABS (`.edb`)
4.  เลือกข้อมูลที่จะนำกลับ:
    - ✅ Section Sizes (ขนาดหน้าตัด)
    - ✅ Material Assignments (วัสดุ)
5.  กด **Update**

> [!WARNING]
> **Backup ก่อนเสมอ!** ก่อนทำ Update ให้ Save As ไฟล์ Revit เป็นชื่อใหม่ก่อน (เช่น `Condo30_v2.rvt`) เพราะถ้าข้อมูลผิดพลาดจะได้กลับไปไฟล์เดิมได้ครับ

---

## วิธีที่ 2: ใช้ IFC (กรณีไม่มี CSiXRevit)

1.  **Export จาก Revit:**
    - **File > Export > IFC** -> เลือก Format: `IFC 2x3` หรือ `IFC 4`
    - ตั้งชื่อ: `Condo30.ifc`
2.  **Import ใน ETABS:**
    - **File > Import > IFC File** -> เลือกไฟล์ `.ifc`

> [!NOTE]
> IFC รองรับข้อมูลได้มากกว่า Geometry แต่ในการนำเข้า ETABS โดยทั่วไปมักได้ผลใช้งานหลักเป็น **Geometry** จึงควรเตรียมปรับ Supports, Releases, และ Load เพิ่มใน ETABS ครับ

---

## ⚠️ ข้อควรระวัง (Best Practices)

### 1. Analytical Model ต้องสะอาด

- เปิดดู **View > Analytical Model** ใน Revit
- เส้นสีส้ม (Analytical Line) ต้อง **ต่อกันสนิท** ทุกจุด
- ถ้ามีเส้นลอย (ไม่ต่อกัน) ให้ปรับ:
  1.  เลือกชิ้นส่วนนั้น
  2.  ไปที่ Properties > **Analytical Model** section
  3.  ปรับ **Analytical Adjust** ให้เส้นชนกัน

### 2. ชื่อ Level & Grid ต้องตรงกัน

| Revit   | ETABS | สถานะ                    |
| ------- | ----- | ------------------------ |
| 1F      | 1F    | ✅ ตรงกัน                |
| Level 1 | 1F    | ❌ ไม่ตรง! จะ Map ไม่ได้ |

**วิธีแก้:** ตั้งชื่อใน Revit ให้ตรงกับ ETABS ตั้งแต่แรก (ซึ่งเราทำไว้แล้วในบทที่ 3 ✅)

### 3. เริ่มจากโครงสร้างหลักก่อน

อย่าส่งโมเดลซับซ้อน (บันไดวน, ฟาซาด, ราวกันตก) ไป ETABS แนะนำให้ส่งแค่:

- ✅ เสา, คาน, พื้น, กำแพงรับแรง
- ❌ บันได, Ramp, องค์ประกอบสถาปัตย์

---

## 🏁 บทสรุป

ถึงตรงนี้ คุณได้เรียนรู้ Workflow ครบวงจรของ **Revit Structure** แล้วครับ:

1.  ✅ **Setup:** ตั้ง Template + หน่วย + Grid/Level
2.  ✅ **Modeling:** ขึ้นโมเดลเสา/คาน/พื้น 30 ชั้น
3.  ✅ **Reinforcement:** ใส่เหล็กเสริมตามผลออกแบบจาก ETABS
4.  ✅ **Shear Wall:** วาดผนังรับแรง + เหล็กเสริมผนัง
5.  ✅ **Documentation:** ทำ Tag, Schedule BOQ, และจัดหน้า Sheet
6.  ✅ **Interoperability:** ส่งข้อมูลไป-กลับระหว่าง Revit กับ ETABS

เมื่อรวมกับคู่มือ **ETABS Tutorial Guide** คุณจะมี Workflow การออกแบบอาคารสูงที่สมบูรณ์แบบ ตั้งแต่วิเคราะห์โครงสร้างจนถึงส่งแบบก่อสร้างครับ!

หวังว่าคู่มือ **Revit Tutorial Guide** เล่มนี้จะช่วยให้คุณทำงาน BIM ได้คล่องขึ้นนะครับ ลุย! 👷‍♂️🏢
