import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function TextoDownsell1() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "80%",
        }}
      >
        <Box>
          <br />
          <img src="/downsell1/stop.png" alt="stop" />
          <Typography variant="h4" fontWeight="bold">
            OK. ENTENDI! VOCÊ ACHOU 67 REAIS MUITO CARO, CERTO?
          </Typography>
          <br />
          <Typography variant="h5" fontWeight="semibold">
            Bem, com a sua permissão, eu gostaria de te oferecer algo de ainda
            mais valor agora, porque eu realmente quero que você obtenha os
            resultados que você merece!
          </Typography>
          <br />

          <Typography variant="subtitle">
            Portanto, vou fazer desta a decisão mais fácil que você já tomou na
            sua vida... A ponto de se sentir realmente mal em deixar passar...
          </Typography>
          <br />
          <br />

          <Typography variant="h5" fontWeight="bold">
            E como farei isso? Aqui está como...
          </Typography>
          <br />

          <Typography variant="subtitle" fontWeight="bold">
            Parece loucura...
          </Typography>
          <br />
          <br />

          <Typography variant="subtitle">
            Mas <strong>VOU DIMINUIR</strong> o preço do Método Antiflacidez
            para algo ridículo e adicionar + 1 PROGRAMA ESPECIAL no seu
            pacote... Mas somente se você optar por aceitar esta oferta única
            AGORA.
          </Typography>
          <br />
          <br />

          <Typography variant="h5" fontWeight="bold">
            Por que estou fazendo isso?
          </Typography>
          <br />
          <Typography variant="subtitle">
            Porque eu não quero que algo como o preço seja a razão pela qual o
            lindo corpo que você merece possa escorregar por entre os dedos para
            sempre ... <br />
            <br />E além disso, acredito em entregar e dar a você tanto valor
            que você ficará muito grata por realmente usar esses métodos para
            mudar a sua vida! <br />
            <br />O objetivo aqui é ajudar as mulheres em todos os lugares a
            transformarem suas vidas para sempre.
          </Typography>
        </Box>
      </div>
    </div>
  );
}
