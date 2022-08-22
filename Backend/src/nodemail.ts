import nodemailer from "nodemailer";

export const transporter = async ()=>{ 
    const pepito = nodemailer.createTransport({
    host: 'smtp.gmail.com' ,
    port:465,
    secure: true,
    auth:{
        user:"foodifyhenry@gmail.com",
        pass:"bquisfmpszsgnlnb"
    }
})
    return pepito
}

export const info = async(email:any)=>{ 
    const transportador = await transporter();
    const pepito2 : any = transportador.sendMail({
        from:"'Foodify Henry'<foodifyhenry@gmail.com>",
        to:email,
        subject:"Foodify review",
        text:"Give us a feedback of our page :D https://foodify-ten.vercel.app/reviews"
})
console.log("mesage send")
return
}