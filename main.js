
                                var i = 1;
                                
                                var data = [];
                                var subject=[];
                                $(document).ready(function () {
                                    $("#add").click(function () {
                                        var text = $("#adding").val();
                                        var subj= $("#adding2").val();
                                        if (text == "" || subj=="") {
                                            alert("Enter the Subject");
                                            return false;
                                        }
                                        else {
                                            data[i-1] = text;
                                            subject[i-1]=subj;
                                            $(''+'<p>' + i + " " + data[i-1] +
                                                '   <i class="fas fa-arrow-circle-right"></i>'+' '+ subject[i-1] +'</p><hr><br>').appendTo('.notes');
                                            i++;
                                            localStorage.setItem((i-1).toString()+"title",text);
                                            localStorage.setItem((i-1).toString()+"subject",subj);

                                            $("#adding").val("");
                                            $("#adding2").val("");
                                        }

                                    });
                                $("#update").click(function(){
                                    var isfl=0;
                                    var indexx= $("#updating1").val();
                                var subjec= $("#updating2").val();
                                if(indexx=="" || subjec==""){
                                    alert("enter right details for updating");
                                   isfl=1;
                                }
                                else{
                                    var flag=0;
                                    for(var j=0;j<data.length; j++)
                                    if(data[indexx-1]==data[j]){
                                        flag=1;
                                    }
                                    if(flag==1){
                                       // data[indexx-1]=subjec;
                                        subject[indexx-1]=subjec;     
                                        localStorage.setItem((indexx-1).toString()+"subject",subjec);
                                        $(".notes").text("");
                                        for(var j=0;j<data.length; j++)
                                        $(''+'<p>' + (j+1) + " " + data[j] +
                                                '   <i class="fas fa-arrow-circle-right"></i>'+' '+ subject[j] +'</p><hr><br>').appendTo('.notes');
                                    i--;
                                    $("#updating1").val("");
                                    $("#updating2").val("");
                                    }
                                   
                                    else{
                                        alert("data does not exist")
                                      isfl=1;
                                    }
                                }
                              if(isfl==1)return false;
                              });

                                $("#remove").click(function (e) {
                                    e.preventDefault();
                                $(".notes").text("");
                                var index = $("#removing").val();
                                if(!$.isNumeric(parseInt(index)) || i<parseInt(index))
                                {alert("enter valid index");
                                $("#removing").val("");}
                                else{

                                    data.splice(index - 1, 1);
                                    localStorage.removeItem((index-1).toString()+"title");
                                    localStorage.removeItem((index-1).toString()+"subject");

                                for(var j=0;j<data.length; j++)
                                $(''+'<p>' + (j+1) + " " + data[j] +
                                                '   <i class="fas fa-arrow-circle-right"></i>'+' '+ subject[j] +'</p><hr><br>').appendTo('.notes');
                                    i--;
                                    $("#adding").val("");
                                    $("#removing").val("");
              
               }
             
            });
                                    $(".notr").mouseenter(function(){
                                        $(this).fadeOut(2000);
            });

                                    $(".notr").mouseleave(function(){
                                        $(this).fadeIn(1000);
            });
        });
