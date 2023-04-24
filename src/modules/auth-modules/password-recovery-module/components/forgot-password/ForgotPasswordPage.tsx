import React, { useState } from 'react'

import { useMutation } from '@tanstack/react-query'
import { NextPage } from 'next'

import { Confirm } from '@/components/modals'
import { passwordRecoveryAPI } from '@/modules/auth-modules/password-recovery-module'
import { NameTitle, Preloader } from '@/ui'
import Link from '@/ui/link/Link'
import { ReCaptchaFormV3 } from '@/modules/auth-modules/password-recovery-module/components/forgot-password/forgot-password-form/reCaptcha/ForgotPasswordFormWithRecaptchaV3'

export const ForgotPasswordPage: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { mutate, isLoading, variables } = useMutation({
    mutationFn: passwordRecoveryAPI.passwordRecoveryWithRecaptcha,
    onSuccess: () => {
      setIsModalOpen(true)
    },
  })

  const onConfirm = () => {
    setIsModalOpen(false)
  }

  const onSubmitHandler = async (email: string, recaptcha: string) => {
    await mutate({ email, recaptcha })
  }

  const onClose = () => {
    setIsModalOpen(false)
  }

  if (isLoading) return <Preloader />

  return (
    <div
      className={
        'flex flex-col items-center content-center max-w-full border border-bgLogBorder w-4/12 bg-bgLog mt-24 mr-auto ml-auto mb-36'
      }
    >
      <NameTitle nameTitle={'Forgot Password'} className={'text-light-100 mt-6'} />

      <ReCaptchaFormV3 onSubmitHandler={onSubmitHandler} />

      <Confirm
        isOpen={isModalOpen}
        onConfirm={onConfirm}
        onClose={onClose}
        title={'Email sent'}
        text={`We have sent a link to confirm your email to ${variables?.email}`}
        confirmButtonText={'Ok'}
      />

      <Link
        href={'/auth/login'}
        title={'Back to Sign In'}
        className={'font-semibold text-[16px] leading-[24px] text-accent-500 mt-2 mb-4'}
      />
    </div>
  )
}
