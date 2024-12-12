import{I as N,a as y}from"./index-CEKosOWR.js";import{a as f,c as p,A as P,n as r,v as s,i as C,ab as k,f as E,j as h,l,q as a,x as B,t as _,ac as S,J as j,k as I,ad as V,a5 as $,ae as c}from"./frappe-ui-qLvTFYQB.js";import{a as m}from"./notifications-W5tSfcNs.js";const z={class:"flex flex-col h-screen w-screen"},A={class:"w-full sm:w-96"},D={class:"flex flex-row bg-white shadow-sm py-4 px-3 items-center justify-between border-b sticky top-0 z-10"},L={class:"flex flex-row items-center"},q={class:"text-xl font-semibold text-gray-900"},J={class:"flex flex-col gap-5 my-4 w-full p-4"},R={class:"flex flex-col bg-white rounded"},U={key:0,class:"flex -mt-2 items-center justify-center gap-2"},F={class:"text-gray-900 text-sm"},Q={__name:"AppSettings",setup(G){var u;const e=C("$translate"),v=k(),o=f((u=window.frappePushNotification)==null?void 0:u.isNotificationEnabled()),i=f(!1),b=p(()=>{var t;return!((t=window.frappe)!=null&&t.boot.push_relay_server_url&&m.data)||i.value}),d=p(()=>{var t;return(t=window.frappe)!=null&&t.boot.push_relay_server_url&&m.data?"":e("Push notifications have been disabled on your site")}),x=t=>{t?g():(i.value=!0,window.frappePushNotification.disableNotification().then(n=>{o.value=!1,c({title:e("Success"),text:e("Push notifications disabled"),icon:"check-circle",position:"bottom-center",iconClasses:"text-green-500"})}).catch(n=>{c({title:e("Error"),text:e(n.message),icon:"alert-circle",position:"bottom-center",iconClasses:"text-red-500"})}).finally(()=>{i.value=!1}))},g=()=>{i.value=!0,window.frappePushNotification.enableNotification().then(t=>{t.permission_granted?o.value=!0:(c({title:e("Error"),text:e("Push Notification permission denied"),icon:"alert-circle",position:"bottom-center",iconClasses:"text-red-500"}),o.value=!1)}).catch(t=>{c({title:e("Error"),text:e(t.message),icon:"alert-circle",position:"bottom-center",iconClasses:"text-red-500"}),o.value=!1}).finally(()=>{i.value=!1})};return(t,n)=>{const w=E("Button");return h(),P(s(y),null,{default:r(()=>[l(s(N),{class:"ion-padding"},{default:r(()=>[a("div",z,[a("div",A,[a("header",D,[a("div",L,[l(w,{variant:"ghost",class:"!pl-0 hover:bg-white",onClick:n[0]||(n[0]=H=>s(v).back())},{default:r(()=>[l(s(B),{name:"chevron-left",class:"h-5 w-5"})]),_:1}),a("h2",q,_(s(e)("Settings")),1)])]),a("div",J,[a("div",R,[l(s(S),{size:"md",label:s(e)("Enable Push Notifications"),class:j(d.value?"p-2":""),"model-value":o.value,disabled:b.value,description:d.value,"onUpdate:modelValue":x},null,8,["label","class","model-value","disabled","description"])]),i.value?(h(),I("div",U,[l(s(V),{class:"w-3 h-3 text-gray-800"}),a("span",F,_(o.value?s(e)("Disabling Push Notifications..."):s(e)("Enabling Push Notifications...")),1)])):$("",!0)])])])]),_:1})]),_:1})}}};export{Q as default};
//# sourceMappingURL=AppSettings-DQV10POG.js.map
