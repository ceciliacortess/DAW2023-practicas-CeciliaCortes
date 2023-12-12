class Rombo {
    private diagonalH: number;
    private diagonalV: number;

    constructor(diagonalH: number, diagonalV: number) {
        this.diagonalH = diagonalH;
        this.diagonalV = diagonalV;
    }

    calcularArea(): number {
        return this.diagonalH * this.diagonalV;
    }
}

const rombo = new Rombo(5, 8);
const area = rombo.calcularArea();
console.log("El área del rombo es:", area);