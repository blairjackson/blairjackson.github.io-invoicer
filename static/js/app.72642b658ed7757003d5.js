webpackJsonp([1],{"0gSi":function(e,t){},"7zck":function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("7+uW"),a=i("l9mu"),n=i.n(a),o=i("7t+N"),l=i.n(o),c=i("2Pnh"),v=i.n(c),r={name:"HelloWorld",components:{Pdf:n.a,JQuery:l.a,html2canvas:v.a},data:function(){return{title:"Welcome to Invoicer",subHeading:"Simple way to generate Invoices",preview:!1,invoice:{businessName:"",addressLine1:"",addressLine2:"",addressLine3:"",billTo:"",invoiceNumber:"",date:"",balance:"",item:"",quantity:"",rate:"",notes:""}}},methods:{createPdf:function(){var e=new n.a,t=l.a,i={"#editor":function(e,t){return!0}};e.setFont("helvetica"),e.setFontSize(22),e.setFontType("bold"),e.text(90,15,"Invoice"),e.setLineWidth(.5),e.line(20,30,190,30),e.fromHTML(t(".top-left").html(),30,35,{width:170,elementHandlers:i}),e.fromHTML(t(".top-right").html(),150,35,{width:170,elementHandlers:i}),e.line(20,100,190,100),e.fromHTML(t(".item-heading").html(),90,100,{width:170,elementHandlers:i}),e.fromHTML(t(".middle").html(),30,120,{width:170,elementHandlers:i}),e.line(20,200,190,200),e.fromHTML(t(".note-heading").html(),90,200,{width:170,elementHandlers:i}),e.fromHTML(t(".bottom").html(),30,220,{width:170,elementHandlers:i}),e.setFont("helvetica"),e.setFontSize(9),e.setFontType("bold"),e.setLineWidth(.5),e.save("a4test.pdf")}}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",{attrs:{dark:""}},[i("v-content",[i("v-container",{staticClass:"text-xs-center",attrs:{fluid:""}},[i("v-flex",{attrs:{"mb-4":""}},[i("div",{staticClass:"text-xs-center"},[i("h1",{staticClass:"display-3"},[e._v(e._s(e.title))]),e._v(" "),i("h3",{staticClass:"headline"},[e._v(e._s(e.subHeading))])])]),e._v(" "),i("v-layout",{attrs:{row:"",wrap:"","justify-space-around":"","px-2":"","pt-4":""}},[i("v-flex",{attrs:{"px-2":""}},[i("v-card",{staticClass:"invoiceHeading",attrs:{height:"100%"}},[i("v-flex",{attrs:{"px-4":"","py-2":""}},[i("v-text-field",{attrs:{placeholder:"Your Business Name"},model:{value:e.invoice.businessName,callback:function(t){e.$set(e.invoice,"businessName",t)},expression:"invoice.businessName"}}),e._v(" "),i("v-text-field",{attrs:{placeholder:"Address Line 1"},model:{value:e.invoice.addressLine1,callback:function(t){e.$set(e.invoice,"addressLine1",t)},expression:"invoice.addressLine1"}}),e._v(" "),i("v-text-field",{attrs:{placeholder:"Address Line 2"},model:{value:e.invoice.addressLine2,callback:function(t){e.$set(e.invoice,"addressLine2",t)},expression:"invoice.addressLine2"}}),e._v(" "),i("v-text-field",{attrs:{placeholder:"Address Line 3"},model:{value:e.invoice.addressLine3,callback:function(t){e.$set(e.invoice,"addressLine3",t)},expression:"invoice.addressLine3"}}),e._v(" "),i("v-text-field",{attrs:{placeholder:"Bill to"},model:{value:e.invoice.billTo,callback:function(t){e.$set(e.invoice,"billTo",t)},expression:"invoice.billTo"}})],1)],1)],1),e._v(" "),i("v-flex",{attrs:{"sm-12":"","px-2":""}},[i("v-card",{staticClass:"invoiceNumber",attrs:{height:"100%"}},[i("v-flex",{attrs:{"px-4":"","py-2":""}},[i("div",[i("v-text-field",{attrs:{placeholder:"Invoice Number"},model:{value:e.invoice.invoiceNumber,callback:function(t){e.$set(e.invoice,"invoiceNumber",t)},expression:"invoice.invoiceNumber"}}),e._v(" "),i("v-text-field",{attrs:{placeholder:"Date"},model:{value:e.invoice.date,callback:function(t){e.$set(e.invoice,"date",t)},expression:"invoice.date"}}),e._v(" "),i("v-text-field",{attrs:{placeholder:"Balance Due"},model:{value:e.invoice.balance,callback:function(t){e.$set(e.invoice,"balance",t)},expression:"invoice.balance"}})],1)])],1)],1)],1),e._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{"xs-12":"","px-3":"","pt-2":""}},[i("v-card",{staticClass:"items"},[i("v-flex",{attrs:{"px-4":"","py-2":""}},[i("div",{staticClass:"invoiceQuantities"},[i("v-text-field",{attrs:{placeholder:"Item/Description"},model:{value:e.invoice.item,callback:function(t){e.$set(e.invoice,"item",t)},expression:"invoice.item"}}),e._v(" "),i("v-text-field",{attrs:{placeholder:"Quantity"},model:{value:e.invoice.quantity,callback:function(t){e.$set(e.invoice,"quantity",t)},expression:"invoice.quantity"}}),e._v(" "),i("v-text-field",{attrs:{placeholder:"Rate"},model:{value:e.invoice.rate,callback:function(t){e.$set(e.invoice,"rate",t)},expression:"invoice.rate"}})],1)])],1)],1)],1),e._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{"xs-6":"","px-3":"","pt-2":""}},[i("v-card",{staticClass:"notes"},[i("v-flex",{attrs:{"px-4":"","py-2":""}},[i("div",[i("v-textarea",{attrs:{placeholder:"notes"},model:{value:e.invoice.notes,callback:function(t){e.$set(e.invoice,"notes",t)},expression:"invoice.notes"}})],1)])],1)],1)],1),e._v(" "),i("v-btn",{staticClass:"primary space",attrs:{light:""},on:{click:e.createPdf}},[e._v("Create Invoice")]),e._v(" "),i("v-btn",{staticClass:"success space",attrs:{light:""},on:{click:function(t){e.preview=!e.preview}}},[e._v("Preview Invoice")])],1)],1),e._v(" "),e.preview?i("v-card",{staticClass:"invoice-demo",attrs:{light:"","pa-4":"","ma-4":""}},[i("h1",{staticClass:"text-xs-center invoice-heading"},[e._v("Invoice")]),e._v(" "),i("hr"),e._v(" "),i("v-container",{attrs:{fluid:"","pa-4":""}},[i("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[i("v-flex",{attrs:{"xs-6":"","offset-xs1":""}},[i("div",{staticClass:"top-left"},[i("h2",[e._v(e._s(e.invoice.businessName))]),e._v(" "),i("p",[e._v(e._s(e.invoice.addressLine1))]),e._v(" "),i("p",[e._v(e._s(e.invoice.addressLine2))]),e._v(" "),i("p",[e._v(e._s(e.invoice.addressLine3))]),e._v(" "),i("h3",[e._v(e._s(e.invoice.billTo))])])]),e._v(" "),i("v-flex",{attrs:{"xs-3":""}}),e._v(" "),i("v-flex",{attrs:{"xs-3":""}},[i("div",{staticClass:"top-right"},[i("h3",[e._v("Invoice # "+e._s(e.invoice.invoiceNumber))]),e._v(" "),i("p",[e._v("Date: "+e._s(e.invoice.date))]),e._v(" "),i("p",[e._v("Amount Owed: "+e._s(e.invoice.balance))])])])],1)],1),e._v(" "),i("hr"),e._v(" "),i("div",{staticClass:"item-heading"},[i("h3",{staticClass:"text-xs-center"},[e._v("Item(s)")])]),e._v(" "),i("v-container",{attrs:{fluid:"","pa-4":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{"xs-12":"","pl-1":"","offset-xs1":""}},[i("div",{staticClass:"middle"},[i("p",[e._v("Item/Description: "+e._s(e.invoice.item))]),e._v(" "),i("p",[e._v("Quantity: "+e._s(e.invoice.quantity))]),e._v(" "),i("p",[e._v("Rate: £"+e._s(e.invoice.rate))])])])],1)],1),e._v(" "),i("hr"),e._v(" "),i("div",{staticClass:"note-heading"},[i("h3",{staticClass:"text-xs-center"},[e._v("Notes")])]),e._v(" "),i("v-container",{attrs:{fluid:"","pa-4":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{"xs-12":"","pl-1":"","offset-xs1":""}},[i("div",{staticClass:"bottom"},[i("p",[e._v(e._s(e.invoice.notes))])])])],1)],1)],1):e._e()],1)},staticRenderFns:[]};var p=i("VU/8")(r,d,!1,function(e){i("0gSi")},"data-v-54b91b8a",null).exports,u={name:"App",components:{Invoicer:p}},f={render:function(){var e=this.$createElement;return(this._self._c||e)("Invoicer")},staticRenderFns:[]};var m=i("VU/8")(u,f,!1,function(e){i("NbKE")},null,null).exports,_=i("/ocq");i("7zck");s.default.use(_.a);var x=new _.a({routes:[{path:"/",name:"Invoicer",component:p}]}),h=i("3EgV"),b=i.n(h);s.default.use(b.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:x,components:{App:m},template:"<App/>"})},NbKE:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.72642b658ed7757003d5.js.map