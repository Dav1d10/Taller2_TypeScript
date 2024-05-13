import { series } from "./data.js";

var seriesBody = document.getElementById("series");
var promedioTemporadas = document.getElementById("AverageSeasons");
var url_serie = document.getElementById("url");
var description_serie = document.getElementById("description");
var serie_name = document.getElementById("name");
var serie_image = document.getElementById("image");
var serie_details = document.getElementById("details");

renderSeriesInTable(series);
promedioTemporadas.innerHTML = "".concat(getAverageSeasons(series));

function renderSeriesInTable(series) {
    series.forEach(function (x) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight: bold;\">".concat(x.id, "</td>\n<td style=\"color: rgb(49, 171, 255);\">").concat(x.name, "</td>\n<td>").concat(x.channel, "</td>\n<td>").concat(x.seasons, "</td>");
        trElement.onclick = function () { mostrarDetallesDeLasSeries(x); };
        seriesBody.appendChild(trElement);
    });
}

function getAverageSeasons(series) {
    var AverageSeasons = 0;
    var TotalSeasons = 0;
    series.forEach(function (serie) { return TotalSeasons = TotalSeasons + serie.seasons; });
    AverageSeasons = TotalSeasons / series.length;
    return AverageSeasons;
}

function mostrarDetallesDeLasSeries(serie) {
    serie_image.src = serie.image;
    serie_name.textContent = serie.name;
    description_serie.textContent = serie.description;
    url_serie.href = serie.url;
    serie_details.style.display = 'block';
}