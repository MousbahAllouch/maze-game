
// this maze generated with no way to cheat 

window.addEventListener('load', (event) => {

    
    var wall=document.getElementsByClassName("boundary");
    var start=document.getElementById("start");
    var status_heading=document.getElementById("status");
    var win=document.getElementById("end");
    var score_box=document.getElementsByClassName("example");
    var status="";
    var score=0;
    var index=0;

    if_wall_is_hit();
    if_start_is_hit();
    if_start_clicked();
    if_win_is_hit();

    status_heading.innerHTML=" Begin by moving your mouse over the 'S'.";
    score_box[0].innerHTML=score;
    

    function if_wall_is_hit(){
        for (let i = 0; i < 5; i++) {

            wall[i].onmouseover = function(){

                if(index==0){
            
                    for (let i = 0; i < 5; i++) {
                        wall[i].style.backgroundColor="red";
                    };
                    score-=10;
                    status="You lost"
                    score_box[0].innerHTML=score;
                    status_heading.innerHTML=status;
                    index++
                }
            };
                
        };
    
    }

    function if_win_is_hit(){
    
        win.onmouseover = function(){
            console.log(index)
            if (index==0){
                for (let i = 0; i < 5; i++) {
                    wall[i].style.backgroundColor="green"
                    
                } 
                score+=5
                status="You won"
                status_heading.innerHTML=status;
                score_box[0].innerHTML=score;
                index--
            }
            
                
        };
    }

    function if_start_is_hit(){
        start.onmouseover = function(){
            if (index==1 || index==-1){
                for (let i = 0; i < 5; i++) {
                    wall[i].style.backgroundColor="#eeeeee"
                }
                index=0
            }
        };
    }

    function if_start_clicked(){
    document.addEventListener('click', function( event ) {
        if (start == event.target) {
            score=0;
            score_box[0].innerHTML=0;
            for (let i = 0; i < 5; i++) {
                wall[i].style.backgroundColor="#eeeeee"
            }
        }
        
      });
    }
  });



  