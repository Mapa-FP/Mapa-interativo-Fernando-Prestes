const infoData = {
    //locação

    predioPrincipal: {
        title: "Prédio Principal",
        image: "assets/IMG/predio_principal.jpg"
    },
    anexo: {
        title: "em breve",
        image: ""
    },
    quadraCoberta: {
        title: "Quadra Coberta",
        image: "assets/IMG/quadraCoberta.jpeg"
    },
    quadrinha: {
        title: "Quadra aberta",
        image: "assets/IMG/quadrinha.jpeg"
    },

    //anexo

    labCadDeGestao: {
        title: "labCadDeGestão",
        image: "assets/IMG/laboratórioGestao.jpeg"
    },
    labCadAmbiente01: {
        title: "labCadAmbiente01",
        image: "assets/IMG/labCadAmbiente01.jpeg"
    },

    labCadAmbiente02: {
        title: "labCadAmbiente02",
        image: ""
    },
    biblioteca: {
        title: "biblioteca",
        image: "assets/IMG/biblioteca.jpeg"
    },
    
    //superior
    banheiroMasculinoS: {
        title: "banheiroMasculinoS",
        image: "assets/IMG/banheiroMasculinoS.jpeg"
    },
    banheiroFemininoS: {
        title: "banheiroFemininoS",
        image: "assets/IMG/banheiroFemininoS.jpeg"
    },
    salaDesenho01: {
        title: "salaDesenho01",
        image: "assets/IMG/desenho1.jpeg"
    },
    salaDesenho02: {
        title: "salaDesenho02",
        image: "assets/IMG/desenho2.jpeg"
    },
    salaDesenho03: {
        title: "salaDesenho03",
        image: "assets/IMG/desenho3E4.jpeg"
    },
    salaDesenho04: {
        title: "salaDesenho04",
        image: "assets/IMG/desenho3E4.jpeg"
    },
    patioSuperior: {
        title: "pátio",
        image: "assets/IMG/patioSuperior.jpeg"
    },

    //térreo

    salaMaker: {
        title: "salaMaker",
        image: "assets/IMG/salaMaker.jpeg"
    },
    salaAmbiente01: {
        title: "salaAmbiente01",
        image: "assets/IMG/salaAmbiente01.jpeg"
    },
    salaAmbiente02: {
        title: "salaAmbiente02",
        image: "assets/IMG/salaAmbiente02.jpeg"
    },
    salaAmbiente03: {
        title: "salaAmbiente03",
        image: ""
    },
    salaAmbiente04: {
        title: "salaAmbiente04",
        image: "assets/IMG/salaAmbiente04.jpeg"
    },
    salaAmbiente05: {
        title: "salaAmbiente05",
        image: "assets/IMG/salaAmbiente05.jpeg"
    },
    labInformatica: {
        title: "aquário",
        image: "assets/IMG/aquário.jpg"
    },
    labQuimica: {
        title: "labQuimica",
        image: ""
    },
    labFisica: {
        title: "labFisica",
        image: ""
    },
    salaProfessores: {
        title: "salaProfessores",
        image: ""
    },
    secretaria: {
        title: "secretaria",
        image: "assets/IMG/secretaria.jpeg"
    },
    patio: {
        title: "patio",
        image: "assets/IMG/patioPrincipal.jpg"
    },
    apm: {
        title: "em breve",
        image: ""
    },
    centroMemoria: {
        title: "em breve",
        image: ""
    },
    multimeios: {
        title: "multimeios",
        image: "assets/IMG/multimeios.jpeg"
    },

    //inferior 1
    banheiroMasculino1: {
        title: "banheiroMasculino",
        image: "assets/IMG/banheiroMascInferior.jpg"
    },
    banheiroFeminino2: {
        title: "banheiroFeminino",
        image: "assets/IMG/banheirofemInferior.jpg"
    },
    banheiroMasculinoC: {
        title: "desativado",
        image: ""
    },
    banheiroFemininoC: {
        title: "desativado",
        image: ""
    },
    cantinaRefeitorio: {
        title: "cantina",
        image: "assets/IMG/refeitório.jpg"
    },
    segurancaTrabalho: {
        title: "em breve",
        image: ""
    },
    banheiroFeminio1: {
        title: "banheiroFeminio",
        image: "assets/IMG/banheiroFeminino01.jpeg"
    },
    patioI1: {
        title: "patioI1",
        image: "assets/IMG/patioCantina.jpeg"
    },
    areaLuz: {
        title: "áreaLuz",
        image: "assets/IMG/areaLuz.jpeg"
    },

    //inferior 2

    
    pneumatica: {
        title: "desativado",
        image: ""
    },
    anfiteatro: {
        title: "desativado",
        image: "assets/IMG/anfiteatro.jpeg"
    },
    oficinaMecanica: {
        title: "desativado",
        image: ""
    }
};

function shownewbar(area) {
    const infoKey = area.getAttribute('data-info');
    const info = infoData[infoKey];
    
    if (info) {
        const newbar = document.getElementById('newbar');
        newbar.innerHTML = `
            <div class="newbar" style="display: flex; flex-direction: column;">
                <h2>${info.title}</h2>
                <img class="newimg" src="${info.image}" alt="${info.title}">
            </div>
        `;
        newbar.style.display = 'flex';
    }
}

// Adicionar listeners de evento para todas as áreas
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', () => shownewbar(area));
    area.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') shownewbar(area);
    });
});