function getInitiative() {            

    var codeInitiative = document.getElementById("initiative").value;

     //Check ID Initiative 
    if(codeInitiative == '' || codeInitiative == null)
    {                                              
        document.getElementById("validate").style.display= "block";
        this.document.getElementById("root").innerHTML = "";
      document.getElementById("infoInitiative").style.display= "none";

    }   else{

this.document.getElementById("root").innerHTML = "";
document.getElementById("validate").style.display= "none";
document.getElementById("infoInitiative").style.display= "none";

//Creating elements
var app = document.getElementById('root');                                    
var  container = document.createElement('div');
container.setAttribute('class', 'container');                        
app.appendChild(container);

//Endpoint and replace
var url = '<ENDPOINT>';            
var url_param = url.replace("id_param", codeInitiative);

var request = new XMLHttpRequest();
request.open('GET', url_param, true);
request.setRequestHeader("Content-Type", "application/json");
request.setRequestHeader('zsessionid', '<API_KEY>');
request.onload = function () {    
            
    var data = JSON.parse(this.response);       
    
    //Get response
    if(data.QueryResult.TotalResultCount > 0){        

            if (request.status >= 200 && request.status < 400) {                                           

                for (i in data.QueryResult.Results) {                                                                                
                
                    var card = document.createElement('div');
                    card.setAttribute('class', 'card');
                    
                    var nameInitiative = document.createElement('h1');
                    nameInitiative.textContent = 'Initiative: ' + data.QueryResult.Results[i]._refObjectName;              
                    
                    var idInitiative = document.createElement('p');        
                    idInitiative.textContent = 'ID Initiative: ' +  data.QueryResult.Results[i].FormattedID;
                
                    var statusInitiative = document.createElement('p');
                    statusInitiative.textContent = 'Status: ' +  data.QueryResult.Results[i].State._refObjectName; 
                  
                    var externalId = document.createElement('p');
                    externalId.textContent = 'External ID: ' +  data.QueryResult.Results[i].State._refObjectUUID;
                                        
                    container.appendChild(card);
                    card.appendChild(nameInitiative);
                    card.appendChild(idInitiative);
                    card.appendChild(statusInitiative);
                    card.appendChild(externalId);
                }
            
            }else {
            var errorMessage = document.createElement('marquee')
            errorMessage.textContent = 'Its not working'
            app.appendChild(errorMessage)
            }
        }else{ // Show message
            document.getElementById("infoInitiative").style.display= "block";
        }
}            
request.send();
        
} // End check ID Initiative

} // End function