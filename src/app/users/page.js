async function getUsers(){
    let data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
}

export default async function Page(){
  
    const data = await getUsers();
  
    return (
        <div>
            User List
            {
                data.map((user,id) => {
                  return   <div key={id}>
                    {user.name}
                    </div>
                })
            }
        </div>
    )
}