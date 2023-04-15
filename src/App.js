import "./App.css";

function App() {
  return (
    <div className="bg-[#1E1E1E]">
      <div className="p-3 w-max-full h-min-[75vh] md:h-[75vh]">
        <div className="bg-[#E3E3E3] rounded-[21px] block md:flex md:rounded-[41px] !rounded-br-[0px] h-full w-max-full p-10">
          <div className="w-max-full md:w-1/2 flex flex-col justify-between">
            <div>
              <img src="titolo.svg" />
              <p className="font-extrabold mt-6">
                Attualmente disponibile per progetti e Co. Co. Co.
              </p>
            </div>
            <div class="text-sm font-extrabold text-gray-700">
              <p>GITHUB</p>
              <p>LINKEDIN</p>
              <p>TELEGRAM</p>
              <p className="mt-5">info@raffaelecrocco.com</p>
              <p>+39 3661055047</p>
            </div>
          </div>
          <div className="w-max-full relative md:w-1/2 flex h-full justify-center">
            <div className="w-1/2 h-fit mt-10">
              <p className="text-3xl font-bold tracking-tight text-gray-900">
                <p className="text-sm mt-1 tracking-tight text-gray-500">
                  // aprile 2023 - Raffaele Crocco
                </p>
              </p>
              <p class="text-sm mt-5 text-gray-700">
                Laureato in Ingegneria Informatica all'Università degli Studi di
                Trento. Questo sito e i progetti al suo interno dimostrano la
                mia percezione verso la programmazione come la realizzazione
                concreta d'idee. Al momento lavoro per Onlytech Industries e ai
                loro progetti in smart working. Sono tutta via disponibile a
                collaborazioni Co. Co. Co. e a proposte di progetto di vario
                tipo. Per qualsiasi informazione contattami.
              </p>
            </div>
            <img src="smile.png" className="absolute -bottom-10 h-1/3" />
          </div>
        </div>
      </div>
      <div className="h-min-screen md:h-screen block md:flex">
        <div className="w-max-full md:w-1/3">
          <div className="w-max-full h-1/4 p-3">
            <div className="bg-[#E3E3E3] flex flex-col justify-between rounded-[21px] md:rounded-[31px] !rounded-tr-[0px] h-full w-max-full p-7">
              <p className="text-3xl font-bold tracking-tight -mt-2 text-gray-900">
                https://www.help-ukrainians.org/
                <p className="text-sm mt-1 tracking-tight text-gray-500">
                  // marzo 2022 - progetto personale
                </p>
              </p>
              <p class="text-sm text-gray-700">
                E' un servizio gratuito a disposizione dei cittadini che
                permette la condivisione di iniziative benefiche a supporto del
                popolo ucraino. Condividiamo informazioni utili per il
                volontariato attraverso enti verificati.
              </p>
            </div>
          </div>
          <div className="w-max-full h-3/4 p-3">
            <div className="h-full w-max-full p-10 flex h-full justify-center text-[#E3E3E3]">
              <div className="w-1/2 h-fit my-auto">
                <p className="text-3xl font-bold tracking-tight">
                  Altro da dire
                  <p className="text-sm mt-1 tracking-tight text-gray-400">
                    // softskill e commenti
                  </p>
                </p>
                <p class="text-sm mt-5">
                  Comunicare e coordinare sono arti che mi affascinano da
                  sempre. E' nella mia routine lo studio di entrambe le
                  discipline spinto da una forte passione per esse.
                </p>
                <p class="text-sm mt-10">
                  Il tool che preferisco per la progettazione grafica è
                  solitamente Figma. La maggior parte dei siti che realizzo
                  sfruttano Typescript / React come framework javascript. Il
                  sito che stai visitando segue una linea di design detta
                  brutalismo, trend 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-max-full md:w-1/3">
          <div className="w-max-full h-1/4 p-3">
            <div className="bg-[#E3E3E3] flex flex-col justify-between rounded-[21px] md:rounded-[31px] !rounded-tl-[0px] h-full w-max-full p-7">
              <p className="text-3xl font-bold tracking-tight -mt-2 text-gray-900">
                https://www.onlytechindustries.com/
                <p className="text-sm mt-1 tracking-tight text-gray-500">
                  // gennaio 2023 - progetto lavorativo
                </p>
              </p>
              <p class="text-sm text-gray-700">
                Azienda italiana con esperienza in Blockchain pubbliche e
                private che attraverso l’utilizzo di un ampio stack tecnologico,
                offre consulenza progettuale, sviluppo e integrazione di
                soluzioni Blockchain, sicurezza, e scalabilità.
              </p>
            </div>
          </div>
          <div className="w-max-full h-1/4 p-3">
            <div className="border border-4 border-[#E3E3E3] text-[#E3E3E3] flex flex-col justify-between rounded-[21px] md:rounded-[31px] !rounded-bl-[0px] h-full w-max-full p-7">
              <p className="text-3xl font-bold tracking-tight -mt-2">
                https://www.vendimpresa.it/
                <p className="text-sm mt-1 tracking-tight text-gray-400">
                  // febbraio 2023 - progetto lavorativo
                </p>
              </p>

              <p class="text-sm">
                Landing che anticipa il portale attualmente sotto sviluppo
                VendImpresa, una realta immobiliare innovativa per la
                compravendita di asset aziendali composto da un gruppo di
                professionisti del settore.
              </p>
            </div>
          </div>
          <div className="w-max-full h-1/4 p-3">
            <div className="bg-[#E3E3E3] flex flex-col justify-between rounded-[21px] md:rounded-[31px] !rounded-br-[0px] h-full w-max-full p-7">
              <p className="text-3xl font-bold tracking-tight -mt-2 text-gray-900">
                https://ns-training.vercel.app/
                <p className="text-sm mt-1 tracking-tight text-gray-500">
                  // gennaio 2022 - progetto personale
                </p>
              </p>
              <p class="text-sm text-gray-700">
                Tool interattivo per gli studenti che vogliono allenare la
                propria conoscenza sul tema della Network Security in
                preparazione all'esame. Il sito e il database relativo sono da
                usare solo a scopo educativo.
              </p>
            </div>
          </div>
          <div className="w-max-full h-1/4 p-3">
            <div className="bg-[#E3E3E3] flex flex-col justify-between rounded-[21px] md:rounded-[31px] !rounded-tr-[0px] h-full w-max-full p-7">
              <p className="text-3xl font-bold tracking-tight -mt-2 text-gray-900">
                /scripts/vision.py
                <p className="text-sm mt-1 tracking-tight text-gray-500">
                  // dicembre 2021 - progetto personale
                </p>
              </p>
              <p class="text-sm text-gray-700">
                Codice python per un algoritmo di computer vision creato per
                riconoscere e classificare lego in un ambiente simulato e
                permettere ad un braccio robotico controllato con ROS di
                manipolarli.
              </p>
            </div>
          </div>
        </div>
        <div className="w-max-full md:w-1/3">
          <div className="w-max-full h-full p-3">
            <div className="border border-4 border-[#E3E3E3] text-[#E3E3E3] rounded-[21px] md:rounded-[41px] !rounded-tr-[0px] h-full w-max-full p-10">
              <p className="text-3xl font-bold tracking-tight -mt-2">
                Shoutout del mese
                <p className="text-sm mt-1 tracking-tight text-gray-400">
                  // i progetti e le persone che hanno influenzato di più il mio
                  mese.
                </p>
              </p>
              <div className="flex justify-between mt-10">
                <p class="text-sm">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order. Here are the
                  biggest enterprise technology acquisitions of 2021 so far, in
                  reverse chronological order.
                </p>
                <img src="arrow.svg" />
              </div>
              <div className="flex justify-between mt-10">
                <p class="text-sm">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order. Here are the
                  biggest enterprise technology acquisitions of 2021 so far, in
                  reverse chronological order.
                </p>
                <img src="arrow.svg" />
              </div>
              <div className="flex justify-between mt-10">
                <p class="text-sm">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order. Here are the
                  biggest enterprise technology acquisitions of 2021 so far, in
                  reverse chronological order.
                </p>
                <img src="arrow.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 w-max-full h-min-[25vh] md:h-[25vh]">
        <div className="border border-4 border-[#E3E3E3] text-[#E3E3E3] rounded-[21px] block md:flex md:rounded-[41px] !rounded-br-[0px] h-full w-max-full block md:flex space-x-10 p-10">
          <div className="w-1/4 h-fit my-auto">
            <p className="text-sm tracking-tight text-gray-400">
              // marzo 2022 - progetto personale
            </p>
            <p class="text-sm mt-2">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. Here are the biggest
              enterprise technology acquisitions of 2021 so far.
            </p>
          </div>
          <div className="w-1/4 h-fit my-auto"></div>
          <div className="w-1/4 h-fit my-auto md:flex justify-end">
            <p className="text-sm tracking-tight">
              marzo 2022 - progetto personale
            </p>
          </div>
          <div className="w-1/4 md:flex justify-center h-fit my-auto">
            <div class="text-sm text-end font-extrabold">
              <p>GITHUB</p>
              <p>LINKEDIN</p>
              <p>TELEGRAM</p>
              <p className="mt-5">info@raffaelecrocco.com</p>
              <p>+39 3661055047</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
