(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Undertaker",image:"./images/undertaker.jpg"},{id:2,name:"Stone Cold Steve Austin",image:"./images/scsa.jpg"},{id:3,name:"Jim Duggan",image:"./images/hacksaw.jpg"},{id:4,name:"Hulk Hogan",image:"./images/hulk.jpg"},{id:5,name:"Mick Foley",image:"./images/mankind.png"},{id:6,name:"Kane",image:"./images/kane.jpg"},{id:7,name:"The Rock",image:"./images/rock.jpg"},{id:8,name:"China",image:"./images/china.webp"},{id:9,name:"Sable",image:"./images/sable.jpg"},{id:10,name:"Macho Man",image:"./images/machoman.jpg"},{id:11,name:"Yokozuna",image:"./images/Yoko.jpg"},{id:12,name:"ted",image:"./images/mmd.jpg"}]},,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(4),c=t.n(i),r=(t(16),t(5)),m=t(6),o=t(8),l=t(7),u=t(9),g=(t(17),t(2));var d=function(e){return s.a.createElement(g.Row,{vertical:"center"},s.a.createElement(g.Col,{span:12,className:"card",Row:!0,horizontal:"center"},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.wsc(e.id)},className:"wscscores"}))))};t(18);var h=function(e){return s.a.createElement("div",{className:"wrapper"},e.children)},p=t(1),f=function(e){return s.a.createElement("div",{className:"jumbotron"},s.a.createElement("p",null,"Clicky Game! Click on an image to earn points, but don't click on any more than once!"),s.a.createElement("h1",{className:"score",id:"wsc"},e.total),s.a.createElement("h1",{className:"status",id:"wsc"},e.status))},w=(t(19),function(e){return s.a.createElement("div",{className:"game"},s.a.createElement("h1",null,"WWF Wrestler Memory Game!"),s.a.createElement("h2",{className:"score"},e.total),s.a.createElement("h2",{className:"status"},e.status))}),k=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={wrestlers:p,score:0,goal:12,clickedWwfIds:[],status:""},t.wsc=function(e){var a=t.state.clickedWwfIds;if(a.includes(e))t.setState({clickedWwfIds:[],score:0,status:"lost!"});else{if(a.push(e),12===a.length)return t.setState({clickedWwfIds:[],score:12,status:"You Won!! Click again"}),void console.log("You Win");t.setState({wrestlers:p,clickedWwfIds:a,score:a.length,status:""});for(var n=p.length-1;n>0;n--){var s=Math.floor(Math.random()*(n+1)),i=[p[s],p[n]];p[n]=i[0],p[s]=i[1]}}},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(h,null,s.a.createElement(w,null),s.a.createElement(f,{total:this.state.score,status:this.state.status}),this.state.wrestlers.map(function(a){return s.a.createElement(d,{wsc:e.wsc,id:a.id,key:a.id,name:a.name,image:a.image})}))}}]),a}(n.Component);c.a.render(s.a.createElement(k,null),document.getElementById("root"))}],[[10,1,2]]]);