import Image from 'next/image'
import { SlideFrame } from '@/components/deck/slide-frame'
import aiopsImage from '../../images/aiops-integration-FKcoVD2hJuczgwY2K6EGDG.webp'

export function AiopsImageSection() {
  return (
    <SlideFrame
      index="AIOps"
      eyebrow="Discovery → Intelligent Operations"
      tint="accent"
      hideHeader
    >
      <div className="flex min-h-0 w-full flex-1 items-center justify-center px-2 sm:px-4 lg:px-6">
        <div className="relative h-full w-full max-w-[1600px]">
          <Image
            src={aiopsImage}
            alt="AIOps integration architecture infographic"
            fill
            style={{ objectFit: 'contain' }}
            priority={false}
          />
        </div>
      </div>
    </SlideFrame>
  )
}
