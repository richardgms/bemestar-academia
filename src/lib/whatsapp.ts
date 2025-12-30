export const WHATSAPP_NUMBER = '5583999999999' // Substituir pelo número real se tiver

export const mensagens = {
    aulaExperimental: "Oi! Vim pelo site e quero agendar minha aula experimental gratuita na BE!",
    planoStart: "Oi! Vim pelo site e queria saber mais sobre o Plano Start. Podem me passar as condições?",
    planoCompleto: "Oi! Vi no site que o Plano Completo é o mais escolhido e fiquei interessado! Quais as condições?",
    duvidas: "Oi! Vim pelo site da Bem Estar e queria tirar algumas dúvidas."
}

export function getWhatsAppLink(message: string) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
