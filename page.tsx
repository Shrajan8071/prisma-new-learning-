"use client"; // Ensure it's a client component

import { useState, useEffect } from 'react';
import { arrayBuffer } from 'stream/consumers';
import { removeUser } from '../api/crud';

// Define a type that could be either a single user or an array of users
// type User = { id: string; email: string; name: string | null };

const Page = () => {
  return (
    <div className='bg-slate-400 flex flex-col justify-center items-center mx-auto w-100 h-[100vh]'>
            <form >
                <button 
                    type='submit'
                    formAction={removeUser}
                >
                    Click to Delete
                </button>
            </form>
    </div>
  );
};

export default Page;






















// (1)-------------when just insert based on clicking of button//
// const page = () => {
//     return (
//       <div>
//           <form action={createUser}>
//               <button>
//                   Create user
//               </button>
//           </form>
  
//       </div>
//     )
//   }

// 2)handling dynamic data by input 
// const page = () => {
//     const [username,setUsername] = useState("");
//     const [email,setEmail] = useState("");

//     const handleFormData = async (e:any ) =>{
//         e.preventDefault();
//         await createUser({username:username, email:email});
//     };

//   return (
//     <div className='bg-slate-400 flex flex-col justify-center items-center mx-auto w-100 h-[100vh]'>
//         <form onSubmit={handleFormData} className=' border-2 border-black p-5'>
//             <div className='flex flex-col gap-2  mb-5'>
//                 <label >Username</label>
//                 <input 
//                     className=' border-2 border-black bg-slate-300 outline-none' 
//                     type="text" 
//                     onChange={e=> setUsername(e.target.value)}/>
//             </div>
//             <div className='flex flex-col gap-2  mb-5'>
//                 <label >Email</label>
//                 <input 
//                     className=' border-2 border-black bg-slate-300 outline-none' 
//                     type="text" 
//                     onChange={e=> setEmail(e.target.value)}/>
//             </div>
//             <button>
//                 Create user
//             </button>
//         </form>

//     </div>
//   )
// }
// export default page


// 3) fetch multiple users 
// const page = () => {
    
//     interface User {
//         id: string;
//         email: string;
//         name: string | null;
//     };
//     const [userData,setUserData] = useState<User[]>([]);

//     // useEffect( () => {} ,[]);
//     useEffect( () => {
//         const getUsers = async() =>
//         {
//             const userData = await fetchUser();
//             setUserData(userData ?? []);
//         }
//         getUsers();
//     } ,[]);   

//   return (
//     <div className='bg-slate-400 flex flex-col justify-center items-center mx-auto w-100 h-[100vh]'>
        
//         {userData &&
//             userData.map((user,i)=>{
//                 return(
//                     <div key={i} className='grid grid-cols-2 gap-4 p-2 border-2 border-green-400 rounded-md my-2'>
//                         <div>Username: {user.name}</div>
//                         <div>Email: {user.email}</div>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }
// export default page



// 4) fetching unique users: 
// const Page = () => {

//     // Set userData as a single object or undefined
//     const [userData, setUserData] = useState<{ id: string; email: string; name: string | null } | undefined>(undefined);
  
//     useEffect(() => {
//       const getUsers = async () => {
//         const fetchedData = await fetchUser();  // fetchUser returns a single user object
//         setUserData(fetchedData ?? undefined);               // No need for nullish coalescing
//       };
  
//       getUsers();
//     }, []);
  
//     return (
//       <div className='bg-slate-400 flex flex-col justify-center items-center mx-auto w-100 h-[100vh]'>
//         {
//           userData ? (
//             <div className='grid grid-cols-2 gap-4 p-2 border-2 border-green-400 rounded-md my-2'>
//               <div>Username: {userData.name}</div>
//               <div>Email: {userData.email}</div>
//             </div>
//           ) : (
//             <div>No user found</div>
//           )
//         }
//       </div>
//     );
//   };
  
//   export default Page;

// 5) fetch both if arrayBuffer, then array or else single object 
// Define a type that could be either a single user or an array of users
// ==> the reason of problem is that, if single record, api returning single object instead of an array


// type User = { id: string; email: string; name: string | null };

// const Page = () => {

//   // State for both single user object or array of user objects
//   const [userData, setUserData] = useState<User | User[] | null>(null);

//   useEffect(() => {
//     const getUsers = async () => {
//       const fetchedData = await fetchUser(); // Can return single user or array
//       setUserData(fetchedData ?? null);      // Set the data or null if undefined
//     };

//     getUsers();
//   }, []);

//   const isArray = Array.isArray(userData); // Check if it's an array

//   return (
//     <div className='bg-slate-400 flex flex-col justify-center items-center mx-auto w-100 h-[100vh]'>
//       {
//         userData ? (
//           isArray ? (
//             // If userData is an array, map over it
//             (userData as User[]).map((user, i) => (
//               <div key={i} className='grid grid-cols-2 gap-4 p-2 border-2 border-green-400 rounded-md my-2'>
//                 <div>Username: {user.name}</div>
//                 <div>Email: {user.email}</div>
//               </div>
//             ))
//           ) : (
//             // If userData is a single object, display it
//             <div className='grid grid-cols-2 gap-4 p-2 border-2 border-green-400 rounded-md my-2'>
//               <div>Username: {(userData as User).name}</div>
//               <div>Email: {(userData as User).email}</div>
//             </div>
//           )
//         ) : (
//           <div>No user data found</div>
//         )
//       }
//     </div>
//   );
// };

// export default Page;


// 6) static update 
// const Page = () => {
//     return (
//       <div className='bg-slate-400 flex flex-col justify-center items-center mx-auto w-100 h-[100vh]'>
//               <form >
//                   <button 
//                       type='submit'
//                       formAction={updateUser}
//                   >
//                       Click to update
//                   </button>
//               </form>
//       </div>
//     );
//   };
  
//   export default Page;


//update wagera wala dono cheez ek hi se hojaega bcz simple hi hai
// const Page = () => {
//     return (
//       <div className='bg-slate-400 flex flex-col justify-center items-center mx-auto w-100 h-[100vh]'>
//               <form >
//                   <button 
//                       type='submit'
//                       formAction={updateUser}
//                   >
//                       Click to update
//                   </button>
//               </form>
//       </div>
//     );
//   };
  
//   export default Page;