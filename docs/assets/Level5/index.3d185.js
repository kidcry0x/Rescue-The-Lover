window.__require=function e(t,i,n){function o(a,s){if(!i[a]){if(!t[a]){var r=a.split("/");if(r=r[r.length-1],!t[r]){var l="function"==typeof __require&&__require;if(!s&&l)return l(r,!0);if(c)return c(r,!0);throw new Error("Cannot find module '"+a+"'")}a=r}var _=i[a]={exports:{}};t[a][0].call(_.exports,function(e){return o(t[a][1][e]||e)},_,_.exports,e,t,i,n)}return i[a].exports}for(var c="function"==typeof __require&&__require,a=0;a<n.length;a++)o(n[a]);return o}({Level5_1:[function(e,t,i){"use strict";cc._RF.push(t,"c730cQ8U3JF8LOuLqIjkFN9","Level5_1");var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),c=this&&this.__decorate||function(e,t,i,n){var o,c=arguments.length,a=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(c<3?o(a):c>3?o(t,i,a):o(t,i))||a);return c>3&&a&&Object.defineProperty(t,i,a),a};Object.defineProperty(i,"__esModule",{value:!0});var a,s=e("../../../Scripts/LevelBase"),r=cc._decorator,l=r.ccclass,_=(r.property,cc.tween);(function(e){e[e.SWOOSH=0]="SWOOSH",e[e.BITE=1]="BITE",e[e.KNIFE=2]="KNIFE",e[e.DING=3]="DING",e[e.WOMAN_HEYA=4]="WOMAN_HEYA",e[e.SCREAM_PAIN=5]="SCREAM_PAIN",e[e.ACTION_THEME=6]="ACTION_THEME"})(a||(a={}));var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.next="2",t.spineDatas=[{bundle:"police",name:"police"}],t}return o(t,e),t.prototype.onEnable=function(){e.prototype.onEnable.call(this),this._gameManager._levelCurrent.level=this.levelCurrent,this._gameManager._beginScene=this.node},t.prototype.setStatus=function(){this._girl=this.otherSpine[0],this.background.scale=1,this._girl.node.scaleX=1,this._girl.node.scaleY=1,this.setOtherSpine(this._girl,cc.v2(400,-485),"rescue_3_3/boss_tucgian",null),this.setLupin(cc.v2(-740,-520),null,null),this.lupin.setAnimation(1,"emotion/angry",!0),this.lupin.setAnimation(0,"rescue_3_1/mc_walking_rescue_3_1",!0),this.camera2d[0].setPosition(cc.v3(-450,-80,0)),this.camera=this.camera2d[0].getComponent(cc.Camera),this.camera.zoomRatio=1.1},t.prototype.setAction=function(){var e=this;this.playMusic(a.ACTION_THEME,!0,0),this.playSound(a.SWOOSH,!1,2.6),_(this.lupin.node).to(2,{position:cc.v3(-150,-560,0)}).call(function(){e.lupin.setMix("rescue_3_1/mc_walking_rescue_3_1","rescue_3_3/mc_gun1_rescue_3_3",1),e.lupin.setAnimation(0,"rescue_3_3/mc_gun1_rescue_3_3",!1),e.lupin.setAnimation(1,"emotion/fear_1",!0),e._girl.addAnimation(0,"rescue_3_3/boss_uyhiep2",!0,3.5)}).start(),_(this.camera2d[0]).delay(.5).to(1.5,{x:130}).delay(2).to(.4,{x:380,y:-230}).start(),_(this.camera).delay(4).to(.4,{zoomRatio:1.6}).delay(.5).call(function(){e.playSound(a.DING,!1,.3),e.showOptionContainer(!0)}).start()},t.prototype.runOption1=function(){var e=this;_(this._girl).call(function(){e.playSound(a.BITE,!1,0),e._girl.setMix("rescue_3_3/boss_tucgian","rescue_4_1/cogai_can",.3),e._girl.setAnimation(0,"rescue_4_1/cogai_can",!0),e.setTimeScaleAllSpine(.7)}).delay(.6).call(function(){e.playSound(a.KNIFE,!1,0),e._girl.setMix("rescue_4_1/cogai_can","rescue_3_3/boss_xucogai",.3),e._girl.addAnimation(0,"rescue_3_3/boss_xucogai",!1,0)}).start(),_(this.camera).delay(1.1).by(.3,{zoomRatio:-.3}).start(),_(this.camera2d[0]).delay(1.1).by(.3,{x:120,y:100}).start(),this._girl.setCompleteListener(function(t){"rescue_4_1/cogai_can"==t.animation.name&&(e._girl.setCompleteListener(null),e.lupin.setAnimation(1,"emotion/fear_2",!0),_(e.lupin.node).delay(1.8).call(function(){e.setTimeScaleAllSpine(1),e.showFail()}).start())})},t.prototype.runOption2=function(){var e=this;this.playSound(a.WOMAN_HEYA,!1,.3),this.playSound(a.SWOOSH,!1,.8),this.playSound(a.SCREAM_PAIN,!1,1),this._girl.setAnimation(0,"rescue_4_1/cogai_giamchan",!1),this._girl.setMix("rescue_4_1/cogai_giamchan","rescue_4_2/boss_gaothet",.3),_(this._girl).delay(1).call(function(){e._girl.setAnimation(0,"rescue_4_2/boss_gaothet",!1),e._girl.setMix("rescue_4_2/boss_gaothet","rescue_4_2/boss_gaothet2",.2),_(e.camera).delay(.3).call(function(){e._girl.setAnimation(0,"rescue_4_2/boss_gaothet2",!0)}).by(.3,{zoomRatio:-.3}).start(),_(e.camera2d[0]).delay(.3).by(.3,{y:200,x:100}).start()}).start(),this._girl.setCompleteListener(function(t){"rescue_4_2/boss_gaothet2"==t.animation.name&&(e._girl.setCompleteListener(null),e.lupin.setAnimation(1,"emotion/abc",!0),_(e.lupin.node).delay(1).call(function(){e.onPass()}).start())})},c([l],t)}(s.default);i.default=u,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}],Level5_2:[function(e,t,i){"use strict";cc._RF.push(t,"1fe78FJLXRDr79khd7sVfao","Level5_2");var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),c=this&&this.__decorate||function(e,t,i,n){var o,c=arguments.length,a=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(c<3?o(a):c>3?o(t,i,a):o(t,i))||a);return c>3&&a&&Object.defineProperty(t,i,a),a};Object.defineProperty(i,"__esModule",{value:!0});var a,s=e("../../../Scripts/LevelBase"),r=cc._decorator,l=r.ccclass,_=(r.property,cc.tween);(function(e){e[e.SWOOSH=0]="SWOOSH",e[e.WOMAN_HEYA=1]="WOMAN_HEYA",e[e.GUN=2]="GUN",e[e.DING=3]="DING",e[e.SCREAM_PAIN_1=4]="SCREAM_PAIN_1",e[e.SCREAM_PAIN_2=5]="SCREAM_PAIN_2",e[e.LAUGH=6]="LAUGH",e[e.BRAWL=7]="BRAWL",e[e.WIN=8]="WIN",e[e.ACTION_THEME=9]="ACTION_THEME"})(a||(a={}));var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.next="3",t.spineDatas=[{bundle:"police",name:"police"}],t}return o(t,e),t.prototype.setStatus=function(){this._girl=this.otherSpine[0],this._girl.node.scaleX=1,this._girl.node.scaleY=1,this.background.scale=1,this.camera2d[0].position=cc.v3(400,0,0),this.camera=this.camera2d[0].getComponent(cc.Camera),this.camera.zoomRatio=1,this.lupin.clearTrack(1),this.setLupin(cc.v2(-350,-560),"rescue_3_3/mc_gun2_idle_rescue_3_3",null),this.setOtherSpine(this._girl,cc.v2(190,-520),"rescue_4_1/cogai_giamchan",null),this.lupin.setAnimation(0,"rescue_3_3/mc_gun2_idle_rescue_3_3",!0)},t.prototype.setAction=function(){var e=this;this.playMusic(a.ACTION_THEME,!0,0),_(this.lupin).delay(.5).call(function(){_(e.camera2d[0]).to(1,{x:-50,y:-100}).start(),_(e.camera).to(1,{zoomRatio:1.1}).start(),e.playSound(a.WOMAN_HEYA,!1,.3),e.playSound(a.SWOOSH,!1,.8),e.playSound(a.SCREAM_PAIN_1,!1,1),e._girl.setMix("rescue_3_3/boss_uyhiep2","rescue_4_1/cogai_giamchan",.3),e._girl.setAnimation(0,"rescue_4_1/cogai_giamchan",!1),e._girl.setMix("rescue_4_1/cogai_giamchan","rescue_4_2/boss_gaothet",.4),e.lupin.setAnimation(1,"emotion/fear_1",!0)}).delay(.8).call(function(){e._girl.setAnimation(0,"rescue_4_2/boss_gaothet",!1)}).start(),_(this.lupin).delay(4.3).call(function(){e.playSound(a.DING,!1,.1),e.showOptionContainer(!0)}).start()},t.prototype.runOption1=function(){var e=this;_(this._girl).delay(1.5).call(function(){e.playSound(a.SCREAM_PAIN_2,!1,0),e.playSound(a.LAUGH,!1,.7),e._girl.setMix("rescue_4_2/boss_gaothet","rescue_4_2/cogai_biban",.3),e._girl.setAnimation(0,"rescue_4_2/cogai_biban",!1)}).start(),_(this.camera2d[0]).delay(1.5).by(1,{x:300}).delay(1).by(1.5,{x:-300}).start(),_(this.lupin.node).call(function(){e.playSound(a.SWOOSH,!1,.3),e.lupin.setAnimation(0,"rescue_4_2/mc_killboss1_rescue_4_2",!1),console.log(e.lupin.animation),e.playSound(a.GUN,!1,1),e.lupin.addAnimation(0,"rescue_4_2/mc_killboss2_rescue_4_2",!0,.8),_(e.lupin).delay(.8).call(function(){e.lupin.setAnimation(1,"emotion/nervous",!0)}).start(),console.log(e.lupin.animation),e.lupin.setCompleteListener(function(t){"rescue_4_2/mc_killboss2_rescue_4_2"==t.animation.name&&(e.lupin.setCompleteListener(null),_(e.node).delay(2.5).call(function(){e.lupin.setMix("rescue_4_2/mc_killboss2_rescue_4_2","rescue_3_3/mc_killboss_rescue_3_3",.3),e.lupin.setAnimation(0,"rescue_3_3/mc_killboss_rescue_3_3",!1),e.lupin.setAnimation(1,"emotion/sad",!0),console.log(e.lupin.animation)}).delay(1.2).call(function(){e.showContinue()}).start())})}).start()},t.prototype.runOption2=function(){var e=this;this.lupin.setAnimation(0,"rescue_4_2/mc_attack_boss",!1),this._girl.setMix("rescue_4_2/boss_gaothet","rescue_4_2/boss_gaothet2",.4),this._girl.setAnimation(0,"rescue_4_2/boss_gaothet2",!1),_(this.lupin).delay(.45).call(function(){e.lupin.node.setPosition(e._girl.node.position),e.lupin.node.x-=45,e.lupin.node.y=-300,e.lupin.clearTrack(1),e.lupin.node.scaleY=1.5,e.lupin.node.scaleX=1.1,_(e.camera).to(.5,{zoomRatio:1}).start(),_(e.camera2d[0]).to(.5,{x:e._girl.node.x+50}).start(),e.playSound(a.BRAWL,!1,0),e.lupin.setAnimation(0,"fx/fightcloud",!0)}).delay(2.8).call(function(){_(e.camera2d[0]).by(.3,{x:280}).start(),e.lupin.node.scaleX=1,e.lupin.node.scaleY=1,e.lupin.node.y=-500,e.lupin.node.x=e._girl.node.x-50,e.lupin.setAnimation(0,"general/stand_ready",!0),e._girl.setMix("rescue_4_2/boss_gaothet2","rescue_4_2/boss_biha",.3),e.playSound(a.SCREAM_PAIN_2,!1,.2),e._girl.setAnimation(0,"rescue_4_2/boss_biha",!1)}).start(),this.lupin.setCompleteListener(function(t){"general/stand_ready"==t.animation.name&&(e.lupin.setCompleteListener(null),"general/stand_ready"==t.animation.name&&_(e.lupin.node).delay(1.8).call(function(){e.playSound(a.WIN,!1,1.2)}).delay(.8).call(function(){e.onPass()}).start())})},c([l],t)}(s.default);i.default=u,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}],Level5_3:[function(e,t,i){"use strict";cc._RF.push(t,"1f333mPAGdI2o1pkzXs85q8","Level5_3");var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),c=this&&this.__decorate||function(e,t,i,n){var o,c=arguments.length,a=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(c<3?o(a):c>3?o(t,i,a):o(t,i))||a);return c>3&&a&&Object.defineProperty(t,i,a),a};Object.defineProperty(i,"__esModule",{value:!0});var a,s=e("../../../Scripts/LevelBase"),r=cc._decorator,l=r.ccclass,_=r.property,u=cc.tween;(function(e){e[e.MOTORBIKE_HONK=0]="MOTORBIKE_HONK",e[e.CAR_DOOR=1]="CAR_DOOR",e[e.LAUGH=2]="LAUGH",e[e.DING=3]="DING",e[e.ACTION_THEME=4]="ACTION_THEME"})(a||(a={}));var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.spineDatas=[{bundle:"police",name:"police"},{bundle:"police",name:"police"}],t.optionBackground=null,t.option1Background=null,t.frame1=null,t.frame2=null,t.motorbike=null,t}return o(t,e),t.prototype.setStatus=function(){this._girl=this.otherSpine[0],this.police=this.otherSpine[1],this._girl.node.active=!0,this.motorbike.active=!0,this._girl.node.scale=.6,this.lupin.node.scaleX=-.7,this.lupin.node.scaleY=.7,this.background.scale=1.1,this.background.x=0,this.optionBackground.active=!1,this.option1Background.active=!1,this.camera2d[0].setPosition(cc.v3(580,100,0)),this.camera=this.camera2d[0].getComponent(cc.Camera),this.camera.zoomRatio=1,this.setLupin(cc.v2(630,35),null,null),this.lupin.setAnimation(0,"rescue_3_3/run_rescue_3_3",!0),this.lupin.setAnimation(1,"emotion/sinister",!0),this.setOtherSpine(this._girl,cc.v2(705,35),null,null),this._girl.setAnimation(0,"rescue_4_3/cogai_idle",!0)},t.prototype.setAction=function(){var e=this;this.playMusic(a.ACTION_THEME,!0,0),u(this.lupin.node).delay(.15).to(1,{position:cc.v3(600,-100,0),scaleX:-.9,scaleY:.9}).call(function(){e.lupin.setAnimation(0,"rescue_3_1/mc_idle_rescue_3_1",!0)}).delay(.3).call(function(){e.lupin.setAnimation(0,"rescue_3_3/run_rescue_3_3",!0),e.lupin.setAnimation(1,"emotion/sinister",!0)}).to(1,{x:-15,y:-250}).call(function(){e.lupin.setAnimation(0,"rescue_3_1/mc_idle_rescue_3_1",!0)}).delay(1.35).to(0,{scaleX:.9}).start(),u(this._girl.node).delay(.15).call(function(){e._girl.setAnimation(0,"rescue_4_3/cogai_run",!0)}).to(1,{position:cc.v3(705,-100,0),scale:.8}).call(function(){e._girl.setAnimation(0,"rescue_4_3/cogai_idle",!0)}).delay(.3).call(function(){e._girl.setAnimation(0,"rescue_4_3/cogai_run",!0)}).to(1,{x:150,y:-165}).call(function(){e._girl.setAnimation(0,"rescue_4_3/cogai_idle",!0)}).start(),u(this.camera2d[0]).delay(1.3).to(2.5,{position:cc.v3(-260,60,0)}).to(2.5,{position:cc.v3(320,60,0)}).to(1,{position:cc.v3(-20,60,0)}).start(),u(this.lupin).delay(7.5).call(function(){e.playSound(a.DING,!1,.1),e.showOptionContainer(!0)}).start()},t.prototype.runOption1=function(){var e=this;u(this.lupin.node).call(function(){e.lupin.node.scaleX=-.9,e.lupin.setAnimation(0,"rescue_3_3/run_rescue_3_3",!0)}).to(1,{position:cc.v3(-470,-320,0)}).call(function(){e.lupin.setAnimation(0,"rescue_3_1/mc_idle_rescue_3_1",!0)}).delay(.5).call(function(){e.motorbike.active=!1,e.playSound(a.MOTORBIKE_HONK,!1,0),e.lupin.setAnimation(0,"rescue_4_3/mc_run_rescue_4_3",!0)}).delay(1).by(0,{x:-950,y:200}).call(function(){e.playSound(a.MOTORBIKE_HONK,!1,0),e.setTimeScaleAllSpine(.5),e.lupin.setAnimation(0,"rescue_4_3/mc_win_rescue_4_3",!1)}).start(),u(this._girl.node).call(function(){e._girl.node.scaleX=.8,e._girl.setAnimation(0,"rescue_4_3/cogai_run",!0)}).to(1,{position:cc.v3(-290,-330,0)}).call(function(){e._girl.setAnimation(0,"rescue_4_3/cogai_idle",!0)}).delay(.5).call(function(){e._girl.node.active=!1}).start(),u(this.camera2d[0]).to(1,{position:cc.v3(-600,-180,0)}).delay(3.2).call(function(){e.background.scale=1.2,e.camera2d[0].position=cc.v3(0,0,0),e.background.position=cc.v3(0,0,0),e.optionBackground.active=!0,e.playOptionBackground()}).start(),this.lupin.setCompleteListener(function(t){"rescue_4_3/mc_win_rescue_4_3"==t.animation.name&&(e.lupin.setCompleteListener(null),"rescue_4_3/mc_win_rescue_4_3"==t.animation.name&&u(e.lupin.node).delay(6.5).call(function(){cc.Tween.stopAllByTarget(e.optionBackground),e.showSuccess()}).start())})},t.prototype.playOptionBackground=function(){var e=this;this.setTimeScaleAllSpine(1),u(this.optionBackground).repeatForever(u().delay(.25).call(function(){0==e.frame1.active?(e.frame1.active=!0,e.frame2.active=!1):(e.frame1.active=!1,e.frame2.active=!0)}).start()).start()},t.prototype.runOption2=function(){var e=this;u(this.lupin.node).call(function(){e.lupin.setAnimation(0,"rescue_3_3/run_rescue_3_3",!0)}).to(1,{position:cc.v3(240,-290,0)}).call(function(){e.lupin.setAnimation(0,"rescue_3_1/mc_idle_rescue_3_1",!0),e.playSound(a.CAR_DOOR,!1,0)}).start(),u(this._girl.node).call(function(){e._girl.node.scaleX=-.8,e._girl.setAnimation(0,"rescue_4_3/cogai_run",!0)}).to(1,{position:cc.v3(430,-280,0)}).call(function(){e._girl.setAnimation(0,"rescue_4_3/cogai_idle",!0)}).delay(.5).call(function(){u(e.shadow).to(.3,{opacity:255}).call(function(){e.option1Background.active=!0,e.police.setAnimation(0,"rescue_4_3/police_idle",!0)}).to(.3,{opacity:0}).call(function(){e.playSound(a.LAUGH,!1,0)}).start()}).start(),u(this.lupin.node).delay(1).call(function(){e.lupin.setCompleteListener(function(t){"rescue_3_1/mc_idle_rescue_3_1"==t.animation.name&&(e.lupin.setCompleteListener(null),u(e.node).delay(1.5).call(function(){e.showContinue()}).start())})}).start()},c([_(cc.Node)],t.prototype,"optionBackground",void 0),c([_(cc.Node)],t.prototype,"option1Background",void 0),c([_(cc.Node)],t.prototype,"frame1",void 0),c([_(cc.Node)],t.prototype,"frame2",void 0),c([_(cc.Node)],t.prototype,"motorbike",void 0),c([l],t)}(s.default);i.default=p,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}]},{},["Level5_1","Level5_2","Level5_3"]);