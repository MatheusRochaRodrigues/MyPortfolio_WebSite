import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secundary: string;
            background: string;
            text: string;
            sub_text: string;
            card: string;
            link: string;
            bTextBef: string;
            bTextAft: string;
            border: string;
            foot: string;
        }
    }
}