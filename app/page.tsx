import { Deck, type DeckSlide } from '@/components/deck/deck'
import { AiopsSlide } from '@/components/slides/aiops-slide'
import { AiopsImageSection } from '@/components/slides/aiops-image-section'
import {
  TitleSlide,
  PainSlide,
  DiagramSlide,
  CapabilitiesSlide,
  LadderSlide,
  UnlockSlide,
  JourneySlide,
  PocSlide,
  ProjectSlide,
  CloseSlide,
} from '@/components/slides/content-slides'

const slides: DeckSlide[] = [
  { id: 'title', label: 'Title', node: <TitleSlide /> },
  { id: 'pain', label: 'Current State', node: <PainSlide /> },
  { id: 'diagram', label: 'The Solution', node: <DiagramSlide /> },
  { id: 'capabilities', label: 'Capabilities', node: <CapabilitiesSlide /> },
  { id: 'aiops', label: 'AIOps Architecture', node: <AiopsSlide /> },
  { id: 'aiops-image', label: 'AIOps Image', node: <AiopsImageSection /> },
  { id: 'ladder', label: 'AI Roadmap', node: <LadderSlide /> },
  { id: 'unlock', label: 'What It Unlocks', node: <UnlockSlide /> },
  { id: 'journey', label: 'The Journey', node: <JourneySlide /> },
  { id: 'poc', label: 'The POC', node: <PocSlide /> },
  { id: 'project', label: 'The Project', node: <ProjectSlide /> },
  { id: 'close', label: 'Next Step', node: <CloseSlide /> },
]

export default function Page() {
  return <Deck slides={slides} />
}
