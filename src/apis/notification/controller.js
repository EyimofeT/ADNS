import nodemailer from 'nodemailer'
import handlebars from 'handlebars';
import fs from 'fs'
import {getenv} from '../../core/helper.js'


//function sends update email to user
export const send_mail= async (req, res)=>{
    
    const {first_name, last_name, email, amount, status}= req.body

    const name=last_name+' '+first_name
   
    try {
        // Read the HTML template file
        const htmlTemplate = fs.readFileSync('notification.html', 'utf-8');
    
        // Compile the template
        const template = handlebars.compile(htmlTemplate);
    
        // Replace the placeholders with actual values
        const htmlBody = template({ name,amount,status });
    
        // Create a transporter with your email service configuration
        const transporter = nodemailer.createTransport({
          service: `${getenv('EMAIL_SERVICE')}`,
          auth: {
            user: `${getenv('EMAIL_USERNAME')}`,
            pass: `${getenv('EMAIL_PASSWORD')}`,
          },
        });
    
        // Define the email options
        const mailOptions = {
          from: `${getenv('EMAIL_USERNAME')}`,
          to:email,
          subject: 'TRANSACTION NOTIFICATION',
          html: htmlBody,
        };
    
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
    
        res.json({status:"success", message: 'Email sent successfully' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}