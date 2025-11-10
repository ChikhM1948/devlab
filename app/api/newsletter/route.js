// app/api/newsletter/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === 'production'
      }
    });

    const currentDate = new Date().toLocaleString('fr-FR', {
      dateStyle: 'full',
      timeStyle: 'short'
    });

    // Email to admin (newsletter collection)
    const adminMailOptions = {
      from: `DevLab Newsletter <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: '📧 Nouvelle inscription à la newsletter DevLab',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f97316 0%, #ef4444 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb; }
            .email-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316; margin: 20px 0; }
            .email-address { font-size: 20px; font-weight: bold; color: #f97316; word-break: break-all; }
            .info-row { padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
            .label { font-weight: bold; color: #6b7280; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 Nouvelle Inscription Newsletter</h1>
              <p>Un utilisateur s'est inscrit à votre newsletter</p>
            </div>
            
            <div class="content">
              <div class="email-box">
                <p class="label" style="margin: 0 0 10px 0;">Email inscrit :</p>
                <p class="email-address">${email}</p>
              </div>

              <div class="info-row">
                <span class="label">Date d'inscription :</span>
                <span>${currentDate}</span>
              </div>

              <div class="info-row" style="border-bottom: none;">
                <span class="label">Source :</span>
                <span>Site web DevLab</span>
              </div>

              <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin-top: 20px;">
                <p style="margin: 0; color: #9a3412;">
                  <strong>💡 Action recommandée :</strong><br>
                  Ajoutez cet email à votre liste de diffusion pour l'envoyer des actualités, offres et contenus pertinents.
                </p>
              </div>
            </div>

            <div class="footer">
              <p>© ${new Date().getFullYear()} DevLab - Système de Newsletter</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Confirmation email to subscriber
    const userMailOptions = {
      from: `DevLab <${process.env.GMAIL_USER}>`,
      to: email,
      subject: '✅ Bienvenue dans la newsletter DevLab',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f97316 0%, #ef4444 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
            .section { background: #f9fafb; padding: 20px; margin: 20px 0; border-radius: 8px; }
            .button { display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #f97316 0%, #ef4444 100%); color: white; text-decoration: none; border-radius: 8px; margin: 10px 0; font-weight: bold; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; background: #f9fafb; border-radius: 0 0 10px 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Inscription Confirmée !</h1>
              <p>Bienvenue dans la communauté DevLab</p>
            </div>
            
            <div class="content">
              <h2 style="color: #f97316;">Merci de votre confiance ! 🎉</h2>
              
              <p>Nous sommes ravis de vous compter parmi nos abonnés. Vous recevrez désormais :</p>
              
              <div class="section">
                <ul style="margin: 0; padding-left: 20px;">
                  <li>📰 Nos dernières actualités et articles</li>
                  <li>🎁 Des offres exclusives et promotions</li>
                  <li>💡 Des conseils et astuces tech</li>
                  <li>🚀 Les nouveautés de nos services</li>
                  <li>📚 Des ressources gratuites</li>
                </ul>
              </div>

              <p>Vous pouvez dès maintenant découvrir nos services :</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://devlab.dz" class="button">Visiter Notre Site</a>
              </div>

              <div class="section">
                <h3 style="margin-top: 0; color: #f97316;">📞 Besoin d'aide ?</h3>
                <p style="margin: 0;">
                  <strong>Email :</strong> contact@devlab.info<br>
                  <strong>Téléphone :</strong> +213 698 784 457
                </p>
              </div>
            </div>

            <div class="footer">
              <p>© ${new Date().getFullYear()} DevLab - Tous droits réservés</p>
              <p style="font-size: 12px; margin-top: 15px;">
                Vous recevez cet email car vous vous êtes inscrit à notre newsletter.<br>
                Pour vous désinscrire, contactez-nous à contact@devlab.info
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { success: true, message: 'Inscription réussie' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'inscription', error: error.message },
      { status: 500 }
    );
  }
}