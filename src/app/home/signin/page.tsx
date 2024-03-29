import { SignIn } from '@/app/components/SignIn/SignIn'
import { DividedSection } from '../../components/layout/DividedLayout/DividedLayout'
import { NoAccountSection } from '@/app/components/NoAccountSection/NoAccountSection'

export default function page() {
  return (
    <main>
      <DividedSection
        LeftSection={<SignIn />}
        RightSection={<NoAccountSection />}
      />
    </main>
  )
}
