const form=document.getElementById("form")
form.addEventListener("submit",function(event){
    event.preventDefault()
    const todoname=document.getElementById("firstinput").value
    const des=document.getElementById("secondinput").value

    const obj={
        todoname:todoname,
        des:des
    }
    //showOnScreen(obj)
    axios.post("https://crudcrud.com/api/55310f42f6274029bc7a7e15d26d939e/Todos",obj)
        .then((res)=>{
            showOnScreen(res.data)
            //console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
})
function showOnScreen(obj)
{
    const ul=document.getElementById("listofitem")
    const li=document.createElement("li")
    li.textContent=`${obj.todoname}--${obj.des}`

    //button
    const done=document.createElement("button")
    const donetext=document.createTextNode("Done")
    done.appendChild(donetext)
    li.appendChild(done)
    //function
    done.addEventListener("click",function(){    
            const ol=document.getElementById("orderlist")
            ol.appendChild(li)
            li.removeChild(done)
            li.removeChild(Delete)
    })

    //Not done
    const Delete=document.createElement("button")
    const Deletetext=document.createTextNode("Delete")
    Delete.appendChild(Deletetext)
    li.appendChild(Delete)
    //function
    Delete.addEventListener("click",function(){
        // Delete button event listener
    Delete.addEventListener("click", function() {
        axios.delete(`https://crudcrud.com/api/55310f42f6274029bc7a7e15d26d939e/Todos/${obj._id}`)
            .then(() => {
                ul.removeChild(li)
            })
            .catch((err) => {
                console.log(err);
            });
    });

       
    })

    ul.appendChild(li)
}
window.addEventListener('DOMContentLoaded',function(){
    axios.get("https://crudcrud.com/api/55310f42f6274029bc7a7e15d26d939e/Todos")
        .then((res)=>{
            for(let i=0;i<res.data.length;i++)
            {
                showOnScreen(res.data[i])
            }
        })
        .catch((err)=>{
            console.log(err)
        })
})