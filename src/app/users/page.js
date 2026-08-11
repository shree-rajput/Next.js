import Link from "next/link";

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
                    
                    <Link href={`users/${item.id}`}>{user.name}</Link>
                    <span><Link href={`users/${item.id}/update`}>Edit</Link></span>
                    </div>
                })
            }
        </div>
    )
}