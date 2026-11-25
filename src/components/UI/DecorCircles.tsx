// Concentric rings in the same style as the footer, staggered left / right down the page
const positions = [
  'top-[2%] -right-[360px]',
  'top-[24%] -left-[360px]',
  'top-[48%] -right-[360px]',
  'top-[72%] -left-[360px]',
]

const DecorCircles = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    {positions.map((pos) => (
      <div
        key={pos}
        className={`bg-neutral/4 absolute hidden size-[720px] rounded-full p-14 md:block ${pos}`}>
        <div className="bg-neutral/4 size-full rounded-full p-14">
          <div className="bg-neutral/5 size-full rounded-full" />
        </div>
      </div>
    ))}
  </div>
)

export default DecorCircles
