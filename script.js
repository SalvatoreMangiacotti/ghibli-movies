const ghibliMoviesList = [

    {

        title: "Il ragazzo e l'airone (2023)",
        subtitle: "君たちはどう生きるか",
        description: `
        "Il ragazzo e l'airone" segue la storia di Mahito, un ragazzo che dopo la morte
        della madre, si trasferisce in una casa di campagna. Qui, un airone cenerino lo
        guida verso un mondo magico dove affronta avventure che lo aiutano a crescere
        e a scoprire se stesso."
        `,
        image: "./img/airone.jpg",
        author: "© 2023 Hayao Miyazaki/Studio Ghibli"

    },
    {

        title: "Ponyo sulla scogliera (2008)",
        subtitle: "崖の上のポニョ",
        description: `
        Una pesciolina magica di nome Ponyo desidera diventare umana e un giorno incontra
        un ragazzino di nome Sōsuke. La loro amicizia innesca una serie di avventure che 
        esplorano il legame tra natura e umanità.
        `,
        image: "./img/ponyo.jpg",
        author: "© 2008 Hayao Miyazaki/Studio Ghibli, NDHDMT"

    },
    {

        title: "Il castello errante di Howl (2004)",
        subtitle: "ハウルの動く城",
        description: `
        Sophie, una giovane ragazza, viene trasformata in un'anziana donna a causa di una maledizione.
        Alla ricerca di una soluzione, incontra il misterioso castello errante di Howl, un mago potente
        ma enigmatico. Insieme, intraprendono un'avventura che esplora temi di amore, coraggio e autostima.
        `,
        image: "./img/howl.jpg",
        author: "© 2004 Diana Wynne Jones/Hayao Miyazaki/Studio Ghibli, NDDMT"

    },
    {

        title: "La città incantata (2001)",
        subtitle: "千と千尋の神隠し",
        description: `
        La coraggiosa Chihiro si ritrova in un mondo magico pieno di spiriti e creature fantastiche.
        Quando i suoi genitori vengono trasformati in maiali, Chihiro deve lavorare per salvarli e trovare una via d'uscita.
        Attraverso il suo coraggio e la sua determinazione, affronta numerose sfide, scopre amici inaspettati e cresce come persona.
        `,
        image: "./img/spiritedaway.jpg",
        author: "© 2001 Hayao Miyazaki/Studio Ghibli, NDDTM"

    },
    {

        title: "Principessa Mononoke (1997)",
        subtitle: "もののけ姫",
        description: `
        Ashitaka, un giovane principe, è costretto a lasciare il suo villaggio per trovare una cura per una maledizione che lo affligge.
        Durante il suo viaggio, si imbatte in una feroce battaglia tra gli abitanti della città mineraria di Irontown e le creature della
        foresta, guidate dalla misteriosa Principessa Mononoke. Ashitaka cerca di trovare un equilibrio tra l'umanità e la natura,
        affrontando sfide e scoprendo la profondità della connessione tra esseri umani e spiriti della foresta.
        `,
        image: "./img/mononoke.jpg",
        author: "© 1997 Hayao Miyazaki/Studio Ghibli, ND"

    },
    {

        title: "Il mio vicino Totoro (1988)",
        subtitle: "となりのトトロ",
        description: `
        Due sorelle, Satsuki e Mei, si trasferiscono in una casa di campagna con il loro padre per stare più vicine alla madre malata.
        Insieme scoprono un mondo magico nei boschi vicini, dove incontrano delle creature straordinarie, inclusi gli spiriti della 
        foresta e il gentile e gigante Totoro. L'avventura delle sorelle è una celebrazione della meraviglia, della bellezza della natura
        e la potenza dell'immaginazione.
        `,
        image: "./img/totoro.jpg",
        author: "© 1988 Hayao Miyazaki/Studio Ghibli"

    }
]


const container = document.querySelector('.container');

ghibliMoviesList.forEach((movie) => {

    container.innerHTML += `
    <div class="card">

        <h2 class="title">${movie.title}</h2>
        <h3 class="subtitle">${movie.subtitle}</h3>

        <p class="description">${movie.description}</p>

        <img src="${movie.image}">
        <figcaption>${movie.author}</figcaption>

    </div>
    `

})