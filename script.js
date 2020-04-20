


  // create an array
      var myArr = [];
            
            function pushData()
            {
                var pval = "";

                // get value from the input text
                var inputText = document.getElementById('inputText').value;
                
                // append data to the array
                myArr.push(inputText);
                
               
                
                for(i = 0; i < myArr.length; i++)
                {
                    pval = pval + myArr[i] + "<br/>";
                }
                
                // display array data
                document.getElementById('pText').innerHTML = pval;
                
            }
            
        function clearData() {
          myArr.pop();
          document.getElementById('pText').innerHTML = myArr;
  }

  // console.log(myArr);

 

  function dataTable() {
      document.getElementById("pText").style.visibility = "hidden";
      document.getElementById("paragraph").style.visibility = "hidden";
      document.getElementById("countryId").style.visibility = "hidden";
      document.getElementById("Data").style.visibility = "hidden";
      document.getElementById("button1").style.visibility = "hidden";
      document.getElementById("button2").style.visibility = "hidden";
      document.getElementById("p1").style.visibility = "hidden";
      document.getElementById("inputText").style.visibility = "hidden";
      document.getElementById("Home").style.visibility = "hidden";


           fetch("https://pomber.github.io/covid19/timeseries.json" )
.then(
     res=>{
       res.json().then(
         data=> {
           console.log(data);
            //var fetchedData = JSON.parse(data);
         


           if(data.length > 0) {
             var temp = "";
                           
             //start for loop
             data.forEach((u)=>{
               temp+="<tr>";
               temp+="<tr>" + u.date + "</td>";
               temp+="<tr>" + u.confirmed + "</td>";
               temp+="<tr>" + u.deaths + "</td>";
               temp+="<tr>" + u.recovered + "</td></tr>";
             //close for loop
           })
           document.getElementById('data3').innerHTML = temp;
         
         }
       
     }
)
     }
)
  }









  
