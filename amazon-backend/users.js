import bcrypt from "bcryptjs"

export const users =[
    {
        name: "Vidit Gupta",
        email: "gvidit23@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: true,
    },
   
]