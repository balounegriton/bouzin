(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/loop.696bc775.mp4"},function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/yeux.8e014b64.mp4"},function(e,t,a){e.exports=a.p+"static/media/ski.7d366416.mp4"},function(e,t,a){e.exports=a.p+"static/media/kite.4562c752.mp4"},function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logoWhite.15bb0261.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),r=a.n(i),c=(a(19),a(1)),s=a(2),l=a(4),d=a(3),m=a(5),u=(a(7),a(10)),v=a.n(u),p=a(11),f=a.n(p),E=a(12),N=a.n(E),y=(a(20),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).hoverOn=function(){document.getElementById("videoA").className="texte-hover-video"},a.hoverOn2=function(){document.getElementById("videoB").className="texte-hover-video2"},a.hoverOn3=function(){document.getElementById("videoC").className="texte-hover-video3"},a.hoverOff=function(){document.getElementById("videoA").className="hiding",document.getElementById("videoB").className="hiding",document.getElementById("videoC").className="hiding"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"landing"},o.a.createElement("div",null,o.a.createElement("div",{id:"videoA",className:"hiding"}," ",o.a.createElement("div",{className:"dispflex"},"MOTION"),"   "),o.a.createElement("video",{className:"introVideo",autoPlay:!0,loop:!0,muted:!0,onMouseEnter:this.hoverOn,onMouseLeave:this.hoverOff},o.a.createElement("source",{src:N.a,type:"video/mp4"})),"    "),o.a.createElement("div",null,o.a.createElement("div",{id:"videoB",className:"hiding"}," ",o.a.createElement("div",{className:"dispflex2"},"WEB DESIGN"),"   "),o.a.createElement("video",{className:"introVideo2",autoPlay:!0,loop:!0,muted:!0,onMouseEnter:this.hoverOn2,onMouseLeave:this.hoverOff},o.a.createElement("source",{src:f.a,type:"video/mp4"}))),o.a.createElement("div",null,o.a.createElement("div",{id:"videoC",className:"hiding"}," ",o.a.createElement("div",{className:"dispflex3"},"VIDEO"),"   "),o.a.createElement("video",{className:"introVideo3",autoPlay:!0,loop:!0,muted:!0,onMouseEnter:this.hoverOn3,onMouseLeave:this.hoverOff},o.a.createElement("source",{src:v.a,type:"video/mp4"}))),o.a.createElement("div",{id:"titrePortfolio",className:"titrePortfolio"},"NoeProvost"))}}]),t}(n.Component)),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1},a.handleClick=function(){a.state.open?(document.getElementById("nav").className="nav",document.getElementById("plusNav").className="plusNav",document.getElementById("about").className="AboutFermer",a.setState({open:!1})):(document.getElementById("nav").className="navOpen",document.getElementById("plusNav").className="plusNavOpen",document.getElementById("about").className="About",a.setState({open:!0}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"nav",className:"nav",onClick:this.handleClick},o.a.createElement("p",{id:"about",className:"AboutFermer"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),o.a.createElement("p",{id:"plusNav",className:"plusNav"},"+"))}}]),t}(n.Component),j=a(6),O=a.n(j),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).playVideo=function(){a.refs.vidRef.play(),document.getElementById("video1").className="mouseHover"},a.pauseVideo=function(){a.refs.vidRef.pause(),document.getElementById("video1").className="mouseNotHover"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"colorBackground"},o.a.createElement("video",{id:"video1",className:"mouseNotHover",ref:"vidRef",src:O.a,type:"video/mp4",onMouseEnter:this.playVideo,onMouseLeave:this.pauseVideo}),o.a.createElement("div",{className:"projectInfo"},"   ",o.a.createElement("div",{className:"titreProjet"},"Titre Du Projet  "),"  ",o.a.createElement("div",{className:"titreProjet"}," Type  ")))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).playVideo=function(){a.refs.vidRef.play(),document.getElementById("video2").className="mouseHover"},a.pauseVideo=function(){a.refs.vidRef.pause(),document.getElementById("video2").className="mouseNotHover"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"colorBackground"},o.a.createElement("video",{id:"video2",className:"mouseNotHover",ref:"vidRef",src:O.a,type:"video/mp4",onMouseEnter:this.playVideo,onMouseLeave:this.pauseVideo}),o.a.createElement("div",{className:"projectInfo"},"   ",o.a.createElement("div",{className:"titreProjet"},"Titre Du Projet  "),"  ",o.a.createElement("div",{className:"titreProjet"}," Type  ")))}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).playVideo=function(){a.refs.vidRef.play(),document.getElementById("video3").className="mouseHover"},a.pauseVideo=function(){a.refs.vidRef.pause(),document.getElementById("video3").className="mouseNotHover"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"colorBackground"},o.a.createElement("video",{id:"video3",className:"mouseNotHover",ref:"vidRef",src:O.a,type:"video/mp4",onMouseEnter:this.playVideo,onMouseLeave:this.pauseVideo}),o.a.createElement("div",{className:"projectInfo"},"   ",o.a.createElement("div",{className:"titreProjet"},"Titre Du Projet  "),"  ",o.a.createElement("div",{className:"titreProjet"}," Type  ")))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).playVideo=function(){a.refs.vidRef.play(),document.getElementById("video4").className="mouseHover"},a.pauseVideo=function(){a.refs.vidRef.pause(),document.getElementById("video4").className="mouseNotHover"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"colorBackground"},o.a.createElement("video",{id:"video4",className:"mouseNotHover",ref:"vidRef",src:O.a,type:"video/mp4",onMouseEnter:this.playVideo,onMouseLeave:this.pauseVideo}),o.a.createElement("div",{className:"projectInfo"},"   ",o.a.createElement("div",{className:"titreProjet"},"Titre Du Projet  "),"  ",o.a.createElement("div",{className:"titreProjet"}," Type  ")))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).playVideo=function(){a.refs.vidRef.play(),document.getElementById("video5").className="mouseHover"},a.pauseVideo=function(){a.refs.vidRef.pause(),document.getElementById("video5").className="mouseNotHover"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"colorBackground"},o.a.createElement("video",{id:"video5",className:"mouseNotHover",ref:"vidRef",src:O.a,type:"video/mp4",onMouseEnter:this.playVideo,onMouseLeave:this.pauseVideo}),o.a.createElement("div",{className:"projectInfo"},"   ",o.a.createElement("div",{className:"titreProjet"},"Titre Du Projet  "),"  ",o.a.createElement("div",{className:"titreProjet"}," Type  ")))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement(y,null),o.a.createElement("div",{className:"container-video"}," ",o.a.createElement(b,null)," "),o.a.createElement("div",{className:"container-video"}," ",o.a.createElement(g,null)," "),o.a.createElement("div",{className:"container-video"}," ",o.a.createElement(B,null)," "),o.a.createElement("div",{className:"container-video"}," ",o.a.createElement(I,null)," "),o.a.createElement("div",{className:"container-video"}," ",o.a.createElement(V,null)," "))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,1,2]]]);
//# sourceMappingURL=main.efb980aa.chunk.js.map