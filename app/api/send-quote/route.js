// app/api/send-quote/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, company, services, budget, timeline, message, totalPrice } = data;

    // Configuration du transporteur Gmail avec fix pour certificat auto-signé
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Votre email Gmail
        pass: process.env.GMAIL_APP_PASSWORD, // Mot de passe d'application Gmail
      },
      // 🔧 SOLUTION pour l'erreur 'self-signed certificate'
      // Pour le développement local UNIQUEMENT
      tls: {
        rejectUnauthorized: false
      }
    });

    // Services sélectionnés formatés
    const servicesList = services.map(s => 
      `- ${s.name}: ${s.price.toLocaleString()} DZD`
    ).join('\n');

    // Email au client
    const clientMailOptions = {
      from: `DevLab <${process.env.GMAIL_USER}>`,
      to: email,
      subject: '✅ Confirmation de votre demande de devis - DevLab',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f97316 0%, #dc2626 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
            .service-item { padding: 10px; margin: 5px 0; background: #fef3c7; border-left: 4px solid #f97316; }
            .total { background: #fef3c7; padding: 20px; margin: 20px 0; text-align: center; border-radius: 10px; }
            .total-amount { font-size: 32px; font-weight: bold; color: #f97316; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #f97316 0%, #dc2626 100%); color: white; text-decoration: none; border-radius: 8px; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Demande de Devis Reçue</h1>
            </div>
            
            <div class="content">
              <p>Bonjour <strong>${name}</strong>,</p>
              
              <p>Merci d'avoir choisi <strong>DevLab</strong> pour votre projet digital !</p>
              
              <p>Nous avons bien reçu votre demande de devis et nous vous contacterons dans les <strong>24 heures</strong>.</p>
              
              <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">📋 Récapitulatif de votre demande</h2>
              
              <h3>Services sélectionnés :</h3>
              ${services.map(s => `
                <div class="service-item">
                  <strong>${s.name}</strong><br>
                  <span style="color: #6b7280;">${s.description}</span><br>
                  <strong style="color: #f97316;">${s.price.toLocaleString()} DZD</strong>
                </div>
              `).join('')}
              
              <div class="total">
                <p style="margin: 0; font-size: 18px; color: #6b7280;">Total Estimé</p>
                <div class="total-amount">${totalPrice.toLocaleString()} DZD</div>
                <p style="margin: 0; font-size: 14px; color: #6b7280;">* Prix indicatif, un devis détaillé vous sera envoyé</p>
              </div>
              
              <h3>Informations du projet :</h3>
              <ul>
                ${company ? `<li><strong>Entreprise :</strong> ${company}</li>` : ''}
                <li><strong>Budget :</strong> ${budget || 'Non spécifié'}</li>
                <li><strong>Délai souhaité :</strong> ${timeline || 'Non spécifié'}</li>
                ${message ? `<li><strong>Message :</strong> ${message}</li>` : ''}
              </ul>
              
              <h3>Prochaines étapes :</h3>
              <ol>
                <li>Notre équipe étudie votre demande</li>
                <li>Nous vous contactons sous 24h</li>
                <li>Discussion détaillée de votre projet</li>
                <li>Envoi du devis personnalisé</li>
              </ol>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://devlab.dz" class="button">Visiter notre site</a>
              </div>
            </div>
            
            <div class="footer">
              <p><strong>DevLab - Votre Partenaire Digital en Algérie</strong></p>
              <p>Email: contact@devlab.services | Tél: +213 698 784 457</p>
              <p style="font-size: 12px; margin-top: 20px;">
                Cet email a été envoyé automatiquement suite à votre demande de devis.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email à l'équipe DevLab
    const adminMailOptions = {
      from: `DevLab <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `🔔 Nouvelle demande de devis - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb; }
            .header { background: linear-gradient(135deg, #f97316 0%, #dc2626 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: white; padding: 20px; border: 1px solid #e5e7eb; }
            .info-box { background: #fef3c7; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #f97316; }
            .service-item { padding: 8px; margin: 5px 0; background: #f0fdf4; border-left: 3px solid #10b981; }
            .total { background: #fee2e2; padding: 15px; margin: 15px 0; text-align: center; border-radius: 8px; }
            .urgent { background: #fef2f2; border: 2px solid #dc2626; padding: 15px; border-radius: 8px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔔 Nouvelle Demande de Devis</h1>
              <p style="margin: 0;">Un client potentiel a soumis une demande</p>
            </div>
            
            <div class="content">
              <div class="urgent">
                <strong>⚡ ACTION REQUISE :</strong> Contacter le client dans les 24 heures
              </div>
              
              <h2 style="color: #f97316;">👤 Informations du Client</h2>
              <div class="info-box">
                <p><strong>Nom :</strong> ${name}</p>
                ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ''}
                <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Téléphone :</strong> <a href="tel:${phone}">${phone}</a></p>
              </div>
              
              <h2 style="color: #f97316;">💼 Services Demandés</h2>
              ${services.map(s => `
                <div class="service-item">
                  <strong>${s.name}</strong> - ${s.price.toLocaleString()} DZD<br>
                  <small style="color: #6b7280;">${s.description}</small>
                </div>
              `).join('')}
              
              <div class="total">
                <h3 style="margin: 0; color: #dc2626;">TOTAL: ${totalPrice.toLocaleString()} DZD</h3>
              </div>
              
              <h2 style="color: #f97316;">📊 Détails du Projet</h2>
              <div class="info-box">
                <p><strong>Budget estimé :</strong> ${budget || 'Non spécifié'}</p>
                <p><strong>Délai souhaité :</strong> ${timeline || 'Non spécifié'}</p>
                ${message ? `<p><strong>Message :</strong><br>${message}</p>` : ''}
              </div>
              
              <h2 style="color: #f97316;">✅ Actions à faire</h2>
              <ol>
                <li>Vérifier la disponibilité de l'équipe</li>
                <li>Préparer le devis détaillé</li>
                <li>Contacter le client par téléphone</li>
                <li>Envoyer le devis personnalisé</li>
                <li>Planifier un meeting de découverte</li>
              </ol>
              
              <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin-top: 20px;">
                <p style="margin: 0;"><strong>📅 Demande reçue le :</strong> ${new Date().toLocaleString('fr-DZ', { 
                  dateStyle: 'full', 
                  timeStyle: 'short' 
                })}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Envoyer les deux emails
    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(adminMailOptions);

    return Response.json(
      { 
        success: true, 
        message: 'Demande envoyée avec succès' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    return Response.json(
      { 
        success: false, 
        error: 'Erreur lors de l\'envoi de la demande',
        details: error.message 
      },
      { status: 500 }
    );
  }
}