function steps(n) {
    let stair = '';
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=i; j++) {
            stair = stair + '#';
        }
        console.log(stair);
        stair = '';
    }
}
steps(20);