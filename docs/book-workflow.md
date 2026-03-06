# Book Workflow

เอกสารนี้สรุป workflow ที่ควรใช้เวลาอ่าน ตรวจ และแก้หนังสือเล่มนี้

## 1. การอ่านแบบตรวจความถูกต้อง

เวลาอ่าน 1 บท ให้แยกตรวจ 4 ชั้น:

1. `Tool accuracy`
   - เมนู คำสั่ง ชื่อปุ่ม และพฤติกรรมของ Revit ถูกหรือไม่
2. `Workflow accuracy`
   - ลำดับขั้นตอนพาไปถึงผลลัพธ์จริงได้หรือไม่
3. `Cross-chapter consistency`
   - ชื่อ level, grid, type, ค่า example ตรงกับบทอื่นหรือไม่
4. `Reader usability`
   - คนอ่านจะรู้หรือไม่ว่าทำถูกแล้วควรเห็นอะไร

## 2. เวลาแก้บทที่มีลักษณะเป็น tutorial

พยายามให้แต่ละบทมีอย่างน้อย:

- prerequisite
- step-by-step
- checkpoint
- warning สำหรับจุดผิดบ่อย
- สะพานไปบทถัดไป

## 3. ลำดับบทหลักของหนังสือ

ลำดับโดยย่อของเล่มนี้:

1. บทนำ
2. รู้จักหน้าต่างโปรแกรม
3. เริ่มสร้างโปรเจกต์
4. ขึ้นโมเดลคอนกรีต
5. ใส่เหล็กเสริม
6. shear wall
7. บันได
8. เอกสารและ schedule
9. interoperability
10. troubleshooting
11. worksharing
12. family editor
13. Dynamo
14. standards และ QA/QC
15. advanced rebar/documentation
16. advanced family และ Dynamo
17. coordination และ delivery

ถ้าแก้บทใดบทหนึ่งที่อยู่ต้นเล่ม ต้องเช็กผลกระทบกับบทท้ายๆ เสมอ

## 4. จุดที่ควรเช็กซ้ำบ่อย

- ชื่อ `F1-F30`, `Roof`
- ชื่อ grid `A-F`, `1-4`
- ชื่อ type เช่น `C1`, `B1`, `S20`, `SW30`
- คำอธิบายเรื่อง top/bottom reinforcement
- schedule export
- shared coordinates / origin / link positioning

## 5. เวลาพบข้อมูลที่เป็นตัวอย่าง ไม่ใช่มาตรฐาน

ให้เขียนสถานะให้ชัดว่าเป็นอย่างใดอย่างหนึ่ง:

- ค่าจาก workshop
- ค่าจาก ETABS ของโครงการตัวอย่าง
- สมมติฐานโครงการ
- พฤติกรรมทั่วไปของ Revit

## 6. ขั้นตอนปิดงานแต่ละรอบ

1. อ่านไฟล์ที่เกี่ยวข้อง
2. แก้ด้วยความสอดคล้องทั้งบท
3. ถ้ามีผลกับ navigation ให้เช็ก `astro.config.mjs`
4. รัน `npm run build`
5. สรุปว่ามีอะไรแก้และยังเหลืออะไร
