import { SignInForm } from '@/app/components/Form/SignInForm'
import { DividedSection } from '../../components/layout/DividedSections/DividedSections'
import NoAccountSection from '@/app/components/NoAccountSection/NoAccountSection'

export default function page() {
  return (
    <main>
      <DividedSection
        LeftSection={<SignInForm />}
        RightSection={<NoAccountSection />}
      />
    </main>
  )
}
