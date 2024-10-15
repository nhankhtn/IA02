const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const firstNumberStr = formData.get('first-number');
    const secondNumberStr = formData.get('second-number');
    const operation = formData.get('operation');
    const resultField = document.getElementById('result');
    const notification = document.getElementById('notification');

    const numberRegex = /^[+-]?(\d+(\.\d*)?|\.\d+)$/;

    if (!numberRegex.test(firstNumberStr) || !numberRegex.test(secondNumberStr)) {
        notification.innerText = 'Cần nhập hai số hợp lệ để thực hiện phép tính';
        resultField.value = '';
        return;
    }

    const firstNumber = parseFloat(firstNumberStr);
    const secondNumber = parseFloat(secondNumberStr);

    if (!operation) {
        notification.innerText = 'Vui lòng chọn phép toán';
        return;
    }

    const operations = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/'
    }

    if (operation === 'divide' && secondNumber === 0) {
        notification.innerText = 'Không thể chia cho 0';
        resultField.value = '';
        return;
    }
    const result = eval(`${firstNumber} ${operations[operation]} ${secondNumber}`);

    resultField.value = result;
    notification.innerText = '';
}