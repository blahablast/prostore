import { cn } from '@/lib/utils'

export default function ProductPrice({
  value,
  className
}: {
  value: number
  classname?: string
}) {
  // Ensure two decimal places
  const stringValue = value.toFixed(2)
  // Get the Int/Float values
  const [intValue, floatValue] = stringValue.split('.')

  return (
    <p className={cn('text-2xl', className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  )
}
