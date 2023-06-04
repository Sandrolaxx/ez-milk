export function getMonths(): string[] {
  return [
    'JANEIRO/2023',
    'FEVEREIRO/2023',
    'MARÇO/2023',
    'ABRIL/2023',
    'MAIO/2023',
    'JUNHO/2023',
  ];
}

export function getIntMonth(strMonth: string) {
  switch (strMonth) {
    case 'JANEIRO/2023':
      return 1;
    case 'FEVEREIRO/2023':
      return 2;
    case 'MARÇO/2023':
      return 3;
    case 'ABRIL/2023':
      return 4;
    case 'MAIO/2023':
      return 5;
    case 'JUNHO/2023':
      return 6;
    default:
      return 6;
  }
}

export function formatMoneyWithSign(amount: number) {
    return amount
        .toFixed(2)
        .replace("", "R$ ")
        .replace(".", ",")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
