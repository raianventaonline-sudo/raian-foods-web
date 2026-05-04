import type { TechnicalRow } from "@/data/products";

type ProductTechnicalTableProps = {
  rows: TechnicalRow[];
};

export function ProductTechnicalTable({ rows }: ProductTechnicalTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white">
      <table className="w-full border-collapse text-left text-sm">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-line last:border-0">
              <th className="w-2/5 bg-cream px-4 py-4 align-top font-semibold text-ink md:px-5">{row.label}</th>
              <td className="px-4 py-4 leading-7 text-muted md:px-5">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
