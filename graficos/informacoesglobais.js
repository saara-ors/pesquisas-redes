
import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede(149) {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(instagram,youtube,tik tok, pinterest, whatsap)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: instagram, youtube 
            y: 10, 6
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const laytout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: instagram
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: youtube,instagram,tiktok,whatssap,
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, laytout)
}

quantidadeUsuariosPorRede(instagram 109,tik tok 11, whatssap 2, youtube 6, pinterest 1)