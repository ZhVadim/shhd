const arr1 = ["Ваш ежедневный ShadowDemonHD_ это ShadowDemonHD_"];
const arr2 = [
    "spilledGlue",
    "hackingCD",
    "HomieKiss",
    "Caught",
    "PLAYWITHGOOD",
    "poof",
    "basing",
    "ALERT",
    "Cute",
    "enchantment",
    "RAVE",
    "Explosion",
    "Pizdec",
    "NUCLEARBOMB",
    "TeaTime",
    "CakeTime",
    "CrayonTime",
    "nymnCorn",
    "PianoTime",
    "GuitarTime",
    "WineTime",
    "RainTime",
    "MathTime",
    "ViolinTime",
    "SaxTime",
    "RockTime",
    "WideRaveTime",
    "BeerTime",
    "KvasTime",
    "TrumpetTime",
    "buh2",
];
const randomArrays = [arr1, arr2];
function pepe() {
    let ans = "";
    const space = " ";

    randomArrays.forEach((arr, index) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        if (index > 0) {
            ans += space;
        }
        ans += arr[randomIndex];
    });

    return ans;
}
