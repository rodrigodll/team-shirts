(this["webpackJsonpteam-shirts"]=this["webpackJsonpteam-shirts"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/teste-logo.a5674001.png"},function(e,a,t){e.exports=t.p+"static/media/adidas.b52517f7.svg"},function(e,a,t){e.exports=t.p+"static/media/umbro.12520c3e.svg"},function(e,a,t){e.exports=t.p+"static/media/diadora.7e22e4e0.svg"},function(e,a,t){e.exports=t.p+"static/media/kappa.ce9196ec.svg"},function(e,a,t){e.exports=t.p+"static/media/puma.6fd3bcd6.svg"},function(e,a,t){e.exports=t.p+"static/media/bangu-rj.c36ed9b1.svg"},function(e,a,t){e.exports=t.p+"static/media/botafogo-rj.c890ca09.svg"},function(e,a,t){e.exports=t.p+"static/media/flamengo-rj.50496595.svg"},function(e,a,t){e.exports=t.p+"static/media/fluminense-rj.88d39df6.svg"},function(e,a,t){e.exports=t.p+"static/media/vasco-da-gama-rj.f7b4e556.svg"},function(e,a,t){e.exports=t.p+"static/media/palmeiras-sp.a551ddca.svg"},function(e,a,t){e.exports=t(32)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var o=t(0),c=t.n(o),s=t(7),n=t.n(s),r=(t(25),t(1)),l=t(2),i=t(3),m=t(5),p=t(4),g=(t(26),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"filterUpdate",value:function(){var e=this.myValue.value;this.props.filterUpdate(e)}},{key:"render",value:function(){var e=this;return c.a.createElement("form",null,c.a.createElement("input",{type:"text",placeholder:"Qual time?",ref:function(a){return e.myValue=a},onChange:this.filterUpdate.bind(this)}),c.a.createElement("p",null,"filtrando por: ",this.props.filterText))}}]),t}(o.Component)),u=(t(27),function(){var e=Object(o.useState)(!1),a=Object(p.a)(e,2),t=a[0],s=a[1];Object(o.useEffect)((function(){"theme-light"===localStorage.getItem("theme-color")?(s(!1),m(i)):(s(!0),m(l))}),[]);var n=document.querySelector("html"),r=function(e,a){return window.getComputedStyle(e).getPropertyValue(a)},l={bg:r(n,"--bg"),bgHeader:r(n,"--bg-header"),bgDetails:r(n,"--bg-Details"),shadowLogo:r(n,"--bg-Details"),inverter:r(n,"--color-inverter")},i={bg:"#e9ebee",bgHeader:"#f9f9f9",bgDetails:"#ffffff",shadowLogo:"#f1d3b8",inverter:"invert(0)"},m=function(e){console.log(e),Object.keys(e).map((function(a){return n.style.setProperty(function(e){return"--"+e.replace(/([A-Z])/,"-$1").toLowerCase()}(a),e[a])}))};return c.a.createElement("div",{className:"toggle-theme"},c.a.createElement("input",{type:"checkbox",id:"toggle",className:"toggle-theme__input ".concat(t?"":"active"),onClick:function(){console.log(">>>>>",t),t?(localStorage.setItem("theme-color","theme-light"),s(!1),m(i)):(localStorage.setItem("theme-color","theme-dark"),s(!0),m(l))}}),c.a.createElement("label",{htmlFor:"toggle",className:"toggle-theme__label"}))}),d=t(8),A=t.n(d),b=function(e){e.data;var a=e.filterText,t=e.filterUpdate,s=e.ChangeTheme,n=Object(o.useState)(!1),r=Object(p.a)(n,2),l=r[0],i=r[1];Object(o.useEffect)((function(){console.log(l,i)}),[]);return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("a",{href:"/"},c.a.createElement("img",{src:A.a,className:"header__logo",width:"120",alt:""})),c.a.createElement(g,{className:"d-none",filterText:a,filterUpdate:t}),c.a.createElement("button",{className:"header__search",onClick:function(){console.log(l,i),l?alert("sim"):alert("nao")}},c.a.createElement("img",{src:"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNTA4Ljg3NSw0OTMuNzkyTDM1My4wODksMzM4LjAwNWMzMi4zNTgtMzUuOTI3LDUyLjI0NS04My4yOTYsNTIuMjQ1LTEzNS4zMzlDNDA1LjMzMyw5MC45MTcsMzE0LjQxNywwLDIwMi42NjcsMCAgICBTMCw5MC45MTcsMCwyMDIuNjY3czkwLjkxNywyMDIuNjY3LDIwMi42NjcsMjAyLjY2N2M1Mi4wNDMsMCw5OS40MTEtMTkuODg3LDEzNS4zMzktNTIuMjQ1bDE1NS43ODYsMTU1Ljc4NiAgICBjMi4wODMsMi4wODMsNC44MTMsMy4xMjUsNy41NDIsMy4xMjVjMi43MjksMCw1LjQ1OC0xLjA0Miw3LjU0Mi0zLjEyNUM1MTMuMDQyLDUwNC43MDgsNTEzLjA0Miw0OTcuOTU4LDUwOC44NzUsNDkzLjc5MnogICAgIE0yMDIuNjY3LDM4NGMtOTkuOTc5LDAtMTgxLjMzMy04MS4zNDQtMTgxLjMzMy0xODEuMzMzUzEwMi42ODgsMjEuMzMzLDIwMi42NjcsMjEuMzMzUzM4NCwxMDIuNjc3LDM4NCwyMDIuNjY3ICAgIFMzMDIuNjQ2LDM4NCwyMDIuNjY3LDM4NHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"})),c.a.createElement(u,{ChangeTheme:s}))))},f=(t(28),function(){return c.a.createElement("div",{className:"footer"},"By Rodrigo Nascimento")}),h=(t(29),function(e){var a=e.data,t=e.filterText,o=e.selectTeam,s=a.filter((function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>=0||e.material.name.toLowerCase().indexOf(t.toLowerCase())>=0||e.location.city.toLowerCase().indexOf(t.toLowerCase())>=0})).map((function(e){return c.a.createElement("div",{className:"card",key:e.id},c.a.createElement("h2",{className:"card__name"},e.name),c.a.createElement("button",{className:"card__trigger",onClick:function(){!function(e){var t=a.filter((function(a){return a.id===e.id}));o(t[0],!0,e.colors.primary,e.colors.secondary)}(e)}},c.a.createElement("i",{className:"fas fa-arrow-right"})),c.a.createElement("p",{className:"card__material"},e.material.name),c.a.createElement("img",{className:"card__logo",src:e.logo,alt:e.name}),c.a.createElement("div",{className:"card__pic",style:{backgroundImage:"url("+e.image+")"}}),c.a.createElement("div",{className:"card__social"},e.social.facebook?c.a.createElement("a",{href:e.social.facebook,target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:e.color}},c.a.createElement("i",{className:"fab fa-facebook-f"})):"",e.social.instagram?c.a.createElement("a",{href:e.social.instagram,target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:e.color}},c.a.createElement("i",{className:"fab fa-instagram"})):"",e.social.twitter?c.a.createElement("a",{href:e.social.twitter,target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:e.color}},c.a.createElement("i",{className:"fab fa-twitter"})):"",e.social.youtube?c.a.createElement("a",{href:e.social.youtube,target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:e.color}},c.a.createElement("i",{className:"fab fa-youtube"})):""),c.a.createElement("button",{className:"card__button",style:"#000"===e.colors.primary?{opacity:"0.8",backgroundColor:e.colors.primary}:{backgroundColor:e.colors.primary}}))}));return c.a.createElement("div",{className:"cards"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},s)))}),B=(t(30),function(e){e.data;var a=e.teamSelected,t=e.selectTeam,o=e.showDetails,s=e.color;if(document.onkeydown=function(e){27===(e=e||window.event).keyCode&&t("",!1,"white","white")},console.log(a),""===a)return c.a.createElement("div",null,c.a.createElement("div",{className:"details__effects"},c.a.createElement("div",{className:"effect__polygon effect__polygon--one "}),c.a.createElement("div",{className:"effect__polygon effect__polygon--two "})),c.a.createElement("div",{className:"details "}));var n=a.shirt.map((function(e,a){return c.a.createElement("div",{className:"shirts-list__box ".concat(0===a?"active":""),key:a},c.a.createElement("div",{className:"shirts-list__image"},c.a.createElement("img",{src:e.thumb,width:"100",alt:""})),c.a.createElement("span",{className:"shirts-list__name"},e.name))})),r=a.shirt.filter((function(e){return"home"===e.model})).map((function(e,a){return c.a.createElement("img",{key:a,className:"principal-shirt__image",src:e.principal,width:"500",alt:e.name})}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"details__effects",onClick:function(){return t("",!1,"white","white")}},c.a.createElement("div",{className:"effect__polygon effect__polygon--one ".concat(o?"show":""),style:{background:"".concat("#fff"===s[1]?s[0]:s[1])}}),c.a.createElement("div",{className:"effect__polygon effect__polygon--two ".concat(o?"show":"")})),c.a.createElement("div",{className:o?"details show":"details"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-5"},c.a.createElement("div",{className:"details__brands"},c.a.createElement("button",{className:"details__close",onClick:function(){return t("",!1,"white","white")}},c.a.createElement("i",{className:"fas fa-arrow-left"})),c.a.createElement("div",{className:"principal-shirt",style:{backgroundColor:"#fff"===a.colors.secondary||"#000"===a.colors.secondary?a.colors.primary:a.colors.secondary}},r,c.a.createElement("div",{className:"#000"===a.colors.primary?"principal-shirt__background opacity":"principal-shirt__background",style:{backgroundImage:"url("+a.fans+")"}})))),c.a.createElement("div",{className:"col-lg-2"}),c.a.createElement("div",{className:"col-lg-5"},c.a.createElement("div",{className:"details__infos"},c.a.createElement("h4",{className:"shirt-info__material"},a.material.name),c.a.createElement("div",{className:"d-flex"},c.a.createElement("img",{src:a.logo,width:"40",alt:a.logo}),c.a.createElement("h1",{className:"shirt-info__name"},a.fullName)),c.a.createElement("p",{className:"shirt-info__description"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iusto, aut harum voluptatibus voluptate blanditiis maxime ut, id necessitatibus architecto molestias delectus quod veritatis tempore atque iure unde nemo reprehenderit.")),c.a.createElement("div",{className:"details__calltoaction"},c.a.createElement("a",{href:a.site,target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:"#fff"===a.colors.secondary?a.colors.primary:a.colors.secondary},className:"shirts-caltoaction__button button--default"},a.name),c.a.createElement("a",{href:a.material.site,target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:"#fff"===a.colors.secondary?a.colors.primary:a.colors.secondary},className:"shirts-caltoaction__button button--default"},a.material.name)),c.a.createElement("div",{className:"details__shirts"},c.a.createElement("div",{className:"shirts-list d-flex flex-wrap"},n)))))))}),w=(t(31),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).state={filterText:"",teamSelected:"",showDetails:!1,colorPri:"",colorSec:"",theme:"Dark"},o}return Object(l.a)(t,[{key:"filterUpdate",value:function(e){this.setState({filterText:e})}},{key:"selectTeam",value:function(e,a,t,o){""!==e&&this.setState({teamSelected:e,colorPri:t,colorSec:o}),this.setState({showDetails:a})}},{key:"render",value:function(){var e=this;return console.log(this.state.teamSelected),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"container"},c.a.createElement(b,{state:this,filterText:this.state.filterText,filterUpdate:this.filterUpdate.bind(this),ChangeTheme:this.state.theme}))),c.a.createElement("div",{className:"banner-tv"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"banner-tv__anime"},c.a.createElement("div",{className:"elem elem__2"},"Camisas"),c.a.createElement("div",{className:"elem elem__1"},c.a.createElement("img",{src:"/team-shirts/soccer-player-blue.png",alt:"",width:"250"})),c.a.createElement("div",{className:"elem elem__3"},"De Time")))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content"},c.a.createElement("p",null,this.state.filterText),c.a.createElement("p",null,"Busca por estados",c.a.createElement("button",{className:"filter__button",onClick:function(a){return e.setState({filterText:""})}},"Todos os estados"),c.a.createElement("button",{className:"filter__button",onClick:function(a){return e.setState({filterText:"Rio de Janeiro"})}},"Rio de Janeiro"),c.a.createElement("button",{className:"filter__button",onClick:function(a){return e.setState({filterText:"S\xe3o Paulo"})}},"S\xe3o Paulo"),c.a.createElement("button",{className:"filter__button",onClick:function(a){return e.setState({filterText:"Minas Gerais"})}},"Minas Gerais"),c.a.createElement("button",{className:"filter__button",onClick:function(a){return e.setState({filterText:"Rio Grande do Sul"})}},"Rio Grande do Sul")),c.a.createElement(h,{data:this.props.data,filterText:this.state.filterText,selectTeam:this.selectTeam.bind(this)}),c.a.createElement(B,{data:this.props.data,teamSelected:this.state.teamSelected,color:[this.state.colorPri,this.state.colorSec],showDetails:this.state.showDetails,selectTeam:this.selectTeam.bind(this)}))),c.a.createElement(f,null))}}]),t}(o.Component)),N=t(9),y=t.n(N),E=t(10),v=t.n(E),C=t(11),_=t.n(C),M=t(12),T=t.n(M),I=t(13),z=t.n(I),L=t(14),k=t.n(L),j=t(15),x=t.n(j),D=t(16),Q=t.n(D),H=t(17),G=t.n(H),O=t(18),S=t.n(O),P=t(19),U=t.n(P),Y=[{id:252352,name:"Bangu",fullName:"Bangu Atl\xe9tico Clube",abb:"BAN",material:{name:"W A Sports",logo:"https://www.wasport.com.br/simulador/simulador/img/logos/wasport.png",site:"/"},site:"https://www.bangu-ac.com.br/",colors:{primary:"red",secondary:"#fff"},logo:k.a,shirt:[{model:"home",name:"Alve Rubra",thumb:"https://1.bp.blogspot.com/-HMeh9v6TH40/XlKcS9MuCaI/AAAAAAAAVEc/OKTklqz_QH4SsXzXqi7NbB13_dt6ooaDQCLcBGAsYHQ/s100/Bangu%2B2020%2B1.png",principal:"https://1.bp.blogspot.com/-HMeh9v6TH40/XlKcS9MuCaI/AAAAAAAAVEc/OKTklqz_QH4SsXzXqi7NbB13_dt6ooaDQCLcBGAsYHQ/s500/Bangu%2B2020%2B1.png"},{model:"homeaway",name:"Branca",thumb:"https://1.bp.blogspot.com/-1bWbDBjOGEk/XlKcTJTqBpI/AAAAAAAAVEg/Z1p0JTX3rcEqYDrbwOd3bJl7H5n_BBSRQCLcBGAsYHQ/s100/Bangu%2B2020%2B2.png",principal:"https://1.bp.blogspot.com/-1bWbDBjOGEk/XlKcTJTqBpI/AAAAAAAAVEg/Z1p0JTX3rcEqYDrbwOd3bJl7H5n_BBSRQCLcBGAsYHQ/s500/Bangu%2B2020%2B2.png"},{model:"third",name:"Terceiro",thumb:"https://2.bp.blogspot.com/-aMf_gTyYLeA/WOlalM56IiI/AAAAAAAALmc/bXwVHyL9vsQBxTnWSL9LEySXdm0dwt-vwCLcB/s100/Bangu%2B2017%2B3.png",principal:"https://2.bp.blogspot.com/-aMf_gTyYLeA/WOlalM56IiI/AAAAAAAALmc/bXwVHyL9vsQBxTnWSL9LEySXdm0dwt-vwCLcB/s500/Bangu%2B2017%2B3.png"}],social:{facebook:"https://www.facebook.com/BanguOficial/",twitter:"https://twitter.com/Banguoficial",youtube:"https://www.youtube.com/channel/UCVy9x9KVuKFDnOnkv_bKRMg"},image:"https://www.gazetaesportiva.com/wp-content/uploads/imagem/2020/02/12/Bangu-1024x746.png",fans:"https://cdn.espn.com.br/image/wide/622_1c3208a0-c43e-3254-8aa1-90f0b2591b32.jpg",location:{country:"Brazil",state:"RJ",city:"Rio de Janeiro"}},{id:22346,name:"Botafogo",fullName:"Botafogo Futebol e Regatas",abb:"Bot",material:{name:"Kappa",logo:T.a,site:"/"},site:"https://www.botafogo.com.br/",colors:{primary:"#000",secondary:"#fff"},logo:x.a,shirt:[{model:"home",name:"Tradicional",thumb:"https://1.bp.blogspot.com/-Iad_BPlIqbo/XlKcUNOh5HI/AAAAAAAAVEs/pHbK9QtXcwIP7kzt20yqYuPtL7DuqOrpgCLcBGAsYHQ/s100/Botafogo%2B2019%2B-%2B2020%2BCarioca%2B2020%2B1.png",principal:"https://1.bp.blogspot.com/-Iad_BPlIqbo/XlKcUNOh5HI/AAAAAAAAVEs/pHbK9QtXcwIP7kzt20yqYuPtL7DuqOrpgCLcBGAsYHQ/s1500/Botafogo%2B2019%2B-%2B2020%2BCarioca%2B2020%2B1.png"},{model:"homeaway",name:"Branca",thumb:"https://1.bp.blogspot.com/-znZClnvTKNc/XlKcU2UNiEI/AAAAAAAAVE0/ScFg-qwDjmUr-yM7cCbJrE_zWeii8Tk6ACLcBGAsYHQ/s100/Botafogo%2B2019%2B-%2B2020%2BCarioca%2B2020%2B3.png",principal:"https://1.bp.blogspot.com/-znZClnvTKNc/XlKcU2UNiEI/AAAAAAAAVE0/ScFg-qwDjmUr-yM7cCbJrE_zWeii8Tk6ACLcBGAsYHQ/s500/Botafogo%2B2019%2B-%2B2020%2BCarioca%2B2020%2B3.png"},{model:"third",name:"Terceiro",thumb:"https://1.bp.blogspot.com/-QbgVXf9mlhs/XlKcUjDPZoI/AAAAAAAAVEw/etQF0Txc554IXXNcahbrchvRTrEPCXu3QCLcBGAsYHQ/s100/Botafogo%2B2019%2B-%2B2020%2BCarioca%2B2020%2B2.png",principal:"https://1.bp.blogspot.com/-QbgVXf9mlhs/XlKcUjDPZoI/AAAAAAAAVEw/etQF0Txc554IXXNcahbrchvRTrEPCXu3QCLcBGAsYHQ/s500/Botafogo%2B2019%2B-%2B2020%2BCarioca%2B2020%2B2.png"}],social:{facebook:"http://www.facebook.com/botafogo",instagram:"http://instagram.com/botafogo",twitter:"http://twitter.com/botafogo"},image:"https://lh3.googleusercontent.com/proxy/ZqsP0Bg3jqCluvqRoebGYQaWm38997lw3sCmHvCNq2zlgLFKq0EoqNdqv2RrJjQ7xH11-zUltK9X7mD-5aFV06lD_96SVd5fVMfPmfF2INEW4YKAqWnRuP5r",fans:"https://img.vavel.com/o-matic-7400209461.jpg",location:{country:"Brazil",state:"RJ",city:"Rio de Janeiro"}},{id:2342,name:"Flamengo",fullName:"Clube de Regatas do Flamengo",abb:"Fla",material:{name:"Adidas",logo:y.a,site:"https://www.adidas.com.br/flamengo"},site:"https://www.flamengo.com.br",colors:{primary:"red",secondary:"#000"},logo:Q.a,shirt:[{model:"home",name:"Rubro negra",thumb:"https://1.bp.blogspot.com/-jhzrvozUFtY/XlKcWxYmZvI/AAAAAAAAVFM/QU2OmG0We74dYuHTzqEqLlGHx_asJqTxwCLcBGAsYHQ/s100/Flamengo%2B2020%2B-%2B2021%2BCarioca%2B2020%2B1.png",principal:"https://1.bp.blogspot.com/-jhzrvozUFtY/XlKcWxYmZvI/AAAAAAAAVFM/QU2OmG0We74dYuHTzqEqLlGHx_asJqTxwCLcBGAsYHQ/s500/Flamengo%2B2020%2B-%2B2021%2BCarioca%2B2020%2B1.png"},{model:"homeaway",name:"Branca",thumb:"https://1.bp.blogspot.com/-xpa8qhXJ9RI/XlKcWJnIjmI/AAAAAAAAVFE/dI_l2zHL3d87QqN22GFMDFFOlgbUsdAWACLcBGAsYHQ/s100/Flamengo%2B2019%2B-%2B2020%2BCarioca%2B2020%2B2.png",principal:"https://1.bp.blogspot.com/-xpa8qhXJ9RI/XlKcWJnIjmI/AAAAAAAAVFE/dI_l2zHL3d87QqN22GFMDFFOlgbUsdAWACLcBGAsYHQ/s500/Flamengo%2B2019%2B-%2B2020%2BCarioca%2B2020%2B2.png"},{model:"third",name:"Terceiro",thumb:"https://1.bp.blogspot.com/-WzKnu9FPMx4/XlKcWhcGhyI/AAAAAAAAVFI/Z328kEMDC1g-TLufV-JsuUR_0NMbAkFVACLcBGAsYHQ/s100/Flamengo%2B2019%2B-%2B2020%2BCarioca%2B2020%2B3.png",principal:"https://1.bp.blogspot.com/-WzKnu9FPMx4/XlKcWhcGhyI/AAAAAAAAVFI/Z328kEMDC1g-TLufV-JsuUR_0NMbAkFVACLcBGAsYHQ/s500/Flamengo%2B2019%2B-%2B2020%2BCarioca%2B2020%2B3.png"}],social:{facebook:"face",instagram:"insta",youtube:"youtbe"},image:"https://odia.ig.com.br/_midias/jpg/2020/03/07/dani9206-16115081.jpg",fans:"https://i2.wp.com/mundorubronegro.com/wp-content/uploads/2018/07/torcida-flamengo-maracana-1-e1532100164142.jpg",location:{country:"Brazil",state:"RJ",city:"Rio de Janeiro"}},{id:44685,name:"Fluminense",fullName:"Fluminense Football Club",abb:"Flu",material:{name:"Umbro",logo:v.a,site:"https://www.umbro.com.br/fluminense"},site:"https://www.fluminense.com.br",colors:{primary:"#860929",secondary:"#15633d",third:"#fff"},logo:G.a,shirt:[{model:"home",name:"Tricolor 2020",thumb:"https://fluminense.vteximg.com.br/arquivos/ids/157267-100-100/Tricolor-_-Masculina-_-Frente.png",principal:"https://fluminense.vteximg.com.br/arquivos/ids/157267-500-500/Tricolor-_-Masculina-_-Frente.png"},{model:"homeaway",name:"Branca 2020",thumb:"https://fluminense.vteximg.com.br/arquivos/ids/157241-100-100/Branca-_-Masculina-_-Frente.png",principal:"https://fluminense.vteximg.com.br/arquivos/ids/157241-500-500/Branca-_-Masculina-_-Frente.png"}],social:{facebook:"https://www.facebook.com/FluminenseFC/",instagram:"https://www.instagram.com/fluminensefc/",youtube:"https://www.youtube.com/fluminensefc",twitter:"https://twitter.com/fluminensefc"},image:"https://unity-img.tbxapis.com/v0/images/07fbc223325610b5a5ebdab08c34ff45/content/5e4c8f1b9e282010f88d9bd7/06c338aca93f471903509067bcd30224/img.jpg",fans:"https://conteudo.imguol.com.br/c/esporte/45/2019/08/27/torcida-do-fluminense-abracou-a-equipe-na-copa-sul-americana-1566955127049_v2_1920x1080.jpg",location:{country:"Brazil",state:"RJ",city:"Rio de Janeiro"}},{id:52463,name:"Vasco da Gama",fullName:"Club de Regatas Vasco da Gama",abb:"Vas",material:{name:"Diadora",logo:_.a,site:"/"},site:"https://www.vasco.com.br",colors:{primary:"#000",secondary:"#fff"},logo:S.a,shirt:[{model:"home",name:"Tradicional",thumb:"https://1.bp.blogspot.com/-0uaAU9O941Q/Xdq8HqRgvcI/AAAAAAAAUS8/R4fc69yVtwYN8cn0xQTQx65kK2QYzcAowCLcBGAsYHQ/s1600/Vasco%2Bda%2BGama%2B2019%2B-%2B2020%2B1.png",principal:"https://1.bp.blogspot.com/-0uaAU9O941Q/Xdq8HqRgvcI/AAAAAAAAUS8/R4fc69yVtwYN8cn0xQTQx65kK2QYzcAowCLcBGAsYHQ/s1600/Vasco%2Bda%2BGama%2B2019%2B-%2B2020%2B1.png"},{model:"homeaway",name:"Branca",thumb:"https://1.bp.blogspot.com/-OOzZPeYp-xU/Xdq8HrewBGI/AAAAAAAAUTE/uj8CHKwvNHMHvAJ6yWzFiz-zVH3nw_iKACLcBGAsYHQ/s1600/Vasco%2Bda%2BGama%2B2019%2B-%2B2020%2B2.png",principal:"https://1.bp.blogspot.com/-OOzZPeYp-xU/Xdq8HrewBGI/AAAAAAAAUTE/uj8CHKwvNHMHvAJ6yWzFiz-zVH3nw_iKACLcBGAsYHQ/s1600/Vasco%2Bda%2BGama%2B2019%2B-%2B2020%2B2.png"},{model:"third",name:"Terceiro",thumb:"https://1.bp.blogspot.com/-y65hG_ffTWo/Xdq8Hh1m6UI/AAAAAAAAUTA/ekoETj-Mvvg28fJf2UCgTYjQbyrTSwU0gCLcBGAsYHQ/s1600/Vasco%2Bda%2BGama%2B2019%2B-%2B2020%2B3.png",principal:"https://1.bp.blogspot.com/-y65hG_ffTWo/Xdq8Hh1m6UI/AAAAAAAAUTA/ekoETj-Mvvg28fJf2UCgTYjQbyrTSwU0gCLcBGAsYHQ/s1600/Vasco%2Bda%2BGama%2B2019%2B-%2B2020%2B3.png"}],social:{facebook:"face",instagram:"insta",youtube:"youtbe"},image:"https://conteudo.cbf.com.br/cdn/thumbs/910x0/202002/20200205013705_455.jpeg",fans:"https://bolavip.com/__export/1588001559302/sites/bolavip/img/2020/04/27/vasco_torcida_crop1588001558844.jpg_554688468.jpg",location:{country:"Brazil",state:"RJ",city:"Rio de Janeiro"}},{id:23432,name:"Palmeiras",fullName:"Sociedade Esportiva Palmeiras",abb:"PAL",material:{name:"Puma",logo:z.a,site:"/"},site:"https://www.vasco.com.br",colors:{primary:"#156136",secondary:"#fff"},logo:U.a,shirt:[{model:"home",name:"Tradicional",thumb:"https://1.bp.blogspot.com/-AWaBDBgANqU/XrcDHxuHmDI/AAAAAAAAVow/b8gtpiAypmYJA51CoXN9zH5dIGedlGOOQCLcBGAsYHQ/s320/Palmeiras%2B2020%2B-%2B2021%2B1.png",principal:"https://1.bp.blogspot.com/-AWaBDBgANqU/XrcDHxuHmDI/AAAAAAAAVow/b8gtpiAypmYJA51CoXN9zH5dIGedlGOOQCLcBGAsYHQ/s320/Palmeiras%2B2020%2B-%2B2021%2B1.png"},{model:"homeaway",name:"Branca",thumb:"https://1.bp.blogspot.com/-TZVzuVCTrH8/XrcDIKxcfOI/AAAAAAAAVo0/ZnIYUTo2N1kDK8Egxsc0OSSSlbzczd_GgCLcBGAsYHQ/s320/Palmeiras%2B2020%2B-%2B2021%2B2.png",principal:"https://1.bp.blogspot.com/-TZVzuVCTrH8/XrcDIKxcfOI/AAAAAAAAVo0/ZnIYUTo2N1kDK8Egxsc0OSSSlbzczd_GgCLcBGAsYHQ/s320/Palmeiras%2B2020%2B-%2B2021%2B2.png"},{model:"third",name:"Terceiro",thumb:"https://1.bp.blogspot.com/-EWdDQNzqA0w/XdFOpoIEfQI/AAAAAAAAURc/rF9lW3Kg19EOiE7QgeQiKWYKHlX6G4i6gCLcBGAsYHQ/s320/Palmeiras%2B2019%2B-%2B2020%2B3.png",principal:"https://1.bp.blogspot.com/-EWdDQNzqA0w/XdFOpoIEfQI/AAAAAAAAURc/rF9lW3Kg19EOiE7QgeQiKWYKHlX6G4i6gCLcBGAsYHQ/s320/Palmeiras%2B2019%2B-%2B2020%2B3.png"},{model:"fourth",name:"Quarto",thumb:"https://1.bp.blogspot.com/-OdDVbW-qifs/XdFOqULmp6I/AAAAAAAAURk/9ENb9LJgq5Qmbndu7kXGQqUUlBjJ434ugCLcBGAsYHQ/s320/Palmeiras%2B2019%2B-%2B2020%2B4.png",principal:"https://1.bp.blogspot.com/-OdDVbW-qifs/XdFOqULmp6I/AAAAAAAAURk/9ENb9LJgq5Qmbndu7kXGQqUUlBjJ434ugCLcBGAsYHQ/s320/Palmeiras%2B2019%2B-%2B2020%2B4.png"}],social:{facebook:"face",instagram:"insta",youtube:"youtbe"},image:"https://s3.amazonaws.com/sep-bucket-prod/wp-content/uploads/2020/01/18154255/florida_cup_willian.jpeg",fans:"https://abrilveja.files.wordpress.com/2017/07/palmeiras-corinthians-20170712-044.jpg",location:{country:"Brazil",state:"SP",city:"S\xe3o Paulo"}}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,{data:Y})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.663dd6ac.chunk.js.map