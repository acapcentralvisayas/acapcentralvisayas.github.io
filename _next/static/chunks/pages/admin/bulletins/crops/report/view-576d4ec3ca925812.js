(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9472],{94811:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/crops/report/view",function(){return t(56044)}])},22757:function(n,e){"use strict";e.Z={container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",borderColor:"#E2E8F0"},welcome:{border:"1px solid #DCEDC8",borderRadius:function(n){return n.spacing(1)},width:"100%",display:"grid",placeContent:"center",padding:"20px",marginTop:function(n){return n.spacing(1)},textAlign:"center","& h6":{lineHeight:"20px"}},summary:{border:"1px solid #DCEDC8",borderRadius:function(n){return n.spacing(1)},marginTop:function(n){return n.spacing(1)},padding:function(n){return n.spacing(3)}},selectionSummary:{minWidth:"100%",paddingLeft:{xs:0,lg:"16px"}},headerText:{marginBottom:"32px",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"top"},conditionLegend:{borderRadius:function(n){return n.spacing(1)},width:"100%",padding:function(n){return n.spacing(1)},border:"1px solid grey",textAlign:"center",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",float:"left"},autocomplete:{marginTop:function(n){return n.spacing(1)}},recSeasonal:{marginTop:function(n){return n.spacing(1)},marginBottom:function(n){return n.spacing(5)},"& p, ul, ol":{fontSize:"14px"}},recSeasonalStage:{marginTop:function(n){return n.spacing(5)},marginBottom:function(n){return n.spacing(2)},textDecoration:"underline"},button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",width:"80px",height:{xs:"40px",sm:"48px"}},pdfcontent:{ul:{paddingLeft:3}}}},56044:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Y}});var r=t(34051),i=t.n(r),o=t(85893),a=t(67294),c=t(9473),l=t(11163),s=t(95243),u=t(66383),d=t(45697),p=t.n(d),f=t(87357),m=t(11057),x=t(56863),h=t(67720),g=t(88409),b=t(40044),v=t(15861),y=t(16759),j=t(37634),w=t(19227),S=t(901),Z=t(27392),k=t(38199),O=t(69437),C=t(22757),B=t(77841),D=t(15799),E=t(71927),T=t(98396);function R(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function P(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){R(n,e,t[e])}))}return n}function _(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var F=(0,D.Z)();function I(n){var e=n.children,t=n.value,r=n.index,i=_(n,["children","value","index"]);return i.smallscreen&&(i.smallscreen=i.smallscreen.toString()),(0,o.jsx)("div",P({role:"tabpanel",hidden:t!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i,{children:t===r&&(0,o.jsx)(f.Z,{sx:{p:i.smallscreen?2:3,whiteSpace:(null===n||void 0===n?void 0:n.smsstyle)||"normal"},children:e})}))}function N(n){return{id:"simple-tab-".concat(n),"aria-controls":"simple-tabpanel-".concat(n)}}function L(n){var e,t=n.report,r=n.loading,i=n.onBackBtnClick,l=n.onDeleteClick,s=n.onSmsBtnClick,u=(0,a.useState)(0),d=u[0],p=u[1],D=(0,O.Z)(t,[k.X3.REGION,k.X3.TYPE,k.X3.UID,k.X3.ID]).fieldValues,R=(0,c.v9)((function(n){return n.reports})),_=R.status,L=R.error,M=(0,T.Z)(F.breakpoints.between("xs","md"));return(0,o.jsx)("div",{children:r||t.loading?(0,o.jsx)(y.Z,{}):void 0!==t.stages?(0,o.jsxs)(f.Z,{container:!0,sx:C.Z.container,children:[(0,o.jsxs)(f.Z,{sx:{marginBottom:"32px",display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)(E.Z,{theme:F,children:(0,o.jsxs)(f.Z,{children:[(0,o.jsx)(v.Z,{variant:"h5",children:"Crop Recommendation Summary"}),(0,o.jsx)(v.Z,{variant:"h6",children:Z.eT[t.type]})]})}),(0,o.jsxs)(x.Z,{orientation:M?"vertical":"horizontal",children:[(0,o.jsx)(m.Z,{disableElevation:!0,color:"primary",sx:P({},C.Z.button,{color:function(n){return n.palette.primary.main}}),variant:"outlined",onClick:s,children:"SMS"}),(0,o.jsx)(w.Z,{isOpen:!1,maxWidth:"sm",openButtonText:"Delete",title:"Delete Report",contentText:""!==t.info?t.info:"Are you sure you want to delete this Bulletin report log?",confirmBtnText:""!==t.info?"Ok":"Delete",modalConfirmHandlerCB:l,loading:_===S.G.PENDING,modalButtonStyles:{borderRadius:0,width:"100%"},children:""!==L&&(0,o.jsx)(v.Z,{variant:"caption",sx:{color:"red"},children:L})}),(0,o.jsx)(m.Z,{disableElevation:!0,color:"primary",variant:"contained",sx:C.Z.button,onClick:i,children:"Back"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)(f.Z,{sx:B.Z.details,children:[D.map((function(n){return(0,o.jsx)("div",{children:(0,o.jsxs)(v.Z,{variant:"body2",children:[(0,o.jsxs)("strong",{children:[null===n||void 0===n?void 0:n.label,": "]})," ",null!==(e=null===n||void 0===n?void 0:n.value)&&void 0!==e?e:"-"]})},n.id)})),(0,o.jsxs)(v.Z,{variant:"caption",children:[(0,o.jsx)("strong",{children:"ID:"})," ",t.id]})]}),(0,o.jsx)(h.Z,{sx:{marginTop:"32px"}})]}),(0,o.jsxs)(f.Z,{sx:{width:"100%"},children:[(0,o.jsx)(f.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,o.jsxs)(g.Z,{value:d,onChange:function(n,e){p(e)},"aria-label":"basic tabs example",children:[(0,o.jsx)(b.Z,P({label:"PDF FORM"},N(0))),(0,o.jsx)(b.Z,P({label:"SMS FORM"},N(1)))]})}),(0,o.jsx)(I,{value:d,index:0,smallscreen:!!M||void 0,smsstyle:"normal",children:(0,o.jsx)(f.Z,{sx:P({},{ul:M?C.Z.pdfcontent.ul:"none"},{hr:B.Z.htmlReportHR},B.Z.content),dangerouslySetInnerHTML:{__html:t.recommendations}})}),(0,o.jsx)(I,{value:d,index:1,smsstyle:"pre-wrap",children:(0,o.jsx)(v.Z,{variant:"body1",gutterBottom:!0,children:t.smsRecommendations||(0,o.jsx)("span",{style:{color:"#ff1744"},children:"No SMS Recommendations available."})})})]})]}):(0,o.jsx)(j.Z,{})})}F.typography.h5=R({fontSize:"1.2rem","@media (min-width:600px)":{fontSize:"1.5rem"}},F.breakpoints.up("md"),{fontSize:"2rem"}),I.propTypes={children:p().node,index:p().number.isRequired,value:p().number.isRequired},L.propTypes={report:p().object,loading:p().bool,onBackBtnClick:p().func,onDeleteClick:p().func,onSmsBtnClick:p().func};var M=L,z=t(12671),W=t(47426),X=t(77715),q=t(61690),A=t(87006);function H(n,e,t,r,i,o,a){try{var c=n[o](a),l=c.value}catch(s){return void t(s)}c.done?e(l):Promise.resolve(l).then(r,i)}function G(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){H(o,r,i,a,c,"next",n)}function c(n){H(o,r,i,a,c,"throw",n)}a(void 0)}))}}function Q(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function U(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){Q(n,e,t[e])}))}return n}var V={loading:!0,error:"",info:"",deleting:!1};var Y=(0,s.Z)((function(n){var e=(0,a.useState)(V),t=e[0],r=e[1],s=(0,l.useRouter)(),d=(0,c.I0)();(0,a.useEffect)((function(){d((0,z.s_)())}),[d]),(0,a.useEffect)((function(){if(t.loading&&Object.keys(s.query).length>0){var n=function(){var n=G(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,A.QL)(s.query.docId);case 3:e=n.sent,t=e.date_created.toDate(),e.date_created="".concat(t.toDateString()," ").concat(t.toLocaleTimeString("it-IT",X.W6)),r((function(n){return U({},n,{loading:!1},e)})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),r(U({},V,{loading:!1,error:n.t0.message}));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}}),[s,t.loading]);var p=function(){var n=G(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:""===t.info?d((0,q.Ee)(t.id)).unwrap().then((function(){r((function(n){return U({},n,{deleting:!1,info:"Report deleted."})}))})):s.push("/admin/bulletins/crops");case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,o.jsx)(u.Z,{loading:n.loading,user:n.user,onBtnLogoutClick:n.onBtnLogoutClick,accLevel:W.DW.ADMIN,children:(0,o.jsx)(M,{report:t,loading:n.loading,onBackBtnClick:function(){s.push("/admin/bulletins/crops")},onDeleteClick:p,onSmsBtnClick:function(){s.push({pathname:"/admin/sms/viewSMS",query:{docId:t.id}})}})})}))}},function(n){n.O(0,[5778,3593,9964,8858,6279,542,7944,6572,3074,1050,2774,9774,2888,179],(function(){return e=94811,n(n.s=e);var e}));var e=n.O();_N_E=e}]);