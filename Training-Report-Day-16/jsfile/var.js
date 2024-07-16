		function show()
		{
			var a=10; //javascript variables are loosely bounded i.e. same variable can have value as integer or string.
			var b=20; /* semi-colon is not necessary if declaring variables in different line, if declaring in same line 
					   semi-colon is needed*/
			var c=30; var d=40;
			let e= a+b+c+d;
			let paragraph= document.getElementById('main');  //getElement Method used to take value r to refer to an html elemenent based on id or class or tag name.
			paragraph.innerHTML = `
			The value of <b>a</b> is: ${a}; <br>
			The value of <b>b</b> is: ${b}; <br>
			The value of <b>c</b> is: ${c}; <br>
			The value of <b>d</b> is: ${d}; <br><br>
			The sum  is: ${e};
			`; // innerHTML print the content written to the document or update the content of documnet with th especified content.
		}