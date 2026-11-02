'use client'

interface PrintButtonProps {
  className?: string
}

const PrintButton = ({ className }: PrintButtonProps) => {
  return (
    <button type="button" onClick={() => window.print()} className={className}>
      ⬇ Export PDF ⬇
    </button>
  )
}

export default PrintButton
