function a(n) {
    let result = 1n;
    for (let i = 1n; i <= n ; i++) {
        result = result * i;
        
    }

    console.log(result.toString());

}

a(25)