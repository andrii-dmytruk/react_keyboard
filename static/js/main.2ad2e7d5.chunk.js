(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),r=n(4),c=n(5),o=n(7),d=n(6),i=n(1),p=n.n(i),u=n(0),l=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={pressedKey:""},e.handleKeyboardEvent=function(t){e.setState({pressedKey:"Space"===t.code?"space":t.key})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyboardEvent)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyboardEvent)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("p",{className:"App__message",children:e.length?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(p.a.Component);n(13);s.a.render(Object(u.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2ad2e7d5.chunk.js.map