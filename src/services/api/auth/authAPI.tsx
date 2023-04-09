import { AxiosResponse } from 'axios'

import { authInstance } from '@/services/api/auth/instanse'
import { RegConfirmation, RegEmailResenging} from '@/types/'

export const authAPI: IAuthAPI = {
  registrationConfirmation: data => {
    const { confirmationCode } = data

    return authInstance.post('/auth/registration-confirmation', { confirmationCode })
  },
  registrationEmailResending: data => {
    const { email } = data

    return authInstance.post('/auth/registration-email-resending', { email })
  }
}

interface IAuthAPI {
  registrationConfirmation: (data: RegConfirmation) => Promise<AxiosResponse>
  registrationEmailResending: (data: RegEmailResenging) => Promise<AxiosResponse>
}
