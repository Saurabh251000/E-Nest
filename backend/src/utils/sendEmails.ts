import nodemailer from 'nodemailer';

export const sendConfirmationEmail = async (userEmail: string, sessionDetails: any) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
      user: process.env.EMAIL_USER, // Add your email
      pass: process.env.EMAIL_PASS, // Add your password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Mentorship Session Confirmation',
    text: `Your session with ${sessionDetails.mentorName} is confirmed for ${sessionDetails.sessionDate}. Session Type: ${sessionDetails.sessionType}.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
