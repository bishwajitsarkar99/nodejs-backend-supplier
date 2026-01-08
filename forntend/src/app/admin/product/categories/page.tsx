import Section from "@/components/section/section"
import Grid from "@/components/grid/grid"
import GridItem from "@/components/grid/gridItem"
import CategoryDataTable from "./data-table"
import { MenuCard } from "@/components/table-menu-card/menu-card"
import SearchInput from "@/components/input/searchInput"
// import { CategoryForm } from "./categories-form"

export default async function CategoriesPage({
  searchParams,
}: {
  searchParams?: Promise<{
    page?: string
    perPage?: string
    search?: string
  }>
}) {
  return (
    <Section className="mx-5 my-2">
      <Grid
        className="sm:grid-flow-row md:grid-flow-col lg:grid-flow-col-dense xl:grid-flow-col mb-2"
        cols={3}
        gap={2}
      >
        <GridItem className="flex justify-between gap-4 h-10" colSpan={2}>
          <MenuCard />
          <SearchInput />
        </GridItem>
      </Grid>

      <Grid
        className="sm:grid-flow-row md:grid-flow-col lg:grid-flow-col-dense xl:grid-flow-col"
        cols={3}
        gap={4}
      >
        <GridItem colSpan={2}>
          {/* ✅ pass the Promise directly */}
          <CategoryDataTable searchParams={searchParams} />
        </GridItem>
        <GridItem>
          {/* <CategoryForm /> */}
        </GridItem>
      </Grid>
    </Section>
  )
}

