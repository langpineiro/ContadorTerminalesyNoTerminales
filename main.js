class produccion {
    constructor(cabeza, cuerpo){
        this.cabeza = cabeza;
        this.cuerpo = cuerpo;
    }
}
class    contar {
    addProducciones(produccion){
        let lower = 0;
        let upper = 0;
        let other = 0;
        for (let count = 0; count < produccion.cuerpo.length; count++)
        {
            if (produccion.cuerpo[count] >= 'a' && produccion.cuerpo[count] <= 'z')
            {
                lower++;
            }
            else if (produccion.cuerpo[count] >= 'A' && produccion.cuerpo[count] <= 'Z')
            {
                upper++;
            }
            else
                other++;
        }
        const listaProds = document.getElementById('tablita');
        const element = document.createElement('tr');
        element.innerHTML = `
        <td>${produccion.cabeza}</td>
        <td>${produccion.cuerpo}</td>
        <td>${lower}</td>
        <td>${upper}</td>
        `;
        listaProds.appendChild(element);
        this.resetForm();

    }
    resetForm(){
        document.getElementById('prod-formulario').reset();
    }
    
}
function resetTable(){
    location.reload();
}
//Eventos del  DOM
document.getElementById('prod-formulario').addEventListener('submit', function(event){
    const cabeza = document.getElementById('cabeza').value;
    const cuerpo = document.getElementById('cuerpo').value;
    const producciones = new produccion(cabeza,cuerpo);
    const ui = new contar();
    ui.addProducciones(producciones);
    event.preventDefault();
});