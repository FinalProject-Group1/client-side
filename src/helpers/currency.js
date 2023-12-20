export const toRupiah = (data) => {
	return Number(data).toLocaleString('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0,
	});
};
