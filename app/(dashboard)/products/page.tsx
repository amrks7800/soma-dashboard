import DataPagination from "@/components/DataPagination"
import SearchForm from "@/components/SearchForm"
import Tile from "@/components/Tile"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { productsData } from "@/constants"
import { Edit, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ProductsPage = () => {
  return (
    <Tile className="p-0 flow mb-5">
      <header className="flex items-center justify-between flex-wrap p-5">
        <h2 className="text-lg font-[600]">المنتجات</h2>
        <SearchForm placeholder="أدخل اسم المنتج" />
      </header>
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
        {productsData.map(product => (
          <TableRow key={product.id}>
            <TableCell className="py-4 px-6">{product.id}</TableCell>
            <TableCell className="py-4 px-6">
              <div className="border p-4 grid place-content-center relative aspect-square rounded-lg">
                <Image
                  fill
                  src={product.imageUrl}
                  alt="product image"
                  className="object-cover object-center"
                />
              </div>
            </TableCell>
            <TableCell className="py-4 px-6">{product.productName}</TableCell>
            <TableCell className="py-4 px-6">${product.price}</TableCell>
            <TableCell className="py-4 px-6">
              {product.availableQuantity}
            </TableCell>
            <TableCell className="py-4 px-6">{product.discount}%</TableCell>
            <TableCell className="py-4 px-6">
              <div className="bg-primary-green leading-5 p-2 rounded-md text-white font-[600] text-sm text-center whitespace-nowrap">
                {product.available ? "متاح" : "غير متاح"}
              </div>
            </TableCell>
            <TableCell className="py-4 px-6">
              <div className="flex items-center gap-2">
                <Button
                  className="aspect-square w-[50px]"
                  variant={"outline"}
                  title="تعديل المنتج"
                  asChild
                >
                  <Link href={`/products/${product.id}`}>
                    <Edit size={15} />
                  </Link>
                </Button>
                <Button
                  className="aspect-square w-[50px]"
                  variant={"outline"}
                  title="حذف المنتج"
                >
                  <Trash size={15} />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
      <div className="p-5 text-end">
        <DataPagination />
      </div>
    </Tile>
  )
}
export default ProductsPage
