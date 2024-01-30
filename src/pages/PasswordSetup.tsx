/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {FC, useState} from "react"; //useContext
import {Stack, Typography} from "@mui/material";
import Login from "../assets/login_lottie.json";
import useTelegramMainButton from "../hooks/telegram/useTelegramMainButton.ts";
// import {EncryptionManagerContext} from "../managers/encryption.tsx";
import TelegramTextField from "../components/TelegramTextField.tsx";
import LottieAnimation from "../components/LottieAnimation.tsx";
// import {useNavigate} from "react-router-dom";
// import bcrypt from "bcryptjs";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import useTelegramHaptics from "../hooks/telegram/useTelegramHaptics.ts";
// import axios from "axios";

{/* <Typography color="text.secondary" fontSize="small" align="center" sx={{paddingY: theme.spacing(1)}}> */}
{/* MindMint<br/>
Version: {APP_VERSION}<br/>
<Link color="inherit" target="_blank" rel="noopener" href={APP_HOMEPAGE}>
    GitHub repository
</Link>
</Typography> */}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;


const PasswordSetup: FC<{change?: boolean}> = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    // const { executeRecaptcha } = useGoogleReCaptcha();
    // const [, setGToken] = useState<string | null>(""); 
    // const [, setIsSubmitting] = useState(false);
    const { impactOccurred, notificationOccurred } = useTelegramHaptics();
    // const navigate = useNavigate();

    // const encryptionManager = useContext(EncryptionManagerContext);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    // window.Telegram.WebApp.showPopup("HELLO","HERE WE ARE");

    const isValidEmail = (email: string): boolean => {
        // eslint-disable-next-line no-control-regex
        const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;  
        return emailRegex.test(email);
      };

    useTelegramMainButton(()=>{
        return handleSubmit();
        // encryptionManager?.createPassword(password);
    }, "Login",!isValidEmail(email));

    const handleSubmit = () => {
        impactOccurred("medium");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        window.Telegram.WebApp.showPopup({message: `🎉 Welcome to our channel ${window.Telegram?.WebAppUser?.username} 🍾`},()=>{
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            window.Telegram.WebApp.openTelegramLink(`https://t.me/BotFather`);
            notificationOccurred("success");
        });
        return true;
        // if (!executeRecaptcha) return false;
        //     const gToken = await executeRecaptcha();
        //     try {
        //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        //     const salt = bcrypt.genSaltSync(10);
        //     const timestamp = new Date().getTime();
        //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        //     const hashCookie = bcrypt.hashSync(`${timestamp}${email}`, salt);
        //     const response = await axios.post(
        //         `${process.env.MINDMINT_API_BASE_URL}user/login`,
        //         {
        //         email,
        //         password,
        //         gRecaptchaResponse: gToken,
        //         },
        //         {
        //         headers: {
        //             // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        //             "device-id": hashCookie,
        //         },
        //         }
        //     );
        //     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        //     if(response.data?.data?.accessToken?.token){
        //         // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        //         window.Telegram.WebApp.openTelegramLink(`https://t.me/BotFather`);
        //         return true;
        //     }
        //     } catch (error) {
        //         notificationOccurred("warning");
        //         setError(true);
        //         // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        //         window.Telegram.WebApp.showAlert(error);
        //         return false;
        //     }
        //     finally {
        //         setIsSubmitting(false);
        //     }
    }

    // const handleLoaded = () => {
    //     // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unnecessary-condition
    //     window?.grecaptcha?.ready(() => {
    //         // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    //         window.grecaptcha.execute(process.env.GOOGLE_CAPTCHA_SECRET, { action: "homepage" }).then((token: string | null) => {
    //         setGToken(token);
    //         });
    //     });
    // };

    // useEffect(() => {
    //     // Add reCaptcha
    //     const script = document.createElement("script");
    //     script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.GOOGLE_CAPTCHA_SECRET}`;
    //     script.addEventListener("load", handleLoaded);
    //     document.body.appendChild(script);
    // }, []);
    
    return <>
        <Stack spacing={2} alignItems="center">
            <LottieAnimation
                animationData={Login}  
            />
            <Typography variant="h5" fontWeight="bold" align="center">
                Password setup
            </Typography>
            <Typography variant="subtitle2" align="center">
                Please enter your credential to procceed.
            </Typography>
            <TelegramTextField
                fullWidth
                type="text"
                label="Email"
                value={email}
                error={email ? !isValidEmail(email) : false}
                helperText={!isValidEmail(email) ? "Provide a valid email" : null}
                onChange={e => {
                    setEmail(e.target.value);
                    setError(false);
                }}
            />
            <TelegramTextField
                fullWidth
                type="password"
                label="Password"
                value={password}
                error={error}
                helperText={error ? "Email or Password is not correct" : null}
                onChange={e => {
                    setPassword(e.target.value);
                    setError(false);
                }}
            />
        </Stack>
    </>;
}

export default PasswordSetup;