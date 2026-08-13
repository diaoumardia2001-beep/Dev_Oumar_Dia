import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Seules les requêtes POST sont autorisées
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    const { name, email, message } = req.body || {};

    // Validation des données entrantes
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({ error: "Le nom est requis" });
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return res.status(400).json({ error: "L'adresse email est requise" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ error: "Format d'adresse email invalide" });
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Le message est requis" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const destinationEmail = process.env.CONTACT_TO_EMAIL || "diaoumardia2001@gmail.com";

    // Si Resend n'est pas encore configuré dans les env vars
    if (!apiKey) {
      console.warn("RESEND_API_KEY non configurée. Impossible d'envoyer l'email réel.");
      return res.status(500).json({
        error: "Le service d'envoi d'email n'est pas configuré sur le serveur (RESEND_API_KEY manquante)."
      });
    }

    // Appel à l'API Resend (sans fuite de secret au frontend)
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Oumar Dia <onboarding@resend.dev>",
        to: [destinationEmail],
        reply_to: email.trim(),
        subject: "Nouveau message depuis le portfolio — Oumar Dia",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px;">
            <h2 style="color: #8A2BE2; border-bottom: 2px solid #8A2BE2; padding-bottom: 10px;">
              Nouveau message depuis le portfolio
            </h2>
            <p><strong>Nom :</strong> ${name.trim()}</p>
            <p><strong>Email :</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #8A2BE2; border-radius: 4px;">
              <p style="margin: 0; white-space: pre-wrap;"><strong>Message :</strong></p>
              <p style="margin-top: 10px; white-space: pre-wrap;">${message.trim()}</p>
            </div>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erreur Resend API:", data);
      return res.status(500).json({
        error: data.message || "Erreur lors de l'envoi de l'email via le service."
      });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err: any) {
    console.error("Erreur serveur handler contact:", err);
    return res.status(500).json({
      error: "Erreur interne du serveur lors du traitement du message."
    });
  }
}
