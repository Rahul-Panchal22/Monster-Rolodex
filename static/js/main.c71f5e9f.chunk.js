(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(3),r=n.n(s),i=(n(12),n(4)),o=n(5),l=n(7),u=n(6),h=(n(13),n(14),n(0)),d=function(e){return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{alt:"monsters",src:"https://robohash.org/".concat(e.detail.id,".?set=set2&size=180x180")}),Object(h.jsx)("h2",{children:e.detail.name}),Object(h.jsx)("p",{children:e.detail.email})]})},j=(n(16),function(e){return Object(h.jsx)("div",{className:"card-list",children:e.ataksukis.map((function(e){return Object(h.jsx)(d,{detail:e},e.id)}))})}),f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(h.jsx)("div",{className:"search",children:Object(h.jsx)("input",{type:"search",placeholder:t,onChange:n})})}),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={ataksuki:[],searchField:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({ataksuki:t})}))}},{key:"render",value:function(){var e=this.state,t=e.ataksuki,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return console.log(c),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Monsters Rolodex"}),Object(h.jsx)(f,{placeholder:"Search Monster",handleChange:this.handleChange}),Object(h.jsx)(j,{ataksukis:c})]})}}]),n}(a.a.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.c71f5e9f.chunk.js.map