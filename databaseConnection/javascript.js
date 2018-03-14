function ritornodatabase() {
    var db_prodotti = ["Pasta amatriciana", "Pizza ai funghi", "Pizza col prosciutto", "Pasta in bianco", "Pasta al sugo", "Birra", "Acqua","Vino","CocaCola","Patatine"];
    var db_immagini = ["http://www.sugoallamatriciana.it/images/amatriciana/sugo-alla-amatriciana-spaghetti.jpg", "https://www.pizza-export.it/wp-content/uploads/2017/09/pizza-funghi-2.png","http://trentapizza.co.uk/wp-content/uploads/2016/07/pizza_prosciutto_450_g-600x600.jpg", "https://st2.depositphotos.com/1000848/8448/i/950/depositphotos_84480134-stock-photo-plate-of-pasta-seen-from.jpg","http://www.giallozafferano.it/images/photocomments/16513/1377.jpeg", "https://nonsolobuono.it/wp-content/uploads/2016/08/birra_bionda.png", "http://www.lincianovini.it/image/cache/data/acqua%20brillante%20recoaro/acqua%20brillante%20recoaro-600x600.jpg", "http://www.tradizionipadane.it/wp/wp-content/uploads/2015/08/vino-600x600.jpg","http://www.lincianovini.it/image/cache/data/coca%20cola/coca-cola-vetro%2025%20cl-600x600.jpg","https://americaneat.it/wp-content/uploads/2017/09/cheetos-crunchy-cheese-flavor-30-g-600x600.jpg"];
    var elID = document.getElementById("nome_elemento");
    var elTabella = document.getElementById("tabella");

    elTabella.innerHTML = "<tr><td colspan=\"2\" align=\"center\"><h2 style=\"color: #494949\">Prodotti</h2></td></tr>";

    for(var i = 0; i < db_prodotti.length; i++){
        if(db_prodotti[i].indexOf(elID.value) !== -1){
            elTabella.innerHTML += "<tr><td>" + db_prodotti[i] + "</td><td><img src='" + db_immagini[i] + "' width='100px' height='100px'></td></tr>"
        }
    }
}