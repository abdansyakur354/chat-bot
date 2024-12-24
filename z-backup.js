// Mengirim pesan
// function sendMessage() {
//     const input = userInput.value.trim();
//     if (input === "") return;
  
//     // Pesan pengguna
//     addMessage("user", input);
  
//     // Respon bot
//     const botResponse = getBotResponse(input);
//     setTimeout(() => addMessage("bot", botResponse), 1000);
  
//     userInput.value = "";
// }

// Menghapus chat
// function clearChat() {
//     chatBox.innerHTML = "";
// }

//   function getBotResponse(input) {
//     const responses = {
//         "Hai, gimana kabar? Aku lagi pengen ngomong sesuatu nih, tapi udah lama pengen bilang.": "Halo! Kabarku baik kok. Apa yang pengen kamu omongin?",
//         "Jadi gini... aku ngerasa ada yang beda dari kamu. Maksudnya, kamu tuh punya cara sendiri untuk nyalurin energi positif, cara kamu senyum, semuanya... Susah jelasinya, tapi setiap kali ngeliat kamu rasanya tuh beda aja.": "Aduh, kok jadi penasaran ya. Maksudnya apa tuh? Beda gimana?",
//         "Ya, kamu itu gak kayak kebanyakan orang.": "Wow, seriusan?",
//         "Haha, iya nih. Tapi ada satu hal lagi, aku pengen ngajak kamu jalan. Kalau kamu ada waktu, bisa nggak? Aku rasa, kita bisa ngobrol lebih banyak lagi.": "Eh, seru juga ya! Kayaknya aku bisa jalan kok. Kapan?",
//         "Gimana kalau akhir pekan ini? Aku pikir kita bisa makan bareng atau cuma jalan-jalan santai aja, nggak ada yang buru-buru.": "Sounds good! Aku tungguin ya, akhir pekan ini. Ayo kita jalan!",
//     };

//     return responses[input.toLowerCase()] || "Sorry, I didn't understand that.";
// }

// Respon chatbot
// function getBotResponse(input) {
//   const lowerInput = input.toLowerCase();

//   // Logic sederhana untuk NLP dan sinonim
//   if (matchesInput(lowerInput, "p")) {
//     // Tampilkan menu dengan innerHTML
//     return `
//     <div>
//         <h3 style="color: blue;">Daftar Menu:</h3>
//         <ul>
//         <li><b>1.</b> Info Bot</li>
//         <li><b>2.</b> Bantuan</li>
//         <li><b>3.</b> Tentang Kami</li>
//         </ul>
//         <p>Ketik angka atau nama menu untuk memilih!</p>
//     </div>
//     `;
//   } 

//    else if (matchesInput(lowerInput, "hai")) {
//     return "Halo! Ada yang bisa saya bantu?";
//   } 
  
//   else if (matchesInput(lowerInput, "bagaimana")) {
//     return "Saya baik, bagaimana dengan Anda?";
//   } 
  
//   else if (matchesInput(lowerInput, "terima kasih")) {
//     return "Sama-sama! 😊";
//   } 
  
//   else if (matchesInput(lowerInput, "bye")) {
//     return "Selamat tinggal! Sampai jumpa lagi.";
//   } 
  
//   else {
//     return "Maaf, saya tidak mengerti pesan Anda. Coba ketik 'hai' atau 'bye'.";
//   }
// }