

$(document).ready(function (){
    $('#blanks form').submit(function(event){
    var marks=0;
      var blanks=["choice1", "choice2","choice3","choice4"]
        blanks.forEach(function(blank) {
            var userInput = $("input:radio[name=" + blank + "]:checked" ).val();
                    if(userInput=="B"){
                    marks = marks+10;
                    }
                })
          alert(marks)
    event.preventDefault();
 });
 });