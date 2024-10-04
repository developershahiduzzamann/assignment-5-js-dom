
const buttons = document.querySelectorAll('.btn-add-money');

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();

        const inputId = this.getAttribute('data-input');
        const balanceId = this.getAttribute('data-balance');
        
        const addMoneyInput = document.getElementById(inputId).value;
        const addMoneyNumber = parseFloat(addMoneyInput);

        const mainBalanceText = document.getElementById('main-balance').innerText;
        const mainBalanceNumber = parseFloat(mainBalanceText);

        const accountBalanceText = document.getElementById(balanceId).innerText;
        const accountBalanceNumber = parseFloat(accountBalanceText);

        if (!isNaN(addMoneyNumber) && addMoneyNumber > 0) {
            const newMainBalance = mainBalanceNumber + addMoneyNumber;
            document.getElementById('main-balance').innerText = newMainBalance;

            const newAccountBalance = accountBalanceNumber + addMoneyNumber;
            document.getElementById(balanceId).innerText = newAccountBalance;

            document.getElementById(inputId).value = '';
        } else {
            console.log('Invalid input. Please enter a valid number.');
        }
    });
});
