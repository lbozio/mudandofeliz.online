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

export default function Bonus() {
  return (
    <div
      style={{ textAlign: "center", display: "flex", justifyContent: "center" }}
    >
      <Item>
        <Box>
          <Grid container spacing={2} padding={3}>
            <Grid item xs={12} md={12}>
              <Typography variant="h6">ESPECIAL</Typography>
              <br />

              <Typography color={"#4F9A68"} variant="h5">
                + 3 Bônus Exclusivos
              </Typography>
              <br />
              <Typography variant="subtitle1">
                Garantindo hoje seu acesso ao Livro Truque Da Banana Para Secar
                você irá garantir 3 bônus incríveis:
                <br /> O bônus Suporte Premium + Método Antiflacidez + Coleção
                Especial: 25 Receitas Deliciosas de forma TOTALMENTE gratuita!
              </Typography>
              <Typography variant="subtitle1">
                Enquanto as que simplesmente não conseguem emagrecer, possuem
                bactérias ruins que tornam a perda peso impossível e fazem você
                acumular cada vez mais gordura.
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <img src="bonus.png" alt="Bonus" width={400} />
              <Typography variant="subtitle1">
                1 Bônus exclusivo:{" "}
                <strong>
                  <s>(Valor R$ 197)</s>
                </strong>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Item>
    </div>
  );
}
