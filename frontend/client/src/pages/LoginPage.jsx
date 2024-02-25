import {Box, useTheme, useMediaQuery, Typography} from "@mui/material";
import Form from "../components/Form";

const LoginPage = () => {
  const theme = useTheme;
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return(
    <Box>
    <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
       <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
        >
          SocialNETia
        </Typography>
    </Box>
    <Box width={isNonMobileScreens ? "50" : "93"} p="2rem" m="2rem auto" borderRadios="1.5rem" backgroundColor={theme.palette.background.alt}>
<Typography fontWeight="500" variant="h5" sx={{mb: "1.5rem"}}>
Welcome to SocialNETia, the Social surroundings for Sociopaths!
</Typography>
<Form/>
    </Box>
    </Box>
  )
  }

  export default LoginPage;
