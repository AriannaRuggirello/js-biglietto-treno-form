// Descrizione:
// Scrivere un programma che chieda all’utente: - Il numero di chilometri da percorrere - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole: - il prezzo del biglietto è definito in base ai km (0.21 € al km) - va applicato uno sconto del 20% per i minorenni - va applicato uno sconto del 40% per gli over 65.
// (cioè quello che avete fatto per la volta scorsa, però questa volta lo portiamo da prompt a prendere le info da input in pagina).
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
// La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form più completo in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).



function generate_ticket(){
    // var globali
    let userName, kmToGo, age, ticketRate, ticketCost, total;

    // chiedere il nome
        userName = document.getElementById("userName").value;
        console.log(userName)

    // Il numero di chilometri da percorrere
        kmToGo = document.getElementById("kmToGo").value;
        console.log(kmToGo)

    // Età del passeggero
        age = document.getElementById("ageSelector").value;
        console.log(age)

    // il prezzo del biglietto è definito in base ai km (0.21 € al km)
        ticketRate = (0.21);
        ticketCost = kmToGo * ticketRate;
        console.log("train ticket costs " + ticketCost);   

        // ticketCost = document.getElementById("ticket_cost").innerHTML = "il costo del biglietto è € " + ticketCost;
        total = ticketCost;

        if (age == "under18") { // va applicato uno sconto del 20% per i minorenni 
            total = ticketCost -(( ticketCost * 20 ) / 100) ;
                
        } else if (age == "over65") {// va applicato uno sconto del 40% per gli over 65
            total = ticketCost -(( ticketCost * 40 ) / 100) ;
        } 
        else (age == "over18") 
        {
            
        }
        
        console.log(total);
        document.getElementById("price").innerHTML = " Sono € :" + " " + total.toFixed(2);
    
}











