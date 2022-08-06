function fcheck(){
    var a=document.getElementById("fname").value;
    var b=0;
    b=(/\d/.test(a))
    if(b==0){
        document.getElementById("a").innerHTML="";
    }
    else{
        document.getElementById("a").innerHTML="Name do not contain number";
    }
    }
    function lcheck(){
        var a= document.getElementById("lname").value
         var b=(/\d/.test(a));
         if(b==0){
            document.getElementById("b").innerHTML= "";
         }else{
            document.getElementById("b").innerHTML= "Last name cannot be empty";
         }
        }
        function fblurcheck(){
            var a=document.getElementById("fname").value;
            if(a==""){
                document.getElementById("a").innerHTML="Name cant be empty";
            }
            else{
                if(/^[a-zA-Z]/.test(a) || a.indexOf('')>=0){
                    document.getElementById("a")="";
                }
            }
            
        }
        function lblurcheck(){
            var a=document.getElementById("lname").value;
            if(a==""){
                document.getElementById("b").innerHTML="Name cant be empty";
            }
            else{
                if(/^[a-zA-Z]+$/.test(a) || a.indexOf('')>=0){
                    document.getElementById("b")="";
                }
            }
            
        }
        function ablurcheck(){
            var a=document.getElementById("address").value;
    
    if(a==""){
        document.getElementById("c").innerHTML="Adrress cannot be empty";
    }
    else{
        document.getElementById("c").innerHTML="";
    }
    
        }
        function pcheck(){
            var a=document.getElementById("phone").value;
          var b=0;
          b=/\d/.test(a);
          if(b==0){
            document.getElementById("e").innerHTML="Please enter number only";
          }
          else{
            document.getElementById("e").innerHTML="";
          }
    
    
    
    
    
        }
        function pblurcheck(){
            var a=document.getElementById("phone").value;
            var b=a.length;
            if(b==0){
                document.getElementById("e").innerHTML="Phone number cannot be empty";
            }
            else if(b>10){
                document.getElementById("e").innerHTML="Phone number cannot be greater than 10 digit";
            }
            else if(b<10){
                document.getElementById("e").innerHTML="Phone number cannot be less than 10 digit";
            }
            else{
                if(/^[0-9]+$/.test(a)){
                    document.getElementById("e").innerHTML="";
                }
                else{
                    document.getElementById("e").innerHTML="Please enter number only";
                }
            }
       }
    
    function sub(){
        alert("ys");
    }
    function scheck(){
        var a=document.getElementById("state").value;
        var b="Choose."
        if(a==b)
        {
            document.getElementById("f").innerHTML="Please Select your state";
        }
        else{
            document.getElementById("f").innerHTML="";
        }

    }