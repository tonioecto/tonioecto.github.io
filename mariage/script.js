/*import CryptoJS from "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/sha1.js";*/
var n=2; 	



let invite_sans_acc = ['8b4726b87dfe650243ead1b22689e4f552b97f77','9bc8bd77fa32314c396aa6f950c2cbf3db082843','c9b0864aaff0fa70b1368776188dedbc5a1fa6fb','e5f628ea392e1c92dddaf6e30d1425440f9557f6','1beb9c24c46241f4a28a92e5f19af3039b60a2c4','0784d7ee5cae32ed76f693ecce2772ebb9db5365','1c60abc3cefb9348863c77355d751efbb697751a','3fbbd3d29b8739c89b4207da23b64cb2f3cc80ee','61420227def87f3369f4c5642154d176911a5467','1e659924e8a938db3ff6ac9193d391c3a0e89551','ef24e064e4d87a9f1b6038ab5b5b72d86762fd24','0bb862d01be84c4a2519a27ff0ada33625fec37a','9efb42ada226e1dc140c7daa5fdd199429cc950c','612925062a99bf97e7b2c4190d669229caab9736','18e4e03a57b34f66dd5810213c11314edbeb1218','d5dea21514728a5cf1ef189ddfe5cccfb597ec48','a22efa431b55a5677611bbadaa6b5ccfbabaecc7','5d7132139b7ea8763ca1764c5ba19549da9dddcc','e8b7da4c68a64692f5fc37b8d8f81829ef6ee31a','bd035a72c4d313a14a2604c0826c3ef07c6f56d3','818dacc7c02a848c65446980afee1532e14f2282','eeaa6999ac18a4e51b553bb6d0163b2be6cb382c','fff0a96adad4a17a7ffe76cb4d1ca05fdf9fb829','4fbe5e307bef12c4cb4b50fc1ec14058eb2ab75f','c9288bf31785be95e33856172725465470d1dc93','d36228c440d4f5d93c8f4d81f7c78ef91c0b2d5c','dbad012202e5e2b5162d6cbe9d3c0e4f760cd170','48bd7b18d821c5393af048150be527905e268a76','c17a217faaec5ad2e416114ba1aab085d6761584','c3067e5bd4f06ef066d867aaf8ecddf7ccfcf848','7ab1af28f9e1063ed0eda07e82c22fb40a104f59','4f897129de16d70bf663a0722bf09cf481be796a','65f8c17d5ffbbf2f8e5b21e9aebaeb3d4970173c','15575b44f1acc2c7db64a8074940d50938f11e4b','24f65a7447036a65421f3db0f153bd4779dda480','dc720be82fb067847133104c96231cd30a8f0f94','8864d537054a55e2e9de7fdd81f9267aadc6bf9f','cf1a9296331c98062b553060ba8267bccb69b209','7eb11d26f297d11ca943cf3abe0d3a7c92884f80','2a582246402205b61a5e6437fafb7357cac84ef1','9be44bf730c1dff5f1eb599be6c7a20c8c937e1c','4051edfaf7c71668916d43f622c9ea5bba250334','9b60c2fd72c74e2db42b841d66e18b9b30f45355','d3b926c0d9731e875ab2c2961554ddc2ece2b29d','d7908e477a0c6e86cd6b813948515a303efe00f4','92d2c46e72ecf5a7bba78b17b0cc0dd719028a68','45eb85b059a82eb1d539da28bcb0cdeb0a4caeff','092218573b0a83e6da1a31bb557c9653d4303657','1f6da7d0b4617c0ebee4c41e0c34b7cf549ebc64','56d45c6073e7b1c1c8906641b4f58c3fcde36fc9','fca915fde95b0544602233757a196cacd8ea8bfd','d9df31f8141d922e07f318b543251d8a1b5f381f','a92161475678eeb47a246f8a75da64774a11af4b','93fef4cf26362fe266db5904ff31a5c6cae35267','ab554ebbfd3cb3ef337634942591557efe4d1a32','24423dd83c77d7554fac31a08636a670d868faa4','bb7e6cca2ba6da7c5ce8983180b4ad1b395c984f'];
let invite_avec_acc = ['d9c5ce191ad566e4751c3fadb7cd27a0dbf4910d','dec450a0be56389a6a68d114eed5714f1ff2c222','c08506d8e4783738939bcc74e47641c795e434f4','bf6dd15ed70d6eed19488c404cf18388611a5de6','d9229340c99fc4f660dab827ed41b61e52ac72f5','3cc957b6d88e786b422d25bdb8c2be234260a7d3','fdf8656742a7dd5fdc487c9a18307f30b1566692','fe3bf4fdb0be178ee53e2670fc12754ca0708ccf','8701a2996f784738f14fc93050ea8f768ab3f4cb','87fe9feddb867487cdb829798fab747f45889cc4','f9d84e281e640fdc72b6c39d0038237fa865946f','018b74a0d5602ae19b61433342ec0d28014b3243','f4a925165881f65532af09cd9555e94a20baf116','d7a190279b337209829c2ee53c8aa93f9d471d85','7d901b6072148cb632b4c0287c1fe21c404859d7','cb30e01b5fcbda2851da2ebf8ffd72576dae5cbe','0f2df1827ae4a5e206d8a2159f52b08cd6028a49','652624ca1792547b08d49a584147a0d0a2c7bc8a','b1a2051eefe63766328d2171e384a85032a11054','7b410c1b295b41f1d493271d519b5d135d163511','f6f333c52c723dbc106a9661d3ec25070fae7dc0','168f158d189cb892d4136df4f56207b014a86a3d','df6b17176cbb065cc2b0cb9998bac5f891259f3c','ed706c533f09fd5faf23b3dea3662bc6db5a454d','8bf44b7c9254e8dc3fcb41e2bcb4154b604ae39a','7dbc11adf34279dc43ca0638fe92f0a6eb262a9c','5992c0250756b4a8a415cd1901798a29049015dd','c8db8fdc772da7084baa6e7d3f36cc7d875f184e','9ed186762d1e8bc6f7a3efe686744c1b8074d49e','3f1765d3622b7c7aea8f9e3536ad3baf26d7dd09','4c69757fdfadd0084e328a0a442200c6166fa431','6c5076d9d63fb979489bb8641c81ea36dc4b6224','9b1d5c2beac9e87e2830e282839d32b1806f9667','0269925970bc787392a659e3ebee0f912a4c49b9','20f55b9cf59705924ae834bda629deb903f5b426','f3567193194b4b11fadbc6f7a19e873d97aacf49','1307963c05001d96ac7284d1b9d0270d51378028','ceeb6a38f07aad9876ab1b2203ae74cc3cc75d0a','0cc1d2bcff4403c6377186f8dc5e3babb99c5d61','b668318cdaa6720ca052e1e8daee768be0f653fa','e31874c164753bda2627a8619a33089a4eaed148','09ab07272eb452b1714f9640ca33912c2b0c62c4','e071e01b3710ad10f1976619f77b2f7450fac4fb','eec2d398252c784a0b8f3d9e34f98ec38fed65e6','7364156cdb6036e8a18f7c71c5b246ce285e9f13','a9f95b896521660a9cb99f58b5c4eea7c061526a','614aea8310545cda83d1b81346b62228fc1d3326','d85a38f6e7010426e1e8c3480a7bacf165c717b8','2efd77effd29f6f47700b70bdb612d4ad3905bab','8c122696335e0d6983f80df6cfc12b455e4c6ab3','fbab3064a3356c37df3b777be718b48daa030256','93341248eef2489925289e8e1527601f86e1c728','7406ea078133452a4669aef827cfd602bd32d506','882e7fe2a784866b9de4f65bac212e285510b017','ae7769f7824f7f6c2ab71d516745872741800637','aca0e783a17336918cfefdee8c650add7951c0db','ca8a34f4ce6dc2dee9aeeb5abe496c62e16fba78','b46e13e14b55444881ccdaae92c2d1edd527d39b','7dd832f4c04bc0ae3a33f21871a18c8a338e1934','53830732778f5683d05d4c0bf8a9916f021d4bc2','32158dd62cce48f8798877f37bd701cdbcb9a228','e7d02a7e1e3a63b06e177ce824531ba58f78e165','5da99c28da492269f4d04be6549865b3953ed2dc','b5d07ef28d9b473a96f9be6d8b2ad9cf3ffd2523','27c709613c8c6dbcf7217f6a91fa4410eaa39544','6eb494a5832ef3c461d26991c28a0cc9934d0e18','65701be67cca2012c09094dd429bd42b34c8d1c9','1888b7b3bbcccda58e712686c130e0c7d1f50359','27a811e12cb10d676141df4a35b3432b1e71e03c','2a919162b4f1bf4274d5827101cc07d090c068c2','bcf84fefacedb62720c551e4c922e091cf1ed565','555839ab65cfad54acdba73511327ef025abb42b','7b180fde8620666d742cc17dcacdf77216857252','a0a729a10899fc5284a8ec810dc7bfb25b3158bb',
'0deaa237f9c3ccd3275296bfcc65b82dfe97055d','4f1501842f108e126fa4558c4b43667ed7e9de4a','96ae1f55fea90505bd868295270f9445173e04a4','2eb75308e2e054fa91181540607f3f2af720e527','42cb358d8da62304caa3c882f8ed78fdbc933911','c04d25c68d1a0bc9beca4b82ff5e729d63f9a008'];



function reset_onload() {
document.getElementById("zone_affichage").value='';
document.getElementById("name").value='' ; 
}

function Redirectionformcouple(){
	window.open('https://docs.google.com/forms/d/e/1FAIpQLScfcervTTaWB6bxPgJmOKlksTDz1D8_9lafktPYn5ZyxaB_xg/viewform?usp=pp_url', '_blank');
}

function Redirectionformseul(){
	window.open('https://docs.google.com/forms/d/e/1FAIpQLSenynHwbTvGGwPcCdmYhuPZ8qQe_PJhG5vKHWgDMNhJMGTsaw/viewform?usp=pp_url', '_blank');
}

function effacer(form)
{
  document.getElementById("name").value="";
}	

function verif()
{
document.getElementById("zone_affichage").value='';
var nom = document.getElementById("name").value ;
var hashnom = CryptoJS.SHA1(nom).toString(CryptoJS.enc.Hex);
var acc = invite_avec_acc.includes(hashnom);
var seul = invite_sans_acc.includes(hashnom);
if(acc) {
   Redirectionformcouple();
} else { 
   if (seul) {
	   Redirectionformseul() ;
   }
   else {
	   effacer();
	//   document.getElementById("zone_affichage").value = hashnom; 
      document.getElementById("zone_affichage").value = 'Veuillez réessayer de renseigner votre nom en faisant bien attention au format demandé' ;
   }
}
}

 

function flisten(e) {
	if (e.keyCode == 13) {
		document.removeEventListener('keydown', flisten) ;
		effacer();
        text = "Appuyez sur le bouton pour valider la réponse, pas sur Entrée :p";
        // text=""
        // for (let i =0 ; i < liste_clair_sans.length ; i ++) {
        //   text += "\'";
        //   // text += " = ";
        //   text+=CryptoJS.SHA1(liste_clair_sans[i]).toString(CryptoJS.enc.Hex);
        //   text+="\',"
        // }
        document.getElementById("zone_affichage").value=text;
    }
} 


var name = document.getElementById('name');
document.addEventListener('keydown', flisten) ;


