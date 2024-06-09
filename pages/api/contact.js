import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, message } = req.body;

    // Buat transporter Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Gunakan penyedia layanan email Anda
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Definisikan opsi email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: 'Pesan dari Form Kontak',
      text: message,
    };

    try {
      // Kirim email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email berhasil dikirim' });
    } catch (error) {
      res.status(500).json({ error: 'Error mengirim email' });
    }
  } else {
    res.status(405).json({ error: 'Metode tidak diizinkan' });
  }
}
