import{a as o,c as E}from"./chunk-YVT2FQZ3.js";import"./chunk-P5XQHMX7.js";import"./chunk-ZFE72TGY.js";import"./chunk-IRP4LUC2.js";import"./chunk-WXI33M2S.js";import{Ab as y,Cb as w,Db as h,Lb as M,Pb as A,Qb as S,Ua as g,Va as C,a as f,aa as _,ab as u,b as v,bb as x,da as p,ea as l,jc as O,lb as k,mc as T,nb as m,vb as d,wb as c}from"./chunk-LFHMS2ZU.js";function F(a,r){if(a&1){let s=y();d(0,"app-card",3),w("deleteCardEmit",function(t){p(s);let e=h();return l(e.deleteTask(t))})("archivedCard",function(t){p(s);let e=h();return l(e.archivedTask(t))}),c()}if(a&2){let s=r.$implicit;m("task",s)("event","archived")}}var q=(()=>{let r=class r{constructor(i){this.cardsService=i,this.task=x(void 0),this.tasks=u(()=>this.task())}ngOnInit(){this.cardsService.getNotesUser().subscribe({next:i=>{if(i){let t=i.filter(e=>e.archived&&e.active);this.task.set(t)}else this.task.set([])}})}deleteTask(i){let t=this.task().findIndex(e=>e.id===i);if(t!==-1){let e=[...this.task()||[]];e.splice(t,1),this.task.set(e)}}archivedTask(i){let e=this.actualizarCheck(this.task(),i.id,i.archived).filter(n=>n.archived);this.task.set(e)}actualizarCheck(i,t,e){return i.map(n=>n.id===t?v(f({},n),{archived:e}):n)}};r.\u0275fac=function(t){return new(t||r)(C(o))},r.\u0275cmp=_({type:r,selectors:[["app-main-archived"]],standalone:!0,features:[A([o]),S],decls:5,vars:1,consts:[[2,"margin-top","15px","text-align","center","color","rgb(109, 31, 182)","font-weight","bold","font-size","2.2rem"],[1,"principal_container"],[3,"task","event","deleteCardEmit","archivedCard",4,"ngFor","ngForOf"],[3,"task","event","deleteCardEmit","archivedCard"]],template:function(t,e){t&1&&(d(0,"div")(1,"h1",0),M(2,"Archived Notes"),c(),d(3,"div",1),k(4,F,1,2,"app-card",2),c()()),t&2&&(g(4),m("ngForOf",e.tasks()))},dependencies:[T,O,E],styles:["[_nghost-%COMP%]{display:block}.principal_container[_ngcontent-%COMP%]{padding:20px;display:flex;flex-wrap:wrap;gap:10px}@media (max-width: 428px){.principal_container[_ngcontent-%COMP%]{padding:10px;display:grid;grid-template-columns:1fr 1fr;gap:10px}}@media (min-width: 429px) and (max-width: 800px){.principal_container[_ngcontent-%COMP%]{padding:10px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}}"],changeDetection:0});let a=r;return a})();export{q as MainArchivedComponent};