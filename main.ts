import { Serie } from "./serie.js";
import { series } from "./data.js";

let seriesBody: HTMLElement = document.getElementById("series") as HTMLElement;
const promedioTemporadas: HTMLElement = document.getElementById("AverageSeasons")!;
const url_serie: HTMLAnchorElement = document.getElementById("url") as HTMLAnchorElement;
const description_serie: HTMLElement = document.getElementById("description") as HTMLElement;
const serie_name: HTMLElement = document.getElementById("name") as HTMLElement;
const serie_image: HTMLImageElement= document.getElementById("image") as HTMLImageElement ;
const serie_details: HTMLElement = document.getElementById("details") as HTMLElement;

renderCoursesInTable(series);
promedioTemporadas.innerHTML = `${getAverageSeasons(series)}`

function renderCoursesInTable(series: Serie[]): void {
    series.forEach(x => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${x.id}</td>
                            <td>${x.name}</td>
                           <td>${x.channel}</td>
                           <td>${x.seasons}</td>`;
        trElement.onclick = () => mostrarDetallesDeLasSeries(x);
        seriesBody.appendChild(trElement);
    });
}

function getAverageSeasons(series: Serie[]): number {
    let AverageSeasons: number = 0;
    let TotalSeasons: number = 0;
    series.forEach((serie) => TotalSeasons = TotalSeasons + serie.seasons);
    AverageSeasons = TotalSeasons / series.length;
    return AverageSeasons;
  }

  function  mostrarDetallesDeLasSeries(serie: Serie): void {
    serie_image.src = serie.image;
    serie_name.textContent = serie.name;
    description_serie.textContent = serie.description;
    url_serie.href = serie.url;
    serie_details.style.display = 'block';
}

