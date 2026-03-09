---
title: การทำงานร่วมกัน (Workset & Worksharing)
description: การตั้งค่า Worksharing เพื่อทำงานทีมบน Revit พร้อมทริคป้องกัน Conflict
sidebar:
  order: 11
---

> [!NOTE]
> บทนี้เหมาะกับงานทีมหรือคนที่กำลังเตรียมไปทำงานร่วมกันจริง ถ้าคุณฝึกคนเดียว สามารถข้ามไปบท Family และ Dynamo ได้ก่อน แต่ถ้าจะไปต่อบท Advanced Rebar หรือ Coordination ควรผ่านบท Standards, Documentation และ Interoperability มาก่อน แล้วค่อยย้อนกลับมาอ่านบทนี้ตอนจะทำงานหลายคนในไฟล์เดียว
>
> **สำหรับไฟล์ฝึกคนเดียว:** ไม่ควรเปิด `Worksharing` เพียงเพื่อทำตามหนังสือ เพราะจะเพิ่มความซับซ้อนโดยไม่จำเป็น

> [!IMPORTANT]
> **สถานะของบทนี้: Advanced / Optional**
> บทนี้จำเป็นเมื่อคุณเริ่มทำงานหลายคนในไฟล์เดียว หรือทำงานบน central/cloud model เท่านั้น ถ้ายังฝึกโมเดลคนเดียว ให้ถือเป็นบทเสริม

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

> [!WARNING]
> **ทำสำเนาไฟล์ก่อนเปิด Worksharing ทุกครั้ง**
> ถ้านี่เป็นไฟล์ฝึกหรือไฟล์ที่ยังไม่แน่ใจว่าจะใช้ทำงานทีมจริงหรือไม่ ให้ `Save As` เก็บสำเนาไว้ก่อน เพราะหลังเปิด `Worksharing` แล้วจะย้อนกลับเป็นไฟล์เดี่ยวแบบเดิมไม่ได้ง่าย

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

### ขั้นที่ 3: Save As Central Model (กรณี File-Based Worksharing)

1. **File > Save As > Project**
2. บันทึกไปที่ **Network Drive** หรือระบบไฟล์ส่วนกลางที่ทีมทุกคนเข้าถึงได้
3. ตั้งชื่อไฟล์: `Condo30_Central.rvt`
4. ในหน้าต่าง Save Options ติ๊ก **Make this a Central Model** → กด **OK**

> [!WARNING]
> ขั้นตอน `Make this a Central Model` ใช้กับ **file-based central model** เท่านั้น ถ้าโปรเจกต์อยู่บน **Autodesk Construction Cloud (ACC)** จะใช้ workflow ของ Cloud Worksharing แยกต่างหาก ไม่ได้ Save As แบบนี้

> [!CAUTION]
> **ที่เก็บ Central Model ต้องเป็น file share ที่รองรับจริง**
> อย่าเก็บ file-based central model ไว้บน:
> - โฟลเดอร์ sync cloud ทั่วไป
> - Autodesk Docs Connected Drive
> - โฟลเดอร์ที่มีระบบ sync/background copy แทรกกลาง
>
> ถ้าทีมจะทำงานบน cloud ให้ใช้ **ACC Cloud Worksharing** แทน ไม่ควรเอา central model แบบ file-based ไปวางบนระบบที่ไม่ได้ออกแบบมาสำหรับ Revit worksharing

### ขั้นที่ 4: สร้าง Local Model (กรณี File-Based Worksharing)

แต่ละคนในทีมทำดังนี้:

1. ไปที่ **File > Open** แล้วเลือกไฟล์ Central (`Condo30_Central.rvt`)
2. ติ๊กตัวเลือก **Create New Local** ก่อนเปิดไฟล์
3. เปิดไฟล์แล้ว Revit จะสร้าง Local Model ให้โดยอัตโนมัติ จากนั้นให้ทำงานใน Local ทุกครั้ง ไม่ทำงานใน Central โดยตรง!

> [!WARNING]
> **ห้ามทำงานต่อถ้าเผลอเปิด Central ตรงๆ**
> หลังเปิดไฟล์ให้ตรวจทันทีว่าคุณกำลังอยู่ใน local model ไม่ใช่ central model
> - ถ้าลืมติ๊ก `Create New Local` ให้ปิดไฟล์โดยยังไม่แก้ไข แล้วกลับไปเปิดใหม่
> - อย่าเริ่มวาด แก้ หรือ sync ถ้ายังไม่ยืนยันสถานะไฟล์ เพราะความผิดพลาดจะกระทบทั้งทีมได้

### ขั้นที่ 5: กรณีใช้ Autodesk Construction Cloud (ACC)

ถ้าทีมทำงานบน ACC/Autodesk Docs ให้แยกความเข้าใจออกจาก file-based workflow:

1. Publish/Upload โมเดลขึ้น Project บน ACC ก่อน
2. เปิดโมเดลจาก ACC ผ่านหน้า Home หรือ Autodesk Docs
3. ถ้าเปิดเป็น **Cloud Workshared Model** อยู่แล้ว Revit จะใช้ไฟล์แคชในเครื่องให้อัตโนมัติ
4. โดยทั่วไป **ไม่ใช้** ขั้นตอน `Make this a Central Model` และ **ไม่ใช้** ช่อง `Create New Local` แบบเดียวกับไฟล์บน Network Drive

---

## ลำดับงานทีมประจำวัน

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
> **ทางเลือก Cloud:** Autodesk **Construction Cloud (ACC)** รองรับ Cloud Worksharing โดยไม่ต้องมี Server กลางในออฟฟิส เหมาะสำหรับทีมที่ต้องทำงาน Remote แต่ขั้นตอนเปิดไฟล์และ cache local จะต่างจาก file-based central model ครับ
