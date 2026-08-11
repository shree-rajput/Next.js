"use client"
export function DeleteUser(params){
    const handleDelete = async () =>{
        let data = await fetch(`http://localhost:3000/api/users/${params.id}` , {
            method : "DELETE"
        });
        data = await data.json();
        if(data.success){
            alert(data.result);
        }
        console.log(data);
    }
    
 return (
    <button onClick={handleDelete}>Delete User</button>
 )
}

// let data = fetch(`http://localhost:3000/api/users/${params.id}` , {
//     method : "DELETE",
// })
// data = await data.json();
// console.log(data);