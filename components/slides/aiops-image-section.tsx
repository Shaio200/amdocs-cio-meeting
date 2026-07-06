import Image from 'next/image'
import { SlideFrame } from '@/components/deck/slide-frame'
import aiopsImage from '../../images/aiops-integration-FKcoVD2hJuczgwY2K6EGDG.webp'

export function AiopsImageSection() {
  return (
    <SlideFrame
      index="AIOps"
      eyebrow="Discovery → Intelligent Operations"
      title={
        <>
          AIOps Integration Architecture —{' '}
          <span className="text-primary">from discovery to autonomous ops.</span>
        </>
      }
      tint="accent"
    >
      <div className="flex w-full flex-1 items-center justify-center">
        <div className="w-full h-full max-w-[1200px]">
          <div className="relative h-full w-full">
            <Image
              src={aiopsImage}
              alt="AIOps integration architecture infographic"
              fill
              style={{ objectFit: 'contain' }}
              priority={false}
            />
          </div>
        </div>
      </div>
    </SlideFrame>
  )
}
