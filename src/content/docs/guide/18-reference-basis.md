---
title: กรอบอ้างอิงของหนังสือ (Reference Basis)
description: สรุปว่าแต่ละบทอิง Revit behavior, project assumption, engineering standard หรือ workflow guidance ในระดับใด
sidebar:
  order: 18
---

## บทนี้มีไว้ทำอะไร?

ภาคผนวกนี้ใช้ตอบคำถามสำคัญ 3 ข้อของหนังสือทั้งเล่ม:

1. เนื้อหาในแต่ละบทอิงจากอะไร
2. อะไรคือพฤติกรรมของ Revit ที่คาดหวังได้ทั่วไป
3. อะไรคือค่าตัวอย่างของโปรเจกต์ workshop ที่ต้องยืนยันใหม่ก่อนใช้กับงานจริง

> [!IMPORTANT]
> **วิธีใช้ภาคผนวกนี้**
> - ถ้ากำลังสงสัยว่าเนื้อหาบทใดเป็นกฎของโปรแกรมจริง หรือเป็นเพียงค่าตัวอย่างของโครงการ ให้เปิดตารางนี้ก่อน
> - ถ้าจะนำ workflow ไปใช้กับงานจริง ให้ยืนยันคอลัมน์ `สิ่งที่ต้องยืนยันเพิ่ม` ทุกครั้ง

## Legend

| ป้าย | ความหมาย |
| --- | --- |
| `Revit behavior` | พฤติกรรมของคำสั่ง, มุมมอง, host, schedule หรือการแสดงผลใน Revit |
| `Project assumption / workshop value` | ค่าขนาด, สเปกเหล็ก, ชื่อ type หรือโจทย์ตัวอย่างของโปรเจกต์คอนโด 30 ชั้น |
| `Engineering standard / design intent` | หลักวิศวกรรม, หลักการจัดเหล็ก, หรือแนวคิดการส่งมอบงาน |
| `Workflow guidance` | คำแนะนำเชิงลำดับงาน, decision path, หรือ best practice สำหรับการทำงาน |
| `Environment-dependent` | เนื้อหาที่ขึ้นกับเวอร์ชัน, package, plugin หรือโครงสร้างทีม |

## ตารางอ้างอิงรายบท

| บท | แกนหลักที่ใช้อ้างอิง | สิ่งที่ต้องยืนยันเพิ่มก่อนใช้กับงานจริง |
| --- | --- | --- |
| 01 Introduction | `Workflow guidance` | เป้าหมายการใช้งานของทีม, ขอบเขตงานจริง |
| 02 Interface | `Revit behavior` | shortcut บางชุดอาจต่างกันตามเครื่อง |
| 03 Starting Project | `Revit behavior` + `Workflow guidance` | units, naming convention, shared coordinates ของทีม |
| 04 Modeling Concrete | `Revit behavior` + `Project assumption / workshop value` | ขนาดองค์ประกอบจากแบบคำนวณจริง |
| 05 Reinforcement | `Revit behavior` + `Engineering standard / design intent` + `Project assumption / workshop value` | rebar spec, cover, lap/coupler rules ของโครงการ |
| 06 Shear Wall | `Revit behavior` + `Project assumption / workshop value` | core wall design, openings, detailing จริง |
| 07 Structural Stairs | `Revit behavior` + `Engineering standard / design intent` | ขนาดบันได, detailing และข้อกำหนดอาคารจริง |
| 08 Documentation | `Revit behavior` + `Workflow guidance` | title block, export standard, naming standard ของทีม |
| 09 Interoperability | `Workflow guidance` + `Environment-dependent` | tested version matrix ของ Revit / ETABS / CSiXRevit / IFC |
| 10 Troubleshooting | `Revit behavior` + `Workflow guidance` | อาการเฉพาะของ template, plugin หรือ content ในเครื่องจริง |
| 11 Worksharing | `Revit behavior` + `Workflow guidance` + `Environment-dependent` | โครงสร้าง central/local หรือ ACC ของทีม |
| 12 Family Editor | `Revit behavior` + `Workflow guidance` | family standard, shared parameter, template ที่ทีมใช้ |
| 13 Dynamo | `Workflow guidance` + `Environment-dependent` | package, parameter names, graph validation ในไฟล์จริง |
| 14 Standards & QA/QC | `Workflow guidance` | มาตรฐานสำนักงาน, checklist และ naming ของทีม |
| 15 Advanced Rebar Documentation | `Revit behavior` + `Engineering standard / design intent` | shop drawing standard, partition/mark rules, BBS format |
| 16 Advanced Family & Dynamo | `Workflow guidance` + `Environment-dependent` | package governance, family strategy และทีมผู้ดูแล |
| 17 Coordination & Delivery | `Workflow guidance` + `Engineering standard / design intent` | deliverable matrix, archive policy, issue tracking ของทีม |

## ขอบเขตที่หนังสือยืนยันได้จริง

หนังสือเล่มนี้ยืนยันได้ค่อนข้างสูงในเรื่องต่อไปนี้:

- ลำดับการเรียนและ workflow หลักของ Revit Structure ตั้งแต่เริ่มโปรเจกต์จนถึงส่งมอบ
- พฤติกรรมของมุมมอง, host, copy, schedule, sheet, export และ warning สำคัญใน Revit 2026
- แนวคิดการคุมความเสี่ยงสำหรับมือใหม่ เช่น prerequisite, checkpoint, decision table และ warning

หนังสือเล่มนี้ **ไม่ได้อ้างว่า** ยืนยันแทนสิ่งต่อไปนี้:

- ขนาดองค์ประกอบและสเปกเหล็กของทุกโครงการ
- ความเข้ากันได้ของทุกคู่เวอร์ชันระหว่าง Revit, ETABS, CSiXRevit และ Dynamo packages
- มาตรฐานเอกสารหรือ workflow ภายในของทุกบริษัท

## วิธีอัปเกรดจากหนังสือส่วนตัวไปสู่คู่มือทีม

ถ้าคุณต้องการยกระดับหนังสือเล่มนี้จากคู่มือฝึกส่วนตัวไปเป็นคู่มือทีม ให้เติม 3 อย่างนี้ต่อจากภาคผนวกนี้:

1. ตาราง `tested version matrix` ของโปรแกรมและ plugin ที่ทีมใช้อยู่จริง
2. ตาราง `office standards` สำหรับ naming, sheets, schedules, exports และ archive
3. ตาราง `project-specific assumptions` สำหรับขนาดองค์ประกอบและสเปกเหล็กของแต่ละโครงการ
