import React from "react";

export function Danger() {
  return (
    <article class="message is-danger">
      <div class="message-header">
        <p>Alerta!</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
       Al realizar más de una consulta con el mismo nombre de usuario se borraran todas las consultas que tengan el mismo nombres de usuario <br/>
       P.D. : Esto lo arreglare en otra "version"  de la pagina 
      </div>
    </article>
  );
}
