import React from 'react'

import { Header } from 'smarthr-ui'

import { ComponentMeta } from '@storybook/react'
// @ts-ignore
import { SelectCompanyAccount as StoryComponent } from 'smarthr-patterns/src/patterns/SelectCompanyAccount/SelectCompanyAccount'

export const SelectCompanyAccount = () => {
  return <StoryComponent />
}

export default {
  title: 'SelectCompanyAccount',
  component: SelectCompanyAccount,
  decorators: [
    (Story) => (
      <>
        <Header />
        <div style={{ padding: '1rem' }}>
          <Story />
        </div>
      </>
    ),
  ],
} as ComponentMeta<typeof SelectCompanyAccount>
