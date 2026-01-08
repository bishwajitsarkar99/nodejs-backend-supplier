import Card from "@/components/card/card"
import Div from "@/components/div/div"
import { CategoryTableClient } from "./category-table-client"
interface PageProps {
  searchParams?: {
    page?: string
    perPage?: string
    search?: string
  }
}
export default async function CategoryDataTable({
  searchParams,
}: {
  searchParams?: Promise<{
    page?: string
    perPage?: string
    search?: string
  }>
}) {

  return (
    <Card className="shadow-sm hover:shadow-sm p-5">
      {/* <CategoryTableClient /> */}
    </Card>
  )
}

