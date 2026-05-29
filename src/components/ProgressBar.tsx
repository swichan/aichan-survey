interface Props { progress: number }

export default function ProgressBar({ progress }: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-border-col z-50">
      <div
        className="h-full bg-linear-to-r from-blush to-dusty-rose rounded-r-[2px] transition-[width] duration-[400ms] ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
