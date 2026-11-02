'use client'

interface PrintButtonProps {
  className?: string
}

const PrintButton = ({ className }: PrintButtonProps) => {
  return (
    <button type="button" onClick={() => window.print()} className={className}>
      ⬇ Exporter en PDF (A4 – 1 page)
    </button>
  )
}

export default PrintButton
