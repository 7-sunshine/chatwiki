import{C as Te}from"./cu-scroll-CjGNx2ov.js";import{V as De,S as Ne,am as Be,X as F,az as Ue,$ as Me,aA as je,aB as Re,ak as Ae,a0 as Ee,aC as Ve,a5 as ie,ap as He,aD as J,aE as Ye,ah as pe,U as Qe,aF as me,B as ke,aG as We,al as Je,A as Xe,_ as Ce,d as H,c as be,M as xe,aw as Ge,m as Ke,a6 as Ze,J as fe}from"../../index-1XZddRjh.js";import{e as et,r as L,ag as tt,b as ve,j as e,$ as we,a0 as Se,A as te,L as u,M as y,Q as t,V as l,U as ot,u as B,X as b,P as M,F as ee,a1 as at,a2 as nt,Y as U,a8 as C,a9 as Pe,B as st,a7 as lt,a3 as it,a4 as rt}from"./vue-chunks-DrvJJrR0.js";import{i as re,j as ct,k as ut}from"./index-jkbC24gP.js";import{U as dt}from"./upload-input-CIar8cpb.js";/* empty css                                                                       *//* empty css                                                                         */import{t as ge}from"./validate-8MtiUsxW.js";import{F as ce,_ as Oe}from"./index-NfbGWbde.js";import"./index-DTthLzpm.js";import{I as Le}from"./Input-LEQ1nsBA.js";import"./index-C0hP31Jf.js";import{R as _t,_ as pt}from"./RadioButton-BlkUcbKS.js";import{_ as mt,M as ft}from"./index-MrUKp-XO.js";import"./index-DDwmDBg_.js";import{D as vt}from"./dropdown-M3hqrshK.js";import{S as gt}from"./index-DoaGtGTF.js";import{_ as yt}from"./index-BTLVrpZc.js";import{t as ht,a as kt,_ as Ct}from"./index-COlk-g_h.js";import{u as bt}from"./CheckOutlined-DhJk9Bd7.js";import{P as xt}from"./PlusOutlined-CLu6l5b3.js";import{S as wt}from"./SearchOutlined-Bmx9sA_A.js";import{M as St}from"./MoreOutlined-Bg1bhnk0.js";import{_ as Pt}from"./index-CGIhWGiI.js";import{a as Ot}from"./index-CgKfYw6q.js";import{_ as Lt}from"./TextArea-B0gFiJOu.js";import{S as It,_ as $t}from"./index-Xdyh2PDp.js";import"./dayjs-Bv4VEw_C.js";import"./axios-Cm0UX6qg.js";import"./qs-QntUJHOZ.js";import"./crypto-js-BpV8n4kc.js";import"./index-DZeMyMzw.js";import"./colors-HGJN4rtO.js";import"./ResizeObserver.es-B1PUzC5B.js";import"./Password-i_NKyCZh.js";import"./inputProps-CcY99FcL.js";import"./useRefs-Bj34oM9A.js";import"./collapseMotion-DfZt1qrJ.js";import"./FormItemContext-Ddh0y1W5.js";import"./responsiveObserve-BmeIIMjk.js";import"./QuestionCircleOutlined-RuyTLEvr.js";import"./index-BX9E5auJ.js";import"./Search-CBq09XDz.js";import"./shallowequal-CfnxU2uU.js";import"./slide-DiBPL1Vu.js";import"./index-BY3kojOB.js";import"./Dropdown-DHG-AkFH.js";import"./RightOutlined-C9HAum8N.js";import"./move-BfDFh-Ii.js";import"./LeftOutlined-wj2D7AlX.js";import"./DownOutlined-B1nKfHNN.js";import"./index-BZSgNpLH.js";const Ft=o=>{const{componentCls:d,iconCls:n,zIndexPopup:m,colorText:v,colorWarning:q,marginXS:p,fontSize:x,fontWeightStrong:g,lineHeight:w}=o;return{[d]:{zIndex:m,[`${d}-inner-content`]:{color:v},[`${d}-message`]:{position:"relative",marginBottom:p,color:v,fontSize:x,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${d}-message-icon ${n}`]:{color:q,fontSize:x,flex:"none",lineHeight:1,paddingTop:(Math.round(x*w)-x)/2},"&-title":{flex:"auto",marginInlineStart:p},"&-title-only":{fontWeight:g}},[`${d}-description`]:{position:"relative",marginInlineStart:x+p,marginBottom:p,color:v,fontSize:x},[`${d}-buttons`]:{textAlign:"end",button:{marginInlineStart:p}}}}},qt=De("Popconfirm",o=>Ft(o),o=>{const{zIndexPopupBase:d}=o;return{zIndexPopup:d+60}});var zt=function(o,d){var n={};for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&d.indexOf(m)<0&&(n[m]=o[m]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,m=Object.getOwnPropertySymbols(o);v<m.length;v++)d.indexOf(m[v])<0&&Object.prototype.propertyIsEnumerable.call(o,m[v])&&(n[m[v]]=o[m[v]]);return n};const Tt=()=>F(F({},kt()),{prefixCls:String,content:J(),title:J(),description:J(),okType:Ye("primary"),disabled:{type:Boolean,default:!1},okText:J(),cancelText:J(),icon:J(),okButtonProps:pe(),cancelButtonProps:pe(),showCancel:{type:Boolean,default:!0},onConfirm:Function,onCancel:Function}),Dt=et({compatConfig:{MODE:3},name:"APopconfirm",inheritAttrs:!1,props:Be(Tt(),F(F({},ht()),{trigger:"click",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0,okType:"primary",disabled:!1})),slots:Object,setup(o,d){let{slots:n,emit:m,expose:v,attrs:q}=d;const p=L();Ue(o.visible===void 0),v({getPopupDomNode:()=>{var s,a;return(a=(s=p.value)===null||s===void 0?void 0:s.getPopupDomNode)===null||a===void 0?void 0:a.call(s)}});const[x,g]=bt(!1,{value:tt(o,"open")}),w=(s,a)=>{o.open===void 0&&g(s),m("update:open",s),m("openChange",s,a)},Y=s=>{w(!1,s)},Q=s=>{var a;return(a=o.onConfirm)===null||a===void 0?void 0:a.call(o,s)},R=s=>{var a;w(!1,s),(a=o.onCancel)===null||a===void 0||a.call(o,s)},I=s=>{s.keyCode===Je.ESC&&x&&w(!1,s)},z=s=>{const{disabled:a}=o;a||w(s)},{prefixCls:S,getPrefixCls:T}=Me("popconfirm",o),X=ve(()=>T()),r=ve(()=>T("btn")),[P]=qt(S),[A]=je("Popconfirm",Re.Popconfirm),E=()=>{var s,a,$,D,N;const{okButtonProps:f,cancelButtonProps:i,title:c=(s=n.title)===null||s===void 0?void 0:s.call(n),description:h=(a=n.description)===null||a===void 0?void 0:a.call(n),cancelText:O=($=n.cancel)===null||$===void 0?void 0:$.call(n),okText:V=(D=n.okText)===null||D===void 0?void 0:D.call(n),okType:G,icon:oe=((N=n.icon)===null||N===void 0?void 0:N.call(n))||e(Qe,null,null),showCancel:ae=!0}=o,{cancelButton:ne,okButton:W}=n,K=F({onClick:R,size:"small"},i),se=F(F(F({onClick:Q},me(G)),{size:"small"}),f);return e("div",{class:`${S.value}-inner-content`},[e("div",{class:`${S.value}-message`},[oe&&e("span",{class:`${S.value}-message-icon`},[oe]),e("div",{class:[`${S.value}-message-title`,{[`${S.value}-message-title-only`]:!!h}]},[c])]),h&&e("div",{class:`${S.value}-description`},[h]),e("div",{class:`${S.value}-buttons`},[ae?ne?ne(K):e(ke,K,{default:()=>[O||A.value.cancelText]}):null,W?W(se):e(We,{buttonProps:F(F({size:"small"},me(G)),f),actionFn:Q,close:Y,prefixCls:r.value,quitOnNullishReturnValue:!0,emitEvent:!0},{default:()=>[V||A.value.okText]})])])};return()=>{var s;const{placement:a,overlayClassName:$,trigger:D="click"}=o,N=zt(o,["placement","overlayClassName","trigger"]),f=Ae(N,["title","content","cancelText","okText","onUpdate:open","onConfirm","onCancel","prefixCls"]),i=Ee(S.value,$);return P(e(yt,ie(ie(ie({},f),q),{},{trigger:D,placement:a,onOpenChange:z,open:x.value,overlayClassName:i,transitionName:He(X.value,"zoom-big",o.transitionName),ref:p,"data-popover-inject":!0}),{default:()=>[Ve(((s=n.default)===null||s===void 0?void 0:s.call(n))||[],{onKeydown:c=>{I(c)}},!1)],content:E}))}}}),Nt=Ne(Dt);var Bt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 01-11.2 1.7L483.3 569.8a7.92 7.92 0 01-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"}}]},name:"clock-circle",theme:"filled"};const Ut=Bt;function ye(o){for(var d=1;d<arguments.length;d++){var n=arguments[d]!=null?Object(arguments[d]):{},m=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(m=m.concat(Object.getOwnPropertySymbols(n).filter(function(v){return Object.getOwnPropertyDescriptor(n,v).enumerable}))),m.forEach(function(v){Mt(o,v,n[v])})}return o}function Mt(o,d,n){return d in o?Object.defineProperty(o,d,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[d]=n,o}var ue=function(d,n){var m=ye({},d,n.attrs);return e(Xe,ye({},m,{icon:Ut}),null)};ue.displayName="ClockCircleFilled";ue.inheritAttrs=!1;const he=ue,jt={class:"form-box"},Rt={class:"upload-document-type-box"},At=["onClick"],Et={class:"right-block"},Vt={class:"title-block"},Ht={class:"title-text"},Yt={class:"desc"},Qt={__name:"add-custom-document",emits:["ok"],setup(o,{expose:d,emit:n}){const m=we(),v=Se(),q=ce.useForm,p=L(!1),x=L("添加自定义文档"),g=te({library_id:v.query.id,doc_type:3,file_name:"",is_qa_doc:0,qa_index_type:1}),w=L([{iconName:"file-search",iconNameActive:"file-search",title:"问题与答案一起生成索引",value:1,desc:"回答用户提问时，将用户提问与导入的问题和答案一起对比相似度，根据相似度高的问题和答案回复"},{iconName:"comment-search",iconNameActive:"comment-search",title:"仅对问题生成索引",value:2,desc:"回答用户提问时，将用户提问与导入的问题一起对比相似度，再根据相似度高的问题和对应的答案来回复"}]),Y=r=>{g.qa_index_type=r},Q=te({file_name:[{message:"请输入昵称",required:!0}]}),{resetFields:R,validate:I,validateInfos:z}=q(g,Q),S=()=>{p.value=!0,R(),g.file_name="",g.is_qa_doc=0,g.qa_index_type=1},T=L(!1),X=()=>{I().then(()=>{let r={...Pe(g)};T.value=!0,re(r).then(P=>{H.success(`${x.value}成功`),p.value=!1,m.push("/library/preview?id="+P.data.file_ids[0])}).finally(()=>{T.value=!1})})};return d({add:S}),(r,P)=>{const A=Le,E=Oe,s=_t,a=pt,$=be,D=ce,N=xe;return u(),y("div",null,[e(N,{open:p.value,"onUpdate:open":P[2]||(P[2]=f=>p.value=f),title:x.value,onOk:X,width:"472px",confirmLoading:T.value},{default:t(()=>[l("div",jt,[e(D,{layout:"vertical"},{default:t(()=>[e(E,ot({label:"文档名称"},B(z).file_name),{default:t(()=>[e(A,{type:"text",placeholder:"请输入文档名称",value:g.file_name,"onUpdate:value":P[0]||(P[0]=f=>g.file_name=f)},null,8,["value"])]),_:1},16),e(E,{label:"文档类型",required:""},{default:t(()=>[e(a,{value:g.is_qa_doc,"onUpdate:value":P[1]||(P[1]=f=>g.is_qa_doc=f)},{default:t(()=>[e(s,{value:0},{default:t(()=>[b("普通文档")]),_:1}),e(s,{value:1},{default:t(()=>[b("QA文档")]),_:1})]),_:1},8,["value"])]),_:1}),g.is_qa_doc==1?(u(),M(E,{key:0,label:"索引方式",required:""},{default:t(()=>[l("div",Rt,[(u(!0),y(ee,null,at(w.value,f=>(u(),y("div",{class:nt(["type-item",{active:g.qa_index_type==f.value}]),key:f.value,onClick:i=>Y(f.value)},[l("div",Et,[l("div",Vt,[e($,{name:g.qa_index_type==f.value?f.iconNameActive:f.iconName},null,8,["name"]),l("div",Ht,U(f.title),1)]),l("div",Yt,U(f.desc),1)]),g.qa_index_type==f.value?(u(),M($,{key:0,class:"check-arrow",name:"check-arrow-filled",style:{"font-size":"24px",color:"#fff"}})):C("",!0)],10,At))),128))])]),_:1})):C("",!0)]),_:1})])]),_:1},8,["open","title","confirmLoading"])])}}},Wt=Ce(Qt,[["__scopeId","data-v-130fb766"]]),j=o=>(it("data-v-0c09d95e"),o=o(),rt(),o),Jt={class:"details-library-page"},Xt={class:"list-tools"},Gt={class:"tool-item"},Kt={class:"dropdown-btn-menu"},Zt=j(()=>l("div",{class:"title"},"本地文档",-1)),eo=j(()=>l("div",{class:"desc"},"上传本地 text/pdf/doc 等格式文件",-1)),to={class:"dropdown-btn-menu"},oo=j(()=>l("div",{class:"title"},"在线数据",-1)),ao=j(()=>l("div",{class:"desc"},"获取在线网页内容",-1)),no={class:"dropdown-btn-menu"},so=j(()=>l("div",{class:"title"},"自定义文档",-1)),lo=j(()=>l("div",{class:"desc"},"自定义一个空文档，手动添加内容",-1)),io=j(()=>l("span",null,"添加内容",-1)),ro={class:"tool-item"},co={class:"list-content"},uo={key:0,class:"doc-name-td"},_o=["onClick"],po={key:0},mo={key:1},fo={key:0,class:"url-remark"},vo={key:0,class:"status-tag status-queuing"},go={key:1,class:"status-tag status-learning"},yo={key:2,class:"status-tag status-complete"},ho={class:"status-tag status-error"},ko={class:"status-tag status-complete"},Co=["onClick"],bo={key:5,class:"status-tag status-complete"},xo={key:6,class:"status-tag status-learning"},wo={class:"status-tag status-error"},So={key:0},Po={key:1},Oo={key:0},Lo={key:1},Io=["onClick"],$o=j(()=>l("span",null,"删除",-1)),Fo={class:"upload-file-box"},qo={__name:"knowledge-document",setup(o){const d=Se(),n=we(),m=d.query;L(1);const v=L({library_intro:"",library_name:"",use_model:"",is_offline:null}),q=L([]),p=te({library_id:m.id,file_name:void 0,page:1,size:10,total:0}),x=[{title:"文档名称",dataIndex:"file_name",key:"file_name",width:450},{title:"状态",dataIndex:"status",key:"status",width:"160px"},{title:"文档格式",dataIndex:"file_ext",key:"file_ext",width:"100px"},{title:"文档大小",dataIndex:"file_size_str",key:"file_size",width:"100px"},{title:"分段",dataIndex:"paragraph_count",key:"paragraph_count",width:"120px"},{title:"更新时间",dataIndex:"update_time",key:"update_time",width:"150px"},{title:"操作",dataIndex:"action",key:"action",width:"60px"}],g=i=>{p.page=i.current,p.size=i.pageSize,I()},w=()=>{p.page=1,I()};let Y=!1;const Q=({id:i})=>{q.value.length==1&&(Y=!0),ut({id:i}).then(()=>{Y&&p.page>1&&p.page--,I(),H.success("删除成功")})},R=i=>{if(i.status=="4")return n.push({path:"/library/document-segmentation",query:{document_id:i.id}});if(i.status=="3")return H.error("学习失败,不可预览");if(i.status=="0")return H.error("转换中,稍候可预览");if(i.status=="6")return H.error("获取中,不可预览");if(i.status=="7")return H.error("获取失败,不可预览");n.push({name:"libraryPreview",query:{id:i.id}})},I=()=>{ct(Pe(p)).then(i=>{v.value=i.data.info;let c=i.data.list||[];p.total=i.data.total;let h=!1;q.value=c.map(O=>(["1","6","0","5","4"].includes(O.status)&&(h=!0),O.file_size_str=Ge(O.file_size),O.update_time=Ke(O.update_time*1e3).format("YYYY-MM-DD HH:mm"),O)),h&&S(),!h&&clearInterval(z.value)})},z=L(null),S=()=>{clearInterval(z.value),z.value=setInterval(()=>{I()},1e3*5)};st(()=>{z.value&&clearInterval(z.value)}),I();const T=L(null),X=i=>{let{key:c}=i;c==1&&$(),c==2&&P(),c==3&&T.value.add()},r=te({open:!1,urls:"",library_id:m.id,doc_auto_renew_frequency:1,confirmLoading:!1,rules:{urls:[{message:"请输入网页地址",required:!0},{validator:(i,c)=>ge(c)===!1?Promise.reject(new Error("网页地址不合法")):Promise.resolve()}]}}),P=()=>{r.open=!0,r.confirmLoading=!1,r.urls="",r.doc_auto_renew_frequency=1},A=L(null),E=()=>{A.value.validate().then(()=>{r.confirmLoading=!0,re({library_id:r.library_id,urls:JSON.stringify(ge(r.urls)),doc_auto_renew_frequency:r.doc_auto_renew_frequency,doc_type:2}).then(i=>{r.open=!1,r.confirmLoading=!1,w()})}).catch(()=>{r.confirmLoading=!1})},s=()=>{r.open=!1},a=te({open:!1,fileList:[],confirmLoading:!1}),$=()=>{a.fileList=[],a.open=!0},D=()=>{a.fileList=[]},N=i=>{a.fileList=i},f=()=>{if(a.fileList.length==0){H.error("请选择文件");return}a.confirmLoading=!0;let i=new FormData;i.append("library_id",p.library_id);let c=!1;a.fileList.forEach(h=>{(h.name.includes(".xlsx")||h.name.includes(".csv"))&&(c=!0),i.append("library_files",h)}),re(i).then(h=>{I(),a.open=!1,a.fileList=[],a.confirmLoading=!1,c&&n.push("/library/document-segmentation?document_id="+h.data.file_ids[0])}).catch(()=>{a.confirmLoading=!1})};return L(null),(i,c)=>{const h=be,O=Pt,V=mt,G=ft,oe=ke,ae=vt,ne=Le,W=gt,K=Ct,se=Nt,Ie=Ot,$e=Te,de=xe,Fe=Lt,_e=Oe,Z=It,qe=$t,ze=ce;return u(),y("div",Jt,[e($e,{scrollbar:!1},{default:t(()=>[l("div",Xt,[l("div",null,[l("div",Gt,[e(ae,{trigger:["click"],overlayClassName:"add-dropdown-btn"},{overlay:t(()=>[e(G,{onClick:X},{default:t(()=>[(u(),M(V,{key:1},{default:t(()=>[l("div",Kt,[e(O,{class:"title-block",gap:4},{default:t(()=>[e(h,{name:"doc-icon"}),Zt]),_:1}),eo])]),_:1})),(u(),M(V,{key:2},{default:t(()=>[l("div",to,[e(O,{class:"title-block",gap:4},{default:t(()=>[e(h,{name:"link-icon"}),oo]),_:1}),ao])]),_:1})),(u(),M(V,{key:3},{default:t(()=>[l("div",no,[e(O,{class:"title-block",gap:4},{default:t(()=>[e(h,{name:"cu-doc-icon"}),so]),_:1}),lo])]),_:1}))]),_:1})]),default:t(()=>[e(oe,{type:"primary"},{icon:t(()=>[e(B(xt))]),default:t(()=>[io]),_:1})]),_:1})])]),l("div",null,[l("div",ro,[e(ne,{style:{width:"282px"},value:p.file_name,"onUpdate:value":c[0]||(c[0]=k=>p.file_name=k),placeholder:"请输入文档名称搜索",onChange:w},{suffix:t(()=>[e(B(wt),{onClick:w,style:{color:"rgba(0, 0, 0, 0.25)"}})]),_:1},8,["value"])])])]),l("div",co,[e(Ie,{columns:x,"data-source":q.value,pagination:{current:p.page,total:p.total,pageSize:p.size,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"]},onChange:g},{bodyCell:t(({column:k,record:_})=>[k.key==="file_name"?(u(),y("div",uo,[l("a",{onClick:le=>R(_)},[["5","6","7"].includes(_.status)?(u(),y("span",po,U(_.doc_url),1)):(u(),y("span",mo,U(_.file_name),1))],8,_o),_.doc_type==2&&_.remark?(u(),y("div",fo," 备注："+U(_.remark),1)):C("",!0)])):C("",!0),k.key==="status"?(u(),y(ee,{key:1},[_.status==0?(u(),y("span",vo,[e(W,{size:"small"}),b(" 转换中")])):C("",!0),_.status==1?(u(),y("span",go,[e(W,{size:"small"}),b(" 学习中")])):C("",!0),_.status==2?(u(),y("span",yo,[e(B(Ze)),b(" 学习完成")])):C("",!0),_.status==3?(u(),M(K,{key:3,placement:"top"},{title:t(()=>[l("span",null,U(_.errmsg),1)]),default:t(()=>[l("span",ho,[e(B(fe)),b(" 学习失败")])]),_:2},1024)):C("",!0),_.status==4?(u(),y(ee,{key:4},[l("span",ko,[e(B(he)),b(" 待学习")]),l("a",{class:"ml8",onClick:le=>R(_)},"学习",8,Co)],64)):C("",!0),_.status==5?(u(),y("span",bo,[e(B(he)),b(" 待获取")])):C("",!0),_.status==6?(u(),y("span",xo,[e(W,{size:"small"}),b(" 获取中")])):C("",!0),_.status==7?(u(),M(K,{key:7,placement:"top"},{title:t(()=>[l("span",null,U(_.errmsg),1)]),default:t(()=>[l("span",wo,[e(B(fe)),b(" 获取失败")])]),_:2},1024)):C("",!0)],64)):C("",!0),k.key==="file_size"?(u(),y(ee,{key:2},[_.doc_type==3?(u(),y("span",So,"-")):(u(),y("span",Po,U(_.file_size_str),1))],64)):C("",!0),k.key==="paragraph_count"?(u(),y(ee,{key:3},[_.status==0||_.status==1?(u(),y("span",Oo,"-")):(u(),y("span",Lo,U(_.paragraph_count),1))],64)):C("",!0),k.key==="action"?(u(),M(ae,{key:4},{overlay:t(()=>[e(G,null,{default:t(()=>[e(V,{disabled:_.status==6||_.status==7||_.status==0},{default:t(()=>[l("div",{onClick:le=>R(_)},"预览",8,Io)]),_:2},1032,["disabled"]),e(V,null,{default:t(()=>[e(se,{title:"确定要删除吗?",onConfirm:le=>Q(_)},{default:t(()=>[$o]),_:2},1032,["onConfirm"])]),_:2},1024)]),_:2},1024)]),default:t(()=>[l("div",{class:"table-btn",onClick:c[1]||(c[1]=lt(()=>{},["prevent"]))},[e(B(St))])]),_:2},1024)):C("",!0)]),_:1},8,["data-source","pagination"])])]),_:1}),e(de,{open:a.open,"onUpdate:open":c[3]||(c[3]=k=>a.open=k),"confirm-loading":a.confirmLoading,maskClosable:!1,title:"上传文档",onOk:f,onCancel:D},{default:t(()=>[l("div",Fo,[e(dt,{value:a.fileList,"onUpdate:value":c[2]||(c[2]=k=>a.fileList=k),onChange:N},null,8,["value"])])]),_:1},8,["open","confirm-loading"]),e(de,{open:r.open,"onUpdate:open":c[6]||(c[6]=k=>r.open=k),"confirm-loading":r.confirmLoading,maskClosable:!1,title:"添加在线数据",width:"746px",onOk:E,onCancel:s},{default:t(()=>[e(ze,{class:"url-add-form",layout:"vertical",ref_key:"urlFormRef",ref:A,model:r,rules:r.rules},{default:t(()=>[e(_e,{name:"urls",label:"网页链接"},{default:t(()=>[e(Fe,{style:{height:"120px"},value:r.urls,"onUpdate:value":c[4]||(c[4]=k=>r.urls=k),placeholder:"请输入网页链接,形式：一行标题一行网页链接"},null,8,["value"])]),_:1}),e(_e,{name:"doc_auto_renew_frequency",label:"更新频率",required:""},{default:t(()=>[e(qe,{value:r.doc_auto_renew_frequency,"onUpdate:value":c[5]||(c[5]=k=>r.doc_auto_renew_frequency=k),style:{width:"100%"}},{default:t(()=>[e(Z,{value:1},{default:t(()=>[b("不自动更新")]),_:1}),e(Z,{value:2},{default:t(()=>[b("每天")]),_:1}),e(Z,{value:3},{default:t(()=>[b("每3天")]),_:1}),e(Z,{value:4},{default:t(()=>[b("每7天")]),_:1}),e(Z,{value:5},{default:t(()=>[b("每30天")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["open","confirm-loading"]),e(Wt,{onOk:w,ref_key:"addCustomDocumentRef",ref:T},null,512)])}}},Fa=Ce(qo,[["__scopeId","data-v-0c09d95e"]]);export{Fa as default};
