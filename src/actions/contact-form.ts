'use server'

const messages = {
  en: {
    name: 'Please provide your name.',
    email: 'Please provide your email address.',
    subject: 'Please provide a subject.',
    message: 'Please provide a message.',
    thanks: 'Thanks for your submission!',
    error: 'Oops! There was a problem submitting your form',
  },
  fr: {
    name: 'Merci d’indiquer votre nom.',
    email: 'Merci d’indiquer votre adresse e-mail.',
    subject: 'Merci d’indiquer un objet.',
    message: 'Merci d’écrire un message.',
    thanks: 'Merci pour votre message !',
    error: 'Oups ! Un problème est survenu lors de l’envoi du formulaire',
  },
}

const action = async (_: { success: boolean; message: string } | null, formData: FormData) => {
  const m = formData.get('lang') === 'fr' ? messages.fr : messages.en
  formData.delete('lang')

  try {
    const name = formData.get('name')
    if (!name)
      return {
        success: false,
        message: m.name,
      }

    const email = formData.get('email')
    if (!email)
      return {
        success: false,
        message: m.email,
      }

    const subject = formData.get('subject')
    if (!subject)
      return {
        success: false,
        message: m.subject,
      }

    const message = formData.get('message')
    if (!message)
      return {
        success: false,
        message: m.message,
      }

    const res = await fetch(process.env.CONTACT_FORM_ACTION_URL!, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })

    if (res.ok) {
      return { success: true, message: m.thanks }
    } else {
      const data = await res.json()
      console.error(data?.error)

      return {
        success: false,
        message: m.error,
      }
    }
  } catch (error) {
    console.error('Contact form submission error: ' + error)
    return {
      success: false,
      message: m.error,
    }
  }
}

export default action
