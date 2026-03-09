---
title: Family และ Dynamo ขั้นสูง (Advanced Family & Dynamo)
description: สูตร Family, nested/shared family, Dynamo workflow ระดับทีม และการทำ automation ให้ดูแลง่าย
sidebar:
  order: 15
---

> [!IMPORTANT]
> **สถานะของบทนี้: Advanced / Optional**
> บทนี้เป็นเนื้อหาต่อยอดสำหรับคนที่เริ่มออกแบบมาตรฐานงาน, family system และ automation ของทีมแล้ว ไม่จำเป็นสำหรับผู้อ่านทุกคนในรอบแรก

## ทำไมต้องมีบทนี้?

Family Editor และ Dynamo ถ้าใช้แค่ระดับพื้นฐานจะช่วยงานได้ไม่มาก แต่ถ้าใช้ถูกวิธีจะลดงานซ้ำในทีมได้มหาศาล

บทนี้เน้น 2 เรื่อง:

- ทำ family ให้ยืดหยุ่นแต่ไม่พังง่าย
- ทำ Dynamo ให้ทีมอื่นเปิดใช้ต่อได้จริง

---

## 1. Family ขั้นสูง: จาก Parametric ไปสู่ Production

### A. สูตร (Formulas)

ตัวอย่าง parameter ที่ใช้กันบ่อย:

| Parameter | Formula ตัวอย่าง | ใช้ทำอะไร |
| --------- | ---------------- | ---------- |
| `cover` | `25 mm` | ระยะคอนกรีตหุ้ม |
| `core_b` | `b - cover * 2` | ขนาดคอร์ด้านใน |
| `core_d` | `d - cover * 2` | ขนาดคอร์อีกด้าน |

> [!TIP]
> ถ้า family มี logic ซับซ้อน ให้ตั้งชื่อ parameter แบบอ่านแล้วเดาหน้าที่ เช่น `overall_b`, `overall_d`, `clear_cover`

### B. Visibility Parameters

ใช้เปิด/ปิด geometry หรือ symbolic line:

- `Show_2D_Symbol`
- `Show_Anchor`
- `Show_Tag_Geometry`

เหมาะกับ family ที่ต้องแสดงต่างกันใน `Coarse / Medium / Fine`

### C. Nested และ Shared Families

ใช้เมื่อ:

- ต้อง reuse ชิ้นส่วนย่อยซ้ำหลาย family
- ต้อง tag/schedule ชิ้นส่วน nested แยก

กฎง่ายๆ:

- `Nested` อย่างเดียว: ใช้ควบคุม geometry ภายใน
- `Shared`: ใช้เมื่ออยากให้โผล่ใน project แยกและ tag/schedule ได้

---

## 2. Family ที่ควรทำเพิ่มในสายโครงสร้าง

ถ้าจะให้เล่มนี้จบงานได้จริง ควรฝึก family ต่อจาก L-shape อีก 3 กลุ่ม:

1. Generic detail family สำหรับ section notes
2. Embedded plate / insert family
3. Opening / sleeve family ที่มี parameter ขนาด

---

## 3. Dynamo ระดับ production ต้องคิดอะไรเพิ่ม?

### A. เริ่มจากโจทย์ซ้ำๆ ก่อน

โจทย์ที่เหมาะกับ Dynamo:

- Rename views/sheets จำนวนมาก
- สร้าง levels/grids จากตาราง
- วาง elements ซ้ำตามจุดอ้างอิง
- ตรวจ parameter ว่ากรอกครบหรือไม่
- สร้าง QA report

### B. สิ่งที่ไม่ควรรีบทำด้วย Dynamo

- งานที่แก้มือใน Revit ง่ายกว่าเขียน graph
- งานที่ logic ยังไม่นิ่ง
- งานที่ dependency package เยอะเกินจำเป็น

---

## 4. โครงสร้างกราฟที่ทีมดูแลต่อได้

### รูปแบบ graph ที่แนะนำ

1. **Inputs**
2. **Selection / Filtering**
3. **Data Cleaning**
4. **Action**
5. **Outputs / Report**

### ชื่อ Node Group

ใช้ Note group ตั้งชื่อให้ชัด:

- `INPUT - Excel File`
- `FILTER - Structural Plans`
- `ACTION - Rename Views`
- `REPORT - Result`

> [!IMPORTANT]
> ถ้าทีมอื่นเปิด graph แล้วไม่รู้ว่า input อยู่ตรงไหน แปลว่า graph นั้นยังไม่พร้อมใช้งานจริง

---

## 5. Dynamo Player พร้อมใช้ในทีม

### Checklist ก่อนปล่อย graph ให้ทีม

1. Input สำคัญอยู่ต้น graph
2. มี note อธิบาย
3. ไม่มี node ทดลองที่ยังต่อค้างไว้
4. package ที่ต้องใช้ถูกระบุไว้
5. ทดสอบกับไฟล์ตัวอย่างอย่างน้อย 1 ไฟล์

### Output ที่ควรมี

- จำนวน element ที่แก้ไข
- รายการที่ทำไม่สำเร็จ
- คำเตือนถ้าเจอชื่อซ้ำ/parameter ว่าง

---

## 6. ตัวอย่าง Automation ที่ควรมีในองค์กร

| Automation | ประโยชน์ |
| ---------- | -------- |
| Rename Structural Plans | ลดงาน manual |
| Check Missing Type Mark | ป้องกัน schedule พัง |
| Set View Template in Batch | คุมมาตรฐานทั้งโครงการ |
| Create Sheets from Excel | เร่งการออกเอกสาร |
| QA Parameter Report | ตรวจคุณภาพโมเดลก่อนส่ง |

---

## 7. เมื่อไหร่ควรใช้ Add-in แทน Dynamo

ใช้ add-in เมื่อ:

- งานต้องเสถียรสูง
- มีผู้ใช้จำนวนมาก
- graph เริ่มซับซ้อนและแก้ยาก
- ต้องมี UI ชัดเจน

ใช้ Dynamo เมื่อ:

- ต้องการ prototype เร็ว
- logic เปลี่ยนบ่อย
- ผู้ใช้หลักคือทีม BIM ภายใน

---

## สรุป

Family ขั้นสูงช่วยให้ชิ้นส่วนยืดหยุ่น ส่วน Dynamo ขั้นสูงช่วยให้ workflow ของทั้งทีมเร็วขึ้น บทนี้จึงเป็นหัวใจของการยกระดับจาก "ผู้ใช้ Revit" ไปเป็น "ผู้ออกแบบระบบงาน Revit" ครับ
