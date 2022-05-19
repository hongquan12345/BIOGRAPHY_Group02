$(document).ready(function(){ 
  
    $(".primaryContained").on('click', function(){
    $(".comment").addClass("commentClicked");
  });//end click
  $("textarea").on('keyup.enter', function(){
    $(".comment").addClass("commentClicked");
  });//end keyup
  });//End Function
new Vue({
    el: "#app",
    data:{
       title: 'Add a comment',
       newItem1: '',newItem2: '',
        item: [],
    },
    methods:{
      addItem  (){
      this.item.push(this.newItem1);
      this.item.push(this.newItem2);
        this.newItem1 = "";
        this.newItem2 = "";
      }   
  }
  
  });

  

  