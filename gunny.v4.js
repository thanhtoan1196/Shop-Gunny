function set_link_img(t,a,e,o){var i="";e>o&&(e=o);for(var l=a;e>l;l++){if("Mat"==t||"Toc"==t||"Ao"==t)var s=object_item.Gt;else s="Nam";var n=link_img+"/"+s+"/"+t+"/img/"+l+".png";if(0==l)var _=0;else var _=object_sell[a];var r='<div class="item_shop">';r+='<div class="img_shop" gold="'+_+'" local="'+t+'" data="'+l+'" onclick="preview_avata.call(this)">',r+='<img src="'+n+'" /></div>',r+='<div class="sell_gold">'+_+"</div></div>",i+=r}max_number=Math.floor(o/24+1),result='<div class="block_shop">'+i+"</div>",$("#shop_avata").html(result),0==a&&set_page(t,o)}function set_page(t,a){for(var e="",o=0,i=24,l=0;l<max_number;l++){var s='<div class="number_page" onclick="set_link_img(\''+t+"',"+o+","+i+","+a+');set_active.call(this)">'+l+"</div>";e+=s,o+=24,i+=24}html_page='<div class="table_page">'+e+"</div>",$("#page_item").html(html_page)}function set_active(){$(this).parent().find(".active").removeClass("active"),$(this).addClass("active")}function add_avata(t,a){if("Vong"==t||"Canh"==t||"Hu"==t){$("#"+t).removeClass().addClass("item set"+a);var e='<embed src="https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/'+t+"/"+a+'.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" play="true" loop="true" scale="showall" wmode="transparent" allowfullscreen="false" allowscriptaccess="always" salign="" type="application/x-shockwave-flash" height="200" width="300px" align="middle">';$("#"+t).html(e)}else if("Mat"==t||"Toc"==t||"Ao"==t){var e='<img src="https://cdn.rawgit.com/matran991/Shop-Gunny/master/'+object_item.Gt+"/"+t+"/"+a+'.png">';$("#"+t).html(e)}else if("Nen"==t)$("#avata").attr("style","background: url(https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Nen/"+a+".png) center center;");else{var e='<img src="https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/'+t+"/"+a+'.png">';$("#"+t).html(e)}}function preview_avata(){folther=$(this).attr("local"),gold=Number($(this).attr("gold")),number=Number($(this).attr("data")),add_avata(folther,number),$(".item_shop").removeClass("active"),$(this).parent().addClass("active"),object_item[folther]=number,object_avata[folther]=gold,"Bo"==folther?(total_gold=gold,$("#avata .item").hide(),$("#Bo").show(),item_bo=!0):("Nen"!=folther&&($("#avata .item").show(),$("#Bo").hide()),total_gold=Number(object_avata.Ao)+Number(object_avata.Canh)+Number(object_avata.Hu)+Number(object_avata.Kinh)+Number(object_avata.Mat)+Number(object_avata.Non)+Number(object_avata.Toc)+Number(object_avata.Ts)+Number(object_avata.Vong)+Number(object_avata.Vk),item_bo=!1),$("#total_buy").text(total_gold),total_gold>xu_ht?($("#total_alert").show(),$(".wrap_alert").html("Bạn không đủ tiền để mua!"),close_check=!0,$("#buy_all,.total_info").css("opacity","0")):$("#buy_all,.total_info").css("opacity","1")}function begin_set(){$("#avata .item").each(function(){var t=$(this).attr("id"),a=object_item[t];add_avata(t,a)})}function alert_close(){1==close_check&&($("#total_alert").hide(),$(".wrap_alert").text(""))}function avata_gt(){var t=$(this).attr("data");$(".gt_btt").removeClass("active"),$(this).addClass("active"),$(".tab_gt").hide(),$(".tab_"+t).attr("style","display:inline-block"),object_item.Gt=t,gt_avata=t}var max_hu=5,max_vong=6,max_page=24,link_img="https://cdn.rawgit.com/matran991/Shop-Gunny/master/",start=0,folther="Vk",max_item=78,item_bo=!1,gt_avata="Nam";close_check=!1;var object_avata={Ao:0,Bo:0,Canh:0,Hu:0,Kinh:0,Mat:0,Non:0,Toc:0,Ts:0,Vk:0,Vong:0,Nen:0,Gt:"Nam"},object_item={Ao:0,Bo:0,Canh:0,Hu:0,Kinh:0,Mat:0,Non:0,Toc:0,Ts:0,Vk:0,Vong:0,Nen:0,Gt:"Nam"},object_default={Ao:0,Bo:0,Canh:0,Hu:0,Kinh:0,Mat:0,Non:0,Toc:0,Ts:0,Vk:0,Vong:0,Nen:0,Gt:"Nam"};object_sell={0:"10",24:"15",48:"25",72:"45",96:"60",120:"70",144:"75",168:"90",192:"112",216:"115",240:"120",264:"145",288:"185",312:"200"},1==_userdata.session_logged_in?($.get("/u"+_userdata.user_id).done(function(t){xu_ht=$(t).find("#field_id-13 .field_uneditable").text();var a=$(t).find("#field_id2 .field_uneditable").text();"string"==typeof a&&a.indexOf("Ao")>-1&&(object_item=JSON.parse(a),begin_set()),$(".gold_user span").text(xu_ht),$(".username span").html('<a href="/u'+_userdata.user_id+'">'+_userdata.username+"</a>"),set_link_img(folther,start,max_page,max_item),$("#total_alert").hide()}),$("#buy_all").click(function(){if(1==item_bo){var t=object_item.Bo,a=object_item.Nen;object_avata.Bo;object_item=object_default,object_item.Bo=t,object_item.Nen=a,object_item.Gt="Nam",data=JSON.stringify(object_item),user_gold=xu_ht-total_gold}else object_item.Gt=gt_avata,object_item.Bo=0,data=JSON.stringify(object_item),user_gold=xu_ht-total_gold;$(".wrap_alert").html('<i class="fa fa-spinner fa-pulse"></i><span> Đang xử lý, xin vui lòng chờ...</span>'),close_check=!1,$("#total_alert").show(),$.post("/ajax_profile.forum?jsoncallback=?",{id:"2",user:_userdata.user_id,active:"1",content:'[["profile_field_2_2","'+data.replace(/\"/gi,'\\"')+'"]]',tid:$('a[href*="logout="]').attr("href").match(/.+tid\=(.+)\&.+/)[1]},{},"json").done(function(t){$.post("http://php-viethoagame.rhcloud.com/Gunny.php",{name:_userdata.username,xutru:user_gold}).done(function(t){$(".wrap_alert").html("Mua bán thành công!"),$(".gold_user span").text(t),xu_ht=t,close_check=!0,total_gold=0,$("#total_buy").text(total_gold),$("#buy_all,.total_info").css("opacity","0"),object_avata=object_default})})})):(xu_ht=1e3,begin_set(),$(".total_info,#buy_all").remove(),$(".gold_user span").text(xu_ht),$(".username span").html('<a href="/u'+_userdata.user_id+'">'+_userdata.username+"</a>"),set_link_img(folther,start,max_page,max_item),$(".wrap_alert").html("Xin lỗi, bạn không phải là thành viên của diễn đàn.<br>Do đó bạn chỉ được cấp 1000 xu ảo để thử nghiệm."),close_check=!0),$(".tab_item").click(function(){$(".tab_item").removeClass("active"),$(this).addClass("active")});