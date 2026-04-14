import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message, privacy } = body;

    // Validate required fields
    if (!name || !email || !message || !privacy) {
      return NextResponse.json(
        { message: 'Vyplňte všetky povinné polia a označte súhlas s podmienkami.' },
        { status: 400 }
      );
    }

    const emailHtml = `
      <h2>Nová správa z kontaktného formulára F INOX STEEL</h2>
      <p><strong>Meno:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefón:</strong> ${phone || 'Neuvedené'}</p>
      <p><strong>Typ projektu:</strong> ${projectType || 'Neuvedené'}</p>
      <br />
      <h3>Správa:</h3>
      <p>${message.replace(/\\n/g, '<br/>')}</p>
    `;

    // Process variables
    const apiKey = process.env.SMTP2GO_API_KEY;
    const sender = process.env.SMTP2GO_SENDER || 'info@finoxsteel.com';
    const recipient = process.env.CONTACT_FORM_RECIPIENT || 'info@finoxsteel.com';

    if (!apiKey) {
      console.warn("SMTP2GO_API_KEY is not defined. Email dispatch skipped.");
      return NextResponse.json(
        { message: 'Ďakujeme! Vaša správa bola úspešne odoslaná (DEV MODE).' },
        { status: 200 }
      );
    }

    // Call SMTP2GO API
    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: apiKey,
        to: [recipient],
        sender: sender,
        subject: `Nový dopyt od ${name} (F INOX STEEL)`,
        html_body: emailHtml,
        text_body: `Meno: ${name}\nEmail: ${email}\nTelefón: ${phone}\nTyp: ${projectType}\nSpráva:\n${message}`
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('SMTP2GO API Error:', result);
      throw new Error(result.data?.error || 'Failed to send email via SMTP2GO');
    }

    return NextResponse.json(
      { message: 'Ďakujeme! Vaša správa bola úspešne odoslaná.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Contact Error:', error);
    return NextResponse.json(
      { message: 'Vyskytla sa chyba pri odosielaní. Skúste to znova neskôr.' },
      { status: 500 }
    );
  }
}
