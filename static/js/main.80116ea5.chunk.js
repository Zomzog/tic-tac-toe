(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,r,t){"use strict";t.r(r);var a=t(8),n=t(1),s=t(2),i=t(4),u=t(3),o=t(5),c=t(0),l=t.n(c),d=t(7),m=t.n(d);t(16);function h(e){return l.a.createElement("button",{className:"square "+(e.isWinnerSquare?"winner":""),onClick:e.onClick},e.value)}var v=function(e){function r(){return Object(n.a)(this,r),Object(i.a)(this,Object(u.a)(r).apply(this,arguments))}return Object(o.a)(r,e),Object(s.a)(r,[{key:"renderSquare",value:function(e,r){var t=this,a=b(e,r),n=this.props.winner&&this.props.winner.indexOf(a)>=0;return l.a.createElement(h,{isWinnerSquare:n,value:this.props.squares[a],onClick:function(){return t.props.onClick(e,r)}})}},{key:"renderBorderSquare",value:function(e){return l.a.createElement("button",{className:"square"},e)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"board-row"},this.renderSquare(0,0),this.renderSquare(0,1),this.renderSquare(0,2),this.renderBorderSquare("0")),l.a.createElement("div",{className:"board-row"},this.renderSquare(1,0),this.renderSquare(1,1),this.renderSquare(1,2),this.renderBorderSquare("1")),l.a.createElement("div",{className:"board-row"},this.renderSquare(2,0),this.renderSquare(2,1),this.renderSquare(2,2),this.renderBorderSquare("2")),l.a.createElement("div",{className:"board-row"},this.renderBorderSquare("A"),this.renderBorderSquare("B"),this.renderBorderSquare("C")))}}]),r}(l.a.Component),q=function(e){function r(e){var t;return Object(n.a)(this,r),(t=Object(i.a)(this,Object(u.a)(r).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},t}return Object(o.a)(r,e),Object(s.a)(r,[{key:"handleClick",value:function(e,r){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice(),n=b(e,r);p(a)||a[n]||(a[n]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a,move:{row:e,col:r}}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,r=this,t=this.state.history,a=t[this.state.stepNumber],n=p(a.squares),s=t.map(function(e,t){var a=t?"Go to move #"+t+" "+String.fromCharCode(65+e.move.col)+","+e.move.row:"Go to game start";return l.a.createElement("li",{key:t},l.a.createElement("button",{onClick:function(){return r.jumpTo(t)}},a))});return e=n?"Winner: "+a.squares[n[0]]:"Next player: "+(this.state.xIsNext?"X":"O"),l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement(v,{winner:n,squares:a.squares,onClick:function(e,t){return r.handleClick(e,t)}})),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",null,e),l.a.createElement("ol",null,s)))}}]),r}(l.a.Component);function p(e){for(var r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<r.length;t++){var n=Object(a.a)(r[t],3),s=n[0],i=n[1],u=n[2];if(e[s]&&e[s]===e[i]&&e[s]===e[u])return r[t]}return null}function b(e,r){return 3*r+e}m.a.render(l.a.createElement(q,null),document.getElementById("root"))},16:function(e,r,t){},9:function(e,r,t){e.exports=t(10)}},[[9,2,1]]]);
//# sourceMappingURL=main.80116ea5.chunk.js.map