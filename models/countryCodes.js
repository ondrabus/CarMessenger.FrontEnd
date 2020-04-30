export const countryCodes = [
    { code: "cz", name: "Czech Republic", plateDisplay: (plate) => { return `${plate.substr(0,3).toUpperCase()} ${plate.substr(3).toUpperCase()}` }},
    { code: "sk", name: "Slovakia", plateDisplay: (plate) => { return plate } },
    { code: "de", name: "Germany", plateDisplay: (plate) => { return plate } },
    { code: "at", name: "Austria", plateDisplay: (plate) => { return plate } },
    { code: "pl", name: "Poland", plateDisplay: (plate) => { return plate } }
]