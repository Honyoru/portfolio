'use client'

import action from '@/actions/contact-form'
import { useT } from '@/i18n/LanguageProvider'
import { useActionState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'

const ContactForm = () => {
  const [status, formAction, isPending] = useActionState(action, null)
  const { lang, t } = useT()
  const c = t.contact

  if (status?.success) {
    return (
      <p className="text-accent self-center text-center text-2xl font-medium">{status.message}</p>
    )
  }

  return (
    <form action={formAction}>
      <input type="hidden" name="lang" value={lang} />
      <Input label={c.name} id="name" name="name" placeholder={c.namePlaceholder} required />
      <Input
        label={c.email}
        id="email"
        type="email"
        name="email"
        placeholder={c.emailPlaceholder}
        required
      />
      <Input label={c.subject} id="subject" name="subject" placeholder={c.subjectPlaceholder} />
      <Textarea
        label={c.message}
        id="message"
        name="message"
        placeholder={c.messagePlaceholder}
        rows={7}
        required
      />
      {!status?.success && <p className="my-2 font-light text-red-600">{status?.message}</p>}
      <Button text={isPending ? c.submitting : c.submit} disabled={isPending} />
    </form>
  )
}

export default ContactForm
