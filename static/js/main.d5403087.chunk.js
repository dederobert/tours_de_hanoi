(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(8),i=n.n(r),s=(n(15),n(2)),c=n(1),o=n(4),u=n(3),d=n(5),h=(n(17),n(6));function m(e){return a.a.createElement("button",{className:"pellet pellet-"+e.size+" tower-"+e.towerSize+(e.clicked?" clicked":"")+(e.ghost?" ghost":"")+(e.invalid?" invalid":""),onClick:e.onClick},e.size)}var p=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderPellet",value:function(e){var t=this;return this.props.value.includes(e)?a.a.createElement(m,{size:e,towerSize:this.props.value.length,clicked:this.props.clickedId===e,onClick:function(){return t.handleClick(e)}}):null}},{key:"renderPlacable",value:function(e){return this.props.clicked||null===e?null:a.a.createElement(m,{size:e,towerSize:this.props.value.length+1,clicked:!1,ghost:!0,invalid:b(e,this.props.value)})}},{key:"render",value:function(){var e=this,t=this.props.value.map(function(t){return e.renderPellet(t)});return a.a.createElement("div",{className:"tower",onClick:function(){return e.props.onClick()}},this.renderPlacable(this.props.clickedId),t,a.a.createElement("div",{className:"tower-name"},"Tour ",this.props.idTower))}},{key:"handleClick",value:function(e){this.props.onPelletClick(e)}}]),t}(l.Component),k=4,v=3;function f(e){return e&&e.length===k}function b(e,t){return t.length>0&&e>Math.min.apply(Math,Object(h.a)(t))}function E(e,t){var n=Array.apply(null,Array(e));return(n=n.map(function(e,t){return[]}))[0]=Array.apply(null,Array(t)),n[0]=n[0].map(function(e,t){return t}),n}var w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={towers:E(v,k),clickedIdTower:null,clickedIdPellet:null,nbClick:0,time:0,loader:null},console.dir(n.state.towers),E(v,k),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"renderTower",value:function(e){var t=this;return a.a.createElement(p,{idTower:e,value:this.state.towers[e],clicked:null!==this.state.clickedIdTower&&this.state.clickedIdTower===e,clickedId:this.state.clickedIdPellet,win:f(this.state.towers[v-1]),onPelletClick:function(n){return t.handlePelletClick(e,n)},onClick:function(){return t.handleClick(e)}})}},{key:"handleClick",value:function(e){if(null!==this.state.clickedIdPellet){var t=this.state.towers.slice();if(!b(this.state.clickedIdPellet,t[e])){t[e].splice(0,0,this.state.clickedIdPellet);var n=t[this.state.clickedIdTower].indexOf(this.state.clickedIdPellet);t[this.state.clickedIdTower].splice(n,1),this.setState({towers:t,clickedIdTower:null,clickedIdPellet:null}),e!==this.state.clickedIdTower&&(this.setState(function(e,t){return{nbClick:e.nbClick+1,loader:0}}),f(this.state.towers[v-1])&&this.props.save(this.state.nbClick+1,this.state.time))}}}},{key:"handlePelletClick",value:function(e,t){null!==this.state.clickedIdTower&&this.state.clickedIdTower===e&&null!==this.state.clickedIdPellet&&this.state.clickedIdPellet===t?this.setState({clickedIdTower:null,clickedIdPellet:null}):null!==this.state.loader||null!==this.state.clickedIdPellet||f(this.state.towers[v-1])||t!==Math.min.apply(Math,Object(h.a)(this.state.towers[e]))||this.setState({clickedIdTower:e,clickedIdPellet:t})}},{key:"render",value:function(){return a.a.createElement("div",{className:"board container"},a.a.createElement("div",null,"D\xe9placement(s) = ",this.state.nbClick," time = ",this.state.time),f(this.state.towers[v-1])?a.a.createElement("div",null,"F\xe9licitation !"):"",this.renderTower(0),this.renderTower(1),this.renderTower(2),null!==this.state.loader?this.renderLoader(this.props.loaderId):"")}},{key:"renderLoader",value:function(e){return-1===e?null:0===e?a.a.createElement("div",{className:"important"},"Sauvegarde ..."):a.a.createElement("div",null,"Sauvegarde ",a.a.createElement("progress",{value:this.state.loader,max:"100"},this.state.loader))}},{key:"tick",value:function(){null===this.state.loader&&this.setState(function(e,t){return{time:e.time+.1}}),(this.state.loader>=100||-1===this.props.loaderId)&&this.setState({loader:null}),null!==this.state.loader&&this.setState(function(e,t){return{loader:e.loader+10/t.timer}})}}]),t}(l.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"instruction container"},a.a.createElement("h2",null,"Informations"),a.a.createElement("p",null,"Dans le cadre d'une \xe9tude visant \xe0 am\xe9liorer les interfaces utilisateur, nous vous sollicitons afin de jouer \xe0 un petit jeu. Le r\xe9sultat du jeu sera sauvegard\xe9 ",a.a.createElement("b",null,"anonymement")," afin de r\xe9aliser des statistiques."),a.a.createElement("br",null),a.a.createElement("hr",null),a.a.createElement("br",null),a.a.createElement("h2",null,"R\xe8gle du jeu"),a.a.createElement("br",null),a.a.createElement("p",null,"Le but du jeu est de d\xe9placer enti\xe8rement la pile initiale sur la derni\xe8re tour.",a.a.createElement("ul",null,a.a.createElement("li",null,"Vous ne pouvez bouger que le disque en haut de la pile"),a.a.createElement("li",null,"Vous ne pouvez bouger qu\u2019un disque \xe0 la fois"),a.a.createElement("li",null,"Seul un petit disque peut \xeatre plac\xe9 sur un plus gros disque (un peu comme des poup\xe9es russes)"))),a.a.createElement("br",null),a.a.createElement("h2",null,"Objectif"),a.a.createElement("br",null),a.a.createElement("p",null,"Vous devez finir le jeu en r\xe9alisant le ",a.a.createElement("b",null,"moins de d\xe9placements")," possible"),a.a.createElement("br",null),a.a.createElement("a",{onClick:function(){return e.props.onClick()},className:"btn"},"D\xe9marrer"))}}]),t}(l.Component);function I(e){return a.a.createElement("div",{className:"congratulation container"},a.a.createElement("p",null,"F\xe9licitation vous avez r\xe9solu le probl\xe8me. ",a.a.createElement("br",null)," Nous vous remercions pour votre temps et votre participation."),a.a.createElement("br",null),a.a.createElement("a",{href:"https://github.com/dederobert/tours_de_hanoi",target:"_blank"},a.a.createElement("i",{className:"fab fa-github",title:"GitHub du projet"})))}var y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={instruction:!0,start:!1,congratulation:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"save",value:function(e,t,n){var l=new XMLHttpRequest;l.open("GET","https://unrepented-apportio.000webhostapp.com/saver.php?type="+e+"&click="+t+"&time="+n,!0),l.send(),this.setState({start:!1,congratulation:!0})}}]),Object(c.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"Game"},a.a.createElement("div",{className:"game-board"},this.renderBoard(),this.state.instruction?a.a.createElement(j,{onClick:function(){return e.handleClick()}}):null,this.state.congratulation?a.a.createElement(I,null):null))}},{key:"handleClick",value:function(){this.setState({instruction:!1,start:!0})}},{key:"renderBoard",value:function(){var e=this;if(this.state.start){var t=Math.floor(3*Math.random()+1)-2;return a.a.createElement(w,{loaderId:t,timer:2,save:function(n,l){return e.save(t,n,l)}})}return null}}]),t}(l.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App "+this.props.theme},a.a.createElement("h1",null,"Tours de Hano\xef"),a.a.createElement(y,null))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(O,{theme:"light"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.d5403087.chunk.js.map