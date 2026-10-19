export function SectionDivider() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0">
      <div className="h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />
      <div className="absolute inset-x-[15%] -top-1 h-2 bg-gradient-to-r from-cyan/20 via-violet-400/30 to-cyan/20 blur-md" />
    </div>
  )
}
