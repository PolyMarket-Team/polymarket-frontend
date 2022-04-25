import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
    <Global
        styles={css`
            html,
            body,
            div,
            span,
            applet,
            object,
            iframe,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            blockquote,
            pre,
            a,
            abbr,
            acronym,
            address,
            big,
            cite,
            code,
            del,
            dfn,
            em,
            img,
            ins,
            kbd,
            q,
            s,
            samp,
            small,
            strike,
            strong,
            sub,
            sup,
            tt,
            var,
            b,
            u,
            i,
            center,
            dl,
            dt,
            dd,
            ol,
            ul,
            li,
            fieldset,
            form,
            label,
            legend,
            table,
            caption,
            tbody,
            tfoot,
            thead,
            tr,
            th,
            td,
            article,
            aside,
            canvas,
            details,
            embed,
            figure,
            figcaption,
            footer,
            header,
            hgroup,
            menu,
            nav,
            output,
            ruby,
            section,
            summary,
            time,
            mark,
            audio,
            input,
            textarea,
            video {
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font: inherit;
                vertical-align: baseline;
                box-sizing: border-box;
            }
            html {
                font-size: 62.5%;
                font-family: "Noto Sans KR", "sans-serif";
                body {
                    position: relative;
                    padding-bottom: 15rem;
                    min-height: 100vh;
                }
            }
            ol,
            ul {
                list-style: none;
            }
            a {
                background-color: transparent;
                text-decoration: none;
                outline: none;
                color: inherit;
                &:active,
                &:hover {
                    text-decoration: none;
                    color: inherit;
                    outline: 0;
                }
            }

            input {
                outline: none;
            }
        `}
    />
);
export default GlobalStyle;