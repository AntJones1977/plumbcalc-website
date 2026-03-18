import { Check, X, Minus } from 'lucide-react'

type CellValue = boolean | string

interface ComparisonRow {
  feature: string
  plumbcalc: CellValue
  tradify: CellValue
  fergus: CellValue
  servicem8: CellValue
}

const rows: ComparisonRow[] = [
  { feature: 'Starting price (sole trader)', plumbcalc: '£19/mo', tradify: '£34/mo', fergus: '£39/mo', servicem8: 'Free' },
  { feature: 'Parametric estimating (auto-calc quantities)', plumbcalc: true, tradify: false, fergus: false, servicem8: false },
  { feature: 'Heat loss calculator (BS EN 12831)', plumbcalc: true, tradify: false, fergus: false, servicem8: false },
  { feature: 'Pipe run calculator', plumbcalc: true, tradify: false, fergus: false, servicem8: false },
  { feature: 'Full refurbishment multi-section estimates', plumbcalc: true, tradify: false, fergus: false, servicem8: false },
  { feature: 'Gas certificates (CP12/CP6/CD10/CD11)', plumbcalc: true, tradify: true, fergus: true, servicem8: false },
  { feature: 'Shareable quote links', plumbcalc: true, tradify: true, fergus: true, servicem8: true },
  { feature: 'Invoicing & payment tracking', plumbcalc: true, tradify: true, fergus: true, servicem8: true },
  { feature: 'Job scheduling', plumbcalc: true, tradify: true, fergus: true, servicem8: true },
  { feature: 'Maintenance callout workflow', plumbcalc: true, tradify: false, fergus: false, servicem8: false },
  { feature: 'Offline/PWA mode', plumbcalc: true, tradify: true, fergus: false, servicem8: true },
  { feature: 'Survey-to-estimate auto-creation', plumbcalc: true, tradify: false, fergus: false, servicem8: false },
  { feature: 'CP12 expiry email reminders', plumbcalc: true, tradify: false, fergus: false, servicem8: false },
  { feature: 'Data encryption (AES-256)', plumbcalc: true, tradify: false, fergus: false, servicem8: false },
]

function Cell({ value }: { value: CellValue }) {
  if (typeof value === 'string') return <span className="text-sm font-medium">{value}</span>
  if (value) return <Check className="h-4 w-4 text-[#27AE60] mx-auto" />
  return <X className="h-4 w-4 text-gray-300 mx-auto" />
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left p-3 font-medium text-gray-500 w-[280px]">Feature</th>
            <th className="text-center p-3 font-bold text-[#2C3E50] bg-green-50">PlumbCalc</th>
            <th className="text-center p-3 font-medium text-gray-600">Tradify</th>
            <th className="text-center p-3 font-medium text-gray-600">Fergus</th>
            <th className="text-center p-3 font-medium text-gray-600">ServiceM8</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="p-3 text-gray-700">{row.feature}</td>
              <td className="p-3 text-center bg-green-50/50"><Cell value={row.plumbcalc} /></td>
              <td className="p-3 text-center"><Cell value={row.tradify} /></td>
              <td className="p-3 text-center"><Cell value={row.fergus} /></td>
              <td className="p-3 text-center"><Cell value={row.servicem8} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
