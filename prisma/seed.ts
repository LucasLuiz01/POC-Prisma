import prisma from "../src/database/db.js";

async function main() {
    await prisma.genre.createMany({
        data: [{
            name: "Ação"
        }, {
            name: "Comédia"
        }, {
            name: "Drama"
        }, {
            name: "Romance"
        }, {
            name: "Documentário"
        }, {
            name: "Suspense"
        }, {
            name: "Terror"
        }, {
            name: "Ficção científica"
        }
            ]
    })
}

async function mainTwo() {
    await prisma.platform.createMany({
        data: [{
            name: "Netflix"
        }, {
            name: "Amazon Prime"
        }, {
            name: "HBO Max"
        }, {
            name: "GloboPlay"
        }, {
            name: "Disney+"
        }, {
            name: "Paramount+"
        }
            ]
    })
}

main().then(() => {
    console.log("Registros feitos!")
}).catch( (e) =>{
    console.error("Deu muito ruim", e);
    process.exit(1)
}).finally( async() => {
    await prisma.$disconnect()
})

mainTwo().then(() => {
    console.log("Registros feitos!")
}).catch( (e) =>{
    console.error("Deu muito ruim", e);
    process.exit(1)
}).finally( async() => {
    await prisma.$disconnect()
})
