const infoData = {
    //locação

    predioPrincipal: {
        title: "Prédio Principal",
        image: "assets/IMG/predio_principal.jpg"
    },
    anexo: {
        title: "anexo",
        image: "assets/IMG/corredorAnexo.jpg"
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
        title: "labCadAmbiente",
        image: "assets/IMG/imagelab.jpg"
    },

    labCadAmbiente02: {
        title: "labCadAmbiente",
        image: "assets/IMG/labCadAmbiente02.jpeg"
    },
    biblioteca: {
        title: "biblioteca",
        image: "assets/IMG/biblioteca.jpeg"
    },

    //superior
    banheiroMasculinoS: {
        title: "banheiro masculinoS",
        image: "assets/IMG/banheiroMasculinoS.jpeg"
    },
    banheiroFemininoS: {
        title: "banheiro femininoS",
        image: "assets/IMG/banheiroFemininoS.jpeg"
    },
    salaDesenho01: {
        title: "sala Desenho",
        image: "assets/IMG/desenho1.jpeg"
    },
    salaDesenho02: {
        title: "sala Desenho",
        image: "assets/IMG/desenho2.jpeg"
    },
    salaDesenho03: {
        title: "sala Desenho",
        image: "assets/IMG/desenho3E4.jpeg"
    },
    salaDesenho04: {
        title: "sala Desenho",
        image: "assets/IMG/desenho3E4.jpeg"
    },
    patioSuperior: {
        title: "pátio",
        image: "assets/IMG/patioSuperior.jpeg"
    },

    //térreo

    salaMaker: {
        title: "sala Maker",
        image: "assets/IMG/salaMaker.jpeg"
    },
    salaAmbiente01: {
        title: "laboratório",
        image: "assets/IMG/salaAmbiente01.jpeg"
    },
    salaAmbiente02: {
        title: "laboratório",
        image: "assets/IMG/salaAmbiente02.jpeg"
    },
    salaAmbiente03: {
        title: "laboratório",
        image: "assets/IMG/lab3.jpg"
    },
    salaAmbiente04: {
        title: "laboratório",
        image: "assets/IMG/salaAmbiente04.jpeg"
    },
    salaAmbiente05: {
        title: "laboratório",
        image: "assets/IMG/salaAmbiente05.jpeg"
    },
    labInformatica: {
        title: "aquário",
        image: "assets/IMG/aquário.jpg"
    },
    labQuimica: {
        title: "em breve",
        image: ""
    },
    labFisica: {
        title: "em breve",
        image: ""
    },
    salaProfessores: {
        title: "em breve",
        image: ""
    },
    secretaria: {
        title: "secretaria",
        image: "assets/IMG/secretaria.jpeg"
    },
    patio: {
        title: "pátio",
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
        title: "banheiro masculino",
        image: "assets/IMG/banheiroMascInferior.jpg"
    },
    banheiroFeminino2: {
        title: "banheiro feminino",
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
        title: "segurança do trabalho",
        image: "assets/IMG/seguranca.jpg"
    },
    banheiroFeminio1: {
        title: "banheiro feminio",
        image: "assets/IMG/banheiroFeminino01.jpeg"
    },
    patioI1: {
        title: "pátio",
        image: "assets/IMG/patioCantina.jpeg"
    },
    areaLuz: {
        title: "área de luz",
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

function showLocationModal(area) {
    const infoKey = area.getAttribute('data-info');
    const info = infoData[infoKey];
    
    if (info) {
        const modal = new bootstrap.Modal(document.getElementById('locationModal'));
        const modalTitle = document.getElementById('locationModalLabel');
        const modalImage = document.getElementById('modalImage');
        
        modalTitle.textContent = info.title;
        modalImage.src = info.image;
        modalImage.alt = info.title;
        
        modal.show();
    }
}

// Event listeners para as áreas
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', () => showLocationModal(area));
    area.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') showLocationModal(area);
    });
});