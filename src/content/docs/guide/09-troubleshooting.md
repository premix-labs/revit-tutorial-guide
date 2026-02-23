---
title: แก้ปัญหาที่พบบ่อย (Troubleshooting)
description: รวมปัญหาที่พบบ่อยใน Revit Structure พร้อมวิธีแก้
sidebar:
  order: 9
---

## ปัญหาตอน Modeling

### ❌ "The floor/slab is not enclosed"

**สาเหตุ:** เส้นขอบเขตพื้น (Boundary) ไม่ปิดสนิท

**วิธีแก้:**

1.  กลับเข้า **Edit Boundary** (ดับเบิลคลิกที่ขอบพื้น)
2.  Zoom เข้าไปดูทุกมุม — หาจุดที่เส้นไม่ต่อกัน
3.  ใช้ **Trim/Extend** (`TR`) เชื่อมเส้นให้ชนกัน
4.  กด ✅ Finish Edit Mode

> [!TIP]
> วิธีป้องกัน: ใช้ **Pick Lines** (คลิกเส้น Grid) แทนวาดมือ เพราะจะ Snap กับ Grid พอดีทุกครั้ง

### ❌ เสา/คานหายหลัง Copy to Levels

**สาเหตุ:** ลืมใช้ Filter ก่อน Copy ทำให้ Copy Grid/Level ซ้อนกันแล้วหาย

**วิธีแก้:**

1.  กด `Ctrl+Z` (Undo) กลับไปก่อน Copy
2.  เลือกชิ้นส่วนใหม่ -> กด **Filter** (icon กรวย)
3.  เลือกเฉพาะ:
    - ✅ Structural Columns
    - ✅ Structural Framing
    - ✅ Floors
    - ❌ เอา Grids, Levels, Reference Planes ออก
4.  กด OK -> `Ctrl+C` -> Paste Aligned to Selected Levels

### ❌ เสาวาดแล้วหายไป (ไม่เห็นในแปลน)

**สาเหตุ (บ่อย):**
| สาเหตุ | วิธีเช็ค | วิธีแก้ |
|---|---|---|
| Depth vs Height สลับกัน | ดู Options Bar | เปลี่ยนเป็น Height |
| View Range ไม่ครอบ | Properties > View Range | ปรับ Cut Plane/Bottom ให้ครอบ |
| Discipline ไม่ใช่ Structural | Properties > Discipline | เปลี่ยนเป็น **Structural** |
| Detail Level = Coarse | View Control Bar | เปลี่ยนเป็น **Medium** หรือ **Fine** |

---

## ปัญหาตอนใส่เหล็ก (Rebar)

### ❌ Rebar ไม่แสดง (มองไม่เห็น)

**วิธีแก้:**

1.  ตั้ง **Detail Level = Fine** (แถบล่าง)
2.  ตั้ง **Visual Style = Hidden Line** (ไม่ใช่ Wireframe)
3.  ถ้ายังไม่เห็น ลองเปิด **View > Visibility/Graphics** (`VG`):
    - หา Category **Structural Rebar** -> ติ๊ก ✅ ให้แสดง

### ❌ "Cannot place rebar in this host"

**สาเหตุ:** ชิ้นส่วนที่เลือก **ไม่ใช่ Structural** (อาจเป็น Architectural)

**วิธีแก้:**

1.  เช็คว่าเสา/คาน/ผนัง เป็น **Structural** Category:
    - เสา: ต้องสร้างด้วย **Structure > Column > Structural Column**
    - ผนัง: ต้องสร้างด้วย **Structure > Wall > Structural Wall**
2.  ถ้าเป็น Architectural ต้องลบแล้วสร้างใหม่เป็น Structural

### ❌ เหล็กปลอกยื่นออกนอกชิ้นส่วน

**สาเหตุ:** Cover Distance น้อยเกินไป หรือ Rebar Shape ไม่ตรงกับหน้าตัด

**วิธีแก้:**

1.  เลือก Rebar -> ดู Properties > **Cover Distance**
2.  ปรับ Cover ให้เหมาะสม (ทั่วไป 25-40 mm)
3.  ถ้า Shape ไม่เข้ากัน ให้ลบแล้วเลือก Shape ใหม่

---

## ปัญหาตอนทำ Schedule / Sheet

### ❌ Schedule แสดงค่า "Not Calculated"

**วิธีแก้:**

1.  ค่า Volume/Weight ต้อง **Run อย่างน้อย 1 ครั้ง** ใน Revit:
    - ไปที่ **Analyze > Structural Analysis** -> กด Run (แม้จะไม่ได้ใช้ผล)
2.  หรือเช็คว่า Field ที่เลือกเป็น **Calculated Value** (ต้องติ๊ก Calculate totals)

### ❌ Tag แสดงเป็น "?"

**สาเหตุ:** ไม่มี Tag Family ที่ตรงกับ Category ของชิ้นส่วน

**วิธีแก้:**

1.  กด **Load Family** -> ไปที่ `Annotations > Structural`
2.  เลือก Tag ที่ตรง Category:
    - `M_Structural Column Tag.rfa` (สำหรับเสา)
    - `M_Structural Framing Tag.rfa` (สำหรับคาน)
3.  Tag ใหม่อีกครั้ง

---

## ปัญหาตอน Interoperability

### ❌ CSiXRevit Export แล้ว Error

**วิธีแก้:**

1.  เช็คว่า **Analytical Model** เปิดอยู่ (View > Analytical Model)
2.  เช็คว่าเส้น Analytical **ต่อกันสนิท** ทุกจุด
3.  ถ้ามี Warning "Analytical model is inconsistent":
    - เลือกชิ้นส่วนที่มีปัญหา
    - Properties > Analytical Model > ปรับ **Analytical Adjust**
4.  ลอง Export เฉพาะ **โครงสร้างหลัก** (เสา/คาน/พื้น) ก่อน ไม่ต้อง Export ของ Architectural

### ❌ Revit กระตุกช้ามากกับโมเดลใหญ่

| วิธีแก้                                  | ผล                     |
| ---------------------------------------- | ---------------------- |
| ปิด Analytical Model (View > Analytical) | ⭐⭐⭐⭐⭐ เร็วขึ้นมาก |
| ตั้ง Visual Style = Wireframe ตอนทำงาน   | ⭐⭐⭐⭐               |
| ตั้ง Detail Level = Coarse ตอนวาด        | ⭐⭐⭐                 |
| ปิด Workset ที่ไม่ใช้                    | ⭐⭐⭐                 |
| Purge Unused (Manage > Purge Unused)     | ⭐⭐                   |
