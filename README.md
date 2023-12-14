<h2>Array Methods</h2>
<p>Javascript has a number of inbuilt methods which can be used on arrays.</p>
<h3>Array length</h3>
<p>
  This is majorly used to find the length of an array by calling array.length.
</p>
<p>Other uses includes:</p>

<ul>
  <li>
    Getting the last item in an array using (array.length - 1) due to the zero
    indexed nature of array.
  </li>
  <li>
    Increasing or reducing the length of an array by passing a number lower or
    higher than the original length. <br />
    With increasing length it adds empty items in the added index place while
    reducing length will remove existing items occupying index outside of the
    array.length value.
  </li>
  <li>Adding items to an array using the array.length method as an index.</li>
</ul>

<h3>Array .toString() and .join() methods</h3>
<p>
  Both methods are used to turn an array into a string of items separated by
  commas by default. The difference is the .join() method allows us to specify
  what we want to use to separate the string of items asides the default commas
  while .toString() does not offer that option.
</p>

<h3>Array .pop() and .shift() method</h3>
<p>
  Both methods are used to remove items from an array. However, the .pop()
  method removes the last item while the .shift() method removes the first item
  of the array.
</p>
<h3>Array .push() and .unshift() method</h3>
<p>
  Both methods are used to add items to an array. However, the .push() method
  adds a new item to the end while the .unshift() method adds the new item to
  the beginning of the array.
</p>

<h3>Array .concat() method</h3>
<p>
  concat() method is used to merge an existing array into a new array. The new
  items or array to be concatenated is passed as an argument inside the concat
  parenthesis and a completely new array is created.
</p>

<h3>Array Delete</h3>
<p>
  This deletes an item from the array but unlike pop and shift method, the
  delete is called as a keyword and the item to be deleted is passed as an index
  after the array name.
</p>
<p>
  It is not adviseable to use because this method will leave the index of the
  deleted item with an empty item which returns undefined.
</p>

<h3>Array .slice() method</h3>
<p>
  This helps us to slice or cut out parts of our array to form a new array. This
  method doesnt alter the original array that was sliced. You simply specify the
  index of the item that you want to slice out.
</p>
<p>
  slice() method can take two argument, the first being the index from which to
  start the cut and the second is the index where the cut should end but will
  not include the item in the last index specified. If the second argument is
  not specified then the slice cuts up to the end of the array to form a new
  array.
</p>

<h3>Array .splice() method</h3>
<p>
  This removes items from an array without leaving holes and empty values in it
  unlike the .slice() method. It also allows removing more than one item at the
  same time.
</p>
<p>
  The .splice() method can take two arguments. The first is the index where the
  item to be deleted is and the second is the number of items to be removed. If
  the second argument isnt specified then it removes from the first argument to
  the end of the array.
</p>

<h3>Automatic toString()</h3>
<p>
  By default javscript automatically converts an array to strings separated by
  commas when the primitive string value is needed.
</p>
<br />

<h2>Function</h2>
<p>
  A function is a block of code which performs a particular task on execution.
  Function gets executed when it is invoked. It also affords reuseability,
  reducing repetition in our codes and using our codes with different values to
  get different result.
</p>
<h3>Function Syntax</h3>
<p>
  For function declaration, the keyword, function, followed by the function
  name, a parethesis() which may or may not hold parameters, and the curly
  brackets{} are used in order. The parameters are inputs which help us pass
  values to be used later to perform our task when the function is invoked.
</p>
<p>Function declaration can be hoisted unlike other function types.</p>
<p>
  Function can also be declared using a function expression in which case we
  declare a variable and assign the function as a value to that variable with
  the function keyword used after the asignment operator. Function expressions
  can be named or anonymous. However if its is named, the name is only local to
  that function and cannot be used outside the function scope.
</p>
<p>
  Another is the arrow function which is also an expression assigned to a
  variable but unlike the function expression, it is always anonymous and does
  not have the function keyword. This syntax is more concise than function
  expression and declaration.
</p>

<h3>Function Parameters</h3>
<p>
  Functions can take in parameters which enables us pass values to them when
  they are invoked to get different results. Parameters can be default, rest or
  destructured from arrays, and objects. Parameters can also be gotten from
  outside the function(global) or local to the function itself.
</p>

<p>
  The curly brackets is where the code for the function task is placed. <br />
  Asides the parameters in functions being local to that function, any variable
  declared in a function body is local to it and can only be accessed within the
  function.
</p>

<h3>Function Invocation</h3>
<p>
  To enable a function execute its task the function has to be called or invoked
  and this is done using the function name and the parenthesis where in the
  arguments or values are passed. The argument passed allows us to build a new
  instance of the function.
</p>

<p>
  Functions are invoked in many ways including from user events, automatically
  in cases of recursion or from the code.
</p>

<h3>Function Return</h3>
<p>
  A return statement in a function tells the function to stop its execution. It
  will also return a value based on the statement it was invoked from and if no
  return value is explicitly stated, it returns undefined. The value returned
  can be reused in various places in our code. With return statements we can use
  functions as variable values and object properties, pass it to and return it
  from other functions and statements. This behaviour makes function a frist
  class citizen in Javascript.
</p>
<br />

<h2>Control Flow Statement</h2>
<p>
  Control flow statements are one of the fundamental parts of Programming
  language. They allow us control the order our statementsgets executed based on
  if the meet certain conditions.
</p>
<p>Javascript has three main types of constrol statements namely:</p>
<ul>
  <li>
    <p>
      if/else statements: <br />
      This executes a block of code is certain conditions are met and another
      block if the condition is false
    </p>
  </li>
  <li>
    <p>
      switch statements: <br />
      This executes a block of code based on the value of a variable or an
      expression.
    </p>
    <p>
      The case part of the statement hold the values to the compared with the
      variable or expression. It usually also have a break after each case to
      allow the swtich statement to stop running once a condition has been met.
    </p>
    <p>
      Then a default block holds the code to be executed if none of the
      conditions are met.
    </p>
  </li>
  <li>
    <p>
      Loops: <br />
      This is used to execute a block of code repeatedly as long as the
      conditions stated keeps returning true. To stop a loop from running
      infinitely an exit condition must be stated.
    </p>
    <p>
      There are two main types of loops in Javascript. The for and while loop.
    </p>
    <h3>For loops</h3>
    <p>
      This holds the initialised variable whose assigned value is the point of
      start of the loop. <br />
      It also has the condition for which the loop will keep running and the
      incremental or decremental code to enable the loop stop. All the above are
      enclosed within parenthesis after the for keyword
    </p>
  </li>
</ul>
  <h3>While loops</h3>
    <p>
      Unlike the for loop, the while loop initial value is stated before the
      while loop is statement is written. The while keyword only holds the
      condition for the loop to keep running. This can cause the loop to run
      infinitelyif not exit condition is added.
    </p>
    <p>
      The exit condition is added inside the curly brackets after the execution
      code.
    </p>

    <h3>
      There also exist a do..while loop which is slightly similar to the while
      loop.
    </h3>
    <p>
      Unlike the while and for loops which only runs when the conditions
      are true, the do/while loop will run once before checking if the
      conditions for the loop is being met as such this is useful for statements
      where an action needs to be executed atleast once regardless of if
      conditions are met or not.
    </p>

<p>
  It should be noted that Javascript can execute statements based on mutiple
  conditions being met and this is possible using the logical operators to
  compare various conditions.
</p>
