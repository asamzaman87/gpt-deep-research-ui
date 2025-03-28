"use client";
import { useThemeContext } from "@/components/context/theme-context";
import DownloadIcon from "@mui/icons-material/Download";
import {
  Alert,
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ToggleColorMode } from "../toggle-color-mode";

const EXT_URL = {
  chrome: "https://chromewebstore.google.com/detail/gpt-deep-research-instant/ioahhpkglpiegadnjliggcdbdbbchpmk",
  firefox: "https://addons.mozilla.org/en-US/firefox/addon/gpt-reader/"
}
const DownloadUI = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box
    id="download-header"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Box sx={{ float: "right", pt: 2, pr: 2 }}>
        <ToggleColorMode mode={mode} toggleColorMode={toggleTheme} />
      </Box>
      <Container
        id="Creators"
        sx={{
          pt: { xs: 10 },
          pb: { xs: 8, sm: 12 },
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Image
            src={"/images/logo.png"}
            width={150}
            height={150}
            alt="gpt-deep-research-logo"
          />
          <Typography component="h2" variant="h3" color="text.primary">
            GPT Deep Research
          </Typography>

          <Typography variant="h5" color="text.secondary">
            {`Unlock In-Depth AI Research Instantly with ChatGPT-Powered Insights`}
          </Typography>
          <Grid container my={1} spacing={5} alignItems={"center"}>
            <Grid item xs={12} md={7}>
              <Typography
                variant="h5"
                color="text.primary"
                textAlign={"left"}
                py={2}
              >
                {`Explore Any Topic Thoroughly with AI-Generated Outlines and Deep Dives—For Free!`}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                textAlign={"left"}
              >
                {`Need to research a topic in detail without spending hours digging through endless tabs and sources? GPT Deep Research uses the power of ChatGPT to generate a smart outline and then dives into each section individually—providing you with structured, accurate, and in-depth insights in seconds. Whether you're writing a paper, analyzing a complex subject, preparing a report, or simply exploring a new topic, this extension delivers well-organized, reliable content tailored to your needs—all with speed, clarity, and control.`}
              </Typography>

              <Box
                py={3}
                display={"flex"}
                width={"100%"}
                alignItems={"center"}
                gap={1}
              >
                <Button
                  href={EXT_URL.chrome}
                  target="_blank"
                  color="success"
                  variant={"contained"}
                  sx={{
                    width: { md: "320px", xs: "100%" },
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    fontWeight: 700,
                    color: "#fff",
                    height: "fit-content",
                  }}
                >
                  <Image
                    src="/images/chrome.png"
                    alt="chrome"
                    width={20}
                    height={20}
                  />
                  GET EXTENSION FOR CHROME
                </Button>

                <Button
                  href={EXT_URL.firefox}
                  target="_blank"
                  color="success"
                  variant={"contained"}
                  sx={{
                    width: { md: "320px", xs: "100%" },
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontWeight: 700,
                    color: "#fff",
                    height: "fit-content",
                  }}
                >
                  <Image
                    src="/images/firefox.png"
                    alt="firefox"
                    width={20}
                    height={20}
                  />
                  GET EXTENSION FOR FIREFOX
                </Button>
                {/* <Box ml={2}>
                  <Rating
                    name="read-only"
                    value={selected?.rating}
                    readOnly
                    size="large"
                  />
                  <p> {selected?.ratingText}</p>
                </Box> */}
              </Box>
              
                <Alert sx={{ mb: 2 }} severity="info">Note: The extension may not work consistently work for you due to a ChatGPT update. If this is the case for you, then expect it to be resolved in the coming days.</Alert>
              
              <Box textAlign={"left"}>
                <Link
                  variant="subtitle2"
                  href="https://docs.google.com/document/d/156R5lSgGQEuJKKS1VjCQE8q9XFq7VH4IabgbLeruV_8/edit?usp=sharing"
                >
                  {`By clicking the link above, you agree to our Terms of Use.`}
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card>
                <CardContent>
                  <Typography component="h2" variant="h5" color="text.primary">
                    How It Works
                  </Typography>
                  <CardMedia
                    component={"iframe"}
                    height={300}
                    src="https://www.youtube.com/embed/LyAkwL1U9SU"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sx={{ mt: 1, borderRadius: 1, border: 0 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DownloadUI;
