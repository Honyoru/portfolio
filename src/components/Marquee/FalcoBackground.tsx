import falco from '@/assets/images/Falco.svg'


const FROM = [0x05, 0xea, 0xfa] // #05eafa
const TO = [0x00, 0x77, 0xd9] // #0077d9

const COPIES = 8 // need to be even
const ASPECT = 1316.2211 / 866.192 // viewBox ratio of the svg
const falcoUrl = typeof falco === 'string' ? falco : (falco as { src: string }).src

const mix = (t: number) =>
  `rgb(${FROM.map((c, i) => Math.round(c + (TO[i] - c) * t)).join(',')})`

// i = 0 -> FROM, i = COPIES/2 -> TO, i = COPIES -> FROM again (== next set's first copy)
const colors = Array.from({ length: COPIES }, (_, i) => mix(1 - Math.abs((i / COPIES) * 2 - 1)))

const maskStyle = {
  WebkitMaskImage: `url(${falcoUrl})`,
  maskImage: `url(${falcoUrl})`,
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
} as const

// soft top/bottom edges so the band never ends on a hard line
const fade = 'linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent)'
const fadeStyle = { WebkitMaskImage: fade, maskImage: fade } as const

const FalcoBackground = () => {
  // two identical sets -> translating the track by -50% is a perfect loop
  const items = [...colors, ...colors]

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-center overflow-hidden"
      style={fadeStyle}>
      <div className="animate-falco-drift flex h-[70%] w-max opacity-40 blur-[3px] motion-reduce:animate-none">
        {items.map((color, i) => (
          <div
            key={i}
            className="h-full shrink-0"
            style={{ ...maskStyle, backgroundColor: color, aspectRatio: ASPECT }}
          />
        ))}
      </div>

      {/* fade the left/right edges into the page background */}
      <div className="from-primary via-primary/0 to-primary absolute inset-0 bg-linear-to-r" />
    </div>
  )
}

export default FalcoBackground