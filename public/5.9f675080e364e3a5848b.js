(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CFL1:function(t,e,i){"use strict";i.d(e,"a",function(){return b});var r=i("mrSG"),c=i("fXoL"),a=i("tyNb"),s=i("oZWX"),o=i("E2f4");const n="/api/user";let b=(()=>{class t{constructor(t,e,i){this.router=t,this.apiService=e,this.storageService=i}login(t){return Object(r.a)(this,void 0,void 0,function*(){try{return yield this.apiService.postPromise(`${n}/signin`,t)}catch(e){return{code:0,message:e.message}}})}register(t){return Object(r.a)(this,void 0,void 0,function*(){try{return yield this.apiService.postPromise(`${n}/signup`,t)}catch(e){return{code:0,message:e.message}}})}logout(){this.storageService.clearAll(),this.router.navigateByUrl("/login")}}return t.\u0275fac=function(e){return new(e||t)(c.Xb(a.b),c.Xb(s.a),c.Xb(o.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},E2f4:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var r=i("fXoL"),c=i("e4Ts");let a=(()=>{class t{constructor(t){this.storage=t}saveValue(t,e){this.storage.store(t,e)}getValue(t){return this.storage.retrieve(t)}clearKey(t){this.storage.clear(t)}clearAll(){this.storage.clear()}}return t.\u0275fac=function(e){return new(e||t)(r.Xb(c.a))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Yj9t:function(t,e,i){"use strict";i.r(e),i.d(e,"AuthModule",function(){return O});var r=i("ofXK"),c=i("tyNb"),a=i("fXoL"),s=i("CFL1");let o=(()=>{class t{constructor(t){this.userService=t}ngOnInit(){}ngOnDestroy(){}logout(){this.userService.logout()}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(s.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-auth"]],decls:21,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-light"],["href","#",1,"navbar-brand"],["type","button","data-toggle","collapse","data-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto"],[1,"nav-item","active"],["href","auth/category",1,"nav-link"],[1,"sr-only"],[1,"nav-item"],["href","auth/author",1,"nav-link"],["href","auth/book",1,"nav-link"],["type","submit",1,"btn","btn-success","my-2","my-sm-0",3,"click"]],template:function(t,e){1&t&&(a.Qb(0,"nav",0),a.Qb(1,"a",1),a.zc(2,"Impact"),a.Pb(),a.Qb(3,"button",2),a.Mb(4,"span",3),a.Pb(),a.Qb(5,"div",4),a.Qb(6,"ul",5),a.Qb(7,"li",6),a.Qb(8,"a",7),a.zc(9,"Category "),a.Qb(10,"span",8),a.zc(11,"(current)"),a.Pb(),a.Pb(),a.Pb(),a.Qb(12,"li",9),a.Qb(13,"a",10),a.zc(14,"Author"),a.Pb(),a.Pb(),a.Qb(15,"li",9),a.Qb(16,"a",11),a.zc(17,"Book"),a.Pb(),a.Pb(),a.Pb(),a.Qb(18,"button",12),a.bc("click",function(){return e.logout()}),a.zc(19,"Logout"),a.Pb(),a.Pb(),a.Pb(),a.Mb(20,"router-outlet"))},directives:[c.d],styles:[""]}),t})();var n=i("1kSV"),b=i("oZWX"),l=i("3Pt+");function d(t,e){if(1&t){const t=a.Rb();a.Qb(0,"tr"),a.Qb(1,"th",17),a.zc(2),a.Pb(),a.Qb(3,"td"),a.zc(4),a.Pb(),a.Qb(5,"td"),a.zc(6),a.Pb(),a.Qb(7,"td"),a.zc(8),a.ec(9,"date"),a.Pb(),a.Qb(10,"td"),a.zc(11),a.ec(12,"date"),a.Pb(),a.Qb(13,"td"),a.Qb(14,"button",18),a.bc("click",function(){a.rc(t);const i=e.$implicit,r=a.dc(),c=a.qc(35);return r.editCategory(i,c)}),a.zc(15,"Update"),a.Pb(),a.Pb(),a.Qb(16,"td"),a.Qb(17,"button",19),a.bc("click",function(){a.rc(t);const i=e.$implicit;return a.dc().deleteCategory(i)}),a.zc(18,"Delete"),a.Pb(),a.Pb(),a.Pb()}if(2&t){const t=e.$implicit;a.zb(2),a.Ac(t.id),a.zb(2),a.Bc(" ",t.first_name," "),a.zb(2),a.Ac(t.last_name),a.zb(2),a.Ac(a.gc(9,5,t.createdAt,"medium")),a.zb(3),a.Ac(a.gc(12,8,t.updatedAt,"medium"))}}function u(t,e){if(1&t){const t=a.Rb();a.Qb(0,"li",20),a.Qb(1,"a",9),a.bc("click",function(){a.rc(t);const i=e.$implicit;return a.dc().getPaginationWithIndex(i)}),a.zc(2),a.Pb(),a.Pb()}if(2&t){const t=e.$implicit,i=a.dc();a.jc("ngClass",i.active(t)),a.zb(2),a.Bc(" ",t+1," ")}}function g(t,e){if(1&t){const t=a.Rb();a.Qb(0,"div",21),a.Qb(1,"h4",22),a.zc(2,"Modify Author"),a.Pb(),a.Qb(3,"button",23),a.bc("click",function(){return e.$implicit.dismiss("Cross click")}),a.Qb(4,"span",24),a.zc(5,"\xd7"),a.Pb(),a.Pb(),a.Pb(),a.Qb(6,"div",25),a.Qb(7,"div",26),a.Qb(8,"label",27),a.zc(9,"Author First Name"),a.Pb(),a.Qb(10,"input",28),a.bc("ngModelChange",function(e){return a.rc(t),a.dc().selectedCate.first_name=e}),a.Pb(),a.Pb(),a.Qb(11,"div",26),a.Qb(12,"label",29),a.zc(13,"Author Last Name"),a.Pb(),a.Qb(14,"input",30),a.bc("ngModelChange",function(e){return a.rc(t),a.dc().selectedCate.last_name=e}),a.Pb(),a.Pb(),a.Pb(),a.Qb(15,"div",31),a.Qb(16,"button",32),a.bc("click",function(){return a.rc(t),a.dc().AddUpdateCategory()}),a.zc(17,"Add/Update"),a.Pb(),a.Pb()}if(2&t){const t=a.dc();a.zb(10),a.jc("ngModel",t.selectedCate.first_name),a.zb(4),a.jc("ngModel",t.selectedCate.last_name)}}function h(t,e){if(1&t){const t=a.Rb();a.Qb(0,"tr"),a.Qb(1,"th",17),a.zc(2),a.Pb(),a.Qb(3,"td"),a.zc(4),a.Pb(),a.Qb(5,"td"),a.zc(6),a.Pb(),a.Qb(7,"td"),a.zc(8),a.ec(9,"date"),a.Pb(),a.Qb(10,"td"),a.zc(11),a.ec(12,"date"),a.Pb(),a.Qb(13,"td"),a.Qb(14,"button",18),a.bc("click",function(){a.rc(t);const i=e.$implicit,r=a.dc(),c=a.qc(35);return r.editCategory(i,c)}),a.zc(15,"Update"),a.Pb(),a.Pb(),a.Qb(16,"td"),a.Qb(17,"button",19),a.bc("click",function(){a.rc(t);const i=e.$implicit;return a.dc().deleteCategory(i)}),a.zc(18,"Delete"),a.Pb(),a.Pb(),a.Pb()}if(2&t){const t=e.$implicit;a.zb(2),a.Ac(t.id),a.zb(2),a.Bc(" ",t.first_name," "),a.zb(2),a.Ac(t.last_name),a.zb(2),a.Ac(a.gc(9,5,t.createdAt,"medium")),a.zb(3),a.Ac(a.gc(12,8,t.updatedAt,"medium"))}}let p=(()=>{class t{constructor(t,e){this.modalService=t,this.apiService=e,this.selectedCate={first_name:"",last_name:""},this.author=[],this.isAdd=!0,this.page=1,this.pageSize=4,this.authorId=0,this.categories={rows:[],currentPage:0,totalItems:0,totalPages:0},this.pageIndexes=[],this.filter=""}ngOnInit(){this.getPage(0,"")}getCategories(){this.apiService.getRecords("/api/author").subscribe(t=>{t.success?this.categories=t.data:alert(t.message)},t=>{alert(t.message),console.log(t)})}getPaginationWithIndex(t){this.getPage(t,this.filter)}getPage(t,e){this.apiService.getPagableAuthor(t,this.pageSize,e).subscribe(t=>{t.success?this.categories=t.data:alert(t.message),this.categories=t.data,this.pageIndexes=Array(this.categories.totalPages).fill(0).map((t,e)=>e)},t=>{alert(t.message),console.log(t)})}nextClick(){this.categories.currentPage<this.categories.totalPages-1&&this.getPage(++this.categories.currentPage,this.filter)}previousClick(){this.categories.currentPage>0&&this.getPage(--this.categories.currentPage,this.filter)}active(t){if(this.categories.currentPage==t)return{active:!0}}getCategoryPagesWithFiltering(t){this.filter=t,this.getPage(0,this.filter)}addCategory(t){this.isAdd=!0,this.modalService.open(t,{ariaLabelledBy:"modal-basic-title"}).result.then(t=>{},t=>{})}editCategory(t,e){this.isAdd=!1,this.selectedCate=t,this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then(t=>{},t=>{})}AddUpdateCategory(){return this.isAdd?this._addCategory():this._updateCategory()}_addCategory(){this.apiService.addAuthor({first_name:this.selectedCate.first_name,last_name:this.selectedCate.last_name}).subscribe(t=>{if(this.getPage(this.categories.currentPage,this.filter),t.success)return alert("Successfully added");alert(t.message)},t=>{alert(t.message),console.log(t)})}_updateCategory(){this.apiService.updateAuthor(this.selectedCate).subscribe(t=>{if(this.getPage(this.categories.currentPage,this.filter),t.success)return alert("Successfully updated");alert(t.message)},t=>{alert(t.message),console.log(t)})}deleteCategory(t){this.apiService.deleteAuthor(t.id).subscribe(t=>{if(this.getPage(this.categories.currentPage,this.filter),t.success)return alert("Successfully Deleted");alert(t.message)},t=>{alert(t.message),console.log(t)})}getAuthorById(){this.apiService.getAuthorById(this.authorId).subscribe(t=>{if(console.log(t),t.success)return this.author=[t.data],alert("Successfully got by id");alert(t.message)},t=>{alert(t.message),console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(n.a),a.Lb(b.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-author"]],decls:59,vars:4,consts:[[1,"text-center"],[1,"form-group","text-center"],["type","text","name","searchTerm",1,"form-control","ml-2",3,"input"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","p-2"],[1,"pagination","justify-content-center"],[1,"page-item"],[1,"page-link",3,"click"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],["mymodal",""],[1,"input-group","mb-3"],["type","text","placeholder","Get by Id","aria-label","Recipient's username","aria-describedby","basic-addon2",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["scope","row"],["type","button",1,"btn","btn-warning",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[1,"page-item",3,"ngClass"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","name","placeholder","Enter Name",1,"form-control",3,"ngModel","ngModelChange"],["for","exampleInputPassword1"],["type","text","id","description","placeholder","Enter Description",1,"form-control",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"]],template:function(t,e){if(1&t){const t=a.Rb();a.Qb(0,"h2",0),a.zc(1,"Author"),a.Pb(),a.Qb(2,"div",1),a.zc(3," Search: "),a.Qb(4,"input",2),a.bc("input",function(t){return e.getCategoryPagesWithFiltering(t.target.value)}),a.Pb(),a.Pb(),a.Qb(5,"table",3),a.Qb(6,"thead"),a.Qb(7,"tr"),a.Qb(8,"th",4),a.zc(9,"#"),a.Pb(),a.Qb(10,"th",4),a.zc(11,"First Name"),a.Pb(),a.Qb(12,"th",4),a.zc(13,"Last Name"),a.Pb(),a.Qb(14,"th",4),a.zc(15,"createdAt"),a.Pb(),a.Qb(16,"th",4),a.zc(17,"updatedAt"),a.Pb(),a.Mb(18,"th"),a.Mb(19,"th"),a.Pb(),a.Pb(),a.Qb(20,"tbody"),a.xc(21,d,19,11,"tr",5),a.Pb(),a.Pb(),a.Qb(22,"div",6),a.Qb(23,"ul",7),a.Qb(24,"li",8),a.Qb(25,"a",9),a.bc("click",function(){return e.previousClick()}),a.zc(26,"Previous"),a.Pb(),a.Pb(),a.xc(27,u,3,2,"li",10),a.Qb(28,"li",8),a.Qb(29,"a",9),a.bc("click",function(){return e.nextClick()}),a.zc(30,"Next"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(31,"div",0),a.Qb(32,"button",11),a.bc("click",function(){a.rc(t);const i=a.qc(35);return e.addCategory(i)}),a.zc(33,"Add"),a.Pb(),a.Pb(),a.xc(34,g,18,2,"ng-template",null,12,a.yc),a.Mb(36,"br"),a.Qb(37,"div",13),a.Qb(38,"input",14),a.bc("ngModelChange",function(t){return e.authorId=t}),a.Pb(),a.Qb(39,"div",15),a.Qb(40,"button",16),a.bc("click",function(){return e.getAuthorById()}),a.zc(41,"AuthorById"),a.Pb(),a.Pb(),a.Pb(),a.Qb(42,"table",3),a.Qb(43,"thead"),a.Qb(44,"tr"),a.Qb(45,"th",4),a.zc(46,"#"),a.Pb(),a.Qb(47,"th",4),a.zc(48,"First Name"),a.Pb(),a.Qb(49,"th",4),a.zc(50,"Last Name"),a.Pb(),a.Qb(51,"th",4),a.zc(52,"createdAt"),a.Pb(),a.Qb(53,"th",4),a.zc(54,"updatedAt"),a.Pb(),a.Mb(55,"th"),a.Mb(56,"th"),a.Pb(),a.Pb(),a.Qb(57,"tbody"),a.xc(58,h,19,11,"tr",5),a.Pb(),a.Pb()}2&t&&(a.zb(21),a.jc("ngForOf",e.categories.rows),a.zb(6),a.jc("ngForOf",e.pageIndexes),a.zb(11),a.jc("ngModel",e.authorId),a.zb(20),a.jc("ngForOf",e.author))},directives:[r.k,l.b,l.j,l.l,r.j],pipes:[r.d],styles:[""]}),t})();function P(t,e){if(1&t&&(a.Qb(0,"div"),a.zc(1),a.Pb()),2&t){const t=e.$implicit;a.zb(1),a.Bc("",t.first_name,",")}}function f(t,e){if(1&t&&(a.Qb(0,"div"),a.zc(1),a.Pb()),2&t){const t=e.$implicit;a.zb(1),a.Bc("",t.name,",")}}function m(t,e){if(1&t){const t=a.Rb();a.Qb(0,"tr"),a.Qb(1,"th",17),a.zc(2),a.Pb(),a.Qb(3,"td"),a.zc(4),a.Pb(),a.Qb(5,"td"),a.zc(6),a.Pb(),a.Qb(7,"td"),a.zc(8),a.ec(9,"date"),a.Pb(),a.Qb(10,"td"),a.xc(11,P,2,1,"div",5),a.Pb(),a.Qb(12,"td"),a.xc(13,f,2,1,"div",5),a.Pb(),a.Qb(14,"td"),a.zc(15),a.ec(16,"date"),a.Pb(),a.Qb(17,"td"),a.zc(18),a.ec(19,"date"),a.Pb(),a.Qb(20,"td"),a.Qb(21,"button",18),a.bc("click",function(){a.rc(t);const i=e.$implicit,r=a.dc(),c=a.qc(41);return r.editCategory(i,c)}),a.zc(22,"Update"),a.Pb(),a.Pb(),a.Qb(23,"td"),a.Qb(24,"button",19),a.bc("click",function(){a.rc(t);const i=e.$implicit;return a.dc().deleteCategory(i)}),a.zc(25,"Delete"),a.Pb(),a.Pb(),a.Pb()}if(2&t){const t=e.$implicit;a.zb(2),a.Ac(t.id),a.zb(2),a.Bc(" ",t.name," "),a.zb(2),a.Ac(t.isbn_number),a.zb(2),a.Ac(a.gc(9,8,t.year_published,"y")),a.zb(3),a.jc("ngForOf",t.authors),a.zb(2),a.jc("ngForOf",t.categories),a.zb(2),a.Ac(a.gc(16,11,t.createdAt,"medium")),a.zb(3),a.Ac(a.gc(19,14,t.updatedAt,"medium"))}}function Q(t,e){if(1&t){const t=a.Rb();a.Qb(0,"li",20),a.Qb(1,"a",9),a.bc("click",function(){a.rc(t);const i=e.$implicit;return a.dc().getPaginationWithIndex(i)}),a.zc(2),a.Pb(),a.Pb()}if(2&t){const t=e.$implicit,i=a.dc();a.jc("ngClass",i.active(t)),a.zb(2),a.Bc(" ",t+1," ")}}function y(t,e){if(1&t&&(a.Qb(0,"div",39),a.zc(1,"\xa0"),a.Qb(2,"label"),a.Qb(3,"input",40),a.bc("ngModelChange",function(t){return e.$implicit.isSelected=t}),a.Pb(),a.Qb(4,"span",41),a.Mb(5,"i",42),a.zc(6),a.Pb(),a.Pb(),a.Pb()),2&t){const t=e.$implicit;a.zb(3),a.jc("ngModel",t.isSelected),a.zb(3),a.Bc(" ",t.name,"")}}function z(t,e){if(1&t&&(a.Qb(0,"div",39),a.zc(1,"\xa0"),a.Qb(2,"label"),a.Qb(3,"input",40),a.bc("ngModelChange",function(t){return e.$implicit.isSelected=t}),a.Pb(),a.Qb(4,"span",41),a.Mb(5,"i",42),a.zc(6),a.Pb(),a.Pb(),a.Pb()),2&t){const t=e.$implicit;a.zb(3),a.jc("ngModel",t.isSelected),a.zb(3),a.Cc(" ",t.first_name," ",t.first_name,"")}}function v(t,e){if(1&t){const t=a.Rb();a.Qb(0,"div",21),a.Qb(1,"h4",22),a.zc(2,"Modify Book"),a.Pb(),a.Qb(3,"button",23),a.bc("click",function(){return e.$implicit.dismiss("Cross click")}),a.Qb(4,"span",24),a.zc(5,"\xd7"),a.Pb(),a.Pb(),a.Pb(),a.Qb(6,"div",25),a.Qb(7,"div",26),a.Qb(8,"label",27),a.zc(9,"Book Name"),a.Pb(),a.Qb(10,"input",28),a.bc("ngModelChange",function(e){return a.rc(t),a.dc().selectedCate.name=e}),a.Pb(),a.Pb(),a.Qb(11,"div",26),a.Qb(12,"label",29),a.zc(13,"CBook ISBN"),a.Pb(),a.Qb(14,"input",30),a.bc("ngModelChange",function(e){return a.rc(t),a.dc().selectedCate.isbn_number=e}),a.Pb(),a.Pb(),a.Qb(15,"div",26),a.Qb(16,"label",31),a.zc(17,"Book Year"),a.Pb(),a.Qb(18,"input",32),a.bc("ngModelChange",function(e){return a.rc(t),a.dc().selectedCate.year_published=e}),a.Pb(),a.Pb(),a.Qb(19,"div",33),a.Qb(20,"div",34),a.Qb(21,"h6"),a.zc(22,"Categories"),a.Pb(),a.Qb(23,"div",35),a.xc(24,y,7,2,"div",36),a.Pb(),a.Pb(),a.Qb(25,"div",34),a.Qb(26,"h6"),a.zc(27,"Authors"),a.Pb(),a.Qb(28,"div",35),a.xc(29,z,7,3,"div",36),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(30,"div",37),a.Qb(31,"button",38),a.bc("click",function(){return a.rc(t),a.dc().AddUpdateCategory()}),a.zc(32,"Add/Update"),a.Pb(),a.Pb()}if(2&t){const t=a.dc();a.zb(10),a.jc("ngModel",t.selectedCate.name),a.zb(4),a.jc("ngModel",t.selectedCate.isbn_number),a.zb(4),a.jc("ngModel",t.selectedCate.year_published),a.zb(6),a.jc("ngForOf",t.categoryList),a.zb(5),a.jc("ngForOf",t.authorList)}}function C(t,e){if(1&t){const t=a.Rb();a.Qb(0,"tr"),a.Qb(1,"th",17),a.zc(2),a.Pb(),a.Qb(3,"td"),a.zc(4),a.Pb(),a.Qb(5,"td"),a.zc(6),a.Pb(),a.Qb(7,"td"),a.zc(8),a.ec(9,"date"),a.Pb(),a.Qb(10,"td"),a.zc(11),a.ec(12,"date"),a.Pb(),a.Qb(13,"td"),a.Qb(14,"button",18),a.bc("click",function(){a.rc(t);const i=e.$implicit,r=a.dc(),c=a.qc(41);return r.editCategory(i,c)}),a.zc(15,"Update"),a.Pb(),a.Pb(),a.Qb(16,"td"),a.Qb(17,"button",19),a.bc("click",function(){a.rc(t);const i=e.$implicit;return a.dc().deleteCategory(i)}),a.zc(18,"Delete"),a.Pb(),a.Pb(),a.Pb()}if(2&t){const t=e.$implicit;a.zb(2),a.Ac(t.id),a.zb(2),a.Bc(" ",t.name," "),a.zb(2),a.Ac(t.description),a.zb(2),a.Ac(a.gc(9,5,t.createdAt,"medium")),a.zb(3),a.Ac(a.gc(12,8,t.updatedAt,"medium"))}}let k=(()=>{class t{constructor(t,e){this.modalService=t,this.apiService=e,this.selectedCate={first_name:"",year_published:"",isbn_number:"",name:"",last_name:"",categories:[],authors:[]},this.author=[],this.categoryList=[],this.authorList=[],this.isAdd=!0,this.page=1,this.pageSize=4,this.authorId=0,this.categories={rows:[],currentPage:0,totalItems:0,totalPages:0},this.pageIndexes=[],this.filter=""}ngOnInit(){this.getPage(0,""),this.getCategories(),this.getAuthors()}getAuthors(){this.apiService.getRecords("/api/author").subscribe(t=>{t.success?this.authorList=t.data.rows:alert(t.message)},t=>{alert(t.message),console.log(t)})}getCategories(){this.apiService.getRecords("/api/category").subscribe(t=>{t.success?this.categoryList=t.data.rows:alert(t.message)},t=>{alert(t.message),console.log(t)})}getPaginationWithIndex(t){this.getPage(t,this.filter)}getPage(t,e){this.apiService.getPagableBook(t,this.pageSize,e).subscribe(t=>{t.success?this.categories=t.data:alert(t.message),this.categories=t.data,this.pageIndexes=Array(this.categories.totalPages).fill(0).map((t,e)=>e)},t=>{alert(t.message),console.log(t)})}nextClick(){this.categories.currentPage<this.categories.totalPages-1&&this.getPage(++this.categories.currentPage,this.filter)}previousClick(){this.categories.currentPage>0&&this.getPage(--this.categories.currentPage,this.filter)}active(t){if(this.categories.currentPage==t)return{active:!0}}getCategoryPagesWithFiltering(t){this.filter=t,this.getPage(0,this.filter)}addCategory(t){this.isAdd=!0,this.modalService.open(t,{size:"lg",backdrop:"static",ariaLabelledBy:"modal-basic-title"}).result.then(t=>{},t=>{})}editCategory(t,e){this.isAdd=!1,this.selectedCate=t,this.setSelectedCategories(),this.modalService.open(e,{size:"lg",backdrop:"static",ariaLabelledBy:"modal-basic-title"}).result.then(t=>{},t=>{})}AddUpdateCategory(){const t=[];for(let i=0;i<this.categoryList.length;i++)this.categoryList[i].isSelected&&t.push(this.categoryList[i].id);const e=[];for(let i=0;i<this.authorList.length;i++)this.authorList[i].isSelected&&e.push(this.authorList[i].id);return this.isAdd?this._addCategory(t,e):this._updateCategory(t,e)}_addCategory(t,e){this.apiService.addBook({categories:t,authors:e,name:this.selectedCate.name,isbn_number:this.selectedCate.isbn_number,year_published:this.selectedCate.year_published}).subscribe(t=>{if(this.getPage(this.categories.currentPage,this.filter),t.success)return alert("Successfully added");alert(t.message)},t=>{console.log(t),alert(t.message)})}setSelectedCategories(){for(let t=0;t<this.categoryList.length;t++){this.categoryList[t].isSelected=!1;for(let e=0;e<this.selectedCate.categories.length;e++)this.categoryList[t].id===this.selectedCate.categories[e].id&&(this.categoryList[t].isSelected=!0)}for(let t=0;t<this.authorList.length;t++){this.authorList[t].isSelected=!1;for(let e=0;e<this.selectedCate.authors.length;e++)this.authorList[t].id===this.selectedCate.authors[e].id&&(this.authorList[t].isSelected=!0)}}_updateCategory(t,e){this.selectedCate.categories=t,this.selectedCate.authors=e,this.apiService.updateBook(this.selectedCate).subscribe(t=>{if(this.getPage(this.categories.currentPage,this.filter),t.success)return alert("Successfully updated");alert(t.message)},t=>{console.log(t),alert(t.message)})}deleteCategory(t){this.apiService.deleteBook(t.id).subscribe(t=>{if(this.getPage(this.categories.currentPage,this.filter),t.success)return alert("Successfully Deleted");alert(t.message)},t=>{console.log(t),alert(t.message)})}getAuthorById(){this.apiService.getBookById(this.authorId).subscribe(t=>{if(t.success)return this.author=[t.data],alert("Successfully got by id");alert(t.message)},t=>{console.log(t),alert(t.message)})}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(n.a),a.Lb(b.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-book"]],decls:65,vars:4,consts:[[1,"text-center"],[1,"form-group","text-center"],["type","text","name","searchTerm",1,"form-control","ml-2",3,"input"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","p-2"],[1,"pagination","justify-content-center"],[1,"page-item"],[1,"page-link",3,"click"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],["mymodal",""],[1,"input-group","mb-3"],["type","text","placeholder","Get by Id","aria-label","Recipient's username","aria-describedby","basic-addon2",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["scope","row"],["type","button",1,"btn","btn-warning",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[1,"page-item",3,"ngClass"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","name","placeholder","Enter Name",1,"form-control",3,"ngModel","ngModelChange"],["for","exampleInputPassword1"],["type","text","id","description","placeholder","Enter ISBN",1,"form-control",3,"ngModel","ngModelChange"],["for","exampleInputPassword11"],["type","text","id","description","placeholder","Enter year_published",1,"form-control",3,"ngModel","ngModelChange"],[1,"row"],[1,"col-6"],[1,"list-group","checkbox-list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],[1,"list-group-item"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"list-group-item-text"],[1,"fa","fa-fw"]],template:function(t,e){if(1&t){const t=a.Rb();a.Qb(0,"h2",0),a.zc(1,"Book"),a.Pb(),a.Qb(2,"div",1),a.zc(3," Search: "),a.Qb(4,"input",2),a.bc("input",function(t){return e.getCategoryPagesWithFiltering(t.target.value)}),a.Pb(),a.Pb(),a.Qb(5,"table",3),a.Qb(6,"thead"),a.Qb(7,"tr"),a.Qb(8,"th",4),a.zc(9,"#"),a.Pb(),a.Qb(10,"th",4),a.zc(11,"name"),a.Pb(),a.Qb(12,"th",4),a.zc(13,"isbn_number"),a.Pb(),a.Qb(14,"th",4),a.zc(15,"year_published"),a.Pb(),a.Qb(16,"th",4),a.zc(17,"authors"),a.Pb(),a.Qb(18,"th",4),a.zc(19,"categories"),a.Pb(),a.Qb(20,"th",4),a.zc(21,"createdAt"),a.Pb(),a.Qb(22,"th",4),a.zc(23,"updatedAt"),a.Pb(),a.Mb(24,"th"),a.Mb(25,"th"),a.Pb(),a.Pb(),a.Qb(26,"tbody"),a.xc(27,m,26,17,"tr",5),a.Pb(),a.Pb(),a.Qb(28,"div",6),a.Qb(29,"ul",7),a.Qb(30,"li",8),a.Qb(31,"a",9),a.bc("click",function(){return e.previousClick()}),a.zc(32,"Previous"),a.Pb(),a.Pb(),a.xc(33,Q,3,2,"li",10),a.Qb(34,"li",8),a.Qb(35,"a",9),a.bc("click",function(){return e.nextClick()}),a.zc(36,"Next"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(37,"div",0),a.Qb(38,"button",11),a.bc("click",function(){a.rc(t);const i=a.qc(41);return e.addCategory(i)}),a.zc(39,"Add"),a.Pb(),a.Pb(),a.xc(40,v,33,5,"ng-template",null,12,a.yc),a.Mb(42,"br"),a.Qb(43,"div",13),a.Qb(44,"input",14),a.bc("ngModelChange",function(t){return e.authorId=t}),a.Pb(),a.Qb(45,"div",15),a.Qb(46,"button",16),a.bc("click",function(){return e.getAuthorById()}),a.zc(47,"BookById"),a.Pb(),a.Pb(),a.Pb(),a.Qb(48,"table",3),a.Qb(49,"thead"),a.Qb(50,"tr"),a.Qb(51,"th",4),a.zc(52,"#"),a.Pb(),a.Qb(53,"th",4),a.zc(54,"name"),a.Pb(),a.Qb(55,"th",4),a.zc(56,"description"),a.Pb(),a.Qb(57,"th",4),a.zc(58,"createdAt"),a.Pb(),a.Qb(59,"th",4),a.zc(60,"updatedAt"),a.Pb(),a.Mb(61,"th"),a.Mb(62,"th"),a.Pb(),a.Pb(),a.Qb(63,"tbody"),a.xc(64,C,19,11,"tr",5),a.Pb(),a.Pb()}2&t&&(a.zb(27),a.jc("ngForOf",e.categories.rows),a.zb(6),a.jc("ngForOf",e.pageIndexes),a.zb(11),a.jc("ngModel",e.authorId),a.zb(20),a.jc("ngForOf",e.author))},directives:[r.k,l.b,l.j,l.l,r.j,l.a],pipes:[r.d],styles:[""]}),t})();function A(t,e){if(1&t){const t=a.Rb();a.Qb(0,"tr"),a.Qb(1,"th",17),a.zc(2),a.Pb(),a.Qb(3,"td"),a.zc(4),a.Pb(),a.Qb(5,"td"),a.zc(6),a.Pb(),a.Qb(7,"td"),a.zc(8),a.ec(9,"date"),a.Pb(),a.Qb(10,"td"),a.zc(11),a.ec(12,"date"),a.Pb(),a.Qb(13,"td"),a.Qb(14,"button",18),a.bc("click",function(){a.rc(t);const i=e.$implicit,r=a.dc(),c=a.qc(35);return r.editCategory(i,c)}),a.zc(15,"Update"),a.Pb(),a.Pb(),a.Qb(16,"td"),a.Qb(17,"button",19),a.bc("click",function(){a.rc(t);const i=e.$implicit;return a.dc().deleteCategory(i)}),a.zc(18,"Delete"),a.Pb(),a.Pb(),a.Pb()}if(2&t){const t=e.$implicit;a.zb(2),a.Ac(t.id),a.zb(2),a.Bc(" ",t.name," "),a.zb(2),a.Ac(t.description),a.zb(2),a.Ac(a.gc(9,5,t.createdAt,"medium")),a.zb(3),a.Ac(a.gc(12,8,t.updatedAt,"medium"))}}function S(t,e){if(1&t){const t=a.Rb();a.Qb(0,"li",20),a.Qb(1,"a",9),a.bc("click",function(){a.rc(t);const i=e.$implicit;return a.dc().getPaginationWithIndex(i)}),a.zc(2),a.Pb(),a.Pb()}if(2&t){const t=e.$implicit,i=a.dc();a.jc("ngClass",i.active(t)),a.zb(2),a.Bc(" ",t+1," ")}}function x(t,e){if(1&t){const t=a.Rb();a.Qb(0,"div",21),a.Qb(1,"h4",22),a.zc(2,"Modify Category"),a.Pb(),a.Qb(3,"button",23),a.bc("click",function(){return e.$implicit.dismiss("Cross click")}),a.Qb(4,"span",24),a.zc(5,"\xd7"),a.Pb(),a.Pb(),a.Pb(),a.Qb(6,"div",25),a.Qb(7,"div",26),a.Qb(8,"label",27),a.zc(9,"Category Name"),a.Pb(),a.Qb(10,"input",28),a.bc("ngModelChange",function(e){return a.rc(t),a.dc().selectedCate.name=e}),a.Pb(),a.Pb(),a.Qb(11,"div",26),a.Qb(12,"label",29),a.zc(13,"Category Description"),a.Pb(),a.Qb(14,"input",30),a.bc("ngModelChange",function(e){return a.rc(t),a.dc().selectedCate.description=e}),a.Pb(),a.Pb(),a.Pb(),a.Qb(15,"div",31),a.Qb(16,"button",32),a.bc("click",function(){return a.rc(t),a.dc().AddUpdateCategory()}),a.zc(17,"Add/Update"),a.Pb(),a.Pb()}if(2&t){const t=a.dc();a.zb(10),a.jc("ngModel",t.selectedCate.name),a.zb(4),a.jc("ngModel",t.selectedCate.description)}}function I(t,e){if(1&t){const t=a.Rb();a.Qb(0,"tr"),a.Qb(1,"th",17),a.zc(2),a.Pb(),a.Qb(3,"td"),a.zc(4),a.Pb(),a.Qb(5,"td"),a.zc(6),a.Pb(),a.Qb(7,"td"),a.zc(8),a.ec(9,"date"),a.Pb(),a.Qb(10,"td"),a.zc(11),a.ec(12,"date"),a.Pb(),a.Qb(13,"td"),a.Qb(14,"button",18),a.bc("click",function(){a.rc(t);const i=e.$implicit,r=a.dc(),c=a.qc(35);return r.editCategory(i,c)}),a.zc(15,"Update"),a.Pb(),a.Pb(),a.Qb(16,"td"),a.Qb(17,"button",19),a.bc("click",function(){a.rc(t);const i=e.$implicit;return a.dc().deleteCategory(i)}),a.zc(18,"Delete"),a.Pb(),a.Pb(),a.Pb()}if(2&t){const t=e.$implicit;a.zb(2),a.Ac(t.id),a.zb(2),a.Bc(" ",t.name," "),a.zb(2),a.Ac(t.description),a.zb(2),a.Ac(a.gc(9,5,t.createdAt,"medium")),a.zb(3),a.Ac(a.gc(12,8,t.updatedAt,"medium"))}}let B=(()=>{class t{constructor(t,e){this.modalService=t,this.apiService=e,this.selectedCate={name:"",description:""},this.author=[],this.authorId=0,this.isAdd=!0,this.page=1,this.pageSize=4,this.categories={rows:[],currentPage:0,totalItems:0,totalPages:0},this.pageIndexes=[],this.filter=""}ngOnInit(){this.getPage(0,"")}getCategories(){this.apiService.getRecords("/api/category").subscribe(t=>{t.success?this.categories=t.data:alert(t.message)},t=>{console.log(t)})}getPaginationWithIndex(t){this.getPage(t,this.filter)}getPage(t,e){this.apiService.getPagableCategory(t,this.pageSize,e).subscribe(t=>{t.success?this.categories=t.data:alert(t.message),this.categories=t.data,this.pageIndexes=Array(this.categories.totalPages).fill(0).map((t,e)=>e)},t=>{console.log(t)})}nextClick(){this.categories.currentPage<this.categories.totalPages-1&&this.getPage(++this.categories.currentPage,this.filter)}previousClick(){this.categories.currentPage>0&&this.getPage(--this.categories.currentPage,this.filter)}active(t){if(this.categories.currentPage==t)return{active:!0}}getCategoryPagesWithFiltering(t){this.filter=t,this.getPage(0,this.filter)}addCategory(t){this.isAdd=!0,this.modalService.open(t,{ariaLabelledBy:"modal-basic-title"}).result.then(t=>{},t=>{})}editCategory(t,e){this.isAdd=!1,this.selectedCate=t,this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then(t=>{},t=>{})}AddUpdateCategory(){return this.isAdd?this._addCategory():this._updateCategory()}_addCategory(){this.apiService.addCategory({name:this.selectedCate.name,description:this.selectedCate.description}).subscribe(t=>{if(console.log(t),this.getPage(this.categories.currentPage,this.filter),t.success)return alert("Successfully added");alert(t.message)},t=>{alert(t.message),console.log(t)})}_updateCategory(){this.apiService.updateCategory(this.selectedCate).subscribe(t=>{if(this.getPage(this.categories.currentPage,this.filter),t.success)return alert("Successfully updated");alert(t.message)},t=>{alert(t.message),console.log(t)})}deleteCategory(t){this.apiService.deleteCategory(t.id).subscribe(t=>{if(this.getPage(this.categories.currentPage,this.filter),t.success)return alert("Successfully Deleted");alert(t.message)},t=>{alert(t.message),console.log(t)})}getAuthorById(){this.apiService.getCategoryById(this.authorId).subscribe(t=>{if(t.success)return this.author=[t.data],alert("Successfully got by id");alert(t.message)},t=>{alert(t.message),console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(n.a),a.Lb(b.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-category"]],decls:59,vars:4,consts:[[1,"text-center"],[1,"form-group","text-center"],["type","text","name","searchTerm",1,"form-control","ml-2",3,"input"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","p-2"],[1,"pagination","justify-content-center"],[1,"page-item"],[1,"page-link",3,"click"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],["mymodal",""],[1,"input-group","mb-3"],["type","text","placeholder","Get by Id","aria-label","Recipient's username","aria-describedby","basic-addon2",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["scope","row"],["type","button",1,"btn","btn-warning",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[1,"page-item",3,"ngClass"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","name","placeholder","Enter Name",1,"form-control",3,"ngModel","ngModelChange"],["for","exampleInputPassword1"],["type","text","id","description","placeholder","Enter Description",1,"form-control",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"]],template:function(t,e){if(1&t){const t=a.Rb();a.Qb(0,"h2",0),a.zc(1,"Category"),a.Pb(),a.Qb(2,"div",1),a.zc(3," Search: "),a.Qb(4,"input",2),a.bc("input",function(t){return e.getCategoryPagesWithFiltering(t.target.value)}),a.Pb(),a.Pb(),a.Qb(5,"table",3),a.Qb(6,"thead"),a.Qb(7,"tr"),a.Qb(8,"th",4),a.zc(9,"#"),a.Pb(),a.Qb(10,"th",4),a.zc(11,"name"),a.Pb(),a.Qb(12,"th",4),a.zc(13,"description"),a.Pb(),a.Qb(14,"th",4),a.zc(15,"createdAt"),a.Pb(),a.Qb(16,"th",4),a.zc(17,"updatedAt"),a.Pb(),a.Mb(18,"th"),a.Mb(19,"th"),a.Pb(),a.Pb(),a.Qb(20,"tbody"),a.xc(21,A,19,11,"tr",5),a.Pb(),a.Pb(),a.Qb(22,"div",6),a.Qb(23,"ul",7),a.Qb(24,"li",8),a.Qb(25,"a",9),a.bc("click",function(){return e.previousClick()}),a.zc(26,"Previous"),a.Pb(),a.Pb(),a.xc(27,S,3,2,"li",10),a.Qb(28,"li",8),a.Qb(29,"a",9),a.bc("click",function(){return e.nextClick()}),a.zc(30,"Next"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(31,"div",0),a.Qb(32,"button",11),a.bc("click",function(){a.rc(t);const i=a.qc(35);return e.addCategory(i)}),a.zc(33,"Add"),a.Pb(),a.Pb(),a.xc(34,x,18,2,"ng-template",null,12,a.yc),a.Mb(36,"br"),a.Qb(37,"div",13),a.Qb(38,"input",14),a.bc("ngModelChange",function(t){return e.authorId=t}),a.Pb(),a.Qb(39,"div",15),a.Qb(40,"button",16),a.bc("click",function(){return e.getAuthorById()}),a.zc(41,"CategoryById"),a.Pb(),a.Pb(),a.Pb(),a.Qb(42,"table",3),a.Qb(43,"thead"),a.Qb(44,"tr"),a.Qb(45,"th",4),a.zc(46,"#"),a.Pb(),a.Qb(47,"th",4),a.zc(48,"name"),a.Pb(),a.Qb(49,"th",4),a.zc(50,"description"),a.Pb(),a.Qb(51,"th",4),a.zc(52,"createdAt"),a.Pb(),a.Qb(53,"th",4),a.zc(54,"updatedAt"),a.Pb(),a.Mb(55,"th"),a.Mb(56,"th"),a.Pb(),a.Pb(),a.Qb(57,"tbody"),a.xc(58,I,19,11,"tr",5),a.Pb(),a.Pb()}2&t&&(a.zb(21),a.jc("ngForOf",e.categories.rows),a.zb(6),a.jc("ngForOf",e.pageIndexes),a.zb(11),a.jc("ngModel",e.authorId),a.zb(20),a.jc("ngForOf",e.author))},directives:[r.k,l.b,l.j,l.l,r.j],pipes:[r.d],styles:[""]}),t})();var $=i("E2f4");const M=[{path:"",component:o,children:[{path:"author",component:p},{path:"book",component:k},{path:"category",component:B}],canActivate:[(()=>{class t{constructor(t,e){this.storageService=t,this.router=e}canActivate(t,e){return console.log("88888888"),!!this.storageService.getValue("token")||(this.router.navigate(["/login"],{queryParams:{returnUrl:e.url}}),!1)}IsLoggedIn(t,e){return!this.storageService.getValue("token")||(this.router.navigate(["/auth/grid"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(a.Xb($.a),a.Xb(c.b))},t.\u0275prov=a.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()]}];let j=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[r.b,n.b,l.g]]}),t})(),w=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[r.b,n.b,l.g]]}),t})(),_=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[r.b,n.b,l.g]]}),t})(),O=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[r.b,c.c.forChild(M),j,w,_]]}),t})()},mrSG:function(t,e,i){"use strict";function r(t,e,i,r){return new(i||(i=Promise))(function(c,a){function s(t){try{n(r.next(t))}catch(e){a(e)}}function o(t){try{n(r.throw(t))}catch(e){a(e)}}function n(t){var e;t.done?c(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(s,o)}n((r=r.apply(t,e||[])).next())})}i.d(e,"a",function(){return r})},oZWX:function(t,e,i){"use strict";i.d(e,"a",function(){return g});var r=i("mrSG"),c=i("tk/3"),a=i("z6cu"),s=i("7o/Q");function o(t=-1){return e=>e.lift(new n(t,e))}class n{constructor(t,e){this.count=t,this.source=e}call(t,e){return e.subscribe(new b(t,this.count,this.source))}}class b extends s.a{constructor(t,e,i){super(t),this.count=e,this.source=i}error(t){if(!this.isStopped){const{source:e,count:i}=this;if(0===i)return super.error(t);i>-1&&(this.count=i-1),e.subscribe(this._unsubscribeAndRecycle())}}}var l=i("JIr8"),d=i("fXoL"),u=i("E2f4");let g=(()=>{class t{constructor(t,e){this.http=t,this.storageService=e,this.categoryUrl="/api/category",this.bookUrl="/api/book",this.authorUrl="/api/author"}getPagableCategory(t,e,i){const r=this.storageService.getValue("token"),a=(new c.c).set("Authorization","Bearer "+r);return this.http.get(`${this.categoryUrl}?page=${t}&size=${e}&filter=${i}`,{headers:a}).pipe(o(3),Object(l.a)(this.handleError))}addCategory(t){const e=this.storageService.getValue("token"),i=(new c.c).set("Authorization","Bearer "+e);return this.http.post(`${this.categoryUrl}`,t,{headers:i}).pipe(o(3),Object(l.a)(this.handleError))}updateCategory(t){const e=this.storageService.getValue("token"),i=(new c.c).set("Authorization","Bearer "+e);return this.http.put(`${this.categoryUrl}/${t.id}`,t,{headers:i}).pipe(o(3),Object(l.a)(this.handleError))}deleteCategory(t){const e=this.storageService.getValue("token"),i=(new c.c).set("Authorization","Bearer "+e);return this.http.delete(`${this.categoryUrl}/${t}`,{headers:i}).pipe(o(3),Object(l.a)(this.handleError))}getPagableAuthor(t,e,i){const r=this.storageService.getValue("token"),a=(new c.c).set("Authorization","Bearer "+r);return this.http.get(`${this.authorUrl}?page=${t}&size=${e}&filter=${i}`,{headers:a}).pipe(o(3),Object(l.a)(this.handleError))}addAuthor(t){const e=this.storageService.getValue("token"),i=(new c.c).set("Authorization","Bearer "+e);return this.http.post(`${this.authorUrl}`,t,{headers:i}).pipe(o(3),Object(l.a)(this.handleError))}updateAuthor(t){const e=this.storageService.getValue("token"),i=(new c.c).set("Authorization","Bearer "+e);return this.http.put(`${this.authorUrl}/${t.id}`,t,{headers:i}).pipe(o(3),Object(l.a)(this.handleError))}deleteAuthor(t){const e=this.storageService.getValue("token"),i=(new c.c).set("Authorization","Bearer "+e);return this.http.delete(`${this.authorUrl}/${t}`,{headers:i}).pipe(o(3),Object(l.a)(this.handleError))}getAuthorById(t){const e=this.storageService.getValue("token"),i=(new c.c).set("Authorization","Bearer "+e);return this.http.get(`${this.authorUrl}/${t}`,{headers:i}).pipe(o(3),Object(l.a)(this.handleError))}getPagableBook(t,e,i){const r=this.storageService.getValue("token"),a=(new c.c).set("Authorization","Bearer "+r);return this.http.get(`${this.bookUrl}?page=${t}&size=${e}&filter=${i}`,{headers:a}).pipe(o(3),Object(l.a)(this.handleError))}addBook(t){const e=this.storageService.getValue("token"),i=(new c.c).set("Authorization","Bearer "+e);return this.http.post(`${this.bookUrl}`,t,{headers:i}).pipe(o(3),Object(l.a)(this.handleError))}updateBook(t){const e=this.storageService.getValue("token"),i=(new c.c).set("Authorization","Bearer "+e);return this.http.put(`${this.bookUrl}/${t.id}`,t,{headers:i}).pipe(o(3),Object(l.a)(this.handleError))}deleteBook(t){const e=this.storageService.getValue("token"),i=(new c.c).set("Authorization","Bearer "+e);return this.http.delete(`${this.bookUrl}/${t}`,{headers:i}).pipe(o(3),Object(l.a)(this.handleError))}getBookById(t){const e=this.storageService.getValue("token"),i=(new c.c).set("Authorization","Bearer "+e);return this.http.get(`${this.bookUrl}/${t}`,{headers:i}).pipe(o(3),Object(l.a)(this.handleError))}getCategoryById(t){const e=this.storageService.getValue("token"),i=(new c.c).set("Authorization","Bearer "+e);return this.http.get(`${this.categoryUrl}/${t}`,{headers:i}).pipe(o(3),Object(l.a)(this.handleError))}postPromise(t,e){return Object(r.a)(this,void 0,void 0,function*(){return yield this.http.post(t,e,{}).toPromise()})}getRecords(t){const e=this.storageService.getValue("token"),i=(new c.c).set("Authorization","Bearer "+e);return this.http.get(t,{headers:i}).pipe(o(3),Object(l.a)(this.handleError))}handleError(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`Backend returned code ${t.status}, body was: ${t.error}`),Object(a.a)(t)}}return t.\u0275fac=function(e){return new(e||t)(d.Xb(c.a),d.Xb(u.a))},t.\u0275prov=d.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);