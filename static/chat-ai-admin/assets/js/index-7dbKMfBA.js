import{_ as N,u as I,b as B,x as M,d as F,M as U}from"../../index-DMzxB8WT.js";import"./index-BHh3pnC6.js";import{I as V,_ as D,F as E}from"./Password-C7NwFRDD.js";import{b as v,e as G,B as O,M as _,N as u,W as a,Z as i,u as t,k as n,S as m}from"./vue-chunks-CN-qMzA4.js";import{_ as T}from"./index-D4DLVWal.js";import{_ as W}from"./index-fTGBUk26.js";import"./dayjs-BxPRU-k5.js";import"./axios-Cm0UX6qg.js";import"./qs-BLqWfGjr.js";import"./crypto-js-BPJ1YzU4.js";import"./FormItemContext-rNmaTKvh.js";import"./inputProps-wmP5fhXe.js";import"./TextArea-BO367esI.js";import"./index-_Zzk1L5c.js";import"./index-CMEsCGiE.js";import"./collapseMotion-Dj56_wvK.js";const Z={class:"enterprise-set"},$={class:"page-title"},j={class:"enterprise-box"},q={class:"content-label"},z={class:"content-name"},A={key:0},H={key:1,class:"gray-text"},J={__name:"index",setup(K){const{t:e}=B(),p=I(),c=v(()=>p.name),f=v(()=>p.id),d=()=>{p.getCompanyInfo()};d();const r=G(!1),s=O({name:"",id:""}),h=()=>{s.name=c.value,s.id=f.value,r.value=!0},y=()=>{M({...s}).then(x=>{F.success(e("common.saveSuccess")),d();let o=document.title.split("Chatwiki");document.title=o[0]+"Chatwiki "+s.name,r.value=!1})};return(x,o)=>{const g=T,S=W,C=V,b=D,k=E,w=U;return _(),u("div",Z,[a("div",$,i(t(e)("views.user.enterprise.enterpriseSettings")),1),a("div",j,[n(g,{align:"center"},{default:m(()=>[a("div",q,i(t(e)("views.user.enterprise.systemName"))+"：",1),a("div",z,[c.value?(_(),u("span",A,i(c.value),1)):(_(),u("span",H,i(t(e)("views.user.enterprise.notSetTip")),1))]),a("a",{class:"edit-btn",onClick:h},i(t(e)("common.change")),1)]),_:1})]),n(S),n(w,{open:r.value,"onUpdate:open":o[1]||(o[1]=l=>r.value=l),title:t(e)("views.user.enterprise.SetSystemName"),onOk:y},{default:m(()=>[n(k,{class:"form-box"},{default:m(()=>[n(b,{label:t(e)("views.user.enterprise.systemName")},{default:m(()=>[n(C,{maxlength:15,value:s.name,"onUpdate:value":o[0]||(o[0]=l=>s.name=l),placeholder:t(e)("views.user.enterprise.enterName")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1},8,["open","title"])])}}},ce=N(J,[["__scopeId","data-v-c1d70fb3"]]);export{ce as default};
