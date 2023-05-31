
interface Price {
  name: string;
  price: number;
}

export default function Prices() {
  return (
    <>
    <h1 id="tarifs" className="text-center text-3xl p-4">Nos tarifs</h1>
    <div className="flex flex-wrap w-full justify-around text-xl">
      <div className="lg:w-1/2 w-full flex flex-col items-center">
        <h2 className="m-2">HOMME</h2>
        {prices.homme.map((price) => (
          <div className="m-2 w-10/12">
            <div className="m-1 text-base flex justify-between">
              <h4>{price.name}</h4> 
              <div>{Math.floor(price.price)}€{price.price % 1 !== 0 ? price.price.toFixed(2).slice(-2) : '00'}</div>
            </div> 
            <hr className="prices-separator" />
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center lg:w-1/2 ">
        <h2 className="m-2">FEMME</h2>
        {prices.femme.map((price) => (
          <div className="m-2 w-10/12">
            <div className="m-1 text-base flex justify-between">
              <h4>{price.name}</h4> 
              <div>{Math.floor(price.price)}€{price.price % 1 !== 0 ? price.price.toFixed(2).slice(-2) : '00'}</div>
            </div> 
            <hr className="prices-separator" />
          </div>
        ))}
      </div>
      <div className="mt-6 w-full flex flex-col items-center lg:w-1/2 ">
        <h2 className="m-2">SOINS POUR TOUS</h2>
        {prices.all.map((price) => (
          <div className="m-2 w-10/12">
            <div className="m-1 text-base flex justify-between">
              <h4>{price.name}</h4> 
              <div>{Math.floor(price.price)}€{price.price % 1 !== 0 ? price.price.toFixed(2).slice(-2) : '00'}</div>
            </div> 
            <hr className="prices-separator" />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

// Données sur les prix
var prices = {
  homme:[
    { name: 'Shamp.sup coupe coiffage', price: 20 },
    { name: 'Shampooing coupe coiffage (-10 ans)', price: 16 },
    { name: 'Shamp.sup coupe', price: 17.50 },
    { name: 'Barbe', price: 7.50 },
  ],
  femme:[
    { name: 'Shampooing traitant coupe stylisée coiffage cheveux courts', price: 33 },
    { name: 'Shampooing traitant coupe stylisée coiffage cheveux mi-longs', price: 38 },
    { name: 'Shampooing traitant', price: 5.50 },
    { name: 'Balayage cheveux courts', price: 29.50 },
  ],
  all:[
    { name: 'Soin masque', price: 10 },
    { name: 'Soin', price: 6.50 },
    { name: 'Soin traitant', price: 8.50 },
  ],
};
