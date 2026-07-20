import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, XCircle, Loader2 } from 'lucide-react'
import { useContactForm } from './useContactForm'

const EASE = [0.22, 1, 0.36, 1] as const

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const { status, sendMessage, reset } = useContactForm()
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    message?: string
  }>({})

  const validate = (formData: FormData) => {
    const name = String(formData.get('from_name') ?? '').trim()
    const email = String(formData.get('from_email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const next: typeof errors = {}

    if (name.length < 2) next.name = 'Veuillez indiquer votre nom.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'E-mail invalide.'
    if (message.length < 10) next.message = 'Message trop court (10 caractères min).'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    if (!validate(formData)) return

    await sendMessage(formRef.current)
    formRef.current.reset()
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-10 text-center dark:border-gray-800 dark:bg-gray-900/40"
      >
        <CheckCircle2 size={40} className="text-accent" />
        <h3 className="mt-4 text-lg font-semibold">Message envoyé !</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Merci, je vous répondrai dès que possible.
        </p>
        <button
          onClick={reset}
          className="mt-6 text-sm font-medium text-primary hover:underline"
        >
          Envoyer un autre message
        </button>
      </motion.div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900/40"
    >
      <div className="mb-2 flex items-center gap-2.5 border-b border-gray-100 pb-5 dark:border-gray-800">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white dark:bg-white dark:text-gray-900">
          AR
        </span>
        <div>
          <span className="block font-semibold tracking-tight">Avotriniaina Ras</span>
          <span className="block text-xs text-gray-500 dark:text-gray-400">
            Contactez-moi directement ici
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="from_name" className="mb-1.5 block text-sm font-medium">
          Nom
        </label>
        <input
          id="from_name"
          name="from_name"
          type="text"
          className="w-full rounded-xl border border-transparent bg-gray-100 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white dark:bg-gray-800/60 dark:focus:bg-gray-800"
          placeholder="Votre nom"
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="from_email" className="mb-1.5 block text-sm font-medium">
          E-mail
        </label>
        <input
          id="from_email"
          name="from_email"
          type="email"
          className="w-full rounded-xl border border-transparent bg-gray-100 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white dark:bg-gray-800/60 dark:focus:bg-gray-800"
          placeholder="vous@exemple.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full resize-none rounded-xl border border-transparent bg-gray-100 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white dark:bg-gray-800/60 dark:focus:bg-gray-800"
          placeholder="Décrivez votre projet ou votre demande..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-950/30"
          >
            <XCircle size={16} />
            Une erreur est survenue. Réessayez ou contactez-moi directement par e-mail.
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
        whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-opacity disabled:opacity-60"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send size={16} />
            Envoyer le message
          </>
        )}
      </motion.button>
    </form>
  )
}
