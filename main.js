// 25. Apuração de eleição. Leia a quantidade de votos e, em seguida, cada voto: 1, 2 ou 3 para os candidatos e 0 para voto nulo. Exiba o total de votos de cada candidato, os votos nulos e o vencedor ou empate.

const totalVotes = Number(prompt("Quantidade total de votos:"));

let candidateOneVotes = 0;
let candidateTwoVotes = 0;
let candidateThreeVotes = 0;
let nullVotes = 0;

for (let index = 1; index <= totalVotes; index++) {
    const vote = Number(prompt(`Digite o voto ${index} (1, 2, 3 ou 0):`));

    switch (vote) {
        case 1:
            candidateOneVotes++;
            break;
        case 2:
            candidateTwoVotes++;
            break;
        case 3:
            candidateThreeVotes++;
            break;
        case 0:
            nullVotes++;
            break;
        default:
            console.log("Voto inválido. Não contabilizado.");
    }
}

console.log(`Candidato 1: ${candidateOneVotes} votos`);
console.log(`Candidato 2: ${candidateTwoVotes} votos`);
console.log(`Candidato 3: ${candidateThreeVotes} votos`);
console.log(`Votos nulos: ${nullVotes}`);

const highestVotes = Math.max(
    candidateOneVotes,
    candidateTwoVotes,
    candidateThreeVotes
);

const winners = [];

if (candidateOneVotes === highestVotes) winners.push("Candidato 1");
if (candidateTwoVotes === highestVotes) winners.push("Candidato 2");
if (candidateThreeVotes === highestVotes) winners.push("Candidato 3");

if (winners.length > 1) {
    console.log(`Empate entre: ${winners.join(" e ")}`);
} else {
    console.log(`Vencedor: ${winners[0]}`);
}