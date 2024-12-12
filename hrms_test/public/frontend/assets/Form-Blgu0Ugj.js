import{I as Y,a as k}from"./index-CEKosOWR.js";import{i as u,a as q,O as d,w as s,j as D,A as g,n as b,l as C,v as _,a5 as I}from"./frappe-ui-qLvTFYQB.js";import R from"./FormView-BRqGWGvk.js";import"./FormField-BCSqEHey.js";import"./Link-QcSLzh7C.js";import"./FileUploaderView-6mxw9ReX.js";import"./workflow-DLGjdWDd.js";import"./formatters-Ct4yxM4M.js";const G={__name:"Form",props:{id:{type:String,required:!1}},setup(F){const L=u("$dayjs"),r=u("$employee"),S=u("$translate"),m=L().format("YYYY-MM-DD"),i=F,a=q({}),n=d({url:"hrms.api.get_doctype_fields",params:{doctype:"Leave Application"},transform(e){return A(e).map(l=>(l.fieldname==="half_day_date"&&(l.hidden=!0),l.fieldname==="posting_date"&&(l.default=m),l))},onSuccess(e){V.reload(),p.reload()}});n.reload();const V=d({url:"hrms.api.get_leave_approval_details",params:{employee:r.data.name},onSuccess(e){x(e)}}),p=d({url:"hrms.api.get_leave_types",params:{employee:r.data.name,date:m},onSuccess(e){B(e)}});s(()=>a.value.employee,e=>{i.id&&e!==r.data.name&&w()}),s(()=>a.value.leave_type,e=>f()),s(()=>a.value.half_day,e=>c(e)),s(()=>a.value.half_day&&a.value.half_day_date,()=>v()),s(()=>a.value.from_date,e=>{a.value.to_date||(a.value.to_date=e),p.fetch({employee:r.data.name,date:e})}),s(()=>[a.value.from_date,a.value.to_date],([e,t])=>{$(e,t),y(),v()});function A(e){const t=["naming_series","sb_other_details","salary_slip","letter_head"],l=["employee","employee_name","department","company","follow_via_email","status","posting_date"];return i.id||t.push(...l),e.filter(o=>!t.includes(o.fieldname))}function w(){a.value.leave_approver!==r.data.user_id&&n.data.map(e=>e.read_only=!0)}function $(e,t){if(!(e&&t))return;const l=e>t?S("To Date cannot be before From Date"):"",o=n.data.find(T=>T.fieldname==="from_date");o.error_message=l}function v(){if(!h())return;d({url:"hrms.hr.doctype.leave_application.leave_application.get_number_of_leave_days",params:{employee:r.data.name,leave_type:a.value.leave_type,from_date:a.value.from_date,to_date:a.value.to_date,half_day:a.value.half_day,half_day_date:a.value.half_day_date},onSuccess(t){a.value.total_leave_days=t}}).reload(),f()}function f(){if(!h())return;d({url:"hrms.hr.doctype.leave_application.leave_application.get_leave_balance_on",params:{employee:r.data.name,date:a.value.from_date,to_date:a.value.to_date,leave_type:a.value.leave_type,consider_all_leaves_in_the_allocation_period:1},onSuccess(t){a.value.leave_balance=t}}).reload()}function c(e){const t=n.data.find(l=>l.fieldname==="half_day_date");t.hidden=!e,t.reqd=e,e&&(a.value.from_date===a.value.to_date?a.value.half_day_date=a.value.from_date:y())}function y(){const e=n.data.find(t=>t.fieldname==="half_day_date");e.minDate=a.value.from_date,e.maxDate=a.value.to_date}function x(e){var l;const t=(l=n.data)==null?void 0:l.find(o=>o.fieldname==="leave_approver");t.reqd=e==null?void 0:e.is_mandatory,t.documentList=e==null?void 0:e.department_approvers.map(o=>({label:o.full_name?`${o.name} : ${o.full_name}`:o.name,value:o.name})),a.value.leave_approver=e==null?void 0:e.leave_approver,a.value.leave_approver_name=e==null?void 0:e.leave_approver_name}function B(e){const t=n.data.find(l=>l.fieldname==="leave_type");t.documentList=e==null?void 0:e.map(l=>({label:l,value:l}))}function h(){return a.value.from_date&&a.value.to_date&&a.value.leave_type}function j(){c(a.value.half_day),a.value.employee=r.data.name}return(e,t)=>(D(),g(_(k),null,{default:b(()=>[C(_(Y),{fullscreen:!0},{default:b(()=>[_(n).data?(D(),g(R,{key:0,doctype:"Leave Application",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value=l),isSubmittable:!0,fields:_(n).data,id:i.id,showAttachmentView:!0,onValidateForm:j},null,8,["modelValue","fields","id"])):I("",!0)]),_:1})]),_:1}))}};export{G as default};
//# sourceMappingURL=Form-Blgu0Ugj.js.map
