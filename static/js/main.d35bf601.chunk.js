(this["webpackJsonptesttask-abz"]=this["webpackJsonptesttask-abz"]||[]).push([[0],{102:function(e,t,a){e.exports={footer:"Footer_footer__3E2hA basicStyles_paragraph__1nZUq"}},103:function(e,t,a){e.exports=a(138)},137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(58),o=a.n(i),s=a(79),l=a(6),c=a.n(l),u=a(16),p=a(34),m=a(35),d=a(47),h=a(36),_=a(48),f=(a(108),a(25)),g=a(52),b=a.n(g),v="https://frontend-test-assignment-api.abz.agency/api/v1/",E=function(){var e=Object(u.a)(c.a.mark((function e(){var t,a,n=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.prev=1,e.next=4,b.a.get("".concat(v,"users?page=").concat(t,"&count=6"));case 4:return a=e.sent,e.abrupt("return",a.data.users);case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(v,"positions"));case 3:return t=e.sent,e.abrupt("return",t.data.positions);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(v,"token"));case 3:if(!(a=e.sent).data.success){e.next=10;break}return n=a.data.token,e.next=8,b.a.post("".concat(v,"users"),t,{headers:{Token:n}});case 8:return r=e.sent,e.abrupt("return",r);case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),N=a(28),w=a.n(N),F=a(60),C=a.n(F),x=a(93),S=a.n(x),I=a(77),U=a.n(I),j=["About me","Relationships","Users","Sign Up","Terms and Conditions","How it works","Partnership","Help","Leave testimonial","Contact us","Articles","Our news","Testimonials","Licenses","Privacy Policy"],O=function(){var e=j.map((function(e,t){return r.a.createElement(f.Link,{to:"CTA",key:t,className:U.a.navItem},e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:U.a.logoContainer},r.a.createElement("img",{src:C.a,alt:"TestTask"})),r.a.createElement("nav",null,e))},R=a(94),q=a.n(R),T=[{title:"About me",link:"about"},{title:"Relationships",link:""},{title:"Requirements",link:""},{title:"Users",link:"users"},{title:"Sign Up",link:"CTA"}],A=function(){var e=T.map((function(e,t){return r.a.createElement(f.Link,{to:e.link||"CTA",spy:!0,smooth:!0,duration:250,key:t,className:q.a.navItem,href:"#"},e.title)}));return r.a.createElement("nav",null,e)},H=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isMenuOpen:!1},a.openMenu=function(){a.setState({isMenuOpen:!0}),document.body.style.overflow="hidden"},a.closeMenu=function(){a.setState({isMenuOpen:!1}),document.body.style.overflow="unset"},a}return Object(_.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.isMenuOpen,t=document.documentElement.clientWidth;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:w.a.header},r.a.createElement("div",{className:w.a.headerContainer},r.a.createElement("img",{src:C.a,alt:"TestTask"}),t<1024?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:w.a.burgerMenu,onClick:this.openMenu},r.a.createElement("img",{src:S.a,alt:""}),"menu"),r.a.createElement("div",{className:e?w.a.backdrop:w.a.backdropHidden,onClick:this.closeMenu}),r.a.createElement("div",{className:e?w.a.menuWrap:w.a.menuHidden},r.a.createElement(O,null))):r.a.createElement(A,null))))}}]),t}(n.Component),M=a(53),W=a.n(M),X=a(95),B=a.n(X),P=function(e){var t=e.type,a=e.label,n=e.onClick,i=e.disable;return r.a.createElement("button",{className:B.a.button,type:t,onClick:n,disabled:i},a)},D=function(){var e=document.documentElement.clientWidth;return r.a.createElement("section",{className:W.a.heading},r.a.createElement("div",{className:W.a.headingContainer},r.a.createElement("h1",{className:W.a.headingTitle},"Test assignment for Frontend Developer position"),r.a.createElement("p",{className:W.a.paragraph},"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository."," ",e>=768&&"Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens"),r.a.createElement(P,{label:"Sing up now"})))},L=a(18),Z=a.n(L),G=a(96),z=a.n(G),J=a(97),V=a.n(J),Y=function(e){var t=e.type,a=e.label,n=e.onClick,i=e.disable;return r.a.createElement("button",{className:V.a.button,type:t,onClick:n,disabled:i},a)},K=function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:Z.a.title},"Let's get acquainted"),r.a.createElement("div",{className:Z.a.imageWithDescription},r.a.createElement("div",{className:Z.a.imageContainer},r.a.createElement("img",{className:Z.a.decorationImage,src:z.a,alt:"Man with laptop"})),r.a.createElement("div",{className:Z.a.sideContainer},r.a.createElement("h3",{className:Z.a.subtitle},"I am cool frontend developer"),r.a.createElement("p",{className:Z.a.paragraph},"We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction."),r.a.createElement("p",{className:Z.a.paragraph},"If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P\u200bSD mockup\u200b into HTML5/CSS3."),r.a.createElement(Y,{label:"Sing up now"})))))},Q=a(32),$=a.n(Q),ee=a(98),te=a.n(ee),ae=function(e){var t=e.photo,a=e.name,n=e.position,i=e.email,o=e.phone;return r.a.createElement("li",{className:$.a.card},r.a.createElement("img",{onError:function(e){e.target.src=te.a},className:$.a.photo,src:t,alt:a}),r.a.createElement("h3",{className:$.a.name},a),r.a.createElement("p",{className:$.a.paragraph},n),r.a.createElement("p",{className:$.a.paragraph},i),r.a.createElement("p",{className:$.a.paragraph},o))},ne=a(54),re=a.n(ne),ie=function(e){var t=e.users,a=e.loadMoreUsers;return r.a.createElement("section",{className:re.a.users},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:re.a.title},"Our cheerful users"),r.a.createElement("p",{className:re.a.paragraph},"Attention! Sorting users by registration date"),r.a.createElement("ul",{className:re.a.userslist},t&&t.map((function(e){return r.a.createElement(ae,Object.assign({key:e.id},e))}))),r.a.createElement(P,{label:"Show more",onClick:a})))},oe=a(29),se=a(2),le=a.n(se),ce=a(20),ue=a.n(ce),pe=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={file:"",fileUrl:""},a.openFile=function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){a.setState({fileUrl:t.result})}},a.onImgLoad=function(e){var t=e.target,n=a.state.file;a.props.form.setFieldValue("photo",{file:n,dimensions:{height:t.naturalHeight,width:t.naturalWidth}}),a.setState({fileUrl:""})},a.handleChange=function(e){e.preventDefault();var t=a.fileInput.current.files[0];t?(a.props.form.setFieldValue("photo",{file:t}),a.setState({file:t}),a.openFile(t)):(a.props.form.setFieldValue("photo",null),a.setState({file:null}))},a.handleBlur=function(){a.props.onBlur("photo",!0)},a.fileInput=r.a.createRef(),a}return Object(_.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.touched;a||e.touched===a||this.setState({file:null,theInputKey:Date.now()})}},{key:"render",value:function(){var e=this.state,t=e.file,a=e.theInputKey,n=this.props,i=n.touched,o=n.error;return console.log(this.fileInput),r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:ue.a.previewImg,onLoad:this.onImgLoad,src:this.state.fileUrl,alt:""}),r.a.createElement("p",null,"Photo"),r.a.createElement("input",{className:ue.a.inputfile,onChange:this.handleChange,onBlur:this.handleBlur,id:"file",type:"file",key:a||"",ref:this.fileInput}),r.a.createElement("label",{className:i?o?ue.a.error:ue.a.customFileTouched:ue.a.customFile,tabIndex:"0",htmlFor:"file"},r.a.createElement("span",{className:t?ue.a.filename:ue.a.placeholder},i?t?t.name:"No file chosen":"Upload your photo"),r.a.createElement("span",{className:ue.a.browseButton},"Browse")))}}]),t}(n.Component),me=a(33),de=["image/jpg","image/jpeg"],he=me.b().shape({name:me.c().min(2,"Name must be at least 2 characters").max(60,"Name must be at most 60 characters").required("Name is required"),email:me.c().email("Email not valid").required("Email is required"),phone:me.c().matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/,"Phone not valid").required("Phone is required"),position_id:me.c().required("Position is required"),photo:me.a().required("Photo is required").test("fileFormat","Unsupported Format",(function(e){return e&&de.includes(e.file.type)})).test("fileSize","File too large",(function(e){return e&&e.file.size<=5242880})).test("fileResolution","Require at least 70x70px resolution",(function(e){return e&&e.dimensions&&e.dimensions.width>=70&&e.dimensions.height>=70}))}),_e=function(e){var t=e.positions,a=e.postNewUser;return r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:le.a.title},"Register to get a work"),r.a.createElement(oe.c,{initialValues:{name:"",email:"",phone:"",position:"",photo:null,position_id:""},validationSchema:he,onSubmit:function(e,t){var n=t.resetForm,r=new FormData;r.append("position_id",e.position_id),r.append("name",e.name),r.append("email",e.email),r.append("phone",e.phone),r.append("photo",e.photo.file),setTimeout((function(){a(r),n()}),1e3)}},(function(e){var a=e.values,n=e.touched,i=e.errors,o=e.setFieldTouched;return r.a.createElement(oe.b,{className:le.a.registration,autoComplete:"off",method:"POST"},r.a.createElement("p",{className:le.a.paragraph},"Attention! After successful registration and alert, update the list of users in the block from the top"),r.a.createElement("div",{className:le.a.inputContainer},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement(oe.a,{className:"".concat(le.a.input," ").concat(i.name&&n.name?le.a.inputError:""),type:"text",name:"name",placeholder:"Your name"}),n.name&&i.name&&r.a.createElement("p",{className:le.a.error},i.name)),r.a.createElement("div",{className:le.a.inputContainer},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(oe.a,{className:"".concat(le.a.input," ").concat(i.email&&n.email?le.a.inputError:""),type:"email",name:"email",placeholder:"Your email"}),n.email&&i.email&&r.a.createElement("p",{className:le.a.error},i.email)),r.a.createElement("div",{className:le.a.inputContainer},r.a.createElement("label",{htmlFor:"phone"},"Phone number"),r.a.createElement(oe.a,{className:"".concat(le.a.input," ").concat(i.phone&&n.phone?le.a.inputError:""),type:"tel",name:"phone",placeholder:"+380 XX XXX XX XX"}),i.phone&&n.phone?null:r.a.createElement("p",{className:le.a.assistive},"\u0415nter phone number in open format"),n.phone&&i.phone&&r.a.createElement("p",{className:le.a.error},i.phone)),r.a.createElement("div",{className:le.a.inputContainer},r.a.createElement("p",null,"Select your position"),t&&t.map((function(e){return r.a.createElement("label",{className:le.a.checkContainer,key:e.id,htmlFor:e.id},e.name,r.a.createElement(oe.a,{checked:+a.position_id===e.id,type:"radio",id:e.id,value:e.id,name:"position_id"}),r.a.createElement("span",{className:le.a.checkmark}))})),n.position_id&&i.position_id&&r.a.createElement("p",{className:le.a.error},i.position_id)),r.a.createElement("div",{className:le.a.inputFileContainer},r.a.createElement(oe.a,{onBlur:o,name:"photo",component:pe,touched:n.photo,error:i.photo}),n.photo&&i.photo&&r.a.createElement("p",{className:le.a.error},i.photo)),r.a.createElement(P,{type:"submit",label:"Sing up now"}))}))))},fe=a(102),ge=a.n(fe),be=function(){return r.a.createElement("footer",{className:ge.a.footer},"\xa9 abz.agency specially for the test task")},ve=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={users:null,token:null,page:0,positions:null},a.loadUsers=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:t=e.sent,a.setState({users:t,page:1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),a.loadMoreUsers=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.state.page,e.next=4,E(t+1);case 4:n=e.sent,a.setState((function(e){return{users:[].concat(Object(s.a)(e.users),Object(s.a)(n)),page:e.page+1}})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),a.postNewUser=function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(t);case 3:n=e.sent,console.log(n),a.loadUsers(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),a}return Object(_.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.loadUsers(),e.next=4,y();case 4:t=e.sent,this.setState({positions:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.users,a=e.positions;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement("main",null,r.a.createElement(D,null),r.a.createElement(f.Element,{name:"about"},r.a.createElement(K,null)),r.a.createElement(f.Element,{name:"users"},r.a.createElement(ie,{users:t,loadMoreUsers:this.loadMoreUsers})),r.a.createElement(f.Element,{name:"CTA"},r.a.createElement(_e,{postNewUser:this.postNewUser,positions:a}))),r.a.createElement(be,null))}}]),t}(n.Component);a(137);o.a.render(r.a.createElement(ve,null),document.getElementById("root"))},18:function(e,t,a){e.exports={title:"About_title__37qy0 basicStyles_heading1__2hr5x",subtitle:"About_subtitle__or5aC basicStyles_heading2__cbMhV",imageContainer:"About_imageContainer__3GoMX",sideContainer:"About_sideContainer__4Zozs",decorationImage:"About_decorationImage__z2-Em",paragraph:"About_paragraph__16jXJ basicStyles_paragraph__1nZUq",imageWithDescription:"About_imageWithDescription__3nknt"}},2:function(e,t,a){e.exports={title:"RegistrationForm_title__5udGR basicStyles_heading1__2hr5x",paragraph:"RegistrationForm_paragraph__3NiZX basicStyles_paragraph__1nZUq",registration:"RegistrationForm_registration__24lUi basicStyles_paragraph__1nZUq",input:"RegistrationForm_input__1ZD4a",inputError:"RegistrationForm_inputError__3_ncR",assistive:"RegistrationForm_assistive__GJobI",error:"RegistrationForm_error__38Ptv RegistrationForm_assistive__GJobI",inputContainer:"RegistrationForm_inputContainer__3BCaZ",inputFileContainer:"RegistrationForm_inputFileContainer__DdI2X",checkContainer:"RegistrationForm_checkContainer__2GlAE",checkmark:"RegistrationForm_checkmark__3BiQ1"}},20:function(e,t,a){e.exports={inputfile:"InputFile_inputfile__3r6i4",customFile:"InputFile_customFile__2Ghwh",placeholder:"InputFile_placeholder__2Spnb",filename:"InputFile_filename__3LdE4 InputFile_placeholder__2Spnb",browseButton:"InputFile_browseButton__26MLy",previewImg:"InputFile_previewImg__3LckW",customFileTouched:"InputFile_customFileTouched__ZbS5Y InputFile_customFile__2Ghwh",error:"InputFile_error__2lsWe InputFile_customFile__2Ghwh"}},28:function(e,t,a){e.exports={header:"Header_header__20l4v",backdrop:"Header_backdrop__WXlK8",menuWrap:"Header_menuWrap__2jR64",menuHidden:"Header_menuHidden__3irRf Header_menuWrap__2jR64",backdropHidden:"Header_backdropHidden__2yH9z",headerContainer:"Header_headerContainer__3fjJJ main_container__1kWFF",burgerMenu:"Header_burgerMenu__xD3WM"}},32:function(e,t,a){e.exports={card:"UserCard_card__W6Bfd",photo:"UserCard_photo__3gZNo",name:"UserCard_name__39daW basicStyles_heading2__cbMhV",paragraph:"UserCard_paragraph__5XX0G basicStyles_paragraph__1nZUq"}},53:function(e,t,a){e.exports={heading:"Heading_heading__3VP8E",headingContainer:"Heading_headingContainer__qxofX main_container__1kWFF",headingTitle:"Heading_headingTitle__2eG5I basicStyles_heading1__2hr5x",paragraph:"Heading_paragraph__11dy4 basicStyles_paragraph__1nZUq"}},54:function(e,t,a){e.exports={users:"Users_users__1h9g-",title:"Users_title__2ncUG basicStyles_heading1__2hr5x",paragraph:"Users_paragraph__2m4aC basicStyles_paragraph__1nZUq",userslist:"Users_userslist__2gp2z"}},60:function(e,t,a){e.exports=a.p+"static/media/logo.146e2926.svg"},77:function(e,t,a){e.exports={logoContainer:"Navigation_logoContainer__25T8i",navItem:"Navigation_navItem__3gb0I"}},93:function(e,t,a){e.exports=a.p+"static/media/menuicon.6f6bef28.svg"},94:function(e,t,a){e.exports={navItem:"NavigationWideScreens_navItem__-7ne4"}},95:function(e,t,a){e.exports={button:"Button_button__1rbPA"}},96:function(e,t,a){e.exports=a.p+"static/media/man-laptop-v1.3cdf7897.svg"},97:function(e,t,a){e.exports={button:"FlatButton_button__1Wqdq"}},98:function(e,t,a){e.exports=a.p+"static/media/noImage.b56eb07f.png"}},[[103,1,2]]]);
//# sourceMappingURL=main.d35bf601.chunk.js.map