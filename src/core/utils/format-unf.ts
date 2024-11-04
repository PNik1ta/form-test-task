export const formatUnf = (value: string) => {
	const numbersOnly = value.replace(/\D/g, ''); // Убираем все нечисловые символы
    
    // Форматируем номер в шаблон 890-000-000-00
    const part1 = numbersOnly.slice(0, 3);       // Первые 3 цифры
    const part2 = numbersOnly.slice(3, 6);       // Следующие 3 цифры
    const part3 = numbersOnly.slice(6, 9);       // Следующие 3 цифры
    const part4 = numbersOnly.slice(9, 11);      // Последние 2 цифры
    
    let formatted = part1;
    if (part2) formatted += `-${part2}`;
    if (part3) formatted += `-${part3}`;
    if (part4) formatted += `-${part4}`;
    
    return formatted;
 };