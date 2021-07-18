import { createStyles, makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) =>
    createStyles({
        container: {
            display: 'flex',
            width: '1200px',
            height: '100%',
        },
        imgContainer: {
            width: '600px',
            position: 'relative',
        },
        photo: {
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "top",
        },
        logo: {
            position: "absolute",
            top: '35px',
            left: '35px',
        },
        eslogan: {
            position: "absolute",
            bottom: '35px',
            right:'35px'
        },
        title: {
            fontWeight: '700',
            fontSize: '32px',
            lineHeight: '44px',
            letterSpacing: '0.02em',
            color: '#000000'
        },
        p: {
            maxWidth: '479px',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '-0.02em',
            color: '#000000',
        },
        formContainer: {
            width: '600px',
            height: '100%',
            padding: '20px 40px'
        }
    })
);
