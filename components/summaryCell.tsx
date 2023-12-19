import { Table } from "flowbite-react";
import type { PokemonSummary } from "@/types/pokemonSummary";

interface SummaryCellProps {
  summary: PokemonSummary;
}

const SummaryCell = ({
  summary: {
    base_happiness,
    capture_rate,
    color,
    growth_rate,
    id,
    imageUrl,
    name,
    varieties,
  },
}: SummaryCellProps) => (
  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
    <Table.Cell>{id}</Table.Cell>
    <Table.Cell>
      <img alt={name} height={100} src={imageUrl} width={100} />
    </Table.Cell>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{color.name}</Table.Cell>
    <Table.Cell>{growth_rate.name}</Table.Cell>
    <Table.Cell>{base_happiness}</Table.Cell>
    <Table.Cell>{growth_rate.name}</Table.Cell>
    <Table.Cell>{capture_rate}</Table.Cell>
    <Table.Cell>{varieties.length}</Table.Cell>
  </Table.Row>
);

export { SummaryCell };
