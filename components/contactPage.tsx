export default function ContactPage() {
    return (
      <>
      <h1 id="contact" className="text-center text-3xl p-4">Contact</h1>
      <div className="flex text-center md:text-start  md:flex-row flex-col justify-around">
        <div className="m-10 flex flex-col justify-center">
            <ul>
                <li>
                    Espace Coiffure - Le Trait
                </li>
                <li className="mt-5">
                    Téléphone : <a href="tel:0235053232">02 35 05 32 32</a>
                </li>
                <li className="mt-5">
                   <h6>Horaires d'ouverture :</h6> 
                    <ul className="mt-3 opacity-60">
                        <li>
                            lundi Fermé
                        </li>
                        <li>
                            mardi au vendredi 9h-12h - 14H-18H30
                        </li>
                        <li>
                            samedi 9h-17h
                        </li>
                        <li>
                            dimanche Fermé
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="flex justify-center md:flex-none">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.2652105754896!2d0.8076343769145929!3d49.47949707142305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0fbcbe18e7957%3A0xb38db3e666e3ea5b!2sEspace%20Coiffure!5e0!3m2!1sen!2sfr!4v1684931850300!5m2!1sen!2sfr" 
            width="450" 
            height="300" 
            className="border-0 m-10"
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
      </div>
      </>
    )
  }
  