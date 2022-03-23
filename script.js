import {values} from './config.js';

const root = document.getElementById("root")
const compose = () => {
  return values.map(({Name, Organization, Tech, Duration, Location, Price, type, language, Notes}) => 
    `<li>
      <div class="organization">${Organization}</div>
      <p><strong>Curso:</strong> ${Name}</p>
      <p><strong>Tech:</strong> ${Tech}</p>
      <p><strong>Duration:</strong> ${Duration}</p>
      <p><strong>Location:</strong> ${Location}</p>
      <p><strong>Price:</strong> ${Price}</p>
      <p><strong>type:</strong> ${type}</p>
      <p><strong>language:</strong> ${language}</p>
      <p><strong>Notes:</strong> ${Notes}</p>
    </li>`).join("")}

root.innerHTML = `<ul>
                    ${compose()}
                  </ul>`