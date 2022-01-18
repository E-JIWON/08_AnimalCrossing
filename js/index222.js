$(function(){
     const animal_favorability = {
          "goldie" : {"favorability" : 0},
          "marshal" : {"favorability" : 0},
          "vesta" : {"favorability" : 0}
     }
     // $('#cartcontent').datagrid({
     //      singleSelect:true
     // });

     var animal_favorability_closure = function(){
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
     var animal_favorability_fun = animal_favorability_closure();


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
          },
          onDragLeave:function(e,source){
               $(source).draggable('options').cursor='not-allowed';
          },
          onDrop:function(e,source){
               console.log($(this));
               switch($(this).attr('id')){
                    case 'goldie':
                         console.log($(source).attr('id'));
                         if($(source).attr('id') == 'doggum'){
                              //호감도 증가하는 메소드 실행
                              const upFavorability = new Animal_CLass();
                              upFavorability.plusFavorivilly($(this).attr('id'));
                         }else{
                              //호감도 감소하는 메소드 실행
                              const downFavorability = new Animal_CLass();
                              downFavorability.minusFavorivilly($(this).attr('id'));
                         }
                    break;
                    case 'marshal':
                         alert(2);
                    break;     
                    case 'vesta':
                         alert(3);
                    break;     
               }
          }
     });
     class Animal_CLass{
          constructor(){
               this.animal_info = {
                    "goldie" : {
                         "img" : "../img/animal_Goldie_2.png",
                         "name" : "카라멜",
                         "birthday" : "12월 27일",
                         "personality" : "친절함",
                         "habit" : "왈왈",
                         "motto" : "중간 정도의 행복이 가장 좋다.",
                         "favorite" : ["doggum", "doggum2", "doggum3"], //아이디가 들어감 아이디는 곧 스타일에서 배경을 불러옴
                         "info" : "나는 코스모스 섬에서 왔어!! 거기는 K.K의 앨범을 팔지 않아서 별루였지 모야 왈왈-"
                    },
                    "marshal" : {
                         "img" : "../img/animal_Marshal_2.png",
                         "name" : "쭈니",
                         "birthday" : "09월 29일",
                         "personality" : "느끼함",
                         "habit" : "어차피",
                         "motto" : "천재일우",
                         "favorite" : ["acorn", "acorn2", "acorn3"],
                         "info" : "모든 경험에는 의미가 있지 낯선 곳에서 사람은 조금씩 성장하는거야 어차피-"
                    },
                    "vesta" : {
                         "img" : "../img/animal_Vesta_2.png",
                         "name" : "메리어스",
                         "birthday" : "04월 16일",
                         "personality" : "단순활발",
                         "habit" : "쩝",
                         "motto" : "양 잃고 외양간 고치기",
                         "favorite" : ["carrot", "red", "fashion"], //아이디가 들어감 아이디는 곧 스타일에서 배경을 불러옴
                         "info" : "지인들을 잔뜩 초대해서 신나게 놀고싶어 !"
                    }
               }
          }
          plusFavorivilly(animal_name){
               $.each(animal_favorability, function(index,item){
                    if(index == animal_name){
                         $.each(item, function(name, info){
                              animal_favorability_fun.increment(); // 호감도 3 증가
                              animal_favorability[animal_name].favorability =animal_favorability_fun.value();
                              console.log("1 :::::   " + animal_favorability[animal_name].favorability);
                         });
                    }
               });
          }
          minusFavorivilly(animal_name){
               $.each(animal_favorability, function(index,item){
                    if(index == animal_name){
                         $.each(item, function(name, info){
                              animal_favorability_fun.decrement(); // 호감도 2 감소
                              animal_favorability[animal_name].favorability =animal_favorability_fun.value();
                              console.log("2 :::::   " + animal_favorability[animal_name].favorability);
                         });
                    }
               });
          }
          // 1. info_img > div background img 변경
          // 2. info_normal에 들어갈 정보 변경
          // 3. info_detail에 들어갈 정보 변경
          drawinfoForm(name, birthday, personality, habit, motto, favorite1, favorite2, favorite3){
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
                         <strong>"${motto}"</strong>
                    </p>
                    <div class="favorite">
                         <span>
                              좋아하는 것
                         </span>
                         <div>
                              <p id="${favorite1}"></p>
                              <p id="${favorite2}"></p>
                              <p id="${favorite3}"></p>
                         </div>
                    </div>
               `; 
               return info_normal_tF;
          }
          drawForm(animal_name){
               $('.info_img').css('background-image','url("'+this.animal_info[animal_name]['img']+'")');
               $('.info_normal').html( this.drawinfoForm(
                    this.animal_info[animal_name]['name'],
                    this.animal_info[animal_name]['birthday'],
                    this.animal_info[animal_name]['personality'],
                    this.animal_info[animal_name]['habit'],
                    this.animal_info[animal_name]['motto'],
                    this.animal_info[animal_name].favorite[0],
                    this.animal_info[animal_name].favorite[1],
                    this.animal_info[animal_name].favorite[2]
               ));
               $('.info_detail > strong').html(this.animal_info[animal_name].info);
          }
     }

     $('.animal_img_div').on('click',function(e){
          $('.anmail_info_popup').css('display','flex');
          switch(e.target.id){
               case 'goldie':
                    const formGoldie = new Animal_CLass();
                    formGoldie.drawForm("goldie");
               break;
               case 'marshal':
                    const formMarshal = new Animal_CLass();
                    formMarshal.drawForm("marshal");
               break;
               case 'vesta':
                    const formVesta = new Animal_CLass();
                    formVesta.drawForm("vesta");
               break;
          }
     });

     $('.close_btn').on('click',function(){
          $('.anmail_info_popup').css('display','none');
     });



});

