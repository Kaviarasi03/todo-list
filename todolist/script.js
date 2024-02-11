
    //selecting ul
    var ul=document.getElementById("listbox")
    var input=document.getElementById("name")

    function add()
    {
        // document.get("input").value='';
        //create element tag
        var listitem=document.createElement("li")
        // listitem.innerHTML=+"<li id='icon' onclick='clr()'><img src='tic.jpg'></img>"
        listitem.innerHTML=input.value +"<button id='btn' onclick='clr(event)'>DONE</button>"+ "<button onclick='deleteitem(event)'>DELETE </button>"
        ul.append(listitem )
    }

    function deleteitem(event)
    {
        event.target.parentElement.remove()
    }
    
    function clr(event)
    {
        event.target.parentElement.style.backgroundColor="green"
    }
    function strike(event){
        event.target.style.textDecoration="line-through"
    }
    


    // <i class='fa-solid fa-trash'></i>
    // <img src='tic.jpg' onclick='clr()'>"
