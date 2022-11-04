# About:

This one is frontend of equation_calculator.


# DOM Tree:

<pre>
         [App]   footer
           |    /
           |   /
          Home -----alertBox          
         /   \           
        /     \           smallBox 
       /       \          /
  Evaluator      Evaluator 
    /  \              \
   /    \              \ 
  /      \              \
smallBox  BigBox        BigBox
  
  * SmallBox, BigBox, alertBox & eventBox : all are common components
  * While only Home, Evaluator, Bar and  Footer: all are main components
       
</pre>
