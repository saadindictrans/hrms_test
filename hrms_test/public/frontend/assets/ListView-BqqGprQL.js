var me=Object.defineProperty,fe=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var z=(a,t,s)=>t in a?me(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,W=(a,t)=>{for(var s in t||(t={}))ve.call(t,s)&&z(a,s,t[s]);if(K)for(var s of K(t))ye.call(t,s)&&z(a,s,t[s]);return a},J=(a,t)=>fe(a,pe(t));var V=(a,t,s)=>new Promise((S,B)=>{var N=r=>{try{b(s.next(r))}catch(y){B(y)}},T=r=>{try{b(s.throw(r))}catch(y){B(y)}},b=r=>r.done?S(r.value):Promise.resolve(r.value).then(N,T);b((s=s.apply(a,t)).next())});import{a2 as h,ab as ge,i as H,Q as _e,a as v,c as I,O as Q,w as we,e as he,f as O,j as u,k as $,l as i,n as m,q as k,v as l,x as Y,t as G,J as ke,A as F,y as be,a5 as A,F as X,I as Ce,K as Z,ad as xe,ak as Fe}from"./frappe-ui-qLvTFYQB.js";import{i as Re,M as $e,N as Se,I as Be,c as Ee,m as ee}from"./index-CEKosOWR.js";import qe from"./TabButtons-B-8d7218.js";import Ve from"./EmployeeCheckinItem-BXYo2B6I.js";import Ie from"./AttendanceRequestItem-t9fawPFw.js";import Ae from"./ShiftRequestItem-tYRhkSQ-.js";import Ne from"./ShiftAssignmentItem-MZzKhJbQ.js";import Te from"./LeaveRequestItem-C-7x9Cde.js";import De from"./ExpenseClaimItem-Hmd39-CQ.js";import Le from"./EmployeeAdvanceItem-CtAQ-G8q.js";import je from"./ListFiltersActionSheet-DryjJeyu.js";import Me from"./CustomIonModal-I51rBQrR.js";import{R as He,b as Oe}from"./requestSummaryFields-DE58OfLg.js";import{u as Pe}from"./workflow-DLGjdWDd.js";import{u as Ue}from"./realtime-Cru3W9Fo.js";import"./ListItem-Cug_YXld.js";import"./EmployeeAvatar-C8o_82kt.js";import"./formatters-Ct4yxM4M.js";import"./attendance-B5rS8QWG.js";import"./ShiftIcon-nH_i0f27.js";import"./leaves-ISk37AoD.js";import"./EmployeeAdvanceIcon-CJtZQT3s.js";import"./FormField-BCSqEHey.js";import"./Link-QcSLzh7C.js";import"./FormattedField-xd4ggFYl.js";const Ke={class:"w-full sm:w-96"},ze={class:"flex flex-row bg-white shadow-sm py-4 px-3 items-center justify-between border-b"},We={class:"flex flex-row items-center"},Je={class:"text-xl font-semibold text-gray-900"},Qe={class:"flex flex-row gap-2"},Ye={class:"w-full"},Ge={key:1,class:"flex flex-col bg-white rounded mt-5"},Xe={key:3,class:"flex mt-2 items-center justify-center"},Ft={__name:"ListView",props:{doctype:{type:String,required:!0},fields:{type:Array,required:!0},groupBy:{type:String,required:!1},filterConfig:{type:Array,required:!0},tabButtons:{type:Array,required:!1},pageTitle:{type:String,required:!0}},setup(a){const t=a,s=e=>{var o;return(o=e==null?void 0:e.key)!=null?o:e},S={"Employee Checkin":h(Ve),"Attendance Request":h(Ie),"Shift Request":h(Ae),"Shift Assignment":h(Ne),"Leave Application":h(Te),"Expense Claim":h(De),"Employee Advance":h(Le)},B=ge(),N=H("$dayjs"),T=H("$socket"),b=H("$employee"),r=_e({}),y=v(t.tabButtons?s(t.tabButtons[0]):void 0),D=v(!1),C=v([]),R=v(null),L=v(!1),f=v(null),P=v(null),j=v(!0),E=v({doctype:t.doctype,fields:t.fields,group_by:t.groupBy,order_by:`\`tab${t.doctype}\`.modified desc`,page_length:50}),M=I(()=>t.tabButtons&&y.value===s(t.tabButtons[1])),te=I(()=>`${t.doctype.replace(/\s+/g,"")}FormView`),oe=I(()=>`${t.doctype.replace(/\s+/g,"")}DetailView`),se=I(()=>{const e=[];return M.value?e.push([t.doctype,"employee","!=",b.data.name]):e.push([t.doctype,"employee","=",b.data.name]),e}),c=Q({url:"frappe.desk.reportview.get",onSuccess:e=>{var o;((o=e.values)==null?void 0:o.length)<E.value.page_length&&(j.value=!1)},transform(e){if(e.length===0)return[];const o=e.keys,x=e.values.map(p=>{const g={};return o.forEach((n,q)=>{g[n]=p[q]}),g});let w;return!c.params.start||c.params.start===0?w=x:w=c.data.concat(x),w}}),ae=Q({url:"frappe.client.has_permission",params:{doctype:t.doctype,docname:null,perm_type:"create"},auto:!0}),le=e=>V(this,null,function*(){f.value=e,f.value.doctype="Employee Checkin",f.value.date=e.time,f.value.formatted_time=N(e.time).format("HH:mm a"),f.value.formatted_latitude=`${Number(e.latitude).toFixed(5)}°`,f.value.formatted_longitude=`${Number(e.longitude).toFixed(5)}°`,L.value=!0}),ne=()=>V(this,null,function*(){L.value=!1,f.value=null});function U(){t.filterConfig.forEach(e=>{r[e.fieldname]={condition:"=",value:null}}),C.value=[]}U();function re(){let e="",o="";C.value=[];for(const d in r)e=r[d].condition,typeof e=="object"&&e!==null&&(e=e.value),o=r[d].value,e&&o&&C.value.push([t.doctype,d,e,o])}function ie(){re(),_(),ee.dismiss(),D.value=!!C.value.length}function ue(){U(),_(),ee.dismiss(),D.value=!1}function _(e=0){e===0&&(j.value=!0);const o=[[t.doctype,"docstatus","!=","2"]];o.push(...se.value),C.value&&o.push(...C.value),R.value&&E.value.fields.push(R.value),c.submit(J(W({},E.value),{start:e||0,filters:o}))}const ce=Fe(()=>{if(!j.value)return;const{scrollTop:e,scrollHeight:o,clientHeight:d}=P.value;if(e/(o-d)*100>=90){const w=c.params.start+E.value.page_length;_(w)}},500),de=e=>{setTimeout(()=>{_(),e.target.complete()},500)};return we(()=>y.value,e=>{_()}),he(()=>V(this,null,function*(){const e=Pe(t.doctype);yield e.workflowDoc.promise,R.value=e.getWorkflowStateField(),_(),Ue(T,t.doctype,()=>_())})),(e,o)=>{const d=O("Button"),x=O("router-link"),w=O("EmptyState");return u(),$(X,null,[i(l(Re),{class:"ion-no-border"},{default:m(()=>{var p,g;return[k("div",Ke,[k("div",ze,[k("div",We,[i(d,{variant:"ghost",class:"!px-1 mr-1 hover:bg-white",onClick:o[0]||(o[0]=n=>l(B).back())},{default:m(()=>[i(l(Y),{name:"chevron-left",class:"h-5 w-5"})]),_:1}),k("h2",Je,G(a.pageTitle),1)]),k("div",Qe,[i(d,{id:"show-filter-modal",icon:"filter",variant:"subtle",class:ke([D.value?"!border !border-gray-800 !bg-white !text-gray-900 !font-semibold":""])},null,8,["class"]),(g=(p=l(ae))==null?void 0:p.data)!=null&&g.has_permission&&t.doctype!="Employee Checkin"?(u(),F(x,{key:0,to:{name:te.value}},{default:m(({navigate:n})=>[i(d,{variant:"solid",class:"mr-2",onClick:n},{prefix:m(()=>[i(l(Y),{name:"plus",class:"w-4"})]),default:m(()=>[be(" "+G(e.__("New",null,t.doctype)),1)]),_:2},1032,["onClick"])]),_:1},8,["to"])):A("",!0)])])])]}),_:1}),i(l(Be),null,{default:m(()=>{var p,g;return[i(l($e),{slot:"fixed",onIonRefresh:o[1]||(o[1]=n=>de(n))},{default:m(()=>[i(l(Se))]),_:1}),k("div",{class:"flex flex-col items-center mb-7 p-4 h-full w-full sm:w-96 overflow-y-auto",ref_key:"scrollContainer",ref:P,onScroll:o[3]||(o[3]=()=>l(ce)())},[k("div",Ye,[t.tabButtons?(u(),F(qe,{key:0,class:"mt-5",buttons:t.tabButtons,modelValue:y.value,"onUpdate:modelValue":o[2]||(o[2]=n=>y.value=n)},null,8,["buttons","modelValue"])):A("",!0),!l(c).loading&&((p=l(c).data)!=null&&p.length)?(u(),$("div",Ge,[(u(!0),$(X,null,Ce(l(c).data,n=>(u(),$("div",{class:"p-3.5 items-center justify-between border-b cursor-pointer",key:n.name},[t.doctype==="Employee Checkin"?(u(),F(Z(S[a.doctype]),{key:0,doc:n,isTeamRequest:M.value,workflowStateField:R.value,onClick:q=>le(n)},null,8,["doc","isTeamRequest","workflowStateField","onClick"])):(u(),F(x,{key:1,to:{name:oe.value,params:{id:n.name}}},{default:m(({navigate:q})=>[(u(),F(Z(S[a.doctype]),{doc:n,isTeamRequest:M.value,workflowStateField:R.value,onClick:q},null,8,["doc","isTeamRequest","workflowStateField","onClick"]))]),_:2},1032,["to"]))]))),128))])):l(c).loading?A("",!0):(u(),F(w,{key:2,message:`No ${(g=t.doctype)==null?void 0:g.toLowerCase()}s found`},null,8,["message"])),l(c).loading?(u(),$("div",Xe,[i(l(xe),{class:"w-8 h-8 text-gray-800"})])):A("",!0)])],544),i(Me,{trigger:"show-filter-modal"},{actionSheet:m(()=>[i(je,{filterConfig:a.filterConfig,onApplyFilters:ie,onClearFilters:ue,filters:r,"onUpdate:filters":o[4]||(o[4]=n=>r=n)},null,8,["filterConfig","filters"])]),_:1})]}),_:1}),i(l(Ee),{ref:"modal","is-open":L.value,onDidDismiss:ne,"initial-breakpoint":1,breakpoints:[0,1]},{default:m(()=>[i(He,{fields:l(Oe),showOpenForm:!1,modelValue:f.value,"onUpdate:modelValue":o[5]||(o[5]=p=>f.value=p)},null,8,["fields","modelValue"])]),_:1},8,["is-open"])],64)}}};export{Ft as default};
//# sourceMappingURL=ListView-BqqGprQL.js.map