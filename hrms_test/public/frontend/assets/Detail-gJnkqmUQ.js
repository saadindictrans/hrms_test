var w=(f,y,r)=>new Promise((u,n)=>{var i=o=>{try{c(r.next(o))}catch(e){n(e)}},_=o=>{try{c(r.throw(o))}catch(e){n(e)}},c=o=>o.done?u(o.value):Promise.resolve(o.value).then(i,_);c((r=r.apply(f,y)).next())});import{I as S,a as k}from"./index-CEKosOWR.js";import{a as h,O as C,w as D,f as R,j as b,A as g,n as d,l as m,v as p,a9 as x,y as B,t as O,a5 as P}from"./frappe-ui-qLvTFYQB.js";import T from"./FormView-BRqGWGvk.js";import F from"./SalaryDetailTable-BTyYA7Ph.js";import{g as U}from"./workflow-DLGjdWDd.js";import"./FormField-BCSqEHey.js";import"./Link-QcSLzh7C.js";import"./FileUploaderView-6mxw9ReX.js";import"./formatters-Ct4yxM4M.js";const M={__name:"Detail",props:{id:{type:String,required:!0}},setup(f){const y=f,r=h(""),u=h(!1),n=h({}),i=C({url:"hrms.api.get_doctype_fields",params:{doctype:"Salary Slip"},transform(e){return c(e)}});i.reload();const _=[{name:"Details",lastField:"payment_days"},{name:"Earnings & Deductions",lastField:"base_total_deduction"},{name:"Net Pay Info",lastField:"base_total_in_words"},{name:"Income Tax Breakup",lastField:"total_income_tax"},{name:"Bank Details",lastField:"bank_account_no"}];D(()=>n.value.company,e=>w(this,null,function*(){var t;if(!e)return;const l=yield U(e);(t=i.data)==null||t.map(a=>{var s;(s=a.label)!=null&&s.includes("Company Currency")&&(n.value.currency===l?a.hidden=!0:a.label=a.label.replace("Company Currency",l))})}),{immediate:!0});function c(e){var a,s;if((s=(a=n.value)==null?void 0:a.timesheets)==null?void 0:s.length)return e;const t=["timesheets_section","timesheets","total_working_hours","hour_rate","base_hour_rate","help_section","earning_deduction_sb"];return e.filter(v=>!t.includes(v.fieldname))}function o(){const e=n.value.name;u.value=!0;let l={"X-Frappe-Site-Name":window.location.hostname};window.csrf_token&&(l["X-Frappe-CSRF-Token"]=window.csrf_token),fetch("/api/method/hrms.api.download_salary_slip",{method:"POST",headers:l,body:new URLSearchParams({name:e}),responseType:"blob"}).then(t=>{if(t.ok)return t.blob();r.value="Failed to download PDF"}).then(t=>{if(!t)return;const a=window.URL.createObjectURL(t),s=document.createElement("a");s.href=a,s.download=`${e}.pdf`,s.click(),setTimeout(()=>{window.URL.revokeObjectURL(a)},3e3)}).catch(t=>{r.value=`Failed to download PDF: ${t.message}`}).finally(()=>{u.value=!1})}return(e,l)=>{const t=R("Button");return b(),g(p(k),null,{default:d(()=>[m(p(S),{fullscreen:!0},{default:d(()=>[p(i).data?(b(),g(T,{key:0,doctype:"Salary Slip",modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=a=>n.value=a),fields:p(i).data,id:y.id,tabbedView:!0,tabs:_,showFormButton:!1},{earnings:d(({isFormReadOnly:a})=>[m(F,{type:"Earnings",salarySlip:n.value,isReadOnly:a},null,8,["salarySlip","isReadOnly"])]),deductions:d(({isFormReadOnly:a})=>[m(F,{type:"Deductions",salarySlip:n.value,isReadOnly:a},null,8,["salarySlip","isReadOnly"])]),formButton:d(()=>[m(p(x),{message:r.value,class:"mt-2"},null,8,["message"]),m(t,{class:"w-full rounded py-5 text-base disabled:bg-gray-700 disabled:text-white",onClick:o,variant:"solid",loading:u.value},{default:d(()=>[B(O(e.__("Download PDF")),1)]),_:1},8,["loading"])]),_:1},8,["modelValue","fields","id"])):P("",!0)]),_:1})]),_:1})}}};export{M as default};
//# sourceMappingURL=Detail-gJnkqmUQ.js.map