$(function(){
     const animal_favorability = {
          "goldie" : {"favorability" : 0},
          "marshal" : {"favorability" : 0},
          "vesta" : {"favorability" : 0}
     }
     const check_favorability = {
          "goldie" : {
               "favorability" : ["doggum", "yellow", "walk"],
               "chk_favorite" : {
                    "doggum" : false,
                    "yellow" : false,
                    "walk" : false
               }
          },
          "marshal" : {
               "favorability" : ["acorn", "blue", "music"],
               "chk_favorite" : {
                    "acorn" : false,
                    "blue" : false,
                    "music" : false
               }
          },
          "vesta" : {
               "favorability" : ["carrot", "red", "fashion"],
               "chk_favorite" : {
                    "carrot" : false,
                    "red" : false,
                    "fashion" : false
               }
          }
     }
     // $('#cartcontent').datagrid({
     //      singleSelect:true
     // });

     var goldie_favorability_closure = function(){
          var  favorability_value = 0;
          function value_func(favorability_degree){
               favorability_value += favorability_degree;
          }
          return {
              increment : function(){
                    value_func(3);
              },
              decrement : function(){
                    value_func(-2);
              },
              value : function(){
                  return favorability_value;
              }
          };
     };
     var marshal_favorability_closure = function(){
          var  favorability_value = 0;
          function value_func(favorability_degree){
               favorability_value += favorability_degree;
          }
          return {
              increment : function(){
                    value_func(3);
              },
              decrement : function(){
                    value_func(-2);
              },
              value : function(){
                  return favorability_value;
              }
          };
     };
     var vesta_favorability_closure = function(){
          var  favorability_value = 0;
          function value_func(favorability_degree){
               favorability_value += favorability_degree;
          }
          return {
              increment : function(){
                    value_func(3);
              },
              decrement : function(){
                    value_func(-2);
              },
              value : function(){
                  return favorability_value;
              }
          };
     };
     var goldie_favorability = goldie_favorability_closure();
     var marshal_favorability = marshal_favorability_closure();
     var vesta_favorability = marshal_favorability_closure();

     $('.favorite_item').draggable({
          revert:true,
          proxy:'clone',
          onStartDrag:function(){
               $(this).draggable('options').cursor = 'not-allowed';
               $(this).draggable('proxy').css('z-index',10);
          },
          onStopDrag:function(){
               $(this).draggable('options').cursor='move';
          }
     });
     $('.animal_img_div').droppable({
          onDragEnter:function(e,source){
               $(source).draggable('options').cursor='auto';
               $(this).addClass('focus_img');
          },
          onDragLeave:function(e,source){
               $(source).draggable('options').cursor='not-allowed';
               $(this).removeClass('focus_img');
          },
          onDrop:function(e,source){
               const this_id = $(this).attr('id');
               const source_id = $(source).attr('id');
               const favorite_obj = check_favorability[this_id].favorability;
               
               $(this).removeClass('focus_img');
               // if ( $('#'+this_id).hasClass('focus_img') ) {
               //      console.log("111");
               //      console.log($(this));
               //      $('#'+this_id).removeClass('focus_img');
               //      console.log("222");
               //      console.log($(this));
               // }else{
               //      console.log($(this));
               // }


               if(source_id == favorite_obj[0]){
                    //호감도 증가하는 메소드 실행
                    const upFavorability = new Animal_CLass();
                    upFavorability.plusFavorivilly(this_id);
                    upFavorability.showSpeechBubble(this_id,favorite_obj[0]);
                    check_favorability[this_id].chk_favorite[source_id] = true;
                    console.log(check_favorability[this_id].chk_favorite);

               }else if(source_id == favorite_obj[1]){
                    //호감도 증가하는 메소드 실행
                    const upFavorability = new Animal_CLass();
                    upFavorability.plusFavorivilly(this_id);
                    upFavorability.showSpeechBubble(this_id,favorite_obj[1]);
                    check_favorability[this_id].chk_favorite[source_id] = true;
                    console.log(check_favorability[this_id].chk_favorite);

               }else if(source_id == favorite_obj[2]){
                    const upFavorability = new Animal_CLass();
                    upFavorability.plusFavorivilly(this_id);
                    upFavorability.showSpeechBubble(this_id,favorite_obj[2]);
                    check_favorability[this_id].chk_favorite[source_id] = true;
                    console.log(check_favorability[this_id].chk_favorite);
               }else{
                    //호감도 감소하는 메소드 실행
                    const downFavorability = new Animal_CLass();
                    downFavorability.minusFavorivilly(this_id);
                    downFavorability.showSpeechBubble_hate(this_id);
               }
          }
     });
     class Animal_CLass{
          constructor(){
               this.animal_info = {
                    "goldie" : {
                         "img" : "./img/album_goldie_3.png",
                         "mp3" : "./mp3/goldie_sing.mp3",
                         "name" : "카라멜",
                         "birthday" : "12월 27일",
                         "personality" : "친절함",
                         "habit" : "왈왈",
                         "motto" : "중간 정도의 행복이 가장 좋다.",
                         "favorite" :  ["doggum", "yellow", "walk"], //아이디가 들어감 아이디는 곧 스타일에서 배경을 불러옴
                         "info" : "나는 코스모스 섬에서 왔어!! 거기는 K.K의 앨범을 팔지 않아서 별루였지 모야 왈왈-"
                    },
                    "marshal" : {
                         "img" : "./img/album_marshal_3.png",
                         "mp3" : "./mp3/marshal_sing.mp3",
                         "name" : "쭈니",
                         "birthday" : "09월 29일",
                         "personality" : "느끼함",
                         "habit" : "어차피",
                         "motto" : "천재일우",
                         "favorite" : ["acorn", "blue", "music"],
                         "info" : "모든 경험에는 의미가 있지 낯선 곳에서 사람은 조금씩 성장하는거야 어차피-"
                    },
                    "vesta" : {
                         "img" : "./img/album_vasta_3.png",
                         "mp3" : "./mp3/vesta_sing.mp3",
                         "name" : "메리어스",
                         "birthday" : "04월 16일",
                         "personality" : "단순활발",
                         "habit" : "쩝",
                         "motto" : "양 잃고 외양간 고치기",
                         "favorite" : ["carrot", "red", "fashion"],
                         "info" : "지인들을 잔뜩 초대해서 신나게 놀고싶어 !"
                    }
               }
          }
          plusFavorivilly(animal_name){
               $.each(animal_favorability, function(index,item){
                    if(index == animal_name){
                         $.each(item, function(name, info){
                              if(animal_name == 'goldie'){
                                   goldie_favorability.increment(); // 호감도 3 증가
                                   // animal_favorability[animal_name].favorability = goldie_favorability.value(); // 이게 굳이 필요한가 모르겠음
                                   $('.g_favo p > strong').html(goldie_favorability.value());
                                   plusHeart('g_favo', 'plus');
                              }else if (animal_name == "marshal"){
                                   marshal_favorability.increment(); // 호감도 3 증가
                                   // animal_favorability[animal_name].favorability = marshal_favorability.value();
                                   $('.m_favo p > strong').html(marshal_favorability.value());
                                   plusHeart('m_favo', 'plus');
                              }else {
                                   vesta_favorability.increment(); // 호감도 3 증가
                                   // animal_favorability[animal_name].favorability = vesta_favorability.value();                                   
                                   $('.v_favo p > strong').html(vesta_favorability.value());
                                   plusHeart('v_favo', 'plus');
                              }
                         });
                    }
               });
          }

          minusFavorivilly(animal_name){
               $.each(animal_favorability, function(index,item){
                    if(index == animal_name){
                         $.each(item, function(name, info){                              
                              if(animal_name == 'goldie'){
                                   goldie_favorability.decrement(); // 호감도 2 감소
                                   //animal_favorability[animal_name].favorability = goldie_favorability.value();
                                   $('.g_favo p > strong').html(goldie_favorability.value());
                                   plusHeart('g_favo', 'minus');
                              }else if (animal_name == "marshal"){
                                   marshal_favorability.decrement();
                                   // animal_favorability[animal_name].favorability = marshal_favorability.value();
                                   $('.m_favo p > strong').html(marshal_favorability.value());
                                   plusHeart('m_favo', 'minus');
                              }else {
                                   vesta_favorability.decrement();
                                   // animal_favorability[animal_name].favorability = vesta_favorability.value();
                                   $('.v_favo p > strong').html(vesta_favorability.value());
                                   plusHeart('v_favo', 'minus');
                              }
                              console.log("2 :::::   " + animal_favorability[animal_name].favorability);
                         });
                    }
               });
          }
          showSpeechBubble(animal_name, favorite_chk){
               // console.log(1);
               $('#speech').css('display',"block");
               switch(animal_name){
                    case "goldie":
                         $('#speech').addClass('goldieSpeak').removeClass("marshalSpeak").removeClass("vestaSpeak");
                         $('.speech_name h3').html('카라멜');
                         switch(favorite_chk){
                              case 'doggum' :
                                   // $('#speech > span').html('난 개껌이 너무 좋아 왈왈-');
                                   if(goldie_favorability.value() >= 13){
                                        //10 이상일 경우 텍스트가 달라짐
                                        typingText("사과를 좋아한다는 의미에서 우리는 닮았을지도 모르겠네요. 왈왈~");
                                   }else if(goldie_favorability.value() <= -7) {
                                        //10 이하일 경우 텍스트가 달라짐
                                        typingText("주신다면 받을게요. 감사합니다. 왈왈~");
                                   }else{
                                        typingText("내가 좋아하는 사과네요. 정말 고마워요 ~ 왈왈~");
                                   }
                              break;
                              case 'yellow' :
                                   if(goldie_favorability.value() >= 13){
                                        //10 이상일 경우 텍스트가 달라짐
                                        typingText("당신이 주는 선물이면 뭐든 좋지만, 이 옷장을 더욱 특별해질 것 같아요. 왈왈~");
                                   }else if(goldie_favorability.value() <= -7) {
                                        //10 이하일 경우 텍스트가 달라짐
                                        typingText("주신다면 받을게요. 감사합니다. 왈왈~");
                                   }else{
                                        typingText("저에게 딱 맞는 선물이네요. 정말 감사해요~ 왈왈~ ");
                                   }
                              break;
                              case 'walk' :
                                   if(goldie_favorability.value() >= 13){
                                        typingText("이런 귀한 선물을 주시다니…! 당신은 역시 최고입니다~ 왈왈~");
                                   }else if(goldie_favorability.value() <= -7) {
                                        //10 이하일 경우 텍스트가 달라짐
                                        typingText("주신다면 받을게요. 감사합니다 왈왈~");
                                   }else{
                                        typingText("오늘 당장이라도 입고 산책해야겠어요. 왈왈~");
                                   }
                              break;
                         }
                    break;
                    case "marshal":
                         $('#speech').addClass('marshalSpeak').removeClass("goldieSpeak").removeClass("vestaSpeak");
                         $('.speech_name h3').html('쭈니');
                         switch(favorite_chk){
                              case 'acorn' :
                                   if(marshal_favorability.value() >= 13){
                                        typingText("앗! 이런~! 아침에 서두르다 아침 먹는 것을 깜빡했는데 !!!!! 정말 고마워~! 날 생각해주는 건 너밖에 없구나~! 어차피!");
                                   }else if(marshal_favorability.value() <= -7) {
                                        typingText("하하! 이런다고 당신이 좋아질 것 같으면 큰 오산이야 어차피!");
                                   }else{
                                        typingText("쭈니의 취향을 정확하게 알고있구나~~! 정말 고마워 잘 먹을게 어차피!");
                                   }
                              break;
                              case 'blue' :
                                   if(marshal_favorability.value() >= 13){
                                        typingText("그대가 부를때면 나는 정말 행복해져! 그대를 많이 애정해 어차피~~~");
                                   }else if(marshal_favorability.value() <= -7) {
                                        typingText("하하! 이런다고 그대가 좋아질 것 같으면 큰 오산이야 어차피!");
                                   }else{
                                        typingText("땡큐 베리 머치! 그대도 나와 같은 취향이었구나 어차피?");
                                   }
                              break;
                              case 'music' :
                                   if(marshal_favorability.value() >= 13){
                                        typingText("그대에게 쭈니는 어떤 사람이야? 나는 그대와 만나게 되어 정말 행복해 어차피");
                                   }else if(marshal_favorability.value() <= -7) {
                                        typingText("하하! 이런다고 그대가 좋아질 것 같으면 큰 오산이야 어차피!");
                                   }else{
                                        typingText("그대와 같은 섬에 사는 동안에는 항상 이 옷을 입을게 어차피 > <");
                                   }
                              break;
                         }
                    break;
                    case "vesta":
                         $('#speech').addClass('vestaSpeak').removeClass("goldieSpeak").removeClass("marshalSpeak");
                         $('.speech_name h3').html('메리어스');
                         switch(favorite_chk){
                              case 'carrot' :
                                   if(vesta_favorability.value() >= 13){
                                        typingText("방금 구운 따끈따끈한 빵에 오렌지잼을 듬뿍 발라 한 입 먹으면 새콤달콤한 맛이 입안 가득 퍼지는 행복을 너와 같이하고 싶어 쩝~~");
                                   }else if(vesta_favorability.value() <= -7) {
                                        typingText("흐음 ... 마음에 드네요 감사합니다 쩝...");
                                   }else{
                                        typingText("요즘 오렌지를 먹으면 행복한 기분이 든달까 ~~~ 쩝");
                                   }
                              break;
                              case 'red' :
                                   if(vesta_favorability.value() >= 13){
                                        typingText("안그래도 만드려고 했던건데!! 역시 우리는 잘 통하는 것 같아~~  너무너무 고마워 쩝!");
                                   }else if(vesta_favorability.value() <= -7) {
                                        typingText("흐음... 마음에 드네요. 감사합니다. 쩝...");
                                   }else{
                                        typingText("표정에 자신감이 가득해 보이네요 혹시 직접 만드셨나요. 오잉 ??? 고맙습니다~~ 쩝?");
                                   }
                              break;
                              case 'fashion' :
                                   if(vesta_favorability.value() >= 13){
                                        typingText("오늘 너를 만날 생각에 정말 행복했는데!! 진짜 만나게 되어서 무지 무지 행복해 쩝~");
                                   }else if(vesta_favorability.value() <= -7) {
                                        typingText("흐음 ... 마음에 드네요 감사합니다 쩝...");
                                   }else{
                                        typingText("이런 옷은 어디서 구하는 걸까요~~~~ 오잉?!?! 매일 매일 입어도 질리지 않을 것 같아요. 쩝~");
                                   }                                                                                                       
                              break;
                         }
                    break;
               }
          }
          showSpeechBubble_hate(animal_name){
               $('#speech').css('display',"block");
               switch(animal_name){
                    case "goldie":
                         $('#speech').addClass('goldieSpeak').removeClass("marshalSpeak").removeClass("vestaSpeak");
                         $('.speech_name h3').html('카라멜');
                         typingText("저는 이걸 별로 좋아하지 않아요. 왈왈!");
                    break;
                    case "marshal": 
                         $('#speech').addClass('marshalSpeak').removeClass("goldieSpeak").removeClass("vestaSpeak");
                         $('.speech_name h3').html('쭈니');
                         typingText("그대가 주는 선물이면 뭐든 좋지만, 이번엔 받기 싫어~ 어차피...");
                    break;
                    case "vesta": 
                         $('#speech').addClass('vestaSpeak').removeClass("goldieSpeak").removeClass("marshalSpeak");
                         $('.speech_name h3').html('메리어스');
                         typingText("으악! 그 물건에 나쁜 추억이 있어요... 죄송합니다. 쩝...");
                    break;
               }
          }
          // 1. info_img > div background img 변경
          // 2. info_normal에 들어갈 정보 변경
          // 3. info_detail에 들어갈 정보 변경
          drawinfoForm(en_name, name, birthday, personality, habit, motto, favorite1, favorite2, favorite3){
               let info_normal_tF= `
                    <div class="info_name">
                         <h2>${name}</h2>
                    </div>
                    <div class="info_p_h">
                         <p>
                              <span>생일</span>
                              <span class="birthday">${birthday}</span>
                         </p>
                         <p>
                              <span>성격</span>
                              <span class="personality">${personality}</span>
                         </p>
                         <p>
                              <span>말버릇</span>
                              <span class="habit">${habit}</span>
                         </p>
                    </div>
                    <p class="motto">
                    `;
               switch(en_name){
                    case "goldie" : 
                         if(goldie_favorability.value() > 4 ){
                              info_normal_tF += `<strong>"${motto}"</strong>`;                              
                         }else{
                              info_normal_tF += `<strong style="color:#cec6ba">호감도를 5 이상으로 올려주세요!</strong>`;
                         }
                    break;
                    case "marshal" : 
                         if(marshal_favorability.value() > 4 ){
                              info_normal_tF += `<strong>"${motto}"</strong>`;                              
                         }else{
                              info_normal_tF += `<strong style="color:#cec6ba">호감도를 5 이상으로 올려주세요!</strong>`;
                         }
                    break;
                    case "vesta"  : 
                         if(vesta_favorability.value() > 4 ){
                              info_normal_tF += `<strong>"${motto}"</strong>`;                              
                         }else{
                              info_normal_tF += `<strong style="color:#cec6ba">호감도를 5 이상으로 올려주세요!</strong>`;
                         }
                    break;
               }
               info_normal_tF += `
                    </p>
                    <div class="favorite">
                         <span>
                              좋아하는 것
                         </span>
                         <div>
               `;
               console.log(Object.values(check_favorability[en_name].chk_favorite)[0]);
               if(Object.values(check_favorability[en_name].chk_favorite)[0] == false && Object.values(check_favorability[en_name].chk_favorite)[1] == false && Object.values(check_favorability[en_name].chk_favorite)[2] == false){
                    info_normal_tF += `<p class="none_object">${name}이(가) 좋아하는 물건을 넣어주세요! </p>`;
               }
               if(Object.values(check_favorability[en_name].chk_favorite)[0] == true){
                    info_normal_tF += `<p id="${favorite1}"></p>`;
               }
               if(Object.values(check_favorability[en_name].chk_favorite)[1] == true){
                    info_normal_tF += `<p id="${favorite2}"></p>`;
               }
               if(Object.values(check_favorability[en_name].chk_favorite)[2] == true){
                    info_normal_tF += `<p id="${favorite3}"></p>`;
               }
               info_normal_tF+=`
                         </div>
                    </div>
               `; 
               return info_normal_tF;
          }
          drawForm(animal_name){
               $('.info_img').css('background-image','url("'+this.animal_info[animal_name]['img']+'")');
               $('#audio').attr('src',this.animal_info[animal_name]['mp3']);
               $('.info_normal').html( this.drawinfoForm(
                    animal_name,
                    this.animal_info[animal_name]['name'],
                    this.animal_info[animal_name]['birthday'],
                    this.animal_info[animal_name]['personality'],
                    this.animal_info[animal_name]['habit'],
                    this.animal_info[animal_name]['motto'],
                    this.animal_info[animal_name].favorite[0],
                    this.animal_info[animal_name].favorite[1],
                    this.animal_info[animal_name].favorite[2]
               ));
               // $('.info_detail > strong').html(this.animal_info[animal_name].info);
          }
     }

     $('.animal_img_div').on('click',function(e){
          $('.anmail_info_popup').css('display','flex');
          const animalInfoForm = new Animal_CLass();
          animalInfoForm.drawForm(e.target.id);
     });
     
     function plusHeart(animal_name, chk){
          $('.favorability_wrap .'+animal_name+' span').html('<span class="beforeJquery"></span>');
          if(chk == 'plus'){
               $('.favorability_wrap .'+animal_name+' span span.beforeJquery')
               .animate({'opacity':1, "top":'-15px'}
               ,1000,function(){
                    $('.favorability_wrap .'+animal_name+'  span span.beforeJquery').animate({
                         'opacity':0, "top":'-25px'
                    },2000)
               });
          }
          else{
               $('.favorability_wrap .'+animal_name+' span span.beforeJquery')
               .animate({'opacity':1, "top":'15px'}
               ,1000,function(){
                    $('.favorability_wrap .'+animal_name+'  span span.beforeJquery').animate({
                         'opacity':0, "top":'25px'
                    },2000)
               });
          }
     }
     let event_tmf = "";
     function typingText(text){
          const content = text;
          const text_wrap = document.querySelector(".type_text");
          if (!event_tmf == "" ){clearInterval(event_tmf);}
          
          $('.type_text').html('');
          let i = 0;
          function typing(){
               if (i < content.length) {
                    let txt = content.charAt(i);
                    text_wrap.innerHTML += txt;
                    i++;
               }
          }
          event_tmf = setInterval(typing, 70);
     }
     function soundPlay(this_sound){
          // alert(this_sound);
          let audio = document.getElementById('audio');
          if(this_sound == 'no_sound'){
               audio.play();
               $('#sound_btn').removeClass('no_sound').addClass('play_sound');
          }else{
               audio.pause();
               $('#sound_btn').removeClass('play_sound').addClass('no_sound');
          }
     }
     $('.close_btn').on('click',function(){
          $('.anmail_info_popup').css('display','none');
          $('#sound_btn').removeClass('play_sound').addClass('no_sound');
          soundPlay($(this).attr('class'));
     });
     $('.speech_close_btn').on('click',function(){
          $('#speech').css('display','none');
     });
     $('#sound_btn').on('click',function(){
          soundPlay($(this).attr('class'));
     });
     $('#explanation_id').on('click',function(){
          // if ($('#explanation_id > span').html() == '설명'){
          //      $('#explanation_id').css({
          //           'width':"36vw",
          //           'transition':"0.5s linear",
          //      });
          //      $('#explanation_id > span').html('물건을 드래그해서 캐릭터에게 주어 호감도를 올려보세요.');
          // }else{
          //      $('#explanation_id').css({
          //           'width':"6.3vw",
          //           'transition':"0.5s linear",
          //      });
          //      $('#explanation_id > span').html('설명');
          // }
          $('.explan_popup').css('display','block');
          $('#explanation_id').css('display','none');
     });
     $('.explan_popup > span').on('click',function(){
          $('#explanation_id').css('display','block');
          $('.explan_popup').css('display','none  ');

     });
});



