---
title: รายละเอียดเหล็กและแบบขั้นสูง (Advanced Rebar & Documentation)
description: งานเหล็กเสริมระดับ production, shop drawing, coupler, lap splice และการจัดรายละเอียดลงแบบ
sidebar:
  order: 14
---

> [!IMPORTANT]
> บทนี้ต่อจากบท Documentation โดยจะพาจาก schedule พื้นฐานไปสู่ `BBS`, mark งานเหล็ก, lap splice, coupler และชุด shop drawing ระดับ production

## เป้าหมายของบทนี้

จากบทเหล็กเดิม เรา "วางเหล็กได้" แล้ว แต่ในงานจริงยังต้องทำอีก 4 เรื่อง:

- แยกเหล็กเป็นกลุ่มที่หน้างานอ่านได้
- จัด Mark / Partition / BBS ให้ตรวจย้อนกลับได้
- วางรายละเอียดต่อทาบและ coupler ตามสมมติฐานการก่อสร้าง
- ทำ shop drawing ที่ดูแล้วสร้างได้จริง

---

## 1. แบ่งกลุ่มเหล็กให้หน้างานอ่านได้

### Parameter ที่ควรใช้กับ rebar ทุกชุด

| Parameter | ใช้ทำอะไร |
| --------- | ---------- |
| `Partition` | แยกหมวด Column / Beam / Slab / Wall / Foundation |
| `Comments` | ใส่ Mark เช่น `C1-M1`, `B1-S1` |
| `Schedule Mark` | ใช้ผูกกับ BBS |

### ตัวอย่างระบบ Mark

| ชิ้นส่วน | Mark ตัวอย่าง |
| -------- | ------------- |
| เหล็กแกนเสา | `C1-M1` |
| ปลอกเสา | `C1-S1` |
| เหล็กบนคาน | `B1-T1` |
| เหล็กล่างคาน | `B1-B1` |
| ปลอกคาน | `B1-S1` |

> [!TIP]
> Mark ที่ดีต้องอ่านแล้วรู้ทันทีว่าเป็นเหล็กของ host ใด และเป็นชุดประเภทไหน

---

## 2. Lap Splice และ Coupler

### A. แนวคิด

ในโมเดล workshop เรามักวางเหล็กเป็นเส้นยาวต่อเนื่องเพื่อให้ง่ายต่อการเรียน แต่ในงานจริงต้องพิจารณา:

- ความยาวเหล็กที่สั่งซื้อได้
- ตำแหน่งต่อทาบที่อนุญาต
- การใช้ mechanical coupler
- ระยะ clear spacing รอบจุดต่อ

### B. วิธีทำในโมเดล

#### วิธีที่ 1: แสดงแบบเชิงสื่อสาร

ใช้เมื่อเป้าหมายคือแบบก่อสร้างทั่วไป:

1. วาง rebar set หลักให้ครบก่อน
2. ใช้ `Detail Callout` หรือ `Section` เฉพาะจุด
3. ใส่ Text/Keynote ระบุ:
   - Lap length
   - Coupler type
   - ตำแหน่งต่อเหนือ/ใต้พื้น

#### วิธีที่ 2: โมเดลแยกเป็นท่อนจริง

ใช้เมื่อทำ shop drawing ลึก:

1. Duplicate ชุดเหล็กหลัก
2. ปรับความยาวให้เป็นแต่ละท่อน
3. กำหนด Mark แยกต่อท่อน
4. ใช้ BBS แยกจำนวนและความยาวจริง

> [!WARNING]
> ถ้าแยกเหล็กเป็นท่อนจริง ต้องคุม Mark และ Schedule อย่างเข้มงวด ไม่อย่างนั้น BBS จะสับสนมากกว่าง่ายขึ้น

---

## 3. Shop Drawing View Set

### View ที่ควรมีสำหรับงานเหล็ก

| View | ใช้กับอะไร |
| ---- | ---------- |
| Plan Rebar | เหล็กพื้น / เหล็กผนัง |
| Beam Section | เหล็กคาน |
| Column Section | เหล็กเสา |
| Foundation Section | เหล็กฐานราก |
| 3D Rebar QA | ตรวจการชนและการวางตัว |

### Template ที่แนะนำ

- `Section - Rebar Dense`
- `Plan - Slab Rebar`
- `Plan - Wall Rebar`
- `3D - Rebar Review`

---

## 4. Callout และ Detail Component

### ใช้เมื่อไหร่?

เมื่อ section หลักเริ่มแน่นเกินไป ให้ตัด callout เฉพาะจุด:

- หัวเสา-คาน
- หัวเสา-พื้น
- ขอบช่องเปิด
- ปลายคาน
- รอยต่อผนัง-พื้น

### สิ่งที่ควรแสดงใน callout

1. Cover
2. Main bars
3. Stirrups / ties
4. Lap หรือ coupler
5. Reference notes

---

## 5. BBS ที่ใช้งานจริงควรมีอะไรเพิ่ม?

นอกจาก `Bar Diameter`, `Shape`, `Quantity`, `Total Bar Length` ให้เพิ่ม:

| Field | เหตุผล |
| ----- | ------ |
| `Comments` | ใช้เป็น Mark |
| `Partition` | แยกหมวด host |
| `Host Mark` หรือค่าที่เทียบเท่า | ผูกกลับไปยังชิ้นส่วน |
| `Bar Length` | ตรวจรายชิ้น |

### รูปแบบตารางที่แนะนำ

| Mark | Host | Dia | Shape | Qty | Each Length | Total Length |
| ---- | ---- | --- | ----- | --- | ----------- | ------------ |
| C1-M1 | C1 | DB25 | M_00 | 12 | 11800 | 141600 |

---

## 6. การออกแบบ Sheet งานเหล็ก

### A. ลำดับข้อมูลใน Sheet

1. Plan หรือ Section หลัก
2. Callout รายละเอียด
3. Notes
4. BBS ย่อ
5. General legend / standard notes

### B. สิ่งที่ไม่ควรทำ

- ยัดทั้งแปลนและเหล็กทุกชั้นลง Sheet เดียว
- ใช้ rebar view ที่ไม่ได้ตั้ง template แล้ว linework รก
- ปล่อย Mark ซ้ำใน sheet เดียวกัน

---

## 7. Checklist ก่อนปล่อย Shop Drawing

1. Mark ไม่ซ้ำ
2. Partition ถูกต้อง
3. View scale เหมาะกับความหนาแน่นเหล็ก
4. Cover และ spacing อ่านได้จริง
5. Callout ตรงกับ host จริง
6. BBS รวมยอดได้
7. เปิด PDF ทดสอบแล้วตัวอักษรไม่ทับกัน

---

## สรุป

บทนี้คือสะพานจาก "โมเดลเพื่อเรียนรู้" ไปสู่ "โมเดลเพื่อหน้างาน" ยิ่งงานเหล็กละเอียดเท่าไร การคุม Mark, View, และ BBS ยิ่งสำคัญกว่าการวางเหล็กอย่างเดียวครับ
