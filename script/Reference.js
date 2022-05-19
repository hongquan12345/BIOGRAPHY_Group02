
    var myApp = angular.module('myModule', [])
    myApp.controller('myCtrl', function($scope){
        
        $scope.Cart1 = 0;
        $scope.Cart2 = 0;
        $scope.Cart3 = 0;
        $scope.Cart4 = 0;
        $scope.btnDelete1 = true;
        $scope.btnDelete2 = true;
        $scope.btnDelete3 = true;
        $scope.btnDelete4 = true;
        $scope.Up1 = function(){
            if($scope.Cart1 >= 1){
                alert("You need to select buy to continue adding to cart!Please!");
            }else{
                $scope.Cart1 = $scope.Cart1 + 1;
                $scope.btnDelete1 = false;
                templateURL 
            }
        }
        $scope.Down1 = function(){
            if($scope.Cart1 > 0){
                $scope.Cart1 = $scope.Cart1 - 1;
                $scope.btnDelete1 = true;
                $("#div1").fadeTo("slow",1);
            }else{
                alert("Invalid!!!");
            }
        }
        $scope.Up2 = function(){
            if($scope.Cart2 >= 1){
                alert("You need to select buy to continue adding to cart!Please!");
            }else{
                $scope.Cart2 = $scope.Cart2 + 1;
                $scope.btnDelete2 = false;
            }
        }
        $scope.Down2 = function(){
            if($scope.Cart2 > 0){
                $scope.Cart2 = $scope.Cart2 - 1;
                $scope.btnDelete2 = true;
                $("#div2").fadeTo("slow",1);
            }else{
                alert("Invalid!!!");
            }
        }
        $scope.Up3 = function(){
            if($scope.Cart3 >= 1){
                alert("You need to select buy to continue adding to cart!Please!");
            }else{
                $scope.Cart3 = $scope.Cart3 + 1;
                $scope.btnDelete3 = false;
            }
        }
        $scope.Down3 = function(){
            if($scope.Cart3 > 0){
                $scope.Cart3 = $scope.Cart3 - 1;
                $scope.btnDelete3 = true;
                $("#div3").fadeTo("slow",1);
            }else{
                alert("Invalid!!!");
            }
        }
        $scope.Up4 = function(){
            if($scope.Cart4 >= 1){
                alert("You need to select buy to continue adding to cart!Please!");
            }else{
                $scope.Cart4 = $scope.Cart4 + 1;
                $scope.btnDelete4 = false;
            }
        }
        $scope.Down4 = function(){
            if($scope.Cart4 > 0){
                $scope.Cart4 = $scope.Cart4 - 1;
                $scope.btnDelete4 = true;
                $("#div4").fadeTo("slow",1);
            }else{
                alert("Invalid!!!");
            }
        }

        function setDefault1(){
            $scope.Cart1 = 0;
            $scope.btnDelete1 = true;
        }
        function setDefault2(){
            $scope.Cart2 = 0;
            $scope.btnDelete2 = true;
        }
        function setDefault3(){
            $scope.Cart3 = 0;
            $scope.btnDelete3 = true;
        }
        function setDefault4(){
            $scope.Cart4 = 0;
            $scope.btnDelete4 = true;
        }


        $scope.btnBuy1 = function(){
            if($scope.Cart1 == 0){
                alert("You have not added a product to your cart!!!");
                return false;
            }else{
                var mess = window.confirm("Are you sure to buy the book!");
                if(mess == true){
                    setDefault1();
                    $("#div1").fadeTo("slow",1);
                    location.href="../Reference/Albert Einstein - The World as I See it.zip"
                }else{
                    setDefault1();
                    $("#div1").fadeTo("slow",1);
                    return false;
                }
            }
        }
        $scope.btnBuy2 = function(){
            if($scope.Cart2 == 0){
                alert("You have not added a product to your cart!!!");
                return false;
            }else{
                var mess = window.confirm("Are you sure to buy the book!");
                if(mess == true){
                    setDefault2();
                    $("#div2").fadeTo("slow",1);
                    location.href="../Reference/Einstein_Relativity.zip"
                }else{
                    setDefault2();
                    $("#div2").fadeTo("slow",1);
                    return false;
                }
            }
        }

        $scope.btnBuy3 = function(){
            if($scope.Cart3 == 0){
                alert("You have not added a product to your cart!!!");
                return false;
            }else{
                var mess = window.confirm("Are you sure to buy the book!");
                if(mess == true){
                    setDefault3();
                    $("#div3").fadeTo("slow",1);
                    location.href="../Reference/einstein-cuoc-doi-va-vu-tru.zip"
                }else{
                    setDefault3();
                    $("#div3").fadeTo("slow",1);
                    return false;
                }
            }
        }
        $scope.btnBuy4 = function(){
            if($scope.Cart4 == 0){
                alert("You have not added a product to your cart!!!");
                return false;
            }else{
                var mess = window.confirm("Are you sure to buy the book!");
                if(mess == true){
                    setDefault4();
                    $("#div4").fadeTo("slow",1);
                    location.href="../Reference/Einstein_Relativity.zip"
                }else{
                    setDefault4();
                    $("#div4").fadeTo("slow",1);
                    return false;
                }
            }
        }
        })

        $(document).ready(function(e) {
            $("#btn1").click(function() {
                $("#div1").fadeTo("slow",0.5);   
            });
            $("#btn2").click(function() {
                $("#div2").fadeTo("slow",0.5);   
            });
            $("#btn3").click(function() {
                $("#div3").fadeTo("slow",0.5);   
            });
            $("#btn4").click(function() {
                $("#div4").fadeTo("slow",0.5);   
            });

            $(document).ready(function(){
                $("#btnins").click(function(){
                  $("#insP").animate({
                    height: 'toggle'
                  });
                });
            });
        
      });