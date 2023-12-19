"use client";

import { useGetPokemonDetail } from "@/hooks/useGetPokemonDetail";
import { Badge, Button, Table, TableCell } from "flowbite-react";
import { useRouter } from "next/navigation";

export default function PokemonDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const detail = useGetPokemonDetail(id);
  const router = useRouter();

  if (!detail) return null;
  const { pokemon, species } = detail;

  return (
    <main className="flex min-h-screen flex-row justify-center items-center p-12">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold dark:text-white mb-5 capitalize">
          #{id} {pokemon.name}
        </h1>
        <img
          alt={pokemon.name}
          height={300}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
            .toString()
            .padStart(3, "0")}.png`}
          width={300}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold dark:text-white mb-5">Spices Data</h3>
        <Table striped className="rounded-lg shadow-md">
          <Table.Head>
            <Table.HeadCell>Color</Table.HeadCell>
            <Table.HeadCell>Growth Rate</Table.HeadCell>
            <Table.HeadCell>Base Happiness</Table.HeadCell>
            <Table.HeadCell>Capture Rate</Table.HeadCell>
            <Table.HeadCell>Egg Groups</Table.HeadCell>
            <Table.HeadCell>Species Habitats</Table.HeadCell>
            <Table.HeadCell>Spices Shapes</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <TableCell>{species.color.name}</TableCell>
            <TableCell>{species.growth_rate.name}</TableCell>
            <TableCell>{species.base_happiness}</TableCell>
            <TableCell>{species.capture_rate}</TableCell>
            <TableCell>
              {species.egg_groups.map(({ name }, index) => (
                <span key={index}>{name}</span>
              ))}
            </TableCell>
            <TableCell>{species.habitat?.name ?? "/"}</TableCell>
            <TableCell>{species.shape?.name ?? "/"}</TableCell>
          </Table.Body>
        </Table>
        <h3 className="text-2xl font-bold dark:text-white mb-5 mt-10">
          Pokemon Data
        </h3>
        <Table striped className="rounded-lg shadow-md">
          <Table.Head>
            <Table.HeadCell>Pokemon ID</Table.HeadCell>
            <Table.HeadCell>Pokemon Name</Table.HeadCell>
            <Table.HeadCell>Base Experience</Table.HeadCell>
            <Table.HeadCell>Height (m)</Table.HeadCell>
            <Table.HeadCell>Weight (kg)</Table.HeadCell>
            <Table.HeadCell>Types</Table.HeadCell>
            <Table.HeadCell>Abilities</Table.HeadCell>
            <Table.HeadCell>Forms</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <TableCell>{pokemon.id}</TableCell>
            <TableCell>{pokemon.name}</TableCell>
            <TableCell>{pokemon.base_experience ?? "/"}</TableCell>
            <TableCell>{pokemon.height / 10}</TableCell>
            <TableCell>{pokemon.weight / 10}</TableCell>
            <TableCell>
              {pokemon.types.map(({ type: { name } }, index) => (
                <Badge className="m-2" key={index}>
                  {name}
                </Badge>
              ))}
            </TableCell>
            <TableCell>
              {pokemon.abilities.map(({ ability: { name } }, index) => (
                <Badge className="m-2" key={index}>
                  {name}
                </Badge>
              ))}
            </TableCell>
            <TableCell>
              {pokemon.forms.map(({ name }, index) => (
                <span key={index}>{name}</span>
              ))}
            </TableCell>
          </Table.Body>
        </Table>
        <Button className="mt-5 self-start" onClick={router.back}>Back</Button>
      </div>
    </main>
  );
}
