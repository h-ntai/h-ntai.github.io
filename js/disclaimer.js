const disclaimer = {
    "text": "Einige Aussagen des Bots könnten eventuell beleidigend, homophob oder rassistisch wirken.\nKeine dieser Aussagen ist Ernst gemeint sondern fällt in die Kategorie Sarkasmus bzw. Schwarzer Humor.\nDurch das Hinzufügen des Bots auf einen Server und/oder auch durch die Nutzung des Bots\nwilligt man automatisch ein,\ndass man jede Aussage mit Humor nehmen wird.\nFalls es einem trotzdem aus diversen Gründen nicht passen sollte,\nkann er gerne den Bot vom Server entfernen oder (falls ihm die Rechte dazu fehlen) den Server selber verlassen.\nVielen Dank für euer Verständnis."
}

document.getElementById("warn").innerText += disclaimer.text;

function back(){
    history.back();
}
