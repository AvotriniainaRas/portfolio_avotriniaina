import { useState } from 'react'
import emailjs from '@emailjs/browser'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function useContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const sendMessage = async (formEl: HTMLFormElement) => {
    setStatus('sending')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formEl,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const reset = () => setStatus('idle')

  return { status, sendMessage, reset }
}
