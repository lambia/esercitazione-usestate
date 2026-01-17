import { useState } from 'react';

import languages from "./data/languages";

function App() {
  const [selectedLang, setSelectedLang] = useState(0)

  function onElementoCliccato(chi) {
    console.log("cliccato", chi);
    setSelectedLang(chi);
  }

  return <div class="mega-wrapper">

    <h1>Linguaggi</h1>

    {languages.map((language, indice) =>
      <button onClick={() => { onElementoCliccato(indice) }}>{language.title}</button>
    )}

    <div>
      <h2>{languages[selectedLang].title}</h2>
      <p>{languages[selectedLang].description}</p>
    </div>

  </div>
}

export default App
