import{i,c as a,j as x,A as g,n as m,l as c,q as t,t as l,v as r,ah as h,x as M}from"./frappe-ui-qLvTFYQB.js";import w from"./ListItem-Cug_YXld.js";import{E as D}from"./index-CEKosOWR.js";import{g as b}from"./workflow-DLGjdWDd.js";import{f as $}from"./formatters-Ct4yxM4M.js";import"./EmployeeAvatar-C8o_82kt.js";const j={class:"flex flex-col items-start gap-1.5"},S={class:"text-base font-normal text-gray-800"},C={class:"text-xs font-normal text-gray-500"},R={class:"whitespace-nowrap"},N={__name:"ExpenseClaimItem",props:{doc:{type:Object},isTeamRequest:{type:Boolean,default:!1},workflowStateField:{type:String,required:!1}},setup(u){const o=i("$dayjs"),n=i("$translate"),e=u,f={Draft:"gray",Submitted:"blue",Cancelled:"red",Paid:"green",Unpaid:"orange","Approved & Draft":"gray","Approved & Unpaid":"orange","Approved & Submitted":"blue",Rejected:"red"},d=a(()=>e.workflowStateField?e.doc[e.workflowStateField]:e.doc.approval_status==="Approved"&&["Draft","Unpaid","Submitted"].includes(e.doc.status)?`${e.doc.approval_status} & ${e.doc.status}`:e.doc.approval_status==="Rejected"?"Rejected":e.doc.status),_=a(()=>{let s=n(e.doc.expense_type);return e.doc.total_expenses>1&&(s=n("{0} & {1} more",[s,e.doc.total_expenses-1])),s}),y=a(()=>!e.doc.from_date&&!e.doc.to_date?o(e.doc.posting_date).format("D MMM"):e.doc.from_date===e.doc.to_date?o(e.doc.from_date).format("D MMM"):`${o(e.doc.from_date).format("D MMM")} - ${o(e.doc.to_date).format("D MMM")}`),v=a(()=>b(e.doc.company));return a(()=>e.doc.approval_status==="Draft"?"Pending":e.doc.approval_status),(s,p)=>(x(),g(w,{isTeamRequest:e.isTeamRequest,employee:e.doc.employee,employeeName:e.doc.employee_name},{left:m(()=>[c(D,{class:"h-5 w-5 text-gray-500"}),t("div",j,[t("div",S,l(_.value),1),t("div",C,[t("span",null,l(r($)(e.doc.total_claimed_amount,v.value)),1),p[0]||(p[0]=t("span",{class:"whitespace-pre"}," · ",-1)),t("span",R,l(y.value),1)])])]),right:m(()=>[c(r(h),{variant:"outline",theme:f[d.value],label:r(n)(d.value,null,"Expense Claim"),size:"md"},null,8,["theme","label"]),c(r(M),{name:"chevron-right",class:"h-5 w-5 text-gray-500"})]),_:1},8,["isTeamRequest","employee","employeeName"]))}};export{N as default};
//# sourceMappingURL=ExpenseClaimItem-Hmd39-CQ.js.map