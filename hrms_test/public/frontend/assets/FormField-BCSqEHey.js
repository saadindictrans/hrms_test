import{i as v,c as p,e as Y,j as n,k as y,J as g,t as S,a5 as b,A as r,al as i,v as d,a7 as $,Z as m,am as M,l as L,a9 as F}from"./frappe-ui-qLvTFYQB.js";import I from"./Link-QcSLzh7C.js";const N={key:0,class:"flex flex-col gap-1.5"},O={__name:"FormField",props:{fieldtype:String,fieldname:String,modelValue:[String,Number,Boolean,Array,Object],default:[String,Number,Boolean,Array,Object],label:String,options:[String,Array],linkFilters:Object,documentList:Array,readOnly:[Boolean,Number],reqd:[Boolean,Number],hidden:{type:[Boolean,Number],default:!1},errorMessage:String,minDate:String,maxDate:String,addSectionPadding:{type:Boolean,default:!0}},emits:["change","update:modelValue"],setup(o,{emit:c}){const f=v("$translate"),e=o,t=c,V=v("$dayjs"),D=p(()=>e.readOnly&&!C.value&&!e.modelValue?!1:e.fieldtype!=="Table"&&!e.hidden),k=p(()=>["Int","Float","Currency"].includes(e.fieldtype)),C=p(()=>["Section Break","Column Break"].includes(e.fieldtype)),u=p(()=>!!e.readOnly),B=p(()=>e.fieldtype==="Link"&&e.documentList?e.documentList:e.fieldtype=="Select"&&e.options?e.options.split(`
`).map(a=>({label:f(a),value:a})):[]);function x(){e.modelValue||(e.default?e.fieldtype==="Check"?t("update:modelValue",e.default==="1"):e.fieldtype==="Date"&&e.default==="Today"?t("update:modelValue",V().format("YYYY-MM-DD")):k.value?t("update:modelValue",parseFloat(e.default||0)):t("update:modelValue",e.default):e.fieldtype==="Check"?t("update:modelValue",!1):t("update:modelValue",""))}return Y(()=>{x()}),(s,a)=>D.value?(n(),y("div",N,[["Check","Section Break","Column Break"].includes(e.fieldtype)?b("",!0):(n(),y("span",{key:0,class:g([e.reqd?"after:content-['_*'] after:text-red-600":"","block text-sm leading-5 text-gray-700"])},S(e.label),3)),e.fieldtype==="Select"||e.documentList?(n(),r(d($),i({key:1,class:u.value?"pointer-events-none":"",placeholder:d(f)("Select {0}",[e.label]),options:B.value,modelValue:o.modelValue},s.$attrs,{disabled:u.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t("update:modelValue",l==null?void 0:l.value))}),null,16,["class","placeholder","options","modelValue","disabled"])):e.fieldtype==="Link"?(n(),r(I,{key:2,doctype:e.options,modelValue:o.modelValue,filters:e.linkFilters,disabled:u.value,"onUpdate:modelValue":a[1]||(a[1]=l=>t("update:modelValue",l))},null,8,["doctype","modelValue","filters","disabled"])):["Text Editor","Small Text","Text","Long Text"].includes(e.fieldtype)?(n(),r(d(m),i({key:3,type:"textarea",value:o.modelValue,placeholder:d(f)("Enter {0}",[e.label]),onInput:a[2]||(a[2]=l=>t("update:modelValue",l)),onChange:a[3]||(a[3]=l=>t("change",l))},s.$attrs,{disabled:u.value,class:"h-15"}),null,16,["value","placeholder","disabled"])):e.fieldtype==="Check"?(n(),r(d(m),i({key:4,type:"checkbox",label:e.label,value:o.modelValue,onInput:a[4]||(a[4]=l=>t("update:modelValue",l)),onChange:a[5]||(a[5]=l=>t("change",l))},s.$attrs,{disabled:u.value,class:"rounded-sm text-gray-800"}),null,16,["label","value","disabled"])):e.fieldtype==="Data"?(n(),r(d(m),i({key:5,type:"text",value:o.modelValue,onInput:a[6]||(a[6]=l=>t("update:modelValue",l)),onChange:a[7]||(a[7]=l=>t("change",l))},s.$attrs,{disabled:u.value}),null,16,["value","disabled"])):e.fieldtype==="Currency"&&u.value?(n(),r(d(m),i({key:6,type:"text",value:o.modelValue,onInput:a[8]||(a[8]=l=>t("update:modelValue",l)),onChange:a[9]||(a[9]=l=>t("change",l))},s.$attrs,{disabled:u.value}),null,16,["value","disabled"])):k.value?(n(),r(d(m),i({key:7,type:"number",value:o.modelValue,onInput:a[10]||(a[10]=l=>t("update:modelValue",l)),onChange:a[11]||(a[11]=l=>t("change",l))},s.$attrs,{disabled:u.value}),null,16,["value","disabled"])):e.fieldtype==="Section Break"?(n(),y("div",{key:8,class:g(e.addSectionPadding?"mt-2":"")},[e.label?(n(),y("h2",{key:0,class:g(["text-base font-semibold text-gray-800",e.addSectionPadding?"pt-4":""])},S(e.label),3)):b("",!0)],2)):e.fieldtype==="Date"?(n(),r(d(m),i({key:9,type:"date",value:o.modelValue,placeholder:d(f)("Select {0}",[e.label]),formatValue:l=>d(V)(l).format("DD-MM-YYYY"),onInput:a[12]||(a[12]=l=>t("update:modelValue",l)),onChange:a[13]||(a[13]=l=>t("change",l))},s.$attrs,{disabled:u.value,min:e.minDate,max:e.maxDate}),null,16,["value","placeholder","formatValue","disabled","min","max"])):e.fieldtype==="Datetime"?(n(),r(d(M),i({key:10,value:o.modelValue,placeholder:`Select ${e.label}`,formatter:l=>d(V)(l).format("DD-MM-YYYY HH:mm:ss"),"onUpdate:modelValue":a[14]||(a[14]=l=>t("update:modelValue",l))},s.$attrs,{disabled:u.value}),null,16,["value","placeholder","formatter","disabled"])):b("",!0),L(d(F),{message:e.errorMessage},null,8,["message"])])):b("",!0)}};export{O as default};
//# sourceMappingURL=FormField-BCSqEHey.js.map