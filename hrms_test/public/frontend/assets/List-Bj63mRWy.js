import{a as i}from"./index-CEKosOWR.js";import m from"./ListView-BqqGprQL.js";import{j as n,A as p,n as r,l,v as d}from"./frappe-ui-qLvTFYQB.js";import"./TabButtons-B-8d7218.js";import"./EmployeeCheckinItem-BXYo2B6I.js";import"./ListItem-Cug_YXld.js";import"./EmployeeAvatar-C8o_82kt.js";import"./formatters-Ct4yxM4M.js";import"./AttendanceRequestItem-t9fawPFw.js";import"./attendance-B5rS8QWG.js";import"./ShiftRequestItem-tYRhkSQ-.js";import"./ShiftIcon-nH_i0f27.js";import"./ShiftAssignmentItem-MZzKhJbQ.js";import"./LeaveRequestItem-C-7x9Cde.js";import"./leaves-ISk37AoD.js";import"./ExpenseClaimItem-Hmd39-CQ.js";import"./workflow-DLGjdWDd.js";import"./EmployeeAdvanceItem-CtAQ-G8q.js";import"./EmployeeAdvanceIcon-CJtZQT3s.js";import"./ListFiltersActionSheet-DryjJeyu.js";import"./FormField-BCSqEHey.js";import"./Link-QcSLzh7C.js";import"./CustomIonModal-I51rBQrR.js";import"./requestSummaryFields-DE58OfLg.js";import"./FormattedField-xd4ggFYl.js";import"./realtime-Cru3W9Fo.js";const j={__name:"List",setup(s){const e=["My Advances","Team Advances"],t=["name","employee","employee_name","status","purpose","advance_amount","paid_amount","claimed_amount","return_amount","posting_date","currency"],a=[{fieldname:"status",fieldtype:"Select",label:"Status",options:["Draft","Paid","Unpaid","Claimed","Returned","Partly Claimed and Returned","Cancelled"]},{fieldname:"employee",fieldtype:"Link",label:"Employee",options:"Employee"},{fieldname:"department",fieldtype:"Link",label:"Department",options:"Department"},{fieldname:"posting_date",fieldtype:"Date",label:"Posting Date"},{fieldname:"advance_amount",fieldtype:"Currency",label:"Advance Amount"},{fieldname:"paid_amount",fieldtype:"Currency",label:"Paid Amount"}];return(o,c)=>(n(),p(d(i),null,{default:r(()=>[l(m,{doctype:"Employee Advance",pageTitle:o.__("Employee Advances"),tabButtons:e,fields:t,filterConfig:a},null,8,["pageTitle"])]),_:1}))}};export{j as default};
//# sourceMappingURL=List-Bj63mRWy.js.map
