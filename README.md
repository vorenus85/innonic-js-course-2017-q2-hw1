# JavaScript course 2017 Q2
##### Home work 1

Írj egy lapozó objektumot, amivel oldalanként lehet elkérni az objektumban tárolt elemeket.

Minta adatokat a `source/data.json` fájlban találsz.

Az objektum 10 elemet adjon vissza oldalanként, de jó lenne ha ez állítható lenne.

Az alábbi metódusok legyenek elérhetőek a hívók/objektumot használók számára:

    Pager.next() // következő oldal elemei
    Pager.prev() // előző oldal elemei
    Pager.current() // az aktuális oldalon mutatott elemek
    Pager.getPage(pageNumber) // adott oldal elemei
    
    