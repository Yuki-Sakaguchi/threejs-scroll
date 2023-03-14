const Id=[];for(let s=0;s<256;s++)Id[s]=(s<16?"0":"")+s.toString(16);function py(s,t,e){return(1-e)*s+e*t}function Sn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ul(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ue={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ci={duration:.5,overwrite:!1,delay:0},Ra,be,oe,je=1e8,Wt=1/je,La=Math.PI*2,Fd=La/4,Nd=0,kl=Math.sqrt,Bd=Math.cos,Od=Math.sin,pe=function(t){return typeof t=="string"},re=function(t){return typeof t=="function"},Tn=function(t){return typeof t=="number"},Pa=function(t){return typeof t=="undefined"},pn=function(t){return typeof t=="object"},Pe=function(t){return t!==!1},Vl=function(){return typeof window!="undefined"},xs=function(t){return re(t)||pe(t)},Hl=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},we=Array.isArray,Da=/(?:-?\.?\d|\.)+/gi,Gl=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ri=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ia=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wl=/[+-]=-?[.\d]+/,ql=/[^,'"\[\]\s]+/gi,zd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qt,Ze,Fa,Na,ke={},vs={},Xl,Yl=function(t){return(vs=hi(t,ke))&&Ge},Ba=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ys=function(t,e){return!e&&console.warn(t)},jl=function(t,e){return t&&(ke[t]=e)&&vs&&(vs[t]=e)||ke},Ar=function(){return 0},Ud={suppressEvents:!0,isStart:!0,kill:!1},Ms={suppressEvents:!0,kill:!1},kd={suppressEvents:!0},Oa={},Bn=[],za={},Zl,Ve={},Ua={},Jl=30,bs=[],ka="",Va=function(t){var e=t[0],n,i;if(pn(e)||re(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=bs.length;i--&&!bs[i].targetTest(e););n=bs[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new wc(t[i],n)))||t.splice(i,1);return t},ci=function(t){return t._gsap||Va(Ke(t))[0]._gsap},$l=function(t,e,n){return(n=t[e])&&re(n)?t[e]():Pa(n)&&t.getAttribute&&t.getAttribute(e)||n},De=function(t,e){return(t=t.split(",")).forEach(e)||t},se=function(t){return Math.round(t*1e5)/1e5||0},xe=function(t){return Math.round(t*1e7)/1e7||0},Li=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Vd=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ws=function(){var t=Bn.length,e=Bn.slice(0),n,i;for(za={},Bn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Kl=function(t,e,n,i){Bn.length&&!be&&ws(),t.render(e,n,i||be&&e<0&&(t._initted||t._startAt)),Bn.length&&!be&&ws()},Ql=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ql).length<2?e:pe(t)?t.trim():t},tc=function(t){return t},Je=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Hd=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},hi=function(t,e){for(var n in e)t[n]=e[n];return t},ec=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=pn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Ss=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Cr=function(t){var e=t.parent||Qt,n=t.keyframes?Hd(we(t.keyframes)):Je;if(Pe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Gd=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},nc=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ts=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},On=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},ui=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Wd=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ha=function(t,e,n,i){return t._startAt&&(be?t._startAt.revert(Ms):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},qd=function s(t){return!t||t._ts&&s(t.parent)},ic=function(t){return t._repeat?Pi(t._tTime,t=t.duration()+t._rDelay)*t:0},Pi=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Es=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},As=function(t){return t._end=xe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Wt)||0))},Cs=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=xe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),As(t),n._dirty||ui(n,t)),t},rc=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Es(t.rawTime(),e),(!e._dur||Lr(0,e.totalDuration(),n)-e._tTime>Wt)&&e.render(n,!0)),ui(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Wt}},mn=function(t,e,n,i){return e.parent&&On(e),e._start=xe((Tn(n)?n:n||t!==Qt?$e(t,n,e):t._time)+e._delay),e._end=xe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),nc(t,e,"_first","_last",t._sort?"_start":0),Ga(e)||(t._recent=e),i||rc(t,e),t._ts<0&&Cs(t,t._tTime),t},sc=function(t,e){return(ke.ScrollTrigger||Ba("scrollTrigger",e))&&ke.ScrollTrigger.create(e,t)},ac=function(t,e,n,i,r){if(Ka(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!be&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Zl!==He.frame)return Bn.push(t),t._lazy=[r,i],1},Xd=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Ga=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Yd=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&Xd(t)&&!(!t._initted&&Ga(t))||(t._ts<0||t._dp._ts<0)&&!Ga(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=Lr(0,t._tDur,e),h=Pi(l,o),t._yoyo&&h&1&&(a=1-a),h!==Pi(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||be||i||t._zTime===Wt||!e&&t._zTime){if(!t._initted&&ac(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?Wt:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Ha(t,e,n,!0),t._onUpdate&&!n&&Qe(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Qe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&On(t,1),!n&&!be&&(Qe(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},jd=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Di=function(t,e,n,i){var r=t._repeat,a=xe(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:xe(a*(r+1)+t._rDelay*r):a,o>0&&!i&&Cs(t,t._tTime=t._tDur*o),t.parent&&As(t),n||ui(t.parent,t),t},oc=function(t){return t instanceof Ie?ui(t):Di(t,t._dur)},Zd={_start:0,endTime:Ar,totalDuration:Ar},$e=function s(t,e,n){var i=t.labels,r=t._recent||Zd,a=t.duration()>=je?r.endTime(!1):t._dur,o,l,c;return pe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(we(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Rr=function(t,e,n){var i=Tn(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Pe(l.vars.inherit)&&l.parent;a.immediateRender=Pe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new he(e[0],a,e[r+1])},zn=function(t,e){return t||t===0?e(t):e},Lr=function(t,e,n){return n<t?t:n>e?e:n},Se=function(t,e){return!pe(t)||!(e=zd.exec(t))?"":e[1]},Jd=function(t,e,n){return zn(n,function(i){return Lr(t,e,i)})},Wa=[].slice,lc=function(t,e){return t&&pn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&pn(t[0]))&&!t.nodeType&&t!==Ze},$d=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return pe(i)&&!e||lc(i,1)?(r=n).push.apply(r,Ke(i)):n.push(i)})||n},Ke=function(t,e,n){return oe&&!e&&oe.selector?oe.selector(t):pe(t)&&!n&&(Fa||!Fi())?Wa.call((e||Na).querySelectorAll(t),0):we(t)?$d(t,n):lc(t)?Wa.call(t,0):t?[t]:[]},qa=function(t){return t=Ke(t)[0]||ys("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ke(e,n.querySelectorAll?n:n===t?ys("Invalid scope")||Na.createElement("div"):t)}},cc=function(t){return t.sort(function(){return .5-Math.random()})},hc=function(t){if(re(t))return t;var e=pn(t)?t:{each:t},n=di(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return pe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,x=a[g],m,p,b,v,M,E,A,P,O;if(!x){if(O=e.grid==="auto"?0:(e.grid||[1,je])[1],!O){for(A=-je;A<(A=_[O++].getBoundingClientRect().left)&&O<g;);O--}for(x=a[g]=[],m=l?Math.min(O,g)*h-.5:i%O,p=O===je?0:l?g*u/O-.5:i/O|0,A=0,P=je,E=0;E<g;E++)b=E%O-m,v=p-(E/O|0),x[E]=M=c?Math.abs(c==="y"?v:b):kl(b*b+v*v),M>A&&(A=M),M<P&&(P=M);i==="random"&&cc(x),x.max=A-P,x.min=P,x.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(O>g?g-1:c?c==="y"?g/O:O:Math.max(O,g/O))||0)*(i==="edges"?-1:1),x.b=g<0?r-g:r,x.u=Se(e.amount||e.each)||0,n=n&&g<0?yc(n):n}return g=(x[d]-x.min)/x.max||0,xe(x.b+(n?n(g):g)*x.v)+x.u}},Xa=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=xe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Tn(n)?0:Se(n))}},uc=function(t,e){var n=we(t),i,r;return!n&&pn(t)&&(i=n=t.radius||je,t.values?(t=Ke(t.values),(r=!Tn(t[0]))&&(i*=i)):t=Xa(t.increment)),zn(e,n?re(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=je,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-o,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,r||h===a||Tn(a)?h:h+Se(a)}:Xa(t))},dc=function(t,e,n,i){return zn(we(t)?!e:n===!0?!!(n=0):!i,function(){return we(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Kd=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Qd=function(t,e){return function(n){return t(parseFloat(n))+(e||Se(n))}},tf=function(t,e,n){return pc(t,e,0,1,n)},fc=function(t,e,n){return zn(n,function(i){return t[~~e(i)]})},ef=function s(t,e,n){var i=e-t;return we(t)?fc(t,s(0,t.length),e):zn(n,function(r){return(i+(r-t)%i)%i+t})},nf=function s(t,e,n){var i=e-t,r=i*2;return we(t)?fc(t,s(0,t.length-1),e):zn(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Pr=function(t){for(var e=0,n="",i,r,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(o?ql:Da),n+=t.substr(e,i-e)+dc(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},pc=function(t,e,n,i,r){var a=e-t,o=i-n;return zn(r,function(l){return n+((l-t)/a*o||0)})},rf=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var a=pe(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(we(t)&&!we(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=hi(we(t)?[]:{},t));if(!h){for(l in e)Ja.call(o,t,l,"get",e[l]);r=function(_){return eo(_,o)||(a?t.p:t)}}}return zn(n,r)},mc=function(t,e,n){var i=t.labels,r=je,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Qe=function(t,e,n){var i=t.vars,r=i[e],a=oe,o=t._ctx,l,c,h;if(!!r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Bn.length&&ws(),o&&(oe=o),h=l?r.apply(c,l):r.call(c),oe=a,h},Dr=function(t){return On(t),t.scrollTrigger&&t.scrollTrigger.kill(!!be),t.progress()<1&&Qe(t,"onInterrupt"),t},Ii,sf=function(t){t=!t.name&&t.default||t;var e=t.name,n=re(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Ar,render:eo,add:Ja,kill:Mf,modifier:yf,rawVars:0},a={targetTest:0,get:0,getSetter:to,aliases:{},register:0};if(Fi(),t!==i){if(Ve[e])return;Je(i,Je(Ss(t,r),a)),hi(i.prototype,hi(r,Ss(t,a))),Ve[i.prop=e]=i,t.targetTest&&(bs.push(i),Oa[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}jl(e,i),t.register&&t.register(Ge,i,Fe)},qt=255,Ir={aqua:[0,qt,qt],lime:[0,qt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qt],navy:[0,0,128],white:[qt,qt,qt],olive:[128,128,0],yellow:[qt,qt,0],orange:[qt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qt,0,0],pink:[qt,192,203],cyan:[0,qt,qt],transparent:[qt,qt,qt,0]},Ya=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*qt+.5|0},gc=function(t,e,n){var i=t?Tn(t)?[t>>16,t>>8&qt,t&qt]:0:Ir.black,r,a,o,l,c,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ir[t])i=Ir[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&qt,i&qt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&qt,t&qt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Da),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=Ya(l+1/3,r,a),i[1]=Ya(l,r,a),i[2]=Ya(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Gl),n&&i.length<4&&(i[3]=1),i}else i=t.match(Da)||Ir.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/qt,a=i[1]/qt,o=i[2]/qt,u=Math.max(r,a,o),d=Math.min(r,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(a-o)/f+(a<o?6:0):u===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},_c=function(t){var e=[],n=[],i=-1;return t.split(Un).forEach(function(r){var a=r.match(Ri)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},xc=function(t,e,n){var i="",r=(t+i).match(Un),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=gc(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=_c(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Un,"1").split(Ri),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Un),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},Un=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ir)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),af=/hsl[a]?\(/,vc=function(t){var e=t.join(" "),n;if(Un.lastIndex=0,Un.test(e))return n=af.test(e),t[1]=xc(t[1],n),t[0]=xc(t[0],n,_c(t[1])),!0},Fr,He=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,d,f,_=function g(x){var m=s()-i,p=x===!0,b,v,M,E;if(m>t&&(n+=m-e),i+=m,M=i-n,b=M-a,(b>0||p)&&(E=++u.frame,d=M-u.time*1e3,u.time=M=M/1e3,a+=b+(b>=r?4:r-b),v=1),p||(l=c(g)),v)for(f=0;f<o.length;f++)o[f](M,d,E,x)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(x){return d/(1e3/(x||60))},wake:function(){Xl&&(!Fa&&Vl()&&(Ze=Fa=window,Na=Ze.document||{},ke.gsap=Ge,(Ze.gsapVersions||(Ze.gsapVersions=[])).push(Ge.version),Yl(vs||Ze.GreenSockGlobals||!Ze.gsap&&Ze||{}),h=Ze.requestAnimationFrame),l&&u.sleep(),c=h||function(x){return setTimeout(x,a-u.time*1e3+1|0)},Fr=1,_(2))},sleep:function(){(h?Ze.cancelAnimationFrame:clearTimeout)(l),Fr=0,c=Ar},lagSmoothing:function(x,m){t=x||1/0,e=Math.min(m||33,t)},fps:function(x){r=1e3/(x||240),a=u.time*1e3+r},add:function(x,m,p){var b=m?function(v,M,E,A){x(v,M,E,A),u.remove(b)}:x;return u.remove(x),o[p?"unshift":"push"](b),Fi(),b},remove:function(x,m){~(m=o.indexOf(x))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},u}(),Fi=function(){return!Fr&&He.wake()},It={},of=/^[\d.\-M][\d.\-,\s]/,lf=/["']/g,cf=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(lf,"").trim():+c,i=l.substr(o+1).trim();return e},hf=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},uf=function(t){var e=(t+"").split("("),n=It[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[cf(e[1])]:hf(t).split(",").map(Ql)):It._CE&&of.test(t)?It._CE("",t):n},yc=function(t){return function(e){return 1-t(1-e)}},Mc=function s(t,e){for(var n=t._first,i;n;)n instanceof Ie?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},di=function(t,e){return t&&(re(t)?t:It[t]||uf(t))||e},fi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return De(t,function(o){It[o]=ke[o]=r,It[a=o.toLowerCase()]=n;for(var l in r)It[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=It[o+"."+l]=r[l]}),r},bc=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ja=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/La*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Od((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:bc(o);return r=La/r,l.config=function(c,h){return s(t,c,h)},l},Za=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:bc(n);return i.config=function(r){return s(t,r)},i};De("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;fi(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});It.Linear.easeNone=It.none=It.Linear.easeIn;fi("Elastic",ja("in"),ja("out"),ja());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};fi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);fi("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});fi("Circ",function(s){return-(kl(1-s*s)-1)});fi("Sine",function(s){return s===1?1:-Bd(s*Fd)+1});fi("Back",Za("in"),Za("out"),Za());It.SteppedEase=It.steps=ke.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-Wt;return function(o){return((i*Lr(0,a,o)|0)+r)*n}}};Ci.ease=It["quad.out"];De("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return ka+=s+","+s+"Params,"});var wc=function(t,e){this.id=Nd++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:$l,this.set=e?e.getSetter:to},Ni=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Di(this,+e.duration,1,1),this.data=e.data,oe&&(this._ctx=oe,oe.data.push(this)),Fr||He.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Di(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Fi(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Cs(this,n),!r._dp||r.parent||rc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Wt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Kl(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ic(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ic(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Pi(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Wt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Es(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Wt?0:this._rts,this.totalTime(Lr(-this._delay,this._tDur,i),!0),As(this),Wd(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fi(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Wt&&(this._tTime-=Wt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Pe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Es(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=kd);var i=be;return be=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),be=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,oc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,oc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime($e(this,n),Pe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pe(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Wt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Wt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Wt)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=re(n)?n:tc,o=function(){var c=i.then;i.then=null,re(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Dr(this)},s}();Je(Ni.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Wt,_prom:0,_ps:!1,_rts:1});var Ie=function(s){Ul(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Pe(n.sortChildren),Qt&&mn(n.parent||Qt,Sn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&sc(Sn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Rr(0,arguments,this),this},e.from=function(i,r,a){return Rr(1,arguments,this),this},e.fromTo=function(i,r,a,o){return Rr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Cr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new he(i,r,$e(this,a),1),this},e.call=function(i,r,a){return mn(this,he.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new he(i,a,$e(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Cr(a).immediateRender=Pe(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,Cr(o).immediateRender=Pe(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:xe(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,x,m,p,b,v,M,E,A;if(this!==Qt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,v=this._start,b=this._ts,m=!b,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,x=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(x*100+i,r,a);if(d=xe(h%x),h===l?(g=this._repeat,d=c):(g=~~(h/x),g&&g===h/x&&(d=c,g--),d>c&&(d=c)),M=Pi(this._tTime,x),!o&&this._tTime&&M!==g&&(M=g),E&&g&1&&(d=c-d,A=1),g!==M&&!this._lock){var P=E&&M&1,O=P===(E&&g&1);if(g<M&&(P=!P),o=P?0:c,this._lock=1,this.render(o||(A?0:xe(g*x)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Qe(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,O&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Mc(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(p=jd(this,xe(o),xe(d)),p&&(h-=d-(d=p._start))),this._tTime=h,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!r&&(Qe(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&p!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,a),d!==this._time||!this._ts&&!m){p=0,_&&(h+=this._zTime=-Wt);break}}f=_}else{f=this._last;for(var H=i<0?i:d;f;){if(_=f._prev,(f._act||H<=f._end)&&f._ts&&p!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(H-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(H-f._start)*f._ts,r,a||be&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){p=0,_&&(h+=this._zTime=H?-Wt:Wt);break}}f=_}}if(p&&!r&&(this.pause(),p.render(d>=o?0:-Wt)._zTime=d>=o?1:-1,this._ts))return this._start=v,As(this),this.render(i,r,a);this._onUpdate&&!r&&Qe(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&On(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(Qe(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Tn(r)||(r=$e(this,r,i)),!(i instanceof Ni)){if(we(i))return i.forEach(function(o){return a.add(o,r)}),this;if(pe(i))return this.addLabel(i,r);if(re(i))i=he.delayedCall(0,i);else return this}return this!==i?mn(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-je);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof he?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return pe(i)?this.removeLabel(i):re(i)?this.killTweensOf(i):(Ts(this,i),i===this._recent&&(this._recent=this._last),ui(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xe(He.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=$e(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=he.delayedCall(0,r||Ar,a);return o.data="isPause",this._hasPause=1,mn(this,o,$e(this,i))},e.removePause=function(i){var r=this._first;for(i=$e(this,i);r;)r._start===i&&r.data==="isPause"&&On(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)kn!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Ke(i),l=this._first,c=Tn(r),h;l;)l instanceof he?Vd(l._targets,o)&&(c?(!kn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=$e(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=he.to(a,Je({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Wt,onStart:function(){if(a.pause(),!f){var x=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==x&&Di(_,x,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,Je({startAt:{time:$e(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),mc(this,$e(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),mc(this,$e(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Wt)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return ui(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ui(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=je,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,mn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Di(a,a===Qt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Qt._ts&&(Kl(Qt,Es(i,Qt)),Zl=He.frame),He.frame>=Jl){Jl+=Ue.autoSleep||120;var r=Qt._first;if((!r||!r._ts)&&Ue.autoSleep&&He._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||He.sleep()}}},t}(Ni);Je(Ie.prototype,{_lock:0,_hasPause:0,_forcing:0});var df=function(t,e,n,i,r,a,o){var l=new Fe(this._pt,t,e,0,1,Rc,null,r),c=0,h=0,u,d,f,_,g,x,m,p;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Pr(i)),a&&(p=[n,i],a(p,t,e),n=p[0],i=p[1]),d=n.match(Ia)||[];u=Ia.exec(i);)_=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(x=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:x,c:_.charAt(1)==="="?Li(x,_)-x:parseFloat(_)-x,m:f&&f<4?Math.round:0},c=Ia.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Wl.test(i)||m)&&(l.e=0),this._pt=l,l},Ja=function(t,e,n,i,r,a,o,l,c,h){re(i)&&(i=i(r||0,t,a));var u=t[e],d=n!=="get"?n:re(u)?c?t[e.indexOf("set")||!re(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=re(u)?c?_f:Ac:Qa,_;if(pe(i)&&(~i.indexOf("random(")&&(i=Pr(i)),i.charAt(1)==="="&&(_=Li(d,i)+(Se(d)||0),(_||_===0)&&(i=_))),!h||d!==i||$a)return!isNaN(d*i)&&i!==""?(_=new Fe(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?vf:Cc,0,f),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&Ba(e,i),df.call(this,t,e,d,i,f,l||Ue.stringFilter,c))},ff=function(t,e,n,i,r){if(re(t)&&(t=Nr(t,r,e,n,i)),!pn(t)||t.style&&t.nodeType||we(t)||Hl(t))return pe(t)?Nr(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=Nr(t[o],r,e,n,i);return a},Sc=function(t,e,n,i,r,a){var o,l,c,h;if(Ve[t]&&(o=new Ve[t]).init(r,o.rawVars?e[t]:ff(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Fe(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==Ii))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},kn,$a,Ka=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,u=i.callbackScope,d=i.runBackwards,f=i.yoyoEase,_=i.keyframes,g=i.autoRevert,x=t._dur,m=t._startAt,p=t._targets,b=t.parent,v=b&&b.data==="nested"?b.vars.targets:p,M=t._overwrite==="auto"&&!Ra,E=t.timeline,A,P,O,H,y,R,D,N,F,I,U,j,st;if(E&&(!_||!r)&&(r="none"),t._ease=di(r,Ci.ease),t._yEase=f?yc(di(f===!0?r:f,Ci.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!E&&!!i.runBackwards,!E||_&&!i.stagger){if(N=p[0]?ci(p[0]).harness:0,j=N&&i[N.prop],A=Ss(i,Oa),m&&(m._zTime<0&&m.progress(1),e<0&&d&&o&&!g?m.render(-1,!0):m.revert(d&&x?Ms:Ud),m._lazy=0),a){if(On(t._startAt=he.set(p,Je({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:!m&&Pe(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:u,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(be||!o&&!g)&&t._startAt.revert(Ms),o&&x&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(d&&x&&!m){if(e&&(o=!1),O=Je({overwrite:!1,data:"isFromStart",lazy:o&&!m&&Pe(l),immediateRender:o,stagger:0,parent:b},A),j&&(O[N.prop]=j),On(t._startAt=he.set(p,O)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(be?t._startAt.revert(Ms):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,Wt,Wt);else if(!e)return}for(t._pt=t._ptCache=0,l=x&&Pe(l)||l&&!x,P=0;P<p.length;P++){if(y=p[P],D=y._gsap||Va(p)[P]._gsap,t._ptLookup[P]=I={},za[D.id]&&Bn.length&&ws(),U=v===p?P:v.indexOf(y),N&&(F=new N).init(y,j||A,t,U,v)!==!1&&(t._pt=H=new Fe(t._pt,y,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(G){I[G]=H}),F.priority&&(R=1)),!N||j)for(O in A)Ve[O]&&(F=Sc(O,A,t,U,y,v))?F.priority&&(R=1):I[O]=H=Ja.call(t,y,O,"get",A[O],U,v,0,i.stringFilter);t._op&&t._op[P]&&t.kill(y,t._op[P]),M&&t._pt&&(kn=t,Qt.killTweensOf(y,I,t.globalTime(e)),st=!t.parent,kn=0),t._pt&&l&&(za[D.id]=1)}R&&Lc(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!st,_&&e<=0&&E.render(je,!0,!0)},pf=function(t,e,n,i,r,a,o){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,u,d;if(!l)for(l=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(c=u[d][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return $a=1,t.vars[e]="+=0",Ka(t,o),$a=0,1;l.push(c)}for(d=l.length;d--;)h=l[d],c=h._pt||h,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,h.e&&(h.e=se(n)+Se(h.e)),h.b&&(h.b=c.s+Se(h.b))},mf=function(t,e){var n=t[0]?ci(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=hi({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},gf=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(we(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Nr=function(t,e,n,i,r){return re(t)?t.call(e,n,i,r):pe(t)&&~t.indexOf("random(")?Pr(t):t},Tc=ka+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ec={};De(Tc+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Ec[s]=1});var he=function(s){Ul(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Cr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,x=l.scrollTrigger,m=l.yoyoEase,p=i.parent||Qt,b=(we(n)||Hl(n)?Tn(n[0]):"length"in i)?[n]:Ke(n),v,M,E,A,P,O,H,y;if(o._targets=b.length?Va(b):ys("GSAP target "+n+" not found. https://greensock.com",!Ue.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||xs(c)||xs(h)){if(i=o.vars,v=o.timeline=new Ie({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:b}),v.kill(),v.parent=v._dp=Sn(o),v._start=0,d||xs(c)||xs(h)){if(A=b.length,H=d&&hc(d),pn(d))for(P in d)~Tc.indexOf(P)&&(y||(y={}),y[P]=d[P]);for(M=0;M<A;M++)E=Ss(i,Ec),E.stagger=0,m&&(E.yoyoEase=m),y&&hi(E,y),O=b[M],E.duration=+Nr(c,Sn(o),M,O,b),E.delay=(+Nr(h,Sn(o),M,O,b)||0)-o._delay,!d&&A===1&&E.delay&&(o._delay=h=E.delay,o._start+=h,E.delay=0),v.to(O,E,H?H(M,O,b):0),v._ease=It.none;v.duration()?c=h=0:o.timeline=0}else if(_){Cr(Je(v.vars.defaults,{ease:"none"})),v._ease=di(_.ease||i.ease||"none");var R=0,D,N,F;if(we(_))_.forEach(function(I){return v.to(b,I,">")}),v.duration();else{E={};for(P in _)P==="ease"||P==="easeEach"||gf(P,_[P],E,_.easeEach);for(P in E)for(D=E[P].sort(function(I,U){return I.t-U.t}),R=0,M=0;M<D.length;M++)N=D[M],F={ease:N.e,duration:(N.t-(M?D[M-1].t:0))/100*c},F[P]=N.v,v.to(b,F,R),R+=F.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return f===!0&&!Ra&&(kn=Sn(o),Qt.killTweensOf(b),kn=0),mn(p,Sn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===xe(p._time)&&Pe(u)&&qd(Sn(o))&&p.data!=="nested")&&(o._tTime=-Wt,o.render(Math.max(0,-h)||0)),x&&sc(Sn(o),x),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Wt&&!h?l:i<Wt?0:i,d,f,_,g,x,m,p,b,v;if(!c)Yd(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(d=xe(u%g),u===l?(_=this._repeat,d=c):(_=~~(u/g),_&&_===u/g&&(d=c,_--),d>c&&(d=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,d=c-d),x=Pi(this._tTime,g),d===o&&!a&&this._initted)return this._tTime=u,this;_!==x&&(b&&this._yEase&&Mc(b,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=a=1,this.render(xe(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(ac(this,h?i:d,a,r,u))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=p=(v||this._ease)(d/c),this._from&&(this.ratio=p=1-p),d&&!o&&!r&&(Qe(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(p,f.d),f=f._next;b&&b.render(i<0?i:!d&&m?-Wt:b._dur*b._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Ha(this,i,r,a),Qe(this,"onUpdate")),this._repeat&&_!==x&&this.vars.onRepeat&&!r&&this.parent&&Qe(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Ha(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&On(this,1),!r&&!(h&&!o)&&(u||o||m)&&(Qe(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o){Fr||He.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Ka(this,l),c=this._ease(l/this._dur),pf(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(Cs(this,0),this.parent||nc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Dr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,kn&&kn.vars.overwrite!==!0)._first||Dr(this),this.parent&&a!==this.timeline.totalDuration()&&Di(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ke(i):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,x,m;if((!r||r==="all")&&Gd(o,l))return r==="all"&&(this._pt=0),Dr(this);for(u=this._op=this._op||[],r!=="all"&&(pe(r)&&(g={},De(r,function(p){return g[p]=1}),r=g),r=mf(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){d=c[m],r==="all"?(u[m]=r,_=d,f={}):(f=u[m]=u[m]||{},_=r);for(g in _)x=d&&d[g],x&&((!("kill"in x.d)||x.d.kill(g)===!0)&&Ts(this,x,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Dr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Rr(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return Rr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Qt.killTweensOf(i,r,a)},t}(Ni);Je(he.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});De("staggerTo,staggerFrom,staggerFromTo",function(s){he[s]=function(){var t=new Ie,e=Wa.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Qa=function(t,e,n){return t[e]=n},Ac=function(t,e,n){return t[e](n)},_f=function(t,e,n,i){return t[e](i.fp,n)},xf=function(t,e,n){return t.setAttribute(e,n)},to=function(t,e){return re(t[e])?Ac:Pa(t[e])&&t.setAttribute?xf:Qa},Cc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},vf=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Rc=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},eo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},yf=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},Mf=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ts(this,e,"_pt"):e.dep||(n=1),e=i;return!n},bf=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Lc=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Fe=function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Cc,this.d=l||this,this.set=c||Qa,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=bf,this.m=n,this.mt=r,this.tween=i},s}();De(ka+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Oa[s]=1});ke.TweenMax=ke.TweenLite=he;ke.TimelineLite=ke.TimelineMax=Ie;Qt=new Ie({sortChildren:!1,defaults:Ci,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ue.stringFilter=vc;var Bi=[],Rs={},wf=[],Pc=0,no=function(t){return(Rs[t]||wf).map(function(e){return e()})},io=function(){var t=Date.now(),e=[];t-Pc>2&&(no("matchMediaInit"),Bi.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Ze.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),no("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Pc=t,no("matchMedia"))},Dc=function(){function s(e,n){this.selector=n&&qa(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){re(n)&&(r=i,i=n,n=re);var a=this,o=function(){var c=oe,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=qa(r)),oe=a,u=i.apply(a,arguments),re(u)&&a._r.push(u),oe=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===re?o(a):n?a[n]=o:o},t.ignore=function(n){var i=oe;oe=null,n(this),oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof he&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Ni)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=Bi.indexOf(this);!!~o&&Bi.splice(o,1)}},t.revert=function(n){this.kill(n||{})},s}(),Sf=function(){function s(e){this.contexts=[],this.scope=e}var t=s.prototype;return t.add=function(n,i,r){pn(n)||(n={matches:n});var a=new Dc(0,r||this.scope),o=a.conditions={},l,c,h;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Ze.matchMedia(n[c]),l&&(Bi.indexOf(a)<0&&Bi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(io):l.addEventListener("change",io)));return h&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Ls={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return sf(i)})},timeline:function(t){return new Ie(t)},getTweensOf:function(t,e){return Qt.getTweensOf(t,e)},getProperty:function(t,e,n,i){pe(t)&&(t=Ke(t)[0]);var r=ci(t||{}).get,a=n?tc:Ql;return n==="native"&&(n=""),t&&(e?a((Ve[e]&&Ve[e].get||r)(t,e,n,i)):function(o,l,c){return a((Ve[o]&&Ve[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Ke(t),t.length>1){var i=t.map(function(h){return Ge.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var a=Ve[e],o=ci(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;Ii._pt=0,u.init(t,n?h+n:h,Ii,0,[t]),u.render(1,u),Ii._pt&&eo(1,Ii)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=Ge.to(t,hi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return Qt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=di(t.ease,Ci.ease)),ec(Ci,t||{})},config:function(t){return ec(Ue,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Ve[o]&&!ke[o]&&ys(e+" effect requires "+o+" plugin.")}),Ua[e]=function(o,l,c){return n(Ke(o),Je(l||{},r),c)},a&&(Ie.prototype[e]=function(o,l,c){return this.add(Ua[e](o,pn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){It[t]=di(e)},parseEase:function(t,e){return arguments.length?di(t,e):It},getById:function(t){return Qt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ie(t),i,r;for(n.smoothChildTiming=Pe(t.smoothChildTiming),Qt.remove(n),n._dp=0,n._time=n._tTime=Qt._time,i=Qt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof he&&i.vars.onComplete===i._targets[0]))&&mn(n,i,i._start-i._delay),i=r;return mn(Qt,n,0),n},context:function(t,e){return t?new Dc(t,e):oe},matchMedia:function(t){return new Sf(t)},matchMediaRefresh:function(){return Bi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||io()},addEventListener:function(t,e){var n=Rs[t]||(Rs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Rs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:ef,wrapYoyo:nf,distribute:hc,random:dc,snap:uc,normalize:tf,getUnit:Se,clamp:Jd,splitColor:gc,toArray:Ke,selector:qa,mapRange:pc,pipe:Kd,unitize:Qd,interpolate:rf,shuffle:cc},install:Yl,effects:Ua,ticker:He,updateRoot:Ie.updateRoot,plugins:Ve,globalTimeline:Qt,core:{PropTween:Fe,globals:jl,Tween:he,Timeline:Ie,Animation:Ni,getCache:ci,_removeLinkedListItem:Ts,reverting:function(){return be},context:function(t){return t&&oe&&(oe.data.push(t),t._ctx=oe),oe},suppressOverwrites:function(t){return Ra=t}}};De("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ls[s]=he[s]});He.add(Ie.updateRoot);Ii=Ls.to({},{duration:0});var Tf=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Ef=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Tf(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},ro=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(pe(r)&&(l={},De(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Ef(o,r)}}}},Ge=Ls.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)be?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ro("roundProps",Xa),ro("modifiers"),ro("snap",uc))||Ls;he.version=Ie.version=Ge.version="3.11.4";Xl=1;Vl()&&Fi();It.Power0;It.Power1;It.Power2;It.Power3;It.Power4;It.Linear;It.Quad;It.Cubic;It.Quart;It.Quint;It.Strong;It.Elastic;It.Back;It.SteppedEase;It.Bounce;It.Sine;It.Expo;It.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ic,Vn,Oi,so,pi,Fc,ao,Af=function(){return typeof window!="undefined"},En={},mi=180/Math.PI,zi=Math.PI/180,Ui=Math.atan2,Nc=1e8,oo=/([A-Z])/g,Cf=/(left|right|width|margin|padding|x)/i,Rf=/[\s,\(]\S/,An={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Lf=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Pf=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Df=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Bc=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Oc=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},If=function(t,e,n){return t.style[e]=n},Ff=function(t,e,n){return t.style.setProperty(e,n)},Nf=function(t,e,n){return t._gsap[e]=n},Bf=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Of=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},zf=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},te="transform",sn=te+"Origin",Uf=function(t,e){var n=this,i=this.target,r=i.style;if(t in En){if(this.tfm=this.tfm||{},t!=="transform"&&(t=An[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Cn(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Cn(i,t)),this.props.indexOf(te)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(sn,e,"")),t=te}(r||e)&&this.props.push(t,e,r[t])},zc=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},kf=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].replace(oo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=ao(),r&&!r.isStart&&!n[te]&&(zc(n),i.uncache=1)}},Uc=function(t,e){var n={target:t,props:[],revert:kf,save:Uf};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},kc,co=function(t,e){var n=Vn.createElementNS?Vn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Vn.createElement(t);return n.style?n:Vn.createElement(t)},gn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(oo,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,ki(e)||e,1)||""},Vc="O,Moz,ms,Ms,Webkit".split(","),ki=function(t,e,n){var i=e||pi,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Vc[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Vc[a]:"")+t},ho=function(){Af()&&window.document&&(Ic=window,Vn=Ic.document,Oi=Vn.documentElement,pi=co("div")||{style:{}},co("div"),te=ki(te),sn=te+"Origin",pi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kc=!!ki("perspective"),ao=Ge.core.reverting,so=1)},uo=function s(t){var e=co("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Oi.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Oi.removeChild(e),this.style.cssText=r,a},Hc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Gc=function(t){var e;try{e=t.getBBox()}catch{e=uo.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===uo||(e=uo.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Hc(t,["x","cx","x1"])||0,y:+Hc(t,["y","cy","y1"])||0,width:0,height:0}:e},Wc=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Gc(t))},Br=function(t,e){if(e){var n=t.style;e in En&&e!==sn&&(e=te),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(oo,"-$1").toLowerCase())):n.removeAttribute(e)}},Hn=function(t,e,n,i,r,a){var o=new Fe(t._pt,e,n,0,1,a?Oc:Bc);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},qc={deg:1,rad:1,turn:1},Vf={grid:1,flex:1},Gn=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=pi.style,l=Cf.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,x,m;return i===a||!r||qc[i]||qc[a]?r:(a!=="px"&&!d&&(r=s(t,e,n,"px")),m=t.getCTM&&Wc(t),(f||a==="%")&&(En[e]||~e.indexOf("adius"))?(_=m?t.getBBox()[l?"width":"height"]:t[h],se(f?r/_*u:r/100*_)):(o[l?"width":"height"]=u+(d?a:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Vn||!g.appendChild)&&(g=Vn.body),x=g._gsap,x&&f&&x.width&&l&&x.time===He.time&&!x.uncache?se(r/x.width*u):((f||a==="%")&&!Vf[gn(g,"display")]&&(o.position=gn(t,"position")),g===t&&(o.position="static"),g.appendChild(pi),_=pi[h],g.removeChild(pi),o.position="absolute",l&&f&&(x=ci(g),x.time=He.time,x.width=g[h]),se(d?_*r/u:_&&r?u/_*r:0))))},Cn=function(t,e,n,i){var r;return so||ho(),e in An&&e!=="transform"&&(e=An[e],~e.indexOf(",")&&(e=e.split(",")[0])),En[e]&&e!=="transform"?(r=zr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ds(gn(t,sn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ps[e]&&Ps[e](t,e,n)||gn(t,e)||$l(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Gn(t,e,r,n)+n:r},Hf=function(t,e,n,i){if(!n||n==="none"){var r=ki(e,t,1),a=r&&gn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=gn(t,"borderTopColor"))}var o=new Fe(this._pt,t.style,e,0,1,Rc),l=0,c=0,h,u,d,f,_,g,x,m,p,b,v,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=gn(t,e)||i,t.style[e]=n),h=[n,i],vc(h),n=h[0],i=h[1],d=n.match(Ri)||[],M=i.match(Ri)||[],M.length){for(;u=Ri.exec(i);)x=u[0],p=i.substring(l,u.index),_?_=(_+1)%5:(p.substr(-5)==="rgba("||p.substr(-5)==="hsla(")&&(_=1),x!==(g=d[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),x.charAt(1)==="="&&(x=Li(f,x)+v),m=parseFloat(x),b=x.substr((m+"").length),l=Ri.lastIndex-b.length,b||(b=b||Ue.units[e]||v,l===i.length&&(i+=b,o.e+=b)),v!==b&&(f=Gn(t,e,g,b)||0),o._pt={_next:o._pt,p:p||c===1?p:",",s:f,c:m-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Oc:Bc;return Wl.test(i)&&(o.e=0),this._pt=o,o},Xc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gf=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Xc[n]||n,e[1]=Xc[i]||i,e.join(" ")},Wf=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],En[o]&&(l=1,o=o==="transformOrigin"?sn:te),Br(n,o);l&&(Br(n,te),a&&(a.svg&&n.removeAttribute("transform"),zr(n,1),a.uncache=1,zc(i)))}},Ps={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Fe(t._pt,e,n,0,0,Wf);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Or=[1,0,0,1,0,0],Yc={},jc=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Zc=function(t){var e=gn(t,te);return jc(e)?Or:e.substr(7).match(Gl).map(se)},fo=function(t,e){var n=t._gsap||ci(t),i=t.style,r=Zc(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Or:r):(r===Or&&!t.offsetParent&&t!==Oi&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,Oi.appendChild(t)),r=Zc(t),l?i.display=l:Br(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Oi.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},po=function(t,e,n,i,r,a){var o=t._gsap,l=r||fo(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],x=l[3],m=l[4],p=l[5],b=e.split(" "),v=parseFloat(b[0])||0,M=parseFloat(b[1])||0,E,A,P,O;n?l!==Or&&(A=f*x-_*g)&&(P=v*(x/A)+M*(-g/A)+(g*p-x*m)/A,O=v*(-_/A)+M*(f/A)-(f*p-_*m)/A,v=P,M=O):(E=Gc(t),v=E.x+(~b[0].indexOf("%")?v/100*E.width:v),M=E.y+(~(b[1]||b[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&o.smooth?(m=v-c,p=M-h,o.xOffset=u+(m*f+p*g)-m,o.yOffset=d+(m*_+p*x)-p):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=M,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[sn]="0px 0px",a&&(Hn(a,o,"xOrigin",c,v),Hn(a,o,"yOrigin",h,M),Hn(a,o,"xOffset",u,o.xOffset),Hn(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+M)},zr=function(t,e){var n=t._gsap||new wc(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=gn(t,sn)||"0",h,u,d,f,_,g,x,m,p,b,v,M,E,A,P,O,H,y,R,D,N,F,I,U,j,st,G,X,Q,ut,lt,k;return h=u=d=g=x=m=p=b=v=0,f=_=1,n.svg=!!(t.getCTM&&Wc(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[te]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[te]!=="none"?l[te]:"")),i.scale=i.rotate=i.translate="none"),A=fo(t,n.svg),n.svg&&(n.uncache?(j=t.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),po(t,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,E=n.yOrigin||0,A!==Or&&(y=A[0],R=A[1],D=A[2],N=A[3],h=F=A[4],u=I=A[5],A.length===6?(f=Math.sqrt(y*y+R*R),_=Math.sqrt(N*N+D*D),g=y||R?Ui(R,y)*mi:0,p=D||N?Ui(D,N)*mi+g:0,p&&(_*=Math.abs(Math.cos(p*zi))),n.svg&&(h-=M-(M*y+E*D),u-=E-(M*R+E*N))):(k=A[6],ut=A[7],G=A[8],X=A[9],Q=A[10],lt=A[11],h=A[12],u=A[13],d=A[14],P=Ui(k,Q),x=P*mi,P&&(O=Math.cos(-P),H=Math.sin(-P),U=F*O+G*H,j=I*O+X*H,st=k*O+Q*H,G=F*-H+G*O,X=I*-H+X*O,Q=k*-H+Q*O,lt=ut*-H+lt*O,F=U,I=j,k=st),P=Ui(-D,Q),m=P*mi,P&&(O=Math.cos(-P),H=Math.sin(-P),U=y*O-G*H,j=R*O-X*H,st=D*O-Q*H,lt=N*H+lt*O,y=U,R=j,D=st),P=Ui(R,y),g=P*mi,P&&(O=Math.cos(P),H=Math.sin(P),U=y*O+R*H,j=F*O+I*H,R=R*O-y*H,I=I*O-F*H,y=U,F=j),x&&Math.abs(x)+Math.abs(g)>359.9&&(x=g=0,m=180-m),f=se(Math.sqrt(y*y+R*R+D*D)),_=se(Math.sqrt(I*I+k*k)),P=Ui(F,I),p=Math.abs(P)>2e-4?P*mi:0,v=lt?1/(lt<0?-lt:lt):0),n.svg&&(U=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!jc(gn(t,te)),U&&t.setAttribute("transform",U))),Math.abs(p)>90&&Math.abs(p)<270&&(r?(f*=-1,p+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,p+=p<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=se(f),n.scaleY=se(_),n.rotation=se(g)+o,n.rotationX=se(x)+o,n.rotationY=se(m)+o,n.skewX=p+o,n.skewY=b+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[sn]=Ds(c)),n.xOffset=n.yOffset=0,n.force3D=Ue.force3D,n.renderTransform=n.svg?Xf:kc?Jc:qf,n.uncache=0,n},Ds=function(t){return(t=t.split(" "))[0]+" "+t[1]},mo=function(t,e,n){var i=Se(e);return se(parseFloat(e)+parseFloat(Gn(t,"x",n+"px",i)))+i},qf=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Jc(t,e)},gi="0deg",Ur="0px",_i=") ",Jc=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,x=n.transformPerspective,m=n.force3D,p=n.target,b=n.zOrigin,v="",M=m==="auto"&&t&&t!==1||m===!0;if(b&&(u!==gi||h!==gi)){var E=parseFloat(h)*zi,A=Math.sin(E),P=Math.cos(E),O;E=parseFloat(u)*zi,O=Math.cos(E),a=mo(p,a,A*O*-b),o=mo(p,o,-Math.sin(E)*-b),l=mo(p,l,P*O*-b+b)}x!==Ur&&(v+="perspective("+x+_i),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(M||a!==Ur||o!==Ur||l!==Ur)&&(v+=l!==Ur||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+_i),c!==gi&&(v+="rotate("+c+_i),h!==gi&&(v+="rotateY("+h+_i),u!==gi&&(v+="rotateX("+u+_i),(d!==gi||f!==gi)&&(v+="skew("+d+", "+f+_i),(_!==1||g!==1)&&(v+="scale("+_+", "+g+_i),p.style[te]=v||"translate(0, 0)"},Xf=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,x=n.xOffset,m=n.yOffset,p=n.forceCSS,b=parseFloat(a),v=parseFloat(o),M,E,A,P,O;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=zi,c*=zi,M=Math.cos(l)*u,E=Math.sin(l)*u,A=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(h*=zi,O=Math.tan(c-h),O=Math.sqrt(1+O*O),A*=O,P*=O,h&&(O=Math.tan(h),O=Math.sqrt(1+O*O),M*=O,E*=O)),M=se(M),E=se(E),A=se(A),P=se(P)):(M=u,P=d,E=A=0),(b&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(b=Gn(f,"x",a,"px"),v=Gn(f,"y",o,"px")),(_||g||x||m)&&(b=se(b+_-(_*M+g*A)+x),v=se(v+g-(_*E+g*P)+m)),(i||r)&&(O=f.getBBox(),b=se(b+i/100*O.width),v=se(v+r/100*O.height)),O="matrix("+M+","+E+","+A+","+P+","+b+","+v+")",f.setAttribute("transform",O),p&&(f.style[te]=O)},Yf=function(t,e,n,i,r){var a=360,o=pe(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?mi:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Nc)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Nc)%a-~~(c/a)*a)),t._pt=d=new Fe(t._pt,e,n,i,c,Lf),d.e=h,d.u="deg",t._props.push(n),d},$c=function(t,e){for(var n in e)t[n]=e[n];return t},jf=function(t,e,n){var i=$c({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[te]=e,o=zr(n,1),Br(n,te),n.setAttribute("transform",c)):(c=getComputedStyle(n)[te],a[te]=e,o=zr(n,1),a[te]=c);for(l in En)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=Se(c),_=Se(h),u=f!==_?Gn(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new Fe(t._pt,o,l,u,d-u,lo),t._pt.u=_||0,t._props.push(l));$c(o,i)};De("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});Ps[t>1?"border"+s:s]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return Cn(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var Kc={name:"css",register:ho,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,f,_,g,x,m,p,b,v,M,E,A,P;so||ho(),this.styles=this.styles||Uc(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Ve[g]&&Sc(g,e,n,i,t,r)))){if(f=typeof h,_=Ps[g],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Pr(h)),_)_(this,t,g,h,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Un.lastIndex=0,Un.test(c)||(x=Se(c),m=Se(h)),m?x!==m&&(c=Gn(t,g,c,m)+m):x&&(h+=x),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),P.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],pe(c)&&~c.indexOf("random(")&&(c=Pr(c)),Se(c+"")||(c+=Ue.units[g]||Se(Cn(t,g))||""),(c+"").charAt(1)==="="&&(c=Cn(t,g))):c=Cn(t,g),d=parseFloat(c),p=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),p&&(h=h.substr(2)),u=parseFloat(h),g in An&&(g==="autoAlpha"&&(d===1&&Cn(t,"visibility")==="hidden"&&u&&(d=0),P.push("visibility",0,o.visibility),Hn(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=An[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in En,b){if(this.styles.save(g),v||(M=t._gsap,M.renderTransform&&!e.parseTransform||zr(t,e.parseTransform),E=e.smoothOrigin!==!1&&M.smooth,v=this._pt=new Fe(this._pt,o,te,0,1,M.renderTransform,M,0,-1),v.dep=1),g==="scale")this._pt=new Fe(this._pt,M,"scaleY",M.scaleY,(p?Li(M.scaleY,p+u):u)-M.scaleY||0,lo),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(sn,0,o[sn]),h=Gf(h),M.svg?po(t,h,0,E,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==M.zOrigin&&Hn(this,M,"zOrigin",M.zOrigin,m),Hn(this,o,g,Ds(c),Ds(h)));continue}else if(g==="svgOrigin"){po(t,h,1,E,0,this);continue}else if(g in Yc){Yf(this,M,g,d,p?Li(d,p+h):h);continue}else if(g==="smoothOrigin"){Hn(this,M,"smooth",M.smooth,h);continue}else if(g==="force3D"){M[g]=h;continue}else if(g==="transform"){jf(this,h,t);continue}}else g in o||(g=ki(g)||g);if(b||(u||u===0)&&(d||d===0)&&!Rf.test(h)&&g in o)x=(c+"").substr((d+"").length),u||(u=0),m=Se(h)||(g in Ue.units?Ue.units[g]:x),x!==m&&(d=Gn(t,g,c,m)),this._pt=new Fe(this._pt,b?M:o,g,d,(p?Li(d,p+u):u)-d,!b&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?Df:lo),this._pt.u=m||0,x!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Pf);else if(g in o)Hf.call(this,t,g,c,p?p+h:h);else if(g in t)this.add(t,g,c||t[g],p?p+h:h,i,r);else if(g!=="parseTransform"){Ba(g,h);continue}b||(g in o?P.push(g,0,o[g]):P.push(g,1,c||t[g])),a.push(g)}}A&&Lc(this)},render:function(t,e){if(e.tween._time||!ao())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Cn,aliases:An,getSetter:function(t,e,n){var i=An[e];return i&&i.indexOf(",")<0&&(e=i),e in En&&e!==sn&&(t._gsap.x||Cn(t,"x"))?n&&Fc===n?e==="scale"?Bf:Nf:(Fc=n||{})&&(e==="scale"?Of:zf):t.style&&!Pa(t.style[e])?If:~e.indexOf("-")?Ff:to(t,e)},core:{_removeProperty:Br,_getMatrix:fo}};Ge.utils.checkPrefix=ki;Ge.core.getStyleSaver=Uc;(function(s,t,e,n){var i=De(s+","+t+","+e,function(r){En[r]=1});De(t,function(r){Ue.units[r]="deg",Yc[r]=1}),An[i[13]]=s+","+t,De(n,function(r){var a=r.split(":");An[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");De("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ue.units[s]="px"});Ge.registerPlugin(Kc);var Zf=Ge.registerPlugin(Kc)||Ge;Zf.core.Tween;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const go="137",Jf=0,Qc=1,$f=2,th=1,Kf=2,kr=3,Vr=0,ue=1,Vi=2,eh=1,Wn=0,Hr=1,nh=2,ih=3,rh=4,Qf=5,Hi=100,tp=101,ep=102,sh=103,ah=104,np=200,ip=201,rp=202,sp=203,oh=204,lh=205,ap=206,op=207,lp=208,cp=209,hp=210,up=0,dp=1,fp=2,_o=3,pp=4,mp=5,gp=6,_p=7,Is=0,xp=1,vp=2,qn=0,yp=1,Mp=2,bp=3,wp=4,Sp=5,ch=300,Gr=301,Wr=302,xo=303,vo=304,Fs=306,yo=307,Mo=1e3,We=1001,bo=1002,de=1003,hh=1004,uh=1005,Te=1006,Tp=1007,Ns=1008,Xn=1009,Ep=1010,Ap=1011,qr=1012,Cp=1013,Bs=1014,xi=1015,Gi=1016,Rp=1017,Lp=1018,Wi=1020,Pp=1021,Dp=1022,Re=1023,Ip=1024,Fp=1025,vi=1026,qi=1027,Np=1028,Bp=1029,Op=1030,zp=1031,Up=1033,wo=33776,So=33777,To=33778,Eo=33779,dh=35840,fh=35841,ph=35842,mh=35843,kp=36196,gh=37492,_h=37496,xh=37808,vh=37809,yh=37810,Mh=37811,bh=37812,wh=37813,Sh=37814,Th=37815,Eh=37816,Ah=37817,Ch=37818,Rh=37819,Lh=37820,Ph=37821,Dh=36492,Vp=2200,Hp=2201,Gp=2202,Os=2300,zs=2301,Ao=2302,Xi=2400,Yi=2401,Us=2402,Co=2500,Ih=2501,Wp=0,Yn=3e3,Zt=3001,qp=3200,Xp=3201,ji=0,Yp=1,Ro=7680,jp=519,Xr=35044,ks=35048,Fh="300 es",Lo=1035;class yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ve=[];for(let s=0;s<256;s++)ve[s]=(s<16?"0":"")+s.toString(16);const Po=Math.PI/180,Do=180/Math.PI;function _n(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[s&255]+ve[s>>8&255]+ve[s>>16&255]+ve[s>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toUpperCase()}function qe(s,t,e){return Math.max(t,Math.min(e,s))}function Zp(s,t){return(s%t+t)%t}function Io(s,t,e){return(1-e)*s+e*t}function Nh(s){return(s&s-1)==0&&s!==0}function Jp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class ${constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}$.prototype.isVector2=!0;class ye{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],x=i[3],m=i[6],p=i[1],b=i[4],v=i[7],M=i[2],E=i[5],A=i[8];return r[0]=a*g+o*p+l*M,r[3]=a*x+o*b+l*E,r[6]=a*m+o*v+l*A,r[1]=c*g+h*p+u*M,r[4]=c*x+h*b+u*E,r[7]=c*m+h*v+u*A,r[2]=d*g+f*p+_*M,r[5]=d*x+f*b+_*E,r[8]=d*m+f*v+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],h=i[7];return i[0]=e*r+n*l,i[3]=e*a+n*c,i[6]=e*o+n*h,i[1]=-n*r+e*l,i[4]=-n*a+e*c,i[7]=-n*o+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}ye.prototype.isMatrix3=!0;function Bh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>65535)return!0;return!1}function Yr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Fo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function No(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}class gt{constructor(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this}setRGB(t,e,n){return this.r=t,this.g=e,this.b=n,this}setHSL(t,e,n){if(t=Zp(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,r=2*n-i;this.r=Fo(r,i,t+1/3),this.g=Fo(r,i,t),this.b=Fo(r,i,t-1/3)}return this}setStyle(t){function e(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let i;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,e(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,e(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return e(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this}setColorName(t){const e=Oh[t.toLowerCase()];return e!==void 0?this.setHex(e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=No(t.r),this.g=No(t.g),this.b=No(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(t){const e=this.r,n=this.g,i=this.b,r=Math.max(e,n,i),a=Math.min(e,n,i);let o,l;const c=(a+r)/2;if(a===r)o=0,l=0;else{const h=r-a;switch(l=c<=.5?h/(r+a):h/(2-r-a),r){case e:o=(n-i)/h+(n<i?6:0);break;case n:o=(i-e)/h+2;break;case i:o=(e-n)/h+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(t,e,n){return this.getHSL(an),an.h+=t,an.s+=e,an.l+=n,this.setHSL(an.h,an.s,an.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(an),t.getHSL(Vs);const n=Io(an.h,Vs.h,e),i=Io(an.s,Vs.s,e),r=Io(an.l,Vs.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}gt.NAMES=Oh;gt.prototype.isColor=!0;gt.prototype.r=1;gt.prototype.g=1;gt.prototype.b=1;let Ji;class Mi{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=Yr("canvas")),Ji.width=t.width,Ji.height=t.height;const n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Zi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zi(e[n]/255)*255):e[n]=Zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $p=0;class me extends yi{constructor(t=me.DEFAULT_IMAGE,e=me.DEFAULT_MAPPING,n=We,i=We,r=Te,a=Ns,o=Re,l=Xn,c=1,h=Yn){super();Object.defineProperty(this,"id",{value:$p++}),this.uuid=_n(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=_n()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Bo(i[a].image)):r.push(Bo(i[a]))}else r=Bo(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mo:t.x=t.x-Math.floor(t.x);break;case We:t.x=t.x<0?0:1;break;case bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mo:t.y=t.y-Math.floor(t.y);break;case We:t.y=t.y<0?0:1;break;case bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&this.version++}}me.DEFAULT_IMAGE=void 0;me.DEFAULT_MAPPING=ch;me.prototype.isTexture=!0;function Bo(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Mi.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Xt{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const a=.01,o=.1,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],x=l[6],m=l[10];if(Math.abs(h-d)<a&&Math.abs(u-g)<a&&Math.abs(_-x)<a){if(Math.abs(h+d)<o&&Math.abs(u+g)<o&&Math.abs(_+x)<o&&Math.abs(c+f+m-3)<o)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,v=(f+1)/2,M=(m+1)/2,E=(h+d)/4,A=(u+g)/4,P=(_+x)/4;return b>v&&b>M?b<a?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=E/n,r=A/n):v>M?v<a?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=P/i):M<a?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=A/r,i=P/r),this.set(n,i,r,e),this}let p=Math.sqrt((x-_)*(x-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(p)<.001&&(p=1),this.x=(x-_)/p,this.y=(u-g)/p,this.z=(d-h)/p,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Xt.prototype.isVector4=!0;class tn extends yi{constructor(t,e,n={}){super();this.width=t,this.height=e,this.depth=1,this.scissor=new Xt(0,0,t,e),this.scissorTest=!1,this.viewport=new Xt(0,0,t,e),this.texture=new me(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:t,height:e,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Te,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(t){t.image={width:this.width,height:this.height,depth:this.depth},this.texture=t}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.image=Object.assign({},t.texture.image),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}tn.prototype.isWebGLRenderTarget=!0;class Kp extends tn{constructor(t,e,n){super(t,e);const i=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=i.clone()}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone();return this}}Kp.prototype.isWebGLMultipleRenderTargets=!0;class Oo extends tn{constructor(t,e,n={}){super(t,e,n);this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(t){return super.copy.call(this,t),this.samples=t.samples,this.useRenderToTexture=t.useRenderToTexture,this.useRenderbuffer=t.useRenderbuffer,this}}Oo.prototype.isWebGLMultisampleRenderTarget=!0;class Ne{constructor(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}static slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let x=1-o;const m=l*d+c*f+h*_+u*g,p=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const M=Math.sqrt(b),E=Math.atan2(M,m*p);x=Math.sin(x*E)/M,o=Math.sin(o*E)/M}const v=o*p;if(l=l*x+d*v,c=c*x+f*v,h=h*x+_*v,u=u*x+g*v,x===1-o){const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-o*f,t[e+2]=c*_+h*f+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Ne.prototype.isQuaternion=!0;class C{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,h=l*n+o*e-r*i,u=l*i+r*n-a*e,d=-r*e-a*n-o*i;return this.x=c*l+d*-r+h*-o-u*-a,this.y=h*l+d*-a+u*-r-c*-o,this.z=u*l+d*-o+c*-a-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zo.copy(this).projectOnVector(t),this.sub(zo)}reflect(t){return this.sub(zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}C.prototype.isVector3=!0;const zo=new C,zh=new Ne;class on{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],d=t[l+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(e,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),d=t.getZ(l);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(e,n,i),this.max.set(r,a,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)bi.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(bi)}else n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox),Uo.applyMatrix4(t.matrixWorld),this.union(Uo);const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jr),Hs.subVectors(this.max,jr),$i.subVectors(t.a,jr),Ki.subVectors(t.b,jr),Qi.subVectors(t.c,jr),jn.subVectors(Ki,$i),Zn.subVectors(Qi,Ki),wi.subVectors($i,Qi);let e=[0,-jn.z,jn.y,0,-Zn.z,Zn.y,0,-wi.z,wi.y,jn.z,0,-jn.x,Zn.z,0,-Zn.x,wi.z,0,-wi.x,-jn.y,jn.x,0,-Zn.y,Zn.x,0,-wi.y,wi.x,0];return!ko(e,$i,Ki,Qi,Hs)||(e=[1,0,0,0,1,0,0,0,1],!ko(e,$i,Ki,Qi,Hs))?!1:(Gs.crossVectors(jn,Zn),e=[Gs.x,Gs.y,Gs.z],ko(e,$i,Ki,Qi,Hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return bi.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}on.prototype.isBox3=!0;const Rn=[new C,new C,new C,new C,new C,new C,new C,new C],bi=new C,Uo=new on,$i=new C,Ki=new C,Qi=new C,jn=new C,Zn=new C,wi=new C,jr=new C,Hs=new C,Gs=new C,Si=new C;function ko(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Si.fromArray(s,r);const o=i.x*Math.abs(Si.x)+i.y*Math.abs(Si.y)+i.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Qp=new on,Uh=new C,Ws=new C,Vo=new C;class tr{constructor(t=new C,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Vo.subVectors(t,this.center);const e=Vo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(Vo.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?Ws.set(0,0,1).multiplyScalar(t.radius):Ws.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Uh.copy(t.center).add(Ws)),this.expandByPoint(Uh.copy(t.center).sub(Ws)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new C,Ho=new C,qs=new C,Jn=new C,Go=new C,Xs=new C,Wo=new C;class er{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.direction).multiplyScalar(e).add(this.origin),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ho.copy(t).add(e).multiplyScalar(.5),qs.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(Ho);const r=t.distanceTo(e)*.5,a=-this.direction.dot(qs),o=Jn.dot(this.direction),l=-Jn.dot(qs),c=Jn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(qs).multiplyScalar(d).add(Ho),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,i,r){Go.subVectors(e,t),Xs.subVectors(n,t),Wo.crossVectors(Go,Xs);let a=this.direction.dot(Wo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,t);const l=o*this.direction.dot(Xs.crossVectors(Jn,Xs));if(l<0)return null;const c=o*this.direction.dot(Go.cross(Jn));if(c<0||l+c>a)return null;const h=-o*Jn.dot(Wo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,r,a,o,l,c,h,u,d,f,_,g,x){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/nr.setFromMatrixColumn(t,0).length(),r=1/nr.setFromMatrixColumn(t,1).length(),a=1/nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tm,t,em)}lookAt(t,e,n){const i=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),$n.crossVectors(n,Xe),$n.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),$n.crossVectors(n,Xe)),$n.normalize(),Ys.crossVectors(Xe,$n),i[0]=$n.x,i[4]=Ys.x,i[8]=Xe.x,i[1]=$n.y,i[5]=Ys.y,i[9]=Xe.y,i[2]=$n.z,i[6]=Ys.z,i[10]=Xe.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],x=n[10],m=n[14],p=n[3],b=n[7],v=n[11],M=n[15],E=i[0],A=i[4],P=i[8],O=i[12],H=i[1],y=i[5],R=i[9],D=i[13],N=i[2],F=i[6],I=i[10],U=i[14],j=i[3],st=i[7],G=i[11],X=i[15];return r[0]=a*E+o*H+l*N+c*j,r[4]=a*A+o*y+l*F+c*st,r[8]=a*P+o*R+l*I+c*G,r[12]=a*O+o*D+l*U+c*X,r[1]=h*E+u*H+d*N+f*j,r[5]=h*A+u*y+d*F+f*st,r[9]=h*P+u*R+d*I+f*G,r[13]=h*O+u*D+d*U+f*X,r[2]=_*E+g*H+x*N+m*j,r[6]=_*A+g*y+x*F+m*st,r[10]=_*P+g*R+x*I+m*G,r[14]=_*O+g*D+x*U+m*X,r[3]=p*E+b*H+v*N+M*j,r[7]=p*A+b*y+v*F+M*st,r[11]=p*P+b*R+v*I+M*G,r[15]=p*O+b*D+v*U+M*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],x=t[11],m=t[15];return _*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+g*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+x*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+m*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],x=t[14],m=t[15],p=u*x*c-g*d*c+g*l*f-o*x*f-u*l*m+o*d*m,b=_*d*c-h*x*c-_*l*f+a*x*f+h*l*m-a*d*m,v=h*g*c-_*u*c+_*o*f-a*g*f-h*o*m+a*u*m,M=_*u*l-h*g*l-_*o*d+a*g*d+h*o*x-a*u*x,E=e*p+n*b+i*v+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=p*A,t[1]=(g*d*r-u*x*r-g*i*f+n*x*f+u*i*m-n*d*m)*A,t[2]=(o*x*r-g*l*r+g*i*c-n*x*c-o*i*m+n*l*m)*A,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*A,t[4]=b*A,t[5]=(h*x*r-_*d*r+_*i*f-e*x*f-h*i*m+e*d*m)*A,t[6]=(_*l*r-a*x*r-_*i*c+e*x*c+a*i*m-e*l*m)*A,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*A,t[8]=v*A,t[9]=(_*u*r-h*g*r-_*n*f+e*g*f+h*n*m-e*u*m)*A,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*m+e*o*m)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*A,t[12]=M*A,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*x+e*u*x)*A,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*x-e*o*x)*A,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,_=r*u,g=a*h,x=a*u,m=o*u,p=l*c,b=l*h,v=l*u,M=n.x,E=n.y,A=n.z;return i[0]=(1-(g+m))*M,i[1]=(f+v)*M,i[2]=(_-b)*M,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(d+m))*E,i[6]=(x+p)*E,i[7]=0,i[8]=(_+b)*A,i[9]=(x-p)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=nr.set(i[0],i[1],i[2]).length();const a=nr.set(i[4],i[5],i[6]).length(),o=nr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ln.copy(this);const c=1/r,h=1/a,u=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(e-t),c=2*r/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(a+r)/(a-r),f=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,r,a){const o=this.elements,l=1/(e-t),c=1/(n-i),h=1/(a-r),u=(e+t)*l,d=(n+i)*c,f=(a+r)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}vt.prototype.isMatrix4=!0;const nr=new C,ln=new vt,tm=new C(0,0,0),em=new C(1,1,1),$n=new C,Ys=new C,Xe=new C,kh=new vt,Vh=new Ne;class ir{constructor(t=0,e=0,n=0,i=ir.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}toVector3(t){return t?t.set(this._x,this._y,this._z):new C(this._x,this._y,this._z)}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}ir.prototype.isEuler=!0;ir.DefaultOrder="XYZ";ir.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Hh{constructor(){this.mask=1|0}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=4294967295|0}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!=0}isEnabled(t){return(this.mask&(1<<t|0))!=0}}let nm=0;const Gh=new C,rr=new Ne,Pn=new vt,js=new C,Zr=new C,im=new C,rm=new Ne,Wh=new C(1,0,0),qh=new C(0,1,0),Xh=new C(0,0,1),sm={type:"added"},Yh={type:"removed"};class kt extends yi{constructor(){super();Object.defineProperty(this,"id",{value:nm++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DefaultUp.clone();const t=new C,e=new ir,n=new Ne,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vt},normalMatrix:{value:new ye}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=kt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rr.setFromAxisAngle(t,e),this.quaternion.multiply(rr),this}rotateOnWorldAxis(t,e){return rr.setFromAxisAngle(t,e),this.quaternion.premultiply(rr),this}rotateX(t){return this.rotateOnAxis(Wh,t)}rotateY(t){return this.rotateOnAxis(qh,t)}rotateZ(t){return this.rotateOnAxis(Xh,t)}translateOnAxis(t,e){return Gh.copy(t).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wh,t)}translateY(t){return this.translateOnAxis(qh,t)}translateZ(t){return this.translateOnAxis(Xh,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Zr,js,this.up):Pn.lookAt(js,Zr,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),rr.setFromRotationMatrix(Pn),this.quaternion.premultiply(rr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(sm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Yh)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,t,im),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,rm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}kt.DefaultUp=new C(0,1,0);kt.DefaultMatrixAutoUpdate=!0;kt.prototype.isObject3D=!0;const cn=new C,Dn=new C,qo=new C,In=new C,sr=new C,ar=new C,jh=new C,Xo=new C,Yo=new C,jo=new C;class le{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),cn.subVectors(t,e),i.cross(cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){cn.subVectors(i,e),Dn.subVectors(n,e),qo.subVectors(t,e);const a=cn.dot(cn),o=cn.dot(Dn),l=cn.dot(qo),c=Dn.dot(Dn),h=Dn.dot(qo),u=a*c-o*o;if(u===0)return r.set(-2,-1,-1);const d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,In),In.x>=0&&In.y>=0&&In.x+In.y<=1}static getUV(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,In),l.set(0,0),l.addScaledVector(r,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l}static isFrontFacing(t,e,n,i){return cn.subVectors(n,e),Dn.subVectors(t,e),cn.cross(Dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),cn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return le.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return le.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return le.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return le.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return le.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;sr.subVectors(i,n),ar.subVectors(r,n),Xo.subVectors(t,n);const l=sr.dot(Xo),c=ar.dot(Xo);if(l<=0&&c<=0)return e.copy(n);Yo.subVectors(t,i);const h=sr.dot(Yo),u=ar.dot(Yo);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(sr,a);jo.subVectors(t,r);const f=sr.dot(jo),_=ar.dot(jo);if(_>=0&&f<=_)return e.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ar,o);const x=h*_-f*u;if(x<=0&&u-h>=0&&f-_>=0)return jh.subVectors(r,i),o=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(jh,o);const m=1/(x+g+d);return a=g*m,o=d*m,e.copy(n).addScaledVector(sr,a).addScaledVector(ar,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let am=0;class Ee extends yi{constructor(){super();Object.defineProperty(this,"id",{value:am++}),this.uuid=_n(),this.name="",this.type="Material",this.fog=!0,this.blending=Hr,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ro,this.stencilZFail=Ro,this.stencilZPass=Ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===eh;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(n.blending=this.blending),this.side!==Vr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}Ee.prototype.isMaterial=!0;class Zo extends Ee{constructor(t){super();this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}Zo.prototype.isMeshBasicMaterial=!0;const jt=new C,Zs=new $;class fe{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Xr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new gt),e[n++]=a.r,e[n++]=a.g,e[n++]=a.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new $),e[n++]=a.x,e[n++]=a.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new C),e[n++]=a.x,e[n++]=a.y,e[n++]=a.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let a=t[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Xt),e[n++]=a.x,e[n++]=a.y,e[n++]=a.z,e[n++]=a.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zs.fromBufferAttribute(this,e),Zs.applyMatrix3(t),this.setXY(e,Zs.x,Zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyMatrix3(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)jt.x=this.getX(e),jt.y=this.getY(e),jt.z=this.getZ(e),jt.applyMatrix4(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)jt.x=this.getX(e),jt.y=this.getY(e),jt.z=this.getZ(e),jt.applyNormalMatrix(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)jt.x=this.getX(e),jt.y=this.getY(e),jt.z=this.getZ(e),jt.transformDirection(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xr&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}fe.prototype.isBufferAttribute=!0;class Zh extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jh extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class om extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}om.prototype.isFloat16BufferAttribute=!0;class ge extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let lm=0;const en=new vt,Jo=new kt,or=new C,Ye=new on,Jr=new on,_e=new C;class Jt extends yi{constructor(){super();Object.defineProperty(this,"id",{value:lm++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bh(t)?Jh:Zh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ye().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Ye.min,Jr.min),Ye.expandByPoint(_e),_e.addVectors(Ye.max,Jr.max),Ye.expandByPoint(_e)):(Ye.expandByPoint(Jr.min),Ye.expandByPoint(Jr.max))}Ye.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_e.fromBufferAttribute(o,c),l&&(or.fromBufferAttribute(t,c),_e.add(or)),i=Math.max(i,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new fe(new Float32Array(4*o),4));const l=e.tangent.array,c=[],h=[];for(let H=0;H<o;H++)c[H]=new C,h[H]=new C;const u=new C,d=new C,f=new C,_=new $,g=new $,x=new $,m=new C,p=new C;function b(H,y,R){u.fromArray(i,H*3),d.fromArray(i,y*3),f.fromArray(i,R*3),_.fromArray(a,H*2),g.fromArray(a,y*2),x.fromArray(a,R*2),d.sub(u),f.sub(u),g.sub(_),x.sub(_);const D=1/(g.x*x.y-x.x*g.y);!isFinite(D)||(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(D),p.copy(f).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(D),c[H].add(m),c[y].add(m),c[R].add(m),h[H].add(p),h[y].add(p),h[R].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let H=0,y=v.length;H<y;++H){const R=v[H],D=R.start,N=R.count;for(let F=D,I=D+N;F<I;F+=3)b(n[F+0],n[F+1],n[F+2])}const M=new C,E=new C,A=new C,P=new C;function O(H){A.fromArray(r,H*3),P.copy(A);const y=c[H];M.copy(y),M.sub(A.multiplyScalar(A.dot(y))).normalize(),E.crossVectors(P,y);const D=E.dot(h[H])<0?-1:1;l[H*4]=M.x,l[H*4+1]=M.y,l[H*4+2]=M.z,l[H*4+3]=D}for(let H=0,y=v.length;H<y;++H){const R=v[H],D=R.start,N=R.count;for(let F=D,I=D+N;F<I;F+=3)O(n[F+0]),O(n[F+1]),O(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),x=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,x),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const a=n[i].array,o=t.attributes[i],l=o.array,c=o.itemSize*e,h=Math.min(l.length,a.length-c);for(let u=0,d=c;u<h;u++,d++)a[d]=l[u]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,x=l.length;g<x;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let m=0;m<h;m++)d[_++]=c[f++]}return new fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Jt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Jt.prototype.isBufferGeometry=!0;const $h=new vt,lr=new er,$o=new tr,Kn=new C,Qn=new C,ti=new C,Ko=new C,Qo=new C,tl=new C,Js=new C,$s=new C,Ks=new C,Qs=new $,ta=new $,ea=new $,el=new C,na=new C;class Be extends kt{constructor(t=new Jt,e=new Zo){super();this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),t.ray.intersectsSphere($o)===!1)||($h.copy(r).invert(),lr.copy(t.ray).applyMatrix4($h),n.boundingBox!==null&&lr.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,_=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=i[m.materialIndex],b=Math.max(m.start,_.start),v=Math.min(o.count,Math.min(m.start+m.count,_.start+_.count));for(let M=b,E=v;M<E;M+=3){const A=o.getX(M),P=o.getX(M+1),O=o.getX(M+2);a=ia(this,p,t,lr,l,c,h,u,d,A,P,O),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const g=Math.max(0,_.start),x=Math.min(o.count,_.start+_.count);for(let m=g,p=x;m<p;m+=3){const b=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);a=ia(this,i,t,lr,l,c,h,u,d,b,v,M),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=i[m.materialIndex],b=Math.max(m.start,_.start),v=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let M=b,E=v;M<E;M+=3){const A=M,P=M+1,O=M+2;a=ia(this,p,t,lr,l,c,h,u,d,A,P,O),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const g=Math.max(0,_.start),x=Math.min(l.count,_.start+_.count);for(let m=g,p=x;m<p;m+=3){const b=m,v=m+1,M=m+2;a=ia(this,i,t,lr,l,c,h,u,d,b,v,M),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Be.prototype.isMesh=!0;function cm(s,t,e,n,i,r,a,o){let l;if(t.side===ue?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side!==Vi,o),l===null)return null;na.copy(o),na.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(na);return c<e.near||c>e.far?null:{distance:c,point:na.clone(),object:s}}function ia(s,t,e,n,i,r,a,o,l,c,h,u){Kn.fromBufferAttribute(i,c),Qn.fromBufferAttribute(i,h),ti.fromBufferAttribute(i,u);const d=s.morphTargetInfluences;if(r&&d){Js.set(0,0,0),$s.set(0,0,0),Ks.set(0,0,0);for(let _=0,g=r.length;_<g;_++){const x=d[_],m=r[_];x!==0&&(Ko.fromBufferAttribute(m,c),Qo.fromBufferAttribute(m,h),tl.fromBufferAttribute(m,u),a?(Js.addScaledVector(Ko,x),$s.addScaledVector(Qo,x),Ks.addScaledVector(tl,x)):(Js.addScaledVector(Ko.sub(Kn),x),$s.addScaledVector(Qo.sub(Qn),x),Ks.addScaledVector(tl.sub(ti),x)))}Kn.add(Js),Qn.add($s),ti.add(Ks)}s.isSkinnedMesh&&(s.boneTransform(c,Kn),s.boneTransform(h,Qn),s.boneTransform(u,ti));const f=cm(s,t,e,n,Kn,Qn,ti,el);if(f){o&&(Qs.fromBufferAttribute(o,c),ta.fromBufferAttribute(o,h),ea.fromBufferAttribute(o,u),f.uv=le.getUV(el,Kn,Qn,ti,Qs,ta,ea,new $)),l&&(Qs.fromBufferAttribute(l,c),ta.fromBufferAttribute(l,h),ea.fromBufferAttribute(l,u),f.uv2=le.getUV(el,Kn,Qn,ti,Qs,ta,ea,new $));const _={a:c,b:h,c:u,normal:new C,materialIndex:0};le.getNormal(Kn,Qn,ti,_.normal),f.face=_}return f}class $r extends Jt{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2));function _(g,x,m,p,b,v,M,E,A,P,O){const H=v/A,y=M/P,R=v/2,D=M/2,N=E/2,F=A+1,I=P+1;let U=0,j=0;const st=new C;for(let G=0;G<I;G++){const X=G*y-D;for(let Q=0;Q<F;Q++){const ut=Q*H-R;st[g]=ut*p,st[x]=X*b,st[m]=N,c.push(st.x,st.y,st.z),st[g]=0,st[x]=0,st[m]=E>0?1:-1,h.push(st.x,st.y,st.z),u.push(Q/A),u.push(1-G/P),U+=1}}for(let G=0;G<P;G++)for(let X=0;X<A;X++){const Q=d+X+F*G,ut=d+X+F*(G+1),lt=d+(X+1)+F*(G+1),k=d+(X+1)+F*G;l.push(Q,ut,k),l.push(ut,lt,k),j+=6}o.addGroup(f,j,O),f+=j,d+=U}}static fromJSON(t){return new $r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ae(s){const t={};for(let e=0;e<s.length;e++){const n=cr(s[e]);for(const i in n)t[i]=n[i]}return t}const hm={clone:cr,merge:Ae};var um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Ee{constructor(t){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=um,this.fragmentShader=dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}Ti.prototype.isShaderMaterial=!0;class nl extends kt{constructor(){super();this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}nl.prototype.isCamera=!0;class Oe extends nl{constructor(t=50,e=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Do*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Po*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}Oe.prototype.isPerspectiveCamera=!0;const hr=90,ur=1;class il extends kt{constructor(t,e,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Oe(hr,ur,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new C(1,0,0)),this.add(i);const r=new Oe(hr,ur,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new C(-1,0,0)),this.add(r);const a=new Oe(hr,ur,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new C(0,1,0)),this.add(a);const o=new Oe(hr,ur,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new C(0,-1,0)),this.add(o);const l=new Oe(hr,ur,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new C(0,0,1)),this.add(l);const c=new Oe(hr,ur,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new C(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,h=t.xr.enabled,u=t.getRenderTarget();t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class ra extends me{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gr;super(t,e,n,i,r,a,o,l,c,h);this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}ra.prototype.isCubeTexture=!0;class Kh extends tn{constructor(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n);super(t,t,e);e=e||{},this.texture=new ra(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Te}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.format=Re,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $r(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ue,blending:Wn});r.uniforms.tEquirect.value=e;const a=new Be(i,r),o=e.minFilter;return e.minFilter===Ns&&(e.minFilter=Te),new il(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}Kh.prototype.isWebGLCubeRenderTarget=!0;const rl=new C,fm=new C,pm=new ye;class Fn{constructor(t=new C(1,0,0),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=rl.subVectors(n,e).cross(fm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(rl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pm.getNormalMatrix(t),i=this.coplanarPoint(rl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}Fn.prototype.isPlane=!0;const dr=new tr,sa=new C;class aa{constructor(t=new Fn,e=new Fn,n=new Fn,i=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],_=n[10],g=n[11],x=n[12],m=n[13],p=n[14],b=n[15];return e[0].setComponents(o-i,u-l,g-d,b-x).normalize(),e[1].setComponents(o+i,u+l,g+d,b+x).normalize(),e[2].setComponents(o+r,u+c,g+f,b+m).normalize(),e[3].setComponents(o-r,u-c,g-f,b-m).normalize(),e[4].setComponents(o-a,u-h,g-_,b-p).normalize(),e[5].setComponents(o+a,u+h,g+_,b+p).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(dr)}intersectsSprite(t){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(sa.x=i.normal.x>0?t.max.x:t.min.x,sa.y=i.normal.y>0?t.max.y:t.min.y,sa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function mm(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,u,d),c.onUploadCallback();let _=5126;return u instanceof Float32Array?_=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?e?_=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):_=5123:u instanceof Int16Array?_=5122:u instanceof Uint32Array?_=5125:u instanceof Int32Array?_=5124:u instanceof Int8Array?_=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(_=5121),{buffer:f,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const d=h.array,f=h.updateRange;s.bindBuffer(u,c),f.count===-1?s.bufferSubData(u,0,d):(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class sl extends Jt{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],_=[],g=[],x=[];for(let m=0;m<h;m++){const p=m*d-a;for(let b=0;b<c;b++){const v=b*u-r;_.push(v,-p,0),g.push(0,0,1),x.push(b/o),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let p=0;p<o;p++){const b=p+c*m,v=p+c*(m+1),M=p+1+c*(m+1),E=p+1+c*m;f.push(b,v,E),f.push(v,M,E)}this.setIndex(f),this.setAttribute("position",new ge(_,3)),this.setAttribute("normal",new ge(g,3)),this.setAttribute("uv",new ge(x,2))}static fromJSON(t){return new sl(t.width,t.height,t.widthSegments,t.heightSegments)}}var gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ym=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bm="vec3 transformed = vec3( position );",wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Qm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eg=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,ng=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ig=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,cg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,fg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ag=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Xg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e_=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,n_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,i_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,r_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,s_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,a_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,o_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,l_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,c_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,p_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,m_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,g_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,__=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,y_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,k_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pt={alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:xm,alphatest_pars_fragment:vm,aomap_fragment:ym,aomap_pars_fragment:Mm,begin_vertex:bm,beginnormal_vertex:wm,bsdfs:Sm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Rm,color_fragment:Lm,color_pars_fragment:Pm,color_pars_vertex:Dm,color_vertex:Im,common:Fm,cube_uv_reflection_fragment:Nm,defaultnormal_vertex:Bm,displacementmap_pars_vertex:Om,displacementmap_vertex:zm,emissivemap_fragment:Um,emissivemap_pars_fragment:km,encodings_fragment:Vm,encodings_pars_fragment:Hm,envmap_fragment:Gm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:qm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:ig,envmap_vertex:Ym,fog_vertex:jm,fog_pars_vertex:Zm,fog_fragment:Jm,fog_pars_fragment:$m,gradientmap_pars_fragment:Km,lightmap_fragment:Qm,lightmap_pars_fragment:tg,lights_lambert_vertex:eg,lights_pars_begin:ng,lights_toon_fragment:rg,lights_toon_pars_fragment:sg,lights_phong_fragment:ag,lights_phong_pars_fragment:og,lights_physical_fragment:lg,lights_physical_pars_fragment:cg,lights_fragment_begin:hg,lights_fragment_maps:ug,lights_fragment_end:dg,logdepthbuf_fragment:fg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:_g,map_pars_fragment:xg,map_particle_fragment:vg,map_particle_pars_fragment:yg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:bg,morphnormal_vertex:wg,morphtarget_pars_vertex:Sg,morphtarget_vertex:Tg,normal_fragment_begin:Eg,normal_fragment_maps:Ag,normal_pars_fragment:Cg,normal_pars_vertex:Rg,normal_vertex:Lg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:Ig,clearcoat_pars_fragment:Fg,output_fragment:Ng,packing:Bg,premultiplied_alpha_fragment:Og,project_vertex:zg,dithering_fragment:Ug,dithering_pars_fragment:kg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Wg,shadowmap_vertex:qg,shadowmask_pars_fragment:Xg,skinbase_vertex:Yg,skinning_pars_vertex:jg,skinning_vertex:Zg,skinnormal_vertex:Jg,specularmap_fragment:$g,specularmap_pars_fragment:Kg,tonemapping_fragment:Qg,tonemapping_pars_fragment:t_,transmission_fragment:e_,transmission_pars_fragment:n_,uv_pars_fragment:i_,uv_pars_vertex:r_,uv_vertex:s_,uv2_pars_fragment:a_,uv2_pars_vertex:o_,uv2_vertex:l_,worldpos_vertex:c_,background_vert:h_,background_frag:u_,cube_vert:d_,cube_frag:f_,depth_vert:p_,depth_frag:m_,distanceRGBA_vert:g_,distanceRGBA_frag:__,equirect_vert:x_,equirect_frag:v_,linedashed_vert:y_,linedashed_frag:M_,meshbasic_vert:b_,meshbasic_frag:w_,meshlambert_vert:S_,meshlambert_frag:T_,meshmatcap_vert:E_,meshmatcap_frag:A_,meshnormal_vert:C_,meshnormal_frag:R_,meshphong_vert:L_,meshphong_frag:P_,meshphysical_vert:D_,meshphysical_frag:I_,meshtoon_vert:F_,meshtoon_frag:N_,points_vert:B_,points_frag:O_,shadow_vert:z_,shadow_frag:U_,sprite_vert:k_,sprite_frag:V_},nt={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ye},uv2Transform:{value:new ye},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ye}}},xn={basic:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.fog,nt.lights,{emissive:{value:new gt(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Ae([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Ae([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new gt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Ae([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Ae([nt.points,nt.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Ae([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Ae([nt.common,nt.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Ae([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Ae([nt.sprite,nt.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},cube:{uniforms:Ae([nt.envmap,{opacity:{value:1}}]),vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Ae([nt.common,nt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Ae([nt.lights,nt.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};xn.physical={uniforms:Ae([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};function H_(s,t,e,n,i,r){const a=new gt(0);let o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(g,x){let m=!1,p=x.isScene===!0?x.background:null;p&&p.isTexture&&(p=t.get(p));const b=s.xr,v=b.getSession&&b.getSession();v&&v.environmentBlendMode==="additive"&&(p=null),p===null?_(a,o):p&&p.isColor&&(_(p,1),m=!0),(s.autoClear||m)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),p&&(p.isCubeTexture||p.mapping===Fs)?(c===void 0&&(c=new Be(new $r(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:cr(xn.cube.uniforms),vertexShader:xn.cube.vertexShader,fragmentShader:xn.cube.fragmentShader,side:ue,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(h!==p||u!==p.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=p,u=p.version,d=s.toneMapping),g.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(l===void 0&&(l=new Be(new sl(2,2),new Ti({name:"BackgroundMaterial",uniforms:cr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),l.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||u!==p.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=p,u=p.version,d=s.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,x){e.buffers.color.setClear(g.r,g.g,g.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),o=x,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,_(a,o)},render:f}}function G_(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null);let c=l;function h(D,N,F,I,U){let j=!1;if(a){const st=_(I,F,N);c!==st&&(c=st,d(c.object)),j=x(I,U),j&&m(I,U)}else{const st=N.wireframe===!0;(c.geometry!==I.id||c.program!==F.id||c.wireframe!==st)&&(c.geometry=I.id,c.program=F.id,c.wireframe=st,j=!0)}D.isInstancedMesh===!0&&(j=!0),U!==null&&e.update(U,34963),j&&(A(D,N,F,I),U!==null&&s.bindBuffer(34963,e.get(U).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function f(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,N,F){const I=F.wireframe===!0;let U=o[D.id];U===void 0&&(U={},o[D.id]=U);let j=U[N.id];j===void 0&&(j={},U[N.id]=j);let st=j[I];return st===void 0&&(st=g(u()),j[I]=st),st}function g(D){const N=[],F=[],I=[];for(let U=0;U<i;U++)N[U]=0,F[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:I,object:D,attributes:{},index:null}}function x(D,N){const F=c.attributes,I=D.attributes;let U=0;for(const j in I){const st=F[j],G=I[j];if(st===void 0||st.attribute!==G||st.data!==G.data)return!0;U++}return c.attributesNum!==U||c.index!==N}function m(D,N){const F={},I=D.attributes;let U=0;for(const j in I){const st=I[j],G={};G.attribute=st,st.data&&(G.data=st.data),F[j]=G,U++}c.attributes=F,c.attributesNum=U,c.index=N}function p(){const D=c.newAttributes;for(let N=0,F=D.length;N<F;N++)D[N]=0}function b(D){v(D,0)}function v(D,N){const F=c.newAttributes,I=c.enabledAttributes,U=c.attributeDivisors;F[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),U[D]!==N&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,N),U[D]=N)}function M(){const D=c.newAttributes,N=c.enabledAttributes;for(let F=0,I=N.length;F<I;F++)N[F]!==D[F]&&(s.disableVertexAttribArray(F),N[F]=0)}function E(D,N,F,I,U,j){n.isWebGL2===!0&&(F===5124||F===5125)?s.vertexAttribIPointer(D,N,F,U,j):s.vertexAttribPointer(D,N,F,I,U,j)}function A(D,N,F,I){if(n.isWebGL2===!1&&(D.isInstancedMesh||I.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;p();const U=I.attributes,j=F.getAttributes(),st=N.defaultAttributeValues;for(const G in j){const X=j[G];if(X.location>=0){let Q=U[G];if(Q===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const ut=Q.normalized,lt=Q.itemSize,k=e.get(Q);if(k===void 0)continue;const Ot=k.buffer,pt=k.type,bt=k.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ct=Q.data,Ct=ct.stride,wt=Q.offset;if(ct&&ct.isInstancedInterleavedBuffer){for(let Y=0;Y<X.locationSize;Y++)v(X.location+Y,ct.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Y=0;Y<X.locationSize;Y++)b(X.location+Y);s.bindBuffer(34962,Ot);for(let Y=0;Y<X.locationSize;Y++)E(X.location+Y,lt/X.locationSize,pt,ut,Ct*bt,(wt+lt/X.locationSize*Y)*bt)}else{if(Q.isInstancedBufferAttribute){for(let ct=0;ct<X.locationSize;ct++)v(X.location+ct,Q.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ct=0;ct<X.locationSize;ct++)b(X.location+ct);s.bindBuffer(34962,Ot);for(let ct=0;ct<X.locationSize;ct++)E(X.location+ct,lt/X.locationSize,pt,ut,lt*bt,lt/X.locationSize*ct*bt)}}else if(st!==void 0){const ut=st[G];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(X.location,ut);break;case 3:s.vertexAttrib3fv(X.location,ut);break;case 4:s.vertexAttrib4fv(X.location,ut);break;default:s.vertexAttrib1fv(X.location,ut)}}}}M()}function P(){y();for(const D in o){const N=o[D];for(const F in N){const I=N[F];for(const U in I)f(I[U].object),delete I[U];delete N[F]}delete o[D]}}function O(D){if(o[D.id]===void 0)return;const N=o[D.id];for(const F in N){const I=N[F];for(const U in I)f(I[U].object),delete I[U];delete N[F]}delete o[D.id]}function H(D){for(const N in o){const F=o[N];if(F[D.id]===void 0)continue;const I=F[D.id];for(const U in I)f(I[U].object),delete I[U];delete F[D.id]}}function y(){R(),c!==l&&(c=l,d(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:y,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfProgram:H,initAttributes:p,enableAttribute:b,disableUnusedAttributes:M}}function W_(s,t,e,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,h){s.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,h,u),e.update(h,r,u)}this.setMode=a,this.render=o,this.renderInstances=l}function q_(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext;let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),f=s.getParameter(3379),_=s.getParameter(34076),g=s.getParameter(34921),x=s.getParameter(36347),m=s.getParameter(36348),p=s.getParameter(36349),b=d>0,v=a||t.has("OES_texture_float"),M=b&&v,E=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:x,maxVaryings:m,maxFragmentUniforms:p,vertexTextures:b,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:E}}function X_(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Fn,o=new ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const _=u.length!==0||d||n!==0||i;return i=d,e=h(u,f,0),n=u.length,_},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,x=u.clipShadows,m=s.get(u);if(!i||_===null||_.length===0||r&&!x)r?h(null):c();else{const p=r?0:n,b=p*4;let v=m.clippingState||null;l.value=v,v=h(_,d,b,f);for(let M=0;M!==b;++M)v[M]=e[M];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let x=null;if(g!==0){if(x=l.value,_!==!0||x===null){const m=f+g*4,p=d.matrixWorldInverse;o.getNormalMatrix(p),(x===null||x.length<m)&&(x=new Float32Array(m));for(let b=0,v=f;b!==g;++b,v+=4)a.copy(u[b]).applyMatrix4(p,o),a.normal.toArray(x,v),x[v+3]=a.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,x}}function Y_(s){let t=new WeakMap;function e(a,o){return o===xo?a.mapping=Gr:o===vo&&(a.mapping=Wr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===xo||o===vo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Kh(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class al extends nl{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}al.prototype.isOrthographicCamera=!0;class oa extends Ti{constructor(t){super(t);this.type="RawShaderMaterial"}}oa.prototype.isRawShaderMaterial=!0;const fr=4,ei=8,vn=Math.pow(2,ei),tu=[.125,.215,.35,.446,.526,.582],eu=ei-fr+1+tu.length,pr=20,ol=new al,{_lodPlanes:Kr,_sizeLods:nu,_sigmas:la}=j_(),iu=new gt;let ll=null;const Ei=(1+Math.sqrt(5))/2,mr=1/Ei,ru=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Ei,mr),new C(0,Ei,-mr),new C(mr,0,Ei),new C(-mr,0,Ei),new C(Ei,mr,0),new C(-Ei,mr,0)];class su{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._blurMaterial=Z_(pr),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ll=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=lu(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=ou(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let t=0;t<Kr.length;t++)Kr[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ll),t.scissorTest=!1,ca(t,0,0,t.width,t.height)}_fromTexture(t,e){ll=this._renderer.getRenderTarget();const n=e||this._allocateTargets(t);return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(t){const e={magFilter:Te,minFilter:Te,generateMipmaps:!1,type:Gi,format:Re,encoding:Yn,depthBuffer:!1},n=au(e);return n.depthBuffer=!t,this._pingPongRenderTarget===null&&(this._pingPongRenderTarget=au(e)),n}_compileMaterial(t){const e=new Be(Kr[0],t);this._renderer.compile(e,ol)}_sceneToCubeUV(t,e,n,i){const r=90,a=1,o=new Oe(r,a,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(iu),h.toneMapping=qn,h.autoClear=!1;const f=new Zo({name:"PMREM.Background",side:ue,depthWrite:!1,depthTest:!1}),_=new Be(new $r,f);let g=!1;const x=t.background;x?x.isColor&&(f.color.copy(x),t.background=null,g=!0):(f.color.copy(iu),g=!0);for(let m=0;m<6;m++){const p=m%3;p===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):p===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m])),ca(i,p*vn,m>2?vn:0,vn,vn),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Gr||t.mapping===Wr;i?(this._cubemapShader===null&&(this._cubemapShader=lu()),this._cubemapShader.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectShader===null&&(this._equirectShader=ou());const r=i?this._cubemapShader:this._equirectShader,a=new Be(Kr[0],r),o=r.uniforms;o.envMap.value=t,i||o.texelSize.value.set(1/t.image.width,1/t.image.height),ca(e,0,0,3*vn,2*vn),n.setRenderTarget(e),n.render(a,ol)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<eu;i++){const r=Math.sqrt(la[i]*la[i]-la[i-1]*la[i-1]),a=ru[(i-1)%ru.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Be(Kr[i],c),d=c.uniforms,f=nu[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*pr-1),g=r/_,x=isFinite(r)?1+Math.floor(h*g):pr;x>pr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${pr}`);const m=[];let p=0;for(let E=0;E<pr;++E){const A=E/g,P=Math.exp(-A*A/2);m.push(P),E===0?p+=P:E<x&&(p+=2*P)}for(let E=0;E<m.length;E++)m[E]=m[E]/p;d.envMap.value=t.texture,d.samples.value=x,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o),d.dTheta.value=_,d.mipInt.value=ei-n;const b=nu[i],v=3*Math.max(0,vn-2*b),M=(i===0?0:2*vn)+2*b*(i>ei-fr?i-ei+fr:0);ca(e,v,M,3*b,2*b),l.setRenderTarget(e),l.render(u,ol)}}function j_(){const s=[],t=[],e=[];let n=ei;for(let i=0;i<eu;i++){const r=Math.pow(2,n);t.push(r);let a=1/r;i>ei-fr?a=tu[i-ei+fr-1]:i===0&&(a=0),e.push(a);const o=1/(r-1),l=-o/2,c=1+o/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,_=2,g=1,x=new Float32Array(f*d*u),m=new Float32Array(_*d*u),p=new Float32Array(g*d*u);for(let v=0;v<u;v++){const M=v%3*2/3-1,E=v>2?0:-1,A=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];x.set(A,f*d*v),m.set(h,_*d*v);const P=[v,v,v,v,v,v];p.set(P,g*d*v)}const b=new Jt;b.setAttribute("position",new fe(x,f)),b.setAttribute("uv",new fe(m,_)),b.setAttribute("faceIndex",new fe(p,g)),s.push(b),n>fr&&n--}return{_lodPlanes:s,_sizeLods:t,_sigmas:e}}function au(s){const t=new tn(3*vn,3*vn,s);return t.texture.mapping=Fs,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function ca(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Z_(s){const t=new Float32Array(s),e=new C(0,1,0);return new oa({name:"SphericalGaussianBlur",defines:{n:s},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:e}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ou(){const s=new $(1,1);return new oa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = texture2D ( envMap, uv ).rgb;
				uv.x += texelSize.x;
				vec3 tr = texture2D ( envMap, uv ).rgb;
				uv.y += texelSize.y;
				vec3 br = texture2D ( envMap, uv ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = texture2D ( envMap, uv ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function lu(){return new oa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function cl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function J_(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===xo||l===vo,h=l===Gr||l===Wr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new su(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new su(s));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function K_(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],34962);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let x=0,m=g.length;x<m;x++)t.update(g[x],34962)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const p=f.array;g=f.version;for(let b=0,v=p.length;b<v;b+=3){const M=p[b+0],E=p[b+1],A=p[b+2];d.push(M,E,E,A,A,M)}}else{const p=_.array;g=_.version;for(let b=0,v=p.length/3-1;b<v;b+=3){const M=b+0,E=b+1,A=b+2;d.push(M,E,E,A,A,M)}}const x=new(Bh(d)?Jh:Zh)(d,1);x.version=g;const m=r.get(u);m&&t.remove(m),r.set(u,x)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Q_(s,t,e,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,f){s.drawElements(r,f,o,d*l),e.update(f,r,1)}function u(d,f,_){if(_===0)return;let g,x;if(i)g=s,x="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](r,f,o,d*l,_),e.update(f,r,_)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function t0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case 4:e.triangles+=o*(r/3);break;case 1:e.lines+=o*(r/2);break;case 3:e.lines+=o*(r-1);break;case 2:e.lines+=o*r;break;case 0:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}class hl extends me{constructor(t=null,e=1,n=1,i=1){super(null);this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}hl.prototype.isDataTexture2DArray=!0;function e0(s,t){return s[0]-t[0]}function n0(s,t){return Math.abs(t[1])-Math.abs(s[1])}function cu(s,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(e)}function i0(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new C,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u,d){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position.length;let g=r.get(h);if(g===void 0||g.count!==_){let R=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",R)};g!==void 0&&g.texture.dispose();const p=h.morphAttributes.normal!==void 0,b=h.morphAttributes.position,v=h.morphAttributes.normal||[],M=h.attributes.position.count,E=p===!0?2:1;let A=M*E,P=1;A>t.maxTextureSize&&(P=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const O=new Float32Array(A*P*4*_),H=new hl(O,A,P,_);H.format=Re,H.type=xi,H.needsUpdate=!0;const y=E*4;for(let D=0;D<_;D++){const N=b[D],F=v[D],I=A*P*4*D;for(let U=0;U<N.count;U++){a.fromBufferAttribute(N,U),N.normalized===!0&&cu(a,N);const j=U*y;O[I+j+0]=a.x,O[I+j+1]=a.y,O[I+j+2]=a.z,O[I+j+3]=0,p===!0&&(a.fromBufferAttribute(F,U),F.normalized===!0&&cu(a,F),O[I+j+4]=a.x,O[I+j+5]=a.y,O[I+j+6]=a.z,O[I+j+7]=0)}}g={count:_,texture:H,size:new $(A,P)},r.set(h,g),h.addEventListener("dispose",R)}let x=0;for(let p=0;p<f.length;p++)x+=f[p];const m=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(s,"morphTargetBaseInfluence",m),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const _=f===void 0?0:f.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<_;v++){const M=g[v];M[0]=v,M[1]=f[v]}g.sort(n0);for(let v=0;v<8;v++)v<_&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(e0);const x=h.morphAttributes.position,m=h.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const M=o[v],E=M[0],A=M[1];E!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+v)!==x[E]&&h.setAttribute("morphTarget"+v,x[E]),m&&h.getAttribute("morphNormal"+v)!==m[E]&&h.setAttribute("morphNormal"+v,m[E]),i[v]=A,p+=A):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const b=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",b),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function r0(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);return i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class hu extends me{constructor(t=null,e=1,n=1,i=1){super(null);this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}hu.prototype.isDataTexture3D=!0;const uu=new me,du=new hl,fu=new hu,pu=new ra,mu=[],gu=[],_u=new Float32Array(16),xu=new Float32Array(9),vu=new Float32Array(4);function gr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=mu[i];if(r===void 0&&(r=new Float32Array(i),mu[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Le(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ha(s,t){let e=gu[t];e===void 0&&(e=new Int32Array(t),gu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function s0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function a0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function o0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function l0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function c0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Le(e,n))return;vu.set(n),s.uniformMatrix2fv(this.addr,!1,vu),Ce(e,n)}}function h0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Le(e,n))return;xu.set(n),s.uniformMatrix3fv(this.addr,!1,xu),Ce(e,n)}}function u0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Le(e,n))return;_u.set(n),s.uniformMatrix4fv(this.addr,!1,_u),Ce(e,n)}}function d0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function f0(s,t){const e=this.cache;Le(e,t)||(s.uniform2iv(this.addr,t),Ce(e,t))}function p0(s,t){const e=this.cache;Le(e,t)||(s.uniform3iv(this.addr,t),Ce(e,t))}function m0(s,t){const e=this.cache;Le(e,t)||(s.uniform4iv(this.addr,t),Ce(e,t))}function g0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function _0(s,t){const e=this.cache;Le(e,t)||(s.uniform2uiv(this.addr,t),Ce(e,t))}function x0(s,t){const e=this.cache;Le(e,t)||(s.uniform3uiv(this.addr,t),Ce(e,t))}function v0(s,t){const e=this.cache;Le(e,t)||(s.uniform4uiv(this.addr,t),Ce(e,t))}function y0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.safeSetTexture2D(t||uu,i)}function M0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||fu,i)}function b0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.safeSetTextureCube(t||pu,i)}function w0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||du,i)}function S0(s){switch(s){case 5126:return s0;case 35664:return a0;case 35665:return o0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return d0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return _0;case 36295:return x0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return w0}}function T0(s,t){s.uniform1fv(this.addr,t)}function E0(s,t){const e=gr(t,this.size,2);s.uniform2fv(this.addr,e)}function A0(s,t){const e=gr(t,this.size,3);s.uniform3fv(this.addr,e)}function C0(s,t){const e=gr(t,this.size,4);s.uniform4fv(this.addr,e)}function R0(s,t){const e=gr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function L0(s,t){const e=gr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function P0(s,t){const e=gr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function D0(s,t){s.uniform1iv(this.addr,t)}function I0(s,t){s.uniform2iv(this.addr,t)}function F0(s,t){s.uniform3iv(this.addr,t)}function N0(s,t){s.uniform4iv(this.addr,t)}function B0(s,t){s.uniform1uiv(this.addr,t)}function O0(s,t){s.uniform2uiv(this.addr,t)}function z0(s,t){s.uniform3uiv(this.addr,t)}function U0(s,t){s.uniform4uiv(this.addr,t)}function k0(s,t,e){const n=t.length,i=ha(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.safeSetTexture2D(t[r]||uu,i[r])}function V0(s,t,e){const n=t.length,i=ha(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture3D(t[r]||fu,i[r])}function H0(s,t,e){const n=t.length,i=ha(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.safeSetTextureCube(t[r]||pu,i[r])}function G0(s,t,e){const n=t.length,i=ha(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||du,i[r])}function W0(s){switch(s){case 5126:return T0;case 35664:return E0;case 35665:return A0;case 35666:return C0;case 35674:return R0;case 35675:return L0;case 35676:return P0;case 5124:case 35670:return D0;case 35667:case 35671:return I0;case 35668:case 35672:return F0;case 35669:case 35673:return N0;case 5125:return B0;case 36294:return O0;case 36295:return z0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return G0}}function q0(s,t,e){this.id=s,this.addr=e,this.cache=[],this.setValue=S0(t.type)}function yu(s,t,e){this.id=s,this.addr=e,this.cache=[],this.size=t.size,this.setValue=W0(t.type)}yu.prototype.updateCache=function(s){const t=this.cache;s instanceof Float32Array&&t.length!==s.length&&(this.cache=new Float32Array(s.length)),Ce(t,s)};function Mu(s){this.id=s,this.seq=[],this.map={}}Mu.prototype.setValue=function(s,t,e){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const a=n[i];a.setValue(s,t[a.id],e)}};const ul=/(\w+)(\])?(\[|\.)?/g;function bu(s,t){s.seq.push(t),s.map[t.id]=t}function X0(s,t,e){const n=s.name,i=n.length;for(ul.lastIndex=0;;){const r=ul.exec(n),a=ul.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){bu(e,c===void 0?new q0(o,s,t):new yu(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Mu(o),bu(e,u)),e=u}}}function ni(s,t){this.seq=[],this.map={};const e=s.getProgramParameter(t,35718);for(let n=0;n<e;++n){const i=s.getActiveUniform(t,n),r=s.getUniformLocation(t,i.name);X0(i,r,this)}}ni.prototype.setValue=function(s,t,e,n){const i=this.map[t];i!==void 0&&i.setValue(s,e,n)};ni.prototype.setOptional=function(s,t,e){const n=t[e];n!==void 0&&this.setValue(s,e,n)};ni.upload=function(s,t,e,n){for(let i=0,r=t.length;i!==r;++i){const a=t[i],o=e[a.id];o.needsUpdate!==!1&&a.setValue(s,o.value,n)}};ni.seqWithValue=function(s,t){const e=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in t&&e.push(r)}return e};function wu(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let Y0=0;function j0(s){const t=s.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function Z0(s){switch(s){case Yn:return["Linear","( value )"];case Zt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Su(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();return n&&i===""?"":e.toUpperCase()+`

`+i+`

`+j0(s.getShaderSource(t))}function J0(s,t){const e=Z0(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function $0(s,t){let e;switch(t){case yp:e="Linear";break;case Mp:e="Reinhard";break;case bp:e="OptimizedCineon";break;case wp:e="ACESFilmic";break;case Sp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function K0(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qr).join(`
`)}function Q0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tx(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Qr(s){return s!==""}function Tu(s,t){return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(s){return s.replace(ex,nx)}function nx(s,t){const e=Pt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return dl(e)}const ix=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(s){return s.replace(rx,Cu).replace(ix,sx)}function sx(s,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Cu(s,t,e,n)}function Cu(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ru(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ax(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===th?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kr&&(t="SHADOWMAP_TYPE_VSM"),t}function ox(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gr:case Wr:t="ENVMAP_TYPE_CUBE";break;case Fs:case yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Wr:case yo:t="ENVMAP_MODE_REFRACTION";break}return t}function cx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Is:t="ENVMAP_BLENDING_MULTIPLY";break;case xp:t="ENVMAP_BLENDING_MIX";break;case vp:t="ENVMAP_BLENDING_ADD";break}return t}function hx(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ax(e),c=ox(e),h=lx(e),u=cx(e),d=e.isWebGL2?"":K0(e),f=Q0(r),_=i.createProgram();let g,x,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=[f].filter(Qr).join(`
`),g.length>0&&(g+=`
`),x=[d,f].filter(Qr).join(`
`),x.length>0&&(x+=`
`)):(g=[Ru(e),"#define SHADER_NAME "+e.shaderName,f,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+e.maxBones,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphTargets&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargets&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),x=[d,Ru(e),"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==qn?$0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.transparent?"":"#define OPAQUE",Pt.encodings_pars_fragment,J0("linearToOutputTexel",e.outputEncoding),e.depthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qr).join(`
`)),a=dl(a),a=Tu(a,e),a=Eu(a,e),o=dl(o),o=Tu(o,e),o=Eu(o,e),a=Au(a),o=Au(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,x=["#define varying in",e.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const p=m+g+a,b=m+x+o,v=wu(i,35633,p),M=wu(i,35632,b);if(i.attachShader(_,v),i.attachShader(_,M),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const P=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(v).trim(),H=i.getShaderInfoLog(M).trim();let y=!0,R=!0;if(i.getProgramParameter(_,35714)===!1){y=!1;const D=Su(i,v,"vertex"),N=Su(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,35715)+`

Program Info Log: `+P+`
`+D+`
`+N)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(O===""||H==="")&&(R=!1);R&&(this.diagnostics={runnable:y,programLog:P,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:x}})}i.deleteShader(v),i.deleteShader(M);let E;this.getUniforms=function(){return E===void 0&&(E=new ni(i,_)),E};let A;return this.getAttributes=function(){return A===void 0&&(A=tx(i,_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=e.shaderName,this.id=Y0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=M,this}let ux=0;class dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const n=new fx;e.set(t,n)}return e.get(t)}}class fx{constructor(){this.id=ux++,this.usedTimes=0}}function px(s,t,e,n,i,r,a){const o=new Hh,l=new dx,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.floatVertexTextures,f=i.maxVertexUniforms,_=i.vertexTextures;let g=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){const D=y.skeleton.bones;if(d)return 1024;{const F=Math.floor((f-20)/4),I=Math.min(F,D.length);return I<D.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+D.length+" bones. This GPU supports "+I+"."),0):I}}function p(y,R,D,N,F){const I=N.fog,U=y.isMeshStandardMaterial?N.environment:null,j=(y.isMeshStandardMaterial?e:t).get(y.envMap||U),st=x[y.type],G=F.isSkinnedMesh?m(F):0;y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let X,Q,ut,lt;if(st){const ct=xn[st];X=ct.vertexShader,Q=ct.fragmentShader}else X=y.vertexShader,Q=y.fragmentShader,l.update(y),ut=l.getVertexShaderID(y),lt=l.getFragmentShaderID(y);const k=s.getRenderTarget(),Ot=y.alphaTest>0,pt=y.clearcoat>0;return{isWebGL2:h,shaderID:st,shaderName:y.type,vertexShader:X,fragmentShader:Q,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:_,outputEncoding:k===null?s.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:Yn,map:!!y.map,matcap:!!y.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUV:!!j&&(j.mapping===Fs||j.mapping===yo),lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Yp,tangentSpaceNormalMap:y.normalMapType===ji,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Zt,clearcoat:pt,clearcoatMap:pt&&!!y.clearcoatMap,clearcoatRoughnessMap:pt&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:pt&&!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,transparent:y.transparent,alphaMap:!!y.alphaMap,alphaTest:Ot,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!F.geometry&&!!F.geometry.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.geometry&&!!F.geometry.attributes.color&&F.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!I,useFog:y.fog,fogExp2:I&&I.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0&&G>0,maxBones:G,useVertexTexture:d,morphTargets:!!F.geometry&&!!F.geometry.morphAttributes.position,morphNormals:!!F.geometry&&!!F.geometry.morphAttributes.normal,morphTargetsCount:!!F.geometry&&!!F.geometry.morphAttributes.position?F.geometry.morphAttributes.position.length:0,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:qn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vi,flipSided:y.side===ue,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function b(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)R.push(D),R.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(v(R,y),M(R,y),R.push(s.outputEncoding)),R.push(y.customProgramCacheKey),R.join()}function v(y,R){y.push(R.precision),y.push(R.outputEncoding),y.push(R.envMapMode),y.push(R.combine),y.push(R.vertexUvs),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.maxBones),y.push(R.morphTargetsCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection)}function M(y,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.map&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.envMapCubeUV&&o.enable(7),R.lightMap&&o.enable(8),R.aoMap&&o.enable(9),R.emissiveMap&&o.enable(10),R.bumpMap&&o.enable(11),R.normalMap&&o.enable(12),R.objectSpaceNormalMap&&o.enable(13),R.tangentSpaceNormalMap&&o.enable(14),R.clearcoat&&o.enable(15),R.clearcoatMap&&o.enable(16),R.clearcoatRoughnessMap&&o.enable(17),R.clearcoatNormalMap&&o.enable(18),R.displacementMap&&o.enable(19),R.specularMap&&o.enable(20),R.roughnessMap&&o.enable(21),R.metalnessMap&&o.enable(22),R.gradientMap&&o.enable(23),R.alphaMap&&o.enable(24),R.alphaTest&&o.enable(25),R.vertexColors&&o.enable(26),R.vertexAlphas&&o.enable(27),R.vertexUvs&&o.enable(28),R.vertexTangents&&o.enable(29),R.uvsVertexOnly&&o.enable(30),R.fog&&o.enable(31),y.push(o.mask),o.disableAll(),R.useFog&&o.enable(0),R.flatShading&&o.enable(1),R.logarithmicDepthBuffer&&o.enable(2),R.skinning&&o.enable(3),R.useVertexTexture&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.premultipliedAlpha&&o.enable(7),R.shadowMapEnabled&&o.enable(8),R.physicallyCorrectLights&&o.enable(9),R.doubleSided&&o.enable(10),R.flipSided&&o.enable(11),R.depthPacking&&o.enable(12),R.dithering&&o.enable(13),R.specularIntensityMap&&o.enable(14),R.specularColorMap&&o.enable(15),R.transmission&&o.enable(16),R.transmissionMap&&o.enable(17),R.thicknessMap&&o.enable(18),R.sheen&&o.enable(19),R.sheenColorMap&&o.enable(20),R.sheenRoughnessMap&&o.enable(21),R.decodeVideoTexture&&o.enable(22),R.transparent&&o.enable(23),y.push(o.mask)}function E(y){const R=x[y.type];let D;if(R){const N=xn[R];D=hm.clone(N.uniforms)}else D=y.uniforms;return D}function A(y,R){let D;for(let N=0,F=c.length;N<F;N++){const I=c[N];if(I.cacheKey===R){D=I,++D.usedTimes;break}}return D===void 0&&(D=new hx(s,R,y,r),c.push(D)),D}function P(y){if(--y.usedTimes==0){const R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),y.destroy()}}function O(y){l.remove(y)}function H(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:E,acquireProgram:A,releaseProgram:P,releaseShaderCache:O,programs:c,dispose:H}}function mx(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function gx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Lu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Pu(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,_,g,x){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:x},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=x),t++,m}function o(u,d,f,_,g,x){const m=a(u,d,f,_,g,x);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,d,f,_,g,x){const m=a(u,d,f,_,g,x);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||gx),n.length>1&&n.sort(d||Lu),i.length>1&&i.sort(d||Lu)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function _x(){let s=new WeakMap;function t(n,i){let r;return s.has(n)===!1?(r=new Pu,s.set(n,[r])):i>=s.get(n).length?(r=new Pu,s.get(n).push(r)):r=s.get(n)[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function xx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new gt};break;case"SpotLight":e={position:new C,direction:new C,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function vx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let yx=0;function Mx(s,t){return(t.castShadow?1:0)-(s.castShadow?1:0)}function bx(s,t){const e=new xx,n=vx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new C);const r=new C,a=new vt,o=new vt;function l(h,u){let d=0,f=0,_=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let g=0,x=0,m=0,p=0,b=0,v=0,M=0,E=0;h.sort(Mx);const A=u!==!0?Math.PI:1;for(let O=0,H=h.length;O<H;O++){const y=h[O],R=y.color,D=y.intensity,N=y.distance,F=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)d+=R.r*D*A,f+=R.g*D*A,_+=R.b*D*A;else if(y.isLightProbe)for(let I=0;I<9;I++)i.probe[I].addScaledVector(y.sh.coefficients[I],D);else if(y.isDirectionalLight){const I=e.get(y);if(I.color.copy(y.color).multiplyScalar(y.intensity*A),y.castShadow){const U=y.shadow,j=n.get(y);j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,i.directionalShadow[g]=j,i.directionalShadowMap[g]=F,i.directionalShadowMatrix[g]=y.shadow.matrix,v++}i.directional[g]=I,g++}else if(y.isSpotLight){const I=e.get(y);if(I.position.setFromMatrixPosition(y.matrixWorld),I.color.copy(R).multiplyScalar(D*A),I.distance=N,I.coneCos=Math.cos(y.angle),I.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),I.decay=y.decay,y.castShadow){const U=y.shadow,j=n.get(y);j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,i.spotShadow[m]=j,i.spotShadowMap[m]=F,i.spotShadowMatrix[m]=y.shadow.matrix,E++}i.spot[m]=I,m++}else if(y.isRectAreaLight){const I=e.get(y);I.color.copy(R).multiplyScalar(D),I.halfWidth.set(y.width*.5,0,0),I.halfHeight.set(0,y.height*.5,0),i.rectArea[p]=I,p++}else if(y.isPointLight){const I=e.get(y);if(I.color.copy(y.color).multiplyScalar(y.intensity*A),I.distance=y.distance,I.decay=y.decay,y.castShadow){const U=y.shadow,j=n.get(y);j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,j.shadowCameraNear=U.camera.near,j.shadowCameraFar=U.camera.far,i.pointShadow[x]=j,i.pointShadowMap[x]=F,i.pointShadowMatrix[x]=y.shadow.matrix,M++}i.point[x]=I,x++}else if(y.isHemisphereLight){const I=e.get(y);I.skyColor.copy(y.color).multiplyScalar(D*A),I.groundColor.copy(y.groundColor).multiplyScalar(D*A),i.hemi[b]=I,b++}}p>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=_;const P=i.hash;(P.directionalLength!==g||P.pointLength!==x||P.spotLength!==m||P.rectAreaLength!==p||P.hemiLength!==b||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==E)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=x,i.hemi.length=b,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=E,P.directionalLength=g,P.pointLength=x,P.spotLength=m,P.rectAreaLength=p,P.hemiLength=b,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=E,i.version=yx++)}function c(h,u){let d=0,f=0,_=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,b=h.length;p<b;p++){const v=h[p];if(v.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(v.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),_++}else if(v.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),a.copy(v.matrixWorld),a.premultiply(m),o.extractRotation(a),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),M.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function Du(s,t){const e=new bx(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function wx(s,t){let e=new WeakMap;function n(r,a=0){let o;return e.has(r)===!1?(o=new Du(s,t),e.set(r,[o])):a>=e.get(r).length?(o=new Du(s,t),e.get(r).push(o)):o=e.get(r)[a],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class Iu extends Ee{constructor(t){super();this.type="MeshDepthMaterial",this.depthPacking=qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}Iu.prototype.isMeshDepthMaterial=!0;class Fu extends Ee{constructor(t){super();this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}Fu.prototype.isMeshDistanceMaterial=!0;const Sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nu(s,t,e){let n=new aa;const i=new $,r=new $,a=new Xt,o=new Iu({depthPacking:Xp}),l=new Fu,c={},h=e.maxTextureSize,u={0:ue,1:Vr,2:Vi},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:Sx,fragmentShader:Tx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Jt;_.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Be(_,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=th,this.render=function(v,M,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||v.length===0)return;const A=s.getRenderTarget(),P=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Wn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let y=0,R=v.length;y<R;y++){const D=v[y],N=D.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const F=N.getFrameExtents();if(i.multiply(F),r.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/F.x),i.x=r.x*F.x,N.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/F.y),i.y=r.y*F.y,N.mapSize.y=r.y)),N.map===null&&!N.isPointLightShadow&&this.type===kr){const U={minFilter:Te,magFilter:Te,format:Re};N.map=new tn(i.x,i.y,U),N.map.texture.name=D.name+".shadowMap",N.mapPass=new tn(i.x,i.y,U),N.camera.updateProjectionMatrix()}if(N.map===null){const U={minFilter:de,magFilter:de,format:Re};N.map=new tn(i.x,i.y,U),N.map.texture.name=D.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const I=N.getViewportCount();for(let U=0;U<I;U++){const j=N.getViewport(U);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),H.viewport(a),N.updateMatrices(D,U),n=N.getFrustum(),b(M,E,N.camera,D,this.type)}!N.isPointLightShadow&&this.type===kr&&m(N,E),N.needsUpdate=!1}x.needsUpdate=!1,s.setRenderTarget(A,P,O)};function m(v,M){const E=t.update(g);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(M,null,E,d,g,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(M,null,E,f,g,null)}function p(v,M,E,A,P,O,H){let y=null;const R=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(R!==void 0?y=R:y=A.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const D=y.uuid,N=E.uuid;let F=c[D];F===void 0&&(F={},c[D]=F);let I=F[N];I===void 0&&(I=y.clone(),F[N]=I),y=I}return y.visible=E.visible,y.wireframe=E.wireframe,H===kr?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0&&(y.referencePosition.setFromMatrixPosition(A.matrixWorld),y.nearDistance=P,y.farDistance=O),y}function b(v,M,E,A,P){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&P===kr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,v.matrixWorld);const y=t.update(v),R=v.material;if(Array.isArray(R)){const D=y.groups;for(let N=0,F=D.length;N<F;N++){const I=D[N],U=R[I.materialIndex];if(U&&U.visible){const j=p(v,y,U,A,E.near,E.far,P);s.renderBufferDirect(E,null,y,j,v,I)}}}else if(R.visible){const D=p(v,y,R,A,E.near,E.far,P);s.renderBufferDirect(E,null,y,D,v,null)}}const H=v.children;for(let y=0,R=H.length;y<R;y++)b(H[y],M,E,A,P)}}function Ex(s,t,e){const n=e.isWebGL2;function i(){let L=!1;const dt=new Xt;let ot=null;const Mt=new Xt(0,0,0,0);return{setMask:function(Z){ot!==Z&&!L&&(s.colorMask(Z,Z,Z,Z),ot=Z)},setLocked:function(Z){L=Z},setClear:function(Z,xt,Dt,Kt,ze){ze===!0&&(Z*=Kt,xt*=Kt,Dt*=Kt),dt.set(Z,xt,Dt,Kt),Mt.equals(dt)===!1&&(s.clearColor(Z,xt,Dt,Kt),Mt.copy(dt))},reset:function(){L=!1,ot=null,Mt.set(-1,0,0,0)}}}function r(){let L=!1,dt=null,ot=null,Mt=null;return{setTest:function(Z){Z?k(2929):Ot(2929)},setMask:function(Z){dt!==Z&&!L&&(s.depthMask(Z),dt=Z)},setFunc:function(Z){if(ot!==Z){if(Z)switch(Z){case up:s.depthFunc(512);break;case dp:s.depthFunc(519);break;case fp:s.depthFunc(513);break;case _o:s.depthFunc(515);break;case pp:s.depthFunc(514);break;case mp:s.depthFunc(518);break;case gp:s.depthFunc(516);break;case _p:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);ot=Z}},setLocked:function(Z){L=Z},setClear:function(Z){Mt!==Z&&(s.clearDepth(Z),Mt=Z)},reset:function(){L=!1,dt=null,ot=null,Mt=null}}}function a(){let L=!1,dt=null,ot=null,Mt=null,Z=null,xt=null,Dt=null,Kt=null,ze=null;return{setTest:function(ne){L||(ne?k(2960):Ot(2960))},setMask:function(ne){dt!==ne&&!L&&(s.stencilMask(ne),dt=ne)},setFunc:function(ne,hn,bn){(ot!==ne||Mt!==hn||Z!==bn)&&(s.stencilFunc(ne,hn,bn),ot=ne,Mt=hn,Z=bn)},setOp:function(ne,hn,bn){(xt!==ne||Dt!==hn||Kt!==bn)&&(s.stencilOp(ne,hn,bn),xt=ne,Dt=hn,Kt=bn)},setLocked:function(ne){L=ne},setClear:function(ne){ze!==ne&&(s.clearStencil(ne),ze=ne)},reset:function(){L=!1,dt=null,ot=null,Mt=null,Z=null,xt=null,Dt=null,Kt=null,ze=null}}}const o=new i,l=new r,c=new a;let h={},u={},d=new WeakMap,f=[],_=null,g=!1,x=null,m=null,p=null,b=null,v=null,M=null,E=null,A=!1,P=null,O=null,H=null,y=null,R=null;const D=s.getParameter(35661);let N=!1,F=0;const I=s.getParameter(7938);I.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(I)[1]),N=F>=1):I.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),N=F>=2);let U=null,j={};const st=s.getParameter(3088),G=s.getParameter(2978),X=new Xt().fromArray(st),Q=new Xt().fromArray(G);function ut(L,dt,ot){const Mt=new Uint8Array(4),Z=s.createTexture();s.bindTexture(L,Z),s.texParameteri(L,10241,9728),s.texParameteri(L,10240,9728);for(let xt=0;xt<ot;xt++)s.texImage2D(dt+xt,0,6408,1,1,0,6408,5121,Mt);return Z}const lt={};lt[3553]=ut(3553,3553,1),lt[34067]=ut(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),k(2929),l.setFunc(_o),K(!1),ht(Qc),k(2884),Y(Wn);function k(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Ot(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function pt(L,dt){return u[L]!==dt?(s.bindFramebuffer(L,dt),u[L]=dt,n&&(L===36009&&(u[36160]=dt),L===36160&&(u[36009]=dt)),!0):!1}function bt(L,dt){let ot=f,Mt=!1;if(L)if(ot=d.get(dt),ot===void 0&&(ot=[],d.set(dt,ot)),L.isWebGLMultipleRenderTargets){const Z=L.texture;if(ot.length!==Z.length||ot[0]!==36064){for(let xt=0,Dt=Z.length;xt<Dt;xt++)ot[xt]=36064+xt;ot.length=Z.length,Mt=!0}}else ot[0]!==36064&&(ot[0]=36064,Mt=!0);else ot[0]!==1029&&(ot[0]=1029,Mt=!0);Mt&&(e.isWebGL2?s.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function ct(L){return _!==L?(s.useProgram(L),_=L,!0):!1}const Ct={[Hi]:32774,[tp]:32778,[ep]:32779};if(n)Ct[sh]=32775,Ct[ah]=32776;else{const L=t.get("EXT_blend_minmax");L!==null&&(Ct[sh]=L.MIN_EXT,Ct[ah]=L.MAX_EXT)}const wt={[np]:0,[ip]:1,[rp]:768,[oh]:770,[hp]:776,[lp]:774,[ap]:772,[sp]:769,[lh]:771,[cp]:775,[op]:773};function Y(L,dt,ot,Mt,Z,xt,Dt,Kt){if(L===Wn){g===!0&&(Ot(3042),g=!1);return}if(g===!1&&(k(3042),g=!0),L!==Qf){if(L!==x||Kt!==A){if((m!==Hi||v!==Hi)&&(s.blendEquation(32774),m=Hi,v=Hi),Kt)switch(L){case Hr:s.blendFuncSeparate(1,771,1,771);break;case nh:s.blendFunc(1,1);break;case ih:s.blendFuncSeparate(0,769,0,1);break;case rh:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Hr:s.blendFuncSeparate(770,771,1,771);break;case nh:s.blendFunc(770,1);break;case ih:s.blendFuncSeparate(0,769,0,1);break;case rh:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,b=null,M=null,E=null,x=L,A=Kt}return}Z=Z||dt,xt=xt||ot,Dt=Dt||Mt,(dt!==m||Z!==v)&&(s.blendEquationSeparate(Ct[dt],Ct[Z]),m=dt,v=Z),(ot!==p||Mt!==b||xt!==M||Dt!==E)&&(s.blendFuncSeparate(wt[ot],wt[Mt],wt[xt],wt[Dt]),p=ot,b=Mt,M=xt,E=Dt),x=L,A=null}function et(L,dt){L.side===Vi?Ot(2884):k(2884);let ot=L.side===ue;dt&&(ot=!ot),K(ot),L.blending===Hr&&L.transparent===!1?Y(Wn):Y(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Mt=L.stencilWrite;c.setTest(Mt),Mt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),yt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?k(32926):Ot(32926)}function K(L){P!==L&&(L?s.frontFace(2304):s.frontFace(2305),P=L)}function ht(L){L!==Jf?(k(2884),L!==O&&(L===Qc?s.cullFace(1029):L===$f?s.cullFace(1028):s.cullFace(1032))):Ot(2884),O=L}function at(L){L!==H&&(N&&s.lineWidth(L),H=L)}function yt(L,dt,ot){L?(k(32823),(y!==dt||R!==ot)&&(s.polygonOffset(dt,ot),y=dt,R=ot)):Ot(32823)}function St(L){L?k(3089):Ot(3089)}function Ft(L){L===void 0&&(L=33984+D-1),U!==L&&(s.activeTexture(L),U=L)}function Yt(L,dt){U===null&&Ft();let ot=j[U];ot===void 0&&(ot={type:void 0,texture:void 0},j[U]=ot),(ot.type!==L||ot.texture!==dt)&&(s.bindTexture(L,dt||lt[L]),ot.type=L,ot.texture=dt)}function Ht(){const L=j[U];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function T(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function w(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(L){X.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),X.copy(L))}function it(L){Q.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function Et(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},U=null,j={},u={},d=new WeakMap,f=[],_=null,g=!1,x=null,m=null,p=null,b=null,v=null,M=null,E=null,A=!1,P=null,O=null,H=null,y=null,R=null,X.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:k,disable:Ot,bindFramebuffer:pt,drawBuffers:bt,useProgram:ct,setBlending:Y,setMaterial:et,setFlipSided:K,setCullFace:ht,setLineWidth:at,setPolygonOffset:yt,setScissorTest:St,activeTexture:Ft,bindTexture:Yt,unbindTexture:Ht,compressedTexImage2D:T,texImage2D:_t,texImage3D:mt,texStorage2D:ft,texStorage3D:W,texSubImage2D:w,texSubImage3D:q,compressedTexSubImage2D:tt,scissor:rt,viewport:it,reset:Et}}function Ax(s,t,e,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):void 0,_=new WeakMap;let g,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,w){return x?new OffscreenCanvas(T,w):Yr("canvas")}function p(T,w,q,tt){let ft=1;if((T.width>tt||T.height>tt)&&(ft=tt/Math.max(T.width,T.height)),ft<1||w===!0)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap){const W=w?Jp:Math.floor,_t=W(ft*T.width),mt=W(ft*T.height);g===void 0&&(g=m(_t,mt));const rt=q?m(_t,mt):g;return rt.width=_t,rt.height=mt,rt.getContext("2d").drawImage(T,0,0,_t,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+_t+"x"+mt+")."),rt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function b(T){return Nh(T.width)&&Nh(T.height)}function v(T){return o?!1:T.wrapS!==We||T.wrapT!==We||T.minFilter!==de&&T.minFilter!==Te}function M(T,w){return T.generateMipmaps&&w&&T.minFilter!==de&&T.minFilter!==Te}function E(T){s.generateMipmap(T)}function A(T,w,q,tt,ft=!1){if(o===!1)return w;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=w;return w===6403&&(q===5126&&(W=33326),q===5131&&(W=33325),q===5121&&(W=33321)),w===33319&&(q===5126&&(W=33328),q===5131&&(W=33327),q===5121&&(W=33323)),w===6408&&(q===5126&&(W=34836),q===5131&&(W=34842),q===5121&&(W=tt===Zt&&ft===!1?35907:32856),q===32819&&(W=32854),q===32820&&(W=32855)),(W===33325||W===33326||W===33327||W===33328||W===34842||W===34836)&&t.get("EXT_color_buffer_float"),W}function P(T,w,q){return M(T,q)===!0||T.isFramebufferTexture&&T.minFilter!==de&&T.minFilter!==Te?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function O(T){return T===de||T===hh||T===uh?9728:9729}function H(T){const w=T.target;w.removeEventListener("dispose",H),R(w),w.isVideoTexture&&_.delete(w),a.memory.textures--}function y(T){const w=T.target;w.removeEventListener("dispose",y),D(w)}function R(T){const w=n.get(T);w.__webglInit!==void 0&&(s.deleteTexture(w.__webglTexture),n.remove(T))}function D(T){const w=T.texture,q=n.get(T),tt=n.get(w);if(!!T){if(tt.__webglTexture!==void 0&&(s.deleteTexture(tt.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++)s.deleteFramebuffer(q.__webglFramebuffer[ft]),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[ft]);else s.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer&&s.deleteRenderbuffer(q.__webglColorRenderbuffer),q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer);if(T.isWebGLMultipleRenderTargets)for(let ft=0,W=w.length;ft<W;ft++){const _t=n.get(w[ft]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(w[ft])}n.remove(w),n.remove(T)}}let N=0;function F(){N=0}function I(){const T=N;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),N+=1,T}function U(T,w){const q=n.get(T);if(T.isVideoTexture&&at(T),T.version>0&&q.__version!==T.version){const tt=T.image;if(tt===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(q,T,w);return}}e.activeTexture(33984+w),e.bindTexture(3553,q.__webglTexture)}function j(T,w){const q=n.get(T);if(T.version>0&&q.__version!==T.version){k(q,T,w);return}e.activeTexture(33984+w),e.bindTexture(35866,q.__webglTexture)}function st(T,w){const q=n.get(T);if(T.version>0&&q.__version!==T.version){k(q,T,w);return}e.activeTexture(33984+w),e.bindTexture(32879,q.__webglTexture)}function G(T,w){const q=n.get(T);if(T.version>0&&q.__version!==T.version){Ot(q,T,w);return}e.activeTexture(33984+w),e.bindTexture(34067,q.__webglTexture)}const X={[Mo]:10497,[We]:33071,[bo]:33648},Q={[de]:9728,[hh]:9984,[uh]:9986,[Te]:9729,[Tp]:9985,[Ns]:9987};function ut(T,w,q){if(q?(s.texParameteri(T,10242,X[w.wrapS]),s.texParameteri(T,10243,X[w.wrapT]),(T===32879||T===35866)&&s.texParameteri(T,32882,X[w.wrapR]),s.texParameteri(T,10240,Q[w.magFilter]),s.texParameteri(T,10241,Q[w.minFilter])):(s.texParameteri(T,10242,33071),s.texParameteri(T,10243,33071),(T===32879||T===35866)&&s.texParameteri(T,32882,33071),(w.wrapS!==We||w.wrapT!==We)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,10240,O(w.magFilter)),s.texParameteri(T,10241,O(w.minFilter)),w.minFilter!==de&&w.minFilter!==Te&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(w.type===xi&&t.has("OES_texture_float_linear")===!1||o===!1&&w.type===Gi&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(T,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function lt(T,w){T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",H),T.__webglTexture=s.createTexture(),a.memory.textures++)}function k(T,w,q){let tt=3553;w.isDataTexture2DArray&&(tt=35866),w.isDataTexture3D&&(tt=32879),lt(T,w),e.activeTexture(33984+q),e.bindTexture(tt,T.__webglTexture),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const ft=v(w)&&b(w.image)===!1;let W=p(w.image,ft,!1,h);W=yt(w,W);const _t=b(W)||o,mt=r.convert(w.format,w.encoding);let rt=r.convert(w.type),it=A(w.internalFormat,mt,rt,w.encoding,w.isVideoTexture);ut(tt,w,_t);let Et;const L=w.mipmaps,dt=o&&w.isVideoTexture!==!0,ot=T.__version===void 0,Mt=P(w,W,_t);if(w.isDepthTexture)it=6402,o?w.type===xi?it=36012:w.type===Bs?it=33190:w.type===Wi?it=35056:it=33189:w.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===vi&&it===6402&&w.type!==qr&&w.type!==Bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=qr,rt=r.convert(w.type)),w.format===qi&&it===6402&&(it=34041,w.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Wi,rt=r.convert(w.type))),dt&&ot?e.texStorage2D(3553,1,it,W.width,W.height):e.texImage2D(3553,0,it,W.width,W.height,0,mt,rt,null);else if(w.isDataTexture)if(L.length>0&&_t){dt&&ot&&e.texStorage2D(3553,Mt,it,L[0].width,L[0].height);for(let Z=0,xt=L.length;Z<xt;Z++)Et=L[Z],dt?e.texSubImage2D(3553,0,0,0,Et.width,Et.height,mt,rt,Et.data):e.texImage2D(3553,Z,it,Et.width,Et.height,0,mt,rt,Et.data);w.generateMipmaps=!1}else dt?(ot&&e.texStorage2D(3553,Mt,it,W.width,W.height),e.texSubImage2D(3553,0,0,0,W.width,W.height,mt,rt,W.data)):e.texImage2D(3553,0,it,W.width,W.height,0,mt,rt,W.data);else if(w.isCompressedTexture){dt&&ot&&e.texStorage2D(3553,Mt,it,L[0].width,L[0].height);for(let Z=0,xt=L.length;Z<xt;Z++)Et=L[Z],w.format!==Re?mt!==null?dt?e.compressedTexSubImage2D(3553,Z,0,0,Et.width,Et.height,mt,Et.data):e.compressedTexImage2D(3553,Z,it,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage2D(3553,Z,0,0,Et.width,Et.height,mt,rt,Et.data):e.texImage2D(3553,Z,it,Et.width,Et.height,0,mt,rt,Et.data)}else if(w.isDataTexture2DArray)dt?(ot&&e.texStorage3D(35866,Mt,it,W.width,W.height,W.depth),e.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,mt,rt,W.data)):e.texImage3D(35866,0,it,W.width,W.height,W.depth,0,mt,rt,W.data);else if(w.isDataTexture3D)dt?(ot&&e.texStorage3D(32879,Mt,it,W.width,W.height,W.depth),e.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,mt,rt,W.data)):e.texImage3D(32879,0,it,W.width,W.height,W.depth,0,mt,rt,W.data);else if(w.isFramebufferTexture)dt&&ot?e.texStorage2D(3553,Mt,it,W.width,W.height):e.texImage2D(3553,0,it,W.width,W.height,0,mt,rt,null);else if(L.length>0&&_t){dt&&ot&&e.texStorage2D(3553,Mt,it,L[0].width,L[0].height);for(let Z=0,xt=L.length;Z<xt;Z++)Et=L[Z],dt?e.texSubImage2D(3553,Z,0,0,mt,rt,Et):e.texImage2D(3553,Z,it,mt,rt,Et);w.generateMipmaps=!1}else dt?(ot&&e.texStorage2D(3553,Mt,it,W.width,W.height),e.texSubImage2D(3553,0,0,0,mt,rt,W)):e.texImage2D(3553,0,it,mt,rt,W);M(w,_t)&&E(tt),T.__version=w.version,w.onUpdate&&w.onUpdate(w)}function Ot(T,w,q){if(w.image.length!==6)return;lt(T,w),e.activeTexture(33984+q),e.bindTexture(34067,T.__webglTexture),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const tt=w&&(w.isCompressedTexture||w.image[0].isCompressedTexture),ft=w.image[0]&&w.image[0].isDataTexture,W=[];for(let Z=0;Z<6;Z++)!tt&&!ft?W[Z]=p(w.image[Z],!1,!0,c):W[Z]=ft?w.image[Z].image:w.image[Z],W[Z]=yt(w,W[Z]);const _t=W[0],mt=b(_t)||o,rt=r.convert(w.format,w.encoding),it=r.convert(w.type),Et=A(w.internalFormat,rt,it,w.encoding),L=o&&w.isVideoTexture!==!0,dt=T.__version===void 0;let ot=P(w,_t,mt);ut(34067,w,mt);let Mt;if(tt){L&&dt&&e.texStorage2D(34067,ot,Et,_t.width,_t.height);for(let Z=0;Z<6;Z++){Mt=W[Z].mipmaps;for(let xt=0;xt<Mt.length;xt++){const Dt=Mt[xt];w.format!==Re?rt!==null?L?e.compressedTexSubImage2D(34069+Z,xt,0,0,Dt.width,Dt.height,rt,Dt.data):e.compressedTexImage2D(34069+Z,xt,Et,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?e.texSubImage2D(34069+Z,xt,0,0,Dt.width,Dt.height,rt,it,Dt.data):e.texImage2D(34069+Z,xt,Et,Dt.width,Dt.height,0,rt,it,Dt.data)}}}else{Mt=w.mipmaps,L&&dt&&(Mt.length>0&&ot++,e.texStorage2D(34067,ot,Et,W[0].width,W[0].height));for(let Z=0;Z<6;Z++)if(ft){L?e.texSubImage2D(34069+Z,0,0,0,W[Z].width,W[Z].height,rt,it,W[Z].data):e.texImage2D(34069+Z,0,Et,W[Z].width,W[Z].height,0,rt,it,W[Z].data);for(let xt=0;xt<Mt.length;xt++){const Kt=Mt[xt].image[Z].image;L?e.texSubImage2D(34069+Z,xt+1,0,0,Kt.width,Kt.height,rt,it,Kt.data):e.texImage2D(34069+Z,xt+1,Et,Kt.width,Kt.height,0,rt,it,Kt.data)}}else{L?e.texSubImage2D(34069+Z,0,0,0,rt,it,W[Z]):e.texImage2D(34069+Z,0,Et,rt,it,W[Z]);for(let xt=0;xt<Mt.length;xt++){const Dt=Mt[xt];L?e.texSubImage2D(34069+Z,xt+1,0,0,rt,it,Dt.image[Z]):e.texImage2D(34069+Z,xt+1,Et,rt,it,Dt.image[Z])}}}M(w,mt)&&E(34067),T.__version=w.version,w.onUpdate&&w.onUpdate(w)}function pt(T,w,q,tt,ft){const W=r.convert(q.format,q.encoding),_t=r.convert(q.type),mt=A(q.internalFormat,W,_t,q.encoding);n.get(w).__hasExternalTextures||(ft===32879||ft===35866?e.texImage3D(ft,0,mt,w.width,w.height,w.depth,0,W,_t,null):e.texImage2D(ft,0,mt,w.width,w.height,0,W,_t,null)),e.bindFramebuffer(36160,T),w.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,tt,ft,n.get(q).__webglTexture,0,ht(w)):s.framebufferTexture2D(36160,tt,ft,n.get(q).__webglTexture,0),e.bindFramebuffer(36160,null)}function bt(T,w,q){if(s.bindRenderbuffer(36161,T),w.depthBuffer&&!w.stencilBuffer){let tt=33189;if(q||w.useRenderToTexture){const ft=w.depthTexture;ft&&ft.isDepthTexture&&(ft.type===xi?tt=36012:ft.type===Bs&&(tt=33190));const W=ht(w);w.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,W,tt,w.width,w.height):s.renderbufferStorageMultisample(36161,W,tt,w.width,w.height)}else s.renderbufferStorage(36161,tt,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,T)}else if(w.depthBuffer&&w.stencilBuffer){const tt=ht(w);q&&w.useRenderbuffer?s.renderbufferStorageMultisample(36161,tt,35056,w.width,w.height):w.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,tt,35056,w.width,w.height):s.renderbufferStorage(36161,34041,w.width,w.height),s.framebufferRenderbuffer(36160,33306,36161,T)}else{const tt=w.isWebGLMultipleRenderTargets===!0?w.texture[0]:w.texture,ft=r.convert(tt.format,tt.encoding),W=r.convert(tt.type),_t=A(tt.internalFormat,ft,W,tt.encoding),mt=ht(w);q&&w.useRenderbuffer?s.renderbufferStorageMultisample(36161,mt,_t,w.width,w.height):w.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,mt,_t,w.width,w.height):s.renderbufferStorage(36161,_t,w.width,w.height)}s.bindRenderbuffer(36161,null)}function ct(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);const tt=n.get(w.depthTexture).__webglTexture,ft=ht(w);if(w.depthTexture.format===vi)w.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,ft):s.framebufferTexture2D(36160,36096,3553,tt,0);else if(w.depthTexture.format===qi)w.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,ft):s.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function Ct(T){const w=n.get(T),q=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ct(w.__webglFramebuffer,T)}else if(q){w.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,w.__webglFramebuffer[tt]),w.__webglDepthbuffer[tt]=s.createRenderbuffer(),bt(w.__webglDepthbuffer[tt],T,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),bt(w.__webglDepthbuffer,T,!1);e.bindFramebuffer(36160,null)}function wt(T,w,q){const tt=n.get(T);w!==void 0&&pt(tt.__webglFramebuffer,T,T.texture,36064,3553),q!==void 0&&Ct(T)}function Y(T){const w=T.texture,q=n.get(T),tt=n.get(w);T.addEventListener("dispose",y),T.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=w.version,a.memory.textures++);const ft=T.isWebGLCubeRenderTarget===!0,W=T.isWebGLMultipleRenderTargets===!0,_t=w.isDataTexture3D||w.isDataTexture2DArray,mt=b(T)||o;if(ft){q.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)q.__webglFramebuffer[rt]=s.createFramebuffer()}else if(q.__webglFramebuffer=s.createFramebuffer(),W)if(i.drawBuffers){const rt=T.texture;for(let it=0,Et=rt.length;it<Et;it++){const L=n.get(rt[it]);L.__webglTexture===void 0&&(L.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(T.useRenderbuffer)if(o){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,q.__webglColorRenderbuffer);const rt=r.convert(w.format,w.encoding),it=r.convert(w.type),Et=A(w.internalFormat,rt,it,w.encoding),L=ht(T);s.renderbufferStorageMultisample(36161,L,Et,T.width,T.height),e.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,q.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),T.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),bt(q.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(ft){e.bindTexture(34067,tt.__webglTexture),ut(34067,w,mt);for(let rt=0;rt<6;rt++)pt(q.__webglFramebuffer[rt],T,w,36064,34069+rt);M(w,mt)&&E(34067),e.unbindTexture()}else if(W){const rt=T.texture;for(let it=0,Et=rt.length;it<Et;it++){const L=rt[it],dt=n.get(L);e.bindTexture(3553,dt.__webglTexture),ut(3553,L,mt),pt(q.__webglFramebuffer,T,L,36064+it,3553),M(L,mt)&&E(3553)}e.unbindTexture()}else{let rt=3553;_t&&(o?rt=w.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),e.bindTexture(rt,tt.__webglTexture),ut(rt,w,mt),pt(q.__webglFramebuffer,T,w,36064,rt),M(w,mt)&&E(rt),e.unbindTexture()}T.depthBuffer&&Ct(T)}function et(T){const w=b(T)||o,q=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let tt=0,ft=q.length;tt<ft;tt++){const W=q[tt];if(M(W,w)){const _t=T.isWebGLCubeRenderTarget?34067:3553,mt=n.get(W).__webglTexture;e.bindTexture(_t,mt),E(_t),e.unbindTexture()}}}function K(T){if(T.useRenderbuffer)if(o){const w=T.width,q=T.height;let tt=16384;const ft=[36064],W=T.stencilBuffer?33306:36096;T.depthBuffer&&ft.push(W),T.ignoreDepthForMultisampleCopy||(T.depthBuffer&&(tt|=256),T.stencilBuffer&&(tt|=1024));const _t=n.get(T);e.bindFramebuffer(36008,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,_t.__webglFramebuffer),T.ignoreDepthForMultisampleCopy&&(s.invalidateFramebuffer(36008,[W]),s.invalidateFramebuffer(36009,[W])),s.blitFramebuffer(0,0,w,q,0,0,w,q,tt,9728),s.invalidateFramebuffer(36008,ft),e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,_t.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function ht(T){return o&&(T.useRenderbuffer||T.useRenderToTexture)?Math.min(u,T.samples):0}function at(T){const w=a.render.frame;_.get(T)!==w&&(_.set(T,w),T.update())}function yt(T,w){const q=T.encoding,tt=T.format,ft=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Lo||q!==Yn&&(q===Zt?o===!1?t.has("EXT_sRGB")===!0&&tt===Re?(T.format=Lo,T.minFilter=Te,T.generateMipmaps=!1):w=Mi.sRGBToLinear(w):(tt!==Re||ft!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),w}let St=!1,Ft=!1;function Yt(T,w){T&&T.isWebGLRenderTarget&&(St===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),St=!0),T=T.texture),U(T,w)}function Ht(T,w){T&&T.isWebGLCubeRenderTarget&&(Ft===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Ft=!0),T=T.texture),G(T,w)}this.allocateTextureUnit=I,this.resetTextureUnits=F,this.setTexture2D=U,this.setTexture2DArray=j,this.setTexture3D=st,this.setTextureCube=G,this.rebindTextures=wt,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=pt,this.safeSetTexture2D=Yt,this.safeSetTextureCube=Ht}function Cx(s,t,e){const n=e.isWebGL2;function i(r,a=null){let o;if(r===Xn)return 5121;if(r===Rp)return 32819;if(r===Lp)return 32820;if(r===Ep)return 5120;if(r===Ap)return 5122;if(r===qr)return 5123;if(r===Cp)return 5124;if(r===Bs)return 5125;if(r===xi)return 5126;if(r===Gi)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Pp)return 6406;if(r===Re)return 6408;if(r===Ip)return 6409;if(r===Fp)return 6410;if(r===vi)return 6402;if(r===qi)return 34041;if(r===Np)return 6403;if(r===Dp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Lo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Bp)return 36244;if(r===Op)return 33319;if(r===zp)return 33320;if(r===Up)return 36249;if(r===wo||r===So||r===To||r===Eo)if(a===Zt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===wo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===So)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===To)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===wo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===So)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===To)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Eo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dh||r===fh||r===ph||r===mh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===dh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ph)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kp)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===gh||r===_h)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===gh)return a===Zt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===_h)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xh||r===vh||r===yh||r===Mh||r===bh||r===wh||r===Sh||r===Th||r===Eh||r===Ah||r===Ch||r===Rh||r===Lh||r===Ph)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===xh)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vh)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yh)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mh)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bh)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wh)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sh)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Th)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Eh)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ah)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ch)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rh)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lh)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ph)return a===Zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Dh)return a===Zt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Wi)return n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class Bu extends Oe{constructor(t=[]){super();this.cameras=t}}Bu.prototype.isArrayCamera=!0;class ts extends kt{constructor(){super();this.type="Group"}}ts.prototype.isGroup=!0;const Rx={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rx))),c&&t.hand){a=!0;for(const g of t.hand.values()){const x=e.getJointPose(g,n);if(c.joints[g.jointName]===void 0){const p=new ts;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[g.jointName]=p,c.add(p)}const m=c.joints[g.jointName];x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=x.radius),m.visible=x!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class pl extends me{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:vi,h!==vi&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vi&&(n=qr),n===void 0&&h===qi&&(n=Wi);super(null,i,r,a,o,l,h,n,c);this.image={width:t,height:e},this.magFilter=o!==void 0?o:de,this.minFilter=l!==void 0?l:de,this.flipY=!1,this.generateMipmaps=!1}}pl.prototype.isDepthTexture=!0;class Lx extends yi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor";const l=t.extensions.has("WEBGL_multisampled_render_to_texture");let c=null,h=null,u=null,d=null,f=!1,_=null;const g=e.getContextAttributes();let x=null,m=null;const p=[],b=new Map,v=new Oe;v.layers.enable(1),v.viewport=new Xt;const M=new Oe;M.layers.enable(2),M.viewport=new Xt;const E=[v,M],A=new Bu;A.layers.enable(1),A.layers.enable(2);let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let X=p[G];return X===void 0&&(X=new fl,p[G]=X),X.getTargetRaySpace()},this.getControllerGrip=function(G){let X=p[G];return X===void 0&&(X=new fl,p[G]=X),X.getGripSpace()},this.getHand=function(G){let X=p[G];return X===void 0&&(X=new fl,p[G]=X),X.getHandSpace()};function H(G){const X=b.get(G.inputSource);X&&X.dispatchEvent({type:G.type,data:G.inputSource})}function y(){b.forEach(function(G,X){G.disconnect(X)}),b.clear(),P=null,O=null,t.setRenderTarget(x),d=null,u=null,h=null,i=null,m=null,st.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(x=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",y),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,X),i.updateRenderState({baseLayer:d}),m=new tn(d.framebufferWidth,d.framebufferHeight,{format:Re,type:Xn,encoding:t.outputEncoding})}else{f=g.antialias;let X=null,Q=null,ut=null;g.depth&&(ut=g.stencil?35056:33190,X=g.stencil?qi:vi,Q=g.stencil?Wi:qr);const lt={colorFormat:t.outputEncoding===Zt?35907:32856,depthFormat:ut,scaleFactor:r};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(lt),i.updateRenderState({layers:[u]}),f?m=new Oo(u.textureWidth,u.textureHeight,{format:Re,type:Xn,depthTexture:new pl(u.textureWidth,u.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,ignoreDepth:u.ignoreDepthValues,useRenderToTexture:l,encoding:t.outputEncoding}):m=new tn(u.textureWidth,u.textureHeight,{format:Re,type:Xn,depthTexture:new pl(u.textureWidth,u.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,ignoreDepth:u.ignoreDepthValues,encoding:t.outputEncoding})}m.isXRRenderTarget=!0,this.setFoveation(1),a=await i.requestReferenceSpace(o),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(G){const X=i.inputSources;for(let Q=0;Q<p.length;Q++)b.set(X[Q],p[Q]);for(let Q=0;Q<G.removed.length;Q++){const ut=G.removed[Q],lt=b.get(ut);lt&&(lt.dispatchEvent({type:"disconnected",data:ut}),b.delete(ut))}for(let Q=0;Q<G.added.length;Q++){const ut=G.added[Q],lt=b.get(ut);lt&&lt.dispatchEvent({type:"connected",data:ut})}}const D=new C,N=new C;function F(G,X,Q){D.setFromMatrixPosition(X.matrixWorld),N.setFromMatrixPosition(Q.matrixWorld);const ut=D.distanceTo(N),lt=X.projectionMatrix.elements,k=Q.projectionMatrix.elements,Ot=lt[14]/(lt[10]-1),pt=lt[14]/(lt[10]+1),bt=(lt[9]+1)/lt[5],ct=(lt[9]-1)/lt[5],Ct=(lt[8]-1)/lt[0],wt=(k[8]+1)/k[0],Y=Ot*Ct,et=Ot*wt,K=ut/(-Ct+wt),ht=K*-Ct;X.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ht),G.translateZ(K),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const at=Ot+K,yt=pt+K,St=Y-ht,Ft=et+(ut-ht),Yt=bt*pt/yt*at,Ht=ct*pt/yt*at;G.projectionMatrix.makePerspective(St,Ft,Yt,Ht,at,yt)}function I(G,X){X===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(X.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;A.near=M.near=v.near=G.near,A.far=M.far=v.far=G.far,(P!==A.near||O!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,O=A.far);const X=G.parent,Q=A.cameras;I(A,X);for(let lt=0;lt<Q.length;lt++)I(Q[lt],X);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),G.position.copy(A.position),G.quaternion.copy(A.quaternion),G.scale.copy(A.scale),G.matrix.copy(A.matrix),G.matrixWorld.copy(A.matrixWorld);const ut=G.children;for(let lt=0,k=ut.length;lt<k;lt++)ut[lt].updateMatrixWorld(!0);Q.length===2?F(A,v,M):A.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(G){u!==null&&(u.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)};let U=null;function j(G,X){if(c=X.getViewerPose(a),_=X,c!==null){const ut=c.views;d!==null&&(t.setRenderTargetFramebuffer(m,d.framebuffer),t.setRenderTarget(m));let lt=!1;ut.length!==A.cameras.length&&(A.cameras.length=0,lt=!0);for(let k=0;k<ut.length;k++){const Ot=ut[k];let pt=null;if(d!==null)pt=d.getViewport(Ot);else{const ct=h.getViewSubImage(u,Ot);pt=ct.viewport,k===0&&(t.setRenderTargetTextures(m,ct.colorTexture,u.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(m))}const bt=E[k];bt.matrix.fromArray(Ot.transform.matrix),bt.projectionMatrix.fromArray(Ot.projectionMatrix),bt.viewport.set(pt.x,pt.y,pt.width,pt.height),k===0&&A.matrix.copy(bt.matrix),lt===!0&&A.cameras.push(bt)}}const Q=i.inputSources;for(let ut=0;ut<p.length;ut++){const lt=p[ut],k=Q[ut];lt.update(k,X,a)}U&&U(G,X),_=null}const st=new Qh;st.setAnimationLoop(j),this.setAnimationLoop=function(G){U=G},this.dispose=function(){}}}function Px(s){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function e(m,p,b,v,M){p.isMeshBasicMaterial?n(m,p):p.isMeshLambertMaterial?(n(m,p),l(m,p)):p.isMeshToonMaterial?(n(m,p),h(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p)):p.isMeshStandardMaterial?(n(m,p),p.isMeshPhysicalMaterial?d(m,p,M):u(m,p)):p.isMeshMatcapMaterial?(n(m,p),f(m,p)):p.isMeshDepthMaterial?(n(m,p),_(m,p)):p.isMeshDistanceMaterial?(n(m,p),g(m,p)):p.isMeshNormalMaterial?(n(m,p),x(m,p)):p.isLineBasicMaterial?(i(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?a(m,p,b,v):p.isSpriteMaterial?o(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=s.get(p).envMap;b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix));let M;p.aoMap?M=p.aoMap:p.lightMap&&(M=p.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uv2Transform.value.copy(M.matrix))}function i(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,b,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=v*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function l(m,p){p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),s.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){u(m,p),m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ue&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function _(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function g(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}function x(m,p){p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:e}}function Dx(){const s=Yr("canvas");return s.style.display="block",s}function Gt(s={}){const t=s.canvas!==void 0?s.canvas:Dx(),e=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,a=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,l=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",h=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u=null,d=null;const f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Yn,this.physicallyCorrectLights=!1,this.toneMapping=qn,this.toneMappingExposure=1;const g=this;let x=!1,m=0,p=0,b=null,v=-1,M=null;const E=new Xt,A=new Xt;let P=null,O=t.width,H=t.height,y=1,R=null,D=null;const N=new Xt(0,0,O,H),F=new Xt(0,0,O,H);let I=!1;const U=new aa;let j=!1,st=!1,G=null;const X=new vt,Q=new C,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return b===null?y:1}let k=e;function Ot(S,B){for(let V=0;V<S.length;V++){const z=S[V],J=t.getContext(z,B);if(J!==null)return J}return null}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${go}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",L,!1),k===null){const B=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&B.shift(),k=Ot(B,S),k===null)throw Ot(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let pt,bt,ct,Ct,wt,Y,et,K,ht,at,yt,St,Ft,Yt,Ht,T,w,q,tt,ft,W,_t,mt;function rt(){pt=new $_(k),bt=new q_(k,pt,s),pt.init(bt),_t=new Cx(k,pt,bt),ct=new Ex(k,pt,bt),Ct=new t0(k),wt=new mx,Y=new Ax(k,pt,ct,wt,bt,_t,Ct),et=new Y_(g),K=new J_(g),ht=new mm(k,bt),mt=new G_(k,pt,ht,bt),at=new K_(k,ht,Ct,mt),yt=new r0(k,at,ht,Ct),tt=new i0(k,bt,Y),T=new X_(wt),St=new px(g,et,K,pt,bt,mt,T),Ft=new Px(wt),Yt=new _x,Ht=new wx(pt,bt),q=new H_(g,et,ct,yt,n,o),w=new Nu(g,yt,bt),ft=new W_(k,pt,Ct,bt),W=new Q_(k,pt,Ct,bt),Ct.programs=St.programs,g.capabilities=bt,g.extensions=pt,g.properties=wt,g.renderLists=Yt,g.shadowMap=w,g.state=ct,g.info=Ct}rt();const it=new Lx(g,k);this.xr=it,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const S=pt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=pt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return y},this.setPixelRatio=function(S){S!==void 0&&(y=S,this.setSize(O,H,!1))},this.getSize=function(S){return S.set(O,H)},this.setSize=function(S,B,V){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,H=B,t.width=Math.floor(S*y),t.height=Math.floor(B*y),V!==!1&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(O*y,H*y).floor()},this.setDrawingBufferSize=function(S,B,V){O=S,H=B,y=V,t.width=Math.floor(S*V),t.height=Math.floor(B*V),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(N)},this.setViewport=function(S,B,V,z){S.isVector4?N.set(S.x,S.y,S.z,S.w):N.set(S,B,V,z),ct.viewport(E.copy(N).multiplyScalar(y).floor())},this.getScissor=function(S){return S.copy(F)},this.setScissor=function(S,B,V,z){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,B,V,z),ct.scissor(A.copy(F).multiplyScalar(y).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(S){ct.setScissorTest(I=S)},this.setOpaqueSort=function(S){R=S},this.setTransparentSort=function(S){D=S},this.getClearColor=function(S){return S.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(S,B,V){let z=0;(S===void 0||S)&&(z|=16384),(B===void 0||B)&&(z|=256),(V===void 0||V)&&(z|=1024),k.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",L,!1),Yt.dispose(),Ht.dispose(),wt.dispose(),et.dispose(),K.dispose(),yt.dispose(),mt.dispose(),St.dispose(),it.dispose(),it.removeEventListener("sessionstart",Dt),it.removeEventListener("sessionend",Kt),G&&(G.dispose(),G=null),ze.stop()};function Et(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const S=Ct.autoReset,B=w.enabled,V=w.autoUpdate,z=w.needsUpdate,J=w.type;rt(),Ct.autoReset=S,w.enabled=B,w.autoUpdate=V,w.needsUpdate=z,w.type=J}function dt(S){const B=S.target;B.removeEventListener("dispose",dt),ot(B)}function ot(S){Mt(S),wt.remove(S)}function Mt(S){const B=wt.get(S).programs;B!==void 0&&(B.forEach(function(V){St.releaseProgram(V)}),S.isShaderMaterial&&St.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,V,z,J,Tt){B===null&&(B=ut);const At=J.isMesh&&J.matrixWorld.determinant()<0,Lt=Ld(S,B,V,z,J);ct.setMaterial(z,At);let Rt=V.index;const Ut=V.attributes.position;if(Rt===null){if(Ut===void 0||Ut.count===0)return}else if(Rt.count===0)return;let Nt=1;z.wireframe===!0&&(Rt=at.getWireframeAttribute(V),Nt=2),mt.setup(J,z,Lt,V,Rt);let Bt,ie=ft;Rt!==null&&(Bt=ht.get(Rt),ie=W,ie.setIndex(Bt));const li=Rt!==null?Rt.count:Ut.count,Ai=V.drawRange.start*Nt,zt=V.drawRange.count*Nt,un=Tt!==null?Tt.start*Nt:0,ce=Tt!==null?Tt.count*Nt:1/0,dn=Math.max(Ai,un),_s=Math.min(li,Ai+zt,un+ce)-1,fn=Math.max(0,_s-dn+1);if(fn!==0){if(J.isMesh)z.wireframe===!0?(ct.setLineWidth(z.wireframeLinewidth*lt()),ie.setMode(1)):ie.setMode(4);else if(J.isLine){let wn=z.linewidth;wn===void 0&&(wn=1),ct.setLineWidth(wn*lt()),J.isLineSegments?ie.setMode(1):J.isLineLoop?ie.setMode(2):ie.setMode(3)}else J.isPoints?ie.setMode(0):J.isSprite&&ie.setMode(4);if(J.isInstancedMesh)ie.renderInstances(dn,fn,J.count);else if(V.isInstancedBufferGeometry){const wn=Math.min(V.instanceCount,V._maxInstanceCount);ie.renderInstances(dn,fn,wn)}else ie.render(dn,fn)}},this.compile=function(S,B){d=Ht.get(S),d.init(),_.push(d),S.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights(g.physicallyCorrectLights),S.traverse(function(V){const z=V.material;if(z)if(Array.isArray(z))for(let J=0;J<z.length;J++){const Tt=z[J];Ca(Tt,S,V)}else Ca(z,S,V)}),_.pop(),d=null};let Z=null;function xt(S){Z&&Z(S)}function Dt(){ze.stop()}function Kt(){ze.start()}const ze=new Qh;ze.setAnimationLoop(xt),typeof window!="undefined"&&ze.setContext(window),this.setAnimationLoop=function(S){Z=S,it.setAnimationLoop(S),S===null?ze.stop():ze.start()},it.addEventListener("sessionstart",Dt),it.addEventListener("sessionend",Kt),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(B),B=it.getCamera()),S.isScene===!0&&S.onBeforeRender(g,S,B,b),d=Ht.get(S,_.length),d.init(),_.push(d),X.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),U.setFromProjectionMatrix(X),st=this.localClippingEnabled,j=T.init(this.clippingPlanes,st,B),u=Yt.get(S,f.length),u.init(),f.push(u),ne(S,B,0,g.sortObjects),u.finish(),g.sortObjects===!0&&u.sort(R,D),j===!0&&T.beginShadows();const V=d.state.shadowsArray;if(w.render(V,S,B),j===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(u,S),d.setupLights(g.physicallyCorrectLights),B.isArrayCamera){const z=B.cameras;for(let J=0,Tt=z.length;J<Tt;J++){const At=z[J];hn(u,S,At,At.viewport)}}else hn(u,S,B);b!==null&&(Y.updateMultisampleRenderTarget(b),Y.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(g,S,B),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1),mt.resetDefaultState(),v=-1,M=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function ne(S,B,V,z){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||U.intersectsSprite(S)){z&&Q.setFromMatrixPosition(S.matrixWorld).applyMatrix4(X);const At=yt.update(S),Lt=S.material;Lt.visible&&u.push(S,At,Lt,V,Q.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Ct.render.frame&&(S.skeleton.update(),S.skeleton.frame=Ct.render.frame),!S.frustumCulled||U.intersectsObject(S))){z&&Q.setFromMatrixPosition(S.matrixWorld).applyMatrix4(X);const At=yt.update(S),Lt=S.material;if(Array.isArray(Lt)){const Rt=At.groups;for(let Ut=0,Nt=Rt.length;Ut<Nt;Ut++){const Bt=Rt[Ut],ie=Lt[Bt.materialIndex];ie&&ie.visible&&u.push(S,At,ie,V,Q.z,Bt)}}else Lt.visible&&u.push(S,At,Lt,V,Q.z,null)}}const Tt=S.children;for(let At=0,Lt=Tt.length;At<Lt;At++)ne(Tt[At],B,V,z)}function hn(S,B,V,z){const J=S.opaque,Tt=S.transmissive,At=S.transparent;d.setupLightsView(V),Tt.length>0&&bn(J,B,V),z&&ct.viewport(E.copy(z)),J.length>0&&gs(J,B,V),Tt.length>0&&gs(Tt,B,V),At.length>0&&gs(At,B,V)}function bn(S,B,V){if(G===null){const At=a===!0&&bt.isWebGL2===!0?Oo:tn;G=new At(1024,1024,{generateMipmaps:!0,type:_t.convert(Gi)!==null?Gi:Xn,minFilter:Ns,magFilter:de,wrapS:We,wrapT:We,useRenderToTexture:pt.has("WEBGL_multisampled_render_to_texture")})}const z=g.getRenderTarget();g.setRenderTarget(G),g.clear();const J=g.toneMapping;g.toneMapping=qn,gs(S,B,V),g.toneMapping=J,Y.updateMultisampleRenderTarget(G),Y.updateRenderTargetMipmap(G),g.setRenderTarget(z)}function gs(S,B,V){const z=B.isScene===!0?B.overrideMaterial:null;for(let J=0,Tt=S.length;J<Tt;J++){const At=S[J],Lt=At.object,Rt=At.geometry,Ut=z===null?At.material:z,Nt=At.group;Lt.layers.test(V.layers)&&Rd(Lt,B,V,Rt,Ut,Nt)}}function Rd(S,B,V,z,J,Tt){S.onBeforeRender(g,B,V,z,J,Tt),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),J.onBeforeRender(g,B,V,z,S,Tt),J.transparent===!0&&J.side===Vi?(J.side=ue,J.needsUpdate=!0,g.renderBufferDirect(V,B,z,J,S,Tt),J.side=Vr,J.needsUpdate=!0,g.renderBufferDirect(V,B,z,J,S,Tt),J.side=Vi):g.renderBufferDirect(V,B,z,J,S,Tt),S.onAfterRender(g,B,V,z,J,Tt)}function Ca(S,B,V){B.isScene!==!0&&(B=ut);const z=wt.get(S),J=d.state.lights,Tt=d.state.shadowsArray,At=J.state.version,Lt=St.getParameters(S,J.state,Tt,B,V),Rt=St.getProgramCacheKey(Lt);let Ut=z.programs;z.environment=S.isMeshStandardMaterial?B.environment:null,z.fog=B.fog,z.envMap=(S.isMeshStandardMaterial?K:et).get(S.envMap||z.environment),Ut===void 0&&(S.addEventListener("dispose",dt),Ut=new Map,z.programs=Ut);let Nt=Ut.get(Rt);if(Nt!==void 0){if(z.currentProgram===Nt&&z.lightsStateVersion===At)return zl(S,Lt),Nt}else Lt.uniforms=St.getUniforms(S),S.onBuild(V,Lt,g),S.onBeforeCompile(Lt,g),Nt=St.acquireProgram(Lt,Rt),Ut.set(Rt,Nt),z.uniforms=Lt.uniforms;const Bt=z.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Bt.clippingPlanes=T.uniform),zl(S,Lt),z.needsLights=Dd(S),z.lightsStateVersion=At,z.needsLights&&(Bt.ambientLightColor.value=J.state.ambient,Bt.lightProbe.value=J.state.probe,Bt.directionalLights.value=J.state.directional,Bt.directionalLightShadows.value=J.state.directionalShadow,Bt.spotLights.value=J.state.spot,Bt.spotLightShadows.value=J.state.spotShadow,Bt.rectAreaLights.value=J.state.rectArea,Bt.ltc_1.value=J.state.rectAreaLTC1,Bt.ltc_2.value=J.state.rectAreaLTC2,Bt.pointLights.value=J.state.point,Bt.pointLightShadows.value=J.state.pointShadow,Bt.hemisphereLights.value=J.state.hemi,Bt.directionalShadowMap.value=J.state.directionalShadowMap,Bt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Bt.spotShadowMap.value=J.state.spotShadowMap,Bt.spotShadowMatrix.value=J.state.spotShadowMatrix,Bt.pointShadowMap.value=J.state.pointShadowMap,Bt.pointShadowMatrix.value=J.state.pointShadowMatrix);const ie=Nt.getUniforms(),li=ni.seqWithValue(ie.seq,Bt);return z.currentProgram=Nt,z.uniformsList=li,Nt}function zl(S,B){const V=wt.get(S);V.outputEncoding=B.outputEncoding,V.instancing=B.instancing,V.skinning=B.skinning,V.morphTargets=B.morphTargets,V.morphNormals=B.morphNormals,V.morphTargetsCount=B.morphTargetsCount,V.numClippingPlanes=B.numClippingPlanes,V.numIntersection=B.numClipIntersection,V.vertexAlphas=B.vertexAlphas,V.vertexTangents=B.vertexTangents,V.toneMapping=B.toneMapping}function Ld(S,B,V,z,J){B.isScene!==!0&&(B=ut),Y.resetTextureUnits();const Tt=B.fog,At=z.isMeshStandardMaterial?B.environment:null,Lt=b===null?g.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Yn,Rt=(z.isMeshStandardMaterial?K:et).get(z.envMap||At),Ut=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Nt=!!z.normalMap&&!!V.attributes.tangent,Bt=!!V.morphAttributes.position,ie=!!V.morphAttributes.normal,li=V.morphAttributes.position?V.morphAttributes.position.length:0,Ai=z.toneMapped?g.toneMapping:qn,zt=wt.get(z),un=d.state.lights;if(j===!0&&(st===!0||S!==M)){const rn=S===M&&z.id===v;T.setState(z,S,rn)}let ce=!1;z.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==un.state.version||zt.outputEncoding!==Lt||J.isInstancedMesh&&zt.instancing===!1||!J.isInstancedMesh&&zt.instancing===!0||J.isSkinnedMesh&&zt.skinning===!1||!J.isSkinnedMesh&&zt.skinning===!0||zt.envMap!==Rt||z.fog&&zt.fog!==Tt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==T.numPlanes||zt.numIntersection!==T.numIntersection)||zt.vertexAlphas!==Ut||zt.vertexTangents!==Nt||zt.morphTargets!==Bt||zt.morphNormals!==ie||zt.toneMapping!==Ai||bt.isWebGL2===!0&&zt.morphTargetsCount!==li)&&(ce=!0):(ce=!0,zt.__version=z.version);let dn=zt.currentProgram;ce===!0&&(dn=Ca(z,B,J));let _s=!1,fn=!1,wn=!1;const Me=dn.getUniforms(),Er=zt.uniforms;if(ct.useProgram(dn.program)&&(_s=!0,fn=!0,wn=!0),z.id!==v&&(v=z.id,fn=!0),_s||M!==S){if(Me.setValue(k,"projectionMatrix",S.projectionMatrix),bt.logarithmicDepthBuffer&&Me.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),M!==S&&(M=S,fn=!0,wn=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const rn=Me.map.cameraPosition;rn!==void 0&&rn.setValue(k,Q.setFromMatrixPosition(S.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Me.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||J.isSkinnedMesh)&&Me.setValue(k,"viewMatrix",S.matrixWorldInverse)}if(J.isSkinnedMesh){Me.setOptional(k,J,"bindMatrix"),Me.setOptional(k,J,"bindMatrixInverse");const rn=J.skeleton;rn&&(bt.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Me.setValue(k,"boneTexture",rn.boneTexture,Y),Me.setValue(k,"boneTextureSize",rn.boneTextureSize)):Me.setOptional(k,rn,"boneMatrices"))}return!!V&&(V.morphAttributes.position!==void 0||V.morphAttributes.normal!==void 0)&&tt.update(J,V,z,dn),(fn||zt.receiveShadow!==J.receiveShadow)&&(zt.receiveShadow=J.receiveShadow,Me.setValue(k,"receiveShadow",J.receiveShadow)),fn&&(Me.setValue(k,"toneMappingExposure",g.toneMappingExposure),zt.needsLights&&Pd(Er,wn),Tt&&z.fog&&Ft.refreshFogUniforms(Er,Tt),Ft.refreshMaterialUniforms(Er,z,y,H,G),ni.upload(k,zt.uniformsList,Er,Y)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ni.upload(k,zt.uniformsList,Er,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Me.setValue(k,"center",J.center),Me.setValue(k,"modelViewMatrix",J.modelViewMatrix),Me.setValue(k,"normalMatrix",J.normalMatrix),Me.setValue(k,"modelMatrix",J.matrixWorld),dn}function Pd(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Dd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,B,V){wt.get(S.texture).__webglTexture=B,wt.get(S.depthTexture).__webglTexture=V;const z=wt.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=V===void 0,z.__autoAllocateDepthBuffer||S.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),S.useRenderToTexture=!1,S.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(S,B){const V=wt.get(S);V.__webglFramebuffer=B,V.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,V=0){b=S,m=B,p=V;let z=!0;if(S){const Rt=wt.get(S);Rt.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(36160,null),z=!1):Rt.__webglFramebuffer===void 0?Y.setupRenderTarget(S):Rt.__hasExternalTextures&&Y.rebindTextures(S,wt.get(S.texture).__webglTexture,wt.get(S.depthTexture).__webglTexture)}let J=null,Tt=!1,At=!1;if(S){const Rt=S.texture;(Rt.isDataTexture3D||Rt.isDataTexture2DArray)&&(At=!0);const Ut=wt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(J=Ut[B],Tt=!0):S.useRenderbuffer?J=wt.get(S).__webglMultisampledFramebuffer:J=Ut,E.copy(S.viewport),A.copy(S.scissor),P=S.scissorTest}else E.copy(N).multiplyScalar(y).floor(),A.copy(F).multiplyScalar(y).floor(),P=I;if(ct.bindFramebuffer(36160,J)&&bt.drawBuffers&&z&&ct.drawBuffers(S,J),ct.viewport(E),ct.scissor(A),ct.setScissorTest(P),Tt){const Rt=wt.get(S.texture);k.framebufferTexture2D(36160,36064,34069+B,Rt.__webglTexture,V)}else if(At){const Rt=wt.get(S.texture),Ut=B||0;k.framebufferTextureLayer(36160,36064,Rt.__webglTexture,V||0,Ut)}v=-1},this.readRenderTargetPixels=function(S,B,V,z,J,Tt,At){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){ct.bindFramebuffer(36160,Lt);try{const Rt=S.texture,Ut=Rt.format,Nt=Rt.type;if(Ut!==Re&&_t.convert(Ut)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=Nt===Gi&&(pt.has("EXT_color_buffer_half_float")||bt.isWebGL2&&pt.has("EXT_color_buffer_float"));if(Nt!==Xn&&_t.convert(Nt)!==k.getParameter(35738)&&!(Nt===xi&&(bt.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k.checkFramebufferStatus(36160)===36053?B>=0&&B<=S.width-z&&V>=0&&V<=S.height-J&&k.readPixels(B,V,z,J,_t.convert(Ut),_t.convert(Nt),Tt):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Rt=b!==null?wt.get(b).__webglFramebuffer:null;ct.bindFramebuffer(36160,Rt)}}},this.copyFramebufferToTexture=function(S,B,V=0){if(B.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const z=Math.pow(2,-V),J=Math.floor(B.image.width*z),Tt=Math.floor(B.image.height*z);Y.setTexture2D(B,0),k.copyTexSubImage2D(3553,V,0,0,S.x,S.y,J,Tt),ct.unbindTexture()},this.copyTextureToTexture=function(S,B,V,z=0){const J=B.image.width,Tt=B.image.height,At=_t.convert(V.format),Lt=_t.convert(V.type);Y.setTexture2D(V,0),k.pixelStorei(37440,V.flipY),k.pixelStorei(37441,V.premultiplyAlpha),k.pixelStorei(3317,V.unpackAlignment),B.isDataTexture?k.texSubImage2D(3553,z,S.x,S.y,J,Tt,At,Lt,B.image.data):B.isCompressedTexture?k.compressedTexSubImage2D(3553,z,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,At,B.mipmaps[0].data):k.texSubImage2D(3553,z,S.x,S.y,At,Lt,B.image),z===0&&V.generateMipmaps&&k.generateMipmap(3553),ct.unbindTexture()},this.copyTextureToTexture3D=function(S,B,V,z,J=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Tt=S.max.x-S.min.x+1,At=S.max.y-S.min.y+1,Lt=S.max.z-S.min.z+1,Rt=_t.convert(z.format),Ut=_t.convert(z.type);let Nt;if(z.isDataTexture3D)Y.setTexture3D(z,0),Nt=32879;else if(z.isDataTexture2DArray)Y.setTexture2DArray(z,0),Nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,z.flipY),k.pixelStorei(37441,z.premultiplyAlpha),k.pixelStorei(3317,z.unpackAlignment);const Bt=k.getParameter(3314),ie=k.getParameter(32878),li=k.getParameter(3316),Ai=k.getParameter(3315),zt=k.getParameter(32877),un=V.isCompressedTexture?V.mipmaps[0]:V.image;k.pixelStorei(3314,un.width),k.pixelStorei(32878,un.height),k.pixelStorei(3316,S.min.x),k.pixelStorei(3315,S.min.y),k.pixelStorei(32877,S.min.z),V.isDataTexture||V.isDataTexture3D?k.texSubImage3D(Nt,J,B.x,B.y,B.z,Tt,At,Lt,Rt,Ut,un.data):V.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Nt,J,B.x,B.y,B.z,Tt,At,Lt,Rt,un.data)):k.texSubImage3D(Nt,J,B.x,B.y,B.z,Tt,At,Lt,Rt,Ut,un),k.pixelStorei(3314,Bt),k.pixelStorei(32878,ie),k.pixelStorei(3316,li),k.pixelStorei(3315,Ai),k.pixelStorei(32877,zt),J===0&&z.generateMipmaps&&k.generateMipmap(Nt),ct.unbindTexture()},this.initTexture=function(S){Y.setTexture2D(S,0),ct.unbindTexture()},this.resetState=function(){m=0,p=0,b=null,ct.reset(),mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Gt.prototype.isWebGLRenderer=!0;class Ix extends Gt{}Ix.prototype.isWebGL1Renderer=!0;class Ou extends kt{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}Ou.prototype.isScene=!0;class es{constructor(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}es.prototype.isInterleavedBuffer=!0;const ae=new C;class ns{constructor(t,e,n,i=!1){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ae.x=this.getX(e),ae.y=this.getY(e),ae.z=this.getZ(e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.x=this.getX(e),ae.y=this.getY(e),ae.z=this.getZ(e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.x=this.getX(e),ae.y=this.getY(e),ae.z=this.getZ(e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ns(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}ns.prototype.isInterleavedBufferAttribute=!0;class zu extends Ee{constructor(t){super();this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this}}zu.prototype.isSpriteMaterial=!0;let _r;const is=new C,xr=new C,vr=new C,yr=new $,rs=new $,Uu=new vt,ua=new C,ss=new C,da=new C,ku=new $,ml=new $,Vu=new $;class Fx extends kt{constructor(t){super();if(this.type="Sprite",_r===void 0){_r=new Jt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new es(e,5);_r.setIndex([0,1,2,0,2,3]),_r.setAttribute("position",new ns(n,3,0,!1)),_r.setAttribute("uv",new ns(n,2,3,!1))}this.geometry=_r,this.material=t!==void 0?t:new zu,this.center=new $(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),Uu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-vr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;fa(ua.set(-.5,-.5,0),vr,a,xr,i,r),fa(ss.set(.5,-.5,0),vr,a,xr,i,r),fa(da.set(.5,.5,0),vr,a,xr,i,r),ku.set(0,0),ml.set(1,0),Vu.set(1,1);let o=t.ray.intersectTriangle(ua,ss,da,!1,is);if(o===null&&(fa(ss.set(-.5,.5,0),vr,a,xr,i,r),ml.set(0,1),o=t.ray.intersectTriangle(ua,da,ss,!1,is),o===null))return;const l=t.ray.origin.distanceTo(is);l<t.near||l>t.far||e.push({distance:l,point:is.clone(),uv:le.getUV(is,ua,ss,da,ku,ml,Vu,new $),face:null,object:this})}copy(t){return super.copy(t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}Fx.prototype.isSprite=!0;function fa(s,t,e,n,i,r){yr.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(rs.x=r*yr.x-i*yr.y,rs.y=i*yr.x+r*yr.y):rs.copy(yr),s.copy(t),s.x+=rs.x,s.y+=rs.y,s.applyMatrix4(Uu)}const Hu=new C,Gu=new Xt,Wu=new Xt,Nx=new C,qu=new vt;class Xu extends Be{constructor(t,e){super(t,e);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new vt,this.bindMatrixInverse=new vt}copy(t){return super.copy(t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Xt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,i=this.geometry;Gu.fromBufferAttribute(i.attributes.skinIndex,t),Wu.fromBufferAttribute(i.attributes.skinWeight,t),Hu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Wu.getComponent(r);if(a!==0){const o=Gu.getComponent(r);qu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Nx.copy(Hu).applyMatrix4(qu),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}Xu.prototype.isSkinnedMesh=!0;class Bx extends kt{constructor(){super();this.type="Bone"}}Bx.prototype.isBone=!0;class Ox extends me{constructor(t=null,e=1,n=1,i,r,a,o,l,c=de,h=de,u,d){super(null,a,o,l,c,h,i,r,u,d);this.image={data:t,width:e,height:n},this.magFilter=c,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ox.prototype.isDataTexture=!0;class gl extends fe{constructor(t,e,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(t,e,n);this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}gl.prototype.isInstancedBufferAttribute=!0;const Yu=new vt,ju=new vt,pa=[],as=new Be;class zx extends Be{constructor(t,e,n){super(t,e);this.instanceMatrix=new gl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Yu),ju.multiplyMatrices(n,Yu),as.matrixWorld=ju,as.raycast(t,pa);for(let a=0,o=pa.length;a<o;a++){const l=pa[a];l.instanceId=r,l.object=this,e.push(l)}pa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gl(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}zx.prototype.isInstancedMesh=!0;class os extends Ee{constructor(t){super();this.type="LineBasicMaterial",this.color=new gt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this}}os.prototype.isLineBasicMaterial=!0;const Zu=new C,Ju=new C,$u=new vt,_l=new er,ma=new tr;class xl extends kt{constructor(t=new Jt,e=new os){super();this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Zu.fromBufferAttribute(e,i-1),Ju.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Zu.distanceTo(Ju);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,t.ray.intersectsSphere(ma)===!1)return;$u.copy(i).invert(),_l.copy(t.ray).applyMatrix4($u);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const _=n.index,x=n.attributes.position;if(_!==null){const m=Math.max(0,a.start),p=Math.min(_.count,a.start+a.count);for(let b=m,v=p-1;b<v;b+=f){const M=_.getX(b),E=_.getX(b+1);if(c.fromBufferAttribute(x,M),h.fromBufferAttribute(x,E),_l.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(d);P<t.near||P>t.far||e.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),p=Math.min(x.count,a.start+a.count);for(let b=m,v=p-1;b<v;b+=f){if(c.fromBufferAttribute(x,b),h.fromBufferAttribute(x,b+1),_l.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const E=t.ray.origin.distanceTo(d);E<t.near||E>t.far||e.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}xl.prototype.isLine=!0;const Ku=new C,Qu=new C;class vl extends xl{constructor(t,e){super(t,e);this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ku.fromBufferAttribute(e,i),Qu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ku.distanceTo(Qu);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}vl.prototype.isLineSegments=!0;class Ux extends xl{constructor(t,e){super(t,e);this.type="LineLoop"}}Ux.prototype.isLineLoop=!0;class td extends Ee{constructor(t){super();this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this}}td.prototype.isPointsMaterial=!0;const ed=new vt,yl=new er,ga=new tr,_a=new C;class kx extends kt{constructor(t=new Jt,e=new td){super();this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=r,t.ray.intersectsSphere(ga)===!1)return;ed.copy(i).invert(),yl.copy(t.ray).applyMatrix4(ed);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){const x=c.getX(_);_a.fromBufferAttribute(u,x),nd(_a,x,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f;_<g;_++)_a.fromBufferAttribute(u,_),nd(_a,_,l,i,t,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}kx.prototype.isPoints=!0;function nd(s,t,e,n,i,r,a){const o=yl.distanceSqToPoint(s);if(o<e){const l=new C;yl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Vx extends me{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c);this.minFilter=a!==void 0?a:Te,this.magFilter=r!==void 0?r:Te,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Vx.prototype.isVideoTexture=!0;class Hx extends me{constructor(t,e,n){super({width:t,height:e});this.format=n,this.magFilter=de,this.minFilter=de,this.generateMipmaps=!1,this.needsUpdate=!0}}Hx.prototype.isFramebufferTexture=!0;class Gx extends me{constructor(t,e,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d);this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}Gx.prototype.isCompressedTexture=!0;class Wx extends me{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c);this.needsUpdate=!0}}Wx.prototype.isCanvasTexture=!0;new C;new C;new C;new le;class nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){const n=1e-4;let i=t-n,r=t+n;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new $:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],r=[],a=[],o=new C,l=new vt;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(qe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(qe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class xa extends nn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super();this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new $,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}xa.prototype.isEllipseCurve=!0;class id extends xa{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a);this.type="ArcCurve"}}id.prototype.isArcCurve=!0;function Ml(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const va=new C,bl=new Ml,wl=new Ml,Sl=new Ml;class rd extends nn{constructor(t=[],e=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(va.subVectors(i[0],i[1]).add(i[0]),c=va);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(va.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=va),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),x<1e-4&&(x=g),bl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,x),wl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,x),Sl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,x)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),wl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Sl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(bl.calc(l),wl.calc(l),Sl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}rd.prototype.isCatmullRomCurve3=!0;function sd(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function qx(s,t){const e=1-s;return e*e*t}function Xx(s,t){return 2*(1-s)*s*t}function Yx(s,t){return s*s*t}function ls(s,t,e,n){return qx(s,t)+Xx(s,e)+Yx(s,n)}function jx(s,t){const e=1-s;return e*e*e*t}function Zx(s,t){const e=1-s;return 3*e*e*s*t}function Jx(s,t){return 3*(1-s)*s*s*t}function $x(s,t){return s*s*s*t}function cs(s,t,e,n,i){return jx(s,t)+Zx(s,e)+Jx(s,n)+$x(s,i)}class Tl extends nn{constructor(t=new $,e=new $,n=new $,i=new $){super();this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new $){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(t,i.x,r.x,a.x,o.x),cs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}Tl.prototype.isCubicBezierCurve=!0;class ad extends nn{constructor(t=new C,e=new C,n=new C,i=new C){super();this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(t,i.x,r.x,a.x,o.x),cs(t,i.y,r.y,a.y,o.y),cs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}ad.prototype.isCubicBezierCurve3=!0;class ya extends nn{constructor(t=new $,e=new $){super();this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new $;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}ya.prototype.isLineCurve=!0;class Kx extends nn{constructor(t=new C,e=new C){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class El extends nn{constructor(t=new $,e=new $,n=new $){super();this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ls(t,i.x,r.x,a.x),ls(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}El.prototype.isQuadraticBezierCurve=!0;class od extends nn{constructor(t=new C,e=new C,n=new C){super();this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ls(t,i.x,r.x,a.x),ls(t,i.y,r.y,a.y),ls(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}od.prototype.isQuadraticBezierCurve3=!0;class Al extends nn{constructor(t=[]){super();this.type="SplineCurve",this.points=t}getPoint(t,e=new $){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(sd(o,l.x,c.x,h.x,u.x),sd(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new $().fromArray(i))}return this}}Al.prototype.isSplineCurve=!0;var ld=Object.freeze({__proto__:null,ArcCurve:id,CatmullRomCurve3:rd,CubicBezierCurve:Tl,CubicBezierCurve3:ad,EllipseCurve:xa,LineCurve:ya,LineCurve3:Kx,QuadraticBezierCurve:El,QuadraticBezierCurve3:od,SplineCurve:Al});class Qx extends nn{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new ya(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a&&a.isEllipseCurve?t*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ld[i.type]().fromJSON(i))}return this}}class Cl extends Qx{constructor(t){super();this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ya(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new El(this.currentPoint.clone(),new $(t,e),new $(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Tl(this.currentPoint.clone(),new $(t,e),new $(n,i),new $(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Al(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new xa(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class hs extends Cl{constructor(t){super(t);this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Cl().fromJSON(i))}return this}}const tv={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=cd(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=sv(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let _=e;_<i;_+=e)u=s[_],d=s[_+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?1/f:0}return us(r,a,e,o,l,f),a}};function cd(s,t,e,n,i){let r,a;if(i===gv(s,t,e,n)>0)for(r=t;r<e;r+=n)a=dd(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=dd(r,s[r],s[r+1],a);return a&&Ma(a,a.next)&&(fs(a),a=a.next),a}function ii(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ma(e,e.next)||ee(e.prev,e,e.next)===0)){if(fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function us(s,t,e,n,i,r,a){if(!s)return;!a&&r&&hv(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?nv(s,n,i,r):ev(s)){t.push(l.i/e),t.push(s.i/e),t.push(c.i/e),fs(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=iv(ii(s),t,e),us(s,t,e,n,i,r,2)):a===2&&rv(s,t,e,n,i,r):us(ii(s),t,e,n,i,r,1);break}}}function ev(s){const t=s.prev,e=s,n=s.next;if(ee(t,e,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(Mr(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&ee(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function nv(s,t,e,n){const i=s.prev,r=s,a=s.next;if(ee(i,r,a)>=0)return!1;const o=i.x<r.x?i.x<a.x?i.x:a.x:r.x<a.x?r.x:a.x,l=i.y<r.y?i.y<a.y?i.y:a.y:r.y<a.y?r.y:a.y,c=i.x>r.x?i.x>a.x?i.x:a.x:r.x>a.x?r.x:a.x,h=i.y>r.y?i.y>a.y?i.y:a.y:r.y>a.y?r.y:a.y,u=Rl(o,l,t,e,n),d=Rl(c,h,t,e,n);let f=s.prevZ,_=s.nextZ;for(;f&&f.z>=u&&_&&_.z<=d;){if(f!==s.prev&&f!==s.next&&Mr(i.x,i.y,r.x,r.y,a.x,a.y,f.x,f.y)&&ee(f.prev,f,f.next)>=0||(f=f.prevZ,_!==s.prev&&_!==s.next&&Mr(i.x,i.y,r.x,r.y,a.x,a.y,_.x,_.y)&&ee(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;f&&f.z>=u;){if(f!==s.prev&&f!==s.next&&Mr(i.x,i.y,r.x,r.y,a.x,a.y,f.x,f.y)&&ee(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;_&&_.z<=d;){if(_!==s.prev&&_!==s.next&&Mr(i.x,i.y,r.x,r.y,a.x,a.y,_.x,_.y)&&ee(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function iv(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Ma(i,r)&&hd(i,n,n.next,r)&&ds(i,r)&&ds(r,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(r.i/e),fs(n),fs(n.next),n=s=r),n=n.next}while(n!==s);return ii(n)}function rv(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fv(a,o)){let l=ud(a,o);a=ii(a,a.next),l=ii(l,l.next),us(a,t,e,n,i,r),us(l,t,e,n,i,r);return}o=o.next}a=a.next}while(a!==s)}function sv(s,t,e,n){const i=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=cd(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(dv(c));for(i.sort(av),r=0;r<i.length;r++)ov(i[r],e),e=ii(e,e.next);return e}function av(s,t){return s.x-t.x}function ov(s,t){if(t=lv(s,t),t){const e=ud(t,s);ii(t,t.next),ii(e,e.next)}}function lv(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r){if(r=d,d===n){if(i===e.y)return e;if(i===e.next.y)return e.next}a=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!a)return null;if(n===r)return a;const o=a,l=a.x,c=a.y;let h=1/0,u;e=a;do n>=e.x&&e.x>=l&&n!==e.x&&Mr(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)&&(u=Math.abs(i-e.y)/(n-e.x),ds(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&cv(a,e)))&&(a=e,h=u)),e=e.next;while(e!==o);return a}function cv(s,t){return ee(s.prev,s,t.prev)<0&&ee(t.next,s,s.next)<0}function hv(s,t,e,n){let i=s;do i.z===null&&(i.z=Rl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,uv(i)}function uv(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function Rl(s,t,e,n,i){return s=32767*(s-e)*i,t=32767*(t-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function dv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Mr(s,t,e,n,i,r,a,o){return(i-a)*(t-o)-(s-a)*(r-o)>=0&&(s-a)*(n-o)-(e-a)*(t-o)>=0&&(e-a)*(r-o)-(i-a)*(n-o)>=0}function fv(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!pv(s,t)&&(ds(s,t)&&ds(t,s)&&mv(s,t)&&(ee(s.prev,s,t.prev)||ee(s,t.prev,t))||Ma(s,t)&&ee(s.prev,s,s.next)>0&&ee(t.prev,t,t.next)>0)}function ee(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ma(s,t){return s.x===t.x&&s.y===t.y}function hd(s,t,e,n){const i=wa(ee(s,t,e)),r=wa(ee(s,t,n)),a=wa(ee(e,n,s)),o=wa(ee(e,n,t));return!!(i!==r&&a!==o||i===0&&ba(s,e,t)||r===0&&ba(s,n,t)||a===0&&ba(e,s,n)||o===0&&ba(e,t,n))}function ba(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function wa(s){return s>0?1:s<0?-1:0}function pv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&hd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ds(s,t){return ee(s.prev,s,s.next)<0?ee(s,t,s.next)>=0&&ee(s,s.prev,t)>=0:ee(s,t,s.prev)<0||ee(s,s.next,t)<0}function mv(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function ud(s,t){const e=new Ll(s.i,s.x,s.y),n=new Ll(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function dd(s,t,e,n){const i=new Ll(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ll(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gv(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class ri{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return ri.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];fd(t),pd(n,t);let a=t.length;e.forEach(fd);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,pd(n,e[l]);const o=tv.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function fd(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function pd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class br extends Jt{constructor(t=new hs([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ge(i,3)),this.setAttribute("uv",new ge(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1;let u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,p=e.UVGenerator!==void 0?e.UVGenerator:_v;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=e.amount);let b,v=!1,M,E,A,P;m&&(b=m.getSpacedPoints(h),v=!0,d=!1,M=m.computeFrenetFrames(h,!1),E=new C,A=new C,P=new C),d||(x=0,f=0,_=0,g=0);const O=o.extractPoints(c);let H=O.shape;const y=O.holes;if(!ri.isClockWise(H)){H=H.reverse();for(let Y=0,et=y.length;Y<et;Y++){const K=y[Y];ri.isClockWise(K)&&(y[Y]=K.reverse())}}const D=ri.triangulateShape(H,y),N=H;for(let Y=0,et=y.length;Y<et;Y++){const K=y[Y];H=H.concat(K)}function F(Y,et,K){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().multiplyScalar(K).add(Y)}const I=H.length,U=D.length;function j(Y,et,K){let ht,at,yt;const St=Y.x-et.x,Ft=Y.y-et.y,Yt=K.x-Y.x,Ht=K.y-Y.y,T=St*St+Ft*Ft,w=St*Ht-Ft*Yt;if(Math.abs(w)>Number.EPSILON){const q=Math.sqrt(T),tt=Math.sqrt(Yt*Yt+Ht*Ht),ft=et.x-Ft/q,W=et.y+St/q,_t=K.x-Ht/tt,mt=K.y+Yt/tt,rt=((_t-ft)*Ht-(mt-W)*Yt)/(St*Ht-Ft*Yt);ht=ft+St*rt-Y.x,at=W+Ft*rt-Y.y;const it=ht*ht+at*at;if(it<=2)return new $(ht,at);yt=Math.sqrt(it/2)}else{let q=!1;St>Number.EPSILON?Yt>Number.EPSILON&&(q=!0):St<-Number.EPSILON?Yt<-Number.EPSILON&&(q=!0):Math.sign(Ft)===Math.sign(Ht)&&(q=!0),q?(ht=-Ft,at=St,yt=Math.sqrt(T)):(ht=St,at=Ft,yt=Math.sqrt(T/2))}return new $(ht/yt,at/yt)}const st=[];for(let Y=0,et=N.length,K=et-1,ht=Y+1;Y<et;Y++,K++,ht++)K===et&&(K=0),ht===et&&(ht=0),st[Y]=j(N[Y],N[K],N[ht]);const G=[];let X,Q=st.concat();for(let Y=0,et=y.length;Y<et;Y++){const K=y[Y];X=[];for(let ht=0,at=K.length,yt=at-1,St=ht+1;ht<at;ht++,yt++,St++)yt===at&&(yt=0),St===at&&(St=0),X[ht]=j(K[ht],K[yt],K[St]);G.push(X),Q=Q.concat(X)}for(let Y=0;Y<x;Y++){const et=Y/x,K=f*Math.cos(et*Math.PI/2),ht=_*Math.sin(et*Math.PI/2)+g;for(let at=0,yt=N.length;at<yt;at++){const St=F(N[at],st[at],ht);pt(St.x,St.y,-K)}for(let at=0,yt=y.length;at<yt;at++){const St=y[at];X=G[at];for(let Ft=0,Yt=St.length;Ft<Yt;Ft++){const Ht=F(St[Ft],X[Ft],ht);pt(Ht.x,Ht.y,-K)}}}const ut=_+g;for(let Y=0;Y<I;Y++){const et=d?F(H[Y],Q[Y],ut):H[Y];v?(A.copy(M.normals[0]).multiplyScalar(et.x),E.copy(M.binormals[0]).multiplyScalar(et.y),P.copy(b[0]).add(A).add(E),pt(P.x,P.y,P.z)):pt(et.x,et.y,0)}for(let Y=1;Y<=h;Y++)for(let et=0;et<I;et++){const K=d?F(H[et],Q[et],ut):H[et];v?(A.copy(M.normals[Y]).multiplyScalar(K.x),E.copy(M.binormals[Y]).multiplyScalar(K.y),P.copy(b[Y]).add(A).add(E),pt(P.x,P.y,P.z)):pt(K.x,K.y,u/h*Y)}for(let Y=x-1;Y>=0;Y--){const et=Y/x,K=f*Math.cos(et*Math.PI/2),ht=_*Math.sin(et*Math.PI/2)+g;for(let at=0,yt=N.length;at<yt;at++){const St=F(N[at],st[at],ht);pt(St.x,St.y,u+K)}for(let at=0,yt=y.length;at<yt;at++){const St=y[at];X=G[at];for(let Ft=0,Yt=St.length;Ft<Yt;Ft++){const Ht=F(St[Ft],X[Ft],ht);v?pt(Ht.x,Ht.y+b[h-1].y,b[h-1].x+K):pt(Ht.x,Ht.y,u+K)}}}lt(),k();function lt(){const Y=i.length/3;if(d){let et=0,K=I*et;for(let ht=0;ht<U;ht++){const at=D[ht];bt(at[2]+K,at[1]+K,at[0]+K)}et=h+x*2,K=I*et;for(let ht=0;ht<U;ht++){const at=D[ht];bt(at[0]+K,at[1]+K,at[2]+K)}}else{for(let et=0;et<U;et++){const K=D[et];bt(K[2],K[1],K[0])}for(let et=0;et<U;et++){const K=D[et];bt(K[0]+I*h,K[1]+I*h,K[2]+I*h)}}n.addGroup(Y,i.length/3-Y,0)}function k(){const Y=i.length/3;let et=0;Ot(N,et),et+=N.length;for(let K=0,ht=y.length;K<ht;K++){const at=y[K];Ot(at,et),et+=at.length}n.addGroup(Y,i.length/3-Y,1)}function Ot(Y,et){let K=Y.length;for(;--K>=0;){const ht=K;let at=K-1;at<0&&(at=Y.length-1);for(let yt=0,St=h+x*2;yt<St;yt++){const Ft=I*yt,Yt=I*(yt+1),Ht=et+ht+Ft,T=et+at+Ft,w=et+at+Yt,q=et+ht+Yt;ct(Ht,T,w,q)}}}function pt(Y,et,K){l.push(Y),l.push(et),l.push(K)}function bt(Y,et,K){Ct(Y),Ct(et),Ct(K);const ht=i.length/3,at=p.generateTopUV(n,i,ht-3,ht-2,ht-1);wt(at[0]),wt(at[1]),wt(at[2])}function ct(Y,et,K,ht){Ct(Y),Ct(et),Ct(ht),Ct(et),Ct(K),Ct(ht);const at=i.length/3,yt=p.generateSideWallUV(n,i,at-6,at-3,at-2,at-1);wt(yt[0]),wt(yt[1]),wt(yt[3]),wt(yt[1]),wt(yt[2]),wt(yt[3])}function Ct(Y){i.push(l[Y*3+0]),i.push(l[Y*3+1]),i.push(l[Y*3+2])}function wt(Y){r.push(Y.x),r.push(Y.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ld[i.type]().fromJSON(i)),new br(n,t.options)}}const _v={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new $(r,a),new $(o,l),new $(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],_=t[i*3+2],g=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new $(a,1-l),new $(c,1-u),new $(d,1-_),new $(g,1-m)]:[new $(o,1-l),new $(h,1-u),new $(f,1-_),new $(x,1-m)]}};function xv(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Pl extends Jt{constructor(t=new hs([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),e=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ge(i,3)),this.setAttribute("normal",new ge(r,3)),this.setAttribute("uv",new ge(a,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const _=d.holes;ri.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,m=_.length;x<m;x++){const p=_[x];ri.isClockWise(p)===!0&&(_[x]=p.reverse())}const g=ri.triangulateShape(f,_);for(let x=0,m=_.length;x<m;x++){const p=_[x];f=f.concat(p)}for(let x=0,m=f.length;x<m;x++){const p=f[x];i.push(p.x,p.y,0),r.push(0,0,1),a.push(p.x,p.y)}for(let x=0,m=g.length;x<m;x++){const p=g[x],b=p[0]+u,v=p[1]+u,M=p[2]+u;n.push(b,v,M),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return vv(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new Pl(n,t.curveSegments)}}function vv(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class yv extends Ee{constructor(t){super();this.type="ShadowMaterial",this.color=new gt(0),this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this}}yv.prototype.isShadowMaterial=!0;class md extends Ee{constructor(t){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}md.prototype.isMeshStandardMaterial=!0;class Mv extends md{constructor(t){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.sheenColor=new gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new gt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}Mv.prototype.isMeshPhysicalMaterial=!0;class bv extends Ee{constructor(t){super();this.type="MeshPhongMaterial",this.color=new gt(16777215),this.specular=new gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}bv.prototype.isMeshPhongMaterial=!0;class wv extends Ee{constructor(t){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}wv.prototype.isMeshToonMaterial=!0;class Sv extends Ee{constructor(t){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}Sv.prototype.isMeshNormalMaterial=!0;class Tv extends Ee{constructor(t){super();this.type="MeshLambertMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}Tv.prototype.isMeshLambertMaterial=!0;class Ev extends Ee{constructor(t){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new gt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this}}Ev.prototype.isMeshMatcapMaterial=!0;class Av extends os{constructor(t){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}Av.prototype.isLineDashedMaterial=!0;const $t={arraySlice:function(s,t,e){return $t.isTypedArray(s)?new s.constructor(s.subarray(t,e!==void 0?e:s.length)):s.slice(t,e)},convertArray:function(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n},sortedArray:function(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i},flattenJSON:function(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)},subclip:function(s,t,e,n,i=30){const r=s.clone();r.name=t;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const _=c.times[f]*i;if(!(_<e||_>=n)){u.push(c.times[f]);for(let g=0;g<h;++g)d.push(c.values[f*h+g])}}u.length!==0&&(c.times=$t.convertArray(u,c.times.constructor),c.values=$t.convertArray(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r},makeClipAdditive:function(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){const o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const _=o.times.length-1;let g;if(r<=o.times[0]){const m=h,p=u-h;g=$t.arraySlice(o.values,m,p)}else if(r>=o.times[_]){const m=_*u+h,p=m+u-h;g=$t.arraySlice(o.values,m,p)}else{const m=o.createInterpolant(),p=h,b=u-h;m.evaluate(r),g=$t.arraySlice(m.resultBuffer,p,b)}l==="quaternion"&&new Ne().fromArray(g).normalize().conjugate().toArray(g);const x=c.times.length;for(let m=0;m<x;++m){const p=m*f+d;if(l==="quaternion")Ne.multiplyQuaternionsFlat(c.values,p,g,0,c.values,p);else{const b=f-d*2;for(let v=0;v<b;++v)c.values[p+v]-=g[v]}}}return s.blendMode=Ih,s}};class si{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}si.prototype.beforeStart_=si.prototype.copySampleValue_;si.prototype.afterEnd_=si.prototype.copySampleValue_;class Cv extends si{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xi,endingEnd:Xi}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yi:r=t,o=2*e-n;break;case Us:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yi:a=t,l=2*n-e;break;case Us:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-e)/(i-e),g=_*_,x=g*_,m=-d*x+2*d*g-d*_,p=(1+d)*x+(-1.5-2*d)*g+(-.5+d)*_+1,b=(-1-f)*x+(1.5+f)*g+.5*_,v=f*x-f*g;for(let M=0;M!==o;++M)r[M]=m*a[h+M]+p*a[c+M]+b*a[l+M]+v*a[u+M];return r}}class gd extends si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class Rv extends si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class yn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$t.convertArray(e,this.TimeBufferType),this.values=$t.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$t.convertArray(t.times,Array),values:$t.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Rv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Cv(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case zs:e=this.InterpolantFactoryMethodLinear;break;case Ao:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return zs;case this.InterpolantFactoryMethodSmooth:return Ao}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=$t.arraySlice(n,r,a),this.values=$t.arraySlice(this.values,r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&$t.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=$t.arraySlice(this.times),e=$t.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ao,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){const g=e[u+_];if(g!==e[d+_]||g!==e[f+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=$t.arraySlice(t,0,a),this.values=$t.arraySlice(e,0,a*n)):(this.times=t,this.values=e),this}clone(){const t=$t.arraySlice(this.times,0),e=$t.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=zs;class wr extends yn{}wr.prototype.ValueTypeName="bool";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=Os;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;class _d extends yn{}_d.prototype.ValueTypeName="color";class Sa extends yn{}Sa.prototype.ValueTypeName="number";class Lv extends si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let h=c+o;c!==h;c+=4)Ne.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ps extends yn{InterpolantFactoryMethodLinear(t){return new Lv(this.times,this.values,this.getValueSize(),t)}}ps.prototype.ValueTypeName="quaternion";ps.prototype.DefaultInterpolation=zs;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Sr extends yn{}Sr.prototype.ValueTypeName="string";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=Os;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ta extends yn{}Ta.prototype.ValueTypeName="vector";class xd{constructor(t,e=-1,n,i=Co){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Dv(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=$t.getKeyframeOrder(l);l=$t.sortedArray(l,1,h),c=$t.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Sa(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,_,g){if(f.length!==0){const x=[],m=[];$t.flattenJSON(f,x,m,_),x.length!==0&&g.push(new u(d,x,m))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const x=[],m=[];for(let p=0;p!==d[_].morphTargets.length;++p){const b=d[_];x.push(b.time),m.push(b.morphTarget===g?1:0)}i.push(new Sa(".morphTargetInfluence["+g+"]",x,m))}l=f.length*(a||1)}else{const f=".bones["+e[u].name+"]";n(Ta,f+".position",d,"pos",i),n(ps,f+".quaternion",d,"rot",i),n(Ta,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Pv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sa;case"vector":case"vector2":case"vector3":case"vector4":return Ta;case"color":return _d;case"quaternion":return ps;case"bool":case"boolean":return wr;case"string":return Sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Dv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Pv(s.type);if(s.times===void 0){const e=[],n=[];$t.flattenJSON(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Tr={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Iv{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const Fv=new Iv;class ai{constructor(t){this.manager=t!==void 0?t:Fv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Nn={};class Nv extends ai{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Tr.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Nn[t]!==void 0){Nn[t].push({onLoad:e,onProgress:n,onError:i});return}Nn[t]=[],Nn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body.getReader===void 0)return c;const h=Nn[t],u=c.body.getReader(),d=c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const x=new ReadableStream({start(m){p();function p(){u.read().then(({done:b,value:v})=>{if(b)m.close();else{g+=v.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let E=0,A=h.length;E<A;E++){const P=h[E];P.onProgress&&P.onProgress(M)}m.enqueue(v),p()}})}}});return new Response(x)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Tr.add(t,c);const h=Nn[t];delete Nn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Nn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Nn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class vd extends ai{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Tr.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Yr("img");function l(){h(),Tr.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Bv extends ai{constructor(t){super(t)}load(t,e,n,i){const r=new ra,a=new vd(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class Ov extends ai{constructor(t){super(t)}load(t,e,n,i){const r=new me,a=new vd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Mn extends kt{constructor(t,e=1){super();this.type="Light",this.color=new gt(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}Mn.prototype.isLight=!0;class zv extends Mn{constructor(t,e,n){super(t,n);this.type="HemisphereLight",this.position.copy(kt.DefaultUp),this.updateMatrix(),this.groundColor=new gt(e)}copy(t){return Mn.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}zv.prototype.isHemisphereLight=!0;const yd=new vt,Md=new C,bd=new C;class Dl{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new aa,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Md.setFromMatrixPosition(t.matrixWorld),e.position.copy(Md),bd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bd),e.updateMatrixWorld(),yd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class wd extends Dl{constructor(){super(new Oe(50,1,.5,500));this.focus=1}updateMatrices(t){const e=this.camera,n=Do*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}wd.prototype.isSpotLightShadow=!0;class Uv extends Mn{constructor(t,e,n=0,i=Math.PI/3,r=0,a=1){super(t,e);this.type="SpotLight",this.position.copy(kt.DefaultUp),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.shadow=new wd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Uv.prototype.isSpotLight=!0;const Sd=new vt,ms=new C,Il=new C;class Td extends Dl{constructor(){super(new Oe(90,1,.5,500));this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new Xt(2,1,1,1),new Xt(0,1,1,1),new Xt(3,1,1,1),new Xt(1,1,1,1),new Xt(3,0,1,1),new Xt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ms.setFromMatrixPosition(t.matrixWorld),n.position.copy(ms),Il.copy(n.position),Il.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Il),n.updateMatrixWorld(),i.makeTranslation(-ms.x,-ms.y,-ms.z),Sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd)}}Td.prototype.isPointLightShadow=!0;class kv extends Mn{constructor(t,e,n=0,i=1){super(t,e);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Td}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}kv.prototype.isPointLight=!0;class Ed extends Dl{constructor(){super(new al(-5,5,5,-5,.5,500))}}Ed.prototype.isDirectionalLightShadow=!0;class Vv extends Mn{constructor(t,e){super(t,e);this.type="DirectionalLight",this.position.copy(kt.DefaultUp),this.updateMatrix(),this.target=new kt,this.shadow=new Ed}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Vv.prototype.isDirectionalLight=!0;class Hv extends Mn{constructor(t,e){super(t,e);this.type="AmbientLight"}}Hv.prototype.isAmbientLight=!0;class Gv extends Mn{constructor(t,e,n=10,i=10){super(t,e);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}Gv.prototype.isRectAreaLight=!0;class Ad{constructor(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new C)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}Ad.prototype.isSphericalHarmonics3=!0;class Fl extends Mn{constructor(t=new Ad,e=1){super(void 0,e);this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}Fl.prototype.isLightProbe=!0;class Wv{static decodeText(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class qv extends Jt{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}qv.prototype.isInstancedBufferGeometry=!0;class Xv extends ai{constructor(t){super(t);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Tr.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Tr.add(t,l),e&&e(l),r.manager.itemEnd(t)}).catch(function(l){i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}}Xv.prototype.isImageBitmapLoader=!0;let Ea;const Yv={getContext:function(){return Ea===void 0&&(Ea=new(window.AudioContext||window.webkitAudioContext)),Ea},setContext:function(s){Ea=s}};class jv extends ai{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new Nv(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{const l=o.slice(0);Yv.getContext().decodeAudioData(l,function(h){e(h)})}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}}class Zv extends Fl{constructor(t,e,n=1){super(void 0,n);const i=new gt().set(t),r=new gt().set(e),a=new C(i.r,i.g,i.b),o=new C(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}Zv.prototype.isHemisphereLightProbe=!0;class Jv extends Fl{constructor(t,e=1){super(void 0,e);const n=new gt().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Jv.prototype.isAmbientLightProbe=!0;class $v extends kt{constructor(t){super();this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class Kv{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){Ne.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const a=this._workIndex*r;Ne.multiplyQuaternionsFlat(t,a,t,e,t,n),Ne.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const Nl="\\[\\]\\.:\\/",Qv=new RegExp("["+Nl+"]","g"),Bl="[^"+Nl+"]",ty="[^"+Nl.replace("\\.","")+"]",ey=/((?:WC+[\/:])*)/.source.replace("WC",Bl),ny=/(WCOD+)?/.source.replace("WCOD",ty),iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),ry=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),sy=new RegExp("^"+ey+ny+iy+ry+"$"),ay=["material","materials","bones"];class oy{constructor(t,e,n){const i=n||Vt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Vt{constructor(t,e,n){this.path=e,this.parsedPath=n||Vt.parseTrackName(e),this.node=Vt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Vt.Composite(t,e,n):new Vt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qv,"")}static parseTrackName(t){const e=sy.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);ay.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Vt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Vt.Composite=oy;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ly{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,a=r.length,o=new Array(a),l={endingStart:Xi,endingEnd:Xi};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Hp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;if(l<0||n===0)return;this._startTime=null,e=n*l}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ih:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Co:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const a=n===Gp;if(t===0)return r===-1?i:a&&(r&1)==1?e-i:i;if(n===Vp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)==1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Yi,i.endingEnd=Yi):(t?i.endingStart=this.zeroSlopeAtStart?Yi:Xi:i.endingStart=Us,e?i.endingEnd=this.zeroSlopeAtEnd?Yi:Xi:i.endingEnd=Us)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}}class cy extends yi{constructor(t){super();this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let _=h[f];if(_!==void 0)++_.referenceCount,a[u]=_;else{if(_=a[u],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,f));continue}const g=e&&e._propertyBindings[u].binding.parsedPath;_=new Kv(Vt.create(n,f,g),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,f),a[u]=_}o[u].resultBuffer=_.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new gd(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let a=typeof t=="string"?xd.findByName(i,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Co),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new ly(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?xd.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}cy.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class hy extends es{constructor(t,e,n=1){super(t,e);this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}hy.prototype.isInstancedInterleavedBuffer=!0;const oi=new C,Aa=new vt,Ol=new vt;class uy extends vl{constructor(t){const e=Cd(t),n=new Jt,i=[],r=[],a=new gt(0,0,1),o=new gt(0,1,0);for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new ge(i,3)),n.setAttribute("color",new ge(r,3));const l=new os({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Ol.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){const o=e[r];o.parent&&o.parent.isBone&&(Aa.multiplyMatrices(Ol,o.matrixWorld),oi.setFromMatrixPosition(Aa),i.setXYZ(a,oi.x,oi.y,oi.z),Aa.multiplyMatrices(Ol,o.parent.matrixWorld),oi.setFromMatrixPosition(Aa),i.setXYZ(a+1,oi.x,oi.y,oi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function Cd(s){const t=[];s&&s.isBone&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,Cd(s.children[e]));return t}class dy extends vl{constructor(t=10,e=10,n=4473924,i=8947848){n=new gt(n),i=new gt(i);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,_=-o;d<=e;d++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=d===r?n:i;g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3}const h=new Jt;h.setAttribute("position",new ge(l,3)),h.setAttribute("color",new ge(c,3));const u=new os({vertexColors:!0,toneMapped:!1});super(h,u);this.type="GridHelper"}}const fy=new Float32Array(1);new Int32Array(fy.buffer);nn.create=function(s,t){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(nn.prototype),s.prototype.constructor=s,s.prototype.getPoint=t,s};Cl.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};dy.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};uy.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};ai.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Wv.extractUrlBase(s)};ai.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};on.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};on.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};on.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};on.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};on.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};tr.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};aa.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};ye.prototype.flattenToArrayOffset=function(s,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,t)};ye.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};ye.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};ye.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};ye.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};ye.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};vt.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};vt.prototype.flattenToArrayOffset=function(s,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,t)};vt.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new C().setFromMatrixColumn(this,3)};vt.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};vt.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};vt.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};vt.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};vt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};vt.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};vt.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};vt.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};vt.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};vt.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};vt.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};vt.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};vt.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};vt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};vt.prototype.makeFrustum=function(s,t,e,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,t,n,e,i,r)};vt.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};Fn.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};Ne.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};Ne.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};er.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};er.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};er.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};le.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};le.prototype.barycoordFromPoint=function(s,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,t)};le.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};le.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};le.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};le.barycoordFromPoint=function(s,t,e,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),le.getBarycoord(s,t,e,n,i)};le.normal=function(s,t,e,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),le.getNormal(s,t,e,n)};hs.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};hs.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new br(this,s)};hs.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Pl(this,s)};$.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};$.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};$.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};C.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};C.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};C.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};C.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};C.prototype.getColumnFromMatrix=function(s,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,s)};C.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};C.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};C.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};C.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Xt.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};Xt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};kt.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};kt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};kt.prototype.translate=function(s,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,s)};kt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};kt.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(kt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Be.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Be.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Wp},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Xu.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Oe.prototype.setLens=function(s,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(s)};Object.defineProperties(Mn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(fe.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===ks},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(ks)}}});fe.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?ks:Xr),this};fe.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},fe.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Jt.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};Jt.prototype.addAttribute=function(s,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new fe(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(s,t)};Jt.prototype.addDrawCall=function(s,t,e){e!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,t)};Jt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Jt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Jt.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};Jt.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Jt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});es.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?ks:Xr),this};es.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};br.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};br.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};br.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Ou.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Ee.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new gt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===eh}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Ti.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});Gt.prototype.clearTarget=function(s,t,e,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(t,e,n)};Gt.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};Gt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Gt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Gt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Gt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Gt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Gt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Gt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Gt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Gt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Gt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Gt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Gt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Gt.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};Gt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Gt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Gt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Gt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Gt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Gt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Gt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Gt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Gt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Gt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Gt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?Zt:Yn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(Nu.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(tn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});$v.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new jv().load(s,function(n){t.setBuffer(n)}),this};il.prototype.updateCubeMap=function(s,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,t)};il.prototype.clear=function(s,t,e,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,t,e,n)};Mi.crossOrigin=void 0;Mi.loadTexture=function(s,t,e,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Ov;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,e,void 0,n);return t&&(r.mapping=t),r};Mi.loadTextureCube=function(s,t,e,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Bv;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,e,void 0,n);return t&&(r.mapping=t),r};Mi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Mi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);export{$r as B,Sv as M,Oe as P,Ou as S,Gt as W,Be as a,Zf as g,py as l};
