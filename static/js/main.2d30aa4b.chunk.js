(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/loop.696bc775.mp4"},function(e,t,a){},,,,,function(e,t,a){e.exports=a.p+"static/media/yeux.8e014b64.mp4"},function(e,t,a){e.exports=a.p+"static/media/ski.7d366416.mp4"},function(e,t,a){e.exports=a.p+"static/media/kite.4562c752.mp4"},function(e,t,a){e.exports=a(29)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logoWhite.15bb0261.png"},,,,,,,function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(9),i=a.n(r),c=(a(21),a(1)),s=a(2),l=a(4),d=a(3),m=a(5),u=(a(7),a(12)),v=a.n(u),p=a(13),f=a.n(p),E=a(14),h=a.n(E),N=(a(22),a(10)),y=a.n(N),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).scroll=function(){a.props.parentMethod()},a.hoverOn=function(){document.getElementById("videoA").className="texte-hover-video"},a.hoverOn2=function(){document.getElementById("videoB").className="texte-hover-video2"},a.hoverOn3=function(){document.getElementById("videoC").className="texte-hover-video3"},a.hoverOff=function(){document.getElementById("videoA").className="hiding",document.getElementById("videoB").className="hiding",document.getElementById("videoC").className="hiding"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"landing"},n.a.createElement("div",null,n.a.createElement("div",{id:"videoA",className:"hiding"}," ",n.a.createElement("div",{className:"dispflex"},"MOTION DESIGNER"),"   "),n.a.createElement("video",{className:"introVideo",autoPlay:!0,loop:!0,muted:!0,onMouseEnter:this.hoverOn,onMouseLeave:this.hoverOff},n.a.createElement("source",{src:h.a,type:"video/mp4"})),"    "),n.a.createElement("div",null,n.a.createElement("div",{id:"videoB",className:"texte-hover-video2"}," ",n.a.createElement("div",{className:"dispflex2"},"WEB.DESIGNER"),"   "),n.a.createElement("video",{className:"introVideo2",autoPlay:!0,loop:!0,muted:!0,onMouseEnter:this.hoverOn2,onMouseLeave:this.hoverOff,onClick:this.scroll},n.a.createElement("source",{src:f.a,type:"video/mp4"}))),n.a.createElement("div",null,n.a.createElement("div",{id:"videoC",className:"hiding"}," ",n.a.createElement("div",{className:"dispflex3"},"VIDEO DIRECTOR"),"   "),n.a.createElement("video",{className:"introVideo3",autoPlay:!0,loop:!0,muted:!0,onMouseEnter:this.hoverOn3,onMouseLeave:this.hoverOff},n.a.createElement("source",{src:v.a,type:"video/mp4"}))),n.a.createElement("div",{id:"titrePortfolio",className:"titrePortfolio"},"NoeProvost"))}}]),t}(o.Component),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={open:!1},a.handleClick=function(){a.state.open?(document.getElementById("nav").className="nav",document.getElementById("plusNav").className="plusNav",document.getElementById("about").className="AboutFermer",a.setState({open:!1})):(document.getElementById("nav").className="navOpen",document.getElementById("plusNav").className="plusNavOpen",document.getElementById("about").className="About",a.setState({open:!0}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"nav",className:"nav"},n.a.createElement("p",{id:"about",className:"AboutFermer"},"I am a creative technologist. I use leading edge technology to execute creative marketing projects. I combine my motion designer and video editor background with my programming skills, to bring creative ideas to life. My expertise and my passion for visual "),n.a.createElement("p",{id:"plusNav",className:"plusNav",onClick:this.handleClick},"+"))}}]),t}(o.Component),b=a(6),O=a.n(b),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).playVideo=function(){a.refs.vidRef.play(),document.getElementById("video1").className="mouseHover"},a.pauseVideo=function(){a.refs.vidRef.pause(),document.getElementById("video1").className="mouseNotHover"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"colorBackground"},n.a.createElement("video",{id:"video1",className:"mouseNotHover",ref:"vidRef",src:O.a,type:"video/mp4",onMouseEnter:this.playVideo,onMouseLeave:this.pauseVideo}),n.a.createElement("div",{className:"projectInfo"},"   ",n.a.createElement("div",{className:"titreProjet"},"Titre Du Projet  "),"  ",n.a.createElement("div",{className:"titreProjet"}," Type  ")))}}]),t}(o.Component),B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).playVideo=function(){a.refs.vidRef.play(),document.getElementById("video2").className="mouseHover"},a.pauseVideo=function(){a.refs.vidRef.pause(),document.getElementById("video2").className="mouseNotHover"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"colorBackground"},n.a.createElement("video",{id:"video2",className:"mouseNotHover",ref:"vidRef",src:O.a,type:"video/mp4",onMouseEnter:this.playVideo,onMouseLeave:this.pauseVideo}),n.a.createElement("div",{className:"projectInfo"},"   ",n.a.createElement("div",{className:"titreProjet"},"Titre Du Projet  "),"  ",n.a.createElement("div",{className:"titreProjet"}," Type  ")))}}]),t}(o.Component),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).playVideo=function(){a.refs.vidRef.play(),document.getElementById("video3").className="mouseHover"},a.pauseVideo=function(){a.refs.vidRef.pause(),document.getElementById("video3").className="mouseNotHover"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"colorBackground"},n.a.createElement("video",{id:"video3",className:"mouseNotHover",ref:"vidRef",src:O.a,type:"video/mp4",onMouseEnter:this.playVideo,onMouseLeave:this.pauseVideo}),n.a.createElement("div",{className:"projectInfo"},"   ",n.a.createElement("div",{className:"titreProjet"},"Titre Du Projet  "),"  ",n.a.createElement("div",{className:"titreProjet"}," Type  ")))}}]),t}(o.Component),V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).playVideo=function(){a.refs.vidRef.play(),document.getElementById("video4").className="mouseHover"},a.pauseVideo=function(){a.refs.vidRef.pause(),document.getElementById("video4").className="mouseNotHover"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"colorBackground"},n.a.createElement("video",{id:"video4",className:"mouseNotHover",ref:"vidRef",src:O.a,type:"video/mp4",onMouseEnter:this.playVideo,onMouseLeave:this.pauseVideo}),n.a.createElement("div",{className:"projectInfo"},"   ",n.a.createElement("div",{className:"titreProjet"},"Titre Du Projet  "),"  ",n.a.createElement("div",{className:"titreProjet"}," Type  ")))}}]),t}(o.Component),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).playVideo=function(){a.refs.vidRef.play(),document.getElementById("video5").className="mouseHover"},a.pauseVideo=function(){a.refs.vidRef.pause(),document.getElementById("video5").className="mouseNotHover"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"colorBackground"},n.a.createElement("video",{id:"video5",className:"mouseNotHover",ref:"vidRef",src:O.a,type:"video/mp4",onMouseEnter:this.playVideo,onMouseLeave:this.pauseVideo}),n.a.createElement("div",{className:"projectInfo"},"   ",n.a.createElement("div",{className:"titreProjet"},"Titre Du Projet  "),"  ",n.a.createElement("div",{className:"titreProjet"}," Type  ")))}}]),t}(o.Component),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).someMethod=function(){console.log("bar"),y()(a.video55,{offset:0,align:"top",duration:1500})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(g,null),n.a.createElement(j,{parentMethod:this.someMethod}),n.a.createElement("div",{className:"container-video"}," ",n.a.createElement(I,null)," "),n.a.createElement("div",{className:"container-video"}," ",n.a.createElement(B,null)," "),n.a.createElement("div",{className:"container-video"}," ",n.a.createElement(k,null)," "),n.a.createElement("div",{className:"container-video"}," ",n.a.createElement(V,{ref:function(t){e.video55=t}})," "),n.a.createElement("div",{className:"container-video"}," ",n.a.createElement(M,null)," "))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.2d30aa4b.chunk.js.map