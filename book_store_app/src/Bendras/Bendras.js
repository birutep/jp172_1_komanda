import React from 'react';
import Footeris from '../FooterPvz/Footeris'
import Mygtukas from '../MygtukoPvz/Mygtukas';
//import Knopke from '../MygtukoPvz/Mygtukas';  //atkomentuot tik kai busi pasiruoses :)

//footerioKlase yra masyvas su visomis klasemis kurios aprasytos Footeris.css faile, kintamojo pavadinimas koks nori, svarbu .css failas
 //konkrecias klases pasiekiame naudodami  jei Footeris.css yra tokia klase .red, tai ja perduodam footreioKlase.red


const bendras = ( props ) => { //sicia props nepanaudota, bet reliaia cia masyvas su viskuo ka perduodame ka rasom pvz <Footeris vardas="kazkoks" kaina="15">, tuomet sicia galiam paimt per props.vardas props.kaina
    return (
        <div>
            <Footeris />
            <Mygtukas />
        </div>
    )
};
//viskas ka returninam turi buti konkreciam konteineriyje, <div>, <p> ir t.t., negalima returnint dvieju divu, jei reik dvieju, juos apvelkame divu,
//kaip alternatyva galima returnint jason bet iki tiek nepriejau
//viduje labai panasiai kaip html bet tai nera html, tai jsx, pvz elementui priskiriant klase negalima naudoti cass="kazkokia", class yra rezervuotas zodis, naudojam className={kazkokia}



export default bendras;
//tai ka eksportuojam, pavadiniams turi sutapt su onst -->footeris<--- = ( props ) => {
//jei eksportuojam daugiau reik nurodinet vardus, jei tik viena jis auto yra defaultas