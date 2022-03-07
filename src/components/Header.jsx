import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { CurrencyState } from "../CurrencyContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

function Header() {
  const classes = useStyles();

  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  const { currency, setCurrency } = CurrencyState()

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      type: "dark"
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate(`/`)}
              variant="h6"
              className={classes.title}
            >
              Currency Tracker App
            </Typography>
            <Select
              variant="outlined"
              id="currency-select"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"} key={"USD"}>
                USD
              </MenuItem>
              <MenuItem value={"HUF"} key={"HUF"}>
                HUF
              </MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
