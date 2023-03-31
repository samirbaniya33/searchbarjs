const searchFun = () =>{

    let filter = document.getElementById("myInput").value.toUpperCase();
    console.log(filter);

    let myTable = document.getElementById("myTable");

    let tr = myTable.getElementsByTagName("tr");

    for(var i=1; i<tr.length; i++){

        for(var j=0; j<4; j++){

        let td = tr[i].getElementsByTagName("td")[j];
            if(td){
                let textValue = td.textContent || td.innerHTML;
                textValue = textValue.toUpperCase();

                if(textValue.indexOf(filter)>-1){
                    tr[i].style.display = "";
                    break;
                }else{
            
                    tr[i].style.display = "none";
                }
            }
        
        }
        
    }

}