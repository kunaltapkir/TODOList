(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{27:function(e,t,n){e.exports=n(41)},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),o=n.n(i),c=(n(32),n(8)),s=n(20),l=n(13),u=n(25),m=n(24),d=(n(33),n(34),n(22)),p=n.n(d),f=n(56),h=n(23),v=function(e){var t=e.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.setUpdate(n.target.value,t.key)}}),r.a.createElement("span",null,r.a.createElement(f.a,{onClick:function(){return e.deleteItems(t.key)}},r.a.createElement(p.a,null)))))}));return r.a.createElement("div",null,r.a.createElement(h.a,{duration:300,easing:"ease-in-out"},t))},E=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleInput=function(e){a.setState({currentItem:{text:e.target.value,key:Date.now()}})},a.addItem=function(e){e.preventDefault();var t=a.state.currentItem;if(""!==t.text){var n=[].concat(Object(c.a)(a.state.items),[t]);a.setState({items:n,currentItem:{text:"",key:""}})}},a.deleteItems=function(e){var t=a.state.items.filter((function(t){return t.key!==e}));a.setState({items:t})},a.setUpdate=function(e,t){var n=a.state.items;n.map((function(n){n.key===t&&(n.text=e)})),a.setState({items:n})},a.state={items:[],currentItem:{text:"",key:""}},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement(v,{items:this.state.items,deleteItems:this.deleteItems,setUpdate:this.setUpdate}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.e8185dcc.chunk.js.map