var listaAnimes = [
    'https://universonintendo.com/wp-content/uploads/2019/06/Prototype-Clannad_Keyart.jpg',
    'https://m.media-amazon.com/images/S/pv-target-images/f8ab74240b5f0764f8c1970eb56094179ee6f0f534c439c2ac432dd359543842.jpg',
    'https://dailyanimeart.files.wordpress.com/2016/09/gintama.jpg',
    'https://image.api.playstation.com/vulcan/ap/rnd/202307/1718/4ca61c4a1c2907a8e28462fd8ba700cb9d78e2826cbe6478.png',
    'https://www.animeunited.com.br/oomtumtu/2022/09/portada_sousou-no-frieren-12.jpg',
    'https://www.syfy.com/sites/syfy/files/2019/01/slimerimuru.jpg'
];

//desafio - adicionar itens com .push
listaAnimes.push(
    'https://inmagi.sfo2.digitaloceanspaces.com/media/807940/qIRTvwih3jSJxCHZJlM51G6hFKH.jpg',
    'https://cabanadoleitor.com.br/wp-content/uploads/2022/07/Mushoku-Tensei.webp',
    'https://i0.wp.com/lacradoresdesintoxicados.com/wp-content/uploads/2023/04/image-3.png?fit=1920%2C1080&ssl=1'
);

var nomeAnimes = ['Clannad', 'Code Geass', 'Gintama', 'Gundam', 'Sousou no Frieren', 'Tensei Shitara Slime Datta Ken', 'Hajime no Ippo', 'Mushoku Tensei', 'Oshi no Ko'];

/*
refazer para o desafio da aula, para utilizar while ao invés de for

for (var i =0; i<listaAnimes.length;i++){
    document.write('<img src='+listaAnimes[i]+' width="853" height="480" >');
    document.write("<p>" +nomeAnimess[i]+ "</p><br>");
}
*/ 

//desafio - utilizando while
var i = 0;

while (i<listaAnimes.length){
    document.write('<img src='+listaAnimes[i]+' width="853" height="480" >');
    //desafio - colocar o nome do anime abaixo da imagem
    document.write("<p>" +nomeAnimes[i]+ "</p><br>");
    i++;
}

