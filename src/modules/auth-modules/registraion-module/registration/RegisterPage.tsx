import React from 'react'

import Link from 'next/link'

import { PATH_ROUTE } from '@/common/constants/PATH_ROUTE'
import { NameTitle } from '@/components/atoms/title/nameTitle'
import FormLayout from '@/components/FormLayout/FormLayout'
import RegistrationForm from '@/modules/auth-modules/registraion-module/registration/components/registraion-form/RegistrationForm'
import GoogleFacebook from '@/ui/GoogleFacebook/GoogleFacebook'

export const RegisterPage = () => {
  return (
    <FormLayout className="mt-[60px]">
      <NameTitle
        nameTitle="Sing Up"
        className="font-bold text-light-100 text-[20px] leading-[36px]"
      />
      <GoogleFacebook />
      <RegistrationForm />
      <Link
        href={PATH_ROUTE.RESEND_FORM}
        className="font-semibold text-[16px] leading-[24px] text-dark-100"
      >
        Didn&apos;t receive a confirmation message?
      </Link>
      <span className="pt-[18px] pb-[12px] text-[16px] leading-[24px] text-light-100 font-normal">
        Do you have an account?
      </span>
      <Link
        href={PATH_ROUTE.MAIN}
        className="font-semibold text-[16px] leading-[24px] text-accent-500"
      >
        Sing In
      </Link>
    </FormLayout>
  )
}
