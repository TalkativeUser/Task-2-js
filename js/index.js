
    var finalResulte;

function srand () {
       let x = Math.floor((Math.random() * 10) + 1);

            if(x==finalResulte) {   // 0 x    2 final

                    if(x==10) {
                    x-=2;  //    
                    }

                    else if(x==0) {

                        x+=2;
                    }

                    else {

                        x=x+1;   //  2  
                    }

            }

             finalResulte=x;

                var arr=[      
                            '" Two things are infinite: the universe and human stupidity; and Im not sure about the universe."',
                            '" So many books, so little time."',
                            '" You only live once, but if you do it right, once is enough."',
                            '" Be the change that you wish to see in the world."',
                            '" In three words I can sum up everything Ive learned about life: it goes on."',
                            '" If you tell the truth, you dont have to remember anything."',
                            '" A friend is someone who knows all about you and still loves you."',
                            '"So many books, so little time."',
                            '" Always forgive your enemies; nothing annoys them so much."',
                            '" It is better to be hated for what you are than to be loved for what you are not."',
                            '" To live is the rarest thing in the world. Most people exist, that is all."',
                ]
                var arr2=[      
                            '  --Elbert Hubbard',
                            ' --Nelson Mandela',
                            ' --Frank Sinatra',
                            ' --Wayne Gretzy',
                            ' --Epictetus',
                            ' -- Albert Einstein',
                            ' --Steve Jobs',
                            ' --Marilyn Monroe',
                            ' --Oscar Wilde',
                            ' --Maya Angelou',
                            ' --Mark Twain',
                ]

                document.getElementById('Quete').innerHTML=arr[finalResulte];
                document.getElementById('scintestName').innerHTML=arr2[finalResulte];
                console.log(finalResulte)
            //  10   8  9  10   8  0  1  2  0

}



// var z=srand();
// console.log(z)