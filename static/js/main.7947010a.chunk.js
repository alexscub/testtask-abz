(this["webpackJsonptesttask-abz"]=this["webpackJsonptesttask-abz"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/noImage.b56eb07f.png"},104:function(e,t,a){e.exports={footer:"Footer_footer__3E2hA basicStyles_paragraph__1nZUq"}},105:function(e,t,a){e.exports=a.p+"static/media/Close.cff94799.svg"},106:function(e,t,a){e.exports=a(141)},140:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(59),o=a.n(i),s=a(80),l=a(6),c=a.n(l),u=a(21),p=a(14),m=a(15),d=a(18),h=a(16),_=a(19),f=(a(111),a(39)),b=a(53),g=a.n(b),v="https://frontend-test-assignment-api.abz.agency/api/v1/",E=function(){var e=Object(u.a)(c.a.mark((function e(){var t,a,n=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.prev=1,e.next=4,g.a.get("".concat(v,"users?page=").concat(t,"&count=6"));case 4:return a=e.sent,e.abrupt("return",a.data.users);case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(v,"positions"));case 3:return t=e.sent,e.abrupt("return",t.data.positions);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(v,"token"));case 3:if(!(a=e.sent).data.success){e.next=10;break}return n=a.data.token,e.next=8,g.a.post("".concat(v,"users"),t,{headers:{Token:n}});case 8:return r=e.sent,e.abrupt("return",r);case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),w=a(33),N=a.n(w),C=a(61),F=a.n(C),S=a(94),x=a.n(S),O=a(78),U=a.n(O),j=[{title:"About me",link:"about"},{title:"Relationships",link:""},{title:"Users",link:"users"},{title:"Sign Up",link:"CTA"},{title:"Terms and Conditions",link:""},{title:"How it works",link:""},{title:"Partnership",link:""},{title:"Help",link:""},{title:"Leave testimonial",link:""},{title:"Contact us",link:""},{title:"Articles",link:""},{title:"Our news",link:""},{title:"Testimonials",link:""},{title:"Licenses",link:""},{title:"Privacy Policy",link:""}],M=function(e){var t=e.close,a=j.map((function(e,a){return r.a.createElement(f.Link,{onClick:e.link?t:null,to:e.link||"#",spy:!0,smooth:!0,duration:500,delay:100,key:a,className:U.a.navItem,activeClass:"activeClass"},e.title)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:U.a.logoContainer},r.a.createElement("img",{src:F.a,alt:"TestTask"})),r.a.createElement("nav",null,a))},I=a(95),R=a.n(I),T=[{title:"About me",link:"about"},{title:"Relationships",link:""},{title:"Requirements",link:"requirments"},{title:"Users",link:"users"},{title:"Sign Up",link:"CTA"}],W=function(){var e=T.map((function(e,t){return r.a.createElement(f.Link,{to:e.link||"#",spy:!0,smooth:!0,duration:500,key:t,className:R.a.navItem,activeClass:"activeClass",offset:40},e.title)}));return r.a.createElement("nav",null,e)},q=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isMenuOpen:!1},a.openMenu=function(){a.setState({isMenuOpen:!0}),document.body.style.overflow="hidden"},a.closeMenu=function(){a.setState({isMenuOpen:!1}),document.body.style.overflow="unset"},a}return Object(_.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.isMenuOpen,t=document.documentElement.clientWidth;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:N.a.header},r.a.createElement("div",{className:N.a.headerContainer},r.a.createElement("img",{src:F.a,alt:"TestTask"}),t<1024?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:N.a.burgerMenu,onClick:this.openMenu},r.a.createElement("img",{src:x.a,alt:""}),"menu"),r.a.createElement("div",{className:e?N.a.backdrop:N.a.backdropHidden,onClick:this.closeMenu,role:"presentation"}),r.a.createElement("div",{className:e?N.a.menuWrap:N.a.menuHidden},r.a.createElement(M,{close:this.closeMenu}))):r.a.createElement(W,null))))}}]),t}(n.Component),A=a(54),H=a.n(A),B=a(96),P=a.n(B),D=function(e){var t=e.type,a=void 0===t?"button":t,n=e.label,i=e.onClick,o=void 0===i?function(){}:i,s=e.customClassName,l=void 0===s?"":s;return r.a.createElement("button",{type:a,className:"".concat(P.a.button," ").concat(l),onClick:o},n)},X=function(e){var t=e.id,a=e.CTA,n=document.documentElement.clientWidth;return r.a.createElement("section",{id:t,className:H.a.heading},r.a.createElement("div",{className:H.a.headingContainer},r.a.createElement("h1",{className:H.a.headingTitle},"Test assignment for Frontend Developer position"),r.a.createElement("p",{className:H.a.paragraph},"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository."," ",n>=768&&"Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens"),r.a.createElement(D,{onClick:a,label:"Sign up now"})))},L=a(23),G=a.n(L),Z=a(97),z=a.n(Z),J=a(98),V=a.n(J),K=function(e){var t=e.type,a=void 0===t?"button":t,n=e.label,i=e.onClick,o=void 0===i?function(){}:i;return r.a.createElement("button",{type:a,className:V.a.button,onClick:o},n)},Y=function(e){var t=e.id,a=e.CTA;return r.a.createElement("section",{id:t},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:G.a.title},"Let's get acquainted"),r.a.createElement("div",{className:G.a.imageWithDescription},r.a.createElement("div",{className:G.a.imageContainer},r.a.createElement("img",{className:G.a.decorationImage,src:z.a,alt:"Man with laptop"})),r.a.createElement("div",{className:G.a.sideContainer},r.a.createElement("h3",{className:G.a.subtitle},"I am cool frontend developer"),r.a.createElement("p",{className:G.a.paragraph},"We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction."),r.a.createElement("p",{className:G.a.paragraph},"If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P\u200bSD mockup\u200b into HTML5/CSS3."),r.a.createElement(K,{onClick:a,label:"Sign up now"})))))},Q=a(99),$=a(34),ee=a.n($),te=a(100),ae=a.n(te),ne=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={isOverflowed:!1},a.textElement=r.a.createRef(),a}return Object(_.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({isOverflowed:this.textElement.current.scrollWidth>this.textElement.current.clientWidth})}},{key:"render",value:function(){var e=this.state.isOverflowed,t=this.props,a=t.children,n=t.className;return r.a.createElement("p",{className:n,"data-tip":e?a:"",ref:this.textElement},a)}}]),t}(n.Component),re=function(e){var t=e.photo,a=e.name,n=e.position,i=e.email,o=e.phone;return r.a.createElement("li",{className:ee.a.card},r.a.createElement(Q.a,{className:ee.a.tooltip,place:"bottom"}),r.a.createElement("img",{onError:function(e){e.target.src=ae.a},className:ee.a.photo,src:t,alt:a}),r.a.createElement(ne,{className:ee.a.name},a),r.a.createElement(ne,{className:ee.a.paragraph},n),r.a.createElement(ne,{className:ee.a.paragraph},i),r.a.createElement(ne,{className:ee.a.paragraph},o))},ie=a(55),oe=a.n(ie),se=function(e){var t=e.users,a=void 0===t?[]:t,n=e.loadMoreUsers,i=e.id;return r.a.createElement("section",{id:i,className:oe.a.users},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:oe.a.title},"Our cheerful users"),r.a.createElement("p",{className:oe.a.paragraph},"Attention! Sorting users by registration date"),r.a.createElement("ul",{className:oe.a.userslist},a&&a.map((function(e){return r.a.createElement(re,Object.assign({key:e.id},e))}))),r.a.createElement(D,{label:"Show more",onClick:n})))},le=a(35),ce=a(2),ue=a.n(ce),pe=a(25),me=a.n(pe),de=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={file:"",fileUrl:""},a.openFile=function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){a.setState({fileUrl:t.result})}},a.onImgLoad=function(e){var t=e.target,n=a.state.file;a.props.form.setFieldValue("photo",{file:n,dimensions:{height:t.naturalHeight,width:t.naturalWidth}}),a.setState({fileUrl:""})},a.handleChange=function(e){e.preventDefault();var t=a.fileInput.current.files[0];t?(a.props.form.setFieldValue("photo",{file:t}),a.setState({file:t}),a.openFile(t)):(a.props.form.setFieldValue("photo",null),a.setState({file:null}))},a.handleBlur=function(){a.props.onBlur("photo",!0)},a.fileInput=r.a.createRef(),a}return Object(_.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.touched;t||e.touched===t||this.setState({file:null,theInputKey:Date.now()})}},{key:"render",value:function(){var e=this.state,t=e.file,a=e.theInputKey,n=e.fileUrl,i=this.props,o=i.touched,s=i.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:me.a.previewImg,onLoad:this.onImgLoad,src:n,alt:""}),r.a.createElement("p",null,"Photo"),r.a.createElement("input",{className:me.a.inputfile,onChange:this.handleChange,onBlur:this.handleBlur,id:"file",type:"file",key:a||"",ref:this.fileInput}),r.a.createElement("label",{className:o?s?me.a.error:me.a.customFileTouched:me.a.customFile,htmlFor:"file"},r.a.createElement("span",{className:t?me.a.filename:me.a.placeholder},o?t?t.name:"No file chosen":"Upload your photo"),r.a.createElement("span",{className:me.a.browseButton},"Browse")))}}]),t}(n.Component);de.defaultProps={touched:!1,error:""};var he=de,_e=a(38),fe=["image/jpg","image/jpeg"],be=_e.b().shape({name:_e.c().min(2,"Name must be at least 2 characters").max(60,"Name must be at most 60 characters").required("Name is required"),email:_e.c().email("Email not valid").required("Email is required"),phone:_e.c().matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/,"Phone not valid").required("Phone is required"),position_id:_e.c().required("Position is required"),photo:_e.a().required("Photo is required").test("fileFormat","Unsupported Format",(function(e){return e&&fe.includes(e.file.type)})).test("fileSize","File too large",(function(e){return e&&e.file.size<=5242880})).test("fileResolution","Require at least 70x70px resolution",(function(e){return e&&e.dimensions&&e.dimensions.width>=70&&e.dimensions.height>=70}))}),ge=function(e){var t=e.positions,a=void 0===t?[]:t,n=e.postNewUser,i=e.id;return r.a.createElement("section",{id:i},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:ue.a.title},"Register to get a work"),r.a.createElement(le.c,{initialValues:{name:"",email:"",phone:"",position:"",photo:null,position_id:""},validationSchema:be,onSubmit:function(e,t){var a=t.resetForm,r=new FormData;r.append("position_id",e.position_id),r.append("name",e.name),r.append("email",e.email),r.append("phone",e.phone),r.append("photo",e.photo.file),setTimeout((function(){n(r),a()}),1e3)}},(function(e){var t=e.values,n=e.touched,i=e.errors,o=e.setFieldTouched;return r.a.createElement(le.b,{className:ue.a.registration,autoComplete:"off",method:"POST"},r.a.createElement("p",{className:ue.a.paragraph},"Attention! After successful registration and alert, update the list of users in the block from the top"),r.a.createElement("div",{className:ue.a.inputContainer},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement(le.a,{className:"".concat(ue.a.input," ").concat(i.name&&n.name?ue.a.inputError:""),type:"text",name:"name",placeholder:"Your name"}),n.name&&i.name&&r.a.createElement("p",{className:ue.a.error},i.name)),r.a.createElement("div",{className:ue.a.inputContainer},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(le.a,{className:"".concat(ue.a.input," ").concat(i.email&&n.email?ue.a.inputError:""),type:"email",name:"email",placeholder:"Your email"}),n.email&&i.email&&r.a.createElement("p",{className:ue.a.error},i.email)),r.a.createElement("div",{className:ue.a.inputContainer},r.a.createElement("label",{htmlFor:"phone"},"Phone number"),r.a.createElement(le.a,{className:"".concat(ue.a.input," ").concat(i.phone&&n.phone?ue.a.inputError:""),type:"tel",name:"phone",placeholder:"+380 XX XXX XX XX"}),i.phone&&n.phone?null:r.a.createElement("p",{className:ue.a.assistive},"\u0415nter phone number in open format"),n.phone&&i.phone&&r.a.createElement("p",{className:ue.a.error},i.phone)),r.a.createElement("div",{className:ue.a.inputContainer},r.a.createElement("p",null,"Select your position"),a&&a.map((function(e){return r.a.createElement("label",{className:ue.a.checkContainer,key:e.id,htmlFor:e.id},e.name,r.a.createElement(le.a,{checked:+t.position_id===e.id,type:"radio",id:e.id,value:e.id,name:"position_id"}),r.a.createElement("span",{className:ue.a.checkmark}))})),n.position_id&&i.position_id&&r.a.createElement("p",{className:ue.a.error},i.position_id)),r.a.createElement("div",{className:ue.a.inputFileContainer},r.a.createElement(le.a,{onBlur:o,name:"photo",component:he,touched:n.photo,error:i.photo}),n.photo&&i.photo&&r.a.createElement("p",{className:ue.a.error},i.photo)),r.a.createElement(D,{type:"submit",label:"Sing up now"}))}))))},ve=a(104),Ee=a.n(ve),ke=function(){return r.a.createElement("footer",{className:Ee.a.footer},"\xa9 abz.agency specially for the test task")},ye=a(26),we=a.n(ye),Ne=a(105),Ce=a.n(Ne),Fe=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).backdropRef=Object(n.createRef)(),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.closeModal()},a.handleBackdropClick=function(e){a.backdropRef.current&&e.target!==a.backdropRef.current||a.props.closeModal()},a}return Object(_.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress),document.body.style.overflow="hidden"}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress),document.body.style.overflow="unset"}},{key:"render",value:function(){var e=this.props,t=e.closeModal,a=e.success,n=e.message;return r.a.createElement("div",{className:we.a.backdrop,ref:this.backdropRef,onClick:this.handleBackdropClick,role:"presentation"},r.a.createElement("div",{className:we.a.modal},r.a.createElement("div",{className:we.a.titleWrapper},r.a.createElement("h3",{className:we.a.title},a?"Congratulations":"something wrong!"),r.a.createElement("button",{onClick:t,type:"button",className:we.a.titleButton},r.a.createElement("img",{alt:"",src:Ce.a}))),r.a.createElement("p",{className:we.a.paragraph},n),r.a.createElement("div",{className:we.a.buttonWrapper},r.a.createElement(D,{customClassName:we.a.button,label:"Great",onClick:t}))))}}]),t}(n.Component),Se=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={users:null,page:0,positions:null,postResult:null},a.loadUsers=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:t=e.sent,a.setState({users:t,page:1}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),a.loadMoreUsers=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.state.page,e.next=4,E(t+1);case 4:n=e.sent,a.setState((function(e){return{users:[].concat(Object(s.a)(e.users),Object(s.a)(n)),page:e.page+1}})),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),a.postNewUser=function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(t);case 3:n=e.sent,a.setState({postResult:n.data}),a.loadUsers(),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),a.goToSignUp=function(){f.scroller.scrollTo("CTA",{duration:500,smooth:!0,offset:50})},a.toggleModal=function(){a.setState({postResult:null})},a}return Object(_.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.loadUsers(),e.next=4,k();case 4:t=e.sent,this.setState({positions:t}),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.users,a=e.positions,n=e.postResult;return r.a.createElement(r.a.Fragment,null,!!n&&r.a.createElement(Fe,{success:n.success,message:n.message,closeModal:this.toggleModal}),r.a.createElement(q,null),r.a.createElement("main",null,r.a.createElement(X,{CTA:this.goToSignUp,id:"requirments"}),r.a.createElement(Y,{CTA:this.goToSignUp,id:"about"}),r.a.createElement(se,{id:"users",users:t,loadMoreUsers:this.loadMoreUsers}),r.a.createElement(ge,{id:"CTA",postNewUser:this.postNewUser,positions:a})),r.a.createElement(ke,null))}}]),t}(n.Component);a(140);o.a.render(r.a.createElement(Se,null),document.getElementById("root"))},2:function(e,t,a){e.exports={title:"RegistrationForm_title__5udGR basicStyles_heading1__2hr5x",paragraph:"RegistrationForm_paragraph__3NiZX basicStyles_paragraph__1nZUq",registration:"RegistrationForm_registration__24lUi basicStyles_paragraph__1nZUq",input:"RegistrationForm_input__1ZD4a",inputError:"RegistrationForm_inputError__3_ncR",assistive:"RegistrationForm_assistive__GJobI",error:"RegistrationForm_error__38Ptv RegistrationForm_assistive__GJobI",inputContainer:"RegistrationForm_inputContainer__3BCaZ",inputFileContainer:"RegistrationForm_inputFileContainer__DdI2X",checkContainer:"RegistrationForm_checkContainer__2GlAE",checkmark:"RegistrationForm_checkmark__3BiQ1"}},23:function(e,t,a){e.exports={title:"About_title__37qy0 basicStyles_heading1__2hr5x",subtitle:"About_subtitle__or5aC basicStyles_heading2__cbMhV",imageContainer:"About_imageContainer__3GoMX",sideContainer:"About_sideContainer__4Zozs",decorationImage:"About_decorationImage__z2-Em",paragraph:"About_paragraph__16jXJ basicStyles_paragraph__1nZUq",imageWithDescription:"About_imageWithDescription__3nknt"}},25:function(e,t,a){e.exports={inputfile:"InputFile_inputfile__3r6i4",customFile:"InputFile_customFile__2Ghwh",placeholder:"InputFile_placeholder__2Spnb",filename:"InputFile_filename__3LdE4 InputFile_placeholder__2Spnb",browseButton:"InputFile_browseButton__26MLy",previewImg:"InputFile_previewImg__3LckW",customFileTouched:"InputFile_customFileTouched__ZbS5Y InputFile_customFile__2Ghwh",error:"InputFile_error__2lsWe InputFile_customFile__2Ghwh"}},26:function(e,t,a){e.exports={backdrop:"Modal_backdrop__yofzD",modal:"Modal_modal__1-KOa",title:"Modal_title__14PwO basicStyles_heading2__cbMhV",paragraph:"Modal_paragraph__3bwGq basicStyles_paragraph__1nZUq",titleWrapper:"Modal_titleWrapper__2ytbL",titleButton:"Modal_titleButton__34JAl",button:"Modal_button__2birz",buttonWrapper:"Modal_buttonWrapper__2OV4l"}},33:function(e,t,a){e.exports={header:"Header_header__20l4v",backdrop:"Header_backdrop__WXlK8",menuWrap:"Header_menuWrap__2jR64",menuHidden:"Header_menuHidden__3irRf Header_menuWrap__2jR64",backdropHidden:"Header_backdropHidden__2yH9z",headerContainer:"Header_headerContainer__3fjJJ main_container__1kWFF",burgerMenu:"Header_burgerMenu__xD3WM"}},34:function(e,t,a){e.exports={card:"UserCard_card__W6Bfd",photo:"UserCard_photo__3gZNo",name:"UserCard_name__39daW basicStyles_heading2__cbMhV",paragraph:"UserCard_paragraph__5XX0G basicStyles_paragraph__1nZUq",tooltip:"UserCard_tooltip__1Vrdo"}},54:function(e,t,a){e.exports={heading:"Heading_heading__3VP8E",headingContainer:"Heading_headingContainer__qxofX main_container__1kWFF",headingTitle:"Heading_headingTitle__2eG5I basicStyles_heading1__2hr5x",paragraph:"Heading_paragraph__11dy4 basicStyles_paragraph__1nZUq"}},55:function(e,t,a){e.exports={users:"Users_users__1h9g-",title:"Users_title__2ncUG basicStyles_heading1__2hr5x",paragraph:"Users_paragraph__2m4aC basicStyles_paragraph__1nZUq",userslist:"Users_userslist__2gp2z"}},61:function(e,t,a){e.exports=a.p+"static/media/logo.146e2926.svg"},78:function(e,t,a){e.exports={logoContainer:"Navigation_logoContainer__25T8i",navItem:"Navigation_navItem__3gb0I"}},94:function(e,t,a){e.exports=a.p+"static/media/menuicon.6f6bef28.svg"},95:function(e,t,a){e.exports={navItem:"NavigationWideScreens_navItem__-7ne4"}},96:function(e,t,a){e.exports={button:"Button_button__1rbPA"}},97:function(e,t,a){e.exports=a.p+"static/media/man-laptop-v1.3cdf7897.svg"},98:function(e,t,a){e.exports={button:"FlatButton_button__1Wqdq"}}},[[106,1,2]]]);
//# sourceMappingURL=main.7947010a.chunk.js.map