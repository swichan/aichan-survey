interface Props { visible: boolean }

export default function ThankYouScreen({ visible }: Props) {
  if (!visible) return null
  return (
    <div className="text-center py-[80px] px-6 animate-fade-up">
      <span className="text-[48px] block mb-6">🌸</span>
      <h2 className="font-serif text-[40px] font-light text-charcoal mb-4">
        Thank you so much!
      </h2>
      <p className="text-[15px] text-mid leading-[1.7] max-w-[400px] mx-auto">
        ありがとうございます！
        <br /><br />
        Your answers will directly shape how we design.
      </p>
    </div>
  )
}
