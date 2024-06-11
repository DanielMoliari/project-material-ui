import { Box } from "@mui/material"

interface ILayoutBaseDePaginaProps {
    children: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({children}) => {

    return (
        <Box>
            {children}
        </Box>
    )
}