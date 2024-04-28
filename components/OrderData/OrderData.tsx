import "./order-data.css"

const OrderData = () => {
  return (
    <div className="row col-12 container-fluid" style={{}} dir="rtl">
      <div className="col-12" dir="ltr">
        2024-04-28 00:21:31
      </div>
      <div className="col-12 text-center">
        <h1>فاتورة بيع</h1>
        <table className="table border border-dark table-striped table-bordered mt-3">
          <thead>
            <tr>
              <th>اسم البائع</th>
              <th>رقم الفاتورة</th>
              <th>تاريخ الفاتورة</th>
              <th>تاريخ التوصيل المقترح</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Soma E-commerce Shop</td>
              <td>240195</td>
              <td>Mon-22-Apr-2024</td>
              <td>Sat-27-Apr-2024</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-12 text-center ">
        <h1> المنتجات </h1>
        <table className="table border border-dark table-striped table-bordered mt-3">
          <thead>
            <tr>
              <th> البند/ الوصف</th>
              <th>الكمية</th>
              <th>السعر</th>
              <th>الخصم</th>
              <th>الضريبه</th>
              <th>السعر</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> سامسونج note 13</td>
              <td>1</td>
              <td>50.00</td>
              <td> 0%</td>
              <td>0.00</td>
              <td>50</td>
            </tr>
            <tr>
              <td colSpan={5}>الاجمالي</td>
              <td>50.00</td>
            </tr>
            <tr>
              <td colSpan={5}>الخصم</td>
              <td>0</td>
            </tr>
            <tr>
              {" "}
              <td colSpan={5}>الاجمالي بعد الخصم</td>
              <td>50.00</td>
            </tr>
            <tr>
              <td colSpan={5}>خدمة التوصيل</td>
              <td>50</td>
            </tr>
            <tr>
              <td colSpan={5}>المستحق</td>
              <td>150</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-12 text-center ">
        <h1> تفاصيل الشحنه والعنوان </h1>
        <table className="table border border-dark table-striped table-bordered mt-3">
          <thead>
            <tr>
              <th> رقم الاوردر</th>
              <th>اسم المستلم</th>
              <th>رقم التليفون</th>
              <th>العنوان</th>
              <th>المبلغ المستحق</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#240195</td>
              <td>dsadsads</td>
              <td>20-1015486616</td>
              <td>
                Alexandria-alex -الاسكندرية
                <br />
                العنوان بالتفصيل: sadsa
                <br />
                الرقم البريدي: 2
              </td>
              <td>150 ريال سعودي</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default OrderData
