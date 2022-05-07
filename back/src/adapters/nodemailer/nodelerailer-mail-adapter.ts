import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer';



const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "280c2020274098",
      pass: "b88a188e7e8b04"
    }
});




export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body}: SendMailData){
    await transport.sendMail({
       from: "Chat Feedback <chat@email.com>",
       to: 'Mike <chael58@gmail.com',
       subject: subject,
       html: body,
    })
     
   }
    
}