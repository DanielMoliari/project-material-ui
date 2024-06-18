import {
  Box,
  Icon,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePaginaProps {
  children: React.ReactNode;
  titulo: string;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
  children,
  titulo,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        height={theme.spacing(12)}
        display="flex"
        alignItems="center"
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography variant="h5">{titulo}</Typography>
      </Box>
      <Box>Barra de ferramentas</Box>
      <Box>{children}</Box>
    </Box>
  );
};
