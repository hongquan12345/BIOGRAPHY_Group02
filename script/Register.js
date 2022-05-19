
    var myApp = angular.module('myModule', [])
    myApp.controller('myCtrl', function($scope){
        $scope.infor = function(){
            var sName = document.getElementById("txtName").value;
            var reName = /^\w/;
            var sEmail = document.getElementById("txtEmail").value;
            var reEmail = /^\w+[@]\w+[.]\w/;
            var sPhone = document.getElementById("txtPhone").value;
            var rePhone = /^\d{8,12}/;
            var sPass = document.getElementById("txtPass").value;
            var rePass = /^\w/;
            var sRePass = document.getElementById("txtRePass").value;

            if(reName.test(sName) == false){
                    alert("Name is Invalid!");
                    document.getElementById("txtName").focus();
                    return false;
            }
            if(reEmail.test(sEmail) == false){
                alert("Email is Invalid!");
                document.getElementById("txtEmail").focus();
                return false;
            }
            if(rePhone.test(sPhone) == false){
                alert("Phone is Invalid!");
                document.getElementById("txtPhone").focus();
                return false;
            }
            if(rePass.test(sPass) == false){
                alert("Password is Invalid!");
                document.getElementById("txtPass").focus();
                return false;
            }
            if(sRePass != sPass){
                alert("Confirm Password is Invalid!");
                document.getElementById("txtRePass").focus();
                return false;
            }
            var sTerms = document.getElementById("txtTerms");
            var reTerms = sTerms.checked;
            if(reTerms == false){
                alert("Check terms of service!");
                return false;
            }
            var sGender = (txtGender[0].checked == true)? "Male" : "Female";
            var mess = [];
            mess.push("Your Information");
            mess.push("---------------------");
            mess.push("Username : " + sName);
            mess.push("Phone : " + sPhone);
            mess.push("Email : " + sEmail);
            mess.push("Gender: " + sGender);
            alert(mess.join("\n"));
        }
    })