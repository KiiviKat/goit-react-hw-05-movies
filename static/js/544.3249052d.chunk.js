"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{368:function(e,r,t){t.d(r,{O:function(){return i}});var n=t(781),a=t(753),u=t(689),c=t(87),s=t(184),i=function(e){var r=e.movies,t=(0,u.TH)();return(0,s.jsx)("ul",{children:r.map((function(e){var r=e.id,u=e.title,i=e.poster_path,o=e.vote_average,p=e.release_date;return(0,s.jsx)("li",{children:(0,s.jsxs)(c.rU,{to:"/movies/".concat(r),state:{from:t},children:[(0,s.jsx)("img",{src:i?n.Y+i:a,alt:u}),(0,s.jsxs)("p",{children:[u," (",p.slice(0,4),")",(0,s.jsx)("span",{children:o?o.toFixed(1):"N/A"})]})]})},r)}))})}},544:function(e,r,t){t.r(r);var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(368),i=t(32),o=t(791),p=t(73),f=t(184);r.default=function(){var e=(0,o.useState)([]),r=(0,a.Z)(e,2),t=r[0],u=r[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Df)();case 3:r=e.sent,u(r),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),p.ZP.error("".concat(e.t0.message,"! Please try again! :("));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)(s.O,{movies:t}),(0,f.jsx)(p.x7,{})]})}},32:function(e,r,t){t.d(r,{Df:function(){return i},M1:function(){return f},TP:function(){return p},Wf:function(){return o},tx:function(){return l}});var n=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="3bff356dabf2463bd3474fa7d5296b16",i=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?",{params:{api_key:s,page:1}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?&language=en-US&query=".concat(r,"&page=1&include_adult=false"),{params:{api_key:s,page:1}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"?&language=en-US"),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/credits?&language=en-US"),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/reviews?&language=en-US"),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},781:function(e,r,t){t.d(r,{Y:function(){return n}});var n="https://image.tmdb.org/t/p/w400"},753:function(e,r,t){e.exports=t.p+"static/media/placeholder.bfc795a56752b8fb0239.jpg"}}]);
//# sourceMappingURL=544.3249052d.chunk.js.map