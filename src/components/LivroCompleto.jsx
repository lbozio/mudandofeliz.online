import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  elevation: 8,
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  width: "80%",
}));

export default function LivroCompleto() {
  return (
    <div
      style={{ textAlign: "center", display: "flex", justifyContent: "center" }}
    >
      <Item>
        <Box>
          <Grid container spacing={2} padding={3}>
            <Grid item xs={12} md={6}>
              <img src="livro.png" alt="Livro" width={300} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography color={"#4F9A68"} variant="h5" fontWeight="bold">
                Livro completo
              </Typography>
              <br />
              <Typography variant="subtitle1">
                Se você já tentou emagrecer antes através de exercícios físicos,
                dietas restritivas ou através da abordagem de contagem de
                calorias, provavelmente você não conseguiu. Você não conseguirá
                perder peso através desses métodos comuns e isso tem um motivo.
                De acordo com uma pesquisa feita por cientistas, pessoas que
                conseguem perder peso possuem boas bactérias em seus organismos
                que facilitam a perda de peso.
              </Typography>
              <Typography variant="subtitle1">
                Enquanto as que simplesmente não conseguem emagrecer, possuem
                bactérias ruins que tornam a perda peso impossível e fazem você
                acumular cada vez mais gordura.
              </Typography>
              <Typography variant="subtitle1">
                Reuni no livro <strong>Protocolo Zero Barriga</strong>, o método especial que é capaz de eliminar completamente
                as bactérias ruins do seu organismo, e repovoá-lo novamente
                com bactérias boas, fazendo você ativar a queima de gordura
                automática 24 horas por dia.
                <br />{" "}
                <s>
                  <strong>(Valor R$ 297)</strong>
                </s>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Item>
    </div>
  );
}
