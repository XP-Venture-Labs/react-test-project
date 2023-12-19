import clsx from "clsx";
import { PaginationButton } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PaginationBarProps {
  currentPage: number;
  totalPage: number;
}

const paginationButtonStyle =
  "px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

const PaginationBar = ({ currentPage, totalPage }: PaginationBarProps) => {
  const router = useRouter();
  const [page, setPage] = useState("");
  const lastPage = Math.min(Math.max(currentPage, 5), totalPage);
  const firstPage = Math.max(1, lastPage - 4);

  return (
    <nav className="self-end mt-5">
      <ul className="inline-flex -space-x-px text-base h-10">
        <Link href="/pokedex/1">
          <PaginationButton
            className={clsx(["rounded-s-lg", paginationButtonStyle])}
          >
            First
          </PaginationButton>
        </Link>
        <Link href={`/pokedex/${Math.max(1, currentPage - 1)}`}>
          <PaginationButton className={paginationButtonStyle}>
            Previous
          </PaginationButton>
        </Link>
        {Array.from(Array(lastPage - firstPage + 1).keys())
          .map((key) => key + firstPage)
          .map((page) => (
            <Link href={`/pokedex/${page}`} key={page}>
              <PaginationButton
                active={page === currentPage}
                className={clsx([
                  paginationButtonStyle,
                  page === currentPage &&
                    "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700",
                ])}
              >
                {page}
              </PaginationButton>
            </Link>
          ))}
        <li className="px-4 h-10 leading-tight text-gray-500 bg-white border dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
          <input
            className="h-full min-w-fit border-none w-64"
            min={1}
            max={totalPage}
            onChange={({ target: { value } }) =>
              setPage(Math.min(Math.max(1, +value), totalPage).toString())
            }
            onKeyDown={({ key }) => {
              key === "Enter" && router.push(`/pokedex/${page}`);
            }}
            placeholder="Input page then press Enter"
            type="number"
          />
        </li>
        <Link href={`/pokedex/${Math.min(currentPage + 1, totalPage)}`}>
          <PaginationButton className={paginationButtonStyle}>
            Next
          </PaginationButton>
        </Link>
        <Link href={`/pokedex/${totalPage}`}>
          <PaginationButton
            className={clsx(["rounded-e-lg", paginationButtonStyle])}
          >
            Last
          </PaginationButton>
        </Link>
      </ul>
    </nav>
  );
};

export default PaginationBar;
