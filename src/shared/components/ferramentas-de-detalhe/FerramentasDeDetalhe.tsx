import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = "Novo",

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
}) => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={1}
      display="flex"
      gap={1}
      alignItems="center"
      component={Paper}
    >
      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
        <Button
          color="primary"
          variant="contained"
          disableElevation
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>}
        >
          <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
          Salvar
          </Typography>
        </Button>
      )}

      {mostrarBotaoSalvarCarregando &&
      (<Skeleton width={110} height={60} />)
      }

      {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando) && (
        <Button
          color="primary"
          variant="outlined"
          disableElevation
          onClick={aoClicarEmSalvarEFechar}
          startIcon={<Icon>save</Icon>}
        >
          <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
          Salvar e voltar
          </Typography>
        </Button>
      )}

      {mostrarBotaoSalvarEFecharCarregando &&
      (<Skeleton width={180} height={60} />)
      }

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
        <Button
          color="primary"
          variant="outlined"
          disableElevation
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>}
        >
          <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
          Apagar
          </Typography>
        </Button>
      )}

      {mostrarBotaoApagarCarregando &&
      (<Skeleton width={110} height={60} />)
      }

      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (
        <Button
          color="primary"
          variant="outlined"
          disableElevation
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>}
        >
          <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
          {textoBotaoNovo}
          </Typography>
        </Button>
      )}

      {mostrarBotaoNovoCarregando &&
      (<Skeleton width={100} height={60} />)
      }

      <Divider variant="middle" orientation="vertical" />
      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
        <Button
          color="primary"
          variant="outlined"
          disableElevation
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
          Voltar
          </Typography>
        </Button>
      )}

      {mostrarBotaoVoltarCarregando &&
      (<Skeleton width={110} height={60} />)
      }
    </Box>
  );
};
