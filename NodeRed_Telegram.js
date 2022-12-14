// Envoi d'un message fixe
let payload = {chatId: 10000000,
type: "message", 
content: "Trop froid",
};
return {payload};

// Envoi de la température
var temp = msg.payload
let payload = {
    chatId: 10000000,
    type: "message",
    content: temp,
};
return { payload };