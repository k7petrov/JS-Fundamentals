function matrix(n) {
    for (let i = 1; i <= n; i++) {
        let result = `${n} `.repeat(n);
        console.log(result);
    }
}

matrix(7);