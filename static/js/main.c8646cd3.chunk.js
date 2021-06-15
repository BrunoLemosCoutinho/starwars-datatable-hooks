(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/rd2d.b7d71675.png"},,,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),i=Object(n.createContext)();var o=function(){return r.a.createElement("div",null,"NOW LOADING...")};var u=function(){var e=Object(n.useContext)(i),t=e.filters,a=e.tableHeaders,l=e.isFetching,c=e.getFilteredPlanets,u=t.filters.order,s=c(),m=["rotation_period","orbital_period","diameter","surface_water","population"],f=s.sort((function(e,t){var a=m.includes(u.column)?Number(e[u.column]):e[u.column].toLowerCase(),n=m.includes(u.column)?Number(t[u.column]):t[u.column].toLowerCase(),r=0;return a>n?r=1:a<n&&(r=-1),"ASC"===u.sort?r:-1*r}));return r.a.createElement("div",null,l?r.a.createElement(o,null):r.a.createElement("table",{className:"table table-striped table-bordered table-hover table-sm table-responsive"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,a.map((function(e,t){return r.a.createElement("th",{key:t,scope:"col"},e)})))),r.a.createElement("tbody",null,f.map((function(e){return r.a.createElement("tr",{key:e.name},Object.entries(e).map((function(e,t){return"name"===e[0]?r.a.createElement("td",{key:t,"data-testid":"planet-name"},e[1]):r.a.createElement("td",{key:t},e[1])})))})))))};a(19);var s=function(e){var t=e.numericFilter,a=Object(n.useContext)(i).deleteFilter;return r.a.createElement("div",null,r.a.createElement("div",{className:"appliedFilter-container","data-testid":"filter"},t.column,r.a.createElement("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return a(t.column)}},"X")))},m=a(5),f=a(3),b=a(1),d=a(2);var p=function(e,t){return e.filter((function(e){return!t.includes(e)}))};a(20);var v=function(){var e=Object(n.useContext)(i),t=e.filters,a=e.columnFilters,l=e.comparisonFilters,c=e.addFilter,o=t.filters.filterByNumericValues,u=o.map((function(e){return e.column})),s=p(a,u),v=s&&s.length,E={column:s[0],comparison:l[0],value:"0"},j=Object(n.useState)(Object(b.a)({},E)),O=Object(d.a)(j,2),h=O[0],N=O[1];function y(e){var t=e.target,a=t.name,n=t.value;N(Object(b.a)(Object(b.a)({},h),{},Object(f.a)({},a,n)))}return r.a.createElement("div",null,v?r.a.createElement("div",{className:"numericFilter-container"},r.a.createElement("div",{className:"numericFilter-selectors"},r.a.createElement("label",{className:"dropdown-input",htmlFor:"column-filter"},"Column Filter:",r.a.createElement("select",{id:"column-filter",name:"column",className:"form-control","data-testid":"column-filter",onChange:function(e){return y(e)}},s.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("label",{className:"dropdown-input",htmlFor:"comparison-filter"},"Filter by:",r.a.createElement("select",{id:"comparison-filter",name:"comparison",className:"form-control","data-testid":"comparison-filter",onChange:function(e){return y(e)}},l.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("label",{className:" value-input",htmlFor:"value-filter"},"Value:",r.a.createElement("input",{type:"number",id:"value-filter",name:"value",className:"form-control",value:h.value,min:0,"data-testid":"value-filter",onChange:function(e){return y(e)}}))),r.a.createElement("button",{type:"button",className:"btn btn-primary","data-testid":"button-filter",onClick:function(){return function(){c(h);var e=[].concat(Object(m.a)(o),[h]).map((function(e){return e.column})),t=p(a,e);N(Object(b.a)(Object(b.a)({},h),{},{column:t.length?t[0]:void 0}))}()}},"Apply Filter")):r.a.createElement("div",{className:"numericFilter-container"},r.a.createElement("div",{className:"numeric-filter-selectors"},r.a.createElement("label",{htmlFor:"column-filter"},"Column Filter:",r.a.createElement("select",{id:"column-filter",disabled:!0},r.a.createElement("option",null,"No filters available"))),r.a.createElement("label",{htmlFor:"comparison-filter"},"Filter by:",r.a.createElement("select",{id:"comparison-filter",disabled:!0},l.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("label",{htmlFor:"value-filter"},"Value:",r.a.createElement("input",{className:"value-input",id:"value-filter",disabled:!0}))),r.a.createElement("button",{type:"button",disabled:!0},"Apply Filter")))};a(21);var E=function(){var e=Object(n.useContext)(i),t=e.filters,a=e.setFilters,l=t.filters.filterByName;return r.a.createElement("div",{className:"textFilter-container"},r.a.createElement("label",{htmlFor:"text-input"},"Planet name:",r.a.createElement("input",{type:"text",id:"text-input",name:"name",className:"text-input border border-primary border-5 rounded","data-testid":"name-filter",placeholder:"Type planet name",onChange:function(e){return function(e){var n=e.target,r=n.name,l=n.value;a(Object(b.a)(Object(b.a)({},t),{},{filters:Object(b.a)(Object(b.a)({},t.filters),{},{filterByName:Object(b.a)(Object(b.a)({},t.filters.filterByName),{},Object(f.a)({},r,l))})}))}(e)},value:l.name})))};a(22);var j=function(){var e=Object(n.useContext)(i),t=e.tableHeaders,a=e.applySort,l=Object(n.useState)({column:"",sort:"ASC"}),c=Object(d.a)(l,2),o=c[0],u=c[1];function s(e){var t=e.target,a=t.name,n=t.value;u(Object(b.a)(Object(b.a)({},o),{},Object(f.a)({},a,n)))}return Object(n.useEffect)((function(){u(Object(b.a)(Object(b.a)({},o),{},{column:t[0]}))}),[t]),r.a.createElement("div",{className:"sorter-container"},r.a.createElement("div",{className:"sorter-selectors"},r.a.createElement("label",{className:"column-sort",htmlFor:"column-sort"},"Sort by",r.a.createElement("select",{id:"column-sort",name:"column",className:"form-control","data-testid":"column-sort",onChange:function(e){return s(e)}},t.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("label",{className:"sort-label",htmlFor:"column-sort-input-asc"},"Ascending",r.a.createElement("input",{type:"radio",id:"column-sort-input-asc",name:"sort",className:"radio-input","data-testid":"column-sort-input-asc",value:"ASC",checked:"ASC"===o.sort,onChange:function(e){return s(e)}})),r.a.createElement("label",{className:"sort-label",htmlFor:"column-sort-input-desc"},"Descending",r.a.createElement("input",{type:"radio",id:"column-sort-input-desc",name:"sort",className:"radio-input","data-testid":"column-sort-input-desc",value:"DESC",checked:"DESC"===o.sort,onChange:function(e){return s(e)}}))),r.a.createElement("button",{type:"button",className:"btn btn-primary","data-testid":"column-sort-button",onClick:function(){return a(o)}},"Apply sort"))};a(23);var O=function(){var e=Object(n.useContext)(i).filters.filters.filterByNumericValues;return r.a.createElement("div",{className:"filters-container"},r.a.createElement(E,null),r.a.createElement(v,null),e.map((function(e,t){return r.a.createElement(s,{key:t,numericFilter:e})})),r.a.createElement(j,null))},h=a(11),N=a.n(h);a(24);var y=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"banner"},r.a.createElement("img",{src:N.a,alt:"R2d2 Robot from StarWars series"}),r.a.createElement("h1",null,"Star Wars Data Table"),r.a.createElement("p",null,"Bruno Lemos Coutinho")),r.a.createElement("div",{className:"author_info"},r.a.createElement("a",{href:"https://www.linkedin.com/in/brunolemoscoutinho/",target:"_blank"},"Linkedin"),r.a.createElement("a",{href:"https://github.com/BrunoLemosCoutinho",target:"_blank"},"Github"),r.a.createElement("a",{href:"mailto:brunolemos.ssa@gmail.com",target:"_blank"},"Email")))},F=a(4),C=a.n(F),g=a(7),k="planets/",x="".concat("https://swapi.dev/api/").concat(k);function w(){return(w=Object(g.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(){return w.apply(this,arguments)},B=a(13),A=a(12);var V=function(e,t){return e[t],Object(B.a)(e,[t].map(A.a))};var _=function(e){var t=e.children,a=Object(n.useState)([]),l=Object(d.a)(a,2),c=l[0],o=l[1],u=Object(n.useState)([]),s=Object(d.a)(u,2),f=s[0],p=s[1],v=Object(n.useState)(!0),E=Object(d.a)(v,2),j=E[0],O=E[1],h=Object(n.useState)({filters:{filterByName:{name:""},filterByNumericValues:[],order:{column:"name",sort:"ASC"}}}),N=Object(d.a)(h,2),y=N[0],F=N[1],k=Object(n.useState)(["population","orbital_period","diameter","rotation_period","surface_water"]),x=Object(d.a)(k,2),w=x[0],B=x[1];function A(){return _.apply(this,arguments)}function _(){return(_=Object(g.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return t=e.sent,a=t.map((function(e){return V(e,"residents")})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(g.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,o(t),p(Object.keys(t[0])),O(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){L.apply(this,arguments)}()}),[]);var D={tableHeaders:f,isFetching:j,filters:y,columnFilters:w,comparisonFilters:["maior que","menor que","igual a"],getFilteredPlanets:function(){var e,t=Object(m.a)(c),a=y.filters,n=a.filterByName.name,r=a.filterByNumericValues;return r.length>0&&r.forEach((function(a){var n=a.column,r=a.comparison,l=a.value;switch(r){case"maior que":e=t.filter((function(e){return Number(e[n])>Number(l)})),t=Object(m.a)(e);break;case"menor que":e=t.filter((function(e){return Number(e[n])<Number(l)})),t=Object(m.a)(e);break;case"igual a":e=t.filter((function(e){return Number(e[n])===Number(l)})),t=Object(m.a)(e);break;default:console.log("Comparison information error")}})),t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},setFilters:F,setColumnFilters:B,addFilter:function(e){F(Object(b.a)(Object(b.a)({},y),{},{filters:Object(b.a)(Object(b.a)({},y.filters),{},{filterByNumericValues:[].concat(Object(m.a)(y.filters.filterByNumericValues),[e])})}))},deleteFilter:function(e){var t=y.filters.filterByNumericValues.filter((function(t){return t.column!==e}));F(Object(b.a)(Object(b.a)({},y),{},{filters:Object(b.a)(Object(b.a)({},y.filters),{},{filterByNumericValues:t})}))},applySort:function(e){F(Object(b.a)(Object(b.a)({},y),{},{filters:Object(b.a)(Object(b.a)({},y.filters),{},{order:Object(b.a)({},e)})}))}};return r.a.createElement(i.Provider,{value:D},t)};a(26);var L=function(){return r.a.createElement(_,null,r.a.createElement(y,null),r.a.createElement("main",null,r.a.createElement("section",null,r.a.createElement(O,null),r.a.createElement(u,null))))};c.a.render(r.a.createElement(L,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.c8646cd3.chunk.js.map