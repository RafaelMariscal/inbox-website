'use client'
import { ReactNode } from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export const GlobalGoogleReCaptchaProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
    console.log('GoogleReCaptchaProvider .env not found.')
    return <></>
  }
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      language="pt-BR"
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
