import routeConfig from './routeConfig';
import { getSøknadRoute } from '../utils/routeUtils';

export enum StepID {
    'OPPLYSNINGER_OM_BARNET' = 'opplysninger-om-barnet',
    'ANSETTELSESFORHOLD' = 'arbeidsforhold',
    'TIDSROM' = 'tidsrom',
    'MEDLEMSSKAP' = 'medlemsskap',
    'LEGEERKLÆRING' = 'legeerklaering',
    'SUMMARY' = 'oppsummering'
}

export interface StepItemConfigInterface {
    pageTitle: string;
    stepTitle: string;
    index: number;
    nextStep?: StepID;
    backLinkHref?: string;
    buttonLabel?: string;
    stepIndicatorLabel: string;
}

export interface StepConfigInterface {
    [key: string]: StepItemConfigInterface;
}

export const stepConfig: StepConfigInterface = {
    [StepID.OPPLYSNINGER_OM_BARNET]: {
        pageTitle: 'Pleiepengesøknad - opplysninger om barnet',
        stepTitle: 'Barn',
        stepIndicatorLabel: 'Om barnet',
        index: 0,
        nextStep: StepID.TIDSROM,
        backLinkHref: routeConfig.WELCOMING_PAGE_ROUTE,
        buttonLabel: 'Fortsett'
    },
    [StepID.TIDSROM]: {
        pageTitle: 'Pleiepengesøknad',
        stepTitle: 'Egenerklæring',
        stepIndicatorLabel: 'Tidsrom',
        index: 1,
        nextStep: StepID.ANSETTELSESFORHOLD,
        backLinkHref: getSøknadRoute(StepID.OPPLYSNINGER_OM_BARNET),
        buttonLabel: 'Fortsett'
    },
    [StepID.ANSETTELSESFORHOLD]: {
        pageTitle: 'Pleiepengesøknad - opplysninger om ditt arbeidsforhold',
        stepTitle: 'Arbeidsforhold',
        stepIndicatorLabel: 'Om ditt arbeidsforhold',
        index: 2,
        nextStep: StepID.MEDLEMSSKAP,
        backLinkHref: getSøknadRoute(StepID.TIDSROM),
        buttonLabel: 'Fortsett'
    },
    [StepID.MEDLEMSSKAP]: {
        pageTitle: 'Pleiepengesøknad - medlemsskap',
        stepTitle: 'Utenlandsopphold',
        stepIndicatorLabel: 'Om dine utenlandsopphold',
        index: 3,
        nextStep: StepID.LEGEERKLÆRING,
        backLinkHref: getSøknadRoute(StepID.ANSETTELSESFORHOLD),
        buttonLabel: 'Fortsett'
    },
    [StepID.LEGEERKLÆRING]: {
        pageTitle: 'Pleiepengesøknad - legeerklæring',
        stepTitle: 'Last opp legeerklæring',
        stepIndicatorLabel: 'Last opp din legeerklæring',
        index: 4,
        nextStep: StepID.SUMMARY,
        backLinkHref: getSøknadRoute(StepID.MEDLEMSSKAP),
        buttonLabel: 'Fortsett'
    },
    [StepID.SUMMARY]: {
        pageTitle: 'Pleiepengesøknad - oppsummering',
        stepTitle: 'Oppsummering',
        stepIndicatorLabel: 'Oppsummering',
        index: 5,
        backLinkHref: getSøknadRoute(StepID.LEGEERKLÆRING),
        buttonLabel: 'Send inn søknaden'
    }
};
