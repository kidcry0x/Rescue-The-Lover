window.__require=function t(e,n,i){function o(r,s){if(!n[r]){if(!e[r]){var p=r.split("/");if(p=p[p.length-1],!e[p]){var l="function"==typeof __require&&__require;if(!s&&l)return l(p,!0);if(c)return c(p,!0);throw new Error("Cannot find module '"+r+"'")}r=p}var a=n[r]={exports:{}};e[r][0].call(a.exports,function(t){return o(e[r][1][t]||t)},a,a.exports,t,e,n,i)}return n[r].exports}for(var c="function"==typeof __require&&__require,r=0;r<i.length;r++)o(i[r]);return o}({Level1_1:[function(t,e,n){"use strict";cc._RF.push(e,"9061cHH64xE6YxEW6BfKBzV","Level1_1");var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=this&&this.__decorate||function(t,e,n,i){var o,c=arguments.length,r=c<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(c<3?o(r):c>3?o(e,n,r):o(e,n))||r);return c>3&&r&&Object.defineProperty(e,n,r),r};Object.defineProperty(n,"__esModule",{value:!0});var r,s=t("../../../Scripts/LevelBase"),p=t("../../../Scripts/EffectManager"),l=cc._decorator,a=l.ccclass,u=(l.property,cc.tween);(function(t){t[t.CAR_START=0]="CAR_START",t[t.SCOOTER=1]="SCOOTER"})(r||(r={}));var h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._seenOpening=!1,e.spineDatas=[{bundle:"police",name:"police"},{bundle:"police",name:"police"},{bundle:"assets",name:"assets"}],e}return o(e,t),e.prototype.onEnable=function(){t.prototype.onEnable.call(this),this._gameManager._levelCurrent.level=this.levelCurrent,this._gameManager._beginScene=this.node},e.prototype.initStage=function(){t.prototype.initStage.call(this)},e.prototype.setOpeningStatus=function(){cc.Tween.stopAllByTarget(this.otherSprite[0].node),this.lupin.node.active=!0,this.setLupin(cc.v2(-485,-959),"level_31_1/mc_walking_love",null),this.lupin.setCompleteListener(null),this.lupin.node.scale=.8,this.background.position=cc.v3(-322,776),this.setOtherSpine(this.otherSpine[0],cc.v2(-431,-16),"rescue_1/cogai_idle",null),this.otherSpine[0].node.active=!1,this.setOtherSpine(this.otherSpine[1],cc.v2(-1624,-1022),"rescue_1/boss_idle",null),this.otherSpine[1].node.active=!0,this.setOtherSpine(this.otherSpine[2],cc.v2(345,-475),"level_36_1/truck_stage_start3",null),this.otherSpine[2].node.active=!0,this.otherSprite[0].node.position=cc.v3(0,-1077),this.otherSprite[1].node.active=!1,this.otherSprite[2].node.active=!1},e.prototype.setOpeningAction=function(){var t=this;this.lupin.setMix("level_20_4/mc_become_panic","level_21_1/mc_cry",.3),this.lupin.setCompleteListener(function(e){"level_21_1/mc_cry"===e.animation.name&&(t.lupin.setCompleteListener(null),p.default.hideScene(function(){t.setStatus(),p.default.showScene(),t.setAction()},t.node))}),u(this.otherSprite[0].node).delay(1.8).repeatForever(u().to(0,{position:cc.v3(0,-1077)}).to(8,{position:cc.v3(-2160,-1077)})).start(),u(this.background).to(2,{position:cc.v3(211,776)}).delay(3).call(function(){u(t.otherSpine[1].node).to(1.5,{position:cc.v3(109,-1022)}).start()}).delay(2.5).call(function(){p.default.hideScene(function(){t.setLupin(cc.v2(t.lupin.node.position),"general/run","emotion/fear_1"),t.otherSpine[0].node.active=!0,t.otherSpine[0].setAnimation(0,"rescue_1/cogai_idle",!0),t.otherSpine[1].setAnimation(0,"rescue_1/boss_idle2",!0),cc.Tween.stopAllByTarget(t.otherSprite[0].node),u(t.otherSprite[0].node).repeatForever(u().to(0,{position:cc.v3(0,-1077)}).to(4,{position:cc.v3(-2160,-1077)})).start(),p.default.showScene(),u(t.otherSpine[1].node).delay(2).call(function(){t.lupin.clearTrack(1),t.lupin.setAnimation(0,"level_20_4/mc_become_panic",!0)}).to(1,{position:cc.v3(1097,-1022)}).delay(2).call(function(){cc.Tween.stopAllByTarget(t.otherSprite[0].node),t.lupin.clearTrack(1),t.lupin.setAnimation(0,"level_21_1/mc_cry",!1)}).start()},t.node)}).start()},e.prototype.setStatus=function(){if(!this._seenOpening)return this.setOpeningStatus();this.background.position=cc.v3(531,776),cc.Tween.stopAllByTarget(this.otherSprite[0].node),this.lupin.node.active=!0,this.setLupin(cc.v2(-1373,-980),"general/run","emotion/worry"),this.lupin.node.scale=.8,this.otherSpine[1].node.active=!1,this.otherSprite[0].node.position=cc.v3(0,-1077),this.otherSprite[1].node.position=cc.v3(-519,-1094),this.otherSprite[1].node.active=!0,this.otherSprite[2].node.position=cc.v3(64,-1245),this.otherSprite[2].node.active=!0},e.prototype.setAction=function(){var t=this;if(!this._seenOpening)return this._seenOpening=!0,void this.setOpeningAction();u(this.lupin.node).to(2,{position:cc.v3(-285,-980)}).call(function(){t.setLupin(cc.v2(t.lupin.node.position),"general/stand_thinking","emotion/tired")}).delay(2).call(function(){t.showOptionContainer(!0)}).start(),u(this.background).to(2,{position:cc.v3(169,776)}).start()},e.prototype.runOption1=function(){var t=this;this.setLupin(cc.v2(this.lupin.node),"general/run","emotion/sinister"),u(this.lupin.node).flipX().to(1,{position:cc.v3(-466,-1174)}).call(function(){t.lupin.node.active=!1,t.playSound(r.CAR_START,!1,0)}).start(),u(this.otherSprite[1].node).delay(1).to(1,{position:cc.v3(-167,-1094)},{easing:"cubicInOut"}).call(function(){u(t.otherSprite[0].node).repeat(8,u().to(.5,{position:cc.v3(-2160,-1077)}).set({position:cc.v3(0,-1077)})).start(),u(t.otherSprite[2].node).to(1,{position:cc.v3(-2096,-1245)}).start()}).delay(4).call(function(){t.showSuccess()}).start()},e.prototype.runOption2=function(){var t=this;this.setLupin(cc.v2(this.lupin.node.position),"general/run","emotion/excited"),u(this.lupin.node).to(1,{position:cc.v3(5,-1330)}).call(function(){t.lupin.setAnimation(0,"rescue_1_1/mc_scooter",!0),t.otherSprite[2].node.active=!1,t.playSound(r.SCOOTER,!1,0)}).to(1,{position:cc.v3(396,-1330)},{easing:"cubicInOut"}).delay(1).call(function(){t.lupin.clearTrack(1),t.lupin.setAnimation(0,"rescue_1_1/mc_scooter_lose",!1)}).to(.5,{position:cc.v3(-45,-1330)}).delay(2).call(function(){t.showFail()}).start(),u(this.background).to(2,{position:cc.v3(-427,776)}).call(function(){u(t.otherSprite[0].node).to(1.5,{position:cc.v3(-637,-1077)}).start()}).start()},e.prototype.runOption3=function(){},c([a],e)}(s.default);n.default=h,cc._RF.pop()},{"../../../Scripts/EffectManager":void 0,"../../../Scripts/LevelBase":void 0}]},{},["Level1_1"]);