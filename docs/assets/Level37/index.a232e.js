window.__require=function e(t,n,i){function o(a,s){if(!n[a]){if(!t[a]){var c=a.split("/");if(c=c[c.length-1],!t[c]){var r="function"==typeof __require&&__require;if(!s&&r)return r(c,!0);if(l)return l(c,!0);throw new Error("Cannot find module '"+a+"'")}a=c}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){return o(t[a][1][e]||e)},u,u.exports,e,t,n,i)}return n[a].exports}for(var l="function"==typeof __require&&__require,a=0;a<i.length;a++)o(i[a]);return o}({Level37_1:[function(e,t,n){"use strict";cc._RF.push(t,"fd7f6D1uKZGaprDyGBGTE16","Level37_1");var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=this&&this.__decorate||function(e,t,n,i){var o,l=arguments.length,a=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(l<3?o(a):l>3?o(t,n,a):o(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(n,"__esModule",{value:!0});var a,s=e("../../../Scripts/LevelBase"),c=cc._decorator,r=c.ccclass,u=(c.property,cc.tween);(function(e){e[e.BRAWL=0]="BRAWL",e[e.CROCODILE=1]="CROCODILE",e[e.DOOR_BANG=2]="DOOR_BANG",e[e.DOOR_SLICE_2=3]="DOOR_SLICE_2",e[e.GUN_SHIELD=4]="GUN_SHIELD",e[e.KEY=5]="KEY",e[e.WHISTLE=6]="WHISTLE"})(a||(a={}));var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.next="2",t.adsText="SAVE HER",t.lupinSkeletonName="lupin2",t.spineDatas=[{bundle:"animal",name:"crocodile"}],t}return o(t,e),t.prototype.onEnable=function(){e.prototype.onEnable.call(this),this._gameManager._levelCurrent.level=this.levelCurrent,this._gameManager._beginScene=this.node},t.prototype.initStage=function(){e.prototype.initStage.call(this),this.lupin.setSkin("Girl")},t.prototype.setStatus=function(){this._crocodile=this.otherSpine[0],this._door=this.otherSprite[0],this.setLupin(cc.v2(-700,-410),"general/walk","emotion/whistle"),this._door.node.position=cc.v3(-585,-230),this.setOtherSpine(this._crocodile,cc.v2(1e3,-410),"run",null),this.lupin.setMix("general/walk","general/stand_nervous",.3)},t.prototype.setAction=function(){var e=this;this.playSound(a.WHISTLE,!1,0),u(this.lupin.node).by(3,{position:cc.v3(400,0)}).call(function(){e.lupin.setAnimation(0,"general/stand_nervous",!0),e.playSound(a.DOOR_SLICE_2,!1,0),u(e._door.node).to(1,{position:cc.v3(-470,-60)},{easing:"cubicIn"}).call(function(){e.lupin.node.scaleX=-1,e.lupin.setAnimation(1,"emotion/fear_1",!0),e.playSound(a.CROCODILE,!0,0),u(e._crocodile.node).by(3,{position:cc.v3(-485,0)}).call(function(){e._crocodile.setAnimation(0,"angry",!0)}).delay(1).call(function(){e.showOptionContainer(!0)}).start()}).delay(1).call(function(){e.lupin.node.scaleX=1,e.lupin.setAnimation(1,"emotion/fear_2",!0)}).start()}).start()},t.prototype.runOption1=function(){var e=this;cc.audioEngine.stopAllEffects(),this.lupin.setMix("level_17/shoot_gun","general/back",.3),this._crocodile.setMix("run","angry",.3),this._crocodile.setMix("angry","using_shield",.3),this._crocodile.setMix("using_shield","angry",.3),this.lupin.setAnimation(1,"emotion/sinister",!0),u(this.lupin.node).delay(2).call(function(){e.lupin.timeScale=1.5,e._crocodile.timeScale=2,e.playSound(a.GUN_SHIELD,!0,0),e.playSound(a.GUN_SHIELD,!0,.3),e.playSound(a.GUN_SHIELD,!0,.6),e.lupin.setAnimation(0,"level_17/shoot_gun",!0),e._crocodile.setAnimation(0,"using_shield",!1),e._crocodile.setCompleteListener(function(t){"using_shield"==t.animation.name&&(e._crocodile.setCompleteListener(null),e._crocodile.timeScale=1.5)}),e._crocodile.addAnimation(0,"using_shield2",!0)}).delay(5).call(function(){cc.audioEngine.stopAllEffects(),e.playSound(a.CROCODILE,!1,0),e.lupin.timeScale=1,e.lupin.setAnimation(0,"general/back",!1),e.lupin.setAnimation(1,"emotion/fear_2",!0),e._crocodile.setAnimation(0,"angry",!0)}).delay(1).call(function(){e.showFail()}).start()},t.prototype.runOption2=function(){var e=this;this._crocodile.setMix("angry","using_key",.3),this.lupin.node.scaleX=-1,this.lupin.timeScale=2,this.playSound(a.DOOR_BANG,!0,0),this.playSound(a.DOOR_BANG,!0,.4),this.lupin.setAnimation(0,"level_17/hand_door",!0),this.lupin.setAnimation(1,"emotion/fear_1",!0),u(this._crocodile.node).delay(3).call(function(){var t=0;e.playSound(a.KEY,!1,0),e._crocodile.setAnimation(0,"using_key",!0),e._crocodile.setCompleteListener(function(n){"using_key"==n.animation.name&&5==++t&&(e._crocodile.setCompleteListener(null),e.lupin.node.scaleX=1,e.lupin.timeScale=1,cc.audioEngine.stopAllEffects(),e.lupin.setAnimation(0,"general/stand_nervous",!0),e.lupin.setAnimation(1,"emotion/fear_2",!0),u(e.node).delay(1).call(function(){e.showFail()}).start())})}).start()},t.prototype.runOption3=function(){var e=this;this.lupin.setMix("general/stand_nervous","general/stand_ready",.3),this.lupin.setMix("general/stand_ready","general/run",.3),this.lupin.setAnimation(1,"emotion/angry",!0),this.lupin.setAnimation(0,"general/stand_ready",!0),u(this.lupin.node).delay(1.5).call(function(){e.lupin.setAnimation(0,"general/run",!0),u(e.lupin.node).to(.75,{position:cc.v3(50,-410)}).call(function(){e._crocodile.node.active=!1,e.lupin.setAnimation(1,"emotion/worry",!1),e.lupin.clearTrack(1),e.lupin.node.scale=1.5,cc.audioEngine.stopAllEffects(),e.playSound(a.BRAWL,!1,0),e.lupin.setAnimation(0,"fx/fightcloud2",!0),e.lupin.node.position=cc.v3(e.lupin.node.x+150,e.lupin.node.y),u(e.node).delay(3.5).call(function(){e._crocodile.node.active=!0,e._crocodile.setAnimation(0,"strangled",!0),e._crocodile.node.position=cc.v3(300,-410),e.lupin.node.scale=1,e.lupin.setAnimation(0,"level_17/strangle",!0),e.lupin.node.position=cc.v3(420,-340)}).delay(2).call(function(){e.onPass()}).start()}).start()}).start()},l([r],t)}(s.default);n.default=p,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}],Level37_2:[function(e,t,n){"use strict";cc._RF.push(t,"682c6Nu0rdP/648nc34gzgF","Level37_2");var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=this&&this.__decorate||function(e,t,n,i){var o,l=arguments.length,a=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(l<3?o(a):l>3?o(t,n,a):o(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(n,"__esModule",{value:!0});var a,s=e("../../../Scripts/LevelBase"),c=cc._decorator,r=c.ccclass,u=(c.property,cc.tween);(function(e){e[e.THEME=0]="THEME",e[e.HIT=1]="HIT",e[e.THROW=2]="THROW",e[e.SPARK=3]="SPARK",e[e.EXPLOSION=4]="EXPLOSION"})(a||(a={}));var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.next="3",t.adsText="SAVE HER",t.lupinSkeletonName="lupin2",t.spineDatas=[{bundle:"animal",name:"crocodile"},{bundle:"lupin",name:"lupin"}],t}return o(t,e),t.prototype.initStage=function(){e.prototype.initStage.call(this),this.lupin.setSkin("Girl")},t.prototype.setStatus=function(){this._background=this.otherSprite[0],this._crocodile=this.otherSpine[0],this._bang=this.otherSpine[1],this._background.node.x=3650,this.setLupin(cc.v2(-800,-400),"general/run","emotion/worry"),this.setOtherSpine(this._crocodile,cc.v2(-955,-400),"run","run"),this._bang.node.active=!1,this._crocodile.clearTrack(1)},t.prototype.setAction=function(){var e=this;this.playSound(a.THEME,!0,0),u(this._background.node).repeatForever(u().by(4,{position:cc.v3(-3380,0)}).call(function(){e._background.node.x=3650})).start(),u(this.lupin.node).delay(1).to(4,{position:cc.v3(250,-410)}).call(function(){e.lupin.setAnimation(1,"emotion/fear_1",!0),u(e._crocodile.node).to(2,{position:cc.v3(-500,-400)}).call(function(){e.showOptionContainer(!0)}).start()}).start()},t.prototype.runOption1=function(){var e=this;this.lupin.setMix("level_17/throw_grenade","general/run",.3),this.playSound(a.THROW,!1,.5),this.lupin.setAnimation(0,"level_17/throw_grenade",!1),this.lupin.setCompleteListener(function(t){"level_17/throw_grenade"==t.animation.name&&(e.lupin.setCompleteListener(null),e.lupin.setAnimation(0,"general/run",!0),e._bang.node.active=!0,e._bang.timeScale=2,e.playSound(a.EXPLOSION,!1,0),e._bang.setAnimation(0,"fx/explosive2",!1),e._bang.setCompleteListener(function(t){"fx/explosive2"==t.animation.name&&(e._bang.setCompleteListener(null),e._bang.node.active=!1,e._crocodile.setAnimation(1,"angry",!0),u(e.node).delay(1).call(function(){cc.Tween.stopAllByTarget(e._background.node),e.showContinue()}).start())}))})},t.prototype.runOption2=function(){var e=this;this.lupin.setMix("level_17/throw_rock","general/run",.3),this.lupin.timeScale=1.5,this.playSound(a.THROW,!1,.5),this.lupin.setAnimation(0,"level_17/throw_rock",!1),u(this._crocodile.node).delay(.5).call(function(){e._crocodile.setAnimation(1,"rock_head",!1),e._crocodile.addAnimation(1,"angry",!0)}).start(),this.lupin.setCompleteListener(function(t){"level_17/throw_rock"==t.animation.name&&(e.lupin.setCompleteListener(null),e.lupin.timeScale=1,e.lupin.setAnimation(0,"general/run",!0),u(e.node).delay(4).call(function(){cc.Tween.stopAllByTarget(e._background.node),e.showContinue()}).start())})},t.prototype.runOption3=function(){var e=this;this.lupin.setMix("level_17/throw_glasses","general/run",.3),this.playSound(a.THROW,!1,.5),this.lupin.setAnimation(0,"level_17/throw_glasses",!1),this.lupin.setCompleteListener(function(t){"level_17/throw_glasses"==t.animation.name&&(e.lupin.setCompleteListener(null),e.lupin.setAnimation(0,"general/run",!0))}),u(this._crocodile.node).delay(.5).call(function(){e._crocodile.setAnimation(1,"wear_glasses",!1),e._crocodile.setCompleteListener(function(t){"wear_glasses"==t.animation.name&&(e._crocodile.setCompleteListener(null),e.lupin.setAnimation(1,"emotion/happy_2",!0),u(e.lupin.node).by(2,{position:cc.v3(500,0)}).call(function(){e._crocodile.setAnimation(1,"wear_glasses3",!0),e._crocodile.setAnimation(0,"wear_glasses3",!0),cc.Tween.stopAllByTarget(e._background.node),u(e.shadow).delay(1).to(.5,{opacity:255}).call(function(){e.playSound(a.SPARK,!1,0),e._crocodile.setAnimation(1,"wear_glasses2",!0),e._crocodile.setAnimation(0,"wear_glasses2",!0)}).to(.5,{opacity:0}).delay(4).call(function(){e.onPass()}).start()}).start())})}).start()},l([r],t)}(s.default);n.default=p,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}],Level37_3:[function(e,t,n){"use strict";cc._RF.push(t,"a0d31L2xZlFtafazuc3OL0S","Level37_3");var i,o=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=this&&this.__decorate||function(e,t,n,i){var o,l=arguments.length,a=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(l<3?o(a):l>3?o(t,n,a):o(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(n,"__esModule",{value:!0});var a,s=e("../../../Scripts/LevelBase"),c=cc._decorator,r=c.ccclass,u=(c.property,cc.tween);(function(e){e[e.DOOR_DROP=0]="DOOR_DROP",e[e.HEAD_BANG=1]="HEAD_BANG",e[e.HEY=2]="HEY",e[e.STRAIN=3]="STRAIN",e[e.THUD=4]="THUD"})(a||(a={}));var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.adsText="SAVE HER",t.lupinSkeletonName="lupin2",t.spineDatas=[{bundle:"animal",name:"Shark"},{bundle:"assets",name:"assets"}],t}return o(t,e),t.prototype.initStage=function(){e.prototype.initStage.call(this),this.lupin.setSkin("Girl")},t.prototype.setStatus=function(){this._shark=this.otherSpine[0],this._electricMachine=this.otherSpine[1],this._hammer=this.otherSprite[1],this._crack=this.otherSprite[0],this.setLupin(cc.v2(-1400,-420),"general/run","emotion/fear_1"),this._electricMachine.timeScale=0,this._electricMachine.node.scaleX=-1,this._hammer.node.active=!0,this._electricMachine.node.position=cc.v3(485,-160),this.camera2d[0].position=cc.v3(0,0),this.background.x=1080,this._shark.node.angle=30,this._shark.node.position=cc.v3(100,-1e3),this._electricMachine.setAnimation(0,"level_17/generator",!0),this.lupin.setMix("general/run","general/stand_thinking",.25),this._shark.setAnimation(0,"shark_attach",!0),this._shark.setCompleteListener(null)},t.prototype.setAction=function(){var e=this;cc.audioEngine.stopAllEffects(),this.unschedule(this._headBang),this.playSound(a.THUD,!1,0),this._headBang=function(){this.playSound(a.THUD,!1,0)},this.schedule(this._headBang,1.2),u(this._crack.node).repeatForever(u().to(.3,{scale:1.2}).to(.3,{scale:1}).delay(.6)).start(),u(this.lupin.node).by(3,{position:cc.v3(1350,0)},{easing:"easeInOutQuad"}).call(function(){e.lupin.setAnimation(0,"general/stand_thinking",!0),e.lupin.setAnimation(1,"emotion/worry",!0)}).start(),u(this.camera2d[0]).by(1,{position:cc.v3(100,0)}).call(function(){u(e.background).repeatForever(u().by(.15,{position:cc.v3(20,20)}).by(.15,{position:cc.v3(-20,-20)})).start()}).by(1,{position:cc.v3(1300,0)}).delay(2).call(function(){e.showOptionContainer(!0)}).start()},t.prototype.runOption1=function(){var e=this;this._shark.setMix("shark_attach","swim",.3),this.lupin.setAnimation(1,"emotion/sinister",!0),u(this.shadow).delay(1.5).to(.5,{opacity:255}).call(function(){var t=0;e._hammer.node.active=!1,e.lupin.node.y=-350,e.playSound(a.DOOR_DROP,!0,0),e.lupin.setAnimation(0,"level_17/use_hammer",!0),e.lupin.setAnimation(1,"emotion/angry",!0),e.lupin.timeScale=2.1,e.lupin.setCompleteListener(function(n){"level_17/use_hammer"==n.animation.name&&5==++t&&(e.lupin.timeScale=1,e.lupin.setCompleteListener(null),cc.Tween.stopAll(),e._shark.node.angle=0,e._shark.setAnimation(0,"swim",!0),e.lupin.setAnimation(1,"emotion/excited",!0),e.lupin.setAnimation(0,"general/win",!0),cc.audioEngine.stopAllEffects(),e.unschedule(e._headBang),u(e._shark.node).by(3,{position:cc.v3(1800,0)}).call(function(){e.showSuccess()}).start())})}).to(.5,{opacity:0}).start()},t.prototype.runOption2=function(){var e=this;this.lupin.setMix("general/stand_thinking","general/walk",.3),this.lupin.setMix("general/walk","level_17/push",.3),this.lupin.setMix("level_17/push","general/stand_thinking",.3),this.lupin.setAnimation(1,"emotion/sinister",!0);var t=null;this._shark.setCompleteListener(function(e){"shark_attach"===e.animation.name&&t&&t()}),u(this.lupin.node).delay(1.5).call(function(){e.lupin.setAnimation(0,"general/walk",!0)}).to(1,{position:cc.v3(0,-165)}).call(function(){e.lupin.setAnimation(0,"level_17/push",!0),e.lupin.setAnimation(1,"emotion/angry",!1),e.lupin.setCompleteListener(function(n){"level_17/push"==n.animation.name&&(e.lupin.setCompleteListener(null),u(e.lupin.node).to(2,{position:cc.v3(83,-378)}).start(),u(e._electricMachine.node).to(2,{position:cc.v3(555,-375)}).call(function(){t=function(){t=null,e.scheduleOnce(function(){e._electricMachine.timeScale=.8},.5)},u(e.lupin.node).call(function(){e.lupin.setAnimation(0,"general/stand_thinking",!1),e.lupin.setAnimation(1,"emotion/abc",!0)}).delay(2).call(function(){e.lupin.setAnimation(1,"emotion/worry",!0)}).delay(2).call(function(){t=function(){t=null,e.scheduleOnce(function(){e.playSound(a.DOOR_DROP,!1,0),e.unschedule(e._headBang),e.lupin.setAnimation(1,"emotion/fear_2",!0),e._electricMachine.setAnimation(0,"level_17/generator2",!1)},.5)}}).delay(2).call(function(){cc.Tween.stopAll(),e.showContinue()}).start()}).delay(4).call(function(){}).start())})}).start()},t.prototype.runOption3=function(){var e=this;this.lupin.setMix("level_17/muscle","level_17/push_down",.3),this.lupin.setAnimation(1,"emotion/angry",!0),u(this.lupin.node).delay(1.5).call(function(){e.lupin.setAnimation(0,"general/walk",!0)}).to(1.5,{position:cc.v3(300,-330)}).call(function(){e.lupin.setAnimation(0,"level_17/muscle",!1),e.lupin.setCompleteListener(function(t){"level_17/muscle"==t.animation.name&&(e.lupin.setCompleteListener(null),e.playSound(a.STRAIN,!1,0),e.lupin.setAnimation(0,"level_17/push_down",!1),e.lupin.setCompleteListener(function(t){"level_17/push_down"==t.animation.name&&(e.lupin.setCompleteListener(null),cc.Tween.stopAllByTarget(e._crack.node),u(e._crack.node).to(1,{scale:1.5}).delay(2).call(function(){e.lupin.setAnimation(1,"emotion/fear_2",!0)}).delay(2).call(function(){e.unschedule(e._headBang),cc.Tween.stopAll(),e.showContinue()}).start())}))})}).start()},l([r],t)}(s.default);n.default=p,cc._RF.pop()},{"../../../Scripts/LevelBase":void 0}]},{},["Level37_1","Level37_2","Level37_3"]);