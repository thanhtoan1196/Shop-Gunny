function add_avata(a,t){if("Vong"==a||"Canh"==a||"Hu"==a){$(".item_"+a).addClass("set"+t);var i='<embed src="https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/'+a+"/"+t+'.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" play="true" loop="true" scale="showall" wmode="transparent" allowfullscreen="false" allowscriptaccess="always" salign="" type="application/x-shockwave-flash" height="200" width="300px" align="middle">';$(".item_"+a).html(i)}else if("Mat"==a||"Toc"==a||"Ao"==a){var i='<img src="https://cdn.rawgit.com/matran991/Shop-Gunny/master/'+object_item.Gt+"/"+a+"/"+t+'.png">';$(".item_"+a).html(i)}else if("Nen"==a)$(".avata_main").attr("style","background: url(https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Nen/"+t+".png) center center;");else{var i='<img src="https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/'+a+"/"+t+'.png">';"Bo"==a&&t>1&&($(".item_avata").hide(),$(".item_Bo").show()),$(".item_"+a).html(i)}}var avata_html='<div class="avata_preview"><div class="avata_main"><div class="item_Bo item_avata"></div><div class="item_Ao item_avata"></div><div class="item_Toc item_avata"></div><div class="item_Non item_avata"></div><div class="item_Mat item_avata"></div><div class="item_Kinh item_avata"></div><div class="item_Ts item_avata"></div><div class="item_Vk item_avata"></div><div class="item_Canh item_avata"></div><div class="item_Vong item_avata"></div><div class="item_Hu item_avata"></div><div class="item_Nen item_avata"></div></div></div>',field=$("#field_id2 .field_uneditable"),object=field.text();field.closest("#field_id2").remove(),"string"==typeof object&&1==/Ao|Bo|Canh|Hu|Kinh/.test(object)&&($(".avata_wall").after('<div class="avata_gunny line_info"><div class="col-md-4">Gunny: </div><div class="col-md-8"></div></div>'),$(".avata_gunny .col-md-8").append(avata_html),object_item=JSON.parse(""+object)),$(".item_avata").each(function(){var a=$(this).attr("class"),t=a.match(/item_(\w+)\s.+/)[1],i=object_item[t];(i>0||"Ao"==t||"Mat"==t||"Vk"==t)&&add_avata(t,i)});
