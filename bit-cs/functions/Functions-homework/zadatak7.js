function CheckForPerfect(number)
{
var test = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            test += i;
          }
     }
   
     if(test === number && test!== 0)
        {
       console.log(number+ " is a perfect number.");
        } 
     else
        {
       console.log(number+  " is not a perfect number.");
        }   
 } 
CheckForPerfect(54); 
