function get_id(t){var e=obj_set[t],a=$('#profile-advanced-details dl dt:contains("'+t+'")').parent(),n=a.find(".field_editable .inputbox");e.name=n.attr("name"),e.value=a.find(".field_uneditable").text(),e.number=n.attr("name").match(/.+_(\d)$/)[1],obj_set.post=$("#field_id-6 .field_uneditable").text(),obj_set.point=$("#field_id-13 .field_uneditable").text(),obj_set.thank=$("#field_id-14 .field_uneditable").text(),obj_set.color=$("h1 span").attr("style"),a.remove()}function draw_img(){for(var t=9,e=0,a=0;t>a;a++)object_num[a]=new Image,object_num[a].src=object_img[a],object_num[a].onload=function(){e++,e==t&&allLoaded()}}function allLoaded(){context.drawImage(object_num[0],170,0),context.drawImage(object_num[1],180,30),context.drawImage(object_num[2],170,0),context.drawImage(object_num[3],170,0),context.drawImage(object_num[4],170,0),context.drawImage(object_num[5],170,0),context.drawImage(object_num[6],170,0),context.drawImage(object_num[7],5,40),context.drawImage(object_num[8],45,30)}function draw_text(t,e,a,n,o){context.font="bold "+n+"px Sans-serif",context.strokeStyle=o,context.lineWidth=2,context.lineJoin="miter",context.miterLimit=1,context.strokeText(t,e,a),context.fillStyle="white",context.fillText(t,e,a)}function clearCanvas(){context.clearRect(0,0,canvas.width,canvas.height);var t=canvas.width;canvas.width=1,canvas.width=t}function add_avata(t,e){if("Vong"==t||"Canh"==t){var a="_wing="+object_item.Canh+"&circle="+object_item.Vong,n='<embed src="https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/profile.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" play="true" loop="true" scale="showall" wmode="transparent" name="gnAvatar" menu="true" allowfullscreen="false" allowscriptaccess="always" salign="" flashvars="'+a+'" type="application/x-shockwave-flash" height="200px" width="300px" align="middle">';$("#Canh").html(n)}else"Nen"==t&&$("#avata").attr("style","background: url(https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Nen/"+e+".png) center center;")}function draw_bo(t,e,a,n){var o=t,c=o,c=new Image;c.src=e,c.onload=function(){"Pet"==t?pet_auto=setInterval(function(){anime(t,c,a,n)},200):anime_auto=setInterval(function(){anime(t,c,a,n)},300)}}function anime(t,e,a,n){if("Pet"==t){var o=80,c=68;context.clearRect(80,68,82,82)}else{var o=170,c=0;context.clearRect(170,0,120,150)}context.drawImage(e,a*currentFrame,0,a,n,o,c,a,n),3==currentFrame?currentFrame=0:currentFrame++}function canvas_run(){if(0==item_bo)object_img={0:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Vk/"+object_item.Vk+".png",1:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/"+object_item.Gt+"/Mat/"+object_item.Mat+".png",2:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/"+object_item.Gt+"/Toc/"+object_item.Toc+".png",3:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Non/"+object_item.Non+".png",4:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/"+object_item.Gt+"/Ao/"+object_item.Ao+".png",5:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Ts/"+object_item.Ts+".png",6:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Kinh/"+object_item.Kinh+".png",7:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Lv/lv.png",8:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Lv/"+level+".png"},draw_img(),object_item.Pet>0&&draw_bo("Pet","https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Pet/"+object_item.Pet+".png",80,100);else{var t="https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Bo/"+object_item.Bo+".png";draw_bo("Bo",t,120,150);var e=new Image;e.src="https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Lv/lv.png",e.onload=function(){context.drawImage(e,5,40)};var a=new Image;a.src="https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Lv/"+level+".png",a.onload=function(){context.drawImage(a,45,30)}}draw_text("ATK :",5,85,14,"darkcyan"),draw_text(object_item.atk,45,85,16,"red"),draw_text("DEF :",5,105,14,"darkmagenta"),draw_text(object_item.def,45,105,16,"red"),draw_text("HP :",5,125,14,"darkred"),draw_text(object_item.hp,45,125,16,"red"),draw_text("MP :",5,145,14,"darkturquoise"),draw_text(object_item.mp,45,145,16,"red")}function exp_bar(){var t=0;context.fillStyle="black",context.fillRect(10,10,100,15);var e=setInterval(function(){t<exp?(context.fillStyle="darkorange",context.fillRect(10,10,t,15),t+=10):(clearInterval(e),draw_text("EXP: "+exp+" %",35,22,12,"red"))},100)}function begin_set(){canvas_run(),exp_bar(),add_avata("Nen",object_item.Nen),add_avata("Vong",object_item.Vong),add_avata("Canh",object_item.Canh)}var obj_set=new Object;obj_set[text_xu]=new Object,obj_set[text_gunny]=new Object;var Mhtml='<div class="module_gunny"><div class="inner"><div class="h3_gunny">Gunny</div><div class="body_gunny"><div id="avata"><canvas id="Gunny"></canvas><div id="Canh" class="item"></div></div></div></div></div>';$("#profile-advanced-right .module:eq(0)").after(Mhtml);var max_page=24,link_img="https://cdn.rawgit.com/matran991/Shop-Gunny/master/",start=0,max_item=79,item_bo=!1,currentFrame=1,anime_auto=!0,canvas=document.getElementById("Gunny"),context=canvas.getContext("2d"),pet_auto="",anime_auto="",object_num={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0};close_check=!1,get_id(text_gunny),get_id(text_xu);var z=obj_set[text_gunny].value;max_level=99,level=Math.ceil((obj_set.post+obj_set.thank)/max_level),level>max_level&&(level=max_level),exp=Math.round(100/max_level*(obj_set.post%max_level)),"string"==typeof z&&z.indexOf("Ao")>-1&&(object_item=JSON.parse(z),object_item.Bo>0&&(item_bo=!1),begin_set());
