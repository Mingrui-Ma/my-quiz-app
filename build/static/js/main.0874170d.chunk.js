(this["webpackJsonpmy-quiz-app"]=this["webpackJsonpmy-quiz-app"]||[]).push([[0],{35:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(13),o=n.n(a),s=(n(35),n(3)),r=n(44),l=n(81),u=n(79),b=n(2);function d(e){var t=e.sizeOfFont,n=e.disclaimerVisibility,c=Object(i.useState)(d(.8)),a=Object(s.a)(c,2),o=a[0],r=a[1];function d(e){return parseFloat(t)*e+"%"}return Object(i.useEffect)((function(){r(d(.8))}),[t]),Object(b.jsx)("footer",{id:"disclaimer",style:{fontSize:o,display:n},children:Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsxs)("p",{children:["This application is created with"," ",Object(b.jsx)("a",{href:"https://github.com/axios/axios",target:"_blank",rel:"noreferrer",children:"Axios"}),","," ",Object(b.jsx)("a",{href:"https://reactjs.org/",target:"_blank",rel:"noreferrer",children:"ReactJS"}),","," ",Object(b.jsx)("a",{href:"https://react-bootstrap.github.io/",target:"_blank",rel:"noreferrer",children:"React-Bootstrap"})," ","and"," ",Object(b.jsx)("a",{href:"https://react-icons.github.io/react-icons/",target:"_blank",rel:"noreferrer",children:"React-Icons"}),". Quiz questions are downloaded from the"," ",Object(b.jsx)("a",{href:"https://opentdb.com/",target:"_blank",rel:"noreferrer",children:"Open Trivia Database"}),", and are generated by users. ",Object(b.jsx)("br",{}),"Created with"," ",Object(b.jsx)(l.a,{placement:"top",overlay:Object(b.jsx)(u.a,{children:"Why hello there."}),children:Object(b.jsx)("span",{children:"\u2764"})})," ",'by Mingrui "Myron" Ma on March 2021. Source code can be found on'," ",Object(b.jsx)("a",{href:"https://github.com/Mingrui-Ma/my-quiz-app",target:"_blank",rel:"noreferrer",children:"GitHub"}),"."]})]})})}var j=n(11),h=n(83),m=n(21);function O(e){var t,n,c=e.showSetting,a=e.handleSetting,o=e.sizeOfFont,r=e.handleFontChange,d=e.enableAlert,O=e.handleAlertChange,f=e.timeoutSettingVisibility,g=e.alertTimeout,y=e.handleAlertTimeoutChange,x=e.hasCountDown,p=(e.setHasCountDown,e.countDown),w=(e.setCountDown,e.handleCountDownChange),v=e.handleCountDownTimeChange,C=e.countDownSettingVisibility,S=(e.setCountDownSettingVisibility,e.iconScale),z=(e.width,e.disclaimerVisibility),D=(e.setDisclaimerVisibility,e.handleDisclaimerVisibilityChange),T=Object(i.useState)("medium-width-setting-field"),k=Object(s.a)(T,2),A=k[0],F=k[1],V=Object(i.useState)("medium-width-setting-label"),N=Object(s.a)(V,2),E=N[0],L=N[1],R=Object(i.useState)("none"),q=Object(s.a)(R,2),Q=q[0],B=q[1],H=Object(i.useRef)(),M=Object(i.useRef)(),_=Object(i.useRef)(),G=Object(i.useRef)(),U=Object(i.useRef)(),I=Object(i.useRef)();return Object(i.useEffect)((function(){"110%"===o&&(F("medium-width-setting-field"),L("medium-width-setting-label")),"80%"===o&&(F("small-width-setting-field"),L("small-width-setting-label")),"140%"===o&&(F("large-width-setting-field"),L("large-width-setting-label"))}),[o]),Object(b.jsx)(h.a,{show:c,variant:"dark",style:{fontSize:o},children:Object(b.jsxs)("div",{style:{marginLeft:"10px"},children:[Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Close Settings"}),children:Object(b.jsx)(m.a,{style:{position:"absolute",right:"10px",cursor:"pointer"},onClick:a,size:"".concat(30*S),color:"dimGray"})}),Object(b.jsx)("h4",{children:"Settings"}),Object(b.jsxs)("form",{id:"setting-form",children:[Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Set the font size."}),children:Object(b.jsx)("label",{className:E,id:"setting-label",htmlFor:"font-size",onClick:function(){return H.current.focus()},children:"Font Size"})}),Object(b.jsxs)("select",{className:A,id:"setting-select",name:"font-size",value:o,onChange:r,ref:H,children:[Object(b.jsx)("option",{value:"80%",children:"Small"}),Object(b.jsx)("option",{value:"110%",children:"Medium"}),Object(b.jsx)("option",{value:"140%",children:"Large"})]}),Object(b.jsx)("br",{}),Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Set whether to display a notification for if a question was answered correctly."}),children:Object(b.jsx)("label",{className:E,id:"setting-label",htmlFor:"notify",onClick:function(){return M.current.focus()},children:"Notification"})}),Object(b.jsxs)("select",{className:A,id:"setting-select",name:"notify",value:d,onChange:O,ref:M,children:[Object(b.jsx)("option",{value:!0,children:"On"}),Object(b.jsx)("option",{value:!1,children:"Off"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{id:"timeout-setting",style:{display:f},children:[Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Set the amount of time the notification is visible for (unit in seconds)."}),children:Object(b.jsx)("label",{className:E,id:"setting-label",htmlFor:"notify-timeout",onClick:function(){return U.current.focus()},children:"Notification Time"})}),Object(b.jsx)("input",(t={className:A,id:"setting-select",type:"number",name:"notify-timeout"},Object(j.a)(t,"id","notify-timeout"),Object(j.a)(t,"min","0"),Object(j.a)(t,"max","9999"),Object(j.a)(t,"value",g),Object(j.a)(t,"onChange",y),Object(j.a)(t,"ref",U),t)),Object(b.jsx)("br",{})]}),Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Set whether to have a limited time to answer each question."}),children:Object(b.jsx)("label",{className:E,id:"setting-label",htmlFor:"countdown",onClick:function(){return _.current.focus()},children:"Limited Time"})}),Object(b.jsxs)("select",{className:A,id:"setting-select",name:"countdown",value:x,onChange:w,ref:_,children:[Object(b.jsx)("option",{value:!0,children:"On"}),Object(b.jsx)("option",{value:!1,children:"Off"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{id:"countdown-setting",style:{display:C},children:[Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Set the amount of time allotted for answering each question (unit in seconds)."}),children:Object(b.jsx)("label",{className:E,id:"setting-label",htmlFor:"countdown-timeout",onClick:function(){return I.current.focus()},children:"Allotted Time"})}),Object(b.jsx)("input",(n={className:A,id:"setting-select",type:"number",name:"countdown-timeout"},Object(j.a)(n,"id","countdown-timeout"),Object(j.a)(n,"min","0"),Object(j.a)(n,"max","9999"),Object(j.a)(n,"value",p),Object(j.a)(n,"onChange",v),Object(j.a)(n,"ref",I),n)),Object(b.jsx)("br",{})]}),Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Set the visibility of the footer."}),children:Object(b.jsx)("label",{className:E,id:"setting-label",htmlFor:"disclaimer-visibility",onClick:function(){return G.current.focus()},children:"Footer Visibility"})}),Object(b.jsxs)("select",{className:A,id:"setting-select",name:"disclaimer-visibility",value:z,onChange:D,ref:G,children:[Object(b.jsx)("option",{value:"inline",children:"On"}),Object(b.jsx)("option",{value:"none",children:"Off"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{style:{verticalAlign:"middle"},children:[Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Click to reveal hotkeys."}),children:Object(b.jsx)("label",{style:{display:"inline-block",cursor:"pointer",color:"#0077cc",bottom:"50%",position:"relative"},className:E,id:"hotkeys",htmlFor:"hotkeys",onClick:function(e){"inline-block"===Q&&B("none"),"none"===Q&&B("inline-block")},children:"Hotkeys"})}),Object(b.jsxs)("ul",{style:{paddingLeft:0,listStylePosition:"outside",listStyleType:"none",display:Q},children:[Object(b.jsxs)("li",{className:"hotkey-item",children:[Object(b.jsx)("span",{className:"code",children:"space"})," and"," ",Object(b.jsx)("span",{className:"code",children:"enter"}),": begin quiz / submit question"]}),Object(b.jsxs)("li",{className:"hotkey-item",children:[Object(b.jsx)("span",{className:"code",children:"esc"})," and"," ",Object(b.jsx)("span",{className:"code",children:"home"}),": reset quiz criteria / return to starting screen"," "]}),Object(b.jsxs)("li",{className:"hotkey-item",children:[Object(b.jsx)("span",{className:"code",children:"I"}),": open / close settings"]}),Object(b.jsxs)("li",{className:"hotkey-item",children:[Object(b.jsx)("span",{className:"code",children:"number 1-4"}),": select 1st through 4th answer"]})]})]})]})]})})}var f=n(15),g=n(82),y=n(80);function x(e){e.quizURL;var t=e.setQuizURL,n=e.amount,c=e.setAmount,a=e.sizeOfFont,o=(e.setSizeOfFont,e.enableAlert),j=(e.setEnableAlert,e.alertTimeout),h=(e.setAlertTimeout,e.handleFontChange),m=e.handleAlertChange,x=e.handleAlertTimeoutChange,p=e.timeoutSettingVisibility,w=e.setTimeoutSettingVisibility,v=e.buttonSize,C=(e.setButtonSize,e.sizeOfFontLarge),S=(e.setSizeOfFontLarge,e.hasCountDown),z=e.setHasCountDown,D=e.countDown,T=e.setCountDown,k=e.handleCountDownChange,A=e.handleCountDownTimeChange,F=e.countDownSettingVisibility,V=e.setCountDownSettingVisibility,N=e.iconScale,E=e.width,L=(e.height,e.scoreHistory),R=e.setScoreHistory,q=e.disclaimerVisibility,Q=e.setDisclaimerVisibility,B=e.handleDisclaimerVisibilityChange,H=Object(i.useState)("any"),M=Object(s.a)(H,2),_=M[0],G=M[1],U=Object(i.useState)("any"),I=Object(s.a)(U,2),W=I[0],J=I[1],P=Object(i.useState)(!1),K=Object(s.a)(P,2),Y=K[0],X=K[1],Z=Object(i.useState)(Ne()),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ne=Object(i.useState)("medium-width-startScreen-field"),ie=Object(s.a)(ne,2),ce=ie[0],ae=ie[1],oe=Object(i.useState)("medium-width-startScreen-category"),se=Object(s.a)(oe,2),re=se[0],le=se[1],ue=Object(i.useState)(160),be=Object(s.a)(ue,2),de=be[0],je=be[1],he=Object(i.useState)(220),me=Object(s.a)(he,2),Oe=me[0],fe=me[1],ge=Object(i.useState)(3),ye=Object(s.a)(ge,2),xe=ye[0],pe=ye[1],we=Object(i.useState)(306),ve=Object(s.a)(we,2),Ce=(ve[0],ve[1]),Se=Object(i.useRef)(),ze=Object(i.useRef)(),De=Object(i.useRef)(),Te=Object(i.useRef)();Object(i.useEffect)((function(){document.title="Welcome to My-Quiz-App",ze.current.focus()}),[]),Object(i.useEffect)((function(){function e(e){console.log("key code: ".concat(e.code)),"Enter"!==e.code&&"Space"!==e.code&&"NumpadEnter"!==e.code||Ae(),"Escape"!==e.code&&"Home"!==e.code||Fe(),"KeyI"===e.code&&Ve()}return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}})),Object(i.useEffect)((function(){"110%"===a&&(ae("medium-width-startScreen-field"),le("medium-width-startScreen-category"),je(160),fe(220),pe(3)),"80%"===a&&(ae("small-width-startScreen-field"),le("small-width-startScreen-category"),je(130),fe(190),pe(2)),"140%"===a&&(ae("large-width-startScreen-field"),le("large-width-startScreen-category"),je(210),fe(260),pe(4)),Ce(Se.current.offsetWidth)}),[a]),Object(i.useEffect)((function(){"true"===o&&w("inline"),"false"===o&&w("none")}),[o]),Object(i.useEffect)((function(){"true"==S&&(V("inline"),console.log("countdown now visible.")),"false"==S&&(V("none"),console.log("countdown now invisible."))}),[S]),Object(i.useEffect)((function(){te(Ne())}),[L]);var ke="https://opentdb.com/api.php?amount=";function Ae(){ke+=n,"any"!==_&&(ke+="&category=",ke+=_),"any"!==W&&(ke+="&difficulty=",ke+=W),t(ke)}function Fe(){c(10),G("any"),J("any")}function Ve(){X(!Y)}function Ne(){var e,t=[],n=Object(r.a)(L.entries());try{for(n.s();!(e=n.n()).done;){var i=Object(s.a)(e.value,2),c=i[0],a=i[1];parseFloat(a)>=50?t.push(Object(b.jsx)("li",{className:"thumbs thumb-up",children:a},c)):t.push(Object(b.jsx)("li",{className:"thumbs thumb-down",children:a},c))}}catch(o){n.e(o)}finally{n.f()}return t}return Object(b.jsxs)("div",{children:[Object(b.jsxs)(g.a,{bg:"dark",variant:"dark",children:[Object(b.jsxs)(g.a.Brand,{href:"#home",ref:Se,children:[Object(b.jsx)("img",{alt:"",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png",style:{verticalAlign:"middle"},width:"".concat(45*N),height:"".concat(31*N)})," ",Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:'"My" stands for "Myron". (Thanks Michael Widenius for the idea)'}),children:Object(b.jsx)("span",{style:{fontFamily:"Georgia",fontSize:a},children:"Welcome to My-Quiz-App!"})})]}),Object(b.jsx)("div",{style:{position:"absolute",right:"8px"},children:Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Settings"}),children:Object(b.jsx)(f.a,{className:"react-icons",onClick:Ve,size:"".concat(40*N),color:"white"})})})]}),Object(b.jsx)(O,{showSetting:Y,handleSetting:Ve,sizeOfFont:a,handleFontChange:h,enableAlert:o,handleAlertChange:m,timeoutSettingVisibility:p,alertTimeout:j,handleAlertTimeoutChange:x,hasCountDown:S,setHasCountDown:z,countDown:D,setCountDown:T,handleCountDownChange:k,handleCountDownTimeChange:A,countDownSettingVisibility:F,iconScale:N,width:E,disclaimerVisibility:q,setDisclaimerVisibility:Q,handleDisclaimerVisibilityChange:B}),Object(b.jsxs)("form",{style:{textAlign:"center",marginTop:"10px",fontSize:a,position:"relative"},children:[Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Quiz questions will be randomly selected from the Open Trivia DB, with the criteria declared below."}),children:Object(b.jsx)("h1",{style:{marginBottom:"10px",fontSize:C},children:"Customize Quiz"})}),Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Number of questions must be between 1 and 50."}),children:Object(b.jsx)("label",{htmlFor:"trivia_amount",onClick:function(){return ze.current.focus()},children:"Number of Questions:"})}),Object(b.jsx)("input",{className:ce,type:"number",name:"trivia_amount",id:"trivia_amount",min:"1",max:"50",value:n,onChange:function(e){c(e.target.value)},ref:ze}),Object(b.jsx)("br",{}),Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsxs)(u.a,{children:["Questions will be taken from all categories, or the selected category."," "]}),children:Object(b.jsxs)("label",{htmlFor:"trivia_category",onClick:function(){return De.current.focus()},children:["Select Category:"," "]})}),Object(b.jsxs)("select",{className:re,name:"trivia_category",value:_,onChange:function(e){G(e.target.value)},ref:De,children:[Object(b.jsx)("option",{value:"any",children:"Any Category"}),Object(b.jsx)("option",{value:"9",children:"General Knowledge"}),Object(b.jsx)("option",{value:"10",children:"Entertainment: Books"}),Object(b.jsx)("option",{value:"11",children:"Entertainment: Film"}),Object(b.jsx)("option",{value:"12",children:"Entertainment: Music"}),Object(b.jsx)("option",{value:"13",children:"Entertainment: Musicals and Theatres"}),Object(b.jsx)("option",{value:"14",children:"Entertainment: Television"}),Object(b.jsx)("option",{value:"15",children:"Entertainment: Video Games"}),Object(b.jsx)("option",{value:"16",children:"Entertainment: Board Games"}),Object(b.jsx)("option",{value:"17",children:"Science and Nature"}),Object(b.jsx)("option",{value:"18",children:"Science: Computers"}),Object(b.jsx)("option",{value:"19",children:"Science: Mathematics"}),Object(b.jsx)("option",{value:"20",children:"Mythology"}),Object(b.jsx)("option",{value:"21",children:"Sports"}),Object(b.jsx)("option",{value:"22",children:"Geography"}),Object(b.jsx)("option",{value:"23",children:"History"}),Object(b.jsx)("option",{value:"24",children:"Politics"}),Object(b.jsx)("option",{value:"25",children:"Art"}),Object(b.jsx)("option",{value:"26",children:"Celebrities"}),Object(b.jsx)("option",{value:"27",children:"Animals"}),Object(b.jsx)("option",{value:"28",children:"Vehicles"}),Object(b.jsx)("option",{value:"29",children:"Entertainment: Comics"}),Object(b.jsx)("option",{value:"30",children:"Science: Gadgets"}),Object(b.jsx)("option",{value:"31",children:"Entertainment: Japanese Anime and Manga"}),Object(b.jsx)("option",{value:"32",children:"Entertainment: Cartoon and Animations"})]}),Object(b.jsx)("br",{}),Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsxs)(u.a,{children:["Questions will be taken from all difficulty levels, or the selected difficulty level."," "]}),children:Object(b.jsxs)("label",{htmlFor:"trivia_difficulty",onClick:function(){return Te.current.focus()},children:["Select Difficulty:"," "]})}),Object(b.jsxs)("select",{className:ce,name:"trivia_difficulty",value:W,onChange:function(e){J(e.target.value)},ref:Te,children:[Object(b.jsx)("option",{value:"any",children:"Any Difficulty"}),Object(b.jsx)("option",{value:"easy",children:"Easy"}),Object(b.jsx)("option",{value:"medium",children:"Medium"}),Object(b.jsx)("option",{value:"hard",children:"Hard"})]}),Object(b.jsx)("br",{}),Object(b.jsx)(y.a,{className:"Button",variant:"primary",onClick:Ae,style:{margin:"10px"},size:v,children:"Begin Quiz"}),Object(b.jsx)(y.a,{className:"Button",variant:"danger",onClick:Fe,size:v,children:"Reset"})]}),Object(b.jsx)("div",{id:"quiz-history",style:{fontSize:a,border:"".concat(xe,"px solid deepskyblue"),borderRadius:"5%",position:"relative",left:"".concat(E-de-xe,"px"),bottom:"".concat(Oe,"px"),width:"".concat(de,"px")},children:Object(b.jsxs)("div",{style:{margin:"10px",textAlign:"center"},children:[Object(b.jsxs)("p",{children:["Past Quiz Scores: ",Object(b.jsx)("br",{})]}),Object(b.jsx)("ul",{children:ee}),Object(b.jsx)("div",{children:Object(b.jsx)(y.a,{className:"Button",variant:"primary",onClick:function(){R([])},style:{margin:"10px"},size:v,children:"clear"})})]})}),Object(b.jsx)(d,{sizeOfFont:a,disclaimerVisibility:q})]})}var p=n(84);var w=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),a=n[0],o=n[1],r=Object(i.useState)(!1),d=Object(s.a)(r,2),j=d[0],m=d[1],O=Object(i.useState)({}),g=Object(s.a)(O,2),x=g[0],w=g[1],v=e.category,C=e.correct_answer,S=e.difficulty,z=e.incorrect_answers,D=e.question,T=e.type,k=e.corrects,A=e.setCorrects,F=e.currentQuestion,V=e.setCurrentQuestion,N=e.alertType,E=e.setAlertType,L=e.alertText,R=e.setAlertText,q=e.amount,Q=e.randomOrder,B=e.alertTimeout,H=e.sizeOfFont,M=e.enableAlert,_=e.buttonSize,G=(e.setButtonSize,e.iconScale),U=e.progressBarHeight,I=e.hasCountDown,W=e.countDown,J=e.countDownSettingVisibility,P=(e.setCountDownSettingVisibility,e.sizeOfFontLarge),K=(e.setSizeOfFontLarge,e.width,e.handleHome),Y=e.handleSetting,X=Object(i.useState)(1e3*W),Z=Object(s.a)(X,2),$=Z[0],ee=Z[1],te=Object(i.useState)(!1),ne=Object(s.a)(te,2),ie=ne[0],ce=(ne[1],Object(i.useRef)()),ae=Object(i.useRef)(),oe=Object(i.useRef)(),se=Object(i.useRef)();if(Object(i.useEffect)((function(){ee(1e3*W)}),[W,F]),Object(i.useEffect)((function(){var e;return"false"===I||ie||!1===(e=$>0&&setInterval((function(){return ee($-100)}),100))&&(M&&de(),M||je()),function(){return clearInterval(e)}}),[$,I]),Object(i.useEffect)((function(){function e(e){"Digit1"!==e.code&&"Numpad1"!==e.code||(ce.current.focus(),o(re[0]),console.log("set chosen answer: ",re[0])),"Digit2"!==e.code&&"Numpad2"!==e.code||(ae.current.focus(),o(re[1]),console.log("set chosen answer: ",re[1])),"Digit3"!==e.code&&"Numpad3"!==e.code||re.length>2&&(oe.current.focus(),o(re[2])),"Digit4"!==e.code&&"Numpad4"!==e.code||re.length>2&&(se.current.focus(),o(re[3])),"Space"!==e.code&&"Enter"!==e.code&&"NumpadEnter"!==e.code||((M||"true"===M)&&de(),M&&"false"!==M||je()),"Escape"!==e.code&&"Home"!==e.code||K(),"KeyI"===e.code&&Y()}return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}})),e===[])return Object(b.jsx)("h4",{children:"Loading..."});var re=[],le=D.replace(/&quot;|&ldquo;|&rdquo;/g,'"');le=(le=(le=(le=(le=(le=le.replace(/&#039;/g,"'")).replace(/&amp;/g,"&")).replace(/&minus;/g,"-")).replace(/&plus;/g,"+")).replace(/&lt;/g,"<")).replace(/&gr;/g,">");var ue=C.replace(/&quot;|&ldquo;|&rdquo;/g,'"');ue=(ue=ue.replace(/&#039;/g,"'")).replace(/&amp;/g,"&");var be=z.map((function(e){return e.replace(/&#039;/g,"'")}));function de(){clearTimeout(x),a===ue?(E("success"),A(k+1),R("Correct!")):(R("Sorry wrong answer. The correct answer was ".concat(ue,".")),E("warning")),m(!0),V(F+1),o(""),w(setTimeout((function(){m(!1)}),1e3*B))}function je(){F>q||(a===ue&&A(k+1),V(F+1),o(""))}function he(e){o(e.target.value)}return be=(be=be.map((function(e){return e.replace(/&quot;|&ldquo;|&rdquo;/g,'"')}))).map((function(e){return e.replace(/&amp;/g,"&")})),Object(b.jsxs)("div",{children:[Object(b.jsx)(h.a,{show:j,variant:N,style:{fontSize:P},children:L}),Object(b.jsxs)("div",{id:"Question-and-answers",style:{textAlign:"center"},children:[Object(b.jsxs)("h3",{style:{fontSize:P},children:[Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsxs)(u.a,{style:{fontSize:H},children:["Question ",F," of ",q," ",Object(b.jsx)("br",{})," ","Category: ",v," ",Object(b.jsx)("br",{})," Difficulty:"," ",S]}),children:Object(b.jsx)(f.b,{style:{padding:"6px"},size:"".concat(35*G),color:"deepskyblue"})})," ",le]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{style:{display:J},children:Object(b.jsx)(p.a,{style:{fontSize:H,height:U,margin:"5px 500px 10px 500px"},now:$/(1e3*W)*100,label:"".concat($/1e3," sec")})}),"boolean"===T?(re=["True","False"],Object(b.jsxs)("div",{id:"answer-buttons",children:[Object(b.jsx)(y.a,{className:"Button",variant:"outline-primary",size:_,value:"True",onClick:he,ref:ce,children:"True"})," ",Object(b.jsx)(y.a,{className:"Button",variant:"outline-primary",size:_,value:"False",onClick:he,ref:ae,children:"False"})," "]})):((re=[])[Q.indexOf(4)]=ue,re[Q.indexOf(3)]=be[0],re[Q.indexOf(2)]=be[1],re[Q.indexOf(1)]=be[2],Object(b.jsxs)("div",{style:{margin:"20px"},children:[Object(b.jsxs)(y.a,{className:"Button",variant:"outline-primary button-answer",size:_,onClick:he,value:re[0],ref:ce,children:["A: ",re[0]]})," ",Object(b.jsxs)(y.a,{className:"Button",variant:"outline-primary",size:_,onClick:he,value:re[1],ref:ae,children:["B: ",re[1]]})," ",Object(b.jsxs)(y.a,{className:"Button",variant:"outline-primary",size:_,onClick:he,value:re[2],ref:oe,children:["C: ",re[2]]})," ",Object(b.jsxs)(y.a,{className:"Button",variant:"outline-primary",size:_,onClick:he,value:re[3],ref:se,children:["D: ",re[3]]})," "]})),Object(b.jsx)("br",{}),function(){var e=de;return"true"==M&&(e=de),"false"==M&&(e=je),""==a?Object(b.jsx)(c.a.Fragment,{}):Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(y.a,{className:"Button",variant:"primary",value:"Submit",size:_,onClick:e,children:"Submit"})," "]})}()]})]})},v=n(46),C=n.n(v);function S(e){var t=e.quizURL,n=e.setQuizURL,c=e.amount,a=(e.setAmount,e.corrects),o=e.setCorrects,r=e.currentQuestion,j=e.setCurrentQuestion,h=e.alertType,y=e.setAlertType,x=e.alertText,v=e.setAlertText,S=e.sizeOfFont,z=(e.setSizeOfFont,e.enableAlert),D=(e.setEnableAlert,e.alertTimeout),T=(e.setAlertTimeout,e.handleFontChange),k=e.handleAlertChange,A=e.handleAlertTimeoutChange,F=e.timeoutSettingVisibility,V=e.setTimeoutSettingVisibility,N=e.buttonSize,E=e.setButtonSize,L=e.sizeOfFontLarge,R=e.setSizeOfFontLarge,q=e.hasCountDown,Q=e.setHasCountDown,B=e.countDown,H=e.setCountDown,M=e.handleCountDownChange,_=e.handleCountDownTimeChange,G=e.countDownSettingVisibility,U=e.setCountDownSettingVisibility,I=e.iconScale,W=e.width,J=e.disclaimerVisibility,P=e.setDisclaimerVisibility,K=e.handleDisclaimerVisibilityChange,Y=Object(i.useState)([{category:"Entertainment: Books",correct_answer:"Ian Fleming",difficulty:"easy",incorrect_answers:["Joseph Conrad","John Buchan","Graham Greene"],question:"Which famous spy novelist wrote the childrens&#039; story &quot;Chitty-Chitty-Bang-Bang&quot;?",type:"multiple"}]),X=Object(s.a)(Y,2),Z=X[0],$=X[1],ee=Object(i.useState)(!1),te=Object(s.a)(ee,2),ne=te[0],ie=te[1],ce=Object(i.useState)([]),ae=Object(s.a)(ce,2),oe=ae[0],se=ae[1],re=Object(i.useState)(20),le=Object(s.a)(re,2),ue=le[0],be=le[1];function de(){n(""),j(1),o(0)}function je(){ie(!ne)}return Object(i.useEffect)((function(){document.title="Question ".concat(r," - My-Quiz-App")}),[t,r]),Object(i.useEffect)((function(){C.a.get(t).then((function(e){var t=e.data.results;t!==Z&&$(t)})).catch((function(e){return console.log("error: ",e)}))}),[]),Object(i.useEffect)((function(){"true"==z&&V("inline"),"false"==z&&V("none")}),[z]),Object(i.useEffect)((function(){"true"==q&&U("inline"),"false"==q&&U("none")}),[q]),Object(i.useEffect)((function(){for(var e,t=[],n=[1,2,3,4],i=0,c=4;c>0;c--)e=Math.floor(Math.random()*c),t[i++]=n[e],n.splice(e,1);se(t)}),[r,t]),Object(i.useEffect)((function(){var e=parseFloat(S);be(e/100*20)}),[S]),Object(b.jsxs)("div",{children:[Object(b.jsxs)(g.a,{bg:"dark",variant:"dark",children:[Object(b.jsxs)(g.a.Brand,{href:"#home",children:[Object(b.jsx)("img",{alt:"",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png",style:{verticalAlign:"middle"},width:"".concat(45*I),height:"".concat(31*I),className:"d-inline-block align-top"})," ",Object(b.jsx)("span",{style:{fontFamily:"Georgia",fontSize:S},onClick:de,children:"My-Quiz-App"})]}),Object(b.jsxs)("div",{style:{position:"absolute",right:"8px"},children:[Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Settings"}),children:Object(b.jsx)(f.a,{className:"react-icons",onClick:je,size:"".concat(40*I),color:"white"})}),Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Abandon the quiz and return to the starting screen."}),children:Object(b.jsx)(m.b,{className:"react-icons",onClick:de,size:"".concat(40*I),color:"white"})})]})]}),Object(b.jsx)(O,{showSetting:ne,handleSetting:je,sizeOfFont:S,handleFontChange:T,enableAlert:z,handleAlertChange:k,timeoutSettingVisibility:F,alertTimeout:D,handleAlertTimeoutChange:A,hasCountDown:q,setHasCountDown:Q,countDown:B,setCountDown:H,handleCountDownChange:M,handleCountDownTimeChange:_,countDownSettingVisibility:G,setCountDownSettingVisibility:U,iconScale:I,width:W,disclaimerVisibility:J,setDisclaimerVisibility:P,handleDisclaimerVisibilityChange:K}),Object(b.jsx)(p.a,{style:{fontSize:S,height:ue},now:r/c*100,label:"Question ".concat(r," of ").concat(c)}),Object(b.jsxs)("h6",{style:{fontSize:S,margin:"10px"},children:["Category: ",Z[r-1].category," | Difficulty:"," ",Z[r-1].difficulty]}),Object(b.jsx)(w,{category:Z[r-1].category,correct_answer:Z[r-1].correct_answer,difficulty:Z[r-1].difficulty,incorrect_answers:Z[r-1].incorrect_answers,question:Z[r-1].question,type:Z[r-1].type,corrects:a,setCorrects:o,currentQuestion:r,setCurrentQuestion:j,alertType:h,setAlertType:y,alertText:x,setAlertText:v,amount:c,randomOrder:oe,alertTimeout:D,sizeOfFont:S,enableAlert:z,buttonSize:N,setButtonSize:E,iconScale:I,hasCountDown:q,countDown:B,countDownSettingVisibility:G,setCountDownSettingVisibility:U,sizeOfFontLarge:L,setSizeOfFontLarge:R,width:W,progressBarHeight:ue,handleHome:de,handleSetting:je}),Object(b.jsx)(d,{sizeOfFont:S,disclaimerVisibility:J})]})}var z=function(e){var t=e.corrects,n=e.amount,c=e.setQuizURL,a=e.setCorrects,o=e.setCurrentQuestion,r=e.alertText,d=e.alertType,j=e.alertTimeout,x=(e.quizURL,e.currentQuestion,e.sizeOfFont),p=e.sizeOfFontLarge,w=e.buttonSize,v=e.iconScale,C=e.scoreHistory,S=e.setScoreHistory,z=e.handleFontChange,D=e.enableAlert,T=e.handleAlertChange,k=e.timeoutSettingVisibility,A=e.handleAlertTimeoutChange,F=e.hasCountDown,V=e.setHasCountDown,N=e.countDown,E=e.setCountDown,L=e.handleCountDownChange,R=e.handleCountDownTimeChange,q=e.countDownSettingVisibility,Q=e.setCountDownSettingVisibility,B=e.width,H=e.disclaimerVisibility,M=e.setDisclaimerVisibility,_=e.handleDisclaimerVisibilityChange,G=Object(i.useState)(!1),U=Object(s.a)(G,2),I=U[0],W=U[1],J=Object(i.useState)(!0),P=Object(s.a)(J,2),K=P[0],Y=P[1];function X(e,t){for(var n=e/t*100,i=Number.parseFloat(n).toPrecision(4),c="0"===i[i.length-1];c;)c="0"===(i=i.slice(0,-1))[i.length-1];return"."===i[i.length-1]&&(i=i.slice(0,-1)),i+"%"}function Z(){c(""),a(0),o(1)}function $(){W(!I)}return Object(i.useEffect)((function(){document.title="End of Quiz - Your Score is ".concat(X(t,n)),setTimeout((function(){return Y(!1)}),1e3*j);var e=C;e.push(X(t,n)),S(e)}),[]),Object(i.useEffect)((function(){function e(e){"Escape"!==e.code&&"Home"!==e.code||Z(),"KeyI"===e.code&&$()}return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}})),Object(b.jsxs)("div",{children:[Object(b.jsxs)(g.a,{bg:"dark",variant:"dark",children:[Object(b.jsxs)(g.a.Brand,{href:"#home",children:[Object(b.jsx)("img",{alt:"",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png",style:{verticalAlign:"middle"},width:"".concat(45*v),height:"".concat(31*v),className:"d-inline-block align-top"})," ",Object(b.jsx)("span",{onClick:Z,style:{fontFamily:"Georgia",fontSize:x},children:"My-Quiz-App"})]}),Object(b.jsxs)("div",{id:"navbar-button-group",style:{cursor:"pointer",position:"fixed",right:"10px"},children:[Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Settings"}),children:Object(b.jsx)(f.a,{style:{padding:"6px",paddingRight:"10px"},onClick:$,size:"".concat(40*v),color:"white"})}),Object(b.jsx)(l.a,{placement:"bottom",overlay:Object(b.jsx)(u.a,{children:"Return to the starting screen."}),children:Object(b.jsx)(m.b,{style:{padding:"6px"},onClick:Z,size:"".concat(40*v),color:"white"})})]})]}),Object(b.jsx)(O,{showSetting:I,handleSetting:$,sizeOfFont:x,handleFontChange:z,enableAlert:D,handleAlertChange:T,timeoutSettingVisibility:k,alertTimeout:j,handleAlertTimeoutChange:A,hasCountDown:F,setHasCountDown:V,countDown:N,setCountDown:E,handleCountDownChange:L,handleCountDownTimeChange:R,countDownSettingVisibility:q,setCountDownSettingVisibility:Q,iconScale:v,width:B,disclaimerVisibility:H,setDisclaimerVisibility:M,handleDisclaimerVisibilityChange:_}),Object(b.jsx)(h.a,{show:K,variant:d,style:{fontSize:p},children:r}),Object(b.jsxs)("div",{id:"end-screen-info",style:{textAlign:"center",marginTop:"10px",fontSize:x},children:[Object(b.jsx)("h2",{children:"You've reached the end of the quiz."}),Object(b.jsxs)("h3",{children:["Your score is:"," ",Object(b.jsx)("em",{style:{color:"blue"},children:X(t,n)})," ","(",t," right out of ",n,")."]}),Object(b.jsx)(y.a,{variant:"primary",onClick:Z,size:w,children:"Home"})]})]})};var D=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(10),o=Object(s.a)(a,2),r=o[0],l=o[1],u=Object(i.useState)(0),d=Object(s.a)(u,2),j=d[0],h=d[1],m=Object(i.useState)(1),O=Object(s.a)(m,2),f=O[0],g=O[1],y=Object(i.useState)(!0),p=Object(s.a)(y,2),w=p[0],v=p[1],C=Object(i.useState)("success"),D=Object(s.a)(C,2),T=D[0],k=D[1],A=Object(i.useState)("Correct!"),F=Object(s.a)(A,2),V=F[0],N=F[1],E=Object(i.useState)("110%"),L=Object(s.a)(E,2),R=L[0],q=L[1],Q=Object(i.useState)(3),B=Object(s.a)(Q,2),H=B[0],M=B[1],_=Object(i.useState)("inline"),G=Object(s.a)(_,2),U=G[0],I=G[1],W=Object(i.useState)(window.innerWidth),J=Object(s.a)(W,2),P=J[0],K=J[1],Y=Object(i.useState)(window.innerHeight),X=Object(s.a)(Y,2),Z=X[0],$=X[1],ee=Object(i.useState)(""),te=Object(s.a)(ee,2),ne=te[0],ie=te[1],ce=Object(i.useState)(!0),ae=Object(s.a)(ce,2),oe=ae[0],se=ae[1],re=Object(i.useState)(10),le=Object(s.a)(re,2),ue=le[0],be=le[1],de=Object(i.useState)("inline"),je=Object(s.a)(de,2),he=je[0],me=je[1],Oe=Object(i.useState)("1.1"),fe=Object(s.a)(Oe,2),ge=fe[0],ye=fe[1],xe=Object(i.useState)(R),pe=Object(s.a)(xe,2),we=pe[0],ve=pe[1],Ce=Object(i.useState)([]),Se=Object(s.a)(Ce,2),ze=Se[0],De=Se[1],Te=Object(i.useState)("inline"),ke=Object(s.a)(Te,2),Ae=ke[0],Fe=ke[1];function Ve(e){q(e.target.value)}function Ne(e){v(e.target.value)}function Ee(e){M(e.target.value)}function Le(e){se(e.target.value),console.log("has count down is now, ",e.target.value)}function Re(e){be(e.target.value)}function qe(e){Fe(e.target.value)}return Object(i.useEffect)((function(){var e=function(){K(window.innerWidth),$(window.innerHeight)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),Object(i.useEffect)((function(){var e=parseFloat(R);ve(1.5*e+"%"),110===e&&(ie(""),ye(1.1)),e<110&&(ie("sm"),ye(.9)),e>110&&(ie("lg"),ye(1.3))}),[R]),""===n?Object(b.jsx)(x,{quizURL:n,setQuizURL:c,amount:r,setAmount:l,sizeOfFont:R,setSizeOfFont:q,enableAlert:w,setEnableAlert:v,alertTimeout:H,setAlertTimeout:M,handleFontChange:Ve,handleAlertChange:Ne,handleAlertTimeoutChange:Ee,timeoutSettingVisibility:U,setTimeoutSettingVisibility:I,hasCountDown:oe,setHasCountDown:se,countDown:ue,setCountDown:be,handleCountDownChange:Le,handleCountDownTimeChange:Re,countDownSettingVisibility:he,setCountDownSettingVisibility:me,buttonSize:ne,setButtonSize:ie,sizeOfFontLarge:we,setSizeOfFontLarge:ve,iconScale:ge,width:P,height:Z,scoreHistory:ze,setScoreHistory:De,disclaimerVisibility:Ae,setDisclaimerVisibility:Fe,handleDisclaimerVisibilityChange:qe}):f<=r?Object(b.jsx)(S,{quizURL:n,setQuizURL:c,amount:r,setAmount:l,corrects:j,setCorrects:h,currentQuestion:f,setCurrentQuestion:g,alertType:T,setAlertType:k,alertText:V,setAlertText:N,sizeOfFont:R,setSizeOfFont:q,enableAlert:w,setEnableAlert:v,alertTimeout:H,setAlertTimeout:M,handleFontChange:Ve,handleAlertChange:Ne,handleAlertTimeoutChange:Ee,timeoutSettingVisibility:U,setTimeoutSettingVisibility:I,hasCountDown:oe,setHasCountDown:se,countDown:ue,setCountDown:be,handleCountDownChange:Le,handleCountDownTimeChange:Re,countDownSettingVisibility:he,setCountDownSettingVisibility:me,buttonSize:ne,setButtonSize:ie,sizeOfFontLarge:we,setSizeOfFontLarge:ve,iconScale:ge,width:P,disclaimerVisibility:Ae,setDisclaimerVisibility:Fe,handleDisclaimerVisibilityChange:qe}):Object(b.jsx)(z,{corrects:j,amount:r,setQuizURL:c,setAmount:l,setCorrects:h,setCurrentQuestion:g,alertType:T,alertText:V,alertTimeout:H,quizURL:n,currentQuestion:f,sizeOfFont:R,sizeOfFontLarge:we,buttonSize:ne,iconScale:ge,width:P,scoreHistory:ze,setScoreHistory:De,handleFontChange:Ve,enableAlert:w,handleAlertChange:Ne,timeoutSettingVisibility:U,handleAlertTimeoutChange:Ee,hasCountDown:oe,setHasCountDown:se,countDown:ue,setCountDown:be,handleCountDownChange:Le,handleCountDownTimeChange:Re,countDownSettingVisibility:he,setCountDownSettingVisibility:me,disclaimerVisibility:Ae,setDisclaimerVisibility:Fe,handleDisclaimerVisibilityChange:qe})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),a(e),o(e)}))};n(73);o.a.render(Object(b.jsx)(D,{}),document.getElementById("root")),T()}},[[74,1,2]]]);
//# sourceMappingURL=main.0874170d.chunk.js.map