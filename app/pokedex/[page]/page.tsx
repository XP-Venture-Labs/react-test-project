"use client";

import { SummaryCell } from "@/components/summaryCell";
import { useGetSummaryList } from "@/hooks/useGetSummaryList";
import { Table } from "flowbite-react";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const { summaryList } = useGetSummaryList(page);

  return (
    <main className="flex min-h-screen flex-col justify-between p-12">
      <h1 className="text-4xl font-bold dark:text-white mb-5">
        Pokemon Species Index
      </h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <Table striped className="rounded-lg shadow-md">
          <Table.Head>
            <Table.HeadCell>Species ID</Table.HeadCell>
            <Table.HeadCell>Thumbnail</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Colors</Table.HeadCell>
            <Table.HeadCell>Growth Rate</Table.HeadCell>
            <Table.HeadCell>Base Happiness</Table.HeadCell>
            <Table.HeadCell>Capture Rate</Table.HeadCell>
            <Table.HeadCell>Capture Rate</Table.HeadCell>
            <Table.HeadCell># of Varietes</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {summaryList.map((summary) => (
              <SummaryCell key={summary.id} summary={summary} />
            ))}
          </Table.Body>
        </Table>
      </div>
    </main>
  );
}
