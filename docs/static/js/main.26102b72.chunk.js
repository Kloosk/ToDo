(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{49:function(n,e,t){"use strict";t.r(e);var c,r,i,o,a,s,l,d,u,h,b,j,f,x,p,g,O,m,v,w,y,k,E,L,B,C,S,T,z,D,A,I,M,P,N,V,J,H,F,_,q,R,X,Y,K=t(0),G=t.n(K),U=t(22),Q=t.n(U),W=t(3),Z=t(17),$=t(5),nn=t(2),en=t(6),tn=nn.c.div(c||(c=Object(W.a)(["\n  width: 100vw;\n  min-height: 100vh;\n  background: ",";\n"])),(function(n){return n.theme.bg})),cn=nn.c.nav(r||(r=Object(W.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  margin-bottom: 15px;\n  width: 100%;\n"]))),rn=nn.c.h1(i||(i=Object(W.a)(["\n  font-size: 1rem;\n  color: ",";\n  letter-spacing: 1.5px;\n"])),(function(n){return n.theme.color})),on=nn.c.button(o||(o=Object(W.a)(["\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n"]))),an=Object(nn.c)(Z.b)(a||(a=Object(W.a)(["\n  text-decoration: none;\n"]))),sn=nn.c.svg(s||(s=Object(W.a)(["\n  color: ",";\n  height: 25px;\n"])),(function(n){return n.theme.btnBg})),ln=t(1),dn=function(n){var e=n.link;return Object(ln.jsx)(an,{to:e,children:Object(ln.jsx)(on,{children:Object(ln.jsx)(sn,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"arrow-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(ln.jsx)("path",{fill:"currentColor",d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"})})})})},un=function(){return Object(ln.jsxs)(cn,{children:[Object(ln.jsx)(dn,{link:"/"}),Object(ln.jsx)(rn,{children:"Add new thing"})]})},hn=t(35),bn=nn.c.form(l||(l=Object(W.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90vw;\n  margin: 0 auto;\n  @media (min-width: 768px) {\n    width: 50vw;\n  }\n"]))),jn=nn.c.p(d||(d=Object(W.a)(["\n  display: block;\n  color: #C80000;\n  font-size: 0.8rem;\n"]))),fn=nn.c.button(u||(u=Object(W.a)(["\n  margin-top: 20px;\n  height: 50px;\n  width: 100%;\n  border: none;\n  color: ",";\n  background-color: ",";\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  outline: none;\n  cursor: pointer;\n  &:hover{\n    transform: translateY(2px);\n  }\n"])),(function(n){return n.theme.btnTxt}),(function(n){return n.theme.btnBg})),xn=function(n){var e=n.text;return Object(ln.jsx)(fn,{children:e})},pn=nn.c.input(h||(h=Object(W.a)(["\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #D3D3D3;\n  background: transparent;\n  color: #ffffff;\n  padding: 10px 10px;\n  margin-bottom: 20px;\n  &:focus{\n   border: none;\n   border-bottom: 1px solid #ffffff;\n   outline: none;\n  }\n  &::placeholder{\n    color: #D3D3D3;\n  }\n"]))),gn=G.a.forwardRef((function(n,e){var t=n.txt,c=n.name;return Object(ln.jsx)(pn,{type:"text",placeholder:t,name:c,ref:e})})),On=nn.c.select(b||(b=Object(W.a)(["\n  width: 100%;\n  background: transparent;\n  color: #ffffff;\n  padding: 10px 10px;\n  margin-bottom: 20px;\n  border: none;\n  text-align: center;\n  border-bottom: 1px solid #D3D3D3;\n  outline: none;\n"]))),mn=nn.c.option(j||(j=Object(W.a)(["\n  background-color: #46529D;\n"]))),vn=G.a.forwardRef((function(n,e){var t=n.name,c=n.options,r=Object(K.useContext)(Sn).checkIconsDispatch;return Object(ln.jsx)(On,{name:t,ref:e,onChange:function(){return r({type:"SET_CHECK_ICONS"})},children:Object.entries(c).map((function(n){var e=Object(en.a)(n,2),t=e[0],c=e[1];return Object(ln.jsx)(mn,{value:t,children:c},t)}))})})),wn=t(51),yn=function(){var n=Object($.f)(),e=Object(hn.a)(),t=e.register,c=e.handleSubmit,r=e.errors;return Object(ln.jsxs)(bn,{onSubmit:c((function(e){!function(n){n.id=Object(wn.a)(),n.done=!1;var e=localStorage.getItem("things"),t={thingsTodo:[],count:1,countPersonal:0,countBusiness:0};null!==e?((t=JSON.parse(e)).thingsTodo.push(n),t.count+=1,"business"===n.type?t.countBusiness+=1:t.countPersonal+=1,localStorage.setItem("things",JSON.stringify(t))):(t.thingsTodo.push(n),"business"===n.type?t.countBusiness+=1:t.countPersonal+=1,localStorage.setItem("things",JSON.stringify(t)))}(e),n.push("/")})),children:[Object(ln.jsx)(vn,{name:"type",options:{business:"Business",personal:"Personal"},ref:t}),Object(ln.jsx)(gn,{txt:"Name",name:"name",ref:t({required:!0,maxLength:40,minLength:3})}),r.name&&"required"===r.name.type&&Object(ln.jsx)(jn,{role:"alert",children:"This field is required"}),r.name&&"minLength"===r.name.type&&Object(ln.jsx)(jn,{role:"alert",children:"Min length 3"}),r.name&&"maxLength"===r.name.type&&Object(ln.jsx)(jn,{role:"alert",children:"Max length 40"}),Object(ln.jsx)(gn,{txt:"Place",name:"place",ref:t({required:!0})}),r.place&&Object(ln.jsx)(jn,{role:"alert",children:"This field is required"}),Object(ln.jsx)(gn,{txt:"Time",name:"time",ref:t({required:!0})}),r.time&&Object(ln.jsx)(jn,{role:"alert",children:"This field is required"}),Object(ln.jsx)(xn,{text:"ADD YOUR THING"})]})},kn=nn.c.div(f||(f=Object(W.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 15px auto 0 auto;\n  padding-bottom: 5px;\n  width: 140px;\n"]))),En=nn.c.div(x||(x=Object(W.a)(["\n   width: 60px;\n   height: 60px;\n   border: 2px solid #2EBAEE;\n   border-radius: 50%;\n   position: relative;\n   &:first-child{\n    margin-right: 10px;\n   }\n"]))),Ln=nn.c.svg(p||(p=Object(W.a)(["\n   position: absolute;\n   left: 50%;\n   top: 50%;\n   transform: translate(-50%,-50%);\n   width: 30px;\n   height: 30px;\n   color: #2EBAEE;\n"]))),Bn=nn.c.hr(g||(g=Object(W.a)(["\n  margin: 0 auto;\n  transform: ",";\n  transition: transform 1s ease;\n  width: 65px;\n  height: 2px;\n  border: none;\n  background-color: #2EBAEE;\n"])),(function(n){return n.choice?"translateX(-35px)":"translateX(35px)"})),Cn=function(){var n=Object(K.useContext)(Sn).checkIconsState;return Object(ln.jsxs)(ln.Fragment,{children:[Object(ln.jsxs)(kn,{children:[Object(ln.jsx)(En,{children:Object(ln.jsx)(Ln,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"user-tie",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(ln.jsx)("path",{fill:"currentColor",d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"})})}),Object(ln.jsx)(En,{children:Object(ln.jsx)(Ln,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"home",className:"svg-inline--fa fa-home fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Object(ln.jsx)("path",{fill:"currentColor",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"})})})]}),Object(ln.jsx)(Bn,{choice:n.selectCheckIcons})]})},Sn=G.a.createContext(),Tn={selectCheckIcons:!0},zn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CHECK_ICONS":return{selectCheckIcons:!n.selectCheckIcons};default:return n}},Dn=function(){var n=Object(K.useReducer)(zn,Tn),e=Object(en.a)(n,2),t=e[0],c=e[1];return Object(ln.jsx)(Sn.Provider,{value:{checkIconsState:t,checkIconsDispatch:c},children:Object(ln.jsxs)(tn,{children:[Object(ln.jsx)(un,{}),Object(ln.jsx)(Cn,{}),Object(ln.jsx)(yn,{})]})})},An=nn.c.div(O||(O=Object(W.a)(["\n  width: 100vw;\n  height: 100vh;\n"]))),In=nn.c.button(m||(m=Object(W.a)(["\n  border: none;\n  outline: none;\n  background: none;\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  background: ",";\n  cursor: pointer;\n"])),(function(n){return n.theme.btnBg})),Mn=Object(nn.c)(Z.b)(v||(v=Object(W.a)(["\n  position: fixed;\n  z-index: 999;\n  bottom: 15px;\n  right: 15px;\n  text-decoration: none;\n"]))),Pn=nn.c.svg(w||(w=Object(W.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  color: ",";\n  height: 20px;\n  width: 20px\n"])),(function(n){return n.theme.btnTxt})),Nn=function(n){var e=n.link;return Object(ln.jsx)(Mn,{to:e,children:Object(ln.jsx)(In,{children:Object(ln.jsx)(Pn,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"plus",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(ln.jsx)("path",{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"})})})})},Vn=t.p+"static/media/bgDashboard.18781e9a.jpg",Jn=nn.c.nav(y||(y=Object(W.a)(["\n  width: 100%;\n  height: 30vh;\n  background: url(",") no-repeat center/cover;\n  padding: 15px;\n  @media (min-width: 768px) {\n    height: 10vh;\n    padding: 5px 60px;\n  }\n"])),Vn),Hn=nn.c.div(k||(k=Object(W.a)(["\n  width: 100%;\n  margin-top: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  @media (min-width: 768px) {\n    margin: 0;\n   }\n"]))),Fn=nn.c.time(E||(E=Object(W.a)(["\n  margin-top: 20px;\n  font-size: 0.7rem;\n  color: ",";\n"])),(function(n){return n.theme.gray})),_n=function(){var n=Object(K.useState)(""),e=Object(en.a)(n,2),t=e[0],c=e[1];return Object(K.useEffect)((function(){c(function(){var n=new Date;return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()]," ").concat(n.getDate(),", ").concat(n.getFullYear())}())}),[]),Object(ln.jsx)(Fn,{children:t})},qn=nn.c.h1(L||(L=Object(W.a)(["\n  font-size: 1.5rem;\n  color: #ffffff;\n  letter-spacing: 2px;\n  font-weight: 400;\n  &:nth-child(even){\n    margin-top: 2px;\n  }\n"]))),Rn=nn.c.div(B||(B=Object(W.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Xn=function(n){var e=n.text;return Object(ln.jsx)(Rn,{children:e.split(" ").map((function(n,e){return Object(ln.jsx)(qn,{children:n},e)}))})},Yn=nn.c.h1(C||(C=Object(W.a)(["\n  font-size: 1.5rem;\n  color: #ffffff;\n  font-weight: 400;\n"]))),Kn=nn.c.p(S||(S=Object(W.a)(["\n  font-size: 0.7rem;\n  color: ",";\n"])),(function(n){return n.theme.gray})),Gn=nn.c.div(T||(T=Object(W.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Un=nn.c.div(z||(z=Object(W.a)(["\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n  &:first-child{\n    margin-right: 15px;\n  }\n  \n"]))),Qn=t(13),Wn=function(){var n=Object(Qn.c)((function(n){return n.things})),e=n.countPersonal,t=n.countBusiness;return Object(ln.jsxs)(Gn,{children:[Object(ln.jsxs)(Un,{children:[Object(ln.jsx)(Yn,{children:e}),Object(ln.jsx)(Kn,{children:"Personal"})]}),Object(ln.jsxs)(Un,{children:[Object(ln.jsx)(Yn,{children:t}),Object(ln.jsx)(Kn,{children:"Business"})]})]})},Zn=function(){return Object(ln.jsxs)(Jn,{children:[Object(ln.jsxs)(Hn,{children:[Object(ln.jsx)(Xn,{text:"Your Things"}),Object(ln.jsx)(Wn,{})]}),Object(ln.jsx)(_n,{})]})},$n=nn.c.div(D||(D=Object(W.a)(["\n  position: fixed;\n  bottom: 25px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),ne=nn.c.p(A||(A=Object(W.a)(["\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  margin-right: 5px;\n"]))),ee=nn.c.div(I||(I=Object(W.a)(["\n  height: 20px;\n  width: 20px;\n  background-color: ",";\n  color: ",";\n  text-align: center;\n  border-radius: 50%;\n"])),(function(n){return n.theme.gray}),(function(n){return n.theme.color})),te=function(){var n=Object(Qn.c)((function(n){return n.things})).count;return Object(ln.jsxs)($n,{children:[Object(ln.jsx)(ne,{children:"ALL"}),Object(ln.jsx)(ee,{children:n})]})},ce=t(15),re=t(36),ie=nn.c.div(M||(M=Object(W.a)(["\n  width: 90%;\n  height: 60vh;\n  margin: 0 auto;\n  padding: 10px 0;\n  overflow-y: auto;\n  @media (min-width: 768px) {\n    overflow: hidden;\n    height: auto;\n    width: 90%;\n    display: grid;\n    grid-gap: 0 40px;\n    grid-template-columns: repeat(2,1fr);\n  }\n  @media (min-width: 1024px) {\n    width: 90%;\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n  }\n"]))),oe=nn.c.div(P||(P=Object(W.a)(["\n   width: 100%;\n   height: ",";\n   margin-bottom: 5px;\n   border-bottom: 1px solid ",";\n   transition: height 0.1s ease;\n"])),(function(n){return n.collapse?"100px":"50px"}),(function(n){return n.theme.gray})),ae=nn.c.div(N||(N=Object(W.a)(["\n   width: 35px;\n   height: 35px;\n   border-radius: 50%;\n   margin-right: 10px;\n   border: 1px solid  ",";\n   position: relative;\n"])),(function(n){return n.done?"#228c22":"#2EBAEE"})),se=nn.c.svg(V||(V=Object(W.a)(["\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%,-50%);\n   width: 25px;\n   height: 25px;\n   color: ",";\n"])),(function(n){return n.done?"#228c22":"#2EBAEE"})),le=nn.c.h1(J||(J=Object(W.a)(["\n  font-size: 1rem;\n  font-weight: 400;\n"]))),de=nn.c.p(H||(H=Object(W.a)(["\n  font-size: 0.9rem;\n  color: ",";\n"])),(function(n){return n.theme.gray})),ue=nn.c.p(F||(F=Object(W.a)(["\n  font-size: 0.9rem;\n  color: ",";\n"])),(function(n){return n.theme.gray})),he=nn.c.div(_||(_=Object(W.a)(["\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n"]))),be=nn.c.div(q||(q=Object(W.a)(["\n  width: 100%;\n  height: 50px;\n  visibility: ",";\n  opacity: ",";\n  display: flex;\n  justify-content: flex-end;\n  transition: opacity 0.1s ease;\n"])),(function(n){return n.collapse?"visible":"hidden"}),(function(n){return n.collapse?"1":"0"})),je=nn.c.div(R||(R=Object(W.a)(["\n  display: flex;\n"]))),fe=nn.c.button(X||(X=Object(W.a)(["\n  border: 1px solid ",";\n  background: transparent;\n  outline: none;\n  height: 40px;\n  width: 40px;\n  margin-right: 5px;\n  position: relative;\n  border-radius: 50%;\n"])),(function(n){return n.done?"#228c22":"#2EBAEE"})),xe=nn.c.svg(Y||(Y=Object(W.a)(["\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%,-50%);\n   width: 25px;\n   height: 25px;\n   color: ",";\n"])),(function(n){return n.done?"#228c22":"#2EBAEE"})),pe="SET_DONE",ge="CLEAR_ALL",Oe="SET_ALL_OBJ",me=function(n){return{type:Oe,payload:n}},ve=t(20),we={thingsTodo:[],count:0,countPersonal:0,countBusiness:0},ye=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Oe:return{thingsTodo:e.payload.thingsTodo,count:e.payload.count,countPersonal:e.payload.countPersonal,countBusiness:e.payload.countBusiness};case pe:return Object(ce.a)(Object(ce.a)({},n),{},{thingsTodo:e.payload});case ge:return we;default:return n}},ke=t(34),Ee=Object(ve.c)({things:ye}),Le=Object(ve.d)(Ee,Object(ve.a)(ke.a)),Be=function(n){var e,t=Le.getState().things;t.thingsTodo=t.thingsTodo.map((function(e){return e.id===n?Object(ce.a)(Object(ce.a)({},e),{},{done:!e.done}):e})),localStorage.setItem("things",JSON.stringify(t)),Le.dispatch((e=t.thingsTodo,{type:pe,payload:e}))};function Ce(n){var e=Object(K.useState)(n),t=Object(en.a)(e,2),c=t[0],r=t[1],i=Object(K.useRef)(null),o=function(n){i.current&&!i.current.contains(n.target)&&r(!1)};return Object(K.useEffect)((function(){return document.addEventListener("click",o,!0),function(){document.removeEventListener("click",o,!0)}})),[i,c,r]}var Se,Te,ze,De,Ae,Ie,Me,Pe=function(n){var e=n.id,t=n.type,c=n.name,r=n.place,i=n.time,o=n.done,a=Ce(!1),s=Object(en.a)(a,3),l=s[0],d=s[1],u=s[2];return Object(ln.jsxs)(oe,{onClick:function(){return function(n,e){e((function(n){return!n}))}(0,u)},collapse:d,ref:l,children:[Object(ln.jsxs)(he,{children:[Object(ln.jsxs)(je,{children:[Object(ln.jsx)(ae,{done:o,children:"business"===t?Object(ln.jsx)(se,{done:o,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"user-tie",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(ln.jsx)("path",{fill:"currentColor",d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"})}):Object(ln.jsx)(se,{done:o,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"home",className:"svg-inline--fa fa-home fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Object(ln.jsx)("path",{fill:"currentColor",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"})})}),Object(ln.jsxs)("div",{children:[Object(ln.jsx)(le,{children:c}),Object(ln.jsx)(de,{children:r})]})]}),Object(ln.jsx)(ue,{children:i})]}),Object(ln.jsxs)(be,{collapse:d,children:[Object(ln.jsx)(fe,{done:o,onClick:function(){return Be(e)},children:Object(ln.jsx)(xe,{done:o,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(ln.jsx)("path",{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"})})}),Object(ln.jsx)(fe,{onClick:function(){return function(n,e){var t=Le.getState().things;t.thingsTodo=t.thingsTodo.filter((function(e){return e.id!==n})),t.count--,"business"===e?t.countBusiness--:t.countPersonal--,localStorage.setItem("things",JSON.stringify(t)),Le.dispatch(me(t))}(e,t)},children:Object(ln.jsx)(xe,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(ln.jsx)("path",{fill:"currentColor",d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"})})})]})]})},Ne=function(){var n=Object(Qn.c)((function(n){return n.things.thingsTodo}));return Object(ln.jsx)(ie,{children:n.map((function(n){var e=n.id,t=Object(re.a)(n,["id"]);return Object(ln.jsx)(Pe,Object(ce.a)({id:e},t),e)}))})},Ve=nn.c.nav(Se||(Se=Object(W.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #46529d;\n  z-index: 999;\n  width: 80vw;\n  height: 50vh;\n  border: 2px solid ",";\n  transform: ",";\n  transition: transform 1s ease;\n  overflow: hidden;\n  padding-top: 35px;\n  @media (min-width: 768px) {\n    width: 10vw;\n    height: 40vh;\n  }\n"])),(function(n){return n.theme.btnBg}),(function(n){return n.show?"translateX(0)":"translateX(-100%)"})),Je=nn.c.ul(Te||(Te=Object(W.a)(["\n  width: 100%;\n  height: 100%;\n  list-style: none;\n"]))),He=nn.c.button(ze||(ze=Object(W.a)(["\n  width: 100%;\n  height: 50px;\n  border: none;\n  cursor: pointer;\n  font-size: 1.1rem;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #2ebaee;\n  outline: none;\n  margin-bottom: 2px;\n  :hover{\n    transform: scale(1.1);\n  }\n"]))),Fe=nn.c.button(De||(De=Object(W.a)(["\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n    &::before,\n    &::after {\n      content: '';\n      position: absolute;\n      background-color: white;\n      height: 2px;\n      left: 50%;\n      top: 50%;\n      width: 30px;\n    }\n    &::before {\n      transform: translate(-50%,-50%) rotate(45deg); \n    }\n    &::after {\n      transform: translate(-50%,-50%) rotate(-45deg);\n    }\n"]))),_e=function(){Le.dispatch({type:ge}),localStorage.clear()},qe=nn.c.button(Ae||(Ae=Object(W.a)(["\n  position: absolute;\n  top: 4px;\n  left: 12px;\n  width: 30px;\n  outline: none;\n  border: none;\n  background: none;\n  display: flex;\n  align-items: start;\n  justify-content: center;\n  flex-direction: column;\n  cursor: pointer;\n"]))),Re=nn.c.span(Ie||(Ie=Object(W.a)(["\n  display: block;\n  margin: 3px;\n  height: 2px;\n  width: 100%;\n  background: #ffffff;\n"]))),Xe=function(n){var e=n.func;return Object(ln.jsxs)(qe,{onClick:function(){return e(!0)},children:[Object(ln.jsx)(Re,{}),Object(ln.jsx)(Re,{}),Object(ln.jsx)(Re,{})]})},Ye=function(){var n=Ce(!1),e=Object(en.a)(n,3),t=e[0],c=e[1],r=e[2];return Object(ln.jsxs)(ln.Fragment,{children:[Object(ln.jsx)(Xe,{func:r}),Object(ln.jsxs)(Ve,{ref:t,show:c,children:[Object(ln.jsx)(Fe,{onClick:function(){return r(!1)}}),Object(ln.jsx)(Je,{children:Object(ln.jsx)("li",{children:Object(ln.jsx)(He,{onClick:function(){_e(),r(!1)},children:"Remove all"})})})]})]})},Ke=function(){var n=Object(Qn.b)();return Object(K.useEffect)((function(){n((function(n){var e=localStorage.getItem("things");if(null!==e){var t=JSON.parse(e),c=t.thingsTodo,r=t.count,i=t.countBusiness,o=t.countPersonal;n(me({thingsTodo:c,count:r,countBusiness:i,countPersonal:o}))}}))}),[]),Object(ln.jsxs)(An,{children:[Object(ln.jsx)(Ye,{}),Object(ln.jsx)(Zn,{}),Object(ln.jsx)(Ne,{}),Object(ln.jsx)(te,{}),Object(ln.jsx)(Nn,{link:"/add"})]})},Ge={btnBg:"#2EBAEE",btnTxt:"#ffffff",bg:"#46529D",color:"#ffffff",gray:"#D3D3D3"},Ue=Object(nn.b)(Me||(Me=Object(W.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Montserrat', sans-serif;\n  }\n"])));var Qe=function(){return Object(ln.jsxs)(ln.Fragment,{children:[Object(ln.jsx)(Ue,{}),Object(ln.jsx)(Qn.a,{store:Le,children:Object(ln.jsx)(nn.a,{theme:Ge,children:Object(ln.jsx)(Z.a,{children:Object(ln.jsxs)($.c,{children:[Object(ln.jsx)($.a,{exact:!0,path:"/",children:Object(ln.jsx)(Ke,{})}),Object(ln.jsx)($.a,{exact:!0,path:"/add",children:Object(ln.jsx)(Dn,{})})]})})})})]})},We=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),c(n),r(n),i(n),o(n)}))};Q.a.render(Object(ln.jsx)(G.a.StrictMode,{children:Object(ln.jsx)(Qe,{})}),document.getElementById("root")),We()}},[[49,1,2]]]);
//# sourceMappingURL=main.26102b72.chunk.js.map