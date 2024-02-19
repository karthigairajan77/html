function topFunction() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



// VALIDATION

function validation()
{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if(document.getElementById("name").value=="")
    {
        
        document.getElementById("name").style.borderColor = 'red';
    }
    else if(document.getElementById("mail").value=="")
    {
        
        document.getElementById("name").style.borderColor = 'black';

        document.getElementById("mail").style.borderColor = 'red';
        
    }
    else if(!(document.getElementById("mail").value.match(validRegex)))
    {
        document.getElementById("mail").style.borderColor = 'black';
        document.getElementById("mail").style.borderColor = 'red'
    }
    else if(document.getElementById("mno").value=="")
    {
        document.getElementById("mail").style.borderColor='black';
        document.getElementById("mno").style.borderColor = 'red';
    }
    else if(document.getElementById("mno").value>='a' && document.getElementById("mno").value<='z')
    {
        document.getElementById("mno").style.borderColor = 'red';
    }
    else if(document.getElementById("mno").value.length!=10)
    {
        document.getElementById("mno").style.borderColor = 'red';
    }
    else if(document.getElementById("message").value=="")
    {
        document.getElementById('mno').style.borderColor='black';
        document.getElementById('message').style.borderColor='red';
    }
    else{
        document.getElementById('message').style.borderColor='black';
        alert("submited");
        document.getElementById("name").value="";
        document.getElementById("mail").value="";
        document.getElementById("mno").value="";
        document.getElementById("message").value="";
        }
}