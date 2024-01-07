function queueTime(customers, n) {
    if (customers.length === 0) {
        return 0;
    }
    const tills = new Array(n).fill(0); 
    for (const customer of customers) {
        const minTillIndex = tills.indexOf(Math.min(...tills)); 
        tills[minTillIndex] += customer; 
    }
    return Math.max(...tills);  
}

