(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{120:function(e,t,n){e.exports={userButtonEdit:"ButtonInList_userButtonEdit__19ekb",userButtonDelete:"ButtonInList_userButtonDelete__1UWRe"}},121:function(e,t,n){e.exports={inputWrapper:"AntInput_inputWrapper__1FO2_","ant-input":"AntInput_ant-input__2ouOV"}},122:function(e,t,n){e.exports={sorting:"Sorting_sorting__1MpOR",sortingText:"Sorting_sortingText__2yOrj"}},144:function(e,t,n){e.exports={usersList:"UsersList_usersList__KaSBr"}},146:function(e,t,n){e.exports={"ant-spin-spinning":"Loader_ant-spin-spinning__3L2EB"}},148:function(e,t,n){e.exports={main:"HomePage_main__NSygf"}},246:function(e,t,n){},247:function(e,t,n){"use strict";n.r(t);var a,r,s=n(0),i=n(26),c=n.n(i),u=n(81),o=n(44),l=n(70),j=n(111),p=n(54),b=n.n(p),d=n(75),m="https://621c7b30768a4e1020ab3244.mockapi.io/api",g=Object(l.b)("users/fetchGetUsers",function(){var e=Object(d.a)(b.a.mark((function e(t,n){var a,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,r=t?"".concat(m,"/users?name=").concat(t):"".concat(m,"/users"),e.prev=2,e.next=5,fetch(r,{method:"GET",headers:{"Content-Type":"application/json"}});case 5:if((s=e.sent).ok){e.next=8;break}throw new Error("Server error ".concat(s.status,"!"));case 8:return e.next=10,s.json();case 10:return e.abrupt("return",e.sent);case 13:return e.prev=13,e.t0=e.catch(2),e.abrupt("return",a(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,n){return e.apply(this,arguments)}}()),f=Object(l.c)({name:"users",initialState:{usersList:[],searchStr:"",isSorting:"",maxPages:0,activePage:1,elementsOnPage:"5",isLoading:!0},reducers:{changeSearchStr:function(e,t){e.searchStr=t.payload},sortingUserList:function(e,t){e.isSorting=t.payload},changesElementsOnPage:function(e,t){e.elementsOnPage=t.payload},changesMaxPages:function(e,t){e.maxPages=t.payload},changesNumPage:function(e,t){e.activePage=t.payload},changesUserData:function(e,t){e.usersList=t.payload}},extraReducers:(a={},Object(j.a)(a,g.pending.type,(function(e){e.isLoading=!0})),Object(j.a)(a,g.fulfilled.type,(function(e,t){e.usersList=t.payload,e.isLoading=!1;var n=t.payload.length,a=Number(e.elementsOnPage);a&&(e.maxPages=Math.ceil(n/a))})),Object(j.a)(a,g.rejected.type,(function(e,t){e.isLoading=!1})),a)}),h=f.actions,O=h.changeSearchStr,x=h.sortingUserList,v=h.changesElementsOnPage,_=h.changesNumPage,y=h.changesMaxPages,S=h.changesUserData,P=f.reducer,N=Object(o.b)({usersReduser:P}),I=n(104),L=n(15),U=n(136),w=n(82),k=function(){return Object(u.b)()},C=u.c,E=n(37),T=n(254),D=n(251),F=n(253),A=n(57),M=n(84),B=n.n(M),R=n(7),W=function(e){var t=e.name,n=e.age,a=e.updateUserData,r=Object(s.useState)([{name:["name"],value:t||""},{name:["age"],value:n||""}]),i=Object(E.a)(r,1)[0];return Object(R.jsxs)(D.a,{size:"middle",onFinish:function(e){a(e)},fields:i,className:B.a.editForm,children:[Object(R.jsx)(D.a.Item,{className:B.a.formItem,name:"name",label:"Name",children:Object(R.jsx)(F.a,{type:"text"})}),Object(R.jsx)(D.a.Item,{className:B.a.formItem,name:"age",label:"Age",children:Object(R.jsx)(F.a,{type:"number"})}),Object(R.jsx)(D.a.Item,{className:B.a.formItem,children:Object(R.jsx)(A.a,{type:"primary",htmlType:"submit",children:"Save"})})]})},V=function(e){var t=e.name,n=e.age,a=e.updateUserData,r=e.isModalVisible,s=e.onCloseModal;return Object(R.jsx)(T.a,{title:"Change user data",visible:r,onCancel:function(){s()},footer:!1,width:400,children:Object(R.jsx)(W,{name:t,age:n,updateUserData:a})})},z=n(142),J=n(143),K=function(){function e(){Object(z.a)(this,e),this.baseStr="https://621c7b30768a4e1020ab3244.mockapi.io/api"}return Object(J.a)(e,[{key:"putUserUpdate",value:function(){var e=Object(d.a)(b.a.mark((function e(t,n){var a,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={age:n.age,name:n.name},r={"Content-Type":"application/json"},e.next=4,fetch("".concat(this.baseStr,"/users/").concat(t),{method:"PUT",body:JSON.stringify(a),headers:r});case 4:return s=e.sent,e.abrupt("return",s.json());case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteUser",value:function(){var e=Object(d.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={"Content-Type":"application/json"},e.next=3,fetch("".concat(this.baseStr,"/users/").concat(t),{method:"DELETE",headers:n});case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),G=new K,q=n(62),H=n.n(q),X=(n(231),n(256)),Y=n(110),Z=n(120),Q=n.n(Z);!function(e){e.delete="delete",e.edit="edit"}(r||(r={}));var $=function(e){var t=e.onClickFunc,n=e.variant;return Object(R.jsxs)("button",{type:"button",className:n===r.edit?Q.a.userButtonEdit:Q.a.userButtonDelete,onClick:function(){t()},children:[n===r.edit?Object(R.jsx)(X.a,{}):Object(R.jsx)(Y.a,{}),n===r.edit?"Edit":"Delete"]})},ee=function(e){var t=e.id,n=e.name,a=e.age,i=k(),c=C((function(e){return e.usersReduser})).usersList,u=Object(s.useState)(a),o=Object(E.a)(u,2),l=o[0],j=o[1],p=Object(s.useState)(n),b=Object(E.a)(p,2),d=b[0],m=b[1],f="https://i.pravatar.cc/150?img=".concat(function(e,t){var n=e-.5+Math.random()*(t-e+1);return Math.round(n)}(1,70)),h="/user/".concat(n),O=Object(s.useState)(!1),x=Object(E.a)(O,2),v=x[0],_=x[1],y=Object(R.jsx)(V,{onCloseModal:function(){_(!1)},name:n,age:a,isModalVisible:v,updateUserData:function(e){if(e.age!==a||e.name!==n){var r={age:Number(e.age),name:e.name};G.putUserUpdate(t,r).then((function(e){e.name&&m(e.name),e.age&&j(e.age);var t=Object(w.a)(c).map((function(t){return t.id===e.id?t=e:t}));i(S(t))}))}_(!1)}}),P=Object(R.jsxs)("li",{className:H.a.userPreview,children:[Object(R.jsx)("div",{className:H.a.userAvatarWrapper,children:Object(R.jsx)("img",{src:f,alt:"avatar"})}),Object(R.jsxs)("div",{className:H.a.userInfo,children:[Object(R.jsx)(I.b,{to:h,children:Object(R.jsxs)("div",{className:H.a.userInfoItem,children:["Name:"," ",d]})}),Object(R.jsxs)("div",{className:H.a.userInfoItem,children:["Age:"," ",l]})]}),Object(R.jsxs)("div",{className:H.a.buttonInList,children:[Object(R.jsx)($,{variant:r.edit,onClickFunc:function(){_(!0)}}),Object(R.jsx)($,{variant:r.delete,onClickFunc:function(){G.deleteUser(t).then((function(){i(g(""))}))}})]})]},t);return Object(R.jsxs)(R.Fragment,{children:[P,y]})},te=n(144),ne=n.n(te),ae=function(){var e=C((function(e){return e.usersReduser})),t=e.usersList,n=e.isSorting,a=e.elementsOnPage,r=e.activePage;var s=t?function(){var e=Object(w.a)(function(){var e=Object(w.a)(t);return"sortDown"===n?e.sort((function(e,t){return e.age<t.age?1:-1})):"sortUp"===n?e.sort((function(e,t){return e.age>t.age?1:-1})):e}()),s=Number(a);if(s){var i=(r-1)*s;return e.splice(i,s)}return e}().map((function(e){return Object(R.jsx)(ee,{id:e.id,name:e.name,age:e.age},e.id)})):[];return Object(R.jsx)("ul",{className:ne.a.usersList,children:s})},re=n(121),se=n.n(re),ie=(n(234),function(){var e=k(),t=C((function(e){return e.usersReduser})).searchStr;return Object(R.jsx)("div",{className:se.a.inputWrapper,children:Object(R.jsx)(F.a,{placeholder:"Search by name",onChange:function(t){var n=t.target.value;n=n.trim().toLowerCase(),e(O(n))},className:se.a["ant-input"],defaultValue:t})})}),ce=n(257),ue=n(258),oe=n(122),le=n.n(oe),je=function(){var e=k();return Object(R.jsxs)("div",{className:le.a.sorting,children:[Object(R.jsx)("span",{className:le.a.sortingText,children:"Sort users by age:"}),Object(R.jsx)("button",{type:"button",onClick:function(){e(x("sortUp"))},children:Object(R.jsx)(ce.a,{})}),Object(R.jsx)("button",{type:"button",onClick:function(){e(x("sortDown"))},children:Object(R.jsx)(ue.a,{})})]})},pe=n(252),be=n(85),de=n.n(be),me=(n(248),function(){var e=k(),t=C((function(e){return e.usersReduser})),n=t.usersList,a=t.maxPages,r=t.elementsOnPage,i=t.activePage;Object(s.useEffect)((function(){var t=n.length;if(a){var s=Number(r);e(y(s?Math.ceil(t/s):0))}}),[r,e]);var c=function(t){var n=t.currentTarget.innerText;e(v(n))};return Object(R.jsxs)("div",{className:de.a.pagination,children:[Object(R.jsxs)("div",{className:de.a.paginationSettings,children:[Object(R.jsx)("span",{className:de.a.paginationSettingsText,children:"Show elements per page:"}),Object(R.jsx)("button",{type:"button",onClick:c,children:"5"}),Object(R.jsx)("button",{type:"button",onClick:c,children:"10"}),Object(R.jsx)("button",{type:"button",onClick:c,children:"all"})]}),Object(R.jsx)(pe.a,{total:10*a,current:i,showSizeChanger:!1,onChange:function(t){e(_(t))},className:de.a["ant-pagination"]})]})}),ge=n(255),fe=n(250),he=n(146),Oe=n.n(he),xe=(n(239),function(){return Object(R.jsx)(ge.b,{size:"large",className:Oe.a["ant-spin-spinning"],children:Object(R.jsx)(fe.a,{size:"large"})})}),ve=n(148),_e=n.n(ve),ye=function(){var e=k(),t=C((function(e){return e.usersReduser})),n=t.searchStr,a=t.elementsOnPage,r=t.isLoading,i=t.usersList,c=Object(U.debounce)((function(){return e(g(n))}),500),u=r?Object(R.jsx)(xe,{}):null,o=Object(R.jsx)(ie,{}),l=!r&&i.length?Object(R.jsx)(ae,{}):null,j=!r&&i.length?Object(R.jsx)(je,{}):null,p=!r&&i.length?Object(R.jsx)(me,{}):null;return Object(s.useEffect)((function(){c()}),[n,a]),Object(R.jsxs)("main",{className:_e.a.main,children:[u,o,j,l,p]})},Se=function(){return Object(R.jsx)("div",{children:"UserFull"})},Pe=function(){return Object(R.jsx)(I.a,{children:Object(R.jsxs)(L.c,{children:[Object(R.jsx)(L.a,{path:"/",element:Object(R.jsx)(ye,{})}),Object(R.jsx)(L.a,{path:"/user/:name",element:Object(R.jsx)(Se,{})})]})})},Ne=(n(246),Object(l.a)({reducer:N}));c.a.render(Object(R.jsx)(u.a,{store:Ne,children:Object(R.jsx)(Pe,{})}),document.getElementById("root"))},62:function(e,t,n){e.exports={userPreview:"UserPreview_userPreview__15hcO",userAvatarWrapper:"UserPreview_userAvatarWrapper__3Ci_3",userInfo:"UserPreview_userInfo__2cXY2",userInfoItem:"UserPreview_userInfoItem__3uE43",buttonInList:"UserPreview_buttonInList__1a2KF"}},84:function(e,t,n){e.exports={editForm:"CompletedForm_editForm__2ekt4",formItem:"CompletedForm_formItem__ii3jZ"}},85:function(e,t,n){e.exports={pagination:"AntPagination_pagination__1MbyP",paginationSettings:"AntPagination_paginationSettings__1e6Ad",paginationSettingsText:"AntPagination_paginationSettingsText__2moKf","ant-pagination":"AntPagination_ant-pagination__1jJkq"}}},[[247,1,2]]]);
//# sourceMappingURL=main.2606ac19.chunk.js.map