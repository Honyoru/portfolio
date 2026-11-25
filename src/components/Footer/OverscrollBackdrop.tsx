// Fixed layer behind the whole page, hidden by the body background. It only shows up in the
// rubber-band gap when overscrolling, so the gap looks like the footer (its color + its rings)
// instead of a flat color. The ring mirrors the one in Footer.tsx (md+: 1030px, right -255px),
// placed so it lines up with the footer's ring when the page is scrolled to the bottom.
const OverscrollBackdrop = () => (
  <div aria-hidden className="bg-secondary pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden">
    <div className="bg-neutral/4 absolute -right-[255px] -bottom-[414px] hidden size-[1030px] rounded-full p-20 md:block">
      <div className="bg-neutral/4 size-full rounded-full p-20">
        <div className="bg-neutral/5 size-full rounded-full" />
      </div>
    </div>
  </div>
)

export default OverscrollBackdrop
