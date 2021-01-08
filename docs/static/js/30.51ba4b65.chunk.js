(this["webpackJsonpjson-obj-form-generator-docs"]=this["webpackJsonpjson-obj-form-generator-docs"]||[]).push([[30],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a(12),s=a(13),l=a(16),r=a(15),i=a(14),o=a(0),c=a.n(o),m=a(146),h=a(147),d=a(152),g=a(149),u=a(150),p=a(38),b=a(167),E=a(154),j=a(37),v=(a(60),a(39),a(40),function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).onChange=function(e){if("json"===e.target.name){var t,a;try{t=JSON.parse(e.target.value),a=Object(j.c)(t,this.state.mode)}catch(s){t=e.target.value,a=!1}this.setState({json:e.target.value,jsonObj:t,is_valid:a})}else{var n={};n[e.target.name]=e.target.value,this.setState(n)}}.bind(Object(l.a)(s)),s.onChangeDesigner=function(e,t){this.setState({jsonObj:e,is_valid:t,json:JSON.stringify(e)})}.bind(Object(l.a)(s)),s.onClear=function(){this.setState({export:!1,extended:!1,fatal_error_msg:"Ooops... Something went wrong. Unable to render designer.",jsonObj:[],json:"",mode:"linear",size:"sm",translation:"",title:"Designer",is_valid:!0})}.bind(Object(l.a)(s)),s.onChangeBool=function(e){var t={};t[e.target.name]=e.target.checked,this.setState(t)}.bind(Object(l.a)(s)),s.state={export:!1,extended:!1,fatal_error_msg:"Ooops... Something went wrong. Unable to render designer.",json:"",jsonObj:[],mode:"linear",size:"sm",title:"Designer",is_valid:!0,translation:""},s}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(o.Fragment,null,c.a.createElement("section",null,c.a.createElement("div",{className:"mt-3"},c.a.createElement(m.a,null,c.a.createElement(h.a,{className:"mx-300"},c.a.createElement("div",{className:"p-4 card filter"},c.a.createElement("div",{className:"title"},"Properties"),c.a.createElement(d.a,{className:"pt-1",check:!0},c.a.createElement(g.a,{check:!0},c.a.createElement(u.a,{name:"export",type:"checkbox",onChange:this.onChangeBool,checked:this.state.export})," ","export")),c.a.createElement(d.a,{check:!0},c.a.createElement(g.a,{check:!0},c.a.createElement(u.a,{name:"extended",type:"checkbox",onChange:this.onChangeBool,checked:this.state.extended})," ","extended")),c.a.createElement(d.a,{check:!0},c.a.createElement(g.a,{check:!0},c.a.createElement(u.a,{name:"hideDissabled",type:"checkbox",onChange:this.onChangeBool,checked:this.state.hideDissabled})," ","hideDissabled")),c.a.createElement(d.a,{className:"pt-2"},c.a.createElement(g.a,null,"fatal_error_msg"),c.a.createElement(u.a,{type:"text",bsSize:"sm",name:"fatal_error_msg",value:this.state.fatal_error_msg,onChange:this.onChange})),c.a.createElement(d.a,null,c.a.createElement(g.a,null,"json"),c.a.createElement("div",{style:{float:"right"}},this.state.is_valid||0===this.state.json.length?c.a.createElement(p.a,{color:"success"},"Valid"):c.a.createElement(p.a,{color:"danger"},"Invalid")),c.a.createElement(u.a,{type:"textarea",bsSize:"sm",name:"json",value:this.state.json,onChange:this.onChange})),c.a.createElement(d.a,null,c.a.createElement(g.a,null,"mode"),c.a.createElement(b.a,{type:"select",bsSize:"sm",name:"mode",value:this.state.mode,onChange:this.onChange},c.a.createElement("option",{value:"linear"},"linear"),c.a.createElement("option",{value:"linear_merge"},"linear_merge"),c.a.createElement("option",{value:"tree"},"tree"))),c.a.createElement(d.a,null,c.a.createElement(g.a,null,"size"),c.a.createElement(b.a,{type:"select",bsSize:"sm",name:"size",value:this.state.size,onChange:this.onChange},c.a.createElement("option",{value:"sm"},"small"),c.a.createElement("option",{value:"lg"},"large"))),c.a.createElement(d.a,{className:"pt-2"},c.a.createElement(g.a,null,"title"),c.a.createElement(u.a,{type:"text",bsSize:"sm",name:"title",value:this.state.title,onChange:this.onChange})),c.a.createElement(d.a,null,c.a.createElement(g.a,null,"translation"),c.a.createElement(u.a,{type:"textarea",bsSize:"sm",name:"translation",value:this.state.translation,onChange:this.onChange})),c.a.createElement("div",{className:"mt-3 btns text-right"},c.a.createElement(E.a,{color:"link",size:"sm",onClick:this.onClear},"Clear")))),c.a.createElement(h.a,null,c.a.createElement("div",{className:"p-2"},c.a.createElement(j.a,{export:this.state.export,extended:this.state.extended,title:this.state.title?this.state.title:void 0,translation:this.state.translation?JSON.parse(this.state.translation):void 0,size:this.state.size,mode:this.state.mode,fatal_error_msg:this.state.fatal_error_msg?this.state.fatal_error_msg:void 0,json:this.state.json?this.state.jsonObj:[],hideDissabled:this.state.hideDissabled,onChange:this.onChangeDesigner})))))))}}]),a}(o.Component))},38:function(e,t,a){"use strict";var n=a(2),s=a(6),l=a(0),r=a.n(l),i=a(7),o=a.n(i),c=a(34),m=a.n(c),h=a(35),d={color:o.a.string,pill:o.a.bool,tag:h.q,innerRef:o.a.oneOfType([o.a.object,o.a.func,o.a.string]),children:o.a.node,className:o.a.string,cssModule:o.a.object},g=function(e){var t=e.className,a=e.cssModule,l=e.color,i=e.innerRef,o=e.pill,c=e.tag,d=Object(s.a)(e,["className","cssModule","color","innerRef","pill","tag"]),g=Object(h.m)(m()(t,"badge","badge-"+l,!!o&&"badge-pill"),a);return d.href&&"span"===c&&(c="a"),r.a.createElement(c,Object(n.a)({},d,{className:g,ref:i}))};g.propTypes=d,g.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=g}}]);
//# sourceMappingURL=30.51ba4b65.chunk.js.map