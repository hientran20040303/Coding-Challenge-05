let employees = [
    { name: "Nana", hourlyRate: 27, hoursWorked: 41 },
    { name: "Bill", hourlyRate: 20, hoursWorked: 35 },
    { name: "Jane", hourlyRate: 35, hoursWorked: 50 },
    { name: "Hope", hourlyRate: 18, hoursWorked: 20 }
];

// Returns pay for up to 40 hours only
function calculateBasePay(rate, hours) {
    const baseHours = Math.min(hours, 40);
    return baseHours * rate;
}

// Returns 1.5x rate for hours over 40
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        const overtimeHours = hours - 40;
        return overtimeHours * (rate * 1.5);
    }
    return 0; 
}

// Deducts 15% tax
function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}

function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxAmount = calculateTaxes(grossPay);
    const netPay = grossPay - taxAmount;

    return {
        name: employee.name,
        basePay: `$${basePay}`,
        overtimePay: `$${overtimePay}`,
        grossPay: `$${grossPay}`,
        netPay: `$${netPay}`
    };
}

console.log("- Final Payroll Reports -");
employees.forEach(employee => {
    const payrollReport = processPayroll(employee);
    console.log(payrollReport);
});
