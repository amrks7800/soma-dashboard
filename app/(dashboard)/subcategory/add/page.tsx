import AddSubcategoryModal from "@/components/AddSubcategoryModal"
import DataPagination from "@/components/DataPagination"
import SubCategoryRow from "@/components/SubCategoryRow"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { getAllCategories, getAllModules } from "@/fetchers"
import { FC, Suspense } from "react"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const AddSubcategoryPage: FC<Props> = async ({ searchParams }) => {
  const modulesPromise = getAllModules()
  const categoriesPromise = getAllCategories(Number(searchParams.page))

  const [modules, categories] = await Promise.all([
    modulesPromise,
    categoriesPromise,
  ])

  console.log(modules)

  return (
    <Tile className="flow">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-[600]">الفئات</h2>
        <AddSubcategoryModal categories={categories.data?.result || []} />
      </header>
      <DataTable
        headers={["رقم الفئة", "اسم القسم", "اسم المنتج", "اسم المنشئ", ""]}
      >
        {modules.data?.result.map((category, idx) => (
          <SubCategoryRow subCategory={category} idx={idx} key={category.id} />
        ))}
      </DataTable>
      <div className="p-5 text-end">
        <Suspense fallback="loading...">
          <DataPagination />
        </Suspense>
      </div>
    </Tile>
  )
}
export default AddSubcategoryPage
