currency = document.getElementById('currency');
amount = document.getElementById('amount');
itemName = document.getElementById('item-name');
business = document.getElementById('business');
currencySymbol = document.getElementById('currency-symbol');
displayLink = document.getElementById('display-link');

function changeSymbol() {
	switch(currency.value) {
		case 'GBP':
			currencySymbol.innerHTML = '£';
			break;
		case 'USD':
		case 'AUD':
		case 'CAD':
		case 'HKD':
		case 'MXN':
		case 'NZD':
		case 'SGD':
			currencySymbol.innerHTML = '$';
			break;
		case 'EUR':
			currencySymbol.innerHTML = '€';
			break;
		case 'BRL':
			currencySymbol.innerHTML = 'R$';
			break;	
		case 'CNY':
		case 'JPY':
			currencySymbol.innerHTML = '¥';
			break;
		case 'CZK':
			currencySymbol.innerHTML = 'Kč';
			break;
		case 'DKK':
		case 'NOK':
		case 'SEK':
			currencySymbol.innerHTML = 'kr';
			break;
		case 'HUF':
			currencySymbol.innerHTML = 'Ft';
			break;
		case 'ILS':
			currencySymbol.innerHTML = '₪';
			break;
		case 'MYR':
			currencySymbol.innerHTML = 'RM';
			break;
		case 'TWD':
			currencySymbol.innerHTML = 'NT$';
			break;
		case 'PHP':
			currencySymbol.innerHTML = '₱';
			break;
		case 'PLN':
			currencySymbol.innerHTML = 'zł';
			break;
		case 'RUB':
			currencySymbol.innerHTML = '₽';
			break;
		case 'CHF':
			currencySymbol.innerHTML = 'CHF';
			break;
		case 'THB':
			currencySymbol.innerHTML = '฿';
			break;
	}
}

function generateLink() {
	if (currency.value && amount.value && itemName.value && business.value) {
		displayLink.value = 'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&currency_code=' + currency.value + '&amount=' + amount.value + '&item_name=' + itemName.value + '&business=' + business.value;
	}
}