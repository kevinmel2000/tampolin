(this.webpackJsonptampolinapp=this.webpackJsonptampolinapp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),l=a.n(r),s=(a(14),a(3)),i=a(4),c=a(7),m=a(5),u=a(8),p=(a(15),a(6)),d=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).enterName=function(e){a.setState({enemies_name:e.target.value})},a.enterLink=function(e){a.setState({enemies_img:e.target.value})},a.slap=function(){a.setState({play:!0});var e=new p;new Audio(a.state.audioUrl).play(),e.translate({from:{x:-300,y:50},to:{x:20,y:0}}).scale({from:{x:1,y:15},to:{x:1,y:1}}).applyTo(document.querySelectorAll(".animation-target"));var t=a.state.slapCount;a.setState({slapCount:t+1}),a.state.slapCount>10&&a.setState({songVideo:"https://www.youtube.com/embed/XwjjbWg875Q?autoplay=1",quoteStyle:"block"})},a.state={play:!1,audioUrl:"",slapImg:"",slapCount:0,enemies_name:"",enemies_img:"",songVideo:"",quoteStyle:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({audioUrl:window.origin+"/tampolin/slap.wav",slapImg:window.origin+"/tampolin/slap.png",enemies_img:"https://www.w3schools.com/bootstrap4/img_avatar3.png",quoteStyle:"none"})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-3"},o.a.createElement("h3",{className:"text-center slap-counter"},"Slap Counter :"),o.a.createElement("h1",{className:"text-center"},this.state.slapCount)),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("div",{className:"animation-target"},o.a.createElement("img",{src:this.state.slapImg})),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("img",{className:"card-img-top",src:this.state.enemies_img,alt:"image"}),o.a.createElement("p",null,this.state.enemies_name),o.a.createElement("input",{onKeyUp:function(t){return e.enterName(t)},placeholder:"Insert your enemies name",className:"form-control input-lg"}),o.a.createElement("p",null,o.a.createElement("br",null),o.a.createElement("input",{onChange:function(t){return e.enterLink(t)},placeholder:"Insert your enemies image link",className:"form-control input-lg"}))),o.a.createElement("div",{className:"card-footer"},o.a.createElement("button",{className:"btn btn-block btn-danger btn-lg",onClick:this.slap},"Tampols It Baby!!!")))),o.a.createElement("div",{className:"col-md-4 slap-counter"},o.a.createElement("iframe",{width:"100%",height:"300px",src:this.state.songVideo,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}),o.a.createElement("p",{className:"text-muted text-center",style:{display:this.state.quoteStyle}},"I offer you peace, I offer you love, I offer you friendship. I see your beauty, I hear your need, I feel your feelings. My wisdom flows from the highest source. I salute that Source in you. Let us work together for unity and peace",o.a.createElement("span",null,"- Mahatma Gandhi")))),o.a.createElement("div",{className:"row text-center"},o.a.createElement("div",{className:"col-md-12 navbar text-white fixed-bottom navbar-expand-sm navbar-dark bg-dark"},"Tampolin - 2019 by  :  ",o.a.createElement("a",{href:"https://www.youtube.com/agitnaeta"},"@agitnaeta"))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);l.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.b777de48.chunk.js.map