---
title: ประสานงานและส่งมอบงาน (Coordination & Delivery)
description: workflow ปิดงานจริงตั้งแต่ coordination, clash review, publish, export และ handoff
sidebar:
  order: 16
---

## บทสุดท้ายนี้สอนอะไร?

โมเดลจะมีคุณค่าก็ต่อเมื่อสามารถ "ส่งต่อ" ไปใช้งานจริงได้กับ:

- ทีมออกแบบสาขาอื่น
- ผู้ตรวจแบบ
- ผู้รับเหมา
- ทีมหน้างาน
- ทีมดูแลโมเดลระยะถัดไป

บทนี้สรุป workflow การปิดงานของหนังสือทั้งเล่มให้ครบ

---

## 1. ลำดับงานประสานแบบ (Coordination Workflow)

### ลำดับที่แนะนำ

1. Reload ทุก linked model
2. เปิด 3D coordination view
3. ตรวจการชนเชิงสายตา
4. ตรวจจุดเสี่ยง:
   - core wall
   - stair opening
   - ramp
   - beam ผ่าน shaft
   - slab edge
5. อัปเดต issue log

### มุมมองที่ควรมี

| View | ใช้ทำอะไร |
| ---- | ---------- |
| `3D - Coordination Overall` | ดูภาพรวม |
| `3D - Structure vs Arch` | เช็กทับกับสถาปัตย์ |
| `3D - Core & Stair` | เช็กจุดซับซ้อน |
| `3D - Foundation Review` | เช็กฐานราก/ใต้ดิน |

---

## 2. Issue Log

ถึงไม่มี ACC/Navisworks ก็ยังควรมี log ขั้นต่ำ:

| ID | พื้นที่ | ปัญหา | เจ้าของ | สถานะ |
| -- | ------ | ----- | ------- | ----- |
| STR-001 | Core F12 | Beam clash wall opening | Structure | Open |
| STR-002 | Ramp | Headroom ต่ำ | Arch | In Review |

> [!TIP]
> ถ้าใช้ Excel หรือ Sheets ธรรมดาก็พอ ขอแค่มีเลข issue, คนรับผิดชอบ, และสถานะติดตามได้

---

## 3. Export Set ที่ควรส่งมอบ

### ชุดไฟล์ขั้นต่ำ

| ชุด | ฟอร์แมต | ใช้กับใคร |
| --- | ------- | --------- |
| Drawing Set | PDF | ผู้ตรวจแบบ / ผู้รับเหมา |
| CAD Set | DWG | ทีมที่ต้องใช้ AutoCAD |
| Coordination Model | RVT / IFC / NWC | ทีมประสานงาน |
| Reports | TXT จาก Revit / XLSX ภายนอก / PDF | BOQ / BBS / QA |

### โฟลเดอร์ที่แนะนำ

```text
Deliverables/
  01_PDF/
  02_DWG/
  03_IFC/
  04_Reports/
  05_Archive/
```

---

## 4. Publish/Archive

### ก่อน publish

1. Sync ล่าสุด
2. Reload links
3. ตรวจ sheets ที่จะส่ง
4. Export test 1 รอบ
5. บันทึก version note

### การ archive

เก็บ milestone แยกชัดเจน เช่น:

- `2026-03-06_30pct`
- `2026-03-20_60pct`
- `2026-04-02_IFC-ISSUE`
- `2026-04-15_TENDER`

---

## 5. Handover Checklist

ก่อนปิดงาน ให้มี checklist นี้:

1. ชื่อไฟล์สุดท้ายเป็นมาตรฐาน
2. Sheet numbering คงที่
3. ลิงก์ทั้งหมด reload แล้ว
4. View templates ใช้งานจริง
5. Schedule หลักตรวจแล้ว
6. PDF/DWG เปิดได้
7. รายการ issue สำคัญปิดหรือถูกบันทึกไว้
8. Archive milestone แล้ว

---

## 6. ถ้าต้องส่งให้ทีมหน้างาน

ทีมหน้างานไม่ต้องการโมเดลที่ "สวย" แต่ต้องการข้อมูลที่ "ชัด"

ดังนั้นให้เน้น:

- Sheet อ่านง่าย
- Callout ครบ
- BBS ไม่สับสน
- Revision ชัด
- ชื่อ mark ตรงกันทุกแผ่น

---

## 7. ถ้าต้องส่งต่อให้ทีม BIM/Operation

ควรตรวจเพิ่ม:

- Parameter สำคัญกรอกครบ
- Type naming สม่ำเสมอ
- Linked file path จัดระเบียบ
- Export IFC ทดสอบแล้ว

---

## 8. ลำดับปิดงานของหนังสือเล่มนี้ (Closing Workflow)

ถ้าทำครบตั้งแต่บท 01 ถึงบทนี้ คุณควรทำงานได้ตามลำดับนี้:

1. ตั้งไฟล์และมาตรฐาน
2. ขึ้นโมเดลโครงสร้างหลัก
3. ใส่เหล็กและรายละเอียด
4. ทำแบบและ schedule
5. ตรวจ QA/QC
6. ทำ automation เท่าที่คุ้ม
7. ประสานงานกับทีมอื่น
8. ส่งมอบไฟล์และเอกสาร

## Capstone: ถ้าต้องส่ง Tender Set วันนี้

ใช้ลำดับนี้เป็น checklist แบบวันส่งจริง:

1. เปิดไฟล์ล่าสุดและ `Reload` links ทั้งหมด
2. เปิด `3D - Coordination Overall` แล้วกวาดดูจุดชนหลัก
3. ตรวจ issue log ว่ารายการค้างที่กระทบแบบถูกบันทึกไว้แล้ว
4. เปิด sheet สำคัญทุกแผ่น:
   - plan
   - section
   - rebar sheet
   - schedules
5. export `PDF` ชุดเต็ม 1 รอบ
6. export `DWG/IFC/NWC` ตามผู้รับปลายทางที่ต้องใช้จริง
7. เปิดไฟล์ export ที่ได้เพื่อตรวจซ้ำอย่างน้อย 1 รอบ
8. จัดเก็บ archive milestone และตั้งชื่อ version ให้ชัด
9. ส่งมอบพร้อม note สั้นๆ ว่า version นี้มีอะไรค้างหรือจำกัดอยู่บ้าง

> [!IMPORTANT]
> เป้าหมายของวันส่งไม่ใช่ "โมเดลสวยที่สุด" แต่คือ "ผู้รับปลายทางเปิดใช้ได้ เข้าใจได้ และติดตาม version ได้"

---

## สรุป

บทนี้คือการ "ปิดวงจร" ของหนังสือ จากเดิมที่คุณเรียนรู้คำสั่งทีละส่วน ตอนนี้คุณมี workflow ครบตั้งแต่เริ่มโมเดลจนถึงการส่งมอบงานจริงในทีมแล้วครับ
