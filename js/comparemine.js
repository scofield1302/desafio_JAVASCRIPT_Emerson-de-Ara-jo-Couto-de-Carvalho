let ids_checkboxes = [];

function comparemine() {
    let checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    let checkedCount = 0;

          
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedCount++;  
            ids_checkboxes.push(checkbox.id);  
        }
    });
    console.log(ids_checkboxes)

    if (checkedCount === 0) {
        alert("Você não selecionou nenhum veículo para comparação. Por favor, selecione 2 opções.");
    } else if (checkedCount === 1) {
        alert("Você só selecionou um veículo para comparação. Por favor, selecione 2 opções.");
    } else if (checkedCount > 2) {
        alert("Você selecionou mais de dois veículos para comparação. Por favor, selecione apenas 2 opções.");    
    } else {
        
        
        ShowCompare();
        

        
    }
};

function HideCompare() {
    document.getElementById("popup").style.display = "none";
}

function ShowCompare() {
    document.getElementById("popup").style.display = "block";
    UpdateCompareTable();
}

function SetCarToCompare(ids_checkboxes) {
    class Carro {
        static info_veiculos = [
            //As informações de dimensões foram adicionadas aleatoriamente
            new Carro("Ford Ranger XL Cabine 2022", 0.51, 1.81, 0.232, 1020, "2.2 Diesel", 160, 1.1, "16\"", "R$ 150.000"),
            new Carro("Ford Ranger XLS 2.2 Diesel 2022", 0.53, 1.82, 0.237, 1050, "2.2 Diesel Turbo", 200, 1.15, "17\"", "R$ 175.000"),
            new Carro("Ford Ranger Storm 2022", 0.55, 1.83, 0.242, 1100, "3.2 Diesel Turbo", 250, 1.2, "18\"", "R$ 210.000")
        ];

        constructor(modelo, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, 
                    motor, potencia, volumeCacamba, roda, preco) {
            this.modelo = modelo;
            this.alturaCacamba = alturaCacamba;
            this.alturaVeiculo = alturaVeiculo;
            this.alturaSolo = alturaSolo;
            this.capacidadeCarga = capacidadeCarga;
            this.motor = motor;
            this.potencia = potencia;
            this.volumeCacamba = volumeCacamba;
            this.roda = roda;
            this.preco = preco;
        }

        static getCarDataById(id) {
            return Carro.info_veiculos[parseInt(id)];
        }
    }

    let veiculo1 = Carro.getCarDataById(parseInt(ids_checkboxes[0]) - 1);
    let veiculo2 = Carro.getCarDataById(parseInt(ids_checkboxes[1]) - 1);
    
    return { veiculo1, veiculo2 };
}

function UpdateCompareTable(){
   
    let { veiculo1, veiculo2 } = SetCarToCompare(ids_checkboxes); // Captura os veículos
        // Preenche os dados do veículo 1
        document.getElementById("vehicle1-modelo").textContent = veiculo1.modelo;
        document.getElementById("vehicle1-alturaCacamba").textContent = veiculo1.alturaCacamba;
        document.getElementById("vehicle1-alturaVeiculo").textContent = veiculo1.alturaVeiculo;
        document.getElementById("vehicle1-alturaSolo").textContent = veiculo1.alturaSolo;
        document.getElementById("vehicle1-capacidadeCarga").textContent = veiculo1.capacidadeCarga;
        document.getElementById("vehicle1-motor").textContent = veiculo1.motor;
        document.getElementById("vehicle1-potencia").textContent = veiculo1.potencia;
        document.getElementById("vehicle1-volumeCacamba").textContent = veiculo1.volumeCacamba;
        document.getElementById("vehicle1-roda").textContent = veiculo1.roda;
        document.getElementById("vehicle1-preco").textContent = veiculo1.preco;
        
        // Preenche os dados do veículo 2
        document.getElementById("vehicle2-modelo").textContent = veiculo2.modelo;
        document.getElementById("vehicle2-alturaCacamba").textContent = veiculo2.alturaCacamba;
        document.getElementById("vehicle2-alturaVeiculo").textContent = veiculo2.alturaVeiculo;
        document.getElementById("vehicle2-alturaSolo").textContent = veiculo2.alturaSolo;
        document.getElementById("vehicle2-capacidadeCarga").textContent = veiculo2.capacidadeCarga;
        document.getElementById("vehicle2-motor").textContent = veiculo2.motor;
        document.getElementById("vehicle2-potencia").textContent = veiculo2.potencia;
        document.getElementById("vehicle2-volumeCacamba").textContent = veiculo2.volumeCacamba;
        document.getElementById("vehicle2-roda").textContent = veiculo2.roda;
        document.getElementById("vehicle2-preco").textContent = veiculo2.preco.toLocaleString('pt-BR');
}