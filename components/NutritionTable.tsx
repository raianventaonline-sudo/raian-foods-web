import type { NutritionRow } from "@/data/products";

type NutritionTableProps = {
  rows: NutritionRow[];
};

export function NutritionTable({ rows }: NutritionTableProps) {
  return (
    <div className="overflow-hidden rounded-md border border-line bg-white">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="bg-ink px-4 py-3 text-left text-sm font-semibold text-white">
          Información nutricional por 100 g
        </caption>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-line last:border-0">
              <th className="w-1/2 bg-cream px-4 py-4 align-top font-semibold text-ink md:px-5">{row.label}</th>
              <td className="px-4 py-4 text-muted md:px-5">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
