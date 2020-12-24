(this["webpackJsonpgobarber-web"]=this["webpackJsonpgobarber-web"]||[]).push([[0],{30:function(n,e,t){n.exports=t.p+"static/media/logo.a49b07ec.svg"},60:function(n,e,t){n.exports=t.p+"static/media/sign-in-background.6eac314f.png"},61:function(n,e,t){n.exports=t.p+"static/media/sign-up-background.c4d8f988.png"},62:function(n,e,t){n.exports=t(90)},90:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(51),c=t.n(o),i=t(13),u=t(1),l=t(2);function s(){var n=Object(u.a)(["\n    * {\n        margin: 0;\n        box-sizing: border-box;\n        padding: 0;\n        outline: 0;\n    }\n\n    body {\n        background-color: #312E38;\n        color: #fff;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    body, input, button {\n        font-family: 'Roboto Slab', serif;\n        font-size: 16px;\n    }\n\n    h1, h2, h3, h4, h5, h6, strong {\n        font-weight: 500;\n    }\n\n    button {\n        cursor: pointer;\n    }\n"]);return s=function(){return n},n}var p=Object(l.a)(s()),f=t(3),d=t(22),b=t(10),m=t.n(b),g=t(19),v=t(17),h=t(55),x=t.n(h).a.create({baseURL:"http://localhost:3333"}),E=Object(r.createContext)({}),O=function(n){var e=n.children,t=Object(r.useState)((function(){var n=localStorage.getItem("@GoBarber:Token"),e=localStorage.getItem("@GoBarber:User");return n&&e?{token:n,user:JSON.parse(e)}:{}})),o=Object(v.a)(t,2),c=o[0],i=o[1],u=Object(r.useCallback)(function(){var n=Object(g.a)(m.a.mark((function n(e){var t,r,a,o,c,u;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.email,r=e.password,n.next=3,x.post("sessions",{email:t,password:r});case 3:a=n.sent,o=a.data,c=o.token,u=o.user,localStorage.setItem("@GoBarber:Token",c),localStorage.setItem("@GoBarber:User",JSON.stringify(u)),i({token:c,user:u});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[]),l=Object(r.useCallback)((function(){localStorage.removeItem("@GoBarber:Token"),localStorage.removeItem("@GoBarber:User")}),[]);return a.a.createElement(E.Provider,{value:{user:c.user,signIn:u,signOut:l}},e)};function j(){var n=Object(r.useContext)(E);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n}var y=function(n){var e=n.isPrivate,t=void 0!==e&&e,r=n.component,o=Object(d.a)(n,["isPrivate","component"]),c=j().user;return a.a.createElement(f.b,Object.assign({},o,{render:function(){return t===!!c?a.a.createElement(r,null):a.a.createElement(f.a,{to:{pathname:t?"/":"/dashboard"}})}}))},k=t(5),w=t(28),z=t(9),C=t(15);function S(){var n=Object(u.a)(["\n    background: #FF9000;\n    border-radius: 10px;\n    padding: 0 16px;\n    height: 56px;\n    border: 0;\n    width: 100%;\n    margin-top: 16px;\n    color: #312e38;\n    font-weight: 500;\n    transition: background-color 0.2s;\n\n    &:hover {\n        background: ",";\n    } \n"]);return S=function(){return n},n}var F=l.c.button(S(),Object(C.a)(.2,"#FF9000")),T=function(n){var e=n.children,t=Object(d.a)(n,["children"]);return a.a.createElement(F,t,e)},D=t(27);function I(){var n=Object(u.a)(["\n  position: relative;\n\n  span {\n    width: 160px;\n    background: #ff9000;\n    padding: 8px;\n    border-radius: 4px;\n    font-size: 14px;\n    font-weight: 500;\n    opacity: 0;\n    transition: opacity 0.4s;\n    visibility: hidden;\n\n    position: absolute;\n    bottom: calc(100% + 12px);\n    left: 50%;\n    transform: translateX(-50%);\n\n    color: #312e38;\n\n    &::before {\n      content: '';\n      border-style: solid;\n      border-color: #ff9000 transparent;\n      border-width: 6px 6px 0 6px;\n      top: 100%;\n      position: absolute;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n  }\n\n  &:hover span {\n    opacity: 1;\n    visibility: visible;\n  }\n"]);return I=function(){return n},n}var N=l.c.div(I()),B=function(n){var e=n.title,t=n.children,r=n.className;return a.a.createElement(N,{className:r},t,a.a.createElement("span",null,e))};function G(){var n=Object(u.a)(["\n  height: 20px;\n  margin-left: 16px;\n  svg {\n    margin: 0;\n  }\n\n  span {\n    background: #c53030;\n    color: #fff;\n\n    &::before {\n      border-color: #c53030 transparent;\n    }\n  }\n"]);return G=function(){return n},n}function P(){var n=Object(u.a)(["\n      color: #ff9000;\n    "]);return P=function(){return n},n}function q(){var n=Object(u.a)(["\n      color: #ff9000;\n      border-color: #ff9000;\n    "]);return q=function(){return n},n}function R(){var n=Object(u.a)(["\n      border-color: #c53030;\n    "]);return R=function(){return n},n}function X(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #232129;\n  border-radius: 10px;\n  padding: 16px;\n  width: 100%;\n\n  border: 2px solid #232129;\n  color: #666360;\n\n  ","\n\n  ","\n\n  ","\n\n    input {\n    flex: 1;\n    color: #f4ede8;\n    background: #232129;\n    border: 0;\n\n    &::placeholder {\n      color: #666360;\n    }\n\n    & + input {\n      margin-top: 8px;\n    }\n  }\n\n  svg {\n    margin-right: 16px;\n  }\n\n  & + div {\n    margin-top: 8px;\n  }\n"]);return X=function(){return n},n}var V=l.c.div(X(),(function(n){return n.isErrored&&Object(l.b)(R())}),(function(n){return n.isFocused&&Object(l.b)(q())}),(function(n){return n.isFilled&&Object(l.b)(P())})),A=Object(l.c)(B)(G()),J=function(n){var e=n.name,t=n.icon,o=Object(d.a)(n,["name","icon"]),c=Object(r.useRef)(null),i=Object(r.useState)(!1),u=Object(v.a)(i,2),l=u[0],s=u[1],p=Object(r.useState)(!1),f=Object(v.a)(p,2),b=f[0],m=f[1],g=Object(D.c)(e),h=g.defaultValue,x=g.error,E=g.fieldName,O=g.registerField,j=Object(r.useCallback)((function(){s(!0)}),[]),y=Object(r.useCallback)((function(){var n;s(!1),m(!!(null===(n=c.current)||void 0===n?void 0:n.value))}),[]);return Object(r.useEffect)((function(){O({name:E,ref:c.current,path:"value"})}),[E,O]),a.a.createElement(V,{isErrored:!!x,isFocused:l,isFilled:b},t&&a.a.createElement(t,{size:20}),a.a.createElement("input",Object.assign({onFocus:j,onBlur:y,defaultValue:h,ref:c},o)),x&&a.a.createElement(A,{title:x},a.a.createElement(k.a,{color:"#c53030",size:20})))},U=t(18),L=t(59),M=t(31);function H(){var n=Object(u.a)(["\n      align-items: center;\n\n      svg {\n        margin-top: 0;\n      }\n    "]);return H=function(){return n},n}function K(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  width: 360px;\n\n  border-radius: 10px;\n  padding: 16px 30px 16px 16px;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n\n  & + div {\n    margin-top: 8px;\n  }\n\n  ","\n\n  > svg {\n    margin: 4px 12px 0 0;\n  }\n\n  div {\n    flex: 1;\n\n    p {\n      margin-top: 4px;\n      font-size: 14px;\n      opacity: 0.8;\n      line-height: 20px;\n    }\n  }\n\n  button {\n    position: absolute;\n    right: 16px;\n    top: 16px;\n    opacity: 0.6;\n    border: 0;\n    background: transparent;\n    color: inherit;\n  }\n\n  ","\n"]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n    background: #fddede;\n    color: #c53030;\n  "]);return Q=function(){return n},n}function W(){var n=Object(u.a)(["\n    background: #e6fffa;\n    color: #2e656a;\n  "]);return W=function(){return n},n}function Y(){var n=Object(u.a)(["\n    background: #ebf8ff;\n    color: #3172b7;\n  "]);return Y=function(){return n},n}var Z={info:Object(l.b)(Y()),success:Object(l.b)(W()),error:Object(l.b)(Q())},$=Object(l.c)(M.a.div)(K(),(function(n){return Z[n.type||"info"]}),(function(n){return!n.hasDescription&&Object(l.b)(H())})),_={info:a.a.createElement(k.d,{size:24}),error:a.a.createElement(k.a,{size:24}),success:a.a.createElement(k.c,{size:20})},nn=function(n){var e=n.message,t=n.style,o=cn().removeToast;return Object(r.useEffect)((function(){var n=setTimeout((function(){o(e.id)}),3e3);return function(){clearTimeout(n)}}),[o,e.id]),a.a.createElement($,{hasDescription:!!e.description,type:e.type,style:t},_[e.type||"info"],a.a.createElement("div",null,a.a.createElement("strong",null,e.title),e.description&&a.a.createElement("p",null,e.description)),a.a.createElement("button",{type:"button",onClick:function(){return o(e.id)}},a.a.createElement(k.i,{size:18})))};function en(){var n=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  right: 0px;\n  padding: 30px;\n  overflow: hidden;\n"]);return en=function(){return n},n}var tn=l.c.div(en()),rn=function(n){var e=n.messages,t=Object(M.b)(e,(function(n){return n.id}),{from:{right:"-120%",opacity:0},enter:{right:"0%",opacity:1},leave:{right:"-120%",opacity:0}});return a.a.createElement(tn,null,t.map((function(n){var e=n.item,t=n.key,r=n.props;return a.a.createElement(nn,{key:t,message:e,style:r})})))},an=Object(r.createContext)({}),on=function(n){var e=n.children,t=Object(r.useState)([]),o=Object(v.a)(t,2),c=o[0],i=o[1],u=Object(r.useCallback)((function(n){var e=n.title,t=n.type,r=n.description,a={id:Object(L.v4)(),type:t,title:e,description:r};i((function(n){return[].concat(Object(U.a)(n),[a])}))}),[]),l=Object(r.useCallback)((function(n){i((function(e){return e.filter((function(e){return e.id!==n}))}))}),[]);return a.a.createElement(an.Provider,{value:{addToast:u,removeToast:l}},e,a.a.createElement(rn,{messages:c}))};function cn(){var n=Object(r.useContext)(an);if(!n)throw new Error("useToast must be used within an ToastProvider");return n}function un(n){var e={};return n.inner.forEach((function(n){e[n.path]=n.message})),e}var ln=t(30),sn=t.n(ln),pn=t(60),fn=t.n(pn);function dn(){var n=Object(u.a)(["\n  flex: 1;\n  background: url(",") no-repeat center;\n  background-size: cover;\n"]);return dn=function(){return n},n}function bn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  justify-content: center;\n\n  animation: "," 1s;\n\n  form {\n    margin: 50px 0;\n    width: 340px;\n    text-align: center;\n\n    h1 {\n      margin-bottom: 24px;\n    }\n\n    a {\n      color: #f4ede8;\n      text-decoration: none;\n      display: block;\n      margin-top: 24px;\n      transition: color 0.2s;\n\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n\n  > a {\n    color: #ff9000;\n    text-decoration: none;\n    margin-top: 24px;\n    transition: color 0.2s;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:hover {\n      color: ",";\n    }\n\n    svg {\n      margin-right: 16px;\n    }\n  }\n"]);return bn=function(){return n},n}function mn(){var n=Object(u.a)(["\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]);return mn=function(){return n},n}function gn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  place-content: center;\n  width: 100%;\n  max-width: 700px;\n"]);return gn=function(){return n},n}function vn(){var n=Object(u.a)(["\n  height: 100vh;\n\n  display: flex;\n  align-items: stretch;\n"]);return vn=function(){return n},n}var hn=l.c.div(vn()),xn=l.c.div(gn()),En=Object(l.d)(mn()),On=l.c.div(bn(),En,Object(C.a)(.2,"#F4EDE8"),Object(C.a)(.2,"#FF9000")),jn=l.c.div(dn(),fn.a),yn=function(){var n=j().signIn,e=cn().addToast,t=Object(r.useRef)(null),o=Object(f.g)(),c=Object(r.useCallback)(function(){var r=Object(g.a)(m.a.mark((function r(a){var c,i,u,l;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,null===(c=t.current)||void 0===c||c.setErrors({}),i=z.b().shape({email:z.c().required("E-mail \xe9 Obrigat\xf3rio").email("Digite um E-mail Valido"),password:z.c().min(6,"No min\xedmo 6 digitos")}),r.next=5,i.validate(a,{abortEarly:!1});case 5:return r.next=7,n({email:a.email,password:a.password});case 7:o.push("/dashboard"),r.next=17;break;case 10:if(r.prev=10,r.t0=r.catch(0),!(r.t0 instanceof z.a)){r.next=16;break}return l=un(r.t0),null===(u=t.current)||void 0===u||u.setErrors(l),r.abrupt("return");case 16:e({type:"error",title:"Error na Autentica\xe7\xe3o",description:"Ocorreu um erro ao fazer login, cheque as credenciais"});case 17:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(n){return r.apply(this,arguments)}}(),[n,e,o]);return a.a.createElement(hn,null,a.a.createElement(xn,null,a.a.createElement(On,null,a.a.createElement("img",{src:sn.a,alt:"logo-gobarber"}),a.a.createElement(w.a,{ref:t,onSubmit:c},a.a.createElement("h1",null,"Fa\xe7a seu logon"),a.a.createElement(J,{icon:k.g,name:"email",placeholder:"E-mail"}),a.a.createElement(J,{icon:k.e,name:"password",type:"password",placeholder:"Senha"}),a.a.createElement(T,{type:"submit"},"Entrar"),a.a.createElement("a",{href:"forgout"},"Esqueci minha senha")),a.a.createElement(i.b,{to:"/signup"},a.a.createElement(k.f,{size:16}),"Criar conta"))),a.a.createElement(jn,null))},kn=t(61),wn=t.n(kn);function zn(){var n=Object(u.a)(["\n  flex: 1;\n  background: url(",") no-repeat center;\n  background-size: cover;\n"]);return zn=function(){return n},n}function Cn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  justify-content: center;\n\n  animation: "," 1s;\n\n  form {\n    margin: 50px 0;\n    width: 340px;\n    text-align: center;\n\n    h1 {\n      margin-bottom: 24px;\n    }\n\n    a {\n      color: #f4ede8;\n      text-decoration: none;\n      display: block;\n      margin-top: 24px;\n      transition: color 0.2s;\n\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n\n  > a {\n    color: #f4ede8;\n    text-decoration: none;\n    margin-top: 24px;\n    transition: color 0.2s;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:hover {\n      color: ",";\n    }\n\n    svg {\n      margin-right: 16px;\n    }\n  }\n"]);return Cn=function(){return n},n}function Sn(){var n=Object(u.a)(["\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]);return Sn=function(){return n},n}function Fn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  place-content: center;\n  width: 100%;\n  max-width: 700px;\n"]);return Fn=function(){return n},n}function Tn(){var n=Object(u.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: stretch;\n"]);return Tn=function(){return n},n}var Dn=l.c.div(Tn()),In=l.c.div(Fn()),Nn=Object(l.d)(Sn()),Bn=l.c.div(Cn(),Nn,Object(C.a)(.2,"#F4EDE8"),Object(C.a)(.2,"#F4EDE8")),Gn=l.c.div(zn(),wn.a),Pn=function(){var n=cn().addToast,e=Object(f.g)(),t=Object(r.useRef)(null),o=Object(r.useCallback)(function(){var r=Object(g.a)(m.a.mark((function r(a){var o,c,i,u;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,null===(o=t.current)||void 0===o||o.setErrors({}),c=z.b().shape({name:z.c().required("Nome \xe9 Obrigat\xf3rio"),email:z.c().required("E-mail \xe9 obrigat\xf3rio").email("Digite um e-mail valido"),password:z.c().min(6,"No min\xedmo 6 digitos")}),r.next=5,c.validate(a,{abortEarly:!1});case 5:return r.next=7,x.post("/users",a);case 7:n({type:"success",title:"Cadastro Realizado!",description:"Cadastro realizado no Gobarber, Voc\xea ja pode fazer logon!"}),e.push("/"),r.next=18;break;case 11:if(r.prev=11,r.t0=r.catch(0),!(r.t0 instanceof z.a)){r.next=17;break}return u=un(r.t0),null===(i=t.current)||void 0===i||i.setErrors(u),r.abrupt("return");case 17:n({type:"error",title:"Error na Autentica\xe7\xe3o",description:"Ocorreu um erro ao fazer login, cheque as credenciais"});case 18:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(n){return r.apply(this,arguments)}}(),[n,e]);return a.a.createElement(Dn,null,a.a.createElement(Gn,null),a.a.createElement(In,null,a.a.createElement(Bn,null,a.a.createElement("img",{src:sn.a,alt:"logo-gobarber"}),a.a.createElement(w.a,{ref:t,onSubmit:o},a.a.createElement("h1",null,"Crie sua conta"),a.a.createElement(J,{name:"name",icon:k.h,placeholder:"Nome"}),a.a.createElement(J,{name:"email",icon:k.g,placeholder:"E-mail"}),a.a.createElement(J,{name:"password",icon:k.e,placeholder:"Senha",type:"password"}),a.a.createElement(T,{type:"submit"},"Cadastrar")),a.a.createElement(i.b,{to:"/"},a.a.createElement(k.b,{size:20,color:"#F4EDE8"}),"Voltar para login"))))},qn=function(){return a.a.createElement("h1",null,"Dashboard")},Rn=function(){return a.a.createElement(f.d,null,a.a.createElement(y,{path:"/",exact:!0,component:yn}),a.a.createElement(y,{path:"/signup",component:Pn}),a.a.createElement(y,{path:"/dashboard",component:qn,isPrivate:!0}))},Xn=function(n){var e=n.children;return a.a.createElement(O,null,a.a.createElement(on,null,e))},Vn=function(){return a.a.createElement(i.a,null,a.a.createElement(Xn,null,a.a.createElement(Rn,null)),a.a.createElement(p,null))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Vn,null)),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.f248c63b.chunk.js.map