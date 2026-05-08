// 이 파일에는 데이터에 대한 타입 정의가 포함되어 있습니다.
// 데이터의 형태와 각 속성이 허용하는 데이터 타입을 설명합니다.
// 교육의 편의를 위해 이 타입들을 수동으로 정의합니다.
// 하지만 Prisma와 같은 ORM을 사용하면 이 타입들은 자동으로 생성됩니다.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // TypeScript에서 이를 string union 타입이라고 합니다.
  // "status" 속성은 'pending' 또는 'paid' 두 문자열 중 하나만 가질 수 있다는 의미입니다.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// 데이터베이스는 amount를 숫자로 반환하지만, 나중에 formatCurrency 함수로 문자열로 변환합니다
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
