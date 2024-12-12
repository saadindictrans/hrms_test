import{i as g,c as i,j as s,A as h,n as m,l as n,q as t,k as p,y as x,t as a,v as o,ah as v,x as w}from"./frappe-ui-qLvTFYQB.js";import k from"./ListItem-Cug_YXld.js";import{E as b}from"./EmployeeAdvanceIcon-CJtZQT3s.js";import{f as c}from"./formatters-Ct4yxM4M.js";import"./EmployeeAvatar-C8o_82kt.js";import"./index-CEKosOWR.js";const q={class:"flex flex-col items-start gap-1"},R={key:0,class:"text-lg font-bold text-gray-800 leading-6"},j={class:"text-gray-600"},B={key:1,class:"text-lg font-bold text-gray-800 leading-6"},E={class:"text-xs font-normal text-gray-500"},N={class:"whitespace-nowrap"},D={__name:"EmployeeAdvanceItem",props:{doc:{type:Object},isTeamRequest:{type:Boolean,default:!1},workflowStateField:{type:String,required:!1}},setup(u){const _=g("$dayjs"),e=u,y={Paid:"green",Unpaid:"orange",Claimed:"blue",Returned:"gray","Partly Claimed and Returned":"orange"},f=i(()=>_(e.doc.posting_date).format("D MMM")),l=i(()=>e.workflowStateField?e.doc[e.workflowStateField]:e.doc.status);return(r,d)=>(s(),h(k,{isTeamRequest:e.isTeamRequest,employee:e.doc.employee,employeeName:e.doc.employee_name},{left:m(()=>[n(b,{class:"h-5 w-5 mt-[3px] text-gray-500"}),t("div",q,[e.doc.balance_amount?(s(),p("div",R,[x(a(o(c)(e.doc.balance_amount,e.doc.currency))+" / ",1),t("span",j,a(o(c)(e.doc.paid_amount,e.doc.currency)),1)])):(s(),p("div",B,a(o(c)(e.doc.advance_amount,e.doc.currency)),1)),t("div",E,[t("span",null,a(r.__(e.doc.purpose)),1),d[0]||(d[0]=t("span",{class:"whitespace-pre"}," · ",-1)),t("span",N,a(f.value),1)])])]),right:m(()=>[n(o(v),{variant:"outline",theme:y[l.value],label:r.__(l.value,null,"Employee Advance"),size:"md"},null,8,["theme","label"]),n(o(w),{name:"chevron-right",class:"h-5 w-5 text-gray-500"})]),_:1},8,["isTeamRequest","employee","employeeName"]))}};export{D as default};
//# sourceMappingURL=EmployeeAdvanceItem-CtAQ-G8q.js.map
