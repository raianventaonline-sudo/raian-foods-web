import type { TechnicalRow } from "@/data/products";

type ProductTechnicalTableProps = {
  rows: TechnicalRow[];
};

const isUrl = (value: string) => value.startsWith("http://") || value.startsWith("https://");

function CellValue({ label, value }: TechnicalRow) {
  if (label === "Enlace Amazon" && isUrl(value)) {
    return (
      <a
        href={value}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-terracotta px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#A85F3A]"
      >
        Comprar en Amazon
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M7 17 17 7m0 0H8m9 0v9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    );
  }
  return <span className="leading-7 text-muted">{value}</span>;
}

export function ProductTechnicalTable({ rows }: ProductTechnicalTableProps) {
  return (
    <div className="overflow-hidden rounded-md border border-line bg-white">
      <table className="w-full border-collapse text-left text-sm">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-line last:border-0">
              <th className="w-2/5 bg-cream px-4 py-4 align-top font-semibold text-ink md:px-5">{row.label}</th>
              <td className="px-4 py-4 md:px-5">
                <CellValue label={row.label} value={row.value} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
