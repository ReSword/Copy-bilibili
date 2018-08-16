//下载手机APP
var DLAPP = document.getElementsByClassName("DLAPP")[0];
var DLAPP_border = document.getElementsByClassName("DLAPP_border")[0];
//使用visibility方法
//DLAPP.onmouseenter = function(){
//	if(getComputedStyle(DLAPP_border)["visibility"] == "hidden")
//	{
//		DLAPP_border.style.visibility = "visible";
//	}
//};
//DLAPP.onmouseleave = function(){
//	DLAPP_border.style.visibility = "hidden";
//};
//使用setTimeout方法
DLAPP.onmouseenter = function() {
	console.log("pk");
	if(getComputedStyle(DLAPP_border)["display"] == "none") {
		DLAPP_border.style.display = "block";
		setTimeout(function() {
			DLAPP_border.style.top = "43px";
			DLAPP_border.style.opacity = "1";
		}, 0);
	}
};
DLAPP.onmouseleave = function() {
	if(getComputedStyle(DLAPP_border)["display"] == "block") {
		DLAPP_border.style.top = "50px";
		DLAPP_border.style.opacity = "0";
		setTimeout(function() {
			DLAPP_border.style.display = "none";
		}, 0);
	}
};

//游戏中心
var game_list_1 = document.getElementById("game_list_1");
var game_list_2 = document.getElementById("game_list_2");
var game_list_3 = document.getElementById("game_list_3");
var game_list_4 = document.getElementById("game_list_4");
var game_list_5 = document.getElementById("game_list_5");
var game_list_6 = document.getElementById("game_list_6");
var game_list_7 = document.getElementById("game_list_7");
var game_list_img = document.getElementById("game_list_img");
game_list_1.onmouseenter = function() {
	game_list_img.src = "img/game_list_1.png";
};
game_list_1.onmouseleave = function() {
	game_list_img.src = "";
};
game_list_2.onmouseenter = function() {
	game_list_img.src = "img/game_list_2.png";
};
game_list_2.onmouseleave = function() {
	game_list_img.src = "";
};
game_list_3.onmouseenter = function() {
	game_list_img.src = "img/game_list_3.png";
};
game_list_3.onmouseleave = function() {
	game_list_img.src = "";
};
game_list_4.onmouseenter = function() {
	game_list_img.src = "img/game_list_4.png";
};
game_list_4.onmouseleave = function() {
	game_list_img.src = "";
};
game_list_5.onmouseenter = function() {
	game_list_img.src = "img/game_list_5.png";
};
game_list_5.onmouseleave = function() {
	game_list_img.src = "";
};
game_list_6.onmouseenter = function() {
	game_list_img.src = "img/game_list_6.png";
};
game_list_6.onmouseleave = function() {
	game_list_img.src = "";
};
game_list_7.onmouseenter = function() {
	game_list_img.src = "img/game_list_7.png";
};
game_list_7.onmouseleave = function() {
	game_list_img.src = "";
};
var game_center = document.getElementsByClassName("game_center")[0];
var game_center_content = document.getElementsByClassName("game_center_content")[0];
game_center.onmouseenter = function() {
	console.log("pk");
	if(getComputedStyle(game_center_content)["display"] == "none") {
		game_center_content.style.display = "block";
		setTimeout(function() {
			game_center_content.style.top = "43px";
			game_center_content.style.opacity = "1";
		}, 0);
	}
};
game_center.onmouseleave = function() {
	if(getComputedStyle(game_center_content)["display"] == "block") {
		game_center_content.style.top = "50px";
		game_center_content.style.opacity = "0";
		setTimeout(function() {
			game_center_content.style.display = "none";
		}, 0);
	}
};

//直播
var live = document.getElementsByClassName("live")[0];
var live_content = document.getElementsByClassName("live_content")[0];
live.onmouseenter = function() {
	if(getComputedStyle(live_content)["display"] == "none") {
		live_content.style.display = "block";
		setTimeout(function() {
			live_content.style.top = "43px";
			live_content.style.opacity = "1";
		}, 0);
	}
};
live.onmouseleave = function() {
	if(getComputedStyle(live_content)["display"] == "block") {
		live_content.style.top = "50px"
		live_content.style.opacity = "0";
		setTimeout(function() {
			live_content.style.display = "none";
		}, 0);
	}
};

//等级经验条
var level_rectangle = document.getElementsByClassName("portrait_content_level_rectangle")[0];
setInterval(function(e) {
	if(level_rectangle.value != parseInt((7589 / 10800) * 100)) level_rectangle.value++;
}, 10);

//等级提示信息
var portrait_content_level_a = document.getElementById("portrait_content_level_a");
var portrait_content_level_a_con = document.getElementById("portrait_content_level_a_con");
//判断标志
var flag = 0;
portrait_content_level_a.onmouseenter = function(e) {
	flag = 1;
	//	if(getComputedStyle(portrait_content_level_a_con)["display"] == "none") {
	//		portrait_content_level_a_con.style.display = "block";
	//	}
};
portrait_content_level_a_con.onmouseleave = function() {
	flag = 0;
	//	if(getComputedStyle(portrait_content_level_a_con)["display"] == "block") {
	//		portrait_content_level_a_con.style.display = "none";
	//	}
};
portrait_content_level_a_con.onmouseenter = function() {
	flag = 1;
};
portrait_content_level_a.onmouseleave = function(e) {
	flag = 0;
};
var timer = null;
timer = setInterval(function() {

	if(flag == 1) {
		portrait_content_level_a_con.style.display = "block";
	}
	if(flag == 0) {
		portrait_content_level_a_con.style.display = "none";
	}

}, 10);

//个人信息
var portrait = document.getElementsByClassName("portrait")[0];
var image = document.getElementsByClassName("image")[0];
var portrait_content = document.getElementsByClassName("portrait_content")[0];
portrait.onmouseenter = function() {
	if(getComputedStyle(portrait_content)["display"] == "none") {
		portrait_content.style.display = "block";
		setTimeout(function() {
			image.style.width = "61px";
			image.style.height = "61px";
			image.style.borderRadius = "30.5px";
			image.style.marginTop = "19px";
			portrait_content.style.top = "43px";
			portrait_content.style.opacity = "1";
		}, 0);
	}
};
portrait.onmouseleave = function() {
	if(getComputedStyle(portrait_content)["display"] == "block") {
		image.style.width = "38px";
		image.style.height = "38px";
		image.style.borderRadius = "19px";
		image.style.marginTop = "2.5px";
		portrait_content.style.top = "50px"
		portrait_content.style.opacity = "0";
		setTimeout(function() {
			portrait_content.style.display = "none";
		}, 0);
	}
};

//大会员
var member = document.getElementsByClassName("member")[0];
var member_content = document.getElementsByClassName("member_content")[0];
member.onmouseenter = function() {
	if(getComputedStyle(member_content)["display"] == "none") {
		member_content.style.display = "block";
		setTimeout(function() {
			member_content.style.top = "43px";
			member_content.style.opacity = "1";
		}, 0);
	}
};
member.onmouseleave = function() {
	if(getComputedStyle(member_content)["display"] == "block") {
		member_content.style.top = "50px"
		member_content.style.opacity = "0";
		setTimeout(function() {
			member_content.style.display = "none";
		}, 0);
	}
};

//消息
var message = document.getElementsByClassName("message")[0];
var message_content = document.getElementsByClassName("message_content")[0];
message.onmouseenter = function() {
	if(getComputedStyle(message_content)["display"] == "none") {
		message_content.style.display = "block";
		setTimeout(function() {
			message_content.style.top = "43px";
			message_content.style.opacity = "1";
		}, 0);
	}
};
message.onmouseleave = function() {
	if(getComputedStyle(message_content)["display"] == "block") {
		message_content.style.top = "50px"
		message_content.style.opacity = "0";
		setTimeout(function() {
			message_content.style.display = "none";
		}, 0);
	}
};

//动态choice
var activity_content = document.getElementsByClassName("activity_content")[0];
var activity_content_bottom_button = document.getElementById("activity_content_bottom_button");
var activity_content_details = document.getElementsByClassName("activity_content_details")[0];
var activity_content_live = document.getElementsByClassName("activity_content_live")[0];
var activity_content_choice_1 = document.getElementsByClassName("activity_content_choice_1")[0];
var activity_content_choice_2 = document.getElementsByClassName("activity_content_choice_2")[0];
var activity_content_choice_3 = document.getElementsByClassName("activity_content_choice_3")[0];
var activity_content_choice_tr = document.getElementsByClassName("activity_content_choice_tr")[0];
var activity_content_choice_rec = document.getElementsByClassName("activity_content_choice_rec")[0];
activity_content_choice_1.style.color = "#14A8D9";
activity_content_choice_1.onclick = function() {
	activity_content_choice_1.style.color = "#14A8D9";
	activity_content_choice_2.style.color = "";
	activity_content_choice_3.style.color = "";
	activity_content_choice_rec.style.left = "120px";
	activity_content_choice_tr.style.left = "132px";
	activity_content.style.height = "410px";
	setTimeout(function() {
			activity_content_details.style.display = "block";
	        activity_content_live.style.display = "none";
	}, 400);
	activity_content_bottom_button.innerHTML = "查看全部";
};
activity_content_choice_2.onclick = function() {
	activity_content_choice_1.style.color = "";
	activity_content_choice_2.style.color = "#14A8D9";
	activity_content_choice_3.style.color = "";
	activity_content_choice_rec.style.left = "165px";
	activity_content_choice_tr.style.left = "177px";
	activity_content.style.height = "198px";
	setTimeout(function() {
		activity_content_details.style.display = "none";
	    activity_content_live.style.display = "block";
	}, 400);
	activity_content_bottom_button.innerHTML = "所有关注";
};
activity_content_choice_3.onclick = function() {
	activity_content_choice_1.style.color = "";
	activity_content_choice_2.style.color = "";
	activity_content_choice_3.style.color = "#14A8D9";
	activity_content_choice_rec.style.left = "210px";
	activity_content_choice_tr.style.left = "222px";
	activity_content_bottom_button.innerHTML = "进入专栏区";
};

//拉入稍后在看名单
var activity_content_details_later = document.getElementsByClassName("activity_content_details_later")[0];
var activity_content_details_hint = document.getElementsByClassName("activity_content_details_hint")[0];
var on = 0;
activity_content_details_later.onclick = function(e) {
	e.stopPropagation();
	e.preventDefault();
	var flag = 0;
	on = 1;
	console.log("later.onclick");
	if(activity_content_details_hint.innerText == "稍后再看") {
		activity_content_details_later.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint.innerHTML = "已添加稍后再看";
		activity_content_details_hint.style.width = "95px";
		flag = 1;
	}
	if(activity_content_details_hint.innerText == "移除" || (activity_content_details_hint.innerHTML == "已添加稍后再看" && flag == 0)) {
		activity_content_details_later.style.backgroundPosition = "-1366px -880px";
		activity_content_details_hint.innerHTML = "已从稍后再看列表中移除";
		activity_content_details_hint.style.width = "155px";
		flag = 1;
		on = 0;
	}
	if(activity_content_details_hint.innerText == "已从稍后再看列表中移除" && flag == 0) {
		activity_content_details_later.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint.innerHTML = "已添加稍后再看";
		activity_content_details_hint.style.width = "95px";
		flag = 1;
		on = 1;
	}
};
activity_content_details_later.onmouseenter = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseenter");
	activity_content_details_hint.style.width = "60px";
	if(activity_content_details_hint.innerText != "移除") {
		activity_content_details_hint.innerText = "稍后再看";
	}
}
activity_content_details_later.onmouseleave = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseleave");
	if(on == 0) {
		activity_content_details_hint.innerText = "稍后再看";
		activity_content_details_hint.style.width = "60px";
	}
	if(on == 1) {
		activity_content_details_hint.innerText = "移除";
		activity_content_details_hint.style.width = "60px";
	}
}
var activity_content_details_later_2 = document.getElementsByClassName("activity_content_details_later")[1];
var activity_content_details_hint_2 = document.getElementsByClassName("activity_content_details_hint")[1];
var on_2 = 0;
activity_content_details_later_2.onclick = function(e) {
	e.stopPropagation();
	e.preventDefault();
	var flag = 0;
	on_2 = 1;
	console.log("later.onclick");
	if(activity_content_details_hint_2.innerText == "稍后再看") {
		activity_content_details_later_2.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint_2.innerHTML = "已添加稍后再看";
		activity_content_details_hint_2.style.width = "95px";
		flag = 1;
	}
	if(activity_content_details_hint_2.innerText == "移除" || (activity_content_details_hint_2.innerHTML == "已添加稍后再看" && flag == 0)) {
		activity_content_details_later_2.style.backgroundPosition = "-1366px -880px";
		activity_content_details_hint_2.innerHTML = "已从稍后再看列表中移除";
		activity_content_details_hint_2.style.width = "155px";
		on_2 = 0;
		flag = 1;
	}
	if(activity_content_details_hint_2.innerText == "已从稍后再看列表中移除" && flag == 0) {
		activity_content_details_later_2.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint_2.innerHTML = "已添加稍后再看";
		activity_content_details_hint_2.style.width = "95px";
		flag = 1;
		on_2 = 1;
	}
};
activity_content_details_later_2.onmouseenter = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseenter");
	activity_content_details_hint_2.style.width = "60px";
	if(activity_content_details_hint_2.innerText != "移除") {
		activity_content_details_hint_2.innerText = "稍后再看";
	}
}
activity_content_details_later_2.onmouseleave = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseleave");
	if(on_2 == 0) {
		activity_content_details_hint_2.innerText = "稍后再看";
		activity_content_details_hint_2.style.width = "60px";
	}
	if(on_2 == 1) {
		activity_content_details_hint_2.innerText = "移除";
		activity_content_details_hint_2.style.width = "60px";
	}
}
var activity_content_details_later_3 = document.getElementsByClassName("activity_content_details_later")[2];
var activity_content_details_hint_3 = document.getElementsByClassName("activity_content_details_hint")[2];
var on_3 = 0;
activity_content_details_later_3.onclick = function(e) {
	e.stopPropagation();
	e.preventDefault();
	var flag = 0;
	on_3 = 1;
	console.log("later.onclick");
	if(activity_content_details_hint_3.innerText == "稍后再看") {
		activity_content_details_later_3.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint_3.innerHTML = "已添加稍后再看";
		activity_content_details_hint_3.style.width = "95px";
		flag = 1;
	}
	if(activity_content_details_hint_3.innerText == "移除" || (activity_content_details_hint_3.innerHTML == "已添加稍后再看" && flag == 0)) {
		activity_content_details_later_3.style.backgroundPosition = "-1366px -880px";
		activity_content_details_hint_3.innerHTML = "已从稍后再看列表中移除";
		activity_content_details_hint_3.style.width = "155px";
		on_3 = 0;
		flag = 1;
	}
	if(activity_content_details_hint_3.innerText == "已从稍后再看列表中移除" && flag == 0) {
		activity_content_details_later_3.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint_3.innerHTML = "已添加稍后再看";
		activity_content_details_hint_3.style.width = "95px";
		flag = 1;
		on_3 = 1;
	}
};
activity_content_details_later_3.onmouseenter = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseenter");
	activity_content_details_hint_3.style.width = "60px";
	if(activity_content_details_hint_3.innerText != "移除") {
		activity_content_details_hint_3.innerText = "稍后再看";
	}
}
activity_content_details_later_3.onmouseleave = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseleave");
	if(on_3 == 0) {
		activity_content_details_hint_3.innerText = "稍后再看";
		activity_content_details_hint_3.style.width = "60px";
	}
	if(on_3 == 1) {
		activity_content_details_hint_3.innerText = "移除";
		activity_content_details_hint_3.style.width = "60px";
	}
}
var activity_content_details_later_4 = document.getElementsByClassName("activity_content_details_later")[3];
var activity_content_details_hint_4 = document.getElementsByClassName("activity_content_details_hint")[3];
var on_4 = 0;
activity_content_details_later_4.onclick = function(e) {
	e.stopPropagation();
	e.preventDefault();
	var flag = 0;
	on_4 = 1;
	console.log("later.onclick");
	if(activity_content_details_hint_4.innerText == "稍后再看") {
		activity_content_details_later_4.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint_4.innerHTML = "已添加稍后再看";
		activity_content_details_hint_4.style.width = "95px";
		flag = 1;
	}
	if(activity_content_details_hint_4.innerText == "移除" || (activity_content_details_hint_4.innerHTML == "已添加稍后再看" && flag == 0)) {
		activity_content_details_later_4.style.backgroundPosition = "-1366px -880px";
		activity_content_details_hint_4.innerHTML = "已从稍后再看列表中移除";
		activity_content_details_hint_4.style.width = "155px";
		on_4 = 0;
		flag = 1;
	}
	if(activity_content_details_hint_4.innerText == "已从稍后再看列表中移除" && flag == 0) {
		activity_content_details_later_4.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint_4.innerHTML = "已添加稍后再看";
		activity_content_details_hint_4.style.width = "95px";
		flag = 1;
		on_4 = 1;
	}
};
activity_content_details_later_4.onmouseenter = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseenter");
	activity_content_details_hint_4.style.width = "60px";
	if(activity_content_details_hint_4.innerText != "移除") {
		activity_content_details_hint_4.innerText = "稍后再看";
	}
}
activity_content_details_later_4.onmouseleave = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseleave");
	if(on_4 == 0) {
		activity_content_details_hint_4.innerText = "稍后再看";
		activity_content_details_hint_4.style.width = "60px";
	}
	if(on_4 == 1) {
		activity_content_details_hint_4.innerText = "移除";
		activity_content_details_hint_4.style.width = "60px";
	}
}
var activity_content_details_later_5 = document.getElementsByClassName("activity_content_details_later")[4];
var activity_content_details_hint_5 = document.getElementsByClassName("activity_content_details_hint")[4];
var on_5 = 0;
activity_content_details_later_5.onclick = function(e) {
	e.stopPropagation();
	e.preventDefault();
	var flag = 0;
	on_5 = 1;
	console.log("later.onclick");
	if(activity_content_details_hint_5.innerText == "稍后再看") {
		activity_content_details_later_5.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint_5.innerHTML = "已添加稍后再看";
		activity_content_details_hint_5.style.width = "95px";
		flag = 1;
	}
	if(activity_content_details_hint_5.innerText == "移除" || (activity_content_details_hint_5.innerHTML == "已添加稍后再看" && flag == 0)) {
		activity_content_details_later_5.style.backgroundPosition = "-1366px -880px";
		activity_content_details_hint_5.innerHTML = "已从稍后再看列表中移除";
		activity_content_details_hint_5.style.width = "155px";
		on_5 = 0;
		flag = 1;
	}
	if(activity_content_details_hint_5.innerText == "已从稍后再看列表中移除" && flag == 0) {
		activity_content_details_later_5.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint_5.innerHTML = "已添加稍后再看";
		activity_content_details_hint_5.style.width = "95px";
		flag = 1;
		on_5 = 1;
	}
};
activity_content_details_later_5.onmouseenter = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseenter");
	activity_content_details_hint_5.style.width = "60px";
	if(activity_content_details_hint_5.innerText != "移除") {
		activity_content_details_hint_5.innerText = "稍后再看";
	}
}
activity_content_details_later_5.onmouseleave = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseleave");
	if(on_5 == 0) {
		activity_content_details_hint_5.innerText = "稍后再看";
		activity_content_details_hint_5.style.width = "60px";
	}
	if(on_5 == 1) {
		activity_content_details_hint_5.innerText = "移除";
		activity_content_details_hint_5.style.width = "60px";
	}
}
var activity_content_details_later_6 = document.getElementsByClassName("activity_content_details_later")[5];
var activity_content_details_hint_6 = document.getElementsByClassName("activity_content_details_hint")[5];
var on_6 = 0;
activity_content_details_later_6.onclick = function(e) {
	e.stopPropagation();
	e.preventDefault();
	var flag = 0;
	on_6 = 1;
	console.log("later.onclick");
	if(activity_content_details_hint_6.innerText == "稍后再看") {
		activity_content_details_later_6.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint_6.innerHTML = "已添加稍后再看";
		activity_content_details_hint_6.style.width = "95px";
		flag = 1;
	}
	if(activity_content_details_hint_6.innerText == "移除" || (activity_content_details_hint_6.innerHTML == "已添加稍后再看" && flag == 0)) {
		activity_content_details_later_6.style.backgroundPosition = "-1366px -880px";
		activity_content_details_hint_6.innerHTML = "已从稍后再看列表中移除";
		activity_content_details_hint_6.style.width = "155px";
		on_6 = 0;
		flag = 1;
	}
	if(activity_content_details_hint_6.innerText == "已从稍后再看列表中移除" && flag == 0) {
		activity_content_details_later_6.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint_6.innerHTML = "已添加稍后再看";
		activity_content_details_hint_6.style.width = "95px";
		flag = 1;
		on_6 = 1;
	}
};
activity_content_details_later_6.onmouseenter = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseenter");
	activity_content_details_hint_6.style.width = "60px";
	if(activity_content_details_hint_6.innerText != "移除") {
		activity_content_details_hint_6.innerText = "稍后再看";
	}
}
activity_content_details_later_6.onmouseleave = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseleave");
	if(on_6 == 0) {
		activity_content_details_hint_6.innerText = "稍后再看";
		activity_content_details_hint_6.style.width = "60px";
	}
	if(on_6 == 1) {
		activity_content_details_hint_6.innerText = "移除";
		activity_content_details_hint_6.style.width = "60px";
	}
}
var activity_content_details_later_7 = document.getElementsByClassName("activity_content_details_later")[6];
var activity_content_details_hint_7 = document.getElementsByClassName("activity_content_details_hint")[6];
var on_7 = 0;
activity_content_details_later_7.onclick = function(e) {
	e.stopPropagation();
	e.preventDefault();
	var flag = 0;
	on_7 = 1;
	console.log("later.onclick");
	if(activity_content_details_hint_7.innerText == "稍后再看") {
		activity_content_details_later_7.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint_7.innerHTML = "已添加稍后再看";
		activity_content_details_hint_7.style.width = "95px";
		flag = 1;
	}
	if(activity_content_details_hint_7.innerText == "移除" || (activity_content_details_hint_7.innerHTML == "已添加稍后再看" && flag == 0)) {
		activity_content_details_later_7.style.backgroundPosition = "-1366px -880px";
		activity_content_details_hint_7.innerHTML = "已从稍后再看列表中移除";
		activity_content_details_hint_7.style.width = "155px";
		on_7 = 0;
		flag = 1;
	}
	if(activity_content_details_hint_7.innerText == "已从稍后再看列表中移除" && flag == 0) {
		activity_content_details_later_7.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint_7.innerHTML = "已添加稍后再看";
		activity_content_details_hint_7.style.width = "95px";
		flag = 1;
		on_7 = 1;
	}
};
activity_content_details_later_7.onmouseenter = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseenter");
	activity_content_details_hint_7.style.width = "60px";
	if(activity_content_details_hint_7.innerText != "移除") {
		activity_content_details_hint_7.innerText = "稍后再看";
	}
}
activity_content_details_later_7.onmouseleave = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseleave");
	if(on_7 == 0) {
		activity_content_details_hint_7.innerText = "稍后再看";
		activity_content_details_hint_7.style.width = "60px";
	}
	if(on_7 == 1) {
		activity_content_details_hint_7.innerText = "移除";
		activity_content_details_hint_7.style.width = "60px";
	}
}
var activity_content_details_later_8 = document.getElementsByClassName("activity_content_details_later")[7];
var activity_content_details_hint_8 = document.getElementsByClassName("activity_content_details_hint")[7];
var on_8 = 0;
activity_content_details_later_8.onclick = function(e) {
	e.stopPropagation();
	e.preventDefault();
	var flag = 0;
	on_8 = 1;
	console.log("later.onclick");
	if(activity_content_details_hint_8.innerText == "稍后再看") {
		activity_content_details_later_8.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint_8.innerHTML = "已添加稍后再看";
		activity_content_details_hint_8.style.width = "95px";
		flag = 1;
	}
	if(activity_content_details_hint_8.innerText == "移除" || (activity_content_details_hint_8.innerHTML == "已添加稍后再看" && flag == 0)) {
		activity_content_details_later_8.style.backgroundPosition = "-1366px -880px";
		activity_content_details_hint_8.innerHTML = "已从稍后再看列表中移除";
		activity_content_details_hint_8.style.width = "155px";
		on_8 = 0;
		flag = 1;
	}
	if(activity_content_details_hint_8.innerText == "已从稍后再看列表中移除" && flag == 0) {
		activity_content_details_later_8.style.backgroundPosition = "-1436px -880px";
		activity_content_details_hint_8.innerHTML = "已添加稍后再看";
		activity_content_details_hint_8.style.width = "95px";
		flag = 1;
		on_8 = 1;
	}
};
activity_content_details_later_8.onmouseenter = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseenter");
	activity_content_details_hint_8.style.width = "60px";
	if(activity_content_details_hint_8.innerText != "移除") {
		activity_content_details_hint_8.innerText = "稍后再看";
	}
}
activity_content_details_later_8.onmouseleave = function(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log("later.onmouseleave");
	if(on_8 == 0) {
		activity_content_details_hint_8.innerText = "稍后再看";
		activity_content_details_hint_8.style.width = "60px";
	}
	if(on_8 == 1) {
		activity_content_details_hint_8.innerText = "移除";
		activity_content_details_hint_8.style.width = "60px";
	}
}
//判断滚动条位置以及确定是否要生成li标签
var is = 0
var activity_content_details = document.getElementsByClassName("activity_content_details")[0];
activity_content_details.onscroll = function() {
	if(activity_content_details.scrollTop >= 171 && is == 0) {
		is = 1;
		var activity_content_details_history_ul = document.getElementById("activity_content_details_history_ul");
		for(var i = 9; i <= 15; i++) {
			var li = document.createElement("li");
			activity_content_details_history_ul.appendChild(li);
			var a = document.createElement("a");
			a.href = "#";
			a.className = "user_img";
			a.id = "user_img_" + i;
			li.appendChild(a);
			console.log("user_img_" + i);
			var button = document.createElement("button");
			button.className = "activity_content_details_later";
			button.id = "later_" + i;
			var p = document.createElement("p");
			p.className = "activity_content_details_hint";
			p.id = "hint_" + i;
			a.appendChild(button);
			a.appendChild(p);
			var btn = document.getElementById("later_" + i);
			var p = document.getElementById("hint_" + i);
			var a1 = document.createElement("a");
			var p1 = document.createElement("p");
			var a2 = document.createElement("a");
		}
	}
	//	console.log(activity_content_details.scrollTop);
};
//对动态生成的标签进行控制的方法
var on_9 = 0;
var on_10 = 0;
var on_11 = 0;
var on_12 = 0;
var on_13 = 0;
var on_14 = 0;
var on_15 = 0;
$(activity_content_details_history_ul).on("mouseover", "li>a", function() {
	var later_9 = document.getElementById("later_9");
	var hint_9 = document.getElementById("hint_9");
	later_9.onclick = function(e) {
		e.stopPropagation();
		e.preventDefault();
		var flag = 0;
		on_9 = 1;
		console.log("later.onclick");
		if(hint_9.innerText == "稍后再看") {
			later_9.style.backgroundPosition = "-1436px -880px";
			hint_9.innerHTML = "已添加稍后再看";
			hint_9.style.width = "95px";
			flag = 1;
		}
		if(hint_9.innerText == "移除" || (hint_9.innerHTML == "已添加稍后再看" && flag == 0)) {
			later_9.style.backgroundPosition = "-1366px -880px";
			hint_9.innerHTML = "已从稍后再看列表中移除";
			hint_9.style.width = "155px";
			flag = 1;
			on_9 = 0;
		}
		if(hint_9.innerText == "已从稍后再看列表中移除" && flag == 0) {
			later_9.style.backgroundPosition = "-1436px -880px";
			hint_9.innerHTML = "已添加稍后再看";
			hint_9.style.width = "95px";
			flag = 1;
			on_9 = 1;
		}
	};
	later_9.onmouseenter = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log("later.onmouseenter");
		hint_9.style.width = "60px";
		if(hint_9.innerText != "移除") {
			hint_9.innerText = "稍后再看";
		}
	}
	later_9.onmouseleave = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log("later.onmouseleave");
		if(on_9 == 0) {
			hint_9.innerText = "稍后再看";
			hint_9.style.width = "60px";
		}
		if(on_9 == 1) {
			hint_9.innerText = "移除";
			hint_9.style.width = "60px";
		}
	}
	//对生成的li标签进行控制
	var later_10 = document.getElementById("later_10");
	var hint_10 = document.getElementById("hint_10");
	later_10.onclick = function(e) {
		e.stopPropagation();
		e.preventDefault();
		var flag = 0;
		on_10 = 1;
		console.log("later.onclick");
		if(hint_10.innerText == "稍后再看") {
			later_10.style.backgroundPosition = "-1436px -880px";
			hint_10.innerHTML = "已添加稍后再看";
			hint_10.style.width = "95px";
			flag = 1;
		}
		if(hint_10.innerText == "移除" || (hint_10.innerHTML == "已添加稍后再看" && flag == 0)) {
			later_10.style.backgroundPosition = "-1366px -880px";
			hint_10.innerHTML = "已从稍后再看列表中移除";
			hint_10.style.width = "155px";
			flag = 1;
			on_10 = 0;
		}
		if(hint_10.innerText == "已从稍后再看列表中移除" && flag == 0) {
			later_10.style.backgroundPosition = "-1436px -880px";
			hint_10.innerHTML = "已添加稍后再看";
			hint_10.style.width = "95px";
			flag = 1;
			on_10 = 1;
		}
	};
	later_10.onmouseenter = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log("later.onmouseenter");
		hint_10.style.width = "60px";
		if(hint_10.innerText != "移除") {
			hint_10.innerText = "稍后再看";
		}
	}
	later_10.onmouseleave = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log("later.onmouseleave");
		if(on_10 == 0) {
			hint_10.innerText = "稍后再看";
			hint_10.style.width = "60px";
		}
		if(on_10 == 1) {
			hint_10.innerText = "移除";
			hint_10.style.width = "60px";
		}
	}
	var later_11 = document.getElementById("later_11");
	var hint_11 = document.getElementById("hint_11");
	later_11.onclick = function(e) {
		e.stopPropagation();
		e.preventDefault();
		var flag = 0;
		on_11 = 1;
		console.log("later.onclick");
		if(hint_11.innerText == "稍后再看") {
			later_11.style.backgroundPosition = "-1436px -880px";
			hint_11.innerHTML = "已添加稍后再看";
			hint_11.style.width = "95px";
			flag = 1;
		}
		if(hint_11.innerText == "移除" || (hint_11.innerHTML == "已添加稍后再看" && flag == 0)) {
			later_11.style.backgroundPosition = "-1366px -880px";
			hint_11.innerHTML = "已从稍后再看列表中移除";
			hint_11.style.width = "155px";
			flag = 1;
			on_11 = 0;
		}
		if(hint_11.innerText == "已从稍后再看列表中移除" && flag == 0) {
			later_11.style.backgroundPosition = "-1436px -880px";
			hint_11.innerHTML = "已添加稍后再看";
			hint_11.style.width = "95px";
			flag = 1;
			on_10 = 1;
		}
	};
	later_11.onmouseenter = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log("later.onmouseenter");
		hint_11.style.width = "60px";
		if(hint_11.innerText != "移除") {
			hint_11.innerText = "稍后再看";
		}
	}
	later_11.onmouseleave = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log("later.onmouseleave");
		if(on_11 == 0) {
			hint_11.innerText = "稍后再看";
			hint_11.style.width = "60px";
		}
		if(on_11 == 1) {
			hint_11.innerText = "移除";
			hint_11.style.width = "60px";
		}
	}
	var later_12 = document.getElementById("later_12");
	var hint_12 = document.getElementById("hint_12");
	later_12.onclick = function(e) {
		e.stopPropagation();
		e.preventDefault();
		var flag = 0;
		on_12 = 1;
		console.log("later.onclick");
		if(hint_12.innerText == "稍后再看") {
			later_12.style.backgroundPosition = "-1436px -880px";
			hint_12.innerHTML = "已添加稍后再看";
			hint_12.style.width = "95px";
			flag = 1;
		}
		if(hint_12.innerText == "移除" || (hint_12.innerHTML == "已添加稍后再看" && flag == 0)) {
			later_12.style.backgroundPosition = "-1366px -880px";
			hint_12.innerHTML = "已从稍后再看列表中移除";
			hint_12.style.width = "155px";
			flag = 1;
			on_12 = 0;
		}
		if(hint_12.innerText == "已从稍后再看列表中移除" && flag == 0) {
			later_12.style.backgroundPosition = "-1436px -880px";
			hint_12.innerHTML = "已添加稍后再看";
			hint_12.style.width = "95px";
			flag = 1;
			on_10 = 1;
		}
	};
	later_12.onmouseenter = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log("later.onmouseenter");
		hint_12.style.width = "60px";
		if(hint_12.innerText != "移除") {
			hint_12.innerText = "稍后再看";
		}
	}
	later_12.onmouseleave = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log("later.onmouseleave");
		if(on_12 == 0) {
			hint_12.innerText = "稍后再看";
			hint_12.style.width = "60px";
		}
		if(on_12 == 1) {
			hint_12.innerText = "移除";
			hint_12.style.width = "60px";
		}
	}
	var later_13 = document.getElementById("later_13");
	var hint_13 = document.getElementById("hint_13");
	later_13.onclick = function(e) {
		e.stopPropagation();
		e.preventDefault();
		var flag = 0;
		on_13 = 1;
		console.log("later.onclick");
		if(hint_13.innerText == "稍后再看") {
			later_13.style.backgroundPosition = "-1436px -880px";
			hint_13.innerHTML = "已添加稍后再看";
			hint_13.style.width = "95px";
			flag = 1;
		}
		if(hint_13.innerText == "移除" || (hint_13.innerHTML == "已添加稍后再看" && flag == 0)) {
			later_13.style.backgroundPosition = "-1366px -880px";
			hint_13.innerHTML = "已从稍后再看列表中移除";
			hint_13.style.width = "155px";
			flag = 1;
			on_12 = 0;
		}
		if(hint_13.innerText == "已从稍后再看列表中移除" && flag == 0) {
			later_13.style.backgroundPosition = "-1436px -880px";
			hint_13.innerHTML = "已添加稍后再看";
			hint_13.style.width = "95px";
			flag = 1;
			on_10 = 1;
		}
	};
	later_13.onmouseenter = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log("later.onmouseenter");
		hint_13.style.width = "60px";
		if(hint_13.innerText != "移除") {
			hint_13.innerText = "稍后再看";
		}
	}
	later_13.onmouseleave = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log("later.onmouseleave");
		if(on_13 == 0) {
			hint_13.innerText = "稍后再看";
			hint_13.style.width = "60px";
		}
		if(on_13 == 1) {
			hint_13.innerText = "移除";
			hint_13.style.width = "60px";
		}
	}
	var later_14 = document.getElementById("later_14");
	var hint_14 = document.getElementById("hint_14");
	later_14.onclick = function(e) {
		e.stopPropagation();
		e.preventDefault();
		var flag = 0;
		on_14 = 1;
		console.log("later.onclick");
		if(hint_14.innerText == "稍后再看") {
			later_14.style.backgroundPosition = "-1436px -880px";
			hint_14.innerHTML = "已添加稍后再看";
			hint_14.style.width = "95px";
			flag = 1;
		}
		if(hint_14.innerText == "移除" || (hint_14.innerHTML == "已添加稍后再看" && flag == 0)) {
			later_14.style.backgroundPosition = "-1366px -880px";
			hint_14.innerHTML = "已从稍后再看列表中移除";
			hint_14.style.width = "155px";
			flag = 1;
			on_14 = 0;
		}
		if(hint_14.innerText == "已从稍后再看列表中移除" && flag == 0) {
			later_14.style.backgroundPosition = "-1436px -880px";
			hint_14.innerHTML = "已添加稍后再看";
			hint_14.style.width = "95px";
			flag = 1;
			on_10 = 1;
		}
	};
	later_14.onmouseenter = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log("later.onmouseenter");
		hint_14.style.width = "60px";
		if(hint_14.innerText != "移除") {
			hint_14.innerText = "稍后再看";
		}
	}
	later_14.onmouseleave = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log("later.onmouseleave");
		if(on_14 == 0) {
			hint_14.innerText = "稍后再看";
			hint_14.style.width = "60px";
		}
		if(on_14 == 1) {
			hint_14.innerText = "移除";
			hint_14.style.width = "60px";
		}
	}
	var later_15 = document.getElementById("later_15");
	var hint_15 = document.getElementById("hint_15");
	later_15.onclick = function(e) {
		e.stopPropagation();
		e.preventDefault();
		var flag = 0;
		on_15 = 1;
		console.log("later.onclick");
		if(hint_15.innerText == "稍后再看") {
			later_15.style.backgroundPosition = "-1436px -880px";
			hint_15.innerHTML = "已添加稍后再看";
			hint_15.style.width = "95px";
			flag = 1;
		}
		if(hint_15.innerText == "移除" || (hint_15.innerHTML == "已添加稍后再看" && flag == 0)) {
			later_15.style.backgroundPosition = "-1366px -880px";
			hint_15.innerHTML = "已从稍后再看列表中移除";
			hint_15.style.width = "155px";
			flag = 1;
			on_14 = 0;
		}
		if(hint_15.innerText == "已从稍后再看列表中移除" && flag == 0) {
			later_15.style.backgroundPosition = "-1436px -880px";
			hint_15.innerHTML = "已添加稍后再看";
			hint_15.style.width = "95px";
			flag = 1;
			on_10 = 1;
		}
	};
	later_15.onmouseenter = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log("later.onmouseenter");
		hint_15.style.width = "60px";
		if(hint_15.innerText != "移除") {
			hint_15.innerText = "稍后再看";
		}
	}
	later_15.onmouseleave = function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log("later.onmouseleave");
		if(on_15 == 0) {
			hint_15.innerText = "稍后再看";
			hint_15.style.width = "60px";
		}
		if(on_15 == 1) {
			hint_15.innerText = "移除";
			hint_15.style.width = "60px";
		}
	}
});