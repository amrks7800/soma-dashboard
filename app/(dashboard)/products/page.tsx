import DataPagination from "@/components/DataPagination"
import ProductTableRow from "@/components/ProductTableRow"
import SearchForm from "@/components/SearchForm"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { getProducts } from "@/fetchers"
import { Suspense } from "react"

const ProductsPage = async () => {
  const products = await getProducts()

  return (
    <Tile className="p-0 flow mb-5">
      <header className="flex items-center justify-between flex-wrap p-5">
        <h2 className="text-lg font-[600]">المنتجات</h2>
        <Suspense fallback="loading...">
          <SearchForm placeholder="أدخل اسم المنتج" />
        </Suspense>
      </header>
      <Suspense fallback="loading...">
        <DataTable
          headers={[
            "رقم المنتج",
            "صورة المنتج",
            "اسم المنتج",
            "السعر",
            "الكمية المتاحة",
            "الخصم",
            "حالة المنتج",
            "",
          ]}
        >
          {products?.data?.result.map(product => (
            <ProductTableRow product={product} key={product.id} />
          ))}
        </DataTable>
      </Suspense>
      <div className="p-5 text-end">
        <Suspense fallback="loading...">
          <DataPagination />
        </Suspense>
      </div>
    </Tile>
  )
}
export default ProductsPage
