// Функции для заданий

// Задание 1: Проверка логина и пароля
function checkLogin() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const resultDiv = document.getElementById('loginResult');
    
    if (login && password) {
        resultDiv.innerHTML = '✅ Доступ разрешен';
        resultDiv.style.backgroundColor = '#e8f5e9';
        resultDiv.style.color = '#2e7d32';
        resultDiv.style.borderColor = '#4caf50';
    } else {
        resultDiv.innerHTML = '❌ Ошибка: логин и пароль должны быть заполнены';
        resultDiv.style.backgroundColor = '#ffebee';
        resultDiv.style.color = '#c62828';
        resultDiv.style.borderColor = '#f44336';
    }
}

// Задание 2: Первое truthy-значение
function findFirstTruthy() {
    const val1 = document.getElementById('val1').value;
    const val2 = document.getElementById('val2').value;
    const val3 = document.getElementById('val3').value;
    const resultDiv = document.getElementById('truthyResult');
    
    // Преобразуем строки в соответствующие типы
    const parsed1 = parseValue(val1);
    const parsed2 = parseValue(val2);
    const parsed3 = parseValue(val3);
    
    const result = parsed1 || parsed2 || parsed3;
    
    resultDiv.innerHTML = `Результат: ${formatValue(result)} (${typeof result})`;
    resultDiv.style.backgroundColor = '#e3f2fd';
    resultDiv.style.color = '#0d47a1';
    resultDiv.style.borderColor = '#2196f3';
}

// Интерактивные примеры
function evaluateExpressions() {
    const expr1 = document.getElementById('expr1').value;
    const expr2 = document.getElementById('expr2').value;
    const expr3 = document.getElementById('expr3').value;
    const resultDiv = document.getElementById('expressionsResult');
    
    try {
        const res1 = eval(expr1);
        const res2 = eval(expr2);
        const res3 = eval(expr3);
        
        resultDiv.innerHTML = `
            <div style="margin-bottom: 10px;"><strong>${expr1}</strong> = ${formatValue(res1)}</div>
            <div style="margin-bottom: 10px;"><strong>${expr2}</strong> = ${formatValue(res2)}</div>
            <div><strong>${expr3}</strong> = ${formatValue(res3)}</div>
        `;
        resultDiv.style.backgroundColor = '#fff3e0';
        resultDiv.style.color = '#bf360c';
        resultDiv.style.borderColor = '#ff9800';
    } catch (e) {
        resultDiv.innerHTML = '❌ Ошибка в выражении';
        resultDiv.style.backgroundColor = '#ffebee';
        resultDiv.style.color = '#c62828';
        resultDiv.style.borderColor = '#f44336';
    }
}

// Вспомогательные функции
function parseValue(str) {
    if (str === 'true') return true;
    if (str === 'false') return false;
    if (str === 'null') return null;
    if (str === 'undefined') return undefined;
    if (str === '""' || str === "''") return '';
    if (!isNaN(str) && str.trim() !== '') return Number(str);
    if (str.startsWith('"') && str.endsWith('"')) return str.slice(1, -1);
    if (str.startsWith("'") && str.endsWith("'")) return str.slice(1, -1);
    return str;
}

function formatValue(value) {
    if (value === '') return '"" (пустая строка)';
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    return JSON.stringify(value);
}

// Автоматический вызов при загрузке для демонстрации
window.onload = function() {
    setTimeout(() => {
        checkLogin();
        findFirstTruthy();
    }, 100);
};