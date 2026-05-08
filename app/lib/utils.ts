import { Revenue } from './definitions';

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (revenue: Revenue[]) => {
  // y축에 표시할 레이블을 계산합니다
  // 최고값을 기준으로 1000 단위로 계산합니다
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // 전체 페이지 수가 7 이하이면,
  // 생략 부호 없이 모든 페이지를 표시합니다.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // 현재 페이지가 첫 3페이지 이내이면,
  // 처음 3개, 생략 부호, 마지막 2개를 표시합니다.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // 현재 페이지가 마지막 3페이지 이내이면,
  // 처음 2개, 생략 부호, 마지막 3개를 표시합니다.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // 현재 페이지가 중간 어딘가에 있으면,
  // 첫 페이지, 생략 부호, 현재 페이지와 인접 페이지들,
  // 또 다른 생략 부호, 마지막 페이지를 표시합니다.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
