import{O as q,c as w,A as k,n as i,i as h,f as y,j as A,q as o,l as s,y as R,t as a,a2 as l,v as g}from"./frappe-ui-qLvTFYQB.js";import b from"./BaseLayout-C3wPTlfn.js";import V from"./AttendanceRequestItem-t9fawPFw.js";import $ from"./ShiftRequestItem-tYRhkSQ-.js";import x from"./ShiftAssignmentItem-MZzKhJbQ.js";import m from"./RequestList-BaE8gRAw.js";import C from"./AttendanceCalendar-sNjYngl9.js";import{g as L,a as j,b as D,m as T,c as N}from"./attendance-B5rS8QWG.js";import"./index-CEKosOWR.js";import"./notifications-W5tSfcNs.js";import"./ListItem-Cug_YXld.js";import"./EmployeeAvatar-C8o_82kt.js";import"./ShiftIcon-nH_i0f27.js";import"./requestSummaryFields-DE58OfLg.js";import"./FormattedField-xd4ggFYl.js";import"./workflow-DLGjdWDd.js";import"./formatters-Ct4yxM4M.js";const F={class:"flex flex-col mt-7 mb-7 p-4 gap-7"},M={class:"w-full"},O={class:"text-lg text-gray-800 font-bold"},P={class:"text-lg text-gray-800 font-bold"},U={class:"w-full"},Y={class:"text-lg text-gray-800 font-bold"},rt={__name:"Dashboard",setup(z){const v=h("$employee"),c=h("$dayjs"),S=q({url:"hrms.api.get_shifts",auto:!0,cache:"hrms:shifts",makeParams(){var t;return{employee:(t=v.data)==null?void 0:t.name}},transform:t=>t.map(e=>(e.doctype="Shift Assignment",e.is_upcoming=!e.end_date||c(e.end_date).isAfter(c()),e.shift_dates=L(e),e.total_shift_days=j(e),e.shift_timing=D(e),e))}),B=w(()=>{var e;const t=(e=S.data)==null?void 0:e.filter(n=>n.is_upcoming);return t==null?void 0:t.slice(0,5)});return(t,e)=>{const n=y("Button"),u=y("router-link");return A(),k(b,{pageTitle:"Attendance"},{body:i(()=>{var _,d,f,p;return[o("div",F,[s(C),o("div",M,[s(u,{to:{name:"AttendanceRequestFormView"}},{default:i(({navigate:r})=>[s(n,{onClick:r,variant:"solid",class:"w-full py-5 text-base"},{default:i(()=>[R(a(t.__("Request Attendance")),1)]),_:2},1032,["onClick"])]),_:1})]),o("div",null,[o("div",O,a(t.__("Recent Attendance Requests")),1),s(m,{component:l(V),items:(d=(_=g(T))==null?void 0:_.data)==null?void 0:d.slice(0,5),addListButton:!0,listButtonRoute:t.__("AttendanceRequestListView")},null,8,["component","items","listButtonRoute"])]),o("div",null,[o("div",P,a(t.__("Upcoming Shifts")),1),s(m,{component:l(x),items:B.value,addListButton:!0,listButtonRoute:"ShiftAssignmentListView",emptyStateMessage:t.__("You have no upcoming shifts")},null,8,["component","items","emptyStateMessage"])]),o("div",U,[s(u,{to:{name:"ShiftRequestFormView"}},{default:i(({navigate:r})=>[s(n,{onClick:r,variant:"solid",class:"w-full py-5 text-base"},{default:i(()=>[R(a(t.__("Request a Shift")),1)]),_:2},1032,["onClick"])]),_:1})]),o("div",null,[o("div",Y,a(t.__("Recent Shift Requests")),1),s(m,{component:l($),items:(p=(f=g(N))==null?void 0:f.data)==null?void 0:p.slice(0,5),addListButton:!0,listButtonRoute:"ShiftRequestListView"},null,8,["component","items"])])])]}),_:1})}}};export{rt as default};
//# sourceMappingURL=Dashboard-vFzWWDuq.js.map