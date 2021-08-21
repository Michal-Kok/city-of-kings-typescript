import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fontSize: {
            header: string,
            xll: string,
            xl: string,
            l: string,
            m: string,
            s: string,
        }

        colors: {
            white: string,
            lightGrey: string,
            darkGrey: string,
            darkColor: string,
            black: string,
            green: string,
            lightBlue: string,
            pink: string,
            grey: string,
        },
    }
}