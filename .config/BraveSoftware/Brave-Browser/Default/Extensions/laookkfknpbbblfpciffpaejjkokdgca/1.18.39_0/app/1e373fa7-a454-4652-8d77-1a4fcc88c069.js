var fn_addin=function(p,g,t){var e=e||{};e.styles=e.styles||{},e.commands=e.commands||{},e.dependencies=t||e.dependencies||{},e.styles.style=function(){},e.views=e.views||{},e.collect=e.collect||{},e.models=e.models||{},e.templates=e.templates||{},e.info={addin:"1e373fa7-a454-4652-8d77-1a4fcc88c069",id:"settings_balance",dependencies:["settings"],commands:["settings.panels.balance"]},p.console.log(p.elapsed()+": "+e.info.id+" started"),e.templates=e.templates||{},e.templates.main=Handlebars.template({1:function(t,e,n,a){var s,o,i=e.helperMissing,l="function",c=this.escapeExpression;return(null!=(s=e.if.call(t,a&&a.first,{name:"if",hash:{},fn:this.program(2,a,0),inverse:this.program(4,a,0),data:a}))?s:"")+'\t\t\t\t\t<span class="toggle-option balance-shortcut" data-shortcut="'+c(typeof(o=null!=(o=e.label||(null!=t?t.label:t))?o:i)==l?o.call(t,{name:"label",hash:{},data:a}):o)+'">'+c(typeof(o=null!=(o=e.displayLabel||(null!=t?t.displayLabel:t))?o:i)==l?o.call(t,{name:"displayLabel",hash:{},data:a}):o)+"</span>\n"},2:function(t,e,n,a){return'\t\t\t\t\t<span class="toggle-divider"></span>\n'},4:function(t,e,n,a){return'\t\t\t\t\t<span class="toggle-divider">|</span>\n'},6:function(t,e,n,a){return"\t\t\t\t\t\t\t\t<option>00</option>\n\t\t\t\t\t\t\t\t<option>01</option>\n\t\t\t\t\t\t\t\t<option>02</option>\n\t\t\t\t\t\t\t\t<option>03</option>\n\t\t\t\t\t\t\t\t<option>04</option>\n\t\t\t\t\t\t\t\t<option>05</option>\n\t\t\t\t\t\t\t\t<option>06</option>\n\t\t\t\t\t\t\t\t<option>07</option>\n\t\t\t\t\t\t\t\t<option>08</option>\n\t\t\t\t\t\t\t\t<option>09</option>\n\t\t\t\t\t\t\t\t<option>10</option>\n\t\t\t\t\t\t\t\t<option>11</option>\n\t\t\t\t\t\t\t\t<option>12</option>\n\t\t\t\t\t\t\t\t<option>13</option>\n\t\t\t\t\t\t\t\t<option>14</option>\n\t\t\t\t\t\t\t\t<option>15</option>\n\t\t\t\t\t\t\t\t<option>16</option>\n\t\t\t\t\t\t\t\t<option>17</option>\n\t\t\t\t\t\t\t\t<option>18</option>\n\t\t\t\t\t\t\t\t<option>19</option>\n\t\t\t\t\t\t\t\t<option>20</option>\n\t\t\t\t\t\t\t\t<option>21</option>\n\t\t\t\t\t\t\t\t<option>22</option>\n\t\t\t\t\t\t\t\t<option>23</option>\n"},8:function(t,e,n,a){return"\t\t\t\t\t\t\t\t<option>12</option>\n\t\t\t\t\t\t\t\t<option>1</option>\n\t\t\t\t\t\t\t\t<option>2</option>\n\t\t\t\t\t\t\t\t<option>3</option>\n\t\t\t\t\t\t\t\t<option>4</option>\n\t\t\t\t\t\t\t\t<option>5</option>\n\t\t\t\t\t\t\t\t<option>6</option>\n\t\t\t\t\t\t\t\t<option>7</option>\n\t\t\t\t\t\t\t\t<option>8</option>\n\t\t\t\t\t\t\t\t<option>9</option>\n\t\t\t\t\t\t\t\t<option>10</option>\n\t\t\t\t\t\t\t\t<option>11</option>\n"},10:function(t,e,n,a){return" &nbsp; "},12:function(t,e,n,a){return'\n\t\t\t\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t\t\t\t<select class="select-time-period balance-time" data-time="noon" data-side="start">\n\t\t\t\t\t\t\t\t\t<option selected>AM</option>\n\t\t\t\t\t\t\t\t\t<option>PM</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n'},14:function(t,e,n,a){return'\n\t\t\t\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t\t\t\t<select class="select-time-period balance-time" data-time="noon" data-side="end">\n\t\t\t\t\t\t\t\t\t<option selected>AM</option>\n\t\t\t\t\t\t\t\t\t<option>PM</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n'},16:function(t,e,n,a){return'\t\t\t\t\t<li class="slide-toggle has-toggle balance-option on" data-option="balanceNotes">\n\t\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t\t<span class="setting-name">Hide Notes</span>\n\t\t\t\t\t</li>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(t,e,n,a){var s,o=this.lambda,i=this.escapeExpression;return'<h3>Balance</h3>\n<p class="description">Balance your day with periods of uptime and downtime</p>\n<ul class="settings-list options-list">\n\t<li class="slide-toggle has-toggle balance-mode on">\n\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t<span class="setting-name">Enable Balance mode</span>\n\t\t<span class="option-message">Hide productivity features during downtime</span>\n\t</li>\n</ul>\n\n\n\n<h4>Uptime Schedule</h4>\n<p class="subdescription">Times when productivity features are active</p>\n<ul class="settings-list options-list shortcut-list">\n\t<li class="slide-toggle has-toggle custom-time-toggle">\n\t\t<div class="balance-time-wrapper">\n\t\t\t<span class="setting-name"><span>Hours of</span> <span>the day</span></span>\n\n\t\t\t<span class="toggle-options">\n'+(null!=(s=e.each.call(t,null!=t?t.shortcuts:t,{name:"each",hash:{},fn:this.program(1,a,0),inverse:this.noop,data:a}))?s:"")+'\t\t\t\t<span class="toggle-divider">|</span>\n\t\t\t\t<span class="toggle-option toggle-custom time-custom">Custom</span>\n\t\t\t</span>\n\t\t</div>\n\t\t<ul class="toggle-options toggle-options-custom toggle-options-multi" data-custom="Time">\n\t\t\t<li>\n\t\t\t\t<span class="subsetting-name">Start time</span>\n\n\t\t\t\t\t<span class="setting-dropdown">\n\t\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t\t<select class="balance-time" data-time="hour" data-side="start">\n'+(null!=(s=e.if.call(t,null!=t?t.hour24:t,{name:"if",hash:{},fn:this.program(6,a,0),inverse:this.program(8,a,0),data:a}))?s:"")+'\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\x3c!--\n\n\t\t\t\t\t--\x3e<span class="time-divider">:</span>\x3c!--\n\n\t\t\t\t\t--\x3e<div class="select-wrapper">\n\t\t\t\t\t\t<select class="balance-time" data-time="minute" data-side="start">\n\t\t\t\t\t\t\t<option selected>00</option>\n\t\t\t\t\t\t\t<option>15</option>\n\t\t\t\t\t\t\t<option>30</option>\n\t\t\t\t\t\t\t<option>45</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t'+(null!=(s=e.if.call(t,null!=t?t.hour24:t,{name:"if",hash:{},fn:this.program(10,a,0),inverse:this.program(12,a,0),data:a}))?s:"")+'\t\t\t\t\t</span>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<span class="subsetting-name">End time</span>\n\n\t\t\t\t\t<span class="setting-dropdown">\n\t\t\t\t\t<div class="select-wrapper">\n\t\t\t\t\t\t<select class="balance-time" data-time="hour" data-side="end">\n'+(null!=(s=e.if.call(t,null!=t?t.hour24:t,{name:"if",hash:{},fn:this.program(6,a,0),inverse:this.program(8,a,0),data:a}))?s:"")+'\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<span class="time-divider" style="margin: 0 0 0 -4px;">:</span>\x3c!--\n\n\t\t\t\t\t--\x3e<div class="select-wrapper">\n\t\t\t\t\t\t<select class="balance-time" data-time="minute" data-side="end">\n\t\t\t\t\t\t\t<option selected>00</option>\n\t\t\t\t\t\t\t<option>15</option>\n\t\t\t\t\t\t\t<option>30</option>\n\t\t\t\t\t\t\t<option>45</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t'+(null!=(s=e.if.call(t,null!=t?t.hour24:t,{name:"if",hash:{},fn:this.program(10,a,0),inverse:this.program(14,a,0),data:a}))?s:"")+'\t\t\t\t\t</span>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n\t<li class="slide-toggle has-toggle custom-days-toggle">\n\t\t<span class="setting-name">Days of the week</span>\n\n\t\t<span class="toggle-options">\n\t\t\t<span class="toggle-option days-shortcut" data-days="1,2,3,4,5">Weekdays</span>\n\t\t\t<span class="toggle-divider">|</span>\n\t\t\t<span class="toggle-option days-shortcut" data-days="0,1,2,3,4,5,6">Every day</span>\n\t\t\t<span class="toggle-divider">|</span>\n\t\t\t<span class="toggle-option toggle-custom days-custom">Custom</span>\n\t\t</span>\n\n\n\t\t<ul class="toggle-options toggle-options-custom toggle-options-multi" data-custom="Days">\n\t\t\t<li>\n\t\t\t\t<span class="subsetting-name">Days Active</span>\n\n\t\t\t\t<span class="toggle-options">\n\t\t\t\t\t<span class="toggle-option day-toggle" data-day="0">S</span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="1">M</span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="2">T</span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="3">W</span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="4">T</span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle active" data-day="5">F</span>\n\t\t\t\t\t\t<span class="toggle-option day-toggle" data-day="6">S</span>\n\t\t\t\t</span>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n</ul>\n\n\n\n<div class="show-on-balance">\n\t<h4 class="button-advanced">Downtime Options<i class="icon icon-angle-down"></i></h4>\n\t<p class="subdescription">Productivity features to hide during rest periods</p>\n\t<div class="wrapper-advanced">\n\t\t\t<ul class="settings-list options-list balance-rest-list">\n\t\t\t\t<li class="slide-toggle has-toggle balance-option on" data-option="balanceClock">\n\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t<span class="setting-name">Hide Clock</span>\n\t\t\t\t</li>\n\t\t\t\t<li class="slide-toggle has-toggle balance-option on" data-option="balanceFocus">\n\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t<span class="setting-name">Hide Focus</span>\n\t\t\t\t</li>\n\t\t\t\t<li class="slide-toggle has-toggle balance-option on" data-option="balanceTodo">\n\t\t\t\t\t<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg></span>\n\t\t\t\t\t<span class="setting-name">Hide Todo</span>\n\t\t\t\t</li>\n'+(null!=(s=e.if.call(t,null!=t?t.plusEnabled:t,{name:"if",hash:{},fn:this.program(16,a,0),inverse:this.noop,data:a}))?s:"")+'\t\t\t</ul>\n\t</div>\n</div>\n\n\n<div class="balance-quote">&ldquo;'+i(o(null!=(s=null!=t?t.currentQuote:t)?s.body:s,t))+'&rdquo;<span class="balance-quote-source">– '+i(o(null!=(s=null!=t?t.currentQuote:t)?s.source:s,t))+"</span></div>\n"},useData:!0}),e.styles=e.styles||{},e.styles.style=function(){var t=document.createElement("style");t.type="text/css",t.innerHTML=".settings .balance-time-wrapper{display:flex;justify-content:space-between;align-items:baseline}.settings .balance-time-wrapper .setting-name span{white-space:pre}.settings .balance-time-wrapper .toggle-options{margin-top:0;flex:1 0 auto;float:none}select.balance-time{opacity:.8}select.balance-time:hover{opacity:1}.settings-balance,.settings-balance .toggle-options{transition:all .2s ease}.toggle-options-custom.animating{transition:height .2s ease}.settings-balance .day-toggle{cursor:pointer}.settings-balance .button-advanced{margin:-12px 0 0 -23px;float:none;opacity:1}.settings-balance .button-advanced .icon-angle-down{margin-left:2px}.settings-balance .balance-quote{margin-top:45px;opacity:.5;text-align:center}.firefox .settings-balance .balance-quote{padding-bottom:30px}.settings-balance .balance-quote-source{margin-top:4px;display:block;font-size:14px}",document.getElementsByTagName("head")[0].appendChild(t)};var n=e.dependencies.settings;return e.views.Main=n.views.SettingsPanel.extend({attributes:{id:"settings-balance",class:"settings-view settings-balance"},panelid:"balance",panelTitle:"Balance Settings",quotes:[{body:"Time you enjoy wasting is not wasted.",source:"John Lennon"},{body:"Sometimes the best training is to rest.",source:"Cristiano Ronaldo"},{body:"Rest until you feel like playing, then play until you feel like resting.",source:"Martha Beck"},{body:"If you get tired, learn to rest, not to quit.",source:"Banksy"},{body:"Everything in moderation, including moderation.",source:"Oscar Wilde"},{body:"Sometimes the most productive thing you can do is rest.",source:"Anonymous"},{body:"Balance achievement with appreciation.",source:"Tim Ferriss"},{body:"There is virtue in work and there is virtue in rest. Use both and overlook neither.",source:"Alan Cohen"}],showAdvanced:!1,template:e.templates.main,events:{"click .balance-mode":"toggleBalanceMode","click .balance-option":"toggleBalanceOption","click .day-toggle":"toggleDay","change .balance-time":"updateBalanceTime","click .balance-shortcut":"chooseShortcut","click .days-shortcut":"setDays","click .toggle-custom":"toggleCustomOptions","click .cancel-custom":"cancelCustomOptions","click .button-advanced":"toggleAdvanced"},initialize:function(t){p.models.balanceMode&&!p.models.balanceMode.initCompleted&&(p.models.balanceMode.initCompleted=!0),this.collection=new p.collect.Settings,t&&t.showAdvanced&&(this.showAdvanced=!0),this.plusEnabled=p.conditionalFeatures.featureEnabled("plus"),this.shortcuts={};for(var e,n,a,s,o=8.5,i=4.5;o<10;){n=(e=Math.floor(o))==o?"00":"30",s=(a=Math.floor(i))==i?"00":"30";var l=this.generateLabel(e,n,a,s);this.shortcuts[l]={},this.shortcuts[l].start={hour:e,minute:n,noon:"AM"},this.shortcuts[l].end={hour:a,minute:s,noon:"PM"},this.shortcuts[l].label=l,this.hour24=!p.models.customization.get("hour12clock"),this.shortcuts[l].displayLabel=this.generateLabel((this.hour24?"0":"")+e,n,a+(this.hour24?12:0),s),i+=.5,o+=.5}this.heightFound=!1,this.animating={customTime:!1,customDays:!1},this.currentQuote=this.quotes[Math.floor(Math.random()*this.quotes.length)],p.sendEvent(this.panelTitle,"Panel Opened")},render:function(){var t=this;if(this.$el.css("opacity",0),this.$el.html(this.template(this)),this.$buttonAdvanced=this.$(".button-advanced"),this.$wrapperAdvanced=this.$(".wrapper-advanced"),this.showAdvanced&&setTimeout(function(){p.utils.scrollToBottom(t.$el)},0),this.toggleAdvanced(null,this.showAdvanced),!this.heightFound){var e=this.$(".toggle-options-custom");0<e.length&&e.css({position:"absolute",opacity:0})}return this.$balanceToggler=this.$el.find(".balance-mode"),this.updateBalanceMode(!0),setTimeout(function(){t.$el.css("opacity",1)},10),setTimeout(function(){t.calcCustomHeights()},1),setTimeout(function(){t.$el.find(".toggle-options-custom").addClass("animating")},400),this},generateLabel:function(t,e,n,a){return t+":"+e+"-"+n+":"+a},calcCustomHeights:function(){var n=this;n.$(".toggle-options-custom").each(function(){var t=g(this).height();if(0<t){g.data(this,"main-height",t);var e=0;p.models.balanceMode.get("custom"+g(this).data("custom"))&&(e=t),g(this).css({overflow:"hidden",height:e,position:"relative"}),g(this).css({opacity:1}),n.heightFound=!0}})},updateBalanceDays:function(t){var e,a=p.models.balanceMode,n="";for(e=0;e<7;e++)a.get("days")[e]&&(0<n.length&&(n+=","),n+=e);this.customDays=!1,this.$el.find(".days-shortcut").removeClass("active"),this.$el.find(".days-custom").removeClass("active"),a.get("customDays")?(this.$(".days-custom").addClass("active"),this.showCustomOptions(this.$(".custom-days-toggle"),!0)):(this.$el.find('[data-days="'+n+'"]').addClass("active"),t||this.hideCustomOptions(this.$(".custom-days-toggle"))),this.$el.find(".day-toggle").each(function(t,e){var n=g(e);n.toggleClass("active",a.get("daysCustom")[parseInt(n.attr("data-day"))])})},updateBalanceMode:function(t){var c=p.models.balanceMode;this.$balanceToggler.toggleClass("on",c.get("enabled")),this.$(".show-on-balance").mToggle("block",c.get("enabled")),this.$(".balance-option").each(function(t,e){var n=g(e);n.toggleClass("on",c.get([n.attr("data-option")]))});var d=!p.models.customization.get("hour12clock");this.$el.find(".balance-time").each(function(t,e){var n=g(e),a=n.attr("data-time"),s=n.attr("data-side"),o=c.get(s+"Custom"),i=0;d&&"hour"==a?"PM"==o.noon&&(i=12):d||"hour"!=a||0!=o.hour||(i=12);var l=o[a];i&&(l=parseInt(l)+i),d&&"hour"==a&&1==(l+"").length&&(l="0"+l),n.val(l)});var e=this.generateLabel(c.get("start").hour,c.get("start").minute,c.get("end").hour,c.get("end").minute);this.$(".balance-shortcut").removeClass("active"),c.get("customTime")?(this.$(".time-custom").addClass("active"),this.showCustomOptions(this.$(".custom-time-toggle"),!0)):(this.$el.find('[data-shortcut="'+e+'"]').addClass("active"),this.$(".time-custom").removeClass("active"),t||this.hideCustomOptions(this.$(".custom-time-toggle"))),this.updateBalanceDays(t)},updateBalanceTime:function(t){var e=g(t.currentTarget).attr("data-time"),n=g(t.currentTarget).attr("data-side"),a=p.models.balanceMode,s=a.get(n+"Custom"),o={hour:s.hour,minute:s.minute,noon:s.noon},i=g(t.currentTarget).val();if("hour"==e)if(i=parseInt(i),p.models.customization.get("hour12clock"))o.hour=12==i?0:i;else{var l=11<i;o.hour=i-(l?12:0),o.noon=l?"PM":"AM"}else o[e]=i;a.set(n+"Custom",o),this.updateBalanceMode(),p.models.balanceMode.balanceChanged()},toggleBalanceMode:function(t){t&&(t.stopPropagation(),t.preventDefault());var e=p.models.balanceMode,n=!p.models.balanceMode.get("enabled");p.models.customization.set("balanceManualToggle",!0),e.set("enabled",n),this.$balanceToggler.toggleClass("on",n),this.$(".show-on-balance").mToggle("block",n),e.balanceChanged(),n&&(localStorage.setItem("balanceManualToggle",!0),this.calcCustomHeights(),this.updateBalanceMode())},toggleBalanceOption:function(t){t&&(t.stopPropagation(),t.preventDefault());var e=g(t.currentTarget).attr("data-option"),n=p.models.balanceMode;n.set(e,!n.get(e)),g(t.currentTarget).toggleClass("on",n.get(e)),p.models.balanceMode.balanceChanged()},chooseShortcut:function(i){var l=this,c=p.models.balanceMode;c.set("customTime",!1),this.$(".balance-shortcut").each(function(t,e){var n=g(e);if(e==i.currentTarget){var a=l.shortcuts[n.attr("data-shortcut")],s={hour:a.start.hour,minute:a.start.minute,noon:a.start.noon},o={hour:a.end.hour,minute:a.end.minute,noon:a.end.noon};c.set("start",s),c.set("end",o)}}),p.models.balanceMode.balanceChanged(),this.updateBalanceMode()},setDays:function(t){t&&(t.stopPropagation(),t.preventDefault());var e=g(t.currentTarget),n=p.models.balanceMode;n.set("customDays",!1);var a,s=e.attr("data-days").split(","),o=n.get("days");for(a=0;a<7;a++)o[a]=!1;s.map(function(t){o[parseInt(t)]=!0}),this.updateBalanceDays(),p.models.balanceMode.balanceChanged()},toggleDay:function(t){t&&(t.stopPropagation(),t.preventDefault());var e=g(t.currentTarget),n=p.models.balanceMode,a=parseInt(e.attr("data-day"));n.get("daysCustom")[a]=!n.get("daysCustom")[a],e.toggleClass("active",n.get("daysCustom")[a]),this.updateBalanceDays(),p.models.balanceMode.balanceChanged()},toggleCustomOptions:function(t){if(p.conditionalFeatures.featureEnabled("plus")){var e=g(t.currentTarget).closest(".slide-toggle");e.hasClass("show-custom")||(this.showCustomOptions(e),p.models.balanceMode.balanceChanged())}else{p.commandManager.execute("upsell.message",{targetRegion:"settings",sourceEvent:"customBalanceMode",buttonText:"Learn more",title:"Balance Mode",description:"Customize your schedule to fit the way you work"})}},showCustomOptions:function(t,e){var n=p.models.balanceMode,a=t.find(".toggle-options-custom");t.addClass("show-custom");var s="custom"+a.data("custom");if(!(this.animating[s]||10<a.height())){this.animating[s]=!0;var o=this;setTimeout(function(){o.animating[s]=!1},200),a.css({height:a.data("main-height")}),e||(n.set(s,!0),this.updateBalanceMode())}},hideCustomOptions:function(t){var e=this,n=t.find(".toggle-options-custom"),a="custom"+n.data("custom");this.animating[a]||n.height()<10||(this.animating[a]=!0,n.css({height:0}),setTimeout(function(){e.animating[a]=!1},200),t.removeClass("show-custom"))},toggleAdvanced:function(t,e){void 0===e?(p.settingsUtils.toggleAdvanced(this),this.showAdvanced=!this.showAdvanced):(this.$buttonAdvanced.toggleClass("active",e),this.$wrapperAdvanced.mToggle("block",e))},cancelCustomOptions:function(t){this.toggleCustomOptions(t)}}),p.commandManager&&p.commandManager.registerCommand("settings.panels.balance",function(t){return e.styleLoaded||(e.styleLoaded=!0,e.styles.style()),new e.views.Main(t)}),e};m.addinManager&&m.addinManager.registerAddinFn("1e373fa7-a454-4652-8d77-1a4fcc88c069",fn_addin);