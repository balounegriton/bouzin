(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/loop.696bc775.mp4"},25:function(e,t,a){e.exports=a.p+"static/media/logoWhite.15bb0261.png"},26:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),i=a.n(r),c=(a(32),a(3)),s=a(4),l=a(6),u=a(5),m=a(7),d=(a(8),a(24)),v=a.n(d),h=a(25),p=a.n(h),y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"landing"},o.a.createElement("img",{className:"logoWhite",id:"logoW2",src:p.a,alt:"logo"}),o.a.createElement("div",null,o.a.createElement("video",{className:"introVideo",autoPlay:!0,loop:!0,muted:!0},o.a.createElement("source",{src:v.a,type:"video/mp4"}))),o.a.createElement("p",{className:"titrePortfolio"},"No\xe9 Provost Portfolio"))}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return window.onscroll=function(){document.body.scrollTop>=800||document.documentElement.scrollTop>800?document.getElementById("nav").className="nav":document.getElementById("nav").className="hiden"},o.a.createElement("div",{id:"nav",className:"hiden"},o.a.createElement("p",{className:"plusNav"},"+"))}}]),t}(n.Component),g=a(10),O=a.n(g),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={playing:!0,mediaStart:!1},a.hoverOn=function(){!0===a.state.readytoPlay&&a.setState({playing:!0,MouseOver:!0}),document.getElementById("video1").className="mouseHover"},a.hoverOff=function(){a.setState({MouseOver:!1}),!0===a.state.readytoPlay&&a.setState({playing:!1}),document.getElementById("video1").className="mouseNotHover"},a.onPause=function(){!0===a.state.MouseOver&&console.log("ouvir page"),a.setState({playing:!1})},a.readytoPlay=function(){a.setState({playing:!1,readytoPlay:!0})},a.onStart=function(){a.setState({mediaStart:!0}),setTimeout(a.readytoPlay,300)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.playing;return o.a.createElement("div",{className:"colorBackground"},o.a.createElement("div",{id:"video1",className:"mouseNotHover"},o.a.createElement(O.a,{url:"https://player.vimeo.com/video/148894857?api=1&background=1&mute=0",playing:e,onPause:this.onPause,onMouseEnter:this.hoverOn,onMouseLeave:this.hoverOff,onStart:this.onStart,width:"57vw",height:"32vw",preload:"true"})))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={playing:!1,mediaStart:!1},a.hoverOn=function(e){a.setState({playing:!0,MouseOver:!0}),document.getElementById("video2").className="mouseHover"},a.hoverOff=function(e){a.setState({MouseOver:!1}),!1===a.state.mediaStart?setTimeout(a.hoverOff,50):(a.setState({playing:!1}),document.getElementById("video2").className="mouseNotHover")},a.onPause=function(){!0===a.state.MouseOver&&console.log("ouvir page"),a.setState({playing:!1})},a.onStart=function(){a.setState({mediaStart:!0})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.playing;return o.a.createElement("div",{className:"colorBackground"},o.a.createElement("div",{id:"video2",className:"mouseNotHover"},o.a.createElement(O.a,{url:"https://www.dailymotion.com/video/x74yjih",playing:e,onPause:this.onPause,onMouseEnter:this.hoverOn,onMouseLeave:this.hoverOff,onStart:this.onStart,width:"57vw",height:"32vw"})))}}]),t}(n.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(y,null),o.a.createElement("div",{className:"container-video"}," ",o.a.createElement(b,null)," "),o.a.createElement("div",{className:"container-video"},"  ",o.a.createElement(E,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[26,1,2]]]);
//# sourceMappingURL=main.7bbd33bf.chunk.js.map