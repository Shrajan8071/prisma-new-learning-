"use server";

import {PrismaClient} from '@prisma/client';


//1) create using just button-static data
// export const createUser = async() =>{
//     try {
//         const prisma = new PrismaClient;

//         // 1) -------------------for single creation //
//         // const newuser = {
//         //     email: "shrajan@gmail.comasdas",
//         //     name: "Shrajanasdasd",
//         // };
//         // const createdUser = await prisma.user.create({
//         //     data: newuser,
//         // });


//         // 2) ------------------for multiple creation // 
//         // const newuser = [
//         //     {
//         //         email: "1@gmail.com",
//         //         name: "1",
//         //     },
//         //     {
//         //         email: "2@gmail.com",
//         //         name: "2",
//         //     },
//         //     {
//         //         email: "3@gmail.com",
//         //         name: "3",
//         //     },
//         //     {
//         //         email: "4@gmail.com",
//         //         name: "4",
//         //     },
//         // ];

//         // const createdUser = await prisma.user.createMany({
//         //     data: newuser,
//         // });

//         // console.log("created a user ", createdUser);
//     } catch (error) {
//         console.log(error)
//     }
// }

//2) now handling the dynamic data
// export const createUser = async({username:username, email:email}:{ username: string; email: string }) =>{
//     try {
//         const prisma = new PrismaClient;

//         const newUser = {name:username, email:email};

//         const createdUser = await prisma.user.create({
//             data: newUser,
//         });

//         console.log("created a user ", createdUser);
//     } catch (error) {
//         console.log(error)
//     }
// }

// 3) fetching data multiple
// export const fetchUser = async() =>{
//     try {
//         const prisma = new PrismaClient;
//         //equivalent to:
//         // SQL: select * from table
//         const allUsers = await prisma.user.findMany({}); //{obj}
//         console.log("fetching unique user ", allUsers);
//         return allUsers;
//     } catch (error) {
//         console.log(error)
//     }
// }

// 4) fetching unique user   
// export const fetchUser = async() =>{
//     try {
//         const prisma = new PrismaClient;
//         //equivalent to:        
//         // SQL: select * from table where ... 
//         const uniqueUser = await prisma.user.findUnique({
//             where:{
//                 email: "1@gmail.com",
//             }
//         });
//         console.log("fetching unique user ", uniqueUser);

//         return uniqueUser;
//     } catch (error) {
//         console.log(error)
//     }
// }

//5) update when found
// export const updateUser = async() =>{
//     try {
//         const prisma = new PrismaClient;
//         await prisma.user.update({
//             where:{
//                 email: "1@gmail.com",
//             },
//             data:{
//                 name: "updated name",
//             },
//         })
//         console.log("updated whatever");
//     } catch (error) {
//         console.log(error)
//     }
// }

// 6) create if not found then put the updated value
// export const updateUser = async() =>{
//     try {
//         const prisma = new PrismaClient;
//         await prisma.user.upsert({
//             where:{
//                 email: "100@gmail.com",
//             },
//             update:{
//                 name: "updated name",
//             },
//             create:{
//                 email: "100@gmail.com",
//                 name: "Created name in update",
//             }
//         })
//         console.log("updated whatever");
//     } catch (error) {
//         console.log("error in update_create")
//     }
// }

// 7)deletion part
export const removeUser = async() =>{
    try {
        const prisma = new PrismaClient;
        await prisma.user.delete({
            where:{
                email: "1@gmail.com",
            },
        })
        console.log("deleted whatever");
    } catch (error) {
        console.log("error in delete")
    }
}