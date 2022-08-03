window.__require=function t(e,n,i){function o(c,s){if(!n[c]){if(!e[c]){var a=c.split("/");if(a=a[a.length-1],!e[a]){var r="function"==typeof __require&&__require;if(!s&&r)return r(a,!0);if(l)return l(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var p=n[c]={exports:{}};e[c][0].call(p.exports,function(t){return o(e[c][1][t]||t)},p,p.exports,t,e,n,i)}return n[c].exports}for(var l="function"==typeof __require&&__require,c=0;c<i.length;c++)o(i[c]);return o}({Level15_1:[function(t,e,n){"use strict";cc._RF.push(e,"5a4b7my4OtJ5JKyfK1rHBdn","Level15_1");var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=this&&this.__decorate||function(t,e,n,i){var o,l=arguments.length,c=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(l<3?o(c):l>3?o(e,n,c):o(e,n))||c);return l>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c,s=t("../../../Scripts/LevelBase"),a=cc._decorator,r=a.ccclass,p=(a.property,cc.tween);(function(t){t[t.ALARM=0]="ALARM",t[t.BROKEN=1]="BROKEN",t[t.ELECTROCUTE=2]="ELECTROCUTE",t[t.GIGGLE_LUPIN=3]="GIGGLE_LUPIN",t[t.HIT=4]="HIT",t[t.PEEK=5]="PEEK",t[t.QUACK=6]="QUACK",t[t.SNEAK=7]="SNEAK",t[t.SWOOSH=8]="SWOOSH",t[t.THROW=9]="THROW",t[t.WOMAN_GASP=10]="WOMAN_GASP"})(c||(c={}));var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.next="2",e._girlNode=null,e.spineDatas=[{bundle:"lupin",name:"lupin"},{bundle:"police",name:"police"}],e}return o(e,t),e.prototype.onEnable=function(){t.prototype.onEnable.call(this),this._gameManager._levelCurrent.level=this.levelCurrent,this._gameManager._beginScene=this.node},e.prototype.initStage=function(){this._girlNode=this.otherSpine[0].node.parent,t.prototype.initStage.call(this)},e.prototype.setStatus=function(){this.setLupin(cc.v2(-1407,-484),"general/walk","emotion/excited"),this.lupin.setCompleteListener(null),this.otherSpine[0].setSkin("Girl"),this.setGirl(0,cc.v3(-1604,-484),"level_34_1/mc_girl_walking",!0),this.otherSpine[1].setCompleteListener(null),this.background.position=cc.v3(695,0),this.otherSprite[0].node.position=cc.v3(5,35),this.otherSprite[0].node.scale=1,this.otherSprite[1].node.position=cc.v3(-69,14),this.otherSprite[1].node.angle=0,this.otherSprite[2].node.active=!0,this.otherSprite[3].node.opacity=0,this.otherSprite[4].node.active=!1,this.otherSprite[4].node.position=cc.v3(-577,-102),this.otherSprite[5].node.scale=0,cc.Tween.stopAllByTag(201)},e.prototype.setAction=function(){var t=this;this.lupin.setMix("general/walk","general/stand_thinking",.3),p(this.lupin.node).to(3,{position:cc.v3(-743,-484)}).call(function(){t.setLupin(cc.v2(t.lupin.node.position),"general/stand_thinking","emotion/fear_1"),t.setGirl(1,null,"level_35_1/cogai_dongvien",!0),p(t.background).to(2,{position:cc.v3(-391,0)}).to(1,{position:cc.v3(695)}).delay(1).call(function(){t.showOptionContainer(!0)}).start()}).start(),p(this._girlNode).to(3,{position:cc.v3(-941,-484)}).start()},e.prototype.setGirl=function(t,e,n,i){void 0===e&&(e=null),void 0===n&&(n=""),void 0===i&&(i=!0),this.otherSpine[t].node.active=!0,this.otherSpine[1-t].node.active=!1,e&&(this._girlNode.position=e),n&&this.otherSpine[t].setAnimation(0,n,i)},e.prototype.runOption1=function(){var t=this;this.lupin.setMix("general/stand_thinking","level_35_1/mc_usingstaff_1",.3),this.otherSpine[1].setMix("level_35_1/cogai_dongvien","level_35_1/cogai_dongvien2",.3),this.lupin.setCompleteListener(function(e){"level_35_1/mc_usingstaff_1"===e.animation.name&&(t.lupin.setCompleteListener(null),t.lupin.setAnimation(0,"level_35_1/mc_usingstaff_2",!0),t.playSound(c.SNEAK,!1,0),p(t.lupin.node).to(4,{position:cc.v3(6,-411)}).call(function(){t.lupin.setAnimation(0,"level_35_1/mc_usingstaff_3",!1),t.lupin.addAnimation(0,"general/electric_die",!0),t.playSound(c.ELECTROCUTE,!1,.8),t.scheduleOnce(function(){t.showFail()},2)}).start(),p(t.background).to(3.5,{position:cc.v3(-54,0)}).start())}),this.lupin.clearTrack(1),this.lupin.setToSetupPose(),this.lupin.setAnimation(0,"general/stand_thinking",!1),this.lupin.setAnimation(0,"level_35_1/mc_usingstaff_1",!1),this.setGirl(1,null,"level_35_1/cogai_dongvien2",!0),this.playSound(c.PEEK,!1,.5)},e.prototype.runOption2=function(){var t=this;this.setLupin(cc.v2(this.lupin.node.position),"general/walk","emotion/excited"),this.setGirl(1,null,"level_35_1/cogai_dongvien3",!0),this.lupin.setCompleteListener(function(e){"level_35_1/mc_turnoff_electric"===e.animation.name&&(t.setLupin(cc.v2(t.lupin.node.position),"general/stand_thinking","emotion/sinister"),t.playSound(c.ALARM,!0,0),p(t.otherSprite[3].node).tag(201).repeatForever(p().to(.3,{opacity:255}).to(.3,{opacity:100})).start(),t.scheduleOnce(function(){t.lupin.setAnimation(1,"emotion/fear_2",!0),t.setGirl(1,null,"level_35_1/cogai_ngat",!1),t.playSound(c.WOMAN_GASP,!1,0),t.playSound(c.QUACK,!1,1.5)},1))}),this.otherSpine[1].setCompleteListener(function(e){"level_35_1/cogai_ngat"===e.animation.name&&t.scheduleOnce(function(){t.showFail()},1)}),p(this.lupin.node).to(1,{position:cc.v3(-656,-261)}).call(function(){t.lupin.clearTrack(1),t.lupin.setAnimation(0,"level_35_1/mc_turnoff_electric",!1),t.playSound(c.GIGGLE_LUPIN,!1,1.3),t.scheduleOnce(function(){t.otherSprite[0].node.position=cc.v3(2,-28),t.otherSprite[0].node.scale=-1},3)}).start()},e.prototype.runOption3=function(){var t=this;this.lupin.clearTrack(1),this.lupin.setToSetupPose(),this.lupin.setAnimation(0,"level_35_1/mc_throw_rock",!1),this.lupin.setCompleteListener(function(e){"level_35_1/mc_throw_rock"===e.animation.name&&(t.otherSprite[4].node.active=!0,t.playSound(c.THROW,!1,0),p(t.otherSprite[4].node).to(.3,{position:cc.v3(201,360)}).call(function(){t.otherSprite[4].node.active=!1,t.otherSprite[2].node.active=!1,t.playSound(c.HIT,!1,0),t.playSound(c.BROKEN,!1,.3),p(t.otherSprite[5].node).to(.3,{scale:1}).to(.1,{scale:0}).start(),p(t.otherSprite[1].node).to(.3,{position:cc.v3(-56,23),angle:-18}).to(.1,{position:cc.v3(-76,-1),angle:30}).start()}).start(),p(t.background).to(.3,{position:cc.v3(-1,0)}).delay(1).call(function(){t.setLupin(cc.v2(t.lupin.node.position),"general/walk","emotion/excited"),t.setGirl(0,null,"level_34_1/mc_girl_walking",!0),p(t.lupin.node).to(5,{position:cc.v3(939,-484)}).start(),p(t._girlNode).to(5,{position:cc.v3(741,-484)}).call(function(){t.onPass()}).start()}).start())})},l([r],e)}(s.default);n.default=u,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}],Level15_2:[function(t,e,n){"use strict";cc._RF.push(e,"70e543W/PJGoIj0WsTyimMg","Level15_2");var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=this&&this.__decorate||function(t,e,n,i){var o,l=arguments.length,c=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(l<3?o(c):l>3?o(e,n,c):o(e,n))||c);return l>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c,s=t("../../../Scripts/EffectManager"),a=t("../../../Scripts/LevelBase"),r=cc._decorator,p=r.ccclass,u=r.property,_=cc.tween;(function(t){t[t.ALERT=0]="ALERT",t[t.METAL=1]="METAL",t[t.SCREAM_PAIN_2=2]="SCREAM_PAIN_2",t[t.SNIFF=3]="SNIFF",t[t.TV=4]="TV",t[t.VOMIT=5]="VOMIT",t[t.YAY=6]="YAY",t[t.QUACK=7]="QUACK",t[t.SNEAK=8]="SNEAK",t[t.SWOOSH=9]="SWOOSH",t[t.WOMAN_GASP=10]="WOMAN_GASP",t[t.THROW=11]="THROW"})(c||(c={}));var h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.next="3",e.otherMask=[],e._girlNode=null,e.spineDatas=[{bundle:"lupin",name:"lupin"},{bundle:"police",name:"police"},{bundle:"police",name:"police"}],e}return o(e,t),e.prototype.initStage=function(){this._girlNode=this.otherSpine[0].node.parent,t.prototype.initStage.call(this)},e.prototype.setStatus=function(){this.lupin.setMix("general/stand_thinking","general/walk_slow",.3),this.setLupin(cc.v2(-1253,-441),"general/walk","emotion/excited"),this.lupin.setCompleteListener(null),this.lupin.node.scale=.9,this.otherSpine[0].setSkin("Girl"),this.setGirl(0,cc.v3(-1487,-441),"level_34_1/mc_girl_walking",!0),this._girlNode.scale=.9,this.otherSpine[2].setAnimation(0,"level_35_2/police_seat",!0),this.otherSpine[2].setCompleteListener(null),this.background.position=cc.v3(525,0),this.otherMask[0].active=!1},e.prototype.setAction=function(){var t=this;this.lupin.setMix("general/walk","general/stand_thinking",.3),_(this.lupin.node).to(3,{position:cc.v3(-408,-441)}).call(function(){t.setLupin(cc.v2(t.lupin.node.position),"general/stand_thinking","emotion/abc")}).delay(1).call(function(){t.playSound(c.TV,!1,0),_(t.background).to(3,{position:cc.v3(-524,0)}).to(1,{position:cc.v3(524,0)}).delay(1).call(function(){t.showOptionContainer(!0)}).start()}).start(),_(this._girlNode).to(3,{position:cc.v3(-643,-441)}).call(function(){t.setGirl(1,null,"level_35_1/cogai_dongvien",!0)}).start()},e.prototype.setGirl=function(t,e,n,i){void 0===e&&(e=null),void 0===n&&(n=""),void 0===i&&(i=!0),this.otherSpine[t].node.active=!0,this.otherSpine[1-t].node.active=!1,e&&(this._girlNode.position=e),n&&this.otherSpine[t].setAnimation(0,n,i)},e.prototype.runOption1=function(){var t=this;this.lupin.clearTrack(1),this.lupin.setToSetupPose(),this.lupin.setAnimation(0,"general/stand_thinking",!0),this.lupin.setAnimation(0,"general/walk_slow",!0),this.setGirl(1,null,"level_35_1/cogai_dongvien2",!0),this.lupin.setCompleteListener(function(e){"level_35_2/mc_recyclebin"===e.animation.name&&(t.otherSpine[2].setAnimation(0,"level_35_2/police_seat3",!1),cc.audioEngine.stopAllEffects(),t.playSound(c.ALERT,!1,.3))}),this.otherSpine[2].setCompleteListener(function(e){"level_35_2/police_seat3"===e.animation.name&&(t.lupin.addAnimation(0,"level_35_2/mc_recyclebin2",!1),t.lupin.addAnimation(0,"level_35_2/mc_recyclebin3",!1),t.setGirl(1,null,"level_35_1/cogai_ngat",!1),t.playSound(c.METAL,!1,.6),t.playSound(c.WOMAN_GASP,!1,0),t.playSound(c.QUACK,!1,1.5),t.scheduleOnce(function(){t.showContinue()},2))}),this.playSound(c.SNEAK,!1,0),_(this.lupin.node).to(3,{position:cc.v3(-289,-327)}).call(function(){s.default.hideScene(function(){t.otherMask[0].active=!0,t.lupin.timeScale=0,t.lupin.setAnimation(0,"level_35_2/mc_recyclebin",!1),t.background.position=cc.v3(241,0),s.default.showScene(),t.lupin.timeScale=1,t.lupin.setAnimation(0,"level_35_2/mc_recyclebin",!1),t.playSound(c.TV,!1,0)},t.node)}).start()},e.prototype.runOption2=function(){var t=this;this.lupin.clearTrack(1),this.lupin.setToSetupPose(),this.lupin.setAnimation(0,"general/stand_thinking",!0),this.lupin.setAnimation(0,"general/walk_slow",!0),this.setGirl(1,null,"level_35_1/cogai_dongvien2",!0),this.lupin.setCompleteListener(function(e){"level_35_2/mc_socks"===e.animation.name&&(t.otherSpine[2].setAnimation(0,"level_35_2/police_sock",!1),t.otherSpine[2].addAnimation(0,"level_35_2/police_sock2",!0),t.playSound(c.SCREAM_PAIN_2,!1,0),t.setLupin(cc.v2(t.lupin.node.position),"general/stand_thinking","emotion/sinister"),_(t.lupin.node).delay(1).call(function(){t.setLupin(cc.v2(t.lupin.node.position),"general/run","emotion/excited"),t.setGirl(1,null,"level_35_1/cogai_dongvien3",!0)}).flipX().to(1,{position:cc.v3(-334,-441)}).call(function(){t.lupin.setAnimation(0,"general/celebrate_ronaldo2",!1),t.playSound(c.YAY,!1,0)}).delay(1).call(function(){t.lupin.setAnimation(0,"general/run",!0),t.setGirl(0,null,"level_34_3/mc_girl_run",!0),_(t._girlNode).to(3,{position:cc.v3(1146,-441)}).start(),_(t.background).to(3,{position:cc.v3(-418,0)}).start()}).flipX().to(3,{position:cc.v3(1455,-441)}).call(function(){t.onPass()}).start())}),this.playSound(c.SNEAK,!1,0),this.playSound(c.TV,!1,0),_(this.lupin.node).to(3,{position:cc.v3(-289,-327)}).call(function(){t.lupin.clearTrack(1),t.lupin.setAnimation(0,"level_35_2/mc_socks",!1),t.playSound(c.SWOOSH,!1,1.8),t.playSound(c.SNIFF,!1,2.8),t.playSound(c.VOMIT,!1,3.7),t.playSound(c.THROW,!1,6)}).start(),_(this.background).to(3,{position:cc.v3(198,0)}).start()},e.prototype.runOption3=function(){var t=this;this.lupin.clearTrack(1),this.lupin.setToSetupPose(),this.lupin.setAnimation(0,"general/stand_thinking",!0),this.lupin.setAnimation(0,"general/walk_slow",!0),this.setGirl(1,null,"level_35_2/cogai_walkslow",!0),this.playSound(c.SNEAK,!1,0),this.playSound(c.TV,!1,1),_(this.lupin.node).to(8,{position:cc.v3(631,-441)}).start(),_(this._girlNode).to(8,{position:cc.v3(396,-441)}).start(),_(this.background).to(8,{position:cc.v3(-418,0)}).call(function(){t.lupin.node.scaleX=-.9,t._girlNode.scaleX=-.9,t.setLupin(cc.v2(t.lupin.node.position),"general/back","emotion/fear_2"),t.setGirl(1,null,"level_35_1/cogai_ngat",!1),t.playSound(c.WOMAN_GASP,!1,0),t.playSound(c.QUACK,!1,1.5),t.scheduleOnce(function(){t.showContinue()},2)}).start(),this.scheduleOnce(function(){t.otherSpine[2].setAnimation(0,"level_35_2/police_seat4",!1),t.playSound(c.ALERT,!1,0)},7.5)},l([u(cc.Node)],e.prototype,"otherMask",void 0),l([p],e)}(a.default);n.default=h,cc._RF.pop()},{"../../../Scripts/EffectManager":void 0,"../../../Scripts/LevelBase":void 0}],Level15_3:[function(t,e,n){"use strict";cc._RF.push(e,"7c8a7EPCLdEooplWLiRFm9b","Level15_3");var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=this&&this.__decorate||function(t,e,n,i){var o,l=arguments.length,c=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(l<3?o(c):l>3?o(e,n,c):o(e,n))||c);return l>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c,s=t("../../../Scripts/LevelBase"),a=cc._decorator,r=a.ccclass,p=a.property,u=cc.tween;(function(t){t[t.HEAD_BANG=0]="HEAD_BANG",t[t.JUMP=1]="JUMP",t[t.KICK=2]="KICK",t[t.PUNCH=3]="PUNCH",t[t.SMASH=4]="SMASH",t[t.SPIN=5]="SPIN",t[t.QUACK=6]="QUACK",t[t.SWOOSH=7]="SWOOSH",t[t.WOMAN_GASP=8]="WOMAN_GASP",t[t.YAY=9]="YAY",t[t.STRAIN_LUPIN_SHORT=10]="STRAIN_LUPIN_SHORT"})(c||(c={}));var _=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.next="4",e.otherMask=[],e._girlNode=null,e.spineDatas=[{bundle:"lupin",name:"lupin"},{bundle:"police",name:"police"}],e}return o(e,t),e.prototype.initStage=function(){this._girlNode=this.otherSpine[0].node.parent,t.prototype.initStage.call(this)},e.prototype.setStatus=function(){this.setLupin(cc.v2(-1264,-456),"general/walk","emotion/excited"),this.lupin.setCompleteListener(null),this.lupin.node.scaleX=.7,this._girlNode.active=!0,this.otherSpine[0].setSkin("Girl"),this.setGirl(0,cc.v3(-1494,-456),"level_34_1/mc_girl_walking",!0),this.otherSpine[1].node.scaleX=-1,this.otherSpine[1].node.scaleY=1,this.otherSpine[1].setCompleteListener(null),this.background.position=cc.v3(511,0),this.otherSprite[0].node.active=!0,this.otherSprite[1].node.active=!1,this.otherMask[0].active=!1,this.otherMask[1].active=!1},e.prototype.setAction=function(){var t=this;this.lupin.setCompleteListener(function(e){"level_35_3/mc_jump"===e.animation.name&&(t.lupin.setCompleteListener(null),t.setLupin(cc.v2(1383,-397),"general/stand_nervous","emotion/abc"),t.lupin.node.scaleX=-.7,t.lupin.node.scaleY=.7,t.scheduleOnce(function(){t.showOptionContainer(!0)},1))}),u(this.lupin.node).to(7,{position:cc.v3(580,-397)}).call(function(){t.lupin.clearTrack(1),t.lupin.node.scale=.8,t.lupin.setAnimation(0,"level_35_3/mc_jump",!1),t.playSound(c.JUMP,!1,.5)}).start(),u(this._girlNode).to(7,{position:cc.v3(350,-456)}).to(1,{position:cc.v3(612,-456)}).call(function(){t.setGirl(1,null,"level_35_1/cogai_dongvien3",!0)}).start(),u(this.background).delay(2).to(4,{position:cc.v3(-1432,0)}).to(1,{position:cc.v3(-985,0)}).start()},e.prototype.setGirl=function(t,e,n,i){void 0===e&&(e=null),void 0===n&&(n=""),void 0===i&&(i=!0),this.otherSpine[t].node.active=!0,this.otherSpine[1-t].node.active=!1,e&&(this._girlNode.position=e),n&&this.otherSpine[t].setAnimation(0,n,i)},e.prototype.runOption1=function(){var t=this;this.lupin.clearTrack(1),this.lupin.setToSetupPose(),this.lupin.setAnimation(0,"general/stand_nervous",!0),this.lupin.setAnimation(0,"level_35_3/mc_kickwall",!1),this.otherSprite[0].node.active=!1,this.setGirl(1,null,"level_35_1/cogai_ngat",!1),this.playSound(c.WOMAN_GASP,!1,0),this.scheduleOnce(function(){t.setGirl(1,null,"level_35_3/cogai_ngat",!1)},1.1),this.scheduleOnce(function(){t.playSound(c.SWOOSH,!1,0),t.playSound(c.PUNCH,!1,0),t.playSound(c.SMASH,!1,.2),u(t.background).to(.3,{position:cc.v3(-649,0)}).start()},1),this.scheduleOnce(function(){t.showContinue()},3)},e.prototype.runOption2=function(){var t=this;this.setGirl(0,null,"level_34_1/mc_girl_walking",!0),u(this._girlNode).flipX().to(1,{position:cc.v3(490,-456)}).flipX().call(function(){t.otherSprite[1].node.active=!0,t.setGirl(1,null,"level_35_3/cogai_batnhun",!1),t.playSound(c.KICK,!1,.9),t.playSound(c.PUNCH,!1,1.3)}).start(),u(this.background).to(1,{position:cc.v3(-649,0)}).delay(1).to(.3,{position:cc.v3(-985,0)}).repeat(3,u().by(.05,{position:cc.v3(0,3)}).by(.1,{position:cc.v3(0,-6)}).by(.05,{position:cc.v3(0,3)}).start()).call(function(){t.lupin.setAnimation(1,"emotion/fear_1",!0)}).delay(1).call(function(){t.showContinue()}).start()},e.prototype.runOption3=function(){var t=this;this.lupin.clearTrack(1),this.lupin.setToSetupPose(),this.lupin.setCompleteListener(function(e){"level_35_3/mc_throw_rope3"===e.animation.name&&(t.lupin.setCompleteListener(null),t.setGirl(0,null,"level_34_1/mc_girl_walking",!0),u(t._girlNode).to(1,{position:cc.v3(787,-485)}).call(function(){t.setGirl(1,null,"level_35_3/cogai_daythung",!1),t.playSound(c.STRAIN_LUPIN_SHORT,!1,0)}).delay(.5).to(2,{position:cc.v3(974,-115)}).call(function(){t.otherSpine[1].node.scaleX=-.95,t.otherSpine[1].node.scaleY=.95,t.setGirl(1,cc.v3(977,-486),"level_35_3/cogai_leotuong",!1),t.otherMask[0].active=!0,t.otherSprite[0].node.active=!1,t.otherMask[1].active=!1}).start())}),this.otherSpine[1].setCompleteListener(function(e){"level_35_3/cogai_leotuong"===e.animation.name&&(t.lupin.setAnimation(0,"level_19_3/mc_introduce",!0),t.playSound(c.YAY,!1,0),t.scheduleOnce(function(){t.onPass()},2))}),this.lupin.setAnimation(0,"level_35_3/mc_throw_rope",!1),this.lupin.addAnimation(0,"level_35_3/mc_throw_rope3",!0),this.playSound(c.SPIN,!1,.5),this.scheduleOnce(function(){cc.audioEngine.stopAllEffects(),t.playSound(c.SWOOSH,!1,0)},1.7),this.otherMask[1].active=!0},l([p(cc.Node)],e.prototype,"otherMask",void 0),l([r],e)}(s.default);n.default=_,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}],Level15_4:[function(t,e,n){"use strict";cc._RF.push(e,"6d5ebnwBixAXLNsL6hRV2Yz","Level15_4");var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=this&&this.__decorate||function(t,e,n,i){var o,l=arguments.length,c=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(c=(l<3?o(c):l>3?o(e,n,c):o(e,n))||c);return l>3&&c&&Object.defineProperty(e,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c,s=t("../../../Scripts/LevelBase"),a=cc._decorator,r=a.ccclass,p=(a.property,cc.tween);(function(t){t[t.BALLOON=0]="BALLOON",t[t.BALLOON_POP=1]="BALLOON_POP",t[t.COVER=2]="COVER",t[t.DIZZY_1=3]="DIZZY_1",t[t.DOOR_DROP=4]="DOOR_DROP",t[t.DROP=5]="DROP",t[t.EXPLOSION=6]="EXPLOSION",t[t.FALL=7]="FALL",t[t.HELICOPTER=8]="HELICOPTER",t[t.PHONE_TALK=9]="PHONE_TALK",t[t.JUMP=10]="JUMP",t[t.PEEK=11]="PEEK",t[t.QUACK=12]="QUACK",t[t.WOMAN_GASP=13]="WOMAN_GASP",t[t.YAY=14]="YAY"})(c||(c={}));var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._girlNode=null,e.spineDatas=[{bundle:"lupin",name:"lupin"},{bundle:"police",name:"police"},{bundle:"assets",name:"skeleton"}],e}return o(e,t),e.prototype.initStage=function(){this._girlNode=this.otherSpine[0].node.parent,t.prototype.initStage.call(this)},e.prototype.setStatus=function(){this.setLupin(cc.v2(-1801,-470),"general/walk","emotion/worry"),this.lupin.setMix("general/walk","general/stand_nervous",.3),this.lupin.timeScale=1,this.lupin.node.scale=.9,this.lupin.node.active=!0,this.lupin.node.opacity=255,this.otherSpine[0].setSkin("Girl"),this.setGirl(0,cc.v3(-2017,-470),"level_34_1/mc_girl_walking",!0),this._girlNode.active=!0,this._girlNode.scale=.9,this.background.position=cc.v3(1061,0),this.setOtherSpine(this.otherSpine[2],cc.v2(856,1058),"animation1",null),this.otherSpine[2].node.active=!1,this.otherSpine[2].node.scale=1,this.otherSprite[0].node.position=cc.v3(159,-448),this.otherSprite[0].node.active=!0,this.otherSprite[1].node.position=cc.v3(741,-456),this.otherSprite[1].node.active=!0},e.prototype.setAction=function(){var t=this;p(this.lupin.node).to(5,{position:cc.v3(-267,-470)}).call(function(){t.setLupin(cc.v2(t.lupin.node.position),"general/stand_nervous","emotion/tired")}).start(),p(this._girlNode).to(5,{position:cc.v3(-484,-470)}).call(function(){t.setGirl(1,null,"level_35_1/cogai_dongvien",!0)}).start(),p(this.background).delay(2).to(3,{position:cc.v3(300,0)}).to(1,{position:cc.v3(-44,0)}).to(1,{position:cc.v3(300,0)},{easing:"cubicIn"}).delay(1).call(function(){t.showOptionContainer(!0)}).start()},e.prototype.setGirl=function(t,e,n,i){void 0===e&&(e=null),void 0===n&&(n=""),void 0===i&&(i=!0),this.otherSpine[t].node.active=!0,this.otherSpine[1-t].node.active=!1,e&&(this._girlNode.position=e),n&&this.otherSpine[t].setAnimation(0,n,i)},e.prototype.runOption1=function(){var t=this;this.lupin.setMix("general/stand_nervous","level_35_4/mc_phone",.3),this.lupin.setMix("level_35_4/mc_phone","general/stand_thinking",.3),this.lupin.clearTrack(1),this.lupin.setAnimation(0,"level_35_4/mc_phone",!1),this.playSound(c.PHONE_TALK,!1,.7),this.lupin.setCompleteListener(function(e){"level_35_4/mc_phone"===e.animation.name&&(t.lupin.setCompleteListener(null),t.setLupin(cc.v2(t.lupin.node.position),"general/stand_thinking","emotion/excited"),t.setGirl(1,null,"level_35_1/cogai_dongvien3",!0),t.otherSpine[2].node.active=!0,t.playSound(c.HELICOPTER,!0,0),p(t.otherSpine[2].node).to(5,{position:cc.v3(-1256,414),scale:1.5}).flipX().to(5,{position:cc.v3(-1016,-178),scaleX:-3,scaleY:3}).call(function(){t.otherSpine[2].setAnimation(0,"animation2",!0)}).delay(2).call(function(){t.otherSpine[2].setAnimation(0,"animation3",!0),p(t.background).to(4,{position:cc.v3(-1525,0)}).start()}).to(2,{position:cc.v3(144,358),scaleX:-2.5,scaleY:2.5}).to(2,{position:cc.v3(1766,800),scaleX:-1,scaleY:1}).call(function(){t.otherSpine[2].setAnimation(0,"animation5",!1),cc.audioEngine.stopAllEffects(),t.playSound(c.EXPLOSION,!1,0),t.playSound(c.DIZZY_1,!1,.5),t.playSound(c.DOOR_DROP,!1,1.3)}).start(),p(t.background).delay(2).to(5,{position:cc.v3(602,0)}).start(),p(t.lupin.node).delay(9).flipX().call(function(){t.setLupin(cc.v2(t.lupin.node.position),"general/run","emotion/sinister"),t.setGirl(0,null,"level_34_3/mc_girl_run",!0)}).to(3,{position:cc.v3(-1015,-483)}).set({active:!1}).start(),p(t._girlNode).delay(9).flipX().to(2,{position:cc.v3(-1015,-483)}).set({active:!1}).start())}),this.otherSpine[2].setCompleteListener(function(e){"animation5"===e.animation.name&&(t.otherSpine[2].setCompleteListener(null),t.scheduleOnce(function(){t.showContinue()},1))})},e.prototype.runOption2=function(){var t=this;this.setLupin(cc.v2(this.lupin.node.position),"general/walk","emotion/sinister"),this.lupin.setCompleteListener(function(e){"level_35_4/mc_hole_2"===e.animation.name&&(t.setGirl(0,null,"level_34_1/mc_girl_walking",!0),p(t._girlNode).to(1.8,{position:cc.v3(-39,-459)}).call(function(){t.setGirl(1,null,"level_35_4/mc_hole_2",!1),t.playSound(c.JUMP,!1,.5)}).start()),"level_35_4/mc_hole_3"===e.animation.name&&(t.setGirl(1,null,"level_35_4/mc_hole_3",!1),t.setLupin(cc.v2(944,-459),"general/walk",null),t.playSound(c.PEEK,!1,0),p(t.lupin.node).to(1,{position:cc.v3(1264,-459)}).call(function(){t.lupin.setAnimation(0,"level_19_3/mc_introduce",!0),t.playSound(c.YAY,!1,0),t.scheduleOnce(function(){t.showSuccess()},2)}).start())}),this.otherSpine[1].setCompleteListener(function(e){"level_35_4/mc_hole_2"===e.animation.name&&p(t.background).delay(1).to(1,{position:cc.v3(-1002,0)}).call(function(){p(t.otherSprite[1].node).to(.5,{position:cc.v3(1024,-456)}).start(),t.playSound(c.COVER,!1,0)}).delay(1).call(function(){t.lupin.node.scale=.9,t.lupin.node.position=cc.v3(532,-459),t._girlNode.position=cc.v3(532,-459),t.lupin.setAnimation(0,"level_35_4/mc_hole_3",!1),t.playSound(c.PEEK,!1,0)}).start()}),p(this.lupin.node).to(1,{position:cc.v3(-39,-459),scale:1}).call(function(){t.lupin.clearTrack(1),t.lupin.setAnimation(0,"level_35_4/mc_hole_1",!1),t.lupin.addAnimation(0,"level_35_4/mc_hole_2",!1),t.playSound(c.COVER,!1,1),t.playSound(c.JUMP,!1,1.5),t.otherSprite[0].node.active=!1}).start(),p(this.background).to(1,{position:cc.v3(116,0)}).start()},e.prototype.runOption3=function(){var t=this;this.lupin.setMix("level_35_4/mc_balloon2","level_35_4/mc_balloon3",.3),this.lupin.clearTrack(1),this.lupin.setToSetupPose(),this.playSound(c.BALLOON,!1,.8),this.lupin.setCompleteListener(function(e){"level_35_4/mc_balloon"===e.animation.name&&(p(t.lupin.node).to(3,{position:cc.v3(282,106)}).call(function(){t.lupin.setAnimation(0,"level_35_4/mc_balloon4",!1),t.playSound(c.BALLOON_POP,!1,0)}).start(),p(t.background).to(3,{position:cc.v3(-172,0)}).to(.5,{position:cc.v3(369)}).start()),"level_35_4/mc_balloon4"===e.animation.name&&(t.playSound(c.JUMP,!1,0),p(t.lupin.node).to(.3,{position:cc.v3(-65,-483)}).call(function(){t.lupin.setAnimation(0,"level_37_1/lv37_1_option2_boy",!1),t.lupin.timeScale=0,t.setGirl(1,null,"level_35_1/cogai_ngat",!1),t.playSound(c.DROP,!1,0),t.playSound(c.WOMAN_GASP,!1,0),t.playSound(c.QUACK,!1,1.5),t.scheduleOnce(function(){t.showContinue()},2)}).start())}),this.lupin.setAnimation(0,"general/stand_nervous",!0),this.lupin.setAnimation(0,"level_35_4/mc_balloon",!1),this.lupin.addAnimation(0,"level_35_4/mc_balloon2",!1),this.lupin.addAnimation(0,"level_35_4/mc_balloon3",!0),this.setGirl(1,null,"level_35_1/cogai_dongvien3",!0)},l([r],e)}(s.default);n.default=u,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}]},{},["Level15_1","Level15_2","Level15_3","Level15_4"]);